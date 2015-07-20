/**
 Zwibbler
 
 Copyright 2013 Hanov Solutions Inc. All Rights Reserved. This software is
 NOT open source. For licensing information, contact the author.
 
 steve.hanov@gmail.com
 
 @license
 */
(function() {
    "use strict";
    var n;
    function aa(a, b, c, d, e) {
        this.ib = a || "transparent";
        this.left = b || 0;
        this.top = c || 0;
        this.right = d || 0;
        this.bottom = e || 0;
        this.zIndex = 1;
        this.insertBefore = null
    }
    aa.prototype.Ra = function() {
        this.aa.remove()
    };
    aa.prototype.show = function(a) {
        this.aa = p("<div>");
        this.aa.$("position", "fixed");
        this.aa.$("background", this.ib);
        this.aa.$("opacity", "0.25");
        this.aa.$("left", "" + this.left + "px");
        this.aa.$("top", "" + this.top + "px");
        this.aa.$("right", "" + this.right + "px");
        this.aa.$("bottom", "" + this.bottom + "px");
        this.aa.$("display", "none");
        this.aa.click(function(b) {
            a(b)
        });
        this.insertBefore ? (this.aa.$("z-index", "" + this.zIndex), ba(p(this.aa), this.insertBefore)) : (this.aa.$("z-index", "" + this.zIndex), p("body").append(this.aa));
        ca(this.aa)
    };
    var da = {}, ea = {};
    function fa(a) {
        for (var b = ["base64"], c = 0; c < b.length; c++)
            a = da[b[c]](a);
        return a
    }
    da.base64 = function(a) {
        for (var b = "", c, d, e, f, g, h, k = 0; k < a.length; )
            c = a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, h = e & 63, isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h);
        return b
    };
    ea.base64 = function(a) {
        var b = "", c, d, e, f, g, h = 0, k = {A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25, a: 26, b: 27, c: 28, d: 29, e: 30, f: 31, g: 32, h: 33, i: 34, j: 35, k: 36, l: 37, m: 38, n: 39, o: 40, p: 41, q: 42, r: 43, s: 44, t: 45, u: 46, v: 47, w: 48, x: 49, y: 50, z: 51, 0: 52, 1: 53, 2: 54, 3: 55, 4: 56, 5: 57, 6: 58, 7: 59, 8: 60, 9: 61, "+": 62, "/": 63, "=": 64};
        for (a = a.replace(/[^A-Za-z0-9\-_\=\+\/]/g, ""); h < a.length; )
            c = k[a.charAt(h++)], d = k[a.charAt(h++)], f = k[a.charAt(h++)], g = k[a.charAt(h++)], c =
                    c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 !== f && (b += String.fromCharCode(d)), 64 !== g && (b += String.fromCharCode(e));
        return b
    };
    da.ascii85 = function(a) {
        for (var b = "", c, d, e, f, g, h, k, l, m = 0; m < a.length; )
            c = a.charCodeAt(m++), d = a.charCodeAt(m++), e = a.charCodeAt(m++), f = a.charCodeAt(m++), g = (c << 24 | d << 16 | e << 8 | f) >>> 0, c = (g / 52200625 | 0) % 85 + 33, h = (g / 614125 | 0) % 85 + 33, k = (g / 7225 | 0) % 85 + 33, l = (g / 85 | 0) % 85 + 33, g = g % 85 + 33, (118 < c || 118 < h || 118 < k || 118 < l || 118 < g) && console.log(c, h, k, l, g), (33 > c || 33 > h || 33 > k || 33 > l || 33 > g) && console.log(c, h, k, l, g), b += String.fromCharCode(c) + String.fromCharCode(h), isNaN(d) || (b += String.fromCharCode(k), isNaN(e) || (b += String.fromCharCode(l),
                    isNaN(f) || (b += String.fromCharCode(g))));
        return b + "~>"
    };
    da.utf8 = function(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
        }
        return b
    };
    ea.utf8 = function(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            127 >= d ? b += String.fromCharCode(d) : 2047 >= a ? (b += String.fromCharCode(192 | a >> 6), b += String.fromCharCode(128 | a & 63)) : 65535 >= a ? (b += String.fromCharCode(224 | a >> 12), b += String.fromCharCode(128 | a >> 6 & 63), b += String.fromCharCode(128 | a & 63)) : 1114111 >= a ? (b += String.fromCharCode(240 | a >> 18), b += String.fromCharCode(128 | a >> 12 & 63), b += String.fromCharCode(128 | a >> 6 & 63), b += String.fromCharCode(128 | a & 63)) : b += String.fromCharCode(63)
        }
        return b
    };
    ea.utf8 = function(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
        }
        return b
    };
    da.hex = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            16 > d && b.push("0");
            b.push(d.toString(16))
        }
        return b.join("")
    };
    da.sha1 = function(a) {
        var b = [1518500249, 1859775393, 2400959708, 3395469782];
        a += String.fromCharCode(128);
        for (var c = Math.ceil((a.length / 4 + 2) / 16), d = Array(c), e = 0; e < c; e++) {
            d[e] = Array(16);
            for (var f = 0; 16 > f; f++)
                d[e][f] = a.charCodeAt(64 * e + 4 * f) << 24 | a.charCodeAt(64 * e + 4 * f + 1) << 16 | a.charCodeAt(64 * e + 4 * f + 2) << 8 | a.charCodeAt(64 * e + 4 * f + 3)
        }
        d[c - 1][14] = 8 * (a.length - 1) / Math.pow(2, 32);
        d[c - 1][14] = Math.floor(d[c - 1][14]);
        d[c - 1][15] = 8 * (a.length - 1) & 4294967295;
        a = 1732584193;
        for (var f = 4023233417, g = 2562383102, h = 271733878, k = 3285377520, l =
                Array(80), m, q, r, s, u, e = 0; e < c; e++) {
            for (var v = 0; 16 > v; v++)
                l[v] = d[e][v];
            for (v = 16; 80 > v; v++)
                m = l[v - 3] ^ l[v - 8] ^ l[v - 14] ^ l[v - 16], l[v] = m << 1 | m >>> 31;
            m = a;
            q = f;
            r = g;
            s = h;
            u = k;
            for (v = 0; 80 > v; v++) {
                var y = Math.floor(v / 20), A;
                a:{
                    switch (y) {
                        case 0:
                            A = q & r ^ ~q & s;
                            break a;
                        case 1:
                            A = q ^ r ^ s;
                            break a;
                        case 2:
                            A = q & r ^ q & s ^ r & s;
                            break a;
                        case 3:
                            A = q ^ r ^ s;
                            break a
                    }
                    A = void 0
                }
                y = (m << 5 | m >>> 27) + A + u + b[y] + l[v] & 4294967295;
                u = s;
                s = r;
                r = q << 30 | q >>> 2;
                q = m;
                m = y
            }
            a = a + m & 4294967295;
            f = f + q & 4294967295;
            g = g + r & 4294967295;
            h = h + s & 4294967295;
            k = k + u & 4294967295
        }
        return String.fromCharCode(a >>
                24 & 255) + String.fromCharCode(a >> 16 & 255) + String.fromCharCode(a >> 8 & 255) + String.fromCharCode(a >> 0 & 255) + String.fromCharCode(f >> 24 & 255) + String.fromCharCode(f >> 16 & 255) + String.fromCharCode(f >> 8 & 255) + String.fromCharCode(f >> 0 & 255) + String.fromCharCode(g >> 24 & 255) + String.fromCharCode(g >> 16 & 255) + String.fromCharCode(g >> 8 & 255) + String.fromCharCode(g >> 0 & 255) + String.fromCharCode(h >> 24 & 255) + String.fromCharCode(h >> 16 & 255) + String.fromCharCode(h >> 8 & 255) + String.fromCharCode(h >> 0 & 255) + String.fromCharCode(k >> 24 & 255) + String.fromCharCode(k >>
                16 & 255) + String.fromCharCode(k >> 8 & 255) + String.fromCharCode(k >> 0 & 255)
    };
    function t(a, b) {
        if (!a)
            throw b || "Assertion failed";
    }
    function ga(a) {
        t("number" === typeof a, "Expected a number")
    }
    function ha(a) {
        return"object" === typeof a && "[object Array]" === Object.prototype.toString.apply(a)
    }
    function ia(a) {
        return"string" === typeof a
    }
    function w(a) {
        return"number" === typeof a
    }
    ;
    function ja(a) {
        this.keys = {};
        1 === arguments.length && this.add(arguments[0]);
        1 === arguments.length && "object" === typeof arguments[0] && this.add(arguments[0])
    }
    ja.prototype = {contains: function(a) {
            return a in this.keys
        }, add: function(a) {
            var b, c;
            if ("string" === typeof a || "number" === typeof a)
                this.keys[a] = !0;
            else if ("object" === typeof a)
                if ("[object Array]" === Object.prototype.toString.apply(a))
                    for (c = 0; c < a.length; c++)
                        b = a[c], this.keys[b] = !0;
                else
                    for (b in a)
                        a.hasOwnProperty(b) && (this.keys[b] = !0);
            else
                return t(!1, "Arg must be an array")
        }, remove: function(a) {
            delete this.keys[a]
        }, Nb: function() {
            var a, b;
            b = [];
            for (a in this.keys)
                this.keys.hasOwnProperty(a) && b.push(a);
            return b
        },
        clear: function() {
            this.keys = {}
        }};
    function ka(a) {
        var b, c;
        c = [];
        for (b in a.keys)
            a.keys.hasOwnProperty(b) && c.push(parseFloat(b));
        return c
    }
    ;
    var la;
    try {
        la = Function("return this")()
    } catch (ma) {
        la = window
    }
    var na = {}, oa = [];
    function x(a, b) {
        !1 === b && (na[a] = !0);
        return function(b) {
            var d = arguments, e = [], f = d[0];
            if (!na[a]) {
                var g = f.split("%s");
                e.push(g[0]);
                for (f = 1; f < g.length; f++)
                    f - 1 >= d.length - 1 ? e.push("<too few args>") : "string" === typeof d[f] || "number" === typeof d[f] ? e.push(d[f]) : void 0 === d[f] ? e.push("(undefined)") : null === d[f] ? e.push("(null)") : d[f]instanceof Object && d[f].toString instanceof Function ? e.push(d[f].toString()) : e.push(JSON.stringify(d[f])), e.push(g[f]);
                d = e.join("");
                for (f = 0; f < oa.length; f++)
                    oa[f](a, d)
            }
        }
    }
    function pa(a) {
        oa.push(a)
    }
    "console"in la || (la.console = {log: function() {
            for (var a = [], b = 0; b < arguments.length; b++)
                try {
                    a.push(JSON.stringify(arguments[b]))
                } catch (c) {
                    a.push(c.toString())
                }
            for (b = 0; b < oa.length; b++)
                oa[b]("Console", a.join(""))
        }}, la.console.error = la.console.log);
    function qa() {
        this.length = 0
    }
    x("JQUERY");
    var ra, sa = /\s+/, ta = /^[\s\xA0]+/, ua = /[\s\xA0]+$/;
    function va(a, b, c) {
        a = a.getElementsByTagName(c);
        for (c = 0; c < a.length; c++)
            b[c] = a[c];
        b.length = a.length
    }
    function wa(a) {
        var b = /#(.*)$/, c = /\.(.*)$/, d = /^<\s*([a-zA-Z0-9]+).*>$/, e = /^([A-Za-z]+)$/, f = new qa, g;
        try {
            g = ("object" === typeof HTMLElement ? a instanceof HTMLElement : "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName || 3 === a.nodeType) || a === window || a === document || a === document.body || a instanceof Element
        } catch (h) {
            g = !1
        }
        if (g)
            f[0] = a, f.length = 1;
        else {
            if (a instanceof qa)
                return a;
            if (null !== (b = b.exec(a)))
                a = document.getElementById(b[1]), null !== a && (f[0] = a, f.length = 1);
            else if (null !== (b = d.exec(a)))
                f[0] =
                        document.createElement(b[1]), f.length = 1;
            else if (null !== (b = c.exec(a))) {
                a = document.$h(b[1]);
                for (c = 0; c < a.length; c++)
                    f[c] = a[c];
                f.length = a.length
            } else if (null !== (b = e.exec(a)))
                va(document, f, b[1]);
            else
                throw console.log(a), "Error: can't parse selector: " + a + " (" + a.nodeType;
        }
        return f
    }
    qa.prototype = {Ra: function() {
            for (var a = 0; a < this.length; a++)
                this[a].style.display = "none";
            return this
        }, show: function() {
            for (var a = 0; a < this.length; a++)
                this[a].style.display = "block";
            return this
        }, append: function(a) {
            a = wa(a);
            if (0 < this.length)
                for (var b = 0; b < a.length; b++)
                    this[0].appendChild(a[b]);
            return this
        }, remove: function() {
            for (var a = 0; a < this.length; a++)
                this[a].parentNode && this[a].parentNode.removeChild(this[a]);
            return this
        }, empty: function() {
            for (var a = 0; a < this.length; a++)
                for (; null !== this[a].firstChild; )
                    this[a].removeChild(this[a].firstChild);
            return this
        }, text: function(a) {
            for (var b = 0; b < this.length; b++) {
                for (; null !== this[b].firstChild; )
                    this[b].removeChild(this[b].firstChild);
                this[b].appendChild(document.createTextNode(a))
            }
            return this
        }, width: function() {
            if (0 < this.length) {
                if (1 === arguments.length) {
                    for (var a = 0; a < this.length; a++)
                        this[a].style.width = "" + arguments[0] + "px";
                    return this
                }
                return this[0] === window ? this[0].innerWidth || document.documentElement.clientWidth : this[0].clientWidth
            }
            return 0
        }, height: function() {
            if (0 < this.length) {
                if (1 === arguments.length) {
                    for (var a =
                            0; a < this.length; a++)
                        this[a].style.height = "" + arguments[0] + "px";
                    return this
                }
                return this[0] === window ? this[0].innerHeight || document.documentElement.clientHeight : this[0].clientHeight
            }
            return 0
        }, outerWidth: function() {
            return 0 < this.length ? this[0].offsetWidth : 0
        }, outerHeight: function() {
            return 0 < this.length ? this[0].offsetHeight : 0
        }, offset: function(a) {
            if (a) {
                if (0 < this.length) {
                    var b = p(this[0].parentNode).offset();
                    this[0].style.left = a.left - b.left + "px";
                    this[0].style.top = a.top - b.top + "px"
                }
            } else {
                if (0 < this.length) {
                    a =
                            this[0].getBoundingClientRect();
                    var c = b = 0;
                    "pageYOffset"in window ? (b = window.pageXOffset, c = window.pageYOffset) : (b = document.body.scrollLeft, c = document.body.scrollTop);
                    return{top: a.top + c, left: a.left + b}
                }
                return{left: 0, top: 0}
            }
        }, La: function() {
            return this.length ? wa(this[0].cloneNode(!0)) : new qa
        }, find: function(a) {
            var b = new qa;
            this.length && va(this[0], b, a);
            return b
        }, Sa: function(a, b) {
            if (2 === arguments.length) {
                for (var c = 0; c < this.length; c++)
                    this[c].setAttribute(a, b);
                return this
            }
            return 0 < this.length ? this[0].getAttribute(a) :
                    ""
        }, Bb: function(a) {
            for (var b = 0; b < this.length; b++)
                a(this[b])
        }, focus: function() {
            0 < this.length && this[0].focus();
            return this
        }, blur: function() {
            0 < this.length && this[0].blur();
            return this
        }, $: function(a, b) {
            var c = a.split("-");
            a = c[0];
            for (var d = 1; d < c.length; d++)
                a = "ms" !== c[d] ? a + (c[d].substr(0, 1).toUpperCase() + c[d].substr(1)) : a + c[d];
            if (2 === arguments.length) {
                for (d = 0; d < this.length; d++)
                    this[d].style[a] = "" + b;
                return this
            }
            return this[0].currentStyle ? this[0].currentStyle[a] : window.getComputedStyle ? window.getComputedStyle(this[0],
                    null)[a] : this[0].style[a]
        }, on: function(a, b) {
            window.addEventListener ? this.Bb(function(c) {
                b.lf = function(a) {
                    a.vb = a;
                    "which"in a || (a.which = a.button);
                    return b.call(c, a)
                };
                c.addEventListener(a, b.lf, !1)
            }) : this.Bb(function(c) {
                c.attachEvent("on" + a, function(a) {
                    a.vb = a;
                    a.which = a.button;
                    a.pageX = a.clientX;
                    a.pageY = a.clientY;
                    a.preventDefault = function() {
                        a.returnValue = !1
                    };
                    a.stopPropagation = function() {
                        a.cancelBubble = !0
                    };
                    return b.call(c, a)
                })
            });
            return this
        }, bind: function(a, b) {
            return this.on(a, b)
        }, wh: function(a, b) {
            b.lf &&
                    (b = b.lf);
            window.addEventListener && this.Bb(function(c) {
                c.removeEventListener(a, b, !1)
            });
            return this
        }, click: function(a) {
            return this.on("click", a)
        }, xf: function(a) {
            return this.on("change", a)
        }, resize: function(a) {
            return this.on("resize", a)
        }};
    function ca(a) {
        for (var b = 0; b < a.length; b++)
            a[b].style.display = "block"
    }
    function xa(a, b, c) {
        ya(za(a, b), c)
    }
    function ya(a, b) {
        a.on("mouseout", b)
    }
    function za(a, b) {
        return a.on("mouseover", b)
    }
    function Aa(a, b) {
        a.on("dblclick", b)
    }
    function Ba(a, b) {
        a.on("mousemove", b)
    }
    function Ca(a, b) {
        a.on("mouseup", b)
    }
    function Da(a, b) {
        a.on("mousedown", b)
    }
    function Ea(a, b) {
        a.on("keydown", b)
    }
    function Fa() {
        var a = p("<input>").Sa("type", "button");
        a[0].value = "OK";
        return a
    }
    function Ga(a, b) {
        if (b && "string" === typeof b)
            for (var c = (b || "").split(sa), d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                if (1 === f.nodeType)
                    if (f.className) {
                        for (var g = " " + f.className + " ", h = f.className, k = 0, l = c.length; k < l; k++)
                            0 > g.indexOf(" " + c[k] + " ") && (h += " " + c[k]);
                        f.className = ra.trim(h)
                    } else
                        f.className = b
            }
        return a
    }
    function Ha(a) {
        for (var b = 0; b < a.length; b++)
            a[b].removeAttribute("id");
        return a
    }
    function Ia(a, b) {
        for (var c = 0; c < a.length; c++)
            a[c].innerHTML = b;
        return a
    }
    function Ja(a) {
        a.Bb(function(a) {
            var c;
            document.createEventObject ? (c = document.createEventObject(), a.fireEvent("onmousedown", c)) : (c = document.createEvent("HTMLEvents"), c.initEvent("mousedown", !0, !0), a.dispatchEvent(c))
        })
    }
    function ba(a, b) {
        b = wa(b);
        0 < a.length && 0 < b.length && b[0].parentNode.insertBefore(a[0], b[0])
    }
    ra = function(a) {
        return wa(a)
    };
    ra.trim = function(a) {
        return null === a ? "" : a.toString().replace(ta, "").replace(ua, "")
    };
    ra.zg = function(a) {
        var b = a.url || "", c = a.type || "GET", d = a.dj || function() {
        }, e = a.error || function() {
        }, f = a.data || "";
        a = a.Gh || function() {
        };
        var g = "", h;
        try {
            h = new XMLHttpRequest
        } catch (k) {
            try {
                h = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (l) {
                try {
                    h = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (m) {
                    e(null, "", null)
                }
            }
        }
        if ("object" === typeof f)
            for (var q in f)
                Object.hasOwnProperty.call(f, q) && (g.length && (g += "&"), g += encodeURIComponent(q), g += "=", g += encodeURIComponent(f[q]));
        "GET" === c && (b += "?" + g, g = "");
        a(h, h);
        h.open(c, b, !0);
        h.onreadystatechange =
                function() {
                    if (4 === h.readyState)
                        if (200 === h.status) {
                            var a = h.responseText;
                            if (0 === h.getResponseHeader("content-type").indexOf("application/json"))
                                try {
                                    a = ra.Di(a)
                                } catch (b) {
                                }
                            d(a, "", h)
                        } else
                            e(h, "", null)
                };
        "POST" === c && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        h.send(g)
    };
    document.$h = function(a) {
        var b = [], c, d;
        c = a.split(/\s+/);
        for (a = 0; a < c.length; a++)
            d = c[a].replace(/([\/\\\^$*+?.()|\[\]{}])/g, "\\$1"), b.push(RegExp("(^|\\s)" + d + "(\\s|$)"));
        var e = document.getElementsByTagName("*"), f = [];
        a = 0;
        for (d = e.length; a < d; a++) {
            var g = e[a], h = !0;
            for (c = 0; c < b.length; c++)
                if (!b[c].test(g.className)) {
                    h = !1;
                    break
                }
            h && f.push(g)
        }
        return f
    };
    ra.Di = function(a) {
        return window.JSON ? window.JSON.parse(a) : eval("(" + a + ")")
    };
    ra.extend = function(a) {
        for (var b = arguments[0], c = 1; c < arguments.length; c++) {
            var d = arguments[c], e;
            for (e in d)
                d.hasOwnProperty(e) && (b[e] = d[e])
        }
        return b
    };
    ra.Qc = qa.prototype;
    var p = ra;
    var Ka = x("MISC");
    function La(a) {
        var b = document.createElement("canvas");
        a && a.appendChild(b);
        "G_vmlCanvasManager"in window && (Ka("Emulating canvas in IE"), G_vmlCanvasManager.initElement(b), p(b).bind("selectstart", function(a) {
            Ka("Cancelled selectstart on canvas");
            a.stopPropagation();
            a.preventDefault()
        }));
        return b
    }
    var Ma = /MSIE ([0-9]{1,}[\.0-9]{0,})/, Na = null;
    function Oa() {
        var a;
        if (null !== Na)
            a = Na;
        else {
            a = -1;
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var b = Ma.exec(navigator.userAgent);
                null !== b && (a = parseFloat(b[1]))
            }
            Na = a;
            Ka("IE version is %s", a)
        }
        return 0 <= a && 9 > a
    }
    function Pa(a) {
        for (var b = 0; a; )
            try {
                var c = parseInt(p(a).$("z-index"), 10);
                c && (b = Math.max(b, c));
                a = a.parentNode
            } catch (d) {
                break
            }
        return b
    }
    ;
    var Qa = x("Cookies");
    function Ra(a) {
        this.Ba = a
    }
    Ra.prototype = {kb: function(a) {
            this.Ba.kb(a)
        }, flush: function() {
            this.Ba.flush()
        }, Kd: function() {
            return this.Ba.Kd()
        }};
    function Sa(a, b) {
        for (var c = 0; c < b.length; c++)
            a.kb(b.charCodeAt(c))
    }
    function Ta() {
        this.data = ""
    }
    Ta.prototype = {log: x("BYTESTREAM"), Kd: function() {
            return this
        }, kb: function(a) {
            if (255 < a || 0 > a)
                throw"Bad data written to byte buffer";
            this.data += String.fromCharCode(a)
        }, flush: function() {
        }, toString: function() {
            return this.data
        }, Nb: function() {
            for (var a = [], b = 0; b < this.data.length; b++)
                a.push(this.data.charCodeAt(b));
            return a
        }};
    var Ua = {};
    function Va() {
        var a, b = new Ta;
        a = ["LZWEncoder", "Ascii85Encoder"];
        a.reverse();
        for (var c = 0; c < a.length; c++)
            b = new Ua[a[c]](b);
        return b
    }
    ;
    function Wa(a) {
        this.Ba = a;
        this.items = []
    }
    Wa.prototype = {kb: function(a) {
            4 === this.items.length && Xa(this);
            this.items.push(a)
        }, flush: function() {
            Xa(this);
            Sa(this.Ba, "~>");
            this.Ba.flush()
        }};
    function Xa(a) {
        var b, c, d, e, f, g, h, k;
        b = a.items[0];
        c = a.items[1];
        d = a.items[2];
        e = a.items[3];
        f = (b << 24 | c << 16 | d << 8 | e) >>> 0;
        b = (f / 52200625 | 0) % 85 + 33;
        g = (f / 614125 | 0) % 85 + 33;
        h = (f / 7225 | 0) % 85 + 33;
        k = (f / 85 | 0) % 85 + 33;
        f = f % 85 + 33;
        (118 < b || 118 < g || 118 < h || 118 < k || 118 < f) && console.log(b, g, h, k, f);
        (33 > b || 33 > g || 33 > h || 33 > k || 33 > f) && console.log(b, g, h, k, f);
        a.Ba.kb(b);
        a.Ba.kb(g);
        isNaN(c) || (a.Ba.kb(h), isNaN(d) || (a.Ba.kb(k), isNaN(e) || a.Ba.kb(f)));
        a.items.length = 0
    }
    Wa.prototype = p.extend({}, Ra.prototype, Wa.prototype);
    Ua.Ascii85Encoder = Wa;
    function Ya(a) {
        this.Ba = a;
        this.cc = this.Xc = 0;
        this.Xg = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8193]
    }
    Ya.prototype = {log: x("BITWRITER"), kb: function(a) {
            Za(this, a, 8)
        }, flush: function() {
            this.cc && (this.Ba.kb(this.Xc << 8 - this.cc), this.Xc = this.cc = 0);
            this.Ba.flush()
        }};
    function Za(a, b, c) {
        a.Xc = a.Xc << c | b & a.Xg[c];
        for (a.cc += c; 8 <= a.cc; )
            a.Ba.kb(a.Xc >>> a.cc - 8 & 255), a.cc -= 8, a.Xc &= a.Xg[a.cc]
    }
    Ua.BitWriter = Ya;
    Ya.prototype = p.extend({}, Ra.prototype, Ya.prototype);
    function $a(a) {
        this.Ba = new Ya(a);
        this.nd = 258;
        this.Zc = 0;
        this.Jf = !0;
        this.Gd = [];
        this.hg = [];
        this.sf = [];
        this.fd = 9;
        ab(this)
    }
    $a.prototype = {log: x("LZWEncoder"), kb: function(a) {
            var b;
            if (this.Jf)
                this.Zc = a, this.Jf = !1;
            else {
                a:{
                    b = this.Zc;
                    var c, d;
                    c = a << 4 ^ b;
                    for (d = 0 === c ? 1 : 18041 - c; ; ) {
                        if (void 0 === this.Gd[c] || this.hg[c] === b && this.sf[c] === a) {
                            b = c;
                            break a
                        }
                        c -= d;
                        0 > c && (c += 18041)
                    }
                    b = void 0
                }
                void 0 !== this.Gd[b] ? this.Zc = this.Gd[b] : (Za(this.Ba, this.Zc, this.fd), this.Gd[b] = this.nd, this.hg[b] = this.Zc, this.Zc = this.sf[b] = a, 4095 > this.nd ? (this.nd += 1, this.fd = Math.ceil(Math.log(this.nd) / Math.log(2))) : ab(this))
            }
        }, flush: function() {
            this.Jf || (Za(this.Ba, this.Zc,
                    this.fd), Za(this.Ba, 257, this.fd))
        }};
    function ab(a) {
        Za(a.Ba, 256, a.fd);
        a.nd = 258;
        a.fd = 9;
        a.Gd.length = 0;
        a.hg.length = 0;
        a.sf.length = 0
    }
    Ua.LZWEncoder = $a;
    $a.prototype = p.extend({}, Ra.prototype, $a.prototype);
    (function(a) {
        this.Ha(a)
    }).prototype = {log: x("Layout"), Ha: function(a) {
            this.Cc = a.itemSize || 100;
            this.qf = a.algorithm || "wrap";
            this.Pg = a.gravity || "down";
            this.Ag = !1 !== a.resize;
            "down" === this.Pg ? (this.offsetWidth = "offsetWidth", this.offsetHeight = "offsetHeight", this.width = "width", this.height = "height", this.top = "top", this.left = "left", this.clientWidth = "clientWidth", this.clientHeight = "clientHeight") : "up" === this.Pg ? (this.offsetWidth = "offsetWidth", this.offsetHeight = "offsetHeight", this.width = "width", this.height = "height",
                    this.top = "bottom", this.left = "left", this.clientWidth = "clientWidth", this.clientHeight = "clientHeight") : (this.offsetWidth = "offsetHeight", this.offsetHeight = "offsetWidth", this.width = "height", this.height = "width", this.top = "left", this.left = "top", this.clientWidth = "clientHeight", this.clientHeight = "clientWidth")
        }, Yf: function(a) {
            "absolute" !== window.getComputedStyle(a, null).getPropertyValue("position") && (a.style.position = "relative");
            for (var b = 0; b < a.children.length; b++)
                a.children[b].style.position = "absolute";
            if ("wrap" ===
                    this.qf)
                for (var b = a[this.clientWidth], c = 0, d = 0, e = 0, f = 0; f < a.children.length; f++) {
                    var g = a.children[f];
                    bb(this, g, this.Cc);
                    var h = g[this.offsetWidth], k = g[this.offsetHeight];
                    window.console.log(c, d, h, e);
                    c + h > b ? 0 === c ? (cb(this, g, c, d), d += k) : (d += e, c = 0, cb(this, g, c, d), e = k) : (cb(this, g, c, d), c += h, e = Math.max(e, k))
                }
            else if ("mason" === this.qf)
                if (e = a[this.clientWidth], d = c = 0, 0 >= e)
                    this.log("Skipping layout; width is <= 0");
                else {
                    this.log("Laying out to width %s", e);
                    b = Math.round(e / this.Cc);
                    this.Cc = e / b;
                    e = [];
                    for (f = 0; f < b; f++)
                        e.push(0);
                    for (f = 0; f < a.children.length; f++) {
                        g = a.children[f];
                        bb(this, g, this.Cc);
                        h = g[this.offsetHeight];
                        k = 0;
                        for (c = 1; c < b; c++)
                            e[c] < e[k] && (k = c);
                        c = k * this.Cc;
                        d = e[k];
                        cb(this, g, c, d);
                        e[k] += h
                    }
                }
            else if ("perfect" === this.qf) {
                b = a[this.clientWidth];
                c = h = 0;
                d = [];
                for (e = h = 0; e < a.children.length; e++) {
                    f = a.children[e];
                    db(this, f, this.Cc);
                    g = f[this.offsetWidth];
                    if (h + g > b)
                        if (0 === d.length) {
                            cb(this, f, 0, c);
                            bb(this, f, b);
                            c += f[this.offsetHeight];
                            continue
                        } else {
                            for (var l = b / h, m = h = 0; m < d.length; m++)
                                k = d[m], db(this, k, this.Cc * l), cb(this, k, h, c), h += k[this.offsetWidth];
                            c += this.Cc * l;
                            h = 0;
                            d.length = 0
                        }
                    d.push(f);
                    h += g
                }
                for (e = h = 0; e < d.length; e++)
                    k = d[e], cb(this, k, h, c), h += k[this.offsetWidth]
            }
        }};
    function cb(a, b, c, d) {
        b.style[a.top] = d + "px";
        b.style[a.left] = c + "px"
    }
    function db(a, b, c) {
        if (a.Ag) {
            var d = b[a.offsetWidth], e = b[a.offsetHeight];
            b.style[a.height] = "" + c + "px";
            b.style[a.width] = "" + c / e * d + "px"
        }
    }
    function bb(a, b, c) {
        if (a.Ag) {
            var d = b[a.offsetWidth], e = b[a.offsetHeight];
            b.style[a.width] = "" + c + "px";
            b.style[a.height] = "" + c / d * e + "px"
        }
    }
    ;
    function eb(a, b, c, d, e) {
        this.view = a;
        this.ma = b;
        this.handle = c;
        this.eh = b.Og(c);
        this.Ta(d, e)
    }
    eb.prototype = {log: x("MoveEditNode"), Zb: function() {
            this.log("Entering MoveEditNode")
        }, nc: function() {
            this.log("Leaving MoveEditNode")
        }, fb: function(a) {
            "touchmove" === a.type ? (a = a.touches[0], a = z(this.view, a.pageX, a.pageY), this.Xa(a.x, a.y)) : "touchend" === a.type && (a = a.changedTouches[0], a = z(this.view, a.pageX, a.pageY), this.Ya(a.x, a.y))
        }, Ta: function(a, b) {
            this.log("onMouseDown(%s,%s)", a, b);
            this.bj = a;
            this.cj = b
        }, Xa: function(a, b) {
            var c = this.view.cb(new B(a, b));
            a = c.x;
            b = c.y;
            this.ma.Vd(this.handle, a, b);
            this.ma.sa(this.view.ia,
                    this.view.rb);
            this.view.ka()
        }, Ya: function(a, b) {
            this.log("onMouseUp(%s,%s)", a, b);
            var c = this.view.cb(new B(a, b));
            a = c.x;
            b = c.y;
            a === this.bj && b === this.cj || this.view.va([new fb(this.ma.id, this.handle, this.eh.x, this.eh.y, a, b)]);
            this.view.ka();
            C(this.view, new gb(this.view))
        }};
    function hb(a, b) {
        this.view = a;
        this.state = "none";
        this.Ga = document.createElement("img");
        this.url = this.Ga.src = b
    }
    hb.prototype = {log: x("ImageStamp"), Zb: function() {
            this.log("Entering ImageStampBehaviour");
            this.view.canvas.style.cursor = "move"
        }, nc: function() {
            this.log("Leaving ImageStampBehaviour")
        }, fb: function(a) {
            var b;
            "touchstart" === a.type ? (b = a.changedTouches[0], b = z(this.view, b.pageX, b.pageY), this.Ta(b.x, b.y, a)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = z(this.view, b.pageX, b.pageY), this.Xa(b.x, b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = z(this.view, b.pageX, b.pageY), this.Ya(b.x, b.y, a))
        }, cb: function(a,
                b) {
            this.Ga.complete && (a -= this.Ga.width / 2, b -= this.Ga.height / 2);
            return this.view.cb(new B(a, b))
        }, Ta: function(a, b, c) {
            this.log("onMouseDown type %s", c.type);
            a = this.cb(a, b);
            this.view.va([new D("ImageNode", {url: this.url, layer: this.view.Ja, matrix: new E(a.x, a.y)})]);
            this.view.da.get("autoPickTool") && F(this.view)
        }, Xa: function(a, b) {
            this.Ga.complete || this.log("Don't draw; image not loaded.");
            var c = this.cb(a, b), d = this;
            this.view.ka(function(a) {
                var b = a.globalAlpha;
                a.globalAlpha = 0.5;
                a.drawImage(d.Ga, c.x, c.y);
                a.globalAlpha =
                b
            })
        }, Ya: function() {
        }, Kb: function(a) {
            "cancel" === a && F(this.view)
        }};
    function ib(a) {
        this.view = a;
        this.state = "none"
    }
    ib.prototype = {log: x("PanTool"), Zb: function() {
            this.log("Entering PanToolBehaviour");
            this.view.canvas.style.cursor = "move"
        }, nc: function() {
            this.log("Leaving PanToolBehaviour")
        }, fb: function(a) {
            var b;
            "touchstart" === a.type ? (b = a.changedTouches[0], b = z(this.view, b.pageX, b.pageY), this.Ta(b.x, b.y, a)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = z(this.view, b.pageX, b.pageY), this.Xa(b.x, b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = z(this.view, b.pageX, b.pageY), this.Ya(b.x, b.y, a))
        }, Ta: function(a, b, c) {
            this.log("onMouseDown type %s",
                    c.type);
            this.state = "dragging";
            this.start = jb(c);
            this.hj = this.view.Ka;
            this.ij = this.view.Ia
        }, Xa: function(a, b, c) {
            "dragging" === this.state && (a = jb(c), b = this.ij + a.y - this.start.y, this.view.Ka = this.hj + a.x - this.start.x, this.view.Ia = b, G(this.view), this.view.ka())
        }, Ya: function() {
            this.state = "none"
        }, Kb: function(a) {
            "cancel" === a && F(this.view)
        }};
    function jb(a) {
        return"changedTouches"in a ? new B(a.changedTouches[0].pageX, a.changedTouches[0].pageY) : new B(a.pageX, a.pageY)
    }
    ;
    function kb(a) {
        this.code = "en";
        "string" === typeof a && (a = lb(this, a, {}));
        this.data = a
    }
    kb.prototype = {log: x("LANGUAGE"), of: function(a) {
            lb(this, a, this.data)
        }, Qc: function() {
            var a = this;
            return function(b, c) {
                return mb(a, arguments)
            }
        }, get: function(a, b) {
            return mb(this, arguments)
        }};
    function mb(a, b) {
        var c = b[0], d = "<not translated:" + c + ">";
        a.code in a.data && c in a.data[a.code] && (d = a.data[a.code][c]);
        for (c = 1; c < b.length; c++)
            d = d.replace("^" + c, b[c]);
        return d
    }
    function lb(a, b, c) {
        b = b.split("\n");
        for (var d = /^([ \t]*)([^:]+):([^:]+):(.*)/, e = 0; e < b.length; e++) {
            var f = d.exec(b[e]);
            if (f) {
                var g = f[2], h = f[3], f = f[4];
                g in c || (c[g] = {});
                h in c[g] && a.log("Warning: Replacing %s:%s", g, h);
                c[g][h] = f
            }
        }
        return c
    }
    function nb(a, b) {
        a.code = b
    }
    ;
    function ob(a, b, c, d) {
        this.Ci = a;
        this.Oa = b;
        this.tf = c;
        this.data = d;
        this.id = "-1"
    }
    ob.prototype = {log: x("TRANS"), rename: function(a) {
            for (var b = 0; b < this.Oa.length; b++)
                this.Oa[b].rename(a)
        }};
    function pb(a, b) {
        this.Ha(a, b)
    }
    pb.prototype = {Ha: function(a, b) {
            this.ga = b;
            this.Yi = !0
        }, ka: function(a) {
            a.moveTo(this.ga.x, this.ga.y)
        }, Bd: function() {
            return null
        }, yc: function() {
            return{x: 1, y: 0}
        }};
    function qb(a, b, c, d, e) {
        this.Ha(a, b, c, d, e)
    }
    qb.prototype = {Ha: function(a, b, c, d, e) {
            this.ga = b;
            this.ua = a;
            this.mi = !0;
            this.Hc = e;
            this.uh = d;
            c.next();
            this.Re = c.next();
            this.Se = c.next();
            this.moveTo = this.Yc = null;
            this.sa()
        }, log: x("LINE"), sa: function() {
            var a = H(this.ua.ga.x, this.ua.ga.y, this.ga.x, this.ga.y);
            this.ud = this.length = a;
            var b = this.ua.ga.La();
            if (this.ua.mi && this.Hc) {
                this.Hc = Math.min(this.Hc, a / 2, this.ua.length / 2);
                a = I(this.ua.ga.x, this.ua.ga.y, this.ga.x, this.ga.y);
                b.x += a.x * this.Hc;
                b.y += a.y * this.Hc;
                var a = this.ua, c = this.Hc, d = I(a.Rb.x, a.Rb.y, a.ga.x, a.ga.y),
                        e = a.ga.La();
                e.x -= d.x * c;
                e.y -= d.y * c;
                a.Yc = e;
                a.ud -= c;
                c = a.ud / 10 * a.uh;
                10 < c && (c = 10);
                var d = a.Rb.x, f = a.Rb.y, g = e.x, h = e.y, d = d + c, f = f + c;
                a.Ua = new B(d + a.Re * (g + c - d), f + a.Re * (h + c - f));
                d = a.Rb.x - c;
                g = e.x - c;
                f = a.Rb.y - c;
                h = e.y - c;
                a.ab = new B(d + a.Se * (g - d), f + a.Se * (h - f));
                this.ud -= this.Hc
            }
            this.Rb = b;
            null === this.Yc && (this.Yc = this.ga);
            a = this.ud / 10 * this.uh;
            10 < a && (a = 10);
            e = b.x;
            c = b.y;
            d = this.ga.x;
            f = this.ga.y;
            e += a;
            c += a;
            this.Ua = new B(e + this.Re * (d + a - e), c + this.Re * (f + a - c));
            e = b.x - a;
            d = this.ga.x - a;
            c = b.y - a;
            f = this.ga.y - a;
            this.ab = new B(e + this.Se *
                    (d - e), c + this.Se * (f - c))
        }, Ze: function(a) {
            this.ua = a;
            this.sa();
            this.ua.Yc && (this.moveTo = this.ua.Yc)
        }, ka: function(a) {
            this.Hc && (this.moveTo && a.moveTo(this.moveTo.x, this.moveTo.y), a.quadraticCurveTo(this.ua.ga.x, this.ua.ga.y, this.Rb.x, this.Rb.y));
            a.bezierCurveTo(this.Ua.x, this.Ua.y, this.ab.x, this.ab.y, this.Yc.x, this.Yc.y)
        }, Bd: function() {
            return this.ua ? I(this.ua.ga.x, this.ua.ga.y, this.Ua.x, this.Ua.y) : null
        }, yc: function() {
            return I(this.ab.x, this.ab.y, this.ga.x, this.ga.y)
        }};
    function rb(a, b, c) {
        this.Ha(a, b, c)
    }
    rb.prototype = {Ha: function(a, b, c) {
            this.ga = b;
            this.ua = a;
            this.vh = c;
            var d = H(a.ga.x, a.ga.y, b.x, b.y);
            d || (d = 1);
            var e = (b.x - a.ga.x) / d, f = (b.y - a.ga.y) / d;
            this.ab = new B(b.x - d * c * e, b.y - d * c * f);
            if (b = a.ab) {
                var g = I(a.ua.ga.x, a.ua.ga.y, a.ga.x, a.ga.y), h = H(a.ua.ga.x, a.ua.ga.y, a.ga.x, a.ga.y), e = 0.5 * (e + g.x), f = 0.5 * (f + g.y);
                b.x = a.ga.x - h * c * e;
                b.y = a.ga.y - h * c * f
            }
            this.Ua = new B(a.ga.x + d * c * e, a.ga.y + d * c * f);
            this.length = d
        }, Ze: function(a) {
            this.ua = a;
            var b = a.ab, c = (this.ga.x - a.ga.x) / this.length, d = (this.ga.y - a.ga.y) / this.length, e = this.vh;
            if (b) {
                var f =
                        I(a.ua.ga.x, a.ua.ga.y, a.ga.x, a.ga.y), g = H(a.ua.ga.x, a.ua.ga.y, a.ga.x, a.ga.y), c = 0.5 * (c + f.x), d = 0.5 * (d + f.y);
                b.x = a.ga.x - g * e * c;
                b.y = a.ga.y - g * e * d
            }
            this.Ua = new B(a.ga.x + this.length * e * c, a.ga.y + this.length * e * d)
        }, ka: function(a) {
            a.bezierCurveTo(this.Ua.x, this.Ua.y, this.ab.x, this.ab.y, this.ga.x, this.ga.y)
        }, Bd: function() {
            return this.ua ? I(this.ua.ga.x, this.ua.ga.y, this.Ua.x, this.Ua.y) : null
        }, yc: function() {
            return 0 < this.vh ? I(this.ab.x, this.ab.y, this.ga.x, this.ga.y) : I(this.ua.ga.x, this.ua.ga.y, this.ga.x, this.ga.y)
        }};
    function sb(a, b, c) {
        this.Ha(a, b, c)
    }
    sb.prototype = {Ha: function(a, b, c) {
            this.control = b;
            this.ga = c
        }, ka: function(a) {
            a.quadraticCurveTo(this.control.x, this.control.y, this.ga.x, this.ga.y)
        }, Bd: function() {
            return this.ua ? I(this.ua.ga.x, this.ua.ga.y, this.control.x, this.control.y) : null
        }, yc: function() {
            return I(this.control.x, this.control.y, this.ga.x, this.ga.y)
        }};
    function tb(a, b, c, d) {
        this.Ha(a, b, c, d)
    }
    tb.prototype = {Ha: function(a, b, c, d) {
            this.control = b;
            this.ga = c;
            this.Gc = d
        }, ka: function(a) {
            a.arcTo(this.control.x, this.control.y, this.ga.x, this.ga.y, this.Gc)
        }};
    function ub(a, b, c, d) {
        this.Ha(a, b, c, d)
    }
    ub.prototype = {Ha: function(a, b, c, d) {
            this.Ua = b;
            this.ab = c;
            this.ga = d;
            this.ua = a
        }, ka: function(a) {
            a.bezierCurveTo(this.Ua.x, this.Ua.y, this.ab.x, this.ab.y, this.ga.x, this.ga.y)
        }, Bd: function() {
            return this.ua ? I(this.ua.ga.x, this.ua.ga.y, this.Ua.x, this.Ua.y) : null
        }, yc: function() {
            return I(this.ab.x, this.ab.y, this.ga.x, this.ga.y)
        }};
    function vb(a, b, c, d, e) {
        this.Ha(a, b, c, d, e)
    }
    vb.prototype = {log: x("SEGMENT"), Ha: function(a, b, c, d, e) {
            this.ua = a;
            this.ve = b;
            e *= 2;
            var f = 2 * d.next() - 1;
            d.next();
            d = this.ua.yc();
            if (!this.ua.Yi && d) {
                var g = H(a.ga.x, a.ga.y, b.x, b.y);
                this.Ua = new B(a.ga.x + 0.5522847498 * d.x * g, a.ga.y + 0.5522847498 * d.y * g)
            } else
                this.Ua = new B(a.ga.x + 0.5522847498 * (b.x - a.ga.x), a.ga.y + 0.5522847498 * (b.y - a.ga.y));
            this.ab = new B(c.x - 0.5522847498 * (c.x - b.x) * (1 - f * e), c.y - 0.5522847498 * (c.y - b.y) * (1 - f * e));
            this.ga = c
        }, Ze: function(a) {
            this.ua = a;
            var b = this.ua.yc();
            if (b) {
                var c = H(a.ga.x, a.ga.y, this.ve.x,
                        this.ve.y);
                this.Ua = new B(a.ga.x + 0.5522847498 * b.x * c, a.ga.y + 0.5522847498 * b.y * c)
            } else
                this.Ua = new B(a.ga.x + 0.5522847498 * (this.ve.x - this.ua.ga.x), a.ga.y + 0.5522847498 * (this.ve.y - this.ua.ga.y))
        }, ka: function(a) {
            a.bezierCurveTo(this.Ua.x, this.Ua.y, this.ab.x, this.ab.y, this.ga.x, this.ga.y)
        }, Bd: function() {
            return this.ua ? I(this.ua.ga.x, this.ua.ga.y, this.Ua.x, this.Ua.y) : null
        }, yc: function() {
            return I(this.ab.x, this.ab.y, this.ga.x, this.ga.y)
        }};
    function wb(a) {
        this.Ei = a;
        this.Gc = 30;
        this.cd = []
    }
    wb.prototype = {log: x("AngleAddon"), sa: function() {
            var a = this.Ei.dc, b = 0, c = [], d = [];
            this.cd.length = 0;
            for (var e = 0 > xb(a); b < a.ea.length; ) {
                switch (a.ea[b]) {
                    case yb:
                        c = [new B(a.ea[b + 1], a.ea[b + 2])];
                        d = c.concat();
                        break;
                    case zb:
                        3 === c.length && c.shift();
                        c.push(new B(a.ea[b + 1], a.ea[b + 2]));
                        d.push(c[c.length - 1]);
                        3 === c.length && Ab(this, c[0], c[1], c[2], e);
                        break;
                    case Bb:
                        3 <= d.length && Ab(this, d[d.length - 2], d[0], d[1], e)
                }
                b += Cb[a.ea[b]]
            }
        }, ka: function(a) {
            a.beginPath();
            var b, c;
            for (c = 0; c < this.cd.length; c++)
                b = this.cd[c], a.moveTo(b.x +
                        this.Gc * Math.cos(b.vd), b.y + this.Gc * Math.sin(b.vd)), a.arc(b.x, b.y, this.Gc, b.vd, b.ze, !1);
            a.lineWidth = 3;
            a.strokeStyle = "red";
            a.stroke();
            a.fillStyle = "red";
            a.font = "20px Arial";
            for (c = 0; c < this.cd.length; c++) {
                b = this.cd[c];
                var d = (b.vd + b.ze) / 2 + Math.PI;
                0 < b.vd && 0 > b.ze && (d -= Math.PI);
                var e = b.ze - b.vd;
                0 > e && (e += 2 * Math.PI);
                a.fillText("" + Math.round(e / Math.PI * 180) + "\u00b0", b.x + this.Gc * Math.cos(d), b.y + this.Gc * Math.sin(d))
            }
        }};
    function Ab(a, b, c, d, e) {
        var f;
        b = I(c.x, c.y, b.x, b.y);
        f = I(c.x, c.y, d.x, d.y);
        d = Math.atan2(b.y, b.x);
        b = Math.atan2(f.y, f.x);
        e && (e = d, d = b, b = e);
        a.cd.push({x: c.x, y: c.y, vd: b, ze: d})
    }
    ;
    var J = [], Db = null, Eb = x("ImageLoader");
    function Fb() {
        var a = [];
        Eb("Timeout running... %s images remaining", J.length);
        for (var b = 0; b < J.length; b++)
            J[b].complete ? J[b].Qc(J[b], J[b].ie) : 5E3 > J[b].af ? (J[b].af += 250, a.push(J[b])) : J[b].Qc(J[b], J[b].ie);
        J = a;
        J.length ? setTimeout(Fb, 250) : (Eb("Timeout Stopped"), Db = !1)
    }
    function Gb(a, b) {
        function c() {
            Eb("LoadFn called. complete=%s", d.complete);
            if (d.complete)
                for (var a = 0; a < J.length; a++) {
                    if (J[a] === d) {
                        J.splice(a, 1);
                        b(d, d.ie);
                        break
                    }
                }
            else
                Db || (Db = !0, setTimeout(Fb, 250), d.af = 250)
        }
        var d = document.createElement("img");
        J.push(d);
        d.Qc = b;
        d.ie = a;
        d.af = 0;
        d.addEventListener ? (d.addEventListener("load", function() {
            c()
        }, !1), d.addEventListener("error", function() {
            Eb("Error loading %s", a);
            b(null, d.ie)
        }, !1)) : (d.attachEvent("onload", function() {
            c()
        }), d.attachEvent("onerror", function() {
            Eb("Error loading %s",
                    a);
            b(null, d.ie)
        }));
        d.src = a
    }
    ;
    function Hb() {
    }
    Hb.prototype = {log: x("MJAX"), load: function(a) {
            var b, c, d = this;
            c = p("<script>").Sa("type", "text/x-mathjax-config");
            c.text("MathJax.Hub.Config({\n   extensions: [\"mml2jax.js\"],\n   mml2jax: { \n   },\n   jax: ['input/MathML', 'output/SVG']\n});");
            p(document.body).append(c);
            c = p("<script>").Sa("type", "text/javascript");
            c.Sa("src", "http://cdn.mathjax.org/mathjax/latest/MathJax.js?delayStartupUntil=loaded");
            p(document.body).append(c);
            this.log("Loading mathjax");
            b = setInterval(function() {
                if ("MathJax"in window)
                    return d.log("MathJax finished loading."),
                            clearInterval(b), window.MathJax.Hub.Startup.onload(), a && a(), MathJax.Hub.Startup.signal.Interest(function(a) {
                        return d.log("%s", a)
                    })
            }, 500)
        }, td: function(a, b) {
            var c, d, e = this;
            c = window.MathJax.Hub.queue;
            d = Ia(p("<div>"), a);
            d.$("position", "absolute");
            d.$("z-index", "10000");
            d.$("background", "#cccccc");
            d.$("display", "block");
            p(document.body).append(d);
            c.Push(["Typeset", window.MathJax.Hub, d[0]]);
            c.Push(function() {
                var a, c, h, k, l, m, q, r, s, u, v, y, A;
                c = d.find("svg");
                if (0 === c.length)
                    e.log("Failed to render MJax -- no SVG found"),
                            d.$("display", "none"), b && b(null);
                else {
                    k = c[0].getBoundingClientRect();
                    s = 2 * k.width;
                    k = 2 * k.height;
                    r = c.find("use");
                    y = 0;
                    for (A = r.length; y < A; y++)
                        a = r[y], a = p(a), l = a.Sa("href"), u = a.Sa("x") || 0, v = a.Sa("y") || 0, h = a.Sa("transform") || "", e.log("USE HREF=%s x=%s y=%s... cloning", l, u, v), l = Ha(p(l).La()), h = "" !== h ? h + (",translate(" + u + "," + v + ")") : "translate(" + u + "," + v + ")", l.Sa("transform", h), a.length && a[0].parentNode.replaceChild(l[0], a[0]);
                    h = document.createElement("svg");
                    v = c[0].childNodes;
                    r = 0;
                    for (u = v.length; r < u; r++)
                        a = v[r],
                                h.appendChild(a.cloneNode(!0));
                    c.Sa("id", "hello");
                    c = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" ' + ('viewBox="' + c[0].getAttribute("viewBox") + '" ');
                    c = c + ('width="' + s + '" ') + ('height="' + k + '" ');
                    c += ">";
                    c += h.innerHTML;
                    c += "</svg>";
                    d.remove();
                    c = "data:image/svg+xml," + encodeURIComponent(c);
                    q = new Image;
                    q.src = c;
                    q = p(q);
                    q.$("position", "absolute");
                    q.$("z-index", "10000");
                    q.$("top", "100px");
                    q.$("width", "" + s + "px");
                    q.$("height", "" + k + "px");
                    q.$("visibility", "hidden");
                    p(document.body).append(q);
                    e.log("img loaded: %s",
                            q[0].complete);
                    m = setInterval(function() {
                        e.log("img loaded: %s", q[0].complete);
                        if (q[0].complete && (clearInterval(m), b))
                            return b(q[0])
                    }, 100)
                }
            })
        }};
    function K() {
        this.Ne = !1;
        this.Ma = {}
    }
    K.prototype = {log: x("EventEmitter"), emit: function(a, b) {
            var c, d = this;
            this.Ma || (this.Ma = {});
            c = Array.prototype.slice.call(arguments, 1);
            setTimeout(function() {
                var b, f, g, h, k = !1;
                if (a in d.Ma)
                    for (h = d.Ma[a], f = 0, g = h.length; f < g; f++)
                        b = h[f], d.Ne || k || (d.log("Emit %s", a), k = !0), b.apply(null, c)
            }, 0);
            return this
        }, Hf: function(a, b) {
            var c;
            this.Ma || (this.Ma = {});
            c = Array.prototype.slice.call(arguments, 1);
            var d, e, f, g, h = !1;
            if (a in this.Ma)
                for (g = this.Ma[a], e = 0, f = g.length; e < f; e++)
                    d = g[e], this.Ne || h || (this.log("Emit %s", a), h = !0),
                            d.apply(null, c);
            return this
        }, on: function(a, b) {
            this.Ma || (this.Ma = {});
            this.bind(a, b);
            return this
        }, bind: function(a, b) {
            a in this.Ma ? this.Ma[a].push(b) : this.Ma[a] = [b];
            return b
        }, wh: function(a, b) {
            var c, d, e, f;
            if (a in this.Ma)
                for (c = this.Ma[a], d = e = 0, f = c.length - 1; e <= f; d = e += 1)
                    if (c[d] === b) {
                        c.splice(d, 1);
                        break
                    }
        }};
    function Ib(a, b) {
        function c() {
            a.wh("done", c);
            b.apply(null, arguments)
        }
        a.bind("done", c)
    }
    ;
    function Jb(a) {
        K.call(this);
        this.aa = a;
        this.nf = !1;
        a.$("display", "none");
        this.duration = 200;
        this.right = !0;
        a:{
            a = (document.body || document.documentElement).style;
            for (var b = "transition", c = ["Moz", "Webkit", "Khtml", "O", "ms"], b = b.charAt(0).toUpperCase() + b.substr(1), d = 0; d < c.length; d++)
                if ("string" === typeof a[c[d] + b]) {
                    Kb = c[d];
                    a = !0;
                    break a
                }
            a = !1
        }
        this.oe = a;
        this.prefix = Kb;
        this.Md = null;
        this.oe && (a = this.aa.outerWidth(), this.$("TransitionProperty", "transform"), this.$("Transform", "translate(" + a + "px,0)"))
    }
    var Kb;
    Jb.prototype = {log: x("SlidingPanel", !1), show: function(a, b) {
            var c = this;
            this.Md && (clearTimeout(this.Md), this.Md = null);
            !1 !== b && (b = !0);
            this.nf = !0;
            this.aa.show();
            var d = this.aa.outerWidth();
            this.aa.Ra();
            "right" === a ? (this.left = !1, this.aa.$("left", "" + (p(window).width() - d) + "px")) : this.left = !0;
            b && (c.bc = new aa, c.bc.zIndex = c.aa.$("z-index"), c.bc.insertBefore = c.aa, c.bc.show(function() {
                c.Ra()
            }));
            c.oe ? (c.$("TransitionDuration", "0"), window.setTimeout(function() {
                c.aa.$("display", "block");
                c.left ? c.$("Transform", "translate(-" +
                        d + "px,0)") : c.$("Transform", "translate(" + d + "px,0)");
                c.$("TransitionDuration", "" + c.duration + "ms");
                window.setTimeout(function() {
                    c.$("Transform", "translate(0,0)");
                    window.setTimeout(function() {
                        c.emit("show")
                    }, c.duration)
                }, 1)
            }, 1)) : (c.aa.$("display", "block"), c.emit("show"))
        }, $: function(a, b) {
            a = "" !== this.prefix ? this.prefix + a : a.charAt(0).toLowerCase() + a.substr(1);
            this.aa[0].style[a] = b
        }, sb: function() {
            return this.nf
        }, Ra: function() {
            var a = this;
            if (!this.Md) {
                this.nf = !1;
                a.bc && a.bc.Ra();
                var b = this.aa.outerWidth();
                a.oe ? this.left ? a.$("Transform", "translate(-" + b + "px,0)") : a.$("Transform", "translate(" + b + "px,0)") : a.aa.$("display", "none");
                a.oe ? this.Md = window.setTimeout(function() {
                    a.aa.$("display", "none");
                    a.emit("hide")
                }, a.duration) : a.emit("hide")
            }
        }};
    Jb.prototype = p.extend({}, K.prototype, Jb.prototype);
    function Lb(a, b, c) {
        var d = this;
        K.call(this);
        this.Fi = b;
        this.aa = p(a);
        b || (this.aa.$("overflow-y", "scroll"), this.aa.$("text-align", "center"));
        b || c || (a = p("<input>").Sa("type", "button").Sa("value", "Add Page"), this.aa.append(a), a.click(function() {
            d.ra.fe(d.ra.Pd(d.ra.kd() + 1))
        }), a = p("<input>").Sa("type", "button").Sa("value", "Delete Page"), this.aa.append(a), a.click(function() {
            d.ra.Gg(d.ra.kd())
        }), this.enabled = !1);
        this.Wb = []
    }
    Lb.prototype = {log: x("PageSelector"), wb: function(a) {
            this.log("Set page %s", a);
            this.page < this.Wb.length && p(this.Wb[this.page]).$("border-color", "transparent");
            this.page = a;
            this.page < this.Wb.length && p(this.Wb[this.page]).$("border-color", "#9fb3e7")
        }};
    function Mb(a, b) {
        var c = La(a.aa[0]);
        a.Fi || (p(c).$("margin-left", "10px"), p(c).$("margin-right", "10px"), p(c).$("margin-top", "5px"), p(c).$("margin-bottom", "5px"));
        p(c).$("border-width", "3px");
        a.log("Make canvas for page %s, currentPage is %s", b, a.page);
        b === a.page ? p(c).$("border-color", "#9fb3e7") : p(c).$("border-color", "transparent");
        p(c).$("border-style", "solid");
        a.Wb.push(c);
        c.page = b;
        p(c).click(function() {
            a.ra.fe(c.page)
        });
        return c
    }
    function Nb(a) {
        a.log("Regenerate page views.");
        var b = a.aa.width() - 6, c = a.aa.height() - 6, d = a.ra.zc(), e = a.ra.Of();
        c > b ? c = b / e.width * e.height : b = c / e.height * e.width;
        for (var f = 0; f < d; f++) {
            var g;
            g = f === a.Wb.length ? Mb(a, f) : a.Wb[f];
            g.width = b;
            g.height = c;
            g = g.getContext("2d");
            g.save();
            g.fillStyle = "#ffffff";
            g.fillRect(0, 0, b, c);
            g.scale(b / e.width, b / e.width);
            g.translate(-e.x, -e.y);
            a.ra.ka(g, {page: f});
            g.restore()
        }
        for (; f < a.Wb.length; f++)
            p(a.Wb[f]).remove();
        a.Wb.length = d
    }
    function Ob(a, b) {
        function c() {
            null === e && d.enabled && (e = setTimeout(function() {
                Nb(d);
                d.wb(d.ra.kd());
                e = null
            }, 100))
        }
        var d = a, e = null;
        a.ra = b;
        b.on("document-changed", function() {
            c()
        });
        b.on("resource-loaded", function() {
            c()
        });
        b.on("set-page", function(a) {
            d.wb(a)
        })
    }
    function Pb(a, b) {
        a.enabled = b;
        a.enabled && a.ra && setTimeout(function() {
            Nb(a)
        }, 10)
    }
    Lb.prototype = p.extend({}, K.prototype, Lb.prototype);
    function Qb() {
        this.Na = [];
        this.next = 0
    }
    Qb.prototype = {log: x("TRANSLIST"), va: function(a, b, c) {
            var d;
            c = c || null;
            d = this.Na.length ? this.Na[this.Na.length - 1].id : "0";
            this.Na.length = this.next;
            null === c ? (this.Na.push(new ob(d, b, a.Aa, null)), this.Za(a)) : (this.Na.push(new ob(d, b, c, null)), this.next += 1)
        }, ue: function(a, b, c, d) {
            if (b.Ci !== (this.Na.length ? this.Na[this.Na.length - 1].id : "0"))
                throw"ERROR! mismatched parent id";
            if (b.tf !== a.Aa)
                throw"ERROR! mismatched base id";
            this.Na.length = this.next;
            this.Na.push(b);
            return this.Za(a, c, d)
        }, Za: function(a, b, c) {
            var d,
                    e, f, g;
            b = b || null;
            c = c || null;
            if (this.next === this.Na.length)
                return!1;
            t(a.Aa === this.Na[this.next].tf);
            g = this.Na[this.next].Oa;
            e = 0;
            for (f = g.length; e < f; e++)
                d = g[e], b && d.Jd(a, b), c && Rb(d, a, c), d.Za(a);
            this.next += 1;
            return!0
        }, eb: function(a, b, c) {
            var d, e, f;
            b = b || null;
            c = c || null;
            if (0 === this.next)
                return!1;
            this.next -= 1;
            d = this.Na[this.next].Oa;
            if (0 !== d.length) {
                for (e = f = d.length - 1; 0 <= f && !(0 > e); e = f += - 1)
                    d[e].eb(a), b && d[e].Jd(a, b), c && Rb(d[e], a, c);
                Sb(a, this.Na[this.next].tf)
            }
        }, ed: function() {
            return 0 < this.next
        }, dd: function() {
            return this.next <
                    this.Na.length
        }};
    function Tb() {
        K.apply(this, arguments);
        this.Fc = [];
        this.Vb = !1;
        this.canvas = this.Zf = null
    }
    Tb.prototype = {log: x("FORMAT", !0), add: function(a, b, c, d, e) {
            var f, g, h, k;
            k = this.Fc;
            g = 0;
            for (h = k.length; g < h; g++)
                f = k[g], f.type === b && f.ma === a && (f.he = !0);
            this.log("Request URL %s", c);
            this.Fc.push({ma: a, type: b, url: c, Ai: d, vf: e, he: !1});
            Wb(this)
        }, pg: function(a) {
            this.Zf = a;
            Wb(this)
        }};
    function Xb(a, b) {
        a.Vb = !0;
        a.log("Processing request for item %s url=%s", b.ma.id, b.url);
        0 === b.type.indexOf("image") ? Gb(b.url, function(c, d) {
            null !== c ? (a.log("Image request completed for item %s url %s", b.ma.id, d), b.vf(c, d)) : a.log("Image request failed for url %s", d);
            a.Vb = !1;
            b.he = !0;
            Wb(a)
        }) : 0 === b.type.indexOf("math") ? null === a.Zf ? a.Vb = !1 : a.Zf.td(b.url, function(c) {
            a.log("MathJax request completed for item %s", b.ma.id);
            b.vf(c, b.url);
            a.Vb = !1;
            b.he = !0;
            Wb(a)
        }) : p.zg({url: b.url, data: b.Ai, dataType: "json", success: function(c) {
                b.he ||
                        (a.log("Request completed for item %s", b.ma.id), b.vf(c), a.emit("reformat", b.ma), a.Vb = !1, a.Fc.shift(), Wb(a))
            }, error: function(b, d, e) {
                a.log("Error: %s %s", d, e);
                a.Vb = !1;
                a.Fc.shift();
                Wb(a)
            }})
    }
    function Wb(a) {
        for (var b = 0; !a.Vb && b < a.Fc.length; )
            a.Fc[b].he ? a.Fc.shift() : (Xb(a, a.Fc[0]), b += 1);
        a.Vb || a.emit("done")
    }
    Tb.prototype = p.extend({}, K.prototype, Tb.prototype);
    function Yb(a) {
        var b = this;
        this.Lb = 0;
        "string" === typeof a ? (this.getUint8 = function() {
            t(b.Lb < b.data.length);
            return b.data.charCodeAt(b.Lb++) & 255
        }, this.data = a) : this.data = new Uint8Array(a)
    }
    Yb.prototype = {log: x("BinaryReader"), seek: function(a) {
            t(0 <= a && a <= this.data.length);
            var b = this.Lb;
            this.Lb = a;
            return b
        }, getUint8: function() {
            t(this.Lb < this.data.length);
            return this.data[this.Lb++]
        }, getUint16: function() {
            return(this.getUint8() << 8 | this.getUint8()) >>> 0
        }, getUint32: function() {
            return this.getInt32() >>> 0
        }, getInt16: function() {
            var a = this.getUint16();
            a & 32768 && (a -= 65536);
            return a
        }, getInt32: function() {
            return this.getUint8() << 24 | this.getUint8() << 16 | this.getUint8() << 8 | this.getUint8()
        }, getDate: function() {
            var a =
                    1E3 * (4294967296 * this.getUint32() + this.getUint32()) + Date.UTC(1904, 1, 1);
            return new Date(a)
        }};
    function Zb(a, b) {
        for (var c = "", d = 0; d < b; d++)
            c += String.fromCharCode(a.getUint8());
        return c
    }
    function $b(a) {
        this.sa = 0;
        this.Bg = [];
        for (var b = 0; 256 > b; b++) {
            var c = a.getUint8();
            this.log("   Glyph[%s] = %s", b, c);
            this.Bg.push(c)
        }
    }
    $b.prototype = {log: x("CMAP0"), map: function(a) {
            return 0 <= a && 255 >= a ? this.Bg[a] : 0
        }};
    function ac(a) {
        this.sa = 4;
        var b, c = [], d = a.getUint16() / 2;
        a.getUint16();
        a.getUint16();
        a.getUint16();
        for (b = 0; b < d; b++)
            c.push({Ig: a.getUint16()});
        a.getUint16();
        for (b = 0; b < d; b++)
            c[b].sg = a.getUint16();
        for (b = 0; b < d; b++)
            c[b].ji = a.getUint16();
        for (b = 0; b < d; b++) {
            var e = a.getUint16();
            c[b].Uf = e ? a.Lb - 2 + e : 0
        }
        this.ta = c;
        this.re = {};
        this.file = a
    }
    ac.prototype = {log: x("CMAP4"), map: function(a) {
            if (!(a in this.re)) {
                for (var b = 0; b < this.ta.length; b++) {
                    var c = this.ta[b];
                    if (c.sg <= a && c.Ig >= a) {
                        var d, e;
                        c.Uf ? (e = c.Uf + 2 * (a - c.sg), this.file.seek(e), d = this.file.getUint16()) : d = c.ji + a & 65535;
                        this.log("Charcode %s is between %s and %s; maps to %s (%s) roffset=%s", a, c.sg, c.Ig, e, d, c.Uf);
                        this.re[a] = d;
                        break
                    }
                }
                b === this.ta.length && (this.re[a] = 0)
            }
            return this.re[a]
        }};
    function bc(a, b, c) {
        this.ej = b && !c || !b && c;
        this.file = a;
        this.offset = a.Lb;
        this.si = a.getUint16();
        a.getUint16();
        a.getUint16();
        a.getUint16();
        this.map = {};
        for (b = 0; b < this.si; b++) {
            c = a.getUint16();
            var d = a.getUint16(), e = a.getInt16();
            this.map[c << 16 | d] = e
        }
        this.reset()
    }
    bc.prototype = {log: x("KERN0"), reset: function() {
            this.cg = -1
        }, get: function(a) {
            var b = 0;
            if (0 <= this.cg) {
                var c = this.cg << 16 | a;
                c in this.map && (b = this.map[c])
            }
            this.cg = a;
            return this.ej ? {x: 0, y: b} : {x: b, y: 0}
        }};
    function cc(a) {
        this.file = new Yb(a);
        this.yf = [];
        this.Rd = [];
        a = this.file;
        var b = {};
        a.getUint32();
        var c = a.getUint16();
        a.getUint16();
        a.getUint16();
        a.getUint16();
        for (var d = 0; d < c; d++) {
            var e = Zb(a, 4);
            b[e] = {Ih: a.getUint32(), offset: a.getUint32(), length: a.getUint32()};
            "head" !== e && this.log("Table %s has checksum 0x%s", e, b[e].Ih.toString(16))
        }
        this.$a = b;
        a = this.file;
        t("head"in this.$a);
        a.seek(this.$a.head.offset);
        this.version = a.getInt32() / 65536;
        a.getInt32();
        a.getUint32();
        this.ri = a.getUint32();
        t(1594834165 === this.ri);
        a.getUint16();
        this.xh = a.getUint16();
        a.getDate();
        a.getDate();
        this.Aj = a.getInt16();
        this.Cj = a.getInt16();
        this.zj = a.getInt16();
        this.Bj = a.getInt16();
        a.getUint16();
        a.getUint16();
        a.getInt16();
        this.ki = a.getInt16();
        a.getInt16();
        a = this.file;
        t("name"in this.$a);
        b = this.$a.name.offset;
        a.seek(b);
        a.getUint16();
        c = a.getUint16();
        d = a.getUint16();
        for (e = 0; e < c; e++) {
            var f = a.getUint16(), g = a.getUint16(), h = a.getUint16(), k = a.getUint16(), l = a.getUint16(), m = a.getUint16(), m = a.seek(b + d + m), q;
            if (0 === f || 3 === f) {
                q = a;
                for (var r = "", s = 0; s <
                        l; s += 2)
                    r += String.fromCharCode(q.getUint16());
                q = r
            } else
                q = Zb(a, l);
            this.log("Name %s/%s id %s language %s: %s", f, g, k, h, q);
            a.seek(m);
            switch (k) {
                case 1:
                    this.fontFamily = q;
                    break;
                case 4:
                    this.jd = q
                }
        }
        a = this.file;
        t("cmap"in this.$a);
        b = this.$a.cmap.offset;
        a.seek(b);
        a.getUint16();
        c = a.getUint16();
        for (d = 0; d < c; d++)
            e = a.getUint16(), g = a.getUint16(), f = a.getUint32(), this.log("CMap platformid=%s specificid=%s offset=%s", e, g, f), 3 === e && 1 >= g && (e = a, f = e.seek(b + f), g = e.getUint16(), h = e.getUint16(), e.getUint16(), k = void 0, this.log("    Cmap format %s length %s",
                    g, h), 0 === g ? k = new $b(e) : 4 === g && (k = new ac(e)), k && this.yf.push(k), e.seek(f));
        a = this.file;
        t("hhea"in this.$a);
        a.seek(this.$a.hhea.offset);
        a.getInt32();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getUint16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        this.Oe = a.getUint16();
        a = this.file;
        if ("kern"in this.$a)
            for (a.seek(this.$a.kern.offset), h = a.getUint16(), b = a.getUint16(), this.log("Kern Table version: %s", h), this.log("Kern nTables: %s",
                    b), c = 0; c < b; c++)
                h = a.getUint16(), d = a.getUint16(), k = a.getUint16(), e = k >> 8, f = k & 4, g = 0 === (k & 1), this.log("Kerning subtable version %s format %s length %s coverage: %s", h, e, d, k), h = null, 0 === e ? h = new bc(a, g, f) : (this.log("Unknown format -- skip"), a.seek(a.Lb + d)), h && this.Rd.push(h);
        t("maxp"in this.$a);
        a = this.file.seek(this.$a.maxp.offset + 4);
        b = this.file.getUint16();
        this.file.seek(a);
        this.length = b
    }
    cc.prototype = {log: x("TrueType"), transform: function(a, b) {
            a.scale(b / this.xh, -b / this.xh)
        }};
    function dc(a, b) {
        function c(b, c, e) {
            for (var h = 0, k = 0; k < f; k++) {
                var u = g[k];
                u & c ? h = u & e ? h + a.getUint8() : h - a.getUint8() : ~u & e && (h += a.getInt16());
                d[k][b] = h
            }
        }
        b.type = "simple";
        b.wc = [];
        for (var d = b.oa = [], e = 0; e < b.Xd; e++)
            b.wc.push(a.getUint16());
        a.seek(a.getUint16() + a.Lb);
        if (0 !== b.Xd) {
            for (var f = Math.max.apply(null, b.wc) + 1, g = [], e = 0; e < f; e++) {
                var h = a.getUint8();
                g.push(h);
                d.push({od: 0 < (h & 1)});
                if (h & 8) {
                    var k = a.getUint8();
                    t(0 < k);
                    for (e += k; k--; )
                        g.push(h), d.push({od: 0 < (h & 1)})
                }
            }
            c("x", 2, 16);
            c("y", 4, 32)
        }
    }
    function ec(a, b) {
        var c;
        t("loca"in a.$a);
        c = a.$a.loca;
        var d = a.file, e, f;
        1 === a.ki ? (e = d.seek(c.offset + 4 * b), c = d.getUint32(), f = d.getUint32()) : (e = d.seek(c.offset + 2 * b), c = 2 * d.getUint16(), f = d.getUint16());
        d.seek(e);
        c = c === f ? 0 : c + a.$a.glyf.offset;
        d = a.file;
        if (0 === c || c >= a.$a.glyf.offset + a.$a.glyf.length)
            return null;
        t(c >= a.$a.glyf.offset);
        t(c < a.$a.glyf.offset + a.$a.glyf.length);
        d.seek(c);
        c = {Xd: d.getInt16(), Aj: d.getInt16(), Cj: d.getInt16(), zj: d.getInt16(), Bj: d.getInt16()};
        t(-1 <= c.Xd);
        if (-1 === c.Xd) {
            var g, h, k, l, m;
            c.type =
                    "simple";
            var q = 32;
            c.wc = [];
            for (c.oa = []; q & 32; ) {
                var r, s, q = d.getUint16();
                m = d.getUint16();
                e = 1;
                g = f = 0;
                h = 1;
                l = k = 0;
                q & 1 ? (r = d.getInt16(), s = d.getInt16()) : (r = d.getUint8(), s = d.getUint8());
                q & 2 && (k = r, l = s);
                q & 8 ? h = e = d.getInt16() / 16384 : q & 64 ? (e = d.getInt16() / 16384, h = d.getInt16() / 16384) : q & 128 && (e = d.getInt16() / 16384, f = d.getInt16() / 16384, g = d.getInt16() / 16384, h = d.getInt16() / 16384);
                a.log("Read component glyph index %s", m);
                a.log("Transform: [%s %s %s %s %s %s]", e, f, g, h, k, l);
                r = d.Lb;
                if (m = ec(a, m)) {
                    var u = c.oa.length;
                    for (s = 0; s < m.wc.length; s++)
                        c.wc.push(m.wc[s] +
                                u);
                    for (s = 0; s < m.oa.length; s++) {
                        var u = m.oa[s].x, v = m.oa[s].y, u = e * u + f * v + k, v = g * u + h * v + l;
                        c.oa.push({x: u, y: v, od: m.oa[s].od})
                    }
                }
                d.seek(r)
            }
            c.Xd = c.wc.length;
            q & 256 && d.seek(d.getUint16() + d.Lb)
        } else
            dc(d, c);
        return c
    }
    function fc() {
        K.call(this);
        this.Qb = {};
        this.error = null;
        this.Wd = 0
    }
    fc.prototype = {log: x("FontCollection"), add: function(a) {
            this.Wd += 1;
            var b = this;
            p.zg({url: a, dj: function(c) {
                    b.log("Got font %s; result is %s bytes", a, c.length);
                    for (var d = "", e = 0; e < c.length; e++)
                        d += String.fromCharCode(c.charCodeAt(e) & 255);
                    c = new cc(d);
                    b.log("Loaded '%s'", c.jd);
                    for (e = 0; e < c.jd.length; e++)
                        b.log("   %s, %s", c.jd.charAt(e), c.jd.charCodeAt(e));
                    b.Qb[c.jd] = {name: c.jd, url: a, data: d, font: c};
                    b.Wd -= 1;
                    0 === b.Wd && b.emit("done")
                }, error: function() {
                    b.Ob(a)
                }, Gh: function(a, b) {
                    b.overrideMimeType("text/plain; charset=x-user-defined")
                }})
        },
        Ob: function(a) {
            this.log("Error fetching " + a)
        }, get: function(a) {
            if (a in this.Qb)
                return this.Qb[a].font
        }};
    fc.prototype = p.extend({}, K.prototype, fc.prototype);
    function L(a, b) {
        this.type = a;
        this.ha = b;
        if (4 > this.ha.length)
            throw"Bad value";
    }
    var gc, hc = 0, ic = 1, jc = 2, kc = 3;
    function lc(a, b) {
        a.toLowerCase()in mc && (a = mc[a.toLowerCase()]);
        var c = /\#([0-9a-f])([0-9a-f])([0-9a-f])/i, d = /rgba\( *([0-9]+) *, *([0-9]+) *, *([0-9]+) *, *([0-9\.]+) *\)/, e, f;
        f = /\#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/i.exec(a);
        if (null !== f)
            c = parseInt(f[1], 16) / 255, d = parseInt(f[2], 16) / 255, e = parseInt(f[3], 16) / 255, f = 1;
        else if (f = d.exec(a), null !== f)
            c = parseFloat(f[1]) / 255, d = parseFloat(f[2]) / 255, e = parseFloat(f[3]) / 255, f = parseFloat(f[4]);
        else {
            f = c.exec(a);
            if (null !== f)
                c = parseInt(f[1], 16), c =
                        (16 * c + c) / 255, d = parseInt(f[2], 16), d = (16 * d + d) / 255, e = parseInt(f[2], 16), e = (16 * e + e) / 255;
            else {
                if (b)
                    return null;
                c = 1;
                d = 0;
                e = 1
            }
            f = 1
        }
        return new L(hc, [c, d, e, f])
    }
    L.prototype = {toString: function() {
            function a(a) {
                a = Math.round(255 * a);
                return 16 > a ? "0" + a.toString(16) : a.toString(16)
            }
            var b = nc(this, hc);
            return 1 === b.ha[3] ? "#" + a(b.ha[0]) + a(b.ha[1]) + a(b.ha[2]) : "rgba(" + Math.round(255 * b.ha[0]) + "," + Math.round(255 * b.ha[1]) + "," + Math.round(255 * b.ha[2]) + "," + b.ha[3] + ")"
        }, Hb: function(a) {
            a.type !== this.type && (a = nc(a, this.type));
            if (this.type === jc) {
                var b = this.ha[0], c = a.ha[0], b = b > c ? Math.min(b - c, c - b + 360) : Math.min(c - b, b - c + 360), b = b / 360;
                return Math.pow(b * b + (this.ha[1] - a.ha[1]) * (this.ha[1] -
                        a.ha[1]) + (this.ha[2] - a.ha[2]) * (this.ha[2] - a.ha[2]), 0.5)
            }
            return Math.pow((this.ha[0] - a.ha[0]) * (this.ha[0] - a.ha[0]) + (this.ha[1] - a.ha[1]) * (this.ha[1] - a.ha[1]) + (this.ha[2] - a.ha[2]) * (this.ha[2] - a.ha[2]), 0.5)
        }};
    function nc(a, b) {
        return gc[a.type][b](a)
    }
    (function() {
        function a(a) {
            var b = a.ha[0], c = a.ha[1], d = a.ha[2];
            0 > b && (b += 360);
            var e = b / 60 - Math.floor(b / 60), f = d * (1 - c), g = d * (1 - e * c), c = d * (1 - (1 - e) * c), h, k, l;
            switch (Math.floor(b / 60) % 6) {
                case 0:
                    h = d;
                    k = c;
                    l = f;
                    break;
                case 1:
                    h = g;
                    k = d;
                    l = f;
                    break;
                case 2:
                    h = f;
                    k = d;
                    l = c;
                    break;
                case 3:
                    h = f;
                    k = g;
                    l = d;
                    break;
                case 4:
                    h = c;
                    k = f;
                    l = d;
                    break;
                case 5:
                    h = d, k = f, l = g
            }
            return new L(hc, [h, k, l, a.ha[3]])
        }
        function b(a) {
            var b, c = a.ha[0], d = a.ha[1], e = a.ha[2], f = Math.max(c, d, e), g = Math.min(c, d, e);
            f === g ? b = 0 : f === c ? b = (60 * (d - e) / (f - g) + 360) % 360 : f === d ? b = 60 * (e - c) / (f - g) +
                    120 : f === e && (b = 60 * (c - d) / (f - g) + 240);
            return new L(jc, [b, 0 === f ? 0 : 1 - g / f, f, a.ha[3]])
        }
        function c(a) {
            function b(a) {
                return a > 6 / 29 * (6 / 29) * (6 / 29) ? Math.pow(a, 1 / 3) : 1 / 3 * (29 / 6) * (29 / 6) * a + 4 / 29
            }
            var c = b(a.ha[1] / l.jf);
            return new L(kc, [116 * c - 16, 500 * (b(a.ha[0] / l.hf) - c), 200 * (c - b(a.ha[2] / l.kf)), a.ha[3]])
        }
        function d(a) {
            var b = (a.ha[0] + 16) / 116, c = b + a.ha[1] / 500, d = b - a.ha[2] / 200, e = 6 / 29;
            return new L(ic, [c > e ? l.hf * c * c * c : 3 * (c - 16 / 116) * e * e * l.hf, b > e ? l.jf * b * b * b : 3 * (b - 16 / 116) * e * e * l.jf, d > e ? l.kf * d * d * d : 3 * (d - 16 / 116) * e * e * l.kf, a.ha[3]])
        }
        function e(a) {
            for (var b =
            [], c = 0; 3 > c; c++)
                b[c] = 0.04045 >= a.ha[c] ? a.ha[c] / 12.92 : Math.pow((a.ha[c] + 0.055) / 1.055, 2.4);
            return new L(ic, [0.4124 * b[0] + 0.3576 * b[1] + 0.1805 * b[2], 0.2126 * b[0] + 0.7152 * b[1] + 0.0722 * b[2], 0.0193 * b[0] + 0.1192 * b[1] + 0.9505 * b[2], a.ha[3]])
        }
        function f(a) {
            var b = [], c = [];
            b[0] = 3.241 * a.ha[0] - 1.5374 * a.ha[1] - 0.4986 * a.ha[2];
            b[1] = -0.9692 * a.ha[0] + 1.876 * a.ha[1] + 0.0416 * a.ha[2];
            b[2] = 0.0556 * a.ha[0] - 0.204 * a.ha[1] + 1.057 * a.ha[2];
            for (var d = 0; 3 > d; d++)
                c[d] = 0.0031308 >= b[d] ? 12.92 * b[d] : 1.055 * Math.pow(b[d], 1 / 2.4) - 0.055;
            c[3] = a.ha[3];
            return new L(hc,
                    c)
        }
        function g(a) {
            return new L(a.type, a.ha.concat())
        }
        function h(a) {
            return c(e(a))
        }
        function k(a) {
            return b(f(a))
        }
        var l = {hf: 0.9505, jf: 1, kf: 1.089};
        gc = [[g, e, b, h], [f, g, k, c], [a, function(b) {
                    return e(a(b))
                }, g, function(b) {
                    return h(a(b))
                }], [function(a) {
                    return f(d(a))
                }, d, function(a) {
                    return k(d(a))
                }, g]]
    })();
    var mc = {aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400",
        darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520",
        gray: "#808080", green: "#008000", greenyellow: "#adff2f", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370d8", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23",
        orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#d87093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090",
        snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32"};
    function oc(a, b, c, d) {
        this.Ha(a, b, c, d)
    }
    n = oc.prototype;
    n.Ha = function(a, b, c, d) {
        function e(a) {
            for (var b = 30; 100 > b; b += 20)
                a.ha[2] = b / 100, f.zb.push(a.toString())
        }
        K.call(this);
        this.aa = this.canvas = p(La(a[0]));
        this.canvas.$("position", "absolute");
        this.canvas.$("border", "none");
        this.canvas.$("border-top", "1px solid black");
        this.canvas.$("display", "block");
        this.ia = this.canvas[0].getContext("2d");
        this.size = b;
        this.fc = c;
        this.yh = d;
        this.zb = "rgba(0,0,0,0.0) #000000 #ffffff #000088 #008800 #008888 #880000 #880088 #884400 #888888 #444444 #0000ff #00ff00 #00ffff #ff0000 #ff00ff #ffff00".split(" ");
        var f =
                this;
        e(new L(jc, [0, 0, 0, 1]));
        for (a = 0; 720 > a; a += 35)
            b = new L(jc, [a, 0.5, 0, 1]), e(b);
        pc(this, 100);
        this.canvas.bind("touchstart", function(a) {
            var b = f.canvas.offset();
            f.ac(a.touches[0].pageX - b.left - 0, a.touches[0].pageY - b.top - 0, 1);
            a.preventDefault();
            a.stopPropagation()
        });
        Da(this.canvas, function(a) {
            var b = f.canvas.offset();
            f.ac(a.pageX - b.left - 0, a.pageY - b.top - 0, a.which) || (a.preventDefault(), a.stopPropagation())
        });
        this.canvas.bind("contextmenu", function(a) {
            a.preventDefault();
            a.stopPropagation();
            return!1
        })
    };
    n.log = x("COLOURPANEL");
    function qc(a, b) {
        a.zb = b.slice(0);
        a.log("Set colours to %s len=%s", a.zb, a.zb.length);
        a.sa();
        a.ka()
    }
    function pc(a, b) {
        a.width = b;
        a.canvas.Sa("width", "" + a.width);
        a.sa();
        a.ka()
    }
    function rc(a, b) {
        a.me = b;
        a.canvas.Sa("height", "" + (a.me - 1))
    }
    n.height = function() {
        return this.me
    };
    n.moveTo = function(a, b) {
        this.canvas.$("left", "" + a + "px");
        this.canvas.$("top", "" + b + "px")
    };
    n.sa = function() {
        this.te = Math.floor(this.width / this.size);
        var a = Math.ceil(this.zb.length / this.te);
        this.log("Format to width=%s; height=%s wrap=%s, cpr=%s", this.width, a * this.size, this.yh, this.te);
        this.yh ? rc(this, a * this.size) : rc(this, this.size)
    };
    n.ka = function() {
        for (var a = 0, b = 0, c = 0; c < this.zb.length; c++) {
            var d = lc(this.zb[c]);
            this.ia.fillStyle = this.zb[c];
            this.ia.fillRect(a, b, this.size, this.size);
            0 === d.ha[3] && (this.ia.beginPath(), this.ia.strokeStyle = "#000000", this.ia.moveTo(a, b), this.ia.lineTo(a + this.size, b + this.size), this.ia.moveTo(a + this.size, b), this.ia.lineTo(a, b + this.size), this.ia.stroke());
            a += this.size;
            a >= this.width && (b += this.size, a = 0)
        }
    };
    n.Ra = function() {
        this.canvas.Ra()
    };
    n.show = function() {
        this.canvas.show()
    };
    n.ac = function(a, b, c) {
        a = Math.floor(a / this.size);
        b = Math.floor(b / this.size);
        var d = b * this.te + a;
        this.log("row=%s col=%s index=%s coloursPerRow=%s", b, a, d, this.te);
        return d < this.zb.length ? (this.emit("colour", {ib: this.zb[d], button: c}), !0) : !1
    };
    p.extend(oc.prototype, K.prototype);
    function sc(a, b) {
        this.aa = a;
        this.canvas = document.createElement("canvas");
        this.height = this.width = b;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.cursor = "crosshair";
        this.Aa = 0;
        this.aa.appendChild(this.canvas);
        "G_vmlCanvasManager"in window && window.G_vmlCanvasManager.initElement(this.canvas);
        this.ia = this.canvas.getContext("2d");
        var c = document.createElement("input");
        c.setAttribute("type", "range");
        this.Dd = document.createElement("input");
        this.Dd.setAttribute("type", "checkbox");
        "range" === c.type ? (this.aa.appendChild(document.createElement("br")), this.aa.appendChild(c), c.min = 0, c.max = 255, c.value = 255, this.tc = c) : (this.tc = null, c = "colourcheckbox" + this.Aa, this.Dd.setAttribute("id", c), this.aa.appendChild(document.createElement("br")), this.aa.appendChild(this.Dd), this.Aa += 1, c = p("<label>").Sa("for", c).text("Transparent"), this.aa.appendChild(c[0]));
        this.Wa = this.height;
        this.Bc = 0.8 * this.height;
        if (sc[b])
            this.data = sc[b];
        else {
            for (var c = this.ia.getImageData(0, 0, this.Wa, this.Wa), d = this.Wa /
                    2, e = this.Bc / 2, f, g = 0; g < this.Wa; g++) {
                var h = Math.sqrt(d * d - (g - d) * (g - d)), k = Math.floor(-h + d), l = Math.floor(h + d), m = e * e - (g - d) * (g - d);
                if (0 <= m) {
                    for (var h = Math.sqrt(m), m = Math.floor(-h + d), q = Math.floor(h + d), h = g * this.Wa * 4 + 4 * k; k <= m; k++)
                        f = Math.atan2(g - d, k - d), f = new L(jc, [f / Math.PI * 180, 1, 1, 1]), f = nc(f, hc), c.data[h++] = 255 * f.ha[0], c.data[h++] = 255 * f.ha[1], c.data[h++] = 255 * f.ha[2], c.data[h++] = 255;
                    h = g * this.Wa * 4 + 4 * q;
                    k = q
                } else
                    h = g * this.Wa * 4 + 4 * k;
                for (; k <= l; k++)
                    f = Math.atan2(g - d, k - d), f = new L(jc, [f / Math.PI * 180, 1, 1, 1]), f = nc(f, hc), c.data[h++] =
                            255 * f.ha[0], c.data[h++] = 255 * f.ha[1], c.data[h++] = 255 * f.ha[2], c.data[h++] = 255
            }
            this.data = c;
            sc[b] = c
        }
        this.bb = new L(jc, [20, 1, 1, 1]);
        this.update();
        this.ka();
        var r = this;
        r.uf = !1;
        r.Ud = "";
        Da(p(this.canvas), function(a) {
            var b = p(r.canvas).offset(), c = a.pageX - b.left, b = a.pageY - b.top;
            r.uf = !0;
            tc(r, c, b);
            a.stopPropagation();
            a.preventDefault()
        });
        Ba(p(this.canvas), function(a) {
            if (r.uf) {
                var b = p(r.canvas).offset();
                tc(r, a.pageX - b.left, a.pageY - b.top)
            }
            a.stopPropagation();
            a.preventDefault()
        });
        Ca(p(window), function() {
            r.uf = !1;
            r.Ud =
                    ""
        });
        null !== this.tc && p(this.tc).xf(function() {
            r.bb.ha[3] = r.tc.value / 255;
            r.update();
            r.ka()
        });
        p(this.Dd).xf(function() {
            r.bb.ha[3] = r.Dd.checked ? 0 : 1;
            r.update();
            r.ka()
        })
    }
    sc.prototype = {update: function() {
            this.fg && this.fg(this.bb.toString())
        }, ka: function() {
            this.ia.save();
            this.ia.lineWidth = 1;
            this.ia.fillStyle = "rgb(128, 128, 128)";
            this.ia.fillRect(0, 0, this.width, this.height);
            this.ia.putImageData(this.data, 0, 0);
            var a = this.bb.ha[0] / 180 * Math.PI;
            this.ia.beginPath();
            var b = {x: Math.cos(a) * this.Bc / 2 + this.Wa / 2, y: Math.sin(a) * this.Bc / 2 + this.Wa / 2}, c = {x: Math.cos(a + 2 * Math.PI / 3) * this.Bc / 2 + this.Wa / 2, y: Math.sin(a + 2 * Math.PI / 3) * this.Bc / 2 + this.Wa / 2}, d = {x: Math.cos(a + 4 * Math.PI / 3) * this.Bc / 2 +
                        this.Wa / 2, y: Math.sin(a + 4 * Math.PI / 3) * this.Bc / 2 + this.Wa / 2}, e = Math.cos(a) * this.Wa / 2 + this.Wa / 2, a = Math.sin(a) * this.Wa / 2 + this.Wa / 2, f = c.x + (d.x - c.x) / 2, g = c.y + (d.y - c.y) / 2;
            this.ia.moveTo(b.x, b.y);
            this.ia.lineTo(c.x, c.y);
            this.ia.lineTo(d.x, d.y);
            this.ia.lineTo(b.x, b.y);
            var h = this.ia.createLinearGradient(c.x, c.y, d.x, d.y);
            h.addColorStop(0, "#ffffff");
            h.addColorStop(1, "#000000");
            this.ia.fillStyle = h;
            this.ia.fill();
            h = this.ia.createLinearGradient(b.x, b.y, f, g);
            f = nc(this.bb, jc);
            f.ha[1] = 1;
            f.ha[2] = 1;
            f = nc(f, hc);
            f.ha[3] = 1;
            h.addColorStop(0, f.toString());
            f.ha[3] = 0;
            h.addColorStop(1, f.toString());
            this.ia.fillStyle = h;
            this.ia.fill();
            this.strokeStyle = "#000000";
            this.ia.beginPath();
            this.ia.moveTo(b.x, b.y);
            this.ia.lineTo(e, a);
            this.ia.stroke();
            a = 1 - this.bb.ha[2];
            e = this.bb.ha[1] * b.x + a * d.x + (1 - this.bb.ha[1] - a) * c.x;
            a = this.bb.ha[1] * b.y + a * d.y + (1 - this.bb.ha[1] - a) * c.y;
            this.ia.beginPath();
            this.ia.arc(e, a, 4, 0, 2 * Math.PI, !1);
            this.ia.stroke();
            this.ia.restore();
            this.xi = b;
            this.yi = c;
            this.zi = d
        }};
    function tc(a, b, c) {
        var d = Math.sqrt((b - a.Wa / 2) * (b - a.Wa / 2) + (c - a.Wa / 2) * (c - a.Wa / 2));
        if ("ring" === a.Ud || "triangle" !== a.Ud && d >= a.Bc / 2 && d <= a.Wa / 2)
            a.bb.ha[0] = Math.atan2(a.Wa / 2 - c, a.Wa / 2 - b) / Math.PI * 180 + 180, 0 === a.bb.ha[1] && (a.bb.ha[1] = 1, a.bb.ha[2] = 1), a.Ud = "ring";
        else {
            var e, f = a.xi, d = a.yi, g = a.zi;
            e = (f.x - g.x) * (d.y - g.y) - (d.x - g.x) * (f.y - g.y);
            d = ((d.y - g.y) * (b - g.x) - (d.x - g.x) * (c - g.y)) / e;
            b = (-(f.y - g.y) * (b - g.x) + (f.x - g.x) * (c - g.y)) / e;
            b = 1 - Math.max(0, d) - Math.max(0, b);
            a.bb.ha[1] = Math.min(Math.max(d, 0), 1);
            a.bb.ha[2] = 1 - Math.min(Math.max(b,
                    0), 1);
            a.Ud = "triangle"
        }
        0 === a.bb.ha[3] && (a.bb.ha[3] = 1, null !== a.tc && (a.tc.value = 255));
        a.ka();
        a.update()
    }
    function uc(a, b) {
        a.bb = nc(lc(b), jc);
        null !== a.tc && (a.tc.value = Math.round(255 * a.bb.ha[3]));
        a.Dd.checked = 0 === a.bb.ha[3] ? !0 : !1;
        a.ka();
        a.update()
    }
    function vc() {
        var a = document.createElement("canvas");
        "G_vmlCanvasManager"in window && window.G_vmlCanvasManager.initElement(a);
        return a.getContext && a.getContext("2d").getImageData
    }
    ;
    var wc = Function("return this")();
    wc.JSON || (wc.JSON = {});
    (function() {
        function a(a) {
            return 10 > a ? "0" + a : a
        }
        function b(a) {
            e.lastIndex = 0;
            return e.test(a) ? '"' + a.replace(e, function(a) {
                var b = h[a];
                return"string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }
        function c(a, d) {
            var e, h, s, u, v = f, y, A = d[a];
            A && "object" === typeof A && "function" === typeof A.toJSON && (A = A.toJSON(a));
            "function" === typeof k && (A = k.call(d, a, A));
            switch (typeof A) {
                case "string":
                    return b(A);
                case "number":
                    return isFinite(A) ? String(A) : "null";
                case "boolean":
                case "null":
                    return String(A);
                case "object":
                    if (!A)
                        return"null";
                    f += g;
                    y = [];
                    if ("[object Array]" === Object.prototype.toString.apply(A)) {
                        u = A.length;
                        for (e = 0; e < u; e += 1)
                            y[e] = c(e, A) || "null";
                        s = 0 === y.length ? "[]" : f ? "[\n" + f + y.join(",\n" + f) + "\n" + v + "]" : "[" + y.join(",") + "]";
                        f = v;
                        return s
                    }
                    if (k && "object" === typeof k)
                        for (u = k.length, e = 0; e < u; e += 1)
                            h = k[e], "string" === typeof h && (s = c(h, A)) && y.push(b(h) + (f ? ": " : ":") + s);
                    else
                        for (h in A)
                            Object.hasOwnProperty.call(A, h) && (s = c(h, A)) && y.push(b(h) + (f ? ": " : ":") + s);
                    s = 0 === y.length ? "{}" : f ? "{\n" + f + y.join(",\n" + f) + "\n" +
                            v + "}" : "{" + y.join(",") + "}";
                    f = v;
                    return s
                }
        }
        "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : ""
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return"" + this.valueOf()
        });
        var d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, f, g, h = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, k;
        "function" !== typeof wc.JSON.stringify && (wc.JSON.stringify = function(a, b, d) {
            var e;
            g = f = "";
            if ("number" === typeof d)
                for (e = 0; e < d; e += 1)
                    g += " ";
            else
                "string" === typeof d && (g = d);
            if ((k = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length))
                throw Error("JSON.stringify");
            return c("",
                    {"": a})
        });
        "function" !== typeof wc.JSON.parse && (wc.JSON.parse = function(a, b) {
            function c(a, d) {
                var e, f, g = a[d];
                if (g && "object" === typeof g)
                    for (e in g)
                        Object.hasOwnProperty.call(g, e) && (f = c(g, e), void 0 !== f ? g[e] = f : delete g[e]);
                return b.call(a, d, g)
            }
            var e;
            a = String(a);
            d.lastIndex = 0;
            d.test(a) && (a = a.replace(d, function(a) {
                return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                return e = eval("(" + a + ")"), "function" === typeof b ? c({"": e}, "") : e;
            throw new SyntaxError("JSON.parse");
        })
    })();
    function xc() {
        var a = this;
        K.call(this);
        window.addEventListener("message", function(b) {
            yc(a, b)
        }, !1);
        window.parent.postMessage('{"event": "ready"}', "*")
    }
    xc.prototype = {log: x("Api")};
    function yc(a, b) {
        function c(a) {
            "ticket"in d && (a = {ticket: d.ticket, args: a}, window.parent.postMessage(window.JSON.stringify(a), "*"))
        }
        var d;
        try {
            d = window.JSON.parse(b.data)
        } catch (e) {
            a.log("Error parsing %s from %s", b.data, b.origin);
            return
        }
        a.log("Received %s", b.data);
        if (d["function"]in a.Ma)
            for (var f = a.Ma[d["function"]], g = 0; g < f.length; g++)
                (0, f[g])(d.args, c)
    }
    xc.prototype = p.extend({}, K.prototype, xc.prototype);
    function zc(a) {
        this.Ha(a)
    }
    zc.prototype = {Ha: function(a) {
            if ("string" === typeof a) {
                for (; 8 > a.length; )
                    a += a;
                for (var b = 16777619, c = 0; c < a.length; c++)
                    b = (16777619 * b ^ a.charCodeAt(c)) & 4294967295;
                a = b
            }
            this.mh = a;
            this.reset()
        }, reset: function() {
            this.Je = this.Ie = this.mh
        }, next: function() {
            this.Je = 36969 * (this.Je & 65535) + (this.Je >> 16);
            this.Ie = 18E3 * (this.Ie & 65535) + (this.Ie >> 16);
            return((this.Je << 16) + this.Ie) / 4294967295 / 2 + 0.5
        }};
    function Ac(a, b) {
        for (var c in a)
            a.hasOwnProperty(c) && !b.hasOwnProperty(c) && (b[c] = a[c])
    }
    ;
    function Bc() {
        K.call(this);
        this.aa = document.createElement("div");
        this.aa.style.width = "50px";
        this.aa.style.height = "320px";
        this.aa.style.border = "none";
        this.Uc = {};
        this.bf = 1;
        this.buttons = [];
        this.Rc = 0
    }
    Bc.prototype = {width: function() {
            return parseInt(this.aa.style.width, 10)
        }, focus: function(a) {
            0 < this.buttons.length && (0 < arguments.length && (Cc(this, !1), this.Rc = a), Cc(this, !0))
        }, blur: function() {
            0 < this.buttons.length && Cc(this, !1)
        }, Kb: function(a, b) {
            if (0 !== this.buttons.length) {
                var c = "next" === a || "previous" === a;
                c && Cc(this, !1);
                switch (a) {
                    case "next":
                        this.Rc = Math.min(this.Rc + 1, this.buttons.length - 1);
                        break;
                    case "previous":
                        this.Rc = Math.max(this.Rc - 1, 0);
                        break;
                    case "enter":
                        this.buttons[this.Rc].se(b)
                }
                c && (Cc(this, !0),
                        b.stopPropagation(), b.preventDefault())
            }
        }, moveTo: function(a, b) {
            p(this.aa).$("left", "" + a + "px");
            p(this.aa).$("top", "" + b + "px")
        }, show: function(a) {
            this.aa.style.display = a || 0 === arguments.length ? "block" : "none"
        }, log: x("TOOLBAR"), yb: function(a, b, c) {
            function d() {
                var a = e.style.background;
                e.style.background = "#e7d69f";
                f.style.background = "#e7d69f";
                var b = e.style.background;
                setTimeout(function() {
                    e.style.background === b && (e.style.background = a, f.style.background = a)
                }, 200)
            }
            var e = document.createElement("div"), f = document.createElement("img"),
                    g = this;
            e.style.display = "inline";
            e.style.cssFloat = "left";
            e.style.overflow = "hidden";
            e.style.width = "50px";
            e.style.height = "50px";
            e.style.margin = "1px";
            f.src = a;
            f.aa = e;
            f.style.cursor = "hand";
            f.setAttribute("title", b);
            f.draggable = !1;
            e.appendChild(f);
            p(f).bind("load", function() {
                g.log("Toolbar image loaded; %sx%s", f.width, f.height);
                var a = (50 - f.height) / 2;
                f.style.marginLeft = (50 - f.width) / 2 + "px";
                f.style.marginTop = a + "px"
            });
            this.aa.appendChild(e);
            var h = this.buttons.length;
            c && (p(e).bind("touchstart", function(a) {
                a.preventDefault();
                g.log("Got touchstart");
                d();
                c(a);
                g.emit("click", a)
            }), p(e).click(function(a) {
                g.log("Got a click");
                d();
                c(a);
                g.focus(h);
                g.emit("click", a)
            }));
            this.bf += 51;
            this.buttons.push({element: e, se: c});
            return f
        }};
    function Dc(a, b) {
        for (var c in a.Uc)
            a.Uc.hasOwnProperty(c) && (a.Uc[c].aa.style.background = "#ffffff", a.Uc[c].style.background = "#ffffff");
        b in a.Uc ? (c = a.Uc[b], a.log("Highlight %s", b), c.aa.style.background = "#9fb3e7", c.style.background = "#9fb3e7") : a.log("Failed to highlight %s", b)
    }
    function Ec(a, b, c, d, e) {
        a.Uc[b] = a.yb(d, c, e)
    }
    function Cc(a, b) {
        a.buttons[a.Rc].element.style.outline = b ? "1px dotted gray" : "none"
    }
    Ac(K.prototype, Bc.prototype);
    function Fc() {
        K.call(this);
        this.Ha()
    }
    Fc.prototype = {Ha: function() {
            this.keys = {};
            this.Ne = !0;
            this.$i = RegExp("alt backspace cmd command control ctrl del delete down end enter esc escape f4 home ins insert left meta pagedown pageup right shift up \u2318".split(" ").sort(function(a, c) {
                return c.length - a.length
            }).join("|"), "g");
            var a = this;
            this.hi = function(b) {
                for (var c = a.translate(b), d = 0; d < c.length; d++)
                    a.log("action: %s", c[d]), a.Hf("*", c[d], b)
            }
        }, log: x("KEYMAP"), map: function(a, b) {
            for (var c = a.toLowerCase().split(","), d = b.split(","), e = 0; e < c.length; e++)
                for (var f =
                        0; f < d.length; f++)
                    Gc(this, c[e], d[f])
        }, translate: function(a) {
            var b = [], c = "";
            a.keyCode && (c += a.keyCode);
            a.shiftKey && (c += "-shift");
            a.ctrlKey && (c += "-control");
            a.altKey && (c += "-alt");
            a.metaKey && (c += "-meta");
            a = c;
            a in this.keys && (b = this.keys[a]);
            this.log("%s", a);
            return b
        }, Bb: function(a, b) {
            for (var c = this.translate(a), d = 0; d < c.length; d++)
                b(c[d])
        }};
    function Hc(a, b) {
        p(b).bind("keydown", a.hi)
    }
    function Gc(a, b, c) {
        if (0 !== b.length) {
            var d = b.match(a.$i) || [], e = !1, f = !1, g = !1, h = !1, k = [], l;
            for (l = 0; l < d.length; l++)
                switch (d[l]) {
                    case "alt":
                        g = !0;
                        break;
                    case "control":
                    case "ctrl":
                        f = !0;
                        break;
                    case "shift":
                        e = !0;
                        break;
                    case "shift":
                        e = !0;
                        break;
                    case "home":
                        k.push(36);
                        break;
                    case "end":
                        k.push(35);
                        break;
                    case "pageup":
                        k.push(33);
                        break;
                    case "pagedown":
                        k.push(34);
                        break;
                    case "delete":
                    case "del":
                        k.push(46);
                        break;
                    case "backspace":
                        k.push(8);
                        break;
                    case "up":
                        k.push(38);
                        break;
                    case "right":
                        k.push(39);
                        break;
                    case "down":
                        k.push(40);
                        break;
                    case "left":
                        k.push(37);
                        break;
                    case "escape":
                    case "esc":
                        k.push(27);
                        break;
                    case "enter":
                        k.push(13);
                        break;
                    case "ins":
                    case "insert":
                        k.push(45);
                        break;
                    case "f4":
                        k.push(115);
                        break;
                    case "meta":
                    case "command":
                    case "cmd":
                    case "\u2318":
                        h = !0;
                        break;
                    default:
                        alert("key entry not found: " + d[l])
                }
            d = function(b) {
                e && -1 === b.indexOf("-shift") && (b += "-shift");
                f && -1 === b.indexOf("-control") && (b += "-control");
                g && -1 === b.indexOf("-alt") && (b += "-alt");
                h && -1 === b.indexOf("-meta") && (b += "-meta");
                a.log("Keyboard mapping: %s->%s",
                        b, c);
                if (b in a.keys) {
                    for (var d = 0, k = a.keys[b], d = 0; d < k.length && k[d] !== c; d++)
                        ;
                    d === k.length && a.keys[b].push(c)
                } else
                    a.keys[b] = [c]
            };
            if (0 === k.length)
                switch (b = b.toUpperCase().charAt(b.length - 1), b) {
                    case "=":
                        d("107-shift");
                        d("187");
                        d("61");
                        break;
                    case "+":
                        d("107");
                        d("61-shift");
                        break;
                    case "-":
                        d("109");
                        d("189");
                        d("173");
                        break;
                    default:
                        k.push(b.charCodeAt(0))
                }
            for (l = 0; l < k.length; l++)
                d("" + k[l])
        }
    }
    Ac(K.prototype, Fc.prototype);
    function Kc() {
        var a = document.createElement("input");
        p(a).Sa("type", "range");
        if ("range" === a.type)
            return a.Si = function(b, c) {
                a.min = b;
                a.max = c
            }, a.fi = function() {
                return a.value
            }, a.rh = function(b) {
                a.value = b
            }, a;
        var b = p("<div>");
        b.$("display", "inline-block");
        b.$("vertical-align", "top");
        b.$("height", "1em");
        b.$("width", "10em");
        b.$("padding", "0.25em");
        b.$("position", "relative");
        var c = p("<div>");
        c.$("top", "50%");
        c.$("height", "0");
        c.$("border-top", "1px solid black");
        c.$("border-bottom", "1px solid #888888");
        c.$("position",
                "absolute");
        c.$("left", "0");
        c.$("right", "0");
        var d = p("<div>");
        d.$("height", "1em");
        d.$("left", "0px");
        d.$("background", "#888888");
        d.$("border-top", "1px solid #cccccc");
        d.$("border-left", "1px solid #cccccc");
        d.$("border-bottom", "1px solid #000000");
        d.$("border-right", "1px solid #000000");
        d.$("width", "0.5em");
        d.$("position", "absolute");
        d.$("cursor", "pointer");
        b.append(c);
        b.append(d);
        b[0].type = "range";
        b[0].min = 0;
        b[0].max = 100;
        b[0].value = 0;
        b[0].onchange = function() {
        };
        b[0].Si = function(a, c) {
            b[0].min = a;
            b[0].max =
            c
        };
        b[0].rh = function(a) {
            b[0].value = a;
            var c = b.width() - d.width();
            a = a / b[0].max * c;
            a = Math.round(a);
            a = Math.max(a, 0);
            a = Math.min(a, b.width());
            d.$("left", "" + a + "px")
        };
        b[0].fi = function() {
            return b[0].value
        };
        var e, f, g, h = x("RANGE");
        Da(p(d), function(a) {
            g = !0;
            e = a.pageX;
            f = parseInt(d.$("left"), 10);
            h("Mousedown at %s, ox=%s", e, f);
            a.stopPropagation();
            a.preventDefault()
        });
        Da(p(b), function(a) {
            var c = b.width() - d.width(), h = a.pageX - p(b).offset().left, h = Math.max(h, 0), h = Math.min(h, c);
            d.$("left", "" + h + "px");
            e = a.pageX;
            f = h;
            h = h / c *
                    (b[0].max - b[0].min) + b[0].min;
            h = Math.round(h);
            b[0].value = h;
            b[0].onchange();
            g = !0
        });
        Ba(p(b), function(a) {
            if (g) {
                var c = b.width() - d.width();
                a = a.pageX - e + f;
                a = Math.max(a, 0);
                a = Math.min(a, c);
                d.$("left", "" + a + "px");
                a = a / c * (b[0].max - b[0].min) + b[0].min;
                a = Math.round(a);
                b[0].value = a;
                b[0].onchange()
            }
        });
        Ca(p(document.body), function() {
            g = !1
        });
        return b[0]
    }
    ;
    function B(a, b) {
        this.x = a;
        this.y = b
    }
    B.prototype.Hb = function(a) {
        return Math.sqrt((a.x - this.x) * (a.x - this.x) + (a.y - this.y) * (a.y - this.y))
    };
    B.prototype.toString = function() {
        return"(" + this.x + ", " + this.y + ")"
    };
    B.prototype.Be = function(a) {
        return this.x === a.x && this.y === a.y
    };
    B.prototype.La = function() {
        return new B(this.x, this.y)
    };
    function Lc(a, b) {
        this.width = a;
        this.height = b
    }
    function H(a, b, c, d) {
        return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d))
    }
    function I(a, b, c, d) {
        var e = H(a, b, c, d);
        return 0 === e ? {x: 1, y: 0} : {x: (c - a) / e, y: (d - b) / e}
    }
    function Mc(a) {
        a.x *= -1;
        a.y *= -1;
        return a
    }
    function M(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d;
        0 > this.width && (this.x += this.width, this.width = -this.width);
        0 > this.height && (this.y += this.height, this.height = -this.height)
    }
    function Nc(a) {
        if (0 === a.length)
            return new M(0, 0, 0, 0);
        for (var b = a[0].x, c = a[0].x, d = a[0].y, e = a[0].y, f = 1; f < a.length; f++)
            a[f].x < b && (b = a[f].x), a[f].x > c && (c = a[f].x), a[f].y < d && (d = a[f].y), a[f].y > e && (e = a[f].y);
        return new M(b, d, c - b, e - d)
    }
    M.prototype = {save: function() {
            return{x: this.x, y: this.y, width: this.width, height: this.height}
        }, La: function() {
            return new M(this.x, this.y, this.width, this.height)
        }, contains: function(a) {
            return this.x <= a.x && this.x + this.width > a.x + a.width && this.y <= a.y && this.y + this.height > a.y + a.height
        }, gc: function(a, b) {
            return this.x <= a && this.x + this.width > a && this.y <= b && this.y + this.height > b
        }, Ac: function(a, b) {
            void 0 === b && (b = a);
            this.x -= a / 2;
            this.y -= b / 2;
            this.width += a;
            this.height += b
        }, transform: function(a) {
            var b, c, d;
            b = a.apply(this.x,
                    this.y);
            c = a.apply(this.x + this.width, this.y);
            d = a.apply(this.x + this.width, this.y + this.height);
            a = a.apply(this.x, this.y + this.height);
            this.x = Math.min(b.x, c.x, d.x, a.x);
            this.y = Math.min(b.y, c.y, d.y, a.y);
            this.width = Math.max(b.x, c.x, d.x, a.x) - this.x;
            this.height = Math.max(b.y, c.y, d.y, a.y) - this.y
        }, right: function() {
            return this.x + this.width
        }, bottom: function() {
            return this.y + this.height
        }, toString: function() {
            return"Rectangle(" + this.x + ", " + this.y + ", " + this.width + ", " + this.height + ")"
        }};
    function Oc(a) {
        return new B(a.x + a.width / 2, a.y + a.height / 2)
    }
    function Pc(a, b, c) {
        b < a.x ? (a.width += a.x - b, a.x = b) : b > a.x + a.width && (a.width = b - a.x);
        c < a.y ? (a.height += a.y - c, a.y = c) : c > a.y + a.height && (a.height = c - a.y)
    }
    function Qc(a, b) {
        b.x < a.x && (a.width += a.x - b.x, a.x = b.x);
        b.y < a.y && (a.height += a.y - b.y, a.y = b.y);
        b.x + b.width > a.x + a.width && (a.width += b.x + b.width - a.x - a.width);
        b.y + b.height > a.y + a.height && (a.height += b.y + b.height - a.y - a.height)
    }
    function N(a) {
        if (0 === arguments.length)
            this.m11 = 1, this.m21 = this.m12 = 0, this.m22 = 1, this.ya = this.xa = 0;
        else if (1 === arguments.length) {
            if (6 !== arguments[0].length)
                throw"Bad array initializer for Matrix.";
            this.m11 = arguments[0][0];
            this.m12 = arguments[0][1];
            this.m21 = arguments[0][2];
            this.m22 = arguments[0][3];
            this.xa = arguments[0][4];
            this.ya = arguments[0][5]
        } else if (6 === arguments.length)
            this.m11 = arguments[0], this.m12 = arguments[1], this.m21 = arguments[2], this.m22 = arguments[3], this.xa = arguments[4], this.ya = arguments[5];
        else
            throw"Bad initializer for Matrix.";
    }
    N.prototype = {log: x("MATRIX"), toString: function() {
            return"[ " + this.m11 + " " + this.m12 + " " + this.xa + "    " + this.m21 + " " + this.m22 + " " + this.ya + "    0 0 1 ]"
        }, Nb: function() {
            return[this.m11, this.m12, this.m21, this.m22, this.xa, this.ya]
        }, xb: "Matrix", multiply: function(a) {
            var b = new N;
            b.m11 = this.m11 * a.m11 + this.m12 * a.m21;
            b.m21 = this.m21 * a.m11 + this.m22 * a.m21;
            b.m12 = this.m11 * a.m12 + this.m12 * a.m22;
            b.m22 = this.m21 * a.m12 + this.m22 * a.m22;
            b.xa = this.m11 * a.xa + this.m12 * a.ya + this.xa;
            b.ya = this.m21 * a.xa + this.m22 * a.ya + this.ya;
            return b
        },
        apply: function(a, b) {
            return new B(this.m11 * a + this.m12 * b + this.xa, this.m21 * a + this.m22 * b + this.ya)
        }, La: function() {
            return new N(this.m11, this.m12, this.m21, this.m22, this.xa, this.ya)
        }, inverse: function() {
            var a = this.m11 * this.m22 - this.m12 * this.m21;
            return new N(this.m22 / a, -this.m12 / a, -this.m21 / a, this.m11 / a, (this.m12 * this.ya - this.xa * this.m22) / a, (this.xa * this.m21 - this.m11 * this.ya) / a)
        }};
    function Rc(a, b) {
        b.transform(a.m11, a.m21, a.m12, a.m22, a.xa, a.ya)
    }
    function O(a, b, c, d) {
        void 0 === c ? (this.m11 = a, this.m21 = this.m12 = 0, this.m22 = b, this.gh = this.fh = this.ya = this.xa = 0) : (this.m11 = a, this.m21 = this.m12 = 0, this.m22 = b, this.xa = c - a * c, this.ya = d - b * d, this.fh = c, this.gh = d);
        this.fj = a;
        this.gj = b
    }
    O.prototype.inverse = function() {
        return new O(1 / this.fj, 1 / this.gj, this.fh, this.gh)
    };
    Ac(N.prototype, O.prototype);
    function Sc(a, b, c) {
        var d = Math.cos(a), e = Math.sin(a);
        this.m11 = d;
        this.m12 = e;
        this.m21 = -e;
        this.m22 = d;
        this.xa = -b * d - c * e + b;
        this.ya = b * e - c * d + c;
        this.rf = a;
        this.x = b;
        this.y = c
    }
    Sc.prototype.inverse = function() {
        return new Sc(-this.rf, this.x, this.y)
    };
    Ac(N.prototype, Sc.prototype);
    function Tc(a, b, c) {
        var d = Math.cos(2 * a), e = Math.sin(2 * a);
        this.m11 = d;
        this.m21 = this.m12 = e;
        this.m22 = -d;
        this.xa = -b * d - c * e + b;
        this.ya = -b * e + c * d + c;
        this.rf = a;
        this.x = b;
        this.y = c
    }
    Tc.prototype.inverse = function() {
        return new Tc(-this.rf, this.x, this.y)
    };
    Ac(N.prototype, Tc.prototype);
    function E(a, b) {
        this.m11 = 1;
        this.m21 = this.m12 = 0;
        this.m22 = 1;
        this.xa = a;
        this.ya = b
    }
    E.prototype.inverse = function() {
        return new E(-this.xa, -this.ya)
    };
    Ac(N.prototype, E.prototype);
    function Uc(a, b, c, d, e, f, g, h, k, l) {
        if (!(8 < ++Vc)) {
            var m = (b + d) / 2, q = (c + e) / 2, r = (d + f) / 2, s = (e + g) / 2, u = (f + h) / 2, v = (g + k) / 2, y = (m + r) / 2, A = (q + s) / 2, r = (r + u) / 2, s = (s + v) / 2, Ic = (y + r) / 2, Jc = (A + s) / 2, Ub = h - b, Vb = k - c;
            d = Math.abs((d - h) * Vb - (e - k) * Ub);
            f = Math.abs((f - h) * Vb - (g - k) * Ub);
            (d + f) * (d + f) < l * (Ub * Ub + Vb * Vb) ? a.push(new B(Ic, Jc)) : (Uc(a, b, c, m, q, y, A, Ic, Jc, l), Uc(a, Ic, Jc, r, s, u, v, h, k, l))
        }
        Vc -= 1
    }
    var Vc = 0;
    function Wc(a, b, c, d, e, f, g, h) {
        if (!(8 < ++Vc)) {
            var k = (b + d) / 2, l = (c + e) / 2, m = (d + f) / 2, q = (e + g) / 2, r = (k + m) / 2, s = (l + q) / 2, u = f - b, v = g - c;
            d = Math.abs((d - f) * v - (e - g) * u);
            d * d <= h * (u * u + v * v) ? a.push(new B(r, s)) : (Wc(a, b, c, k, l, r, s, h), Wc(a, r, s, m, q, f, g, h))
        }
        Vc -= 1
    }
    function Xc(a, b, c) {
        var d, e, f, g, h, k, l, m, q = 0;
        if (3 > a.length)
            return 0;
        f = a[a.length - 1].x;
        g = a[a.length - 1].y;
        for (m = 0; m < a.length; m++)
            d = a[m].x, e = a[m].y, d > f ? (h = f, l = d, k = g, g = e) : (h = d, l = f, k = e), d < b === b <= f && (c - k) * (l - h) < (g - k) * (b - h) && (q = !q), f = d, g = e;
        return q
    }
    function Yc(a) {
        this.clear();
        a instanceof M && (this.moveTo(a.x, a.y), this.lineTo(a.x + a.width, a.y), this.lineTo(a.x + a.width, a.y + a.height), this.lineTo(a.x, a.y + a.height), this.lineTo(a.x, a.y), this.close())
    }
    var yb = 0, zb = 1, Bb = 4, Cb = [3, 3, 7, 5, 1], Zc = [1, 1, 3, 2, 0];
    Yc.prototype = {clear: function() {
            this.closed = !1;
            this.ea = []
        }, moveTo: function(a, b) {
            this.ea.push(yb, a, b)
        }, lineTo: function(a, b) {
            this.ea.push(zb, a, b)
        }, bezierCurveTo: function(a, b, c, d, e, f) {
            this.ea.push(2, a, b, c, d, e, f)
        }, quadraticCurveTo: function(a, b, c, d) {
            this.ea.push(3, a, b, c, d)
        }, close: function() {
            this.ea.push(Bb)
        }, ka: function(a) {
            for (var b = 0; b < this.ea.length; ) {
                switch (this.ea[b]) {
                    case yb:
                        a.moveTo(this.ea[b + 1], this.ea[b + 2]);
                        break;
                    case zb:
                        a.lineTo(this.ea[b + 1], this.ea[b + 2]);
                        break;
                    case 2:
                        a.bezierCurveTo(this.ea[b +
                        1], this.ea[b + 2], this.ea[b + 3], this.ea[b + 4], this.ea[b + 5], this.ea[b + 6]);
                        break;
                    case 3:
                        a.quadraticCurveTo(this.ea[b + 1], this.ea[b + 2], this.ea[b + 3], this.ea[b + 4]);
                        break;
                    case Bb:
                        a.closePath();
                        break;
                    default:
                        alert("Error!")
                }
                b += Cb[this.ea[b]]
            }
        }, transform: function(a) {
            for (var b = 0, c, d; b < this.ea.length; ) {
                d = Zc[this.ea[b]];
                for (c = 0; c < d; c++) {
                    var e = a.apply(this.ea[b + 1 + 2 * c], this.ea[b + 1 + 2 * c + 1]);
                    this.ea[b + 1 + 2 * c] = e.x;
                    this.ea[b + 1 + 2 * c + 1] = e.y
                }
                b += Cb[this.ea[b]]
            }
        }, La: function() {
            var a = new Yc;
            a.ea = this.ea.concat();
            return a
        }, append: function(a) {
            this.ea =
                    this.ea.concat(a.ea)
        }};
    function xb(a) {
        function b(a, b) {
            f -= (a - d) * (b + e);
            d = a;
            e = b
        }
        for (var c = 0, d, e, f = 0; c < a.ea.length; ) {
            switch (a.ea[c]) {
                case yb:
                    d = a.ea[c + 1];
                    e = a.ea[c + 2];
                    break;
                case zb:
                    b(a.ea[c + 1], a.ea[c + 2]);
                    break;
                case 2:
                    b(a.ea[c + 5], a.ea[c + 6]);
                    break;
                case 3:
                    b(a.ea[c + 3], a.ea[c + 4])
            }
            c += Cb[a.ea[c]]
        }
        return f / 2
    }
    function $c(a, b, c) {
        for (var d = 0, e = 0, f = c[0], g, h = new B(0, 0), k; d < a.ea.length; ) {
            switch (a.ea[d]) {
                case yb:
                    k = a.ea[d + 1];
                    g = a.ea[d + 2];
                    b.moveTo(k, g);
                    h = new B(k, g);
                    break;
                case zb:
                    k = a.ea[d + 1];
                    var l = g = a.ea[d + 2], m = new B(k, l);
                    g = h.Hb(m);
                    if (!(0 >= g)) {
                        for (; g > f; )
                            h.x += (m.x - h.x) * f / g, h.y += (m.y - h.y) * f / g, e & 1 ? b.moveTo(h.x, h.y) : b.lineTo(h.x, h.y), g -= f, e = (e + 1) % c.length, f = c[e];
                        g <= f && (h = new B(k, l), e & 1 ? b.moveTo(h.x, h.y) : b.lineTo(h.x, h.y), f -= g)
                    }
            }
            d += Cb[a.ea[d]]
        }
    }
    function ad(a, b) {
        for (var c = 0, d, e, f = new M(a.ea[1], a.ea[2], 0, 0), g; c < a.ea.length; ) {
            switch (a.ea[c]) {
                case yb:
                case zb:
                    d = a.ea[c + 1];
                    e = a.ea[c + 2];
                    Pc(f, d, e);
                    break;
                case 2:
                    var h = g = [], k = a.ea[c + 5], l = a.ea[c + 6];
                    d !== k && e !== l && Uc(h, d, e, a.ea[c + 1], a.ea[c + 2], a.ea[c + 3], a.ea[c + 4], k, l, b * b);
                    h.push(new B(k, l));
                    for (d = 0; d < g.length; d++)
                        Pc(f, g[d].x, g[d].y);
                    d = a.ea[c + 5];
                    e = a.ea[c + 6];
                    break;
                case 3:
                    h = g = [];
                    k = a.ea[c + 3];
                    l = a.ea[c + 4];
                    d !== k && e !== l && Wc(h, d, e, a.ea[c + 1], a.ea[c + 2], k, l, b * b);
                    h.push(new B(k, l));
                    for (d = 0; d < g.length; d++)
                        Pc(f, g[d].x,
                                g[d].y);
                    d = a.ea[c + 3];
                    e = a.ea[c + 4]
            }
            c += Cb[a.ea[c]]
        }
        return f
    }
    function bd(a) {
        for (var b = 0, c, d = []; b < a.ea.length; ) {
            var e = Zc[a.ea[b]];
            for (c = 0; c < e; c++)
                d.push(new B(a.ea[b + 1 + 2 * c], a.ea[b + 1 + 2 * c + 1]));
            b += Cb[a.ea[b]]
        }
        return d
    }
    function cd(a, b, c, d, e) {
        var f;
        if (2 >= d - c)
            e.push(a[c]);
        else {
            var g = a[c], h = a[d - 1], k = 0, l = 0;
            for (f = c + 1; f < d; f++) {
                var m, q = a[f], r = g.x;
                m = g.y;
                var s = q.x, q = q.y, u = h.x - r, v = h.y - m, y = ((s - r) * u + (q - m) * v) / (u * u + v * v);
                1 < y ? y = 1 : 0 > y && (y = 0);
                r = r + y * u - s;
                m = m + y * v - q;
                m = Math.sqrt(r * r + m * m);
                m > k && (k = m, l = f)
            }
            0 < l && k > b ? (cd(a, b, c, l, e), cd(a, b, l, d, e)) : e.push(g)
        }
    }
    function dd(a, b) {
        var c = [];
        cd(a, b, 0, a.length, c);
        0 < a.length && 0 < c.length && !a[a.length - 1].Be(c[c.length - 1]) && c.push(a[a.length - 1]);
        return c
    }
    function P(a) {
        this.oa = [];
        if (1 === arguments.length) {
            var b = arguments[0];
            if (b instanceof M)
                this.oa.push(new B(b.x, b.y)), this.oa.push(new B(b.right(), b.y)), this.oa.push(new B(b.right(), b.bottom())), this.oa.push(new B(b.x, b.bottom()));
            else if (b instanceof Array)
                this.oa = b;
            else
                throw alert("Bad parameter passed to Polygon() constructor."), "Error";
        }
    }
    P.prototype = {transform: function(a) {
            for (var b = 0; b < this.oa.length; b++)
                this.oa[b] = a.apply(this.oa[b].x, this.oa[b].y)
        }, add: function(a, b) {
            this.oa.push(new B(a, b))
        }, gc: function(a, b) {
            return Xc(this.oa, a, b)
        }, La: function() {
            return new P(this.oa.slice(0))
        }, Be: function(a) {
            if (this.oa.length !== a.oa.length)
                return!1;
            for (var b = 0; b < this.oa.length; b++) {
                var c = this.oa[b], d = a.oa[b];
                if (c.x !== d.x || c.y !== d.y)
                    return!1
            }
            return!0
        }, Ac: function(a) {
            for (var b = [], c = 0; c < this.oa.length; c++) {
                var d = this.oa[0 === c ? this.oa.length - 1 : c - 1],
                        e = this.oa[c], f = this.oa[c === this.oa.length - 1 ? 0 : c + 1], g = H(d.x, d.y, e.x, e.y), h = H(f.x, f.y, e.x, e.y);
                b.push({x: e.x + ((e.x - d.x) / g + (e.x - f.x) / h) / Math.sqrt(2) * a, y: e.y + ((e.y - d.y) / g + (e.y - f.y) / h) / Math.sqrt(2) * a})
            }
            this.oa = b
        }, ka: function(a) {
            if (!(1 > this.oa.length)) {
                a.moveTo(this.oa[0].x, this.oa[0].y);
                for (var b = 1; b < this.oa.length; b++)
                    a.lineTo(this.oa[b].x, this.oa[b].y);
                a.closePath()
            }
        }};
    function ed(a, b, c) {
        for (var d = a.length - 1, e = d + 1, f = d + 2, g = [], h = 0; h < e; h++) {
            g.push([]);
            for (var k = 0; k < f; k++)
                g[h].push(0)
        }
        for (e = 1; e < d; e++)
            g[e][e - 1] = 1 / (a[e] - a[e - 1]), g[e][e] = 2 * (1 / (a[e] - a[e - 1]) + 1 / (a[e + 1] - a[e])), g[e][e + 1] = 1 / (a[e + 1] - a[e]), g[e][d + 1] = 3 * ((b[e] - b[e - 1]) / ((a[e] - a[e - 1]) * (a[e] - a[e - 1])) + (b[e + 1] - b[e]) / ((a[e + 1] - a[e]) * (a[e + 1] - a[e])));
        g[0][0] = 2 / (a[1] - a[0]);
        g[0][1] = 1 / (a[1] - a[0]);
        g[0][d + 1] = 3 * (b[1] - b[0]) / ((a[1] - a[0]) * (a[1] - a[0]));
        g[d][d - 1] = 1 / (a[d] - a[d - 1]);
        g[d][d] = 2 / (a[d] - a[d - 1]);
        g[d][d + 1] = 3 * (b[d] - b[d - 1]) / ((a[d] -
                a[d - 1]) * (a[d] - a[d - 1]));
        a = g.length;
        for (d = 0; d < a; d++) {
            e = 0;
            f = Number.NEGATIVE_INFINITY;
            for (b = d; b < a; b++)
                g[b][d] > f && (e = b, f = g[b][d]);
            f = g;
            h = e;
            k = f[d];
            f[d] = f[h];
            f[h] = k;
            0 === g[e][b] && console.log("matrix is singular!");
            for (b = d + 1; b < a; b++) {
                for (e = d + 1; e < a + 1; e++)
                    g[b][e] -= g[b][d] / g[d][d] * g[d][e];
                g[b][d] = 0
            }
        }
        for (b = a - 1; 0 <= b; b--)
            for (d = g[b][a] / g[b][b], c[b] = d, e = b - 1; 0 <= e; e--)
                g[e][a] -= g[e][b] * d, g[e][b] = 0
    }
    function fd(a, b, c, d) {
        for (var e = 1; b[e] < a; )
            e++;
        a = (a - b[e - 1]) / (b[e] - b[e - 1]);
        return(1 - a) * c[e - 1] + a * c[e] + a * (1 - a) * ((d[e - 1] * (b[e] - b[e - 1]) - (c[e] - c[e - 1])) * (1 - a) + (-d[e] * (b[e] - b[e - 1]) + (c[e] - c[e - 1])) * a)
    }
    ;
    function gd(a, b) {
        this.Ha(a, b)
    }
    n = gd.prototype;
    n.Ha = function(a, b) {
        K.call(this);
        this.Ne = !0;
        this.id = a;
        this.canvas = La(document.body);
        this.canvas.style.position = "absolute";
        this.canvas.style.border = "none";
        this.ia = this.canvas.getContext("2d");
        this.lc = b;
        this.width = 32;
        this.height = 500;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        var c = this;
        p(this.canvas).bind("click", function(a) {
            c.ac(a)
        });
        p(this.canvas).bind("mousedown", function(a) {
            c.Ta(a)
        });
        p(document.body).bind("mousemove", function(a) {
            c.Xa(a)
        });
        p(document.body).bind("mouseup", function(a) {
            c.Ya(a)
        });
        p(this.canvas).bind("touchstart", function(a) {
            c.fb(a)
        });
        p(document.body).bind("touchmove", function(a) {
            c.fb(a)
        });
        p(document.body).bind("touchend", function(a) {
            c.fb(a)
        });
        this.hb = null;
        this.Va = !1;
        this.Fh = "#c0c0c0";
        this.Dg = "#808080";
        this.borderWidth = 1;
        this.kc = 0;
        this.jc = 100;
        this.ef = 10;
        this.position = 5;
        this.sa()
    };
    n.log = x("SCROLLBAR", !0);
    n.moveTo = function(a, b) {
        this.canvas.style.left = "" + a + "px";
        this.canvas.style.top = "" + b + "px"
    };
    function hd(a, b, c) {
        a.width = b;
        a.height = c;
        a.canvas.width = a.width;
        a.canvas.height = c;
        a.sa();
        a.ka()
    }
    n.Ra = function() {
        this.canvas.style.display = "none"
    };
    n.show = function() {
        this.canvas.style.display = "block"
    };
    n.sa = function() {
        var a;
        a = this.lc ? this.width : this.height;
        var b = this.ef / this.jc * a;
        a *= (this.position - this.kc) / this.jc;
        this.hb = this.lc ? new M(a, 0, b - 1, this.height - 1) : new M(0, a, this.width - 1, b - 1);
        this.hb.x = Math.round(this.hb.x) + 0.5;
        this.hb.y = Math.round(this.hb.y) + 0.5;
        this.hb.width = Math.round(this.hb.width);
        this.hb.height = Math.round(this.hb.height)
    };
    n.ka = function() {
        this.ia.beginPath();
        this.ia.fillStyle = this.Fh;
        this.ia.strokeStyle = this.Dg;
        this.ia.lineWidth = this.borderWidth;
        this.ia.rect(this.borderWidth / 2, this.borderWidth / 2, this.width - this.borderWidth, this.height - this.borderWidth);
        this.ia.fill();
        this.ia.stroke();
        this.ia.beginPath();
        this.ia.fillStyle = this.Dg;
        this.ia.strokeStyle = "#000000";
        this.ia.rect(this.hb.x, this.hb.y, this.hb.width, this.hb.height);
        this.ia.fill();
        this.ia.stroke()
    };
    function id(a, b) {
        var c = p(a.canvas).offset();
        if ("touchstart" === b.type || "touchend" === b.type || "touchmove" === b.type)
            b = b.changedTouches[0];
        return new B(b.pageX - c.left, b.pageY - c.top)
    }
    n.fb = function(a) {
        switch (a.type) {
            case "touchstart":
                this.Ta(a);
                break;
            case "touchend":
                this.Ya(a);
                break;
            case "touchmove":
                this.Xa(a)
            }
    };
    n.ac = function() {
    };
    function jd(a, b) {
        var c;
        c = a.lc ? b.x / a.width * a.jc + a.kc : b.y / a.height * a.jc + a.kc;
        c = Math.min(c, a.jc - a.ef + a.kc);
        return c = Math.max(c, a.kc)
    }
    n.Ta = function(a) {
        a.preventDefault();
        a = id(this, a);
        this.hb.gc(a.x, a.y) ? this.lc ? (this.offset = a.x - this.hb.x, a.x -= this.offset) : (this.offset = a.y - this.hb.y, a.y -= this.offset) : (this.position = jd(this, a), this.offset = 0, this.lc ? this.hb.x = (this.position - this.kc) / this.jc * this.width : this.hb.y = (this.position - this.kc) / this.jc * this.height, this.emit("scroll", this.position), this.ka());
        this.Va = !0
    };
    n.Xa = function(a) {
        this.Va && (this.Va && "mousemove" === a.type && ("buttons"in a && 0 === a.buttons || 0 === a.which) ? this.Va = !1 : (a.preventDefault(), a = id(this, a), this.lc ? a.x -= this.offset : a.y -= this.offset, this.position = jd(this, a), this.emit("scroll", this.position), this.sa(), this.ka()))
    };
    n.Ya = function() {
        this.Va && (this.Va = !1)
    };
    function kd(a) {
        return a.lc ? a.height : a.width
    }
    gd.prototype = p.extend({}, K.prototype, gd.prototype);
    function ld(a, b, c, d, e) {
        this.view = a;
        this.handle = b;
        this.jj = c;
        this.view.If = this.handle instanceof md;
        this.Sg = !1;
        this.Ta(d, e)
    }
    function nd(a) {
        for (var b = [], c = 0; c < a.length; c++)
            b.push(a[c].id);
        return b
    }
    ld.prototype = {log: x("TransformSelectionBehaviour"), fb: function(a) {
            var b;
            if (!this.Sg) {
                for (b = 0; b < a.touches.length; ) {
                    b = a.touches[b];
                    b = z(this.view, b.pageX, b.pageY);
                    "touchmove" === a.type && this.Xa(b.x, b.y, a);
                    break
                }
                for (b = 0; b < a.changedTouches.length; ) {
                    b = a.changedTouches[b];
                    b = z(this.view, b.pageX, b.pageY);
                    "touchend" === a.type && this.Ya(b.x, b.y, a);
                    break
                }
            }
        }, qd: function(a) {
            this.log("%s scale=%s rotation=%s", a.type, a.scale, a.rotation);
            this.Sg = !0;
            var b = this.wd.x + this.wd.width / 2, c = this.wd.y + this.wd.height / 2, d = a.scale;
            this.view.ee || (d = 1);
            var e = -a.rotation / 180 * Math.PI;
            if (0 < this.view.da.get("snap"))
                var f = Math.PI / 16, e = Math.floor(e / f) * f;
            b = (new O(d, d, b, c)).multiply(new Sc(e, b, c));
            c = b.inverse();
            for (d = 0; d < this.za.length; d++)
                od(this.za[d], b.multiply(this.Sd[d]), this.Qd[d].multiply(c)), this.za[d].sa(this.view.ia, this.view.rb);
            this.view.Ve = b;
            this.view.ka();
            if ("gestureend" === a.type) {
                for (d = 0; d < this.za.length; d++)
                    od(this.za[d], this.Sd[d], this.Qd[d]);
                this.view.va([new Q(nd(this.za), b, b.inverse())]);
                pd(this)
            }
        }, Ta: function(a,
                b) {
            this.log("onMouseDown(%s,%s)", a, b);
            this.Ad = this.view.cb(new B(a, b));
            var c = this.za = this.view.ld();
            this.Sd = [];
            this.Qd = [];
            for (var d = 0; d < c.length; d++)
                this.Sd.push(R(c[d])), this.Qd.push(qd(c[d]));
            this.wd = new M(this.view.Db.x, this.view.Db.y, this.view.Db.width, this.view.Db.height);
            this.Qh = Oc(this.wd).x;
            this.Rh = Oc(this.wd).y
        }, Xa: function(a, b) {
            var c = this, d = this.view.cb(new B(a, b));
            a = d.x;
            b = d.y;
            for (var d = this.handle.Fe(new B(d.x - this.Ad.x, d.y - this.Ad.y)), e = d.inverse(), f = 0; f < this.za.length; f++)
                od(this.za[f],
                        d.multiply(this.Sd[f]), this.Qd[f].multiply(e)), this.za[f].sa(this.view.ia, this.view.rb);
            this.view.Ve = d;
            this.handle instanceof md && (this.view.kg = a, this.view.lg = b);
            this.view.ka(function() {
                if (c.handle instanceof md) {
                    var d = c.view.ia;
                    d.save();
                    d.beginPath();
                    d.strokeStyle = "#0050B7";
                    d.lineWidth = 1 / c.view.scale;
                    d.moveTo(c.Qh, c.Rh);
                    d.lineTo(a, b);
                    d.stroke();
                    d.restore()
                }
            })
        }, Ya: function(a, b) {
            this.log("onMouseUp(%s,%s)", a, b);
            var c = this.view.cb(new B(a, b));
            a = c.x;
            b = c.y;
            if (c.Be(this.Ad))
                this.jj ? (c = this.view.ja.pb(a,
                        b, this.view.Ja)) && c.Rf() && (this.log("Didn't move, and has edit mode. Selecting node %s", c.id), this.view.ob(), this.view.Fa = c) : this.log("Didn't move, but toggleEditNode=false");
            else {
                for (var c = this.handle.Fe(new B(c.x - this.Ad.x, c.y - this.Ad.y)), d = 0; d < this.za.length; d++)
                    od(this.za[d], this.Sd[d], this.Qd[d]);
                this.view.va([new Q(nd(this.za), c, c.inverse())])
            }
            pd(this)
        }, pd: function() {
            this.log("onDoubleClick")
        }};
    function pd(a) {
        var b = new N;
        a.view.Ve = b;
        a.view.If = !0;
        rd(a.view);
        a.view.update(!0);
        F(a.view)
    }
    ;
    function sd(a, b, c, d, e, f) {
        this.view = a;
        this.nodeType = b;
        this.ba = c;
        this.width = d;
        this.height = e;
        this.Li = f;
        this.state = "initial";
        this.ma = this.Ad = null
    }
    sd.prototype = {log: x("DrawShape"), Zb: function() {
            this.log("Entering DrawShapeBehaviour");
            this.view.canvas.style.cursor = "crosshair"
        }, nc: function() {
            this.log("Leaving DrawShapeBehaviour");
            this.ma && (this.view.ja.removeNode(this.ma), this.view.update(), this.ma = null)
        }, Kb: function(a) {
            "cancel" === a && F(this.view)
        }, fb: function(a) {
            var b;
            "touchstart" === a.type ? (b = a.changedTouches[0], b = z(this.view, b.pageX, b.pageY), this.Ta(b.x, b.y)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = z(this.view, b.pageX, b.pageY), this.Xa(b.x,
                    b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = z(this.view, b.pageX, b.pageY), this.Ya(b.x, b.y, a))
        }, Ta: function(a, b) {
            "initial" === this.state && (this.start = this.view.cb(new B(a, b)), this.state = "predraw", this.log("initial -> predraw"))
        }, Xa: function(a, b, c) {
            a = this.view.cb(new B(a, b));
            "predraw" === this.state && 10 < this.start.Hb(a) && (this.create(), this.state = "drawing", this.log("predraw -> drawing"));
            "drawing" === this.state && (this.transform(this.start, a, c.ctrlKey), this.view.update())
        }, Ya: function(a, b, c) {
            "predraw" ===
                    this.state ? (this.create(), this.transform(this.start, null, c.ctrlKey), this.va(), F(this.view)) : "drawing" === this.state && (this.transform(this.start, this.view.cb(new B(a, b)), c.ctrlKey), this.va(), F(this.view))
        }, create: function() {
            this.ma = td(this.nodeType, this.view.ja.Aa++);
            ud(this.ma, this.ba);
            vd(this.view.ja, this.ma)
        }, transform: function(a, b, c) {
            var d, e;
            if (b)
                if ("circle" === this.Li)
                    d = a, a = a.Hb(b), e = 2 * a / this.width, a = 2 * a / this.height;
                else {
                    e = [a, b];
                    if (0 === e.length)
                        d = new B(0, 0);
                    else {
                        d = e[0].x;
                        for (var f = e[0].y, g = 1; g <
                                e.length; g++)
                            d += e[g].x, f += e[g].y;
                        d = new B(d / e.length, f / e.length)
                    }
                    e = (b.x - a.x) / this.width;
                    a = (b.y - a.y) / this.height
                }
            else
                d = a, a = e = 1;
            c && (a = e = Math.min(e, a));
            c = new E(d.x, d.y);
            c = c.multiply(new O(e, a));
            od(this.ma, c, c.inverse());
            wd(this.view.ja, this.ma.id)
        }, va: function() {
            this.ba.matrix = R(this.ma);
            this.ba.inverse = qd(this.ma);
            this.view.ja.removeNode(this.ma);
            this.ma = null;
            this.view.va([new D(this.nodeType, this.ba)])
        }};
    function xd(a) {
        this.view = a;
        this.Ae = !1;
        this.Pc = this.Da = null;
        this.multiline = a.da.get("multilineText");
        this.tg = "normal";
        a.da.get("iPadNoScrollText") && null !== navigator.userAgent.match(/iPad/i) && (this.tg = "top")
    }
    xd.prototype = {log: x("Text"), Zb: function() {
            this.log("Entering text mode");
            this.view.canvas.style.cursor = "text"
        }, nc: function() {
            this.Ae && yd(this);
            this.view.canvas.style.cursor = "default";
            this.log("Leaving text mode");
            this.Da && (this.Da.parentNode.removeChild(this.Da), this.Da = null)
        }, fb: function(a) {
            for (var b = 0; b < a.touches.length; b++) {
                var c = a.touches[b], c = z(this.view, c.pageX, c.pageY);
                "touchstart" === a.type && this.Ta(c.x, c.y, a)
            }
        }, Ta: function(a, b) {
            if (this.Ae && (this.log("Editing somewhere else on mousedown; submit that first."),
                    yd(this), this.view.da.get("autoPickTool"))) {
                F(this.view);
                return
            }
            var c = this.view.ja.pb(a, b, this.view.Ja);
            zd(this, c, a, b)
        }, cancel: function() {
            this.Da && (this.Da.parentNode.removeChild(this.Da), this.view.ra.emit("edit-text-hidden"));
            this.Da = null;
            this.Ae = !1;
            this.Fa && (this.Fa.mf = !1, this.view.ka())
        }, Xa: function() {
        }, Kb: function(a) {
            this.log("keyboard: %s", a);
            "cancel" === a && null === this.Da && (F(this.view), this.view.la.emit("goto-toolbar"))
        }, oc: function(a) {
            this.log("Set text colour to %s", a.ib);
            this.view.setProperty("textFillStyle",
                    a.ib)
        }};
    function yd(a) {
        var b = a.Da.value;
        a.cancel();
        if (a.Fa && a.Fa.qa("text") === b)
            a.log("Text was not changed.");
        else if (null === a.Fa && "" === b)
            a.log("No text entered.");
        else if (a.Fa)
            a.log("Update text in node %s", a.Fa.id), a.view.va([new Ad([a.Fa.id], "text", b)]);
        else {
            a.log("Create new text node.");
            var c = a.view.ja.Aa, d = new E(a.Pc.x, a.Pc.y);
            a.view.va([new D("TextNode", {text: b, fontSize: a.view.wa.fontSize, fontName: a.view.wa.fontName, textFillStyle: a.view.wa.textFillStyle, strokeStyle: a.view.wa.textStrokeStyle, lineWidth: a.view.wa.textLineWidth,
                    layer: a.view.Ja, wrap: a.view.da.get("multilineText")}), new Q([c], d, d.inverse())])
        }
    }
    function zd(a, b, c, d) {
        function e() {
            a.Da && (a.log("Set editBox height to %s", "" + a.Da.scrollHeight + "px"), a.Da.style.height = "" + a.Da.scrollHeight + "px", a.Da.style.width = "" + a.Da.scrollWidth + "px");
            k = null
        }
        var f, g, h = 0;
        b && "TextNode" === b.type() || b && "PathNode" === b.type() && a.view.da.get("allowTextInShape") ? (a.Fa = b, "top" !== a.tg && "TextNode" === b.type() && (a.Fa.mf = !0), a.view.ka(), a.Pc = new B(b.rect.x, b.rect.y), f = b.qa("fontName"), g = b.qa("fontSize"), h = b.ub().width * a.view.scale) : (a.Fa = null, a.Pc = new B(c, d), f = a.view.wa.fontName,
                g = a.view.wa.fontSize);
        a.Da = document.createElement("textarea");
        document.body.appendChild(a.Da);
        b = p(a.Da).height();
        h && (a.Da.style.width = "" + h + "px");
        h = Bd(a.view, a.Pc.x, a.Pc.y);
        a.Da.style.position = "absolute";
        a.Da.style.fontFamily = f;
        a.Da.style.fontSize = "" + g * a.view.scale + "px";
        a.Da.style.overflow = "auto";
        a.Da.style.zIndex = a.view.md() + 1;
        "top" === a.tg ? (f = p(a.view.canvas).offset(), g = p(a.view.canvas).width(), h = p(a.Da).width(), a.Da.style.left = "" + (f.left + g / 2 - h / 2) + "px", a.Da.style.top = "" + f.top + "px") : (a.Da.style.left =
                "" + Math.round(h.x) + "px", a.Da.style.top = "" + Math.round(h.y) + "px");
        a.Ae = !0;
        a.Pc = new B(c, d + b);
        a.Fa && (a.Da.value = a.Fa.qa("text"));
        var k = null, k = setTimeout(e, 0);
        p(a.Da).bind("keydown", function(b) {
            27 === b.keyCode && a.multiline || 13 === b.keyCode && (b.shiftKey || !a.multiline) ? (a.log("Enter pressed. create text."), yd(a), a.view.Ca.sb && Cd(a.view), a.view.la.Hf("goto-canvas"), a.view.da.get("autoPickTool") && F(a.view)) : 27 === b.keyCode ? (a.log("ESC pressed; cancel."), a.cancel(), F(a.view), a.view.la.emit("goto-toolbar")) : 13 ===
                    b.keyCode && (k || (k = setTimeout(e, 0)))
        });
        setTimeout(function() {
            a.Da && a.Da.focus()
        }, 100);
        a.Da.focus();
        a.view.ra.emit("edit-text-shown", a.Da)
    }
    ;
    function Dd(a, b, c, d) {
        this.ma = a;
        this.na = b;
        this.gg = c;
        this.origin = d;
        a = this.na.apply(c.x, c.y);
        this.x = a.x;
        this.y = a.y
    }
    Dd.prototype = {Fe: function(a) {
            var b = 1, c = 1, d = this.na.inverse(), e = d.apply(this.x + a.x, this.y + a.y);
            a = new B(this.gg.x - this.origin.x, this.gg.y - this.origin.y);
            e = new B(e.x - this.origin.x, e.y - this.origin.y);
            e = (e.x * a.x + e.y * a.y) / (a.x * a.x + a.y * a.y);
            0 !== a.x && 0 !== a.y ? c = b = e : 0 !== a.x ? b = e : c = e;
            return this.na.multiply(new O(b, c, this.origin.x, this.origin.y)).multiply(d)
        }};
    function md(a, b, c, d, e) {
        this.ma = a;
        this.na = b;
        this.gg = c;
        this.origin = this.na.apply(d.x, d.y);
        a = this.na.apply(c.x, c.y);
        this.x = a.x;
        this.y = a.y;
        this.aj = Math.atan2(this.y - this.origin.y, this.x - this.origin.x);
        this.Nh = e
    }
    md.prototype = {log: x("RotationSelHandle"), Fe: function(a) {
            a = Math.atan2(this.y + a.y - this.origin.y, this.x + a.x - this.origin.x) - this.aj;
            if (this.Nh) {
                var b = Math.PI / 16;
                a = Math.floor(a / b) * b
            }
            return new Sc(-a, this.origin.x, this.origin.y)
        }};
    function Ed(a, b) {
        this.ma = a;
        this.na = b;
        this.y = this.x = 0
    }
    Ed.prototype = {Fe: function(a) {
            return new E(a.x, a.y)
        }};
    function Fd() {
        this.text = "";
        this.font = "10px Arial";
        this.Kg = "Arial";
        this.fontSize = 10;
        this.lb = [];
        this.rect = new M(0, 0, 0, this.fontSize);
        this.wg = "left";
        this.Ld = "top"
    }
    n = Fd.prototype;
    n.log = x("TextBox");
    function Gd(a, b, c) {
        switch (b) {
            case "left":
            case "centre":
            case "right":
                a.Ld = b;
                break;
            case null:
                break;
            default:
                a.log("Unknnown alignment: %s", b)
        }
        switch (c) {
            case "top":
            case "middle":
            case "bottom":
                a.wg = c;
                break;
            case null:
                break;
            default:
                a.log("Unknnown alignment: %s", c)
            }
    }
    n.sa = function(a, b, c) {
        this.font = "" + this.fontSize + "px " + this.Kg;
        this.lb.length = 0;
        var d, e;
        a.font = this.font;
        var f = 0;
        this.rect.width = 0;
        if (0 === b) {
            var g = this.text.split("\n");
            for (d = 0; d < g.length; d++) {
                var h = g[d];
                e = a.measureText(h).width;
                f += this.fontSize;
                this.lb.push({x: 0, y: f, width: e, text: h});
                this.rect.width = Math.max(this.rect.width, e)
            }
        } else {
            var h = g = 0, k = !1;
            for (d = 0; d < this.text.length; d++) {
                var l = this.text.charAt(d);
                e = a.measureText(this.text.substr(g, d - g + 1)).width;
                "\n" === l ? k = !0 : e > b ? h ? (d = h, k = !0) : d > g && (d -= 1, k = !0) :
                        " " === l && (h = d);
                k && (e = " " === this.text.charAt(d) ? a.measureText(this.text.substr(g, d - g)).width : a.measureText(this.text.substr(g, d - g + 1)).width, f += this.fontSize, this.lb.push({x: 0, y: f, width: e, text: this.text.substr(g, d - g + 1)}), g = d + 1, h = 0, k = !1, this.rect.width = Math.max(this.rect.width, e))
            }
            e && (f += this.fontSize, this.lb.push({x: 0, y: f, width: e, text: this.text.substr(g, d - g)}), this.rect.width = Math.max(this.rect.width, e))
        }
        this.rect.x = 0;
        this.rect.y = 0;
        this.rect.height = f;
        if ("centre" === this.Ld)
            for (d = 0; d < this.lb.length; d++)
                a =
                        this.lb[d], a.x = this.rect.width / 2 - a.width / 2;
        else if ("right" === this.Ld)
            for (d = 0; d < this.lb.length; d++)
                a = this.lb[d], a.x = this.rect.width - a.width;
        b && "centre" === this.Ld ? this.rect.x = b / 2 - this.rect.width / 2 : b && "right" === this.Ld && (this.rect.x = b - this.rect.width);
        c && "middle" === this.wg ? this.rect.y = c / 2 - this.rect.height / 2 : c && "bottom" === this.wg && (this.rect.y = c - this.rect.height)
    };
    n.ka = function(a, b, c) {
        this.fillText(a, b, c)
    };
    n.fillText = function(a, b, c) {
        a.textBaseline = "alphabetic";
        a.font = this.font;
        for (var d = 0; d < this.lb.length; d++) {
            var e = this.lb[d];
            a.fillText(e.text, this.rect.x + e.x + b, this.rect.y + e.y + c)
        }
    };
    n.strokeText = function(a, b, c) {
        a.textBaseline = "alphabetic";
        a.font = this.font;
        for (var d = 0; d < this.lb.length; d++) {
            var e = this.lb[d];
            a.strokeText(e.text, this.rect.x + e.x + b, this.rect.y + e.y + c)
        }
    };
    function Hd(a) {
        Id(this, a, Hd)
    }
    var Jd = {fillStyle: "#cccccc", strokeStyle: "#000000", lineWidth: 2, shadow: !1};
    Hd.prototype = {Rf: function() {
            return!1
        }, Tf: function() {
            return null
        }, Ff: function() {
        }, Sf: function() {
            return"text"in this.ba
        }, La: function(a) {
            a = new this.constructor(a());
            ud(a, this.ba);
            return a
        }, type: function() {
            return"BaseNode"
        }, setProperty: function(a, b) {
            if (a in this.ba || "tag" === a || "lockSize" === a)
                this.ba[a] = b
        }, qa: function(a) {
            return this.ba[a]
        }, ub: function() {
            return this.rect
        }, Ng: function() {
            return new P(this.rect)
        }, md: function() {
            return this.qa("zIndex") || 0
        }, transform: function(a, b) {
            this.ba.matrix = a.multiply(this.ba.matrix);
            this.ba.inverse = this.ba.inverse.multiply(b)
        }, sa: function() {
        }, pb: function(a, b) {
            var c = qd(this).apply(a, b);
            return this.ec.gc(c.x, c.y) ? this : null
        }, hidden: function() {
            return this.mf
        }, bh: function() {
        }, ka: function(a) {
            a.save();
            var b = this.ba.matrix;
            a.transform(b.m11, b.m21, b.m12, b.m22, b.xa, b.ya);
            "erase" === this.ba.strokeStyle ? (a.strokeStyle = "#000000", a.globalCompositeOperation = "destination-out") : a.strokeStyle = this.ba.strokeStyle;
            a.fillStyle = this.ba.fillStyle;
            a.lineWidth = this.ba.lineWidth;
            this.ba.shadow && (a.shadowOffsetX =
                    3, a.shadowOffsetY = 3, a.shadowBlur = 5, a.shadowColor = "rgba(0,0,0,0.5)");
            this.Mc(a);
            a.restore()
        }, Mc: function() {
        }};
    function od(a, b, c) {
        a.ba.matrix = b;
        a.ba.inverse = c
    }
    function qd(a) {
        return a.ba.inverse
    }
    function R(a) {
        return a.ba.matrix
    }
    function Kd(a) {
        return null !== a.parent && null !== a.parent.parent && "PageNode" !== a.parent.type()
    }
    function Ld(a) {
        return void 0 !== a.children
    }
    function Md(a) {
        return(a = a.qa("layer")) ? "" + a : "default"
    }
    function ud(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && a.setProperty(c, b[c])
    }
    function Nd(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a.ba[c] = b[c])
    }
    function Id(a, b, c) {
        a.id = b;
        a.ba = {};
        Nd(a, Jd);
        a.rect = new M(0, 0, 1, 1);
        a.ba.matrix = new N;
        a.ba.inverse = new N;
        a.ba.layer = "default";
        a.parent = null;
        a.constructor = c;
        a.mf = !1;
        a.ec = new M(0, 0, 1, 1)
    }
    var Od = {};
    function Pd(a, b) {
        b.prototype = p.extend({}, Hd.prototype, b.prototype);
        Od[a] = b
    }
    function td(a, b) {
        return a in Od ? new Od[a](b) : null
    }
    ;
    function Qd(a) {
        this.Ha(a)
    }
    n = Qd.prototype;
    n.Ha = function(a) {
        Id(this, a, Qd);
        this.parent = null;
        this.children = []
    };
    n.type = function() {
        return"GroupNode"
    };
    n.La = function(a) {
        for (var b = new Qd(a()), c = 0; c < this.children.length; c++) {
            var d = this.children[c].La(a);
            d.parent = b;
            b.children.push(d)
        }
        return b
    };
    n.sa = function(a, b) {
        for (var c = 0; c < this.children.length; c++)
            this.children[c].sa(a, b), 0 === c ? this.rect = this.children[c].rect.La() : Qc(this.rect, this.children[c].rect)
    };
    n.ka = function(a) {
        for (var b = 0; b < this.children.length; b++)
            this.children[b].ka(a)
    };
    n.pb = function(a, b) {
        for (var c = this.children.length - 1; 0 <= c; c--) {
            var d = this.children[c].pb(a, b);
            if (d)
                return d
        }
        return null
    };
    function Rd(a, b) {
        for (var c = 0; c < a.children.length; c++)
            if (b === a.children[c])
                return c;
        return-1
    }
    Ac(Hd.prototype, Qd.prototype);
    Pd("GroupNode", Qd);
    function Sd(a) {
        Id(this, a, Sd);
        this.children = []
    }
    Sd.prototype = {log: x("PAGE", !0), type: function() {
            return"PageNode"
        }, sa: function() {
        }, pb: function() {
            return null
        }, ka: function() {
        }};
    Ac(Qd.prototype, Sd.prototype);
    Pd("PageNode", Sd);
    function Td(a) {
        Id(this, a, Td);
        this.log("New BrushNode created.");
        this.ba.points = [];
        this.ba.strokeStyle = "#ff00ff";
        this.ba.lineWidth = 10;
        this.oa = [];
        this.ic = [];
        this.inverse = null
    }
    Td.prototype = {log: x("BRUSH", !0), type: function() {
            return"BrushNode"
        }, setProperty: function(a, b) {
            "fillStyle" === a && (a = "strokeStyle");
            if (a in this.ba || "dashes" === a)
                this.ba[a] = b
        }, sa: function() {
            var a, b, c, d;
            this.oa.length = 0;
            b = this.ba.points;
            a = c = 0;
            for (d = b.length - 1; c <= d; a = c += 2)
                this.oa.push(new B(b[a], b[a + 1]));
            a = Nc(this.oa);
            this.ec = a.La();
            a.Ac(this.ba.lineWidth + 3, this.ba.lineWidth + 3);
            a = new P(a);
            a.transform(this.ba.matrix);
            this.rect = Nc(a.oa);
            this.inverse = this.ba.matrix.inverse();
            this.ic = [];
            if ("dashes"in this.ba)
                for (b =
                        this.ba.dashes.split(","), a = 0; a < b.length; a++)
                    c = parseFloat(b[a]), isNaN(c) || this.ic.push(c)
        }, pb: function(a, b) {
            var c;
            if (this.rect.gc(a, b)) {
                c = this.inverse.apply(a, b);
                var d;
                a:{
                    d = this.oa;
                    var e = c.x;
                    c = c.y;
                    for (var f = this.ba.lineWidth / 2, f = f * f, g = 1; g < d.length; g++) {
                        var h = d[g - 1].x, k = d[g - 1].y, l = d[g].x - h, m = d[g].y - k, q = ((e - h) * l + (c - k) * m) / (l * l + m * m);
                        1 < q ? q = 1 : 0 > q && (q = 0);
                        h = h + q * l - e;
                        k = k + q * m - c;
                        if (h * h + k * k <= f) {
                            d = !0;
                            break a
                        }
                    }
                    d = !1
                }
                if (d)
                    return this
            }
            return null
        }, Mc: function(a) {
            var b, c, d, e;
            c = this.ba.points;
            if (0 !== c.length) {
                a.save();
                a.beginPath();
                a.lineCap = "round";
                a.lineJoin = "round";
                if (1 < this.ic.length) {
                    if (b = this.oa, d = this.ic, 0 !== b.length) {
                        a.moveTo(b[0].x, b[0].y);
                        e = 0;
                        for (var f = 1, g = d[0], h = b[0].La(), k; f < b.length; )
                            k = h.Hb(b[f]), 0 === k ? f += 1 : k <= g ? (h = b[f].La(), e & 1 ? a.moveTo(h.x, h.y) : a.lineTo(h.x, h.y), g -= k, f += 1) : (h.x += (b[f].x - h.x) * g / k, h.y += (b[f].y - h.y) * g / k, e & 1 ? a.moveTo(h.x, h.y) : a.lineTo(h.x, h.y), e = (e + 1) % d.length, g = d[e])
                    }
                } else
                    for (a.moveTo(c[0], c[1]), b = d = 2, e = c.length - 1; d <= e; b = d += 2)
                        a.lineTo(c[b], c[b + 1]);
                a.stroke();
                if (Ud) {
                    a.beginPath();
                    b =
                            d = 0;
                    for (e = c.length - 1; d <= e; b = d += 2)
                        a.rect(c[b] - 2, c[b + 1] - 2, 4, 4);
                    a.fillStyle = "#0000ff";
                    a.fill()
                }
                a.restore()
            }
        }};
    var Ud = !1;
    Pd("BrushNode", Td);
    function Vd(a, b, c, d) {
        this.options = c;
        this.view = a;
        this.ih = b;
        this.mode = d;
        this.Va = !1;
        this.Vg = !0;
        this.qc = []
    }
    Vd.prototype = {log: x("Brush"), Zb: function() {
            this.view.canvas.style.cursor = "crosshair"
        }, reset: function() {
            this.Va = !1;
            this.qc = []
        }, fb: function(a) {
            var b, c, d, e;
            if ("touchstart" === a.type)
                for (e = a.changedTouches, c = 0, d = e.length; c < d; c++)
                    a = e[c], a = z(this.view, a.pageX, a.pageY), this.qc.push([a]);
            else if ("touchmove" === a.type) {
                e = a.changedTouches;
                c = 0;
                for (d = e.length; c < d; c++) {
                    a = e[c];
                    b = a = z(this.view, a.pageX, a.pageY);
                    for (var f = void 0, g = void 0, h = void 0, k = void 0, l = void 0, m = void 0, f = null, g = 1E6, m = this.qc, k = 0, l = m.length; k < l; k++)
                        if (h =
                                m[k], null === f || h[h.length - 1].Hb(b) < g)
                            f = h, g = h[h.length - 1].Hb(b);
                    b = f;
                    a.x === b[b.length - 1].x && a.y === b[b.length - 1].y || b.push(a)
                }
                this.view.ka()
            } else
                "touchend" === a.type && 0 === a.touches.length && this.va()
        }, Ta: function(a, b) {
            var c;
            c = this.view.cb(new B(a, b));
            this.Va = !0;
            this.qc.push([c])
        }, ah: function(a) {
            var b, c, d, e, f, g, h, k = Wd(this.view);
            "erase" === this.options.strokeStyle ? (a.strokeStyle = "#000000", a.globalCompositeOperation = "destination-out") : a.strokeStyle = this.options.strokeStyle;
            a.lineCap = "round";
            a.Sc = "round";
            a.lineWidth = this.options.lineWidth;
            a.beginPath();
            g = this.qc;
            d = 0;
            for (f = g.length; d < f; d++)
                for (c = g[d], a.moveTo(c[0].x, c[0].y), b = e = 1, h = c.length - 1; e <= h; b = e += 1)
                    b = c[b], a.lineTo(b.x, b.y);
            a.stroke();
            a.globalCompositeOperation = "source-over";
            k && a.restore()
        }, Xa: function(a, b) {
            var c;
            c = "freehand" === this.mode ? new B(a, b) : this.view.cb(new B(a, b));
            this.Va && (this.Rb = this.qc[0][this.qc[0].length - 1], c.x !== this.Rb.x || c.y !== this.Rb.y) && (this.qc[0].push(c), this.view.ka())
        }, Ya: function(a, b) {
            this.Xa(a, b);
            this.Va = !1;
            this.va()
        },
        va: function() {
            var a, b, c, d, e, f, g, h, k, l;
            a = [];
            k = this.qc;
            f = 0;
            for (h = k.length; f < h; f++)
                if (e = k[f], "brush" === this.mode) {
                    if (c = [], 1 === e.length && e.push(new B(e[0].x + 0.1, e[0].y + 0.1)), 1 < e.length) {
                        d = b = 0;
                        for (g = e.length - 1; b <= g; d = b += 1)
                            c.push(e[d].x), c.push(e[d].y);
                        a.push(new D("BrushNode", p.extend({points: c, layer: this.view.Ja}, this.options)))
                    }
                } else {
                    if ("shapes" === this.mode) {
                        e = dd(e, 20);
                        c = e;
                        g = l = b = e = l = d = void 0;
                        if (!(3 > c.length)) {
                            e = c[0];
                            b = c[c.length - 1];
                            g = 40 > e.Hb(b);
                            for (d = 0; d < c.length; d++) {
                                var m = c[d];
                                for (l = d + 1; l < c.length; l++) {
                                    var q =
                                            c[l];
                                    20 > Math.abs(m.x - q.x) ? q.x = m.x : 20 > Math.abs(m.y - q.y) && (q.y = m.y)
                                }
                            }
                            m = Oc(Nc(c));
                            for (d = 0; d < c.length; d++)
                                l = c[d], 20 > Math.abs(l.x - m.x) && (l.x = m.x), 20 > Math.abs(l.y - m.y) && (l.y = m.y);
                            g && (e.x = b.x, e.y = b.y)
                        }
                        e = c
                    } else if ("freehand" === this.mode) {
                        c = e;
                        c = dd(c, 2);
                        d = [];
                        e = [];
                        b = [];
                        for (g = 0; g < c.length; g++)
                            d.push(g), e.push(c[g].x), b.push(c[g].y);
                        l = [];
                        m = [];
                        ed(d, e, l);
                        ed(d, b, m);
                        q = [];
                        for (g = 0; g < c.length; g += 0.25)
                            q.push(new B(fd(g, d, e, l), fd(g, d, b, m)));
                        e = c = q
                    }
                    if (1 < e.length) {
                        c = new Xd;
                        c.moveTo(e[0].x, e[0].y);
                        b = e[0].Be(e[e.length - 1]);
                        d = g = 1;
                        for (l = e.length - 1; g <= l; d = g += 1)
                            c.lineTo(e[d].x, e[d].y);
                        b && c.close();
                        a.push(new D("PathNode", p.extend({commands: c.Nb(), fillStyle: this.view.Xb, sloppiness: 0, layer: this.view.Ja}, this.options)))
                    }
                }
            this.view.va(a);
            this.view.ob();
            S(this.view);
            this.reset()
        }, nc: function() {
            this.view.canvas.style.cursor = "default";
            this.view.ka()
        }, oc: function(a) {
            this.view.Nc = a.ib;
            this.options.strokeStyle = a.ib
        }, Kb: function(a) {
            this.log("keyboard: %s", a);
            "cancel" === a && (this.log("ESC pressed. Abort brush and go back to toolbar."),
                    F(this.view), this.view.la.emit("goto-toolbar"))
        }};
    function Yd(a) {
        Id(this, a, Yd);
        this.Jb = null
    }
    Yd.prototype = {log: x("CUSTOM"), type: function() {
            return"CustomNode"
        }, setProperty: function(a, b) {
            var c;
            null === this.Jb && "type" === a && (c = Zd[b], this.Jb = new c);
            this.Jb && this.Jb.setProperty ? this.Jb.setProperty(a, b) : Hd.prototype.setProperty.call(this, a, b)
        }, qa: function(a) {
            return this.Jb && this.Jb.setProperty ? this.Jb.getProperty(a) : Hd.prototype.qa.call(this, a)
        }, sa: function(a) {
            "format"in this.Jb ? this.Jb.format(a) : alert("Error: custom item must have a format(ctx) function");
            a = this.Jb.rect;
            this.rect = new M(a.x, a.y,
                    a.width, a.height)
        }, ka: function(a) {
            this.Jb.draw(a)
        }};
    Pd("CustomNode", Yd);
    function $d(a) {
        Id(this, a, $d);
        this.ba.data = "";
        this.ba.locked = !1;
        this.element = null;
        this.xe = "";
        this.mb = null;
        this.xc = new N
    }
    $d.prototype = {log: x("DomNode", !0), type: function() {
            return"DomNode"
        }, setProperty: function(a, b) {
            if ("data" === a)
                this.element && (p(this.element).remove(), this.xe = this.element = null);
            else if ("border" === a || "lockSize" === a || "lockRotate" === a) {
                this.ba[a] = b;
                return
            }
            Hd.prototype.setProperty.call(this, a, b)
        }, ph: function(a) {
            this.log("Node %s receives DOM element and requests reformat", this.id);
            this.element = a;
            this.element.style.position = "absolute";
            "IFRAME" !== a.tagName && (this.element.style.pointerEvents = "none");
            p(p(this.Lf.canvas)[0].parentNode).append(this.element);
            this.width = this.element.offsetWidth;
            this.height = this.element.offsetHeight;
            this.element.style.top = "0px";
            this.element.style.left = "0px";
            this.element.style.zIndex = "-1";
            ae(this, "transformOrigin", "top left");
            this.Lf.emit("reformat", this)
        }, sa: function(a, b) {
            null === this.element && this.xe !== this.qa("data") && b && (this.xe = this.qa("data"), this.Lf = b, this.log("DomNode %s requests conversion to DOM element", this.id), this.Lf.emit("convert-dom-request", this.xe, this.id));
            if (this.element) {
                var c = this.xc, c = c.multiply(R(this));
                1 === c.m11 && 1 === c.m22 && 0 === c.m12 && 0 === c.m21 ? (ae(this, "transform", ""), this.element.style.left = "" + c.xa + "px", this.element.style.top = "" + c.ya + "px") : (this.element.style.left = "0px", this.element.style.top = "0px", ae(this, "transform", "matrix(" + c.m11 + "," + c.m21 + "," + c.m12 + "," + c.m22 + "," + c.xa + "," + c.ya + ")"));
                this.rect.x = 0;
                this.rect.y = 0;
                this.rect.width = this.width;
                this.rect.height = this.height
            } else
                this.rect.x = 0, this.rect.y = 0, this.rect.width = 100, this.rect.height = 22;
            this.mb = new P(this.rect);
            this.ec = this.rect.La();
            this.rect.transform(R(this));
            this.mb.transform(R(this));
            if (c = this.ba.border)
                this.rect.Ac(c), this.Qg = this.mb.La(), this.Qg.Ac(c / 2), this.mb.Ac(c)
        }, Mc: function(a) {
            !a.Kc || a.Kc.m11 === this.xc.m11 && a.Kc.m21 === this.xc.m21 && a.Kc.m12 === this.xc.m12 && a.Kc.m22 === this.xc.m22 && a.Kc.xa === this.xc.xa && a.Kc.ya === this.xc.ya || (this.log("Moving DOM element as result of draw zooming"), this.xc = a.Kc, this.sa(a, null));
            if (this.element) {
                var b = this.ba.border;
                if (b) {
                    var c = this.Qg;
                    a.setTransform(1, 0, 0, 1, 0, 0);
                    a.beginPath();
                    a.lineWidth = b;
                    a.strokeStyle = "#cccccc";
                    console.log(c);
                    a.moveTo(c.oa[0].x, c.oa[0].y);
                    a.lineTo(c.oa[1].x, c.oa[1].y);
                    a.lineTo(c.oa[2].x, c.oa[2].y);
                    a.lineTo(c.oa[3].x, c.oa[3].y);
                    a.lineTo(c.oa[0].x, c.oa[0].y);
                    a.closePath();
                    a.stroke()
                }
            } else
                a.beginPath(), a.lineWidth = 1, a.fillStyle = "#888888", a.strokeStyle = "#CCCCCC", a.rect(0, 0, 100, 22), a.stroke(), a.font = "20px Arial", a.textBaseline = "top", a.fillText("DomNode", 0, 0)
        }, pb: function(a, b) {
            return!this.ba.locked && this.rect.gc(a, b) && this.mb.gc(a, b, 3) ? this : null
        }, bh: function() {
            this.element && p(this.element).remove()
        }};
    function ae(a, b, c) {
        for (var d = b.charAt(0).toUpperCase() + b.substr(1), e = ["ms", "Webkit", "O", "Moz"], f = 0; f < e.length; f++)
            a.element.style[e[f] + d] = c;
        a.element.style[b] = c
    }
    Pd("DomNode", $d);
    function be(a) {
        Id(this, a, be);
        this.ba.url = "";
        this.Ga = null;
        this.width = 100;
        this.height = 20;
        this.mb = new P;
        this.Oc = [];
        this.mc = new M(0, 0, this.width, this.height);
        this.tb = new M(0, 0, this.width, this.height)
    }
    be.prototype = {log: x("IMAGE", !0), type: function() {
            return"ImageNode"
        }, setProperty: function(a, b) {
            this.ba[a] = b;
            "url" === a && (this.Ga = null)
        }, sa: function(a, b) {
            function c(a, b, c) {
                l.Oc.push({x: l.tb.x + a * l.tb.width, y: l.tb.y + b * l.tb.height, lc: c})
            }
            var d, e, f, g, h, k = this;
            null === this.Ga && "ImageSurface"in window ? (this.Ga = new ImageSurface(this.ba.url), this.mc = new M(0, 0, this.Ga.width, this.Ga.height)) : null === this.Ga ? (this.mc = new M(0, 0, this.width, this.height), b.add(this, "image", this.ba.url, null, function(a) {
                k.log("Got image response.");
                k.Ga = a;
                return b.emit("reformat", k)
            })) : this.mc = new M(0, 0, this.Ga.width, this.Ga.height);
            this.tb = ce(this);
            this.rect = this.tb.La();
            if (d = this.qa("boundingPolygon")) {
                f = [];
                e = g = 0;
                for (h = d.length - 1; g <= h; e = g += 2)
                    f.push(new B(d[e], d[e + 1]));
                this.mb = new P(f)
            } else
                this.mb = new P(this.rect);
            this.ec = this.rect.La();
            this.mb.transform(this.ba.matrix);
            this.rect.transform(this.ba.matrix);
            this.Oc.length = 0;
            var l = this;
            c(0.5, 0, !0);
            c(1, 0.5, !1);
            c(0.5, 1, !0);
            c(0, 0.5, !1)
        }, Ng: function() {
            return this.mb
        }, pb: function(a, b) {
            return!this.ba.locked &&
                    this.mb.gc(a, b, 3) ? this : null
        }, Mc: function(a) {
            var b, c, d, e, f = !1;
            if (this.Ga)
                try {
                    if (a.drawImage(this.Ga, this.tb.x, this.tb.y, this.tb.width, this.tb.height, this.tb.x, this.tb.y, this.tb.width, this.tb.height), de) {
                        c = this.mb.oa;
                        a.save();
                        a.setTransform(1, 0, 0, 1, 0, 0);
                        a.beginPath();
                        a.lineWidth = 2;
                        a.strokeStyle = "#000000";
                        a.moveTo(c[0].x, c[0].y);
                        b = d = 1;
                        for (e = c.length - 1; d <= e; b = d += 1)
                            a.lineTo(c[b].x, c[b].y);
                        a.closePath();
                        a.stroke();
                        a.restore()
                    }
                } catch (g) {
                    this.log("Error drawing image: %s", g.message), f = g
                }
            if (null === this.Ga ||
                    f)
                a.save(), a.lineWidth = 1, a.strokeStyle = "#cccccc", a.strokeRect(0, 0, this.width, this.height), a.restore()
        }, Rf: function() {
            return!0
        }, Ff: function(a, b) {
            a.save();
            a.beginPath();
            a.lineWidth = 1 * b;
            a.strokeStyle = "#0050B7";
            for (var c = R(this), d = 0; d < this.Oc.length; d++) {
                var e = this.Oc[d], f = c.apply(e.x, e.y), g, h, k, l;
                e.lc ? (g = 20, k = h = 0, l = 3, e = f.x - 10, f = f.y - 6) : (g = 0, h = 20, k = 3, l = 0, e = f.x - 6, f = f.y - 10);
                for (var m = 0; 5 > m; m++)
                    a.moveTo(e, f), a.lineTo(e + g * b, f + h * b), e += k * b, f += l * b
            }
            a.stroke();
            a.restore()
        }, Tf: function(a, b, c) {
            var d = R(this);
            c *= 10;
            for (var e = 0; e < this.Oc.length; e++) {
                var f = this.Oc[e], f = d.apply(f.x, f.y);
                if (f.x - c <= a && a < f.x + c && f.y - c <= b && b < f.y + c)
                    return e
            }
            return null
        }, Og: function(a) {
            a = this.Oc[a];
            return R(this).apply(a.x, a.y)
        }, Vd: function(a, b, c) {
            var d = ce(this);
            b = qd(this).apply(b, c);
            0 === a && 0 <= b.y ? (d.height -= b.y - d.y, d.y = b.y) : 1 === a && b.x < this.mc.width ? d.width = b.x - d.x : 2 === a && b.y < this.mc.height ? d.height = b.y - d.y : 3 === a && 0 <= b.x && (d.width -= b.x - d.x, d.x = b.x);
            d.x = Math.max(d.x, 0);
            d.y = Math.max(d.y, 0);
            d.width = Math.min(d.width, this.mc.width);
            d.height =
                    Math.min(d.height, this.mc.height);
            d.width = Math.max(1, d.width);
            d.height = Math.max(1, d.height);
            this.ba.crop = [d.x, d.y, d.width, d.height].join()
        }};
    function ce(a) {
        var b = a.ba.crop;
        a = new M(0, 0, a.mc.width, a.mc.height);
        b && (b = b.split(","), a.x = parseFloat(b[0]), a.y = parseFloat(b[1]), a.width = parseFloat(b[2]), a.height = parseFloat(b[3]));
        return a
    }
    var de = !1;
    Pd("ImageNode", be);
    function ee(a) {
        Id(this, a, ee);
        this.ba.mathml = "";
        this.Ga = null;
        this.width = 100;
        this.height = 20;
        this.mb = new P;
        this.Ej = !1
    }
    ee.prototype = {log: x("MATHNODE", !0), type: function() {
            return"MathNode"
        }, setProperty: function(a, b) {
            this.ba[a] = b;
            "mathml" === a && (this.Ga = null)
        }, sa: function(a, b) {
            var c = this;
            null === this.Ga ? (this.rect = new M(0, 0, this.width, this.height), b.add(this, "math", this.ba.mathml, null, function(a) {
                c.log("Got math response.");
                c.Ga = a;
                if (c.Ga)
                    return b.emit("reformat", c)
            })) : (this.Ji = this.Ga.width, this.Ii = this.Ga.height, this.rect = new M(0, 0, this.Ji, this.Ii));
            this.mb = new P(this.rect);
            this.mb.transform(this.ba.matrix);
            this.rect.transform(this.ba.matrix)
        },
        pb: function(a, b) {
            return!this.ba.locked && this.mb.gc(a, b, 3) ? this : null
        }, Mc: function(a) {
            if (null === this.Ga)
                a.save(), a.lineWidth = 1, a.strokeStyle = "#cccccc", a.strokeRect(0, 0, this.width, this.height), a.restore();
            else
                try {
                    a.drawImage(this.Ga, 0, 0)
                } catch (b) {
                    this.log("Error: %s", b)
                }
        }};
    Pd("MathNode", ee);
    function fe(a) {
        Id(this, a, fe);
        this.ne = "UnknownNode";
        this.width = 100;
        this.height = 20;
        this.jb = new Fd;
        Gd(this.jb, "centre", "middle")
    }
    fe.prototype = {log: x("UNKNOWN", !0), type: function() {
            return this.ne
        }, setProperty: function(a, b) {
            this.ba[a] = b
        }, sa: function(a) {
            this.log("Formatting placeholder for %s", this.ne);
            this.rect = new M(0, 0, this.width, this.height);
            this.rect.transform(this.ba.matrix);
            this.jb.sa(a, this.width, this.height)
        }, Mc: function(a) {
            this.log("Drawing placeholder for for %s", this.ne);
            a.save();
            a.lineWidth = 1;
            a.fillStyle = "#888888";
            a.fillRect(0, 0, this.width, this.height);
            a.fillStyle = "#000000";
            this.jb.ka(a, 0, 0);
            a.restore()
        }};
    Pd("UnknownNode", fe);
    function ge(a) {
        Id(this, a, ge);
        Nd(this, he);
        this.ba.text = "lorum ipsum dolor";
        this.jb = new Fd;
        this.Tg = 0
    }
    ge.prototype = {log: x("TEXT", !0), type: function() {
            return"TextNode"
        }, setProperty: function(a, b) {
            this.ba[a] = b;
            if ("fontName" === a || "text" === a)
                this.path = null;
            "textFillStyle" === a ? this.ba.fillStyle = b : "fillStyle" === a && (this.ba.textFillStyle = b)
        }, sa: function(a) {
            var b, c = this.jb;
            b = this.ba.fontSize;
            c.Kg = this.ba.fontName;
            c.fontSize = b;
            c = this.ba.text;
            c.length && 10 === c.charCodeAt(c.length - 1) && (this.log("Lastchar=%s; remove trailing newline", c.charCodeAt(c.length - 1)), c = c.substr(0, c.length - 1));
            this.jb.text = c;
            b = this.ba.matrix;
            c = b.apply(0, 0);
            b = b.apply(1, 0);
            c = c.Hb(b);
            Gd(this.jb, this.ba.textAlign, "top");
            !0 === this.qa("wrap") ? (b = this.ba.baseWidth, void 0 === b && (this.jb.sa(a, 0, 0), b = Math.max(this.jb.rect.width, 10), 500 < b && (b = 500), this.ba.baseWidth = b, this.log("Formatting text for first time; baseWidth=%s", b)), c = Math.ceil(c * b), this.jb.sa(a, c, 0), a = this.jb.rect.height, this.ec = new M(0, 0, b, a)) : (this.jb.sa(a, 0, 0), c = this.jb.rect.width, a = this.jb.rect.height, this.ec = new M(0, -(0 + this.qa("fontSize")), c, a));
            a = new P(this.ec);
            a.transform(R(this));
            this.rect = Nc(a.oa);
            this.Tg = this.rect.height;
            this.rect.height += 1.3 * this.ba.fontSize;
            a = this.qa("lineWidth") + 0;
            this.rect.Ac(a, a)
        }, ka: function(a) {
            if (0 !== this.ba.text.length) {
                a.save();
                if (this.qa("wrap")) {
                    var b;
                    b = R(this);
                    var c = b.m11, d = b.m21, e = b.m12, f = b.m22, g = Math.sqrt(c * c + d * d), h = Math.sqrt(e * e + f * f);
                    b = new N(c / g, e / h, d / g, f / h, b.xa, b.ya);
                    Rc(b, a)
                } else
                    Rc(R(this), a);
                a.strokeStyle = this.ba.strokeStyle;
                a.fillStyle = this.ba.fillStyle;
                a.lineWidth = this.ba.lineWidth;
                b = 0;
                this.ba.wrap || (b = -(0 + this.qa("fontSize")));
                this.ba.shadow &&
                        (a.shadowOffsetX = 3, a.shadowOffsetY = 3, a.shadowBlur = 5, a.shadowColor = "rgba(0,0,0,0.5)");
                0 < this.ba.lineWidth && this.jb.strokeText(a, 0, b);
                this.jb.fillText(a, 0, b);
                a.restore()
            }
        }};
    ge.prototype = p.extend({}, Hd.prototype, ge.prototype);
    var he = {textFillStyle: "#000000", fontName: "Arial", fontSize: 20, lineWidth: 0, fillStyle: "#000000", wrap: !1, textAlign: "left"};
    Pd("TextNode", ge);
    function ie(a) {
        this.Ha(a)
    }
    var je = {strokeStyle: "#000000", fillStyle: "#ffffff", textFillStyle: "#000000", fontName: "Arial", fontSize: 20, lineWidth: 2, dashes: "", shapeWidth: 0, smoothness: 0.3, sloppiness: 0.5, shadow: !1, closed: !1, arrowSize: 0, arrowStyle: "simple", doubleArrow: !1, text: "", roundRadius: 0, wrap: !1, angleArcs: 0}, ke = 1, le = 5, me = 6, T = [2];
    T[ke] = 2;
    T[2] = 4;
    T[3] = 5;
    T[4] = 6;
    T[le] = 2;
    T[me] = 4;
    T[7] = 0;
    n = ie.prototype;
    n.Ha = function(a) {
        Id(this, a, ie);
        Nd(this, je);
        this.ba.closed = !1;
        this.ba.commands = [];
        this.ta = [];
        this.pe = 0;
        this.ba.seed = 0;
        this.Eb = new ge(0);
        this.Eb.setProperty("text", this.ba.text);
        this.sc = []
    };
    n.log = x("PATHNODE");
    n.moveTo = function(a, b) {
        var c = this.ba.commands;
        c.push(0);
        c.push(a);
        c.push(b)
    };
    n.type = function() {
        return"PathNode"
    };
    n.Sf = function() {
        return!0 === this.ba.closed
    };
    function ne(a, b) {
        var c = a.ba.commands;
        a.ba.commands = b;
        return c
    }
    n.setProperty = function(a, b) {
        Hd.prototype.setProperty.apply(this, arguments);
        "fontName" === a || "fontSize" === a || "text" === a || "wrap" === a ? this.Eb.setProperty(a, b) : "textFillStyle" === a && this.Eb.setProperty("fillStyle", b)
    };
    n.Og = function(a) {
        for (var b = 0, c = this.ba.commands, d = 0; d < a; d++)
            b += T[c[b]] + 1;
        return R(this).apply(c[b + 1], c[b + 2])
    };
    n.Vd = function(a, b, c) {
        for (var d = 0, e = this.ba.commands, f = 0; f < a; f++)
            d += T[e[d]] + 1;
        f = this.ba.inverse.apply(b, c);
        e[d + 1] = f.x;
        e[d + 2] = f.y;
        if (0 === a && this.ba.closed) {
            for (a = null; d < e.length; )
                f = T[e[d]], 2 <= f && (a = d), d += f + 1;
            a && (d = a, f = this.ba.inverse.apply(b, c), e[d + 1] = f.x, e[d + 2] = f.y)
        }
    };
    n.sa = function(a, b) {
        this.origin = null;
        this.ta.length = 0;
        for (var c = new B(0, 0), d = this.ba.commands, e = null, f, g, h = this.ba.matrix, k = new zc(this.ba.seed), l = 0; l < d.length; ) {
            switch (d[l++]) {
                case 0:
                    c = h.apply(d[l++], d[l++]);
                    this.ta.push(new pb(e, c));
                    null === this.origin && (this.origin = c);
                    break;
                case ke:
                    c = h.apply(d[l++], d[l++]);
                    this.ta.push(new qb(e, c, k, this.ba.sloppiness, this.ba.roundRadius));
                    break;
                case 2:
                    c = h.apply(d[l++], d[l++]);
                    f = h.apply(d[l++], d[l++]);
                    this.ta.push(new sb(e, f, c));
                    break;
                case 3:
                    c = h.apply(d[l++], d[l++]);
                    f = h.apply(d[l++], d[l++]);
                    g = d[l++];
                    this.ta.push(new tb(e, f, c, g));
                    break;
                case 4:
                    c = h.apply(d[l++], d[l++]);
                    f = h.apply(d[l++], d[l++]);
                    g = h.apply(d[l++], d[l++]);
                    this.ta.push(new ub(e, f, g, c));
                    break;
                case le:
                    c = h.apply(d[l++], d[l++]);
                    this.ta.push(new rb(e, c, this.ba.smoothness));
                    break;
                case me:
                    c = h.apply(d[l++], d[l++]);
                    f = h.apply(d[l++], d[l++]);
                    this.ta.push(new vb(e, f, c, k, this.ba.sloppiness));
                    break;
                case 7:
                    this.ba.closed = !0;
                    break;
                default:
                    l++
            }
            e = this.ta[this.ta.length - 1]
        }
        this.ba.closed && 4 <= this.ta.length && this.ta[1].Ze &&
                (this.ta[1].Ze(e), e.ga = this.origin);
        this.pe = this.ta.length;
        oe(this, k);
        this.rect.x = this.origin.x;
        this.rect.y = this.origin.y;
        this.rect.width = 0;
        this.rect.height = 0;
        c = this.ba.dashes.split(",");
        this.ic = [];
        for (l = 0; l < c.length; l++)
            d = parseFloat(c[l]), isNaN(d) || this.ic.push(d);
        l = this.ic.length ? 2 : 16;
        c = new Yc;
        for (d = 0; d < this.ta.length; d++)
            this.ta[d].ka(c);
        this.ba.closed && c.close();
        f = k = d = 0;
        for (e = new Yc; d < c.ea.length; ) {
            switch (c.ea[d]) {
                case yb:
                    k = c.ea[d + 1];
                    f = c.ea[d + 2];
                    e.moveTo(k, f);
                    break;
                case zb:
                    k = c.ea[d + 1];
                    f = c.ea[d +
                    2];
                    e.lineTo(k, f);
                    break;
                case 2:
                    g = h = [];
                    var m = c.ea[d + 5], q = c.ea[d + 6];
                    k !== m && f !== q && Uc(g, k, f, c.ea[d + 1], c.ea[d + 2], c.ea[d + 3], c.ea[d + 4], m, q, l * l);
                    g.push(new B(m, q));
                    2 === h.length && 1E-4 > k * (h[0].y - h[1].y) + h[0].x * (h[1].y - f) + h[1].x * (f - h[0].y) && (h[0] = h[1], h.length = 1);
                    for (k = 0; k < h.length; k++)
                        e.lineTo(h[k].x, h[k].y);
                    k = c.ea[d + 5];
                    f = c.ea[d + 6];
                    break;
                case 3:
                    g = h = [];
                    m = c.ea[d + 3];
                    q = c.ea[d + 4];
                    k !== m && f !== q && Wc(g, k, f, c.ea[d + 1], c.ea[d + 2], m, q, l * l);
                    g.push(new B(m, q));
                    for (k = 0; k < h.length; k++)
                        e.lineTo(h[k].x, h[k].y);
                    k = c.ea[d + 3];
                    f = c.ea[d +
                    4];
                    break;
                case Bb:
                    e.close()
            }
            d += Cb[c.ea[d]]
        }
        this.dc = e;
        c = 0 + this.qa("shapeWidth");
        if (0 < c) {
            e = this.dc;
            this.log("ConvertToRects: width=%s", c);
            var d = 0, e = e.ea, r, s;
            for (f = new Yc; d < e.length; ) {
                this.log("cmd %s %s %s", e[d], e[d + 1], e[d + 2]);
                switch (e[d]) {
                    case yb:
                        r = e[d + 1];
                        s = e[d + 2];
                        break;
                    case zb:
                        h = e[d + 1], k = e[d + 2], this.log("(%s,%s-%s,%s)", r, s, h, k), 0 < H(r, s, h, k) && (m = I(r, s, h, k), g = m.y * c / 2, m = -m.x * c / 2, f.moveTo(r + g, s + m), f.lineTo(h + g, k + m), f.lineTo(h - g, k - m), f.lineTo(r - g, s - m), f.close()), r = h, s = k
                }
                d += Cb[e[d]]
            }
            this.dc = f
        }
        this.rect =
                ad(this.dc, l);
        r = this.rect.width - 2 * (this.ba.lineWidth / 2 + 1);
        s = this.dc.La();
        s.transform(qd(this));
        this.ec = ad(s, 3);
        s = this.ba.lineWidth;
        this.rect.Ac(2 * s + 1, 2 * s + 1);
        8 > this.rect.width && (this.rect.x += this.rect.width / 2 - 4, this.rect.width = 8);
        8 > this.rect.height && (this.rect.y += this.rect.height / 2 - 4, this.rect.height = 8);
        this.ba.closed && (s = Oc(this.rect), this.Eb.setProperty("textAlign", "centre"), this.Eb.setProperty("baseWidth", r), this.Eb.sa(a, b), r = s.x - this.Eb.rect.x - this.Eb.rect.width / 2, s = s.y - this.Eb.rect.y - this.Eb.Tg /
                2, this.Eb.transform(new E(r, s), new E(-r, -s)), this.Eb.sa(a, b));
        this.sc.length = 0;
        0 < this.ba.angleArcs && (this.sc.push(new wb(this)), this.sc[this.sc.length - 1].Gc = this.ba.angleArcs);
        for (l = 0; l < this.sc.length; l++)
            this.sc[l].sa(a)
    };
    n.Qf = function() {
        return this.dc
    };
    function oe(a, b) {
        function c(a, c) {
            var g, m, q, r;
            g = a.x - c.x * e;
            m = a.y - c.y * e;
            q = g + c.y * e / 2;
            r = m - c.x * e / 2;
            g += -c.y * e / 2;
            m += c.x * e / 2;
            d.ta.push(new pb(d.ta[d.ta.length - 1], new B(g, m)));
            d.ta.push(new rb(d.ta[d.ta.length - 1], a, f));
            d.ta.push(new rb(d.ta[d.ta.length - 1], new B(q, r), f));
            "solid" === d.ba.arrowStyle && d.ta.push(new qb(d.ta[d.ta.length - 1], new B(g, m), b, d.ba.smoothness, 0))
        }
        a.ii = 0 < a.ba.arrowSize && !a.ba.closed && 0 < a.ta.length;
        if (a.ii) {
            var d = a, e = a.ba.arrowSize, f = a.ba.smoothness, g = a.ta[a.ta.length - 1];
            c(g.ga, g.yc());
            a.ba.doubleArrow &&
                    c(a.ta[0].ga, Mc(a.ta[1].Bd()))
        }
    }
    n.close = function() {
        this.ba.commands.push(7)
    };
    n.Mc = function(a) {
        var b = this.ba.inverse;
        a.save();
        a.lineJoin = "round";
        a.transform(b.m11, b.m21, b.m12, b.m22, b.xa, b.ya);
        a.beginPath();
        a.lineCap = "round";
        a.Sc = "round";
        for (b = 0; b < this.ta.length; b++)
            this.ta[b].ka(a);
        this.ba.closed && (a.closePath(), a.fill(), a.shadowColor = "rgba(0,0,0,0.0)");
        this.ic.length && 0 < this.ba.lineWidth ? (a.beginPath(), $c(this.dc, a, this.ic), a.lineCap = "butt") : 0 < 0 + this.qa("shapeWidth") && (a.beginPath(), this.dc.ka(a));
        0 < this.ba.lineWidth && a.stroke();
        if (this.ba.arrowSize && "solid" === this.ba.arrowStyle) {
            a.beginPath();
            for (b = this.pe; b < this.ta.length; b++)
                this.ta[b].ka(a);
            a.fillStyle = this.ba.strokeStyle;
            a.fill()
        }
        this.ba.closed && this.Eb.ka(a);
        for (b = 0; b < this.sc.length; b++)
            this.sc[b].ka(a);
        a.restore()
    };
    n.pb = function(a, b) {
        if (a >= this.rect.x - 8 && a < this.rect.x + 8 + this.rect.width && b >= this.rect.y - 8 && b < this.rect.y + 8 + this.rect.height)
            if (this.ba.closed) {
                if (Xc(bd(this.dc), a, b))
                    return this
            } else {
                var c;
                a:{
                    c = this.dc;
                    for (var d = 0, e = 0, f = 0, g, h, k, l, m; f < c.ea.length; ) {
                        switch (c.ea[f]) {
                            case yb:
                                d = c.ea[f + 1];
                                e = c.ea[f + 2];
                                break;
                            case zb:
                                g = c.ea[f + 1];
                                h = c.ea[f + 2];
                                l = g - d;
                                k = h - e;
                                m = l * l + k * k;
                                m = ((a - d) * l + (b - e) * k) / m;
                                1 < m ? m = 1 : 0 > m && (m = 0);
                                d += m * l;
                                k = e + m * k;
                                e = d - a;
                                k -= b;
                                e = e * e + k * k;
                                if (8 >= e) {
                                    c = !0;
                                    break a
                                }
                                d = g;
                                e = h
                        }
                        f += Cb[c.ea[f]]
                    }
                    c = !1
                }
                if (c)
                    return this
            }
        return null
    };
    n.lineTo = function(a, b) {
        var c = this.ba.commands;
        c.push(ke);
        c.push(a);
        c.push(b)
    };
    n.Af = function(a, b) {
        var c = this.ba.commands;
        c.push(le);
        c.push(a);
        c.push(b)
    };
    n.Rf = function() {
        return!1 !== this.ba.editable
    };
    n.Tf = function(a, b, c) {
        c *= 8;
        if (a >= this.origin.x - c && a < this.origin.x + c && b >= this.origin.y - c && b < this.origin.y + c)
            return 0;
        for (var d = 0; d < this.pe; d++)
            if (a >= this.ta[d].ga.x - c && a < this.ta[d].ga.x + c && b >= this.ta[d].ga.y - c && b < this.ta[d].ga.y + c)
                return d;
        return null
    };
    n.Ff = function(a, b) {
        a.save();
        a.lineWidth = 1 * b;
        a.strokeStyle = "#0050B7";
        var c = 4 * b;
        a.strokeRect(this.origin.x - c, this.origin.y - c, 2 * c, 2 * c);
        for (var d = 1; d < this.pe; d++)
            a.strokeRect(this.ta[d].ga.x - c, this.ta[d].ga.y - c, 2 * c, 2 * c);
        a.restore()
    };
    Ac(Hd.prototype, ie.prototype);
    function Xd(a) {
        this.Ha(a)
    }
    Xd.prototype = {Ha: function(a) {
            this.ea = void 0 === a ? [] : a
        }, xf: function(a, b, c) {
            for (var d = 0, e = 0; e < a; e++)
                d += T[this.ea[d]] + 1;
            this.ea[d + 1] = b;
            this.ea[d + 2] = c
        }, moveTo: function(a, b) {
            this.ea.push(0);
            this.ea.push(a);
            this.ea.push(b)
        }, lineTo: function(a, b) {
            this.ea.push(ke);
            this.ea.push(a);
            this.ea.push(b)
        }, Af: function(a, b) {
            this.ea.push(le);
            this.ea.push(a);
            this.ea.push(b)
        }, arcTo: function(a, b, c, d, e) {
            this.ea.push(3);
            this.ea.push(c);
            this.ea.push(d);
            this.ea.push(a);
            this.ea.push(b);
            this.ea.push(e)
        }, close: function() {
            this.ea.push(7)
        },
        Nb: function() {
            return this.ea
        }};
    function pe(a, b, c, d, e) {
        a.ea.push(me);
        a.ea.push(d);
        a.ea.push(e);
        a.ea.push(b);
        a.ea.push(c)
    }
    Pd("PathNode", ie);
    function qe(a, b, c, d) {
        this.view = a;
        this.ma = null;
        this.type = b;
        this.url = c || "";
        this.ba = d || {};
        "wrap"in this.ba || (this.ba.wrap = this.view.da.get("multilineText"));
        "fontSize"in this.ba || (this.ba.fontSize = this.view.da.get("defaultFontSize"))
    }
    qe.prototype = {Zb: function() {
            this.log("Entering DrawLinesBehaviour");
            this.view.canvas.style.cursor = "crosshair";
            this.view.da.fc() || re(this.view, "click-to-place-first-point-of-line");
            this.view.ka();
            this.Zg = this.view.ja.Aa;
            this.Kf = new B(0, 0);
            this.Wg = new B(0, 0);
            this.ma = null;
            this.state = "start"
        }, log: x("DRAWLINES"), reset: function() {
            this.Zb()
        }, fb: function(a) {
            var b;
            "touchstart" === a.type ? (b = a.changedTouches[0], b = z(this.view, b.pageX, b.pageY), this.Ta(b.x, b.y, a)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = z(this.view,
                    b.pageX, b.pageY), this.Xa(b.x, b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = z(this.view, b.pageX, b.pageY), this.Ya(b.x, b.y, a))
        }, Kb: function(a) {
            "cancel" === a && (null !== this.ma && this.view.li && "curves" === this.type && this.va(), null !== this.ma && (this.view.ja.removeNode(this.ma), Sb(this.view.ja, this.Zg)), this.view.Ca.sb ? this.view.la.emit("goto-toolbar") : F(this.view))
        }, Ta: function(a, b) {
            var c = this.view.cb(new B(a, b));
            if ("start" === this.state)
                if (this.Kf = new B(a, b), "stampline" === this.type)
                    this.ma = td("StampLineNode",
                            this.view.ja.Aa++), this.ma.setProperty("x1", c.x), this.ma.setProperty("y1", c.y), this.ma.setProperty("x2", c.x), this.ma.setProperty("y2", c.y), this.ma.setProperty("url", this.url), vd(this.view.ja, this.ma), re(this.view, "click-to-set-the-end-of-the-line"), this.view.update(), this.index = 1;
                else {
                    this.ma = new ie(this.view.ja.Aa++);
                    this.ma.setProperty("seed", Math.round(65535 * Math.random()));
                    this.ma.setProperty("strokeStyle", this.view.Yb);
                    this.ma.setProperty("lineWidth", this.view.wa.lineWidth);
                    this.ma.setProperty("sloppiness",
                            this.view.wa.sloppiness);
                    this.ma.setProperty("smoothness", this.view.wa.smoothness);
                    for (var d in this.ba)
                        this.ba.hasOwnProperty(d) && this.ma.setProperty(d, this.ba[d]);
                    vd(this.view.ja, this.ma);
                    "arrow" === this.type && this.ma.setProperty("arrowSize", 15);
                    this.ma.moveTo(c.x, c.y);
                    se(this, c.x, c.y);
                    this.index = 1;
                    this.view.update();
                    this.state = "predrag"
                }
            else if ("placing" === this.state)
                if ("arrow" !== this.type && 8 > this.Kf.Hb(new B(a, b)) && 1 < this.index)
                    this.log("Clicked close to start; automatically closing path"), this.ma.close(),
                            this.va(), F(this.view);
                else if (8 > this.Wg.Hb(new B(a, b))) {
                    if (1 < this.index) {
                        for (var c = this.ma.ba.commands, e = d = 0; e < this.index; e++)
                            d += T[c[d]] + 1;
                        c.splice(d, T[c[d]] + 1);
                        this.va()
                    } else
                        this.cancel();
                    F(this.view)
                } else
                    se(this, c.x, c.y), this.index += 1, wd(this.view.ja, this.ma.id), this.view.update();
            else
                throw"Invalid state";
            this.Wg = new B(a, b)
        }, Ya: function(a, b) {
            var c = this.Kf.Hb(new B(a, b));
            "predrag" === this.state && (this.log("MovedBy: %s", c), 10 < c ? (this.va(), F(this.view)) : this.view.da.fc() ? (this.log("Touchscreen -- cancel line draw."),
                    this.cancel(), this.state = "start") : (this.state = "placing", re(this.view, "click-to-place-another-point-or-double-click-to-end-the-line")))
        }, Xa: function(a, b) {
            var c = this.view.cb(new B(a, b));
            a = c.x;
            b = c.y;
            this.ma && (this.ma.Vd(this.index, a, b), this.ma.sa(this.view.ia, this.view.rb), this.view.ka())
        }, va: function() {
            var a = this.ma, b = a.ta[a.ta.length - 1];
            8 >= H(b.ga.x, b.ga.y, a.origin.x, a.origin.y) && a.close();
            this.view.ja.removeNode(this.ma);
            Sb(this.view.ja, this.Zg);
            var a = {arrowSize: "arrow" === this.type ? 15 : 0, commands: this.ma.qa("commands"),
                seed: this.ma.qa("seed"), fillStyle: this.view.Xb, strokeStyle: this.view.Yb, lineWidth: this.view.wa.lineWidth, sloppiness: this.view.wa.sloppiness, smoothness: this.view.wa.smoothness, layer: this.view.Ja}, c;
            for (c in this.ba)
                this.ba.hasOwnProperty(c) && (a[c] = this.ba[c]);
            this.view.va([new D("PathNode", a)]);
            this.ma = null
        }, cancel: function() {
            this.ma && (this.view.ja.removeNode(this.ma), this.ma = null)
        }, nc: function() {
            this.view.canvas.style.cursor = "default";
            re(this.view, null);
            this.view.ka()
        }, oc: function(a) {
            var b;
            1 === a.button ?
                    (this.view.Xb = a.ib, this.view.Nc = a.ib, b = "fillStyle") : (this.view.Yb = a.ib, b = "strokeStyle");
            this.view.setProperty(b, a.ib)
        }};
    function se(a, b, c) {
        "curves" === a.type || "arrow" === a.type ? a.ma.Af(b, c) : a.ma.lineTo(b, c)
    }
    ;
    function U() {
    }
    U.prototype = {rename: function(a) {
            var b, c, d, e;
            this.id && (this.id = a(this.id));
            if (this.Ea && 0 < this.Ea.length) {
                e = [];
                b = c = 0;
                for (d = this.Ea.length - 1; 0 <= d?c <= d:c >= d; b = 0 <= d?++c:--c)
                    e.push(this.Ea[b] = a(this.Ea[b]));
                return e
            }
        }, log: x("ACTION"), Jd: function(a, b) {
            return Rb(this, a, b)
        }, toString: function() {
            return"" + this.xb + "()"
        }};
    function Rb(a, b, c) {
        var d;
        d = a.Ea ? a.Ea.concat() : [];
        a.id && d.push(a.id);
        return te(b, d, c)
    }
    function D(a, b, c, d) {
        this.type = a;
        this.Pe = c;
        this.index = d;
        this.ba = b
    }
    D.prototype = {xb: "CreateAction", Za: function(a) {
            var b = a.Aa++;
            this.ma = td(this.type, b);
            if (!this.ma)
                if (this.type in Zd)
                    this.ma = new Yd(b), this.ma.setProperty("type", this.type);
                else {
                    this.log("Bad node type: %s", this.type);
                    var b = this.ma = td("UnknownNode", b), c = this.type;
                    b.ne = c;
                    b.jb.text = c;
                    b.log("Creating placeholder for node type %s", c)
                }
            ud(this.ma, this.ba);
            void 0 === this.Pe && (this.Pe = a.gb[a.Ab].id, this.index = -1);
            b = V(a, this.Pe);
            W(a, b, this.ma, this.index);
            this.log("Add %s to parent %s index %s", this.ma.type(),
                    b.type(), this.index)
        }, toString: function() {
            return"" + this.xb + "(" + this.type + ", " + JSON.stringify(this.ba) + ", parent=" + this.Pe + ", index=" + this.index + ")"
        }, eb: function(a) {
            a.removeNode(this.ma)
        }, Jd: function(a, b) {
            return b.add(a.Aa)
        }};
    D.prototype = p.extend({}, U.prototype, D.prototype);
    function ue(a) {
        this.Ea = a;
        this.Dc = []
    }
    ue.prototype = {xb: "DeleteAction", Za: function(a) {
            var b, c, d, e;
            this.Dc.length = 0;
            e = this.Ea;
            c = 0;
            for (d = e.length; c < d; c++)
                b = e[c], b = V(a, b), this.Dc.push({ma: b, parent: b.parent, index: a.removeNode(b)})
        }, eb: function(a) {
            var b, c, d, e;
            if (0 !== this.Dc.length)
                for (e = this.Dc, c = 0, d = e.length; c < d; c++)
                    b = e[c], W(a, b.parent, b.ma, b.index)
        }};
    ue.prototype = p.extend({}, U.prototype, ue.prototype);
    function Ad(a, b, c) {
        this.Ea = a;
        this.name = b;
        this.value = c;
        this.Ec = []
    }
    Ad.prototype = {xb: "SetAction", Za: function(a) {
            var b, c, d, e;
            this.Ec.length = 0;
            e = this.Ea;
            c = 0;
            for (d = e.length; c < d; c++)
                b = e[c], b = V(a, b), this.Ec.push(b.qa(this.name)), b.setProperty(this.name, this.value)
        }, eb: function(a) {
            var b, c, d, e;
            if (0 !== this.Ea.length)
                for (b = d = 0, e = this.Ea.length - 1; 0 <= e?d <= e:d >= e; b = 0 <= e?++d:--d)
                    c = V(a, this.Ea[b]), c.setProperty(this.name, this.Ec[b])
        }};
    Ad.prototype = p.extend({}, U.prototype, Ad.prototype);
    function Q(a, b, c) {
        this.Ea = a;
        this.na = b;
        this.inverse = c
    }
    Q.prototype = {xb: "TransformAction", Za: function(a) {
            var b, c, d, e;
            e = this.Ea;
            c = 0;
            for (d = e.length; c < d; c++)
                b = e[c], b = V(a, b), b.transform(this.na, this.inverse)
        }, eb: function(a) {
            var b, c, d, e;
            e = this.Ea;
            c = 0;
            for (d = e.length; c < d; c++)
                b = e[c], b = V(a, b), b.transform(this.inverse, this.na)
        }, rename: function(a) {
            var b, c, d;
            if (0 !== this.Ea.length)
                for (b = c = 0, d = this.Ea.length - 1; 0 <= d?c <= d:c >= d; b = 0 <= d?++c:--c)
                    this.Ea[b] = a(this.Ea[b])
        }};
    Q.prototype = p.extend({}, U.prototype, Q.prototype);
    function ve(a, b) {
        this.id = a;
        this.ea = b
    }
    ve.prototype = {xb: "SetPathAction", Za: function(a) {
            this.ti = ne(V(a, this.id), this.ea)
        }, eb: function(a) {
            ne(V(a, this.id), this.ti)
        }};
    ve.prototype = p.extend({}, U.prototype, ve.prototype);
    function fb(a, b, c, d, e, f) {
        this.id = a;
        this.handle = b;
        this.ui = c;
        this.vi = d;
        this.x = e;
        this.y = f
    }
    fb.prototype = {xb: "MoveEditHandleAction", Za: function(a) {
            return V(a, this.id).Vd(this.handle, this.x, this.y)
        }, eb: function(a) {
            return V(a, this.id).Vd(this.handle, this.ui, this.vi)
        }};
    fb.prototype = p.extend({}, U.prototype, fb.prototype);
    function we(a) {
        this.Ea = a;
        this.Dc = []
    }
    we.prototype = {xb: "GroupAction", Za: function(a) {
            var b, c, d, e;
            this.Dc.length = 0;
            e = this.Ea;
            c = 0;
            for (d = e.length; c < d; c++)
                b = e[c], b = V(a, b), this.Dc.push({ma: b, parent: b.parent, index: Rd(b.parent, b)});
            this.ma = a.gd(this.Ea)
        }, eb: function(a) {
            var b, c;
            if (0 !== this.Ea.length) {
                for (b = c = this.Ea.length - 1; 0 <= c && !(0 > b); b = c += - 1)
                    b = this.Dc[b], W(a, b.parent, b.ma, b.index);
                a.removeNode(this.ma)
            }
        }, Jd: function(a, b) {
            return b.add(a.Aa)
        }, toString: function() {
            return"GroupAction(" + JSON.stringify(this.Ea) + ")"
        }};
    we.prototype = p.extend({}, U.prototype, we.prototype);
    function xe(a) {
        this.Ea = a;
        this.Ge = []
    }
    xe.prototype = {xb: "UngroupAction", Za: function(a) {
            var b, c, d, e, f, g, h, k, l;
            d = {};
            k = this.Ea;
            e = 0;
            for (g = k.length; e < g; e++)
                if (b = k[e], b = V(a, b), Ld(b) && !(b.id in d))
                    for (d[b.id] = !0, c = {ma:b, parent:b.parent, children:b.children.concat(), index:a.removeNode(b)}, this.Ge.push(c), l = c.children, f = 0, h = l.length; f < h; f++)
                        b = l[f], W(a, c.parent, b, -1)
        }, eb: function(a) {
            var b, c, d, e;
            if (0 !== this.Ge.length) {
                for (b = d = this.Ge.length - 1; 0 <= d && !(0 > b); b = d += - 1)
                    if (b = this.Ge[b], 0 !== b.children.length) {
                        for (c = e = b.children.length - 1; 0 <= e && !(0 > c); c = e +=
                                - 1)
                            W(a, b.ma, b.children[c], -1);
                        W(a, b.parent, b.ma, b.index)
                    }
                a.Ce()
            }
        }};
    xe.prototype = p.extend({}, U.prototype, xe.prototype);
    function ye(a, b, c) {
        var d, e, f;
        if (Ld(a))
            for (f = a.children, d = 0, e = f.length; d < e; d++)
                a = f[d], ye(a, b, c);
        else
            a.transform(b, c)
    }
    function ze(a, b) {
        this.Ea = a;
        this.offset = b;
        this.za = []
    }
    ze.prototype = {xb: "DuplicateAction", Za: function(a) {
            var b, c, d, e, f, g, h;
            e = new E(this.offset, this.offset);
            c = e.inverse();
            this.za.length = 0;
            d = function() {
                return a.Aa++
            };
            h = this.Ea;
            f = 0;
            for (g = h.length; f < g; f++)
                b = h[f], b = V(a, b).La(d), ye(b, e, c), vd(a, b), this.za.push(b)
        }, eb: function(a) {
            var b, c;
            if (0 !== this.za.length)
                for (b = c = this.za.length - 1; 0 <= c && !(0 > b); b = c += - 1)
                    a.removeNode(this.za[b])
        }, Jd: function(a, b) {
            var c, d, e;
            c = a.Aa;
            d = te(a, this.Ea).length;
            c = e = c;
            for (d -= 1; e <= d; c = e += 1)
                b.add(c)
        }};
    ze.prototype = p.extend({}, U.prototype, ze.prototype);
    function Ae(a, b) {
        this.Ea = a;
        this.type = b;
        this.za = [];
        this.dg = []
    }
    Ae.prototype = {xb: "ChangeOrderAction", Za: function(a) {
            var b, c, d, e, f, g;
            this.dg.length = 0;
            this.za.length = 0;
            g = this.Ea;
            e = 0;
            for (f = g.length; e < f; e++)
                switch (b = g[e], b = V(a, b), d = b.parent, c = a.removeNode(b), this.dg.push(c), this.za.push(b), this.type) {
                    case Be:
                        W(a, d, b, -1);
                        break;
                    case Ce:
                        W(a, d, b, 0);
                        break;
                    case De:
                        0 < c ? W(a, d, b, c - 1) : W(a, d, b, c);
                        break;
                    case Ee:
                        c < d.children.length ? W(a, d, b, c + 1) : W(a, d, b, c)
                    }
        }, eb: function(a) {
            var b, c, d, e;
            if (0 !== this.Ea.length)
                for (b = e = this.Ea.length - 1; 0 <= e && !(0 > b); b = e += - 1)
                    c = this.za[b], d = c.parent, a.removeNode(c),
                            W(a, d, c, this.dg[b])
        }};
    Ae.prototype = p.extend({}, U.prototype, Ae.prototype);
    var Be = 0, Ce = 1, Ee = 2, De = 3;
    function Fe(a) {
        this.ba = a
    }
    Fe.prototype = {xb: "SetDocumentProperties", Za: function(a) {
            var b;
            this.Ec = {};
            for (b in this.ba)
                this.ba.hasOwnProperty(b) && (this.Ec[b] = a.qa(b), a.setProperty(b, this.ba[b]))
        }, eb: function(a) {
            for (var b in this.Ec)
                this.Ec.hasOwnProperty(b) && a.setProperty(b, this.Ec[b])
        }};
    Fe.prototype = p.extend({}, U.prototype, Fe.prototype);
    function Ge(a) {
        K.apply(this, arguments);
        this.Na = new Qb;
        this.za = {};
        this.sd = new ja;
        this.Ce = this.Lg = !0;
        this.Aa = 0;
        this.$f = [];
        this.root = new Qd(this.Aa++);
        this.za[this.root.id] = this.root;
        this.kh = this.Na.next;
        this.ba = {};
        this.He = new ja;
        this.zh = new ja;
        this.gb = [];
        this.Ab = 0;
        a || (He(this, this.root), this.wb(this.Pd(0)))
    }
    Ge.prototype = {log: x("DOC"), empty: function() {
            return 0 === this.root.children.length
        }, Df: function() {
            return this.kh !== this.Na.next
        }, va: function(a, b) {
            this.$f.length = 0;
            if (b) {
                this.log("Performing actions without adding to undo stack");
                for (var c = 0; c < a.length; c++)
                    a[c].Za(this)
            } else
                this.Na.va(this, a);
            return this.$f
        }, eb: function() {
            this.Na.eb(this)
        }, Za: function() {
            this.Na.Za(this)
        }, ed: function() {
            return this.Na.ed()
        }, dd: function() {
            return this.Na.dd()
        }, sa: function(a, b) {
            var c, d, e, f, g;
            d = this.Lg ? this.za : this.sd.keys;
            e = [];
            for (c in d)
                d.hasOwnProperty(c) && e.push(this.za[c]);
            g = Ie(this, e);
            d = 0;
            for (f = g.length; d < f; d++)
                c = g[d], c.sa(a, b);
            this.sd.clear();
            this.Lg = !1;
            return e.length
        }, ka: function(a) {
            function b(b) {
                Je(f, function(c) {
                    f.He.contains(Md(c)) || c.md() === b && (c.hidden() || c.ka(a))
                })
            }
            var c, d, e, f = this;
            c = ka(this.zh);
            c.sort();
            d = 0;
            for (e = c.length; d < e; d++)
                b(c[d])
        }, pb: function(a, b, c) {
            var d;
            d = null;
            Je(this, function(e) {
                Md(e) === c && e.pb(a, b) && (null === d || d.md() <= e.md()) && (d = e)
            });
            return d
        }, Bb: function(a, b) {
            var c;
            c = function(d) {
                var e, f,
                        g;
                if (d.children)
                    for (a && b(d), g = d.children, e = 0, f = g.length; e < f; e++)
                        d = g[e], c(d);
                else
                    b(d)
            };
            c(this.root)
        }, gd: function(a) {
            var b, c, d, e;
            b = new Qd(this.Aa++);
            vd(this, b);
            d = 0;
            for (e = a.length; d < e; d++)
                c = a[d], W(this, b, this.za[c], -1);
            return b
        }, removeNode: function(a, b) {
            var c, d, e = this;
            void 0 === b && (b = !0);
            c = Rd(a.parent, a);
            0 <= c && (a.parent.children.splice(c, 1), a.parent = null, b && (d = function(b) {
                var c, h, k;
                delete e.za[b.id];
                a.bh();
                e.sd.remove(b.id);
                if (Ld(b))
                    for (k = b.children, c = 0, h = k.length; c < h; c++)
                        b = k[c], d(b)
            }, d(a)));
            "PageNode" ===
                    a.type() && (this.gb.splice(c, 1), c === this.Ab && (this.log("Removed current page."), this.wb(Math.min(c, this.gb.length - 1))));
            return c
        }, ub: function() {
            var a, b, c, d, e;
            a = e = d = b = null;
            this.Bb(!1, function(c) {
                if (null === b || c.rect.x < b)
                    b = c.rect.x;
                if (null === d || c.rect.right() > d)
                    d = c.rect.right();
                if (null === e || c.rect.y < e)
                    e = c.rect.y;
                if (null === a || c.rect.bottom() > a)
                    a = c.rect.bottom()
            });
            c = null === b ? new M(0, 0, 10, 10) : new M(b, e, d - b, a - e);
            this.log("getDrawingRectangle: %s", c);
            return c
        }, qa: function(a) {
            return this.ba[a]
        }, setProperty: function(a,
                b) {
            void 0 === b ? a in this.ba && delete this.ba[a] : this.ba[a] = b
        }, ge: function(a, b) {
            this.log("showLayer(%s, %s)", a, b);
            b ? this.He.remove(a) : this.He.add(a)
        }, Vf: function(a) {
            return!this.He.contains(a)
        }, Pd: function(a) {
            this.log("Adding page to document with index %s", a);
            if (a > this.gb.length)
                return this.log("Error: Can insert page with index %s", a), -1;
            var b = td("PageNode", this.Aa++);
            W(this, this.root, b, a);
            return a
        }, zc: function() {
            return this.gb.length
        }, wb: function(a) {
            if (0 <= a && a < this.gb.length)
                return this.log("Set current page to %s/%s",
                        a, this.gb.length), this.Ab = a, !0;
            this.log("Tried to set page to non-existing %s", a);
            return!1
        }};
    function Ke(a) {
        var b = 816, c = 1056;
        "width"in a.ba && (b = a.ba.width);
        "height"in a.ba && (c = a.ba.height);
        return new Lc(b, c)
    }
    function Le(a) {
        return"width"in a.ba ? new M(0, 0, a.ba.width, a.ba.height) : a.ub()
    }
    function W(a, b, c, d) {
        c.parent && a.removeNode(c, !1);
        -1 === d ? b.children.push(c) : b.children.splice(d, 0, c);
        He(a, c);
        a.Ce = !0;
        "PageNode" === c.type() && (-1 === d ? a.gb.push(c) : a.gb.splice(d, 0, c));
        c.parent = b
    }
    function Me(a, b, c) {
        var d, e, f, g, h, k, l, m, q, r;
        0 === b.indexOf("zwibblerclip.") && (b = b.substr(13));
        f = JSON.parse(b);
        b = [];
        h = a.Aa;
        q = 0;
        for (r = f.length; q < r; q++)
            if (e = f[q], "GroupAction" === e.type)
                b.push(new we(e.members)), c.push(h++);
            else if ("CreateAction" === e.type) {
                m = e.properties;
                k = {};
                for (g in m)
                    m.hasOwnProperty(g) && (l = m[g], "[object Array]" === Object.prototype.toString.apply(l) && "Matrix" === l[0] && (l.splice(0, 1), l = new N(l)), k[g] = l);
                b.push(new D(e.node, k));
                c.push(h++)
            }
        d = a.Aa;
        g = function(b) {
            a.log("Remap %s -> %s", b, b +
                    d);
            return b + d
        };
        e = 0;
        for (f = b.length; e < f; e++)
            c = b[e], c.rename(g);
        return b
    }
    function Ne(a, b, c, d) {
        var e, f, g, h;
        if (Ld(b)) {
            e = [];
            h = b.children;
            f = 0;
            for (g = h.length; f < g; f++)
                b = h[f], d = Ne(a, b, c, d), e.push(d - 1);
            c.push({type: "GroupAction", members: e})
        } else {
            a = b.ba;
            g = {};
            for (e in a)
                a.hasOwnProperty(e) && (f = a[e], f instanceof N && (f = ["Matrix", f.m11, f.m12, f.m21, f.m22, f.xa, f.ya]), g[e] = f);
            c.push({type: "CreateAction", node: b.type(), properties: g})
        }
        return d + 1
    }
    function Oe(a, b) {
        var c;
        c = 0;
        a.Ce && (a.Ce = !1, a.Bb(!0, function(a) {
            a.dh = c++
        }));
        b.sort(function(a, b) {
            return a.dh - b.dh
        })
    }
    function Je(a, b) {
        function c(a) {
            if (a.children)
                for (var e = 0; e < a.children.length; e++)
                    c(a.children[e]);
            else
                "PageNode" !== a.type() && b(a)
        }
        c(a.gb[a.Ab])
    }
    function te(a, b, c) {
        var d, e, f, g;
        void 0 === c && (c = new ja);
        e = function(a) {
            var b, d, f, g;
            c.add(a.id);
            if (Ld(a)) {
                f = a.children;
                g = [];
                b = 0;
                for (d = f.length; b < d; b++)
                    a = f[b], g.push(e(a));
                return g
            }
        };
        f = 0;
        for (g = b.length; f < g; f++)
            d = b[f], e(a.za[d]);
        return c
    }
    function Ie(a, b) {
        var c, d, e, f, g;
        e = [];
        c = {};
        f = 0;
        for (g = b.length; f < g; f++) {
            for (d = b[f]; Kd(d); )
                d = d.parent;
            d.id in c || (c[d.id] = !0, e.push(d))
        }
        Oe(a, e);
        return e
    }
    function Pe(a, b) {
        var c = [];
        Je(a, function(a) {
            b.contains(a.ub()) && c.push(a)
        });
        return c
    }
    function Qe(a) {
        a.Na = new Qb
    }
    function V(a, b) {
        var c;
        ga(b);
        return b in a.za ? (c = a.za[b], a.sd.add(b), c) : null
    }
    function vd(a, b) {
        W(a, a.gb[a.Ab], b, -1)
    }
    function wd(a, b) {
        ga(b);
        a.sd.add(b)
    }
    function He(a, b, c) {
        var d, e, f, g;
        void 0 === c && (c = !0);
        t("id"in b, "Must be a node");
        if (!(b.id in a.za) && (a.za[b.id] = b, a.$f.push(b), Ld(b)))
            for (g = b.children, e = 0, f = g.length; e < f; e++)
                d = g[e], He(a, d, c);
        c && a.sd.add(b.id);
        a.zh.add(b.md())
    }
    function Sb(a, b) {
        ga(b);
        a.Aa = b;
        a.log("nextId now %s", b)
    }
    p.extend({}, K.prototype, Ge.prototype);
    function Re() {
        this.items = []
    }
    Re.prototype = {};
    function Se(a, b, c) {
        a.items.push({type: "menu", display: b, Td: c})
    }
    function Te(a) {
        a.items.push({type: "separator"})
    }
    function X(a, b, c) {
        a.items.push({type: "normal", display: b, event: c, Uh: void 0})
    }
    ;
    function Ue(a, b) {
        this.Bi = a;
        this.name = b;
        this.aa = p("<div>").$("border-top", "1px solid #888").$("padding", "5px").$("cursor", "default");
        this.Bi.append(this.aa);
        this.update(0)
    }
    Ue.prototype = {update: function(a) {
            this.aa.text(this.name + "... " + Math.round(100 * a) + "%")
        }, error: function(a) {
            var b = this, c = Fa();
            c.click(function() {
                b.aa.remove()
            });
            Ia(this.aa, this.name + "... " + a + " ");
            this.aa.append(c)
        }};
    function Ve(a) {
        for (var b = [], c = 0; c < a; c++)
            b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890"[Math.floor(63 * Math.random())]);
        return b.join("")
    }
    "object" === typeof module && (exports.Dj = Ve);
    function We(a) {
        a = a.replace(/\+/g, " ");
        return window.Sh ? window.Sh(a) : unescape(a)
    }
    function Xe() {
        var a, b = a = a || window.location.hash, c, d, e, f;
        a = {};
        e = b.indexOf("#");
        0 <= e && (b = b.substr(e + 1));
        e = b.indexOf("#");
        0 <= e && (b = b.substr(0, e));
        b = b.split("&");
        e = 0;
        for (f = b.length; e < f; e++)
            c = b[e], d = c.split("="), c = We(d[0]), d = 1 < d.length ? We(d[1]) : "", c.length && (a[c] = d);
        return a
    }
    ;
    var Ye, Ze, $e;
    $e = document.getElementsByTagName("script");
    Ze = $e[$e.length - 1];
    Ye = void 0 !== Ze.getAttribute.length ? Ze.src : Ze.getAttribute("src", -1);
    function af(a) {
        var b, c;
        this.options = {angleArcs: 0, allowResize: !0, allowTextInShape: !0, autoPickTool: !0, background: "clear", backgroundImage: null, colourPicker: "wheel", colourPalette: "#000000 #ffffff #000088 #008800 #008888 #880000 #880088 #884400 #888888 #444444 #0000ff #00ff00 #00ffff #ff0000 #ff00ff #ffff00".split(" "), debug: !1, defaultBrushColour: "#000000", defaultBrushWidth: 10, defaultFillStyle: "#e0e0e0", defaultFont: "Arial", defaultFontSize: 20, defaultLineWidth: 2, defaultPaperSize: "none", defaultRoundRectRadius: 10,
            defaultSmoothness: "smooth", defaultStrokeStyle: "#000000", defaultText: "Lorum ipsum dolor", defaultTextFillStyle: "#000000", defaultTextStrokeStyle: "#000000", defaultTextLineWidth: 0, defaultZoom: 1, fonts: ["Arial", "Times New Roman"], gridBlocks: 10, gridSpacing: 20, gridColour: "#cccccc", imageFolder: "$SCRIPT", iPadNoScrollText: !0, keyBringToFront: "Home", keyCancel: "ESC", keyCopy: "Ctrl+C,\u2318+C", keyCurveTool: "C", keyCut: "Ctrl+X,\u2318+X,Shift+Delete", keyDelete: "Delete,Backspace", keyDown: "Down", keyDuplicate: "Ctrl+D",
            keyEnter: "Enter", keyGroup: "Ctrl+G", keyLeft: "Left", keyLineTool: "L", keyMoveDown: "PageDown", keyMoveUp: "PageUp", keyNext: "Down,Right", keyNextPage: "Shift+PageDown", keyPaste: "Ctrl+V,\u2318+V,Shift+Insert", keyPrevious: "Left,Up", keyPreviousPage: "Shift+Pageup", keyRedo: "Ctrl+Shift+Z", keyRight: "Right", keySelectNone: "ESC", keySendToBack: "End", keyUndo: "Ctrl+Z", keyUngroup: "Ctrl+Shift+G", keyUp: "Up", keyZoomIn: "+,Shift+=", keyZoomNormal: "=", keyZoomOut: "-", keyZoomToPage: "F4", keyZoomToWidth: "Shift+F4", language: "en", multilineText: !1,
            nudge: 10, pageView: !1, pageSelectorDiv: "", pasteOffset: 10, readOnly: !1, scrollbars: !0, setFocus: !0, showArrowTool: !0, showBackgroundSelector: !1, showBrushTool: !0, showCircleTool: !0, showColourPanel: !0, showCopyPaste: !0, showCurveTool: !0, showDebug: !1, showFontNameProperty: !0, showFontSizeProperty: !0, showHints: !0, showImageSelector: !1, showImageTool: !1, showKeyboardHelp: !0, showLineTool: !0, showMathTool: !1, showMenu: !1, showMoveToFrontBack: !1, showPageSelector: !1, showPageSelectorControls: !0, showPickTool: !0, showPropertyPanel: !1,
            showRoundRectTool: !1, showShapeBrushTool: !1, showSloppinessProperty: !0, showSmoothnessProperty: !0, showSquareTool: !0, showTextTool: !0, showToolbar: !0, showUndoRedo: !0, sloppy: !1, snap: 0, symmetry: 0, textMode: "interactive", useTouch: "auto", enableArrowKeysNudge: !1};
        for (c in a)
            a.hasOwnProperty(c) && (c in this.options || alert("Zwibbler: Unknown option '" + c + "'"), this.options[c] = a[c]);
        a = Xe();
        for (c in a)
            a.hasOwnProperty(c) && this.set(c, a[c]);
        "" === bf() ? (this.Pa = this.options.imageFolder.replace("$SCRIPT/", ""), this.Pa = this.Pa.replace("$SCRIPT",
                "")) : this.Pa = this.options.imageFolder.replace("$SCRIPT", bf());
        "" !== this.Pa && "/" !== this.Pa[this.Pa.length - 1] && (this.Pa += "/");
        "auto" === this.options.useTouch && (c = "ontouchstart"in window || "onmsgesturechange"in window, this.log("Detected touch support: %s", c));
        for (b in this.options)
            this.options.hasOwnProperty(b) && this.log("%s=%s", b, this.options[b])
    }
    af.prototype = {log: x("CONFIG"), set: function(a, b, c) {
            if (!(a in this.options))
                return this.log("Error: %s is not a configuration option.", a), !1;
            if ("defaultZoom" === a) {
                if ("page" !== b && "width" !== b && !w(b) && (b = parseFloat(b), isNaN(b)))
                    return this.log("Error: Config option %s must be a number or 'page' or 'width'", a), !1
            } else if ("string" === typeof b)
                if ("number" === typeof this.options[a]) {
                    if (b = parseFloat(b), isNaN(b))
                        return this.log("Error: Config option %s expects a number", a), !1
                } else
                    "boolean" === typeof this.options[a] &&
                            (b = "1" === b || "true" === b || "" === b);
            this.log("Set config %s=%s", a, b);
            this.options[a] = b;
            c || this.Hf("update", a, b);
            return!0
        }, Vi: function() {
            return this.options.showBrushTool
        }, th: function() {
            return this.options.showPropertyPanel
        }, Wi: function() {
            return this.options.showColourPanel
        }, Jc: function() {
            return this.options.showDebug
        }, Xi: function() {
            return this.options.showToolbar
        }, get: function(a) {
            return this.options[a]
        }, fc: function() {
            return"auto" === this.options.useTouch ? "ontouchstart"in window || "onmsgesturechange"in window :
                    this.options.useTouch
        }};
    function cf(a, b) {
        for (var c in a.options)
            if (a.options.hasOwnProperty(c) && 0 === c.indexOf("key")) {
                for (var d = "", e = 0; e < c.length; e++)
                    var f = c.charAt(e), d = f === f.toUpperCase() ? d + ("-" + f.toLowerCase()) : d + f;
                b.map(a.options[c], d.substr(4))
            }
    }
    function df(a) {
        a = a.get("pageSelectorDiv");
        return void 0 !== a.className ? a : "" !== a && p(a).length ? p(a)[0] : null
    }
    function bf() {
        var a, b;
        b = Ye;
        a = b.lastIndexOf("/");
        return b = 0 <= a ? b.substr(0, a + 1) : ""
    }
    af.prototype = p.extend({}, K.prototype, af.prototype);
    var ef;
    ef = "en:arrowhead-size:Arrowhead size\nes:arrowhead-size:Flecha tama\u00f1o\n\nen:arrowhead-size-large:Large\nes:arrowhead-size-large:Grande\n\nen:arrowhead-size-medium:Medium\nes:arrowhead-size-medium:Medio\n\nen:arrowhead-size-none:None\nes:arrowhead-size-none:Nada\n\nen:arrowhead-size-small:Small\nes:arrowhead-size-small:Peque\u00f1o\n\nen:arrowhead-size-tiny:Tiny\nes:arrowhead-size-tiny:Diminuto\n\nen:arrowhead-style:Arrowhead style\nes:arrowhead-style:Flecha estilo\n\nen:arrowhead-style-simple:Simple\nes:arrowhead-style-simple:Llanura\n\nen:arrowhead-style-solid:Solid\nes:arrowhead-style-solid:Denso\n\nen:arrow-keys:Arrow Keys\nes:arrow-keys:Teclas de flecha\n\nen:arrow-tool:Arrow tool\nes:arrow-tool:Flecha\n\nen:break-apart-group:Break apart group\nes:break-apart-group:Dividir el grupo\n\nen:bring-to-front:Bring to front\nes:bring-to-front:Traer al frente\n\nen:brush-tool:Brush tool\nes:brush-tool:Brocha\n\nen:circle-tool:Circle tool\nes:circle-tool:C\u00edrculo\n\nen:click-to-place-another-point-or-double-click-to-end-the-line:Click to place another point, or double-click to end the line.\nes:click-to-place-another-point-or-double-click-to-end-the-line:Haga clic para colocar otro punto, o doble clic para finalizar la l\u00ednea\n\nen:click-to-place-first-point-of-line:Click to place first point of line\nes:click-to-place-first-point-of-line:Haga clic para colocar el primer punto de la l\u00ednea\n\nen:click-to-set-the-end-of-the-line:Click to set the end of the line\nes:click-to-set-the-end-of-the-line:Haga clic para colocar el extremo de la l\u00ednea\n\nen:copy:Copy\nes:copy:Copiar\n\nen:curve-tool:Curve tool\nes:curve-tool:Curva\n\nen:delete-selection:Delete selection\nes:delete-selection:Eliminar la selecci\u00f3n\n\nen:del-key:Del\nes:del-key:Del\n\nen:double-arrows:Double arrows\nes:double-arrows:flechas dobles\n\nen:draw-curves:Draw curves\nes:draw-curves:Dibuje las curvas\n\nen:draw-lines:Draw lines\nes:draw-lines:Dibujar l\u00edneas\n\nen:duplicate-selection:Duplicate selection\nes:duplicate-selection:Duplica la selecci\u00f3n\n\nen:fill-colour:Fill colour\nes:fill-colour:Color de relleno\n\nen:font:Font\nes:font:Font\n\nen:font-size:Font size\nes:font-size:Tama\u00f1o de letra\n\nen:group-selection:Group selection\nes:group-selection:Grupo la selecci\u00f3n\n\nen:image-tool:Image tool\nes:image-tool:Imagen\n\nen:image-url:Image URL\nes:image-url:URL de la imagen\n\nen:keyboard:Keyboard\nes:keyboard:Teclado\n\nen:line-style:Line style\nes:line-style:Estilo de l\u00ednea\n\nen:line-style-long-dashes:Long dashes\nes:line-style-long-dashes:Gui\u00f3n largo\n\nen:line-style-short-dashes:Short dashes\nes:line-style-short-dashes:Gui\u00f3n corto\n\nen:line-style-solid:Solid\nes:line-style-solid:Denso\n\nen:line-tool:Line tool\nes:line-tool:Raya\n\nen:math-tool:Equation tool\nes:math-tool:Ecuaci\u00f3n\n\nen:move-selection-away:Move selection away\nes:move-selection-away:Mover la selecci\u00f3n de distancia\n\nen:move-selection-closer:Move selection closer\nes:move-selection-closer:Mover la selecci\u00f3n de distancia\n\nen:move-while-zoomed:Move while zoomed\nes:move-while-zoomed:Desplazarse por la pantalla\n\nen:none:None\nes:none:Nada\n\nen:no:No\nes:no:No\n\nen:outline-colour:Outline colour\nes:outline-colour:Color del contorno\n\nen:outline-thickness:Outline thickness\nes:outline-thickness:Grosor del contorno\n\nen:page-down-key:Page Down\nes:page-down-key:Page Down\n\nen:page-up-key:Page Up\nes:page-up-key:Page Up\n\nen:paste:Paste\nes:paste:Pegar\n\nen:pick-tool:Pick tool\nes:pick-tool:Seleccionar\n\nen:rectangle-tool:Rectangle tool\nes:rectangle-tool:rect\u00e1ngulo\n\nen:redo:Redo\nes:redo:Rehacer\n\nen:rounded-rectangle-tool:Rounded rectangle tool\nes:rounded-rectangle-tool:Rect\u00e1ngulo redondeado\n\nen:save:Save\nes:save:Guardar\n\nen:send-to-back:Send to back\nes:send-to-back:Enviar a la parte posterior\n\nen:shadow:Shadow\nes:shadow:Sombra\n\nen:shape-brush-tool:Shape brush tool\nes:shape-brush-tool:Brush que dibuja formas\n\nen:sloppiness-artist:Artist\nes:sloppiness-artist:Artista\n\nen:sloppiness-cartoonist:Cartoonist\nes:sloppiness-cartoonist:Caricaturista\n\nen:sloppiness-child:Child\nes:sloppiness-child:Ni\u00f1o\n\nen:sloppiness-draftsman:Draftsman\nes:sloppiness-draftsman:Dibujante\n\nen:sloppiness-drunk:Drunk\nes:sloppiness-drunk:Borracho\n\nen:sloppiness:Sloppiness\nes:sloppiness:La dejadez\n\nen:smoothness-sharper:Sharper\nes:smoothness-sharper:Muy afilado\n\nen:smoothness-sharpest:Sharpest\nes:smoothness-sharpest:M\u00e1s afilado\n\nen:smoothness-sharp:Sharp\nes:smoothness-sharp:Afilado\n\nen:smoothness-smoothest:Smoothest\nes:smoothness-smoothest:Muy liso\n\nen:smoothness:Smoothness\nes:smoothness:Lisura\n\nen:smoothness-smooth:Smooth\nes:smoothness-smooth:Liso\n\nen:text-colour:Text colour\nes:text-colour:Color del texto\n\nen:text:Text\nes:text:Texto\n\nen:text-tool:Text tool\nes:text-tool:Texto\n\nen:thickness-brush:Brush\nes:thickness-brush:Brocha\n\nen:thickness-marker:Marker\nes:thickness-marker:Rotulador\n\nen:thickness-pencil:Pencil\nes:thickness-pencil:L\u00e1piz\n\nen:thickness-pen:Pen\nes:thickness-pen:Pluma\n\nen:undo:Undo\nes:undo:Deshacer\n\nen:yes:Yes\nes:yes:S\u00ed\n\nen:zoom-in:Zoom in\nes:zoom-in:Zoom\n\nen:zoom-out:Zoom out\nes:zoom-out:Disminuir el zoom\n";
    var ff = 14;
    function gf() {
        return"localStorage"in window && null !== window.localStorage
    }
    var hf = {};
    function jf(a, b, c, d) {
        this.view = a;
        this.ya = this.xa = 0;
        this.Va = !1;
        this.ih = b;
        this.Ta(c, d)
    }
    jf.prototype = {log: x("SELECT"), fb: function(a) {
            "touchmove" === a.type ? (a = kf(this.view, a.changedTouches[0]), this.Xa(a.x, a.y)) : "touchend" === a.type && (a = kf(this.view, a.changedTouches[0]), this.Ya(a.x, a.y))
        }, Ta: function(a, b) {
            this.xa = a;
            this.ya = b;
            this.Va = !0
        }, Xa: function(a, b) {
            if (this.Va) {
                var c = this.view.ia, d = this;
                this.view.ka(function() {
                    c.save();
                    c.strokeStyle = "#0050B7";
                    c.lineWidth = 2 / d.view.scale;
                    c.fillStyle = "rgba(0, 80, 183, 0.2)";
                    var e = new M(d.xa + 0.5, d.ya + 0.5, a - d.xa, b - d.ya);
                    c.fillRect(e.x, e.y, e.width, e.height);
                    c.strokeRect(e.x, e.y, e.width, e.height);
                    c.restore()
                })
            }
        }, Ya: function(a, b) {
            this.Va = !1;
            this.view.ob();
            for (var c = this.view, d = Pe(c.ja, new M(this.xa, this.ya, a - this.xa, b - this.ya)), e = 0; e < d.length; e++)
                lf(c, d[e]);
            S(this.view);
            this.view.ka();
            this.view.pa = this.ih
        }};
    function gb(a) {
        this.Ha(a)
    }
    gb.prototype = {Ha: function(a) {
            this.view = a;
            re(this.view, "");
            this.fc = this.view.da.fc();
            this.lh = 1;
            this.fc && (this.lh = 2)
        }, log: x("DefaultBehaviour"), Zb: function() {
            this.log("Entering pick tool.");
            this.view.canvas.style.cursor = "default"
        }, nc: function() {
            this.log("Leaving pick tool.")
        }, fb: function(a) {
            for (var b, c = 0; c < a.touches.length; c++)
                b = a.touches[c], b = z(this.view, b.pageX, b.pageY), "touchstart" === a.type ? this.Ta(b.x, b.y, a) : "touchend" === a.type && this.Ya(b.x, b.y)
        }, Ta: function(a, b, c) {
            var d, e;
            this.log("onMouseDown");
            if (this.view.da.get("readOnly"))
                (d = this.view.ja.pb(a, b, this.view.Ja)) ? (this.log("layer=%s active=%s", Md(d), this.view.Ja), this.view.la.emit("node-clicked", d.id)) : this.log("readOnly mode: Ignoring click.");
            else {
                a:{
                    d = this.view;
                    if (!d.Fa) {
                        e = d.xg / d.scale;
                        for (var f = 0; f < d.Ic.length; f++) {
                            var g = d.Ic[f];
                            if (g.x - e <= a && a < g.x + e && g.y - e <= b && b < g.y + e) {
                                e = g;
                                break a
                            }
                        }
                    }
                    e = null
                }
                if (e)
                    C(this.view, new ld(this.view, e, !1, a, b));
                else {
                    if (d = this.view.selection.length) {
                        d = this.view;
                        var g = mf(d), h = p(d.canvas).offset(), f = kd(d.Fb);
                        "changedTouches"in
                                c ? (e = c.changedTouches[0].pageX - h.left - g, g = c.changedTouches[0].pageY - h.top - g) : (e = c.pageX - h.left - g, g = c.pageY - h.top - g);
                        d = d.$c && e > d.canvas.width - d.$c.width - f && g < d.$c.height
                    }
                    d && this.view.la.emit("menu.delete", {});
                    if (this.view.Fa && (d = this.view.Fa, e = d.Tf(a, b, 1 / this.view.scale * this.lh), null !== e)) {
                        C(this.view, new eb(this.view, d, e, a, b));
                        return
                    }
                    if (d = this.view.ja.pb(a, b, this.view.Ja))
                        this.log("layer=%s active=%s", Md(d), this.view.Ja), this.view.la.emit("node-clicked", d.id);
                    d && Md(d) === this.view.Ja ? (e = d === this.view.Fa,
                            f = d.Cb === this.view.Cb, this.log("wasEditNode: %s, wasSelected: %s", e, f), f || (c.shiftKey || this.view.ob(), lf(this.view, d), S(this.view)), C(this.view, new ld(this.view, new Ed(d, R(d)), !e && f, a, b))) : (c = this.view, c.selection.length && c.nh.gc(a, b) ? C(this.view, new ld(this.view, new Ed(this.view.selection[0], R(this.view.selection[0])), !0, a, b)) : (this.view.Fa = null, C(this.view, new jf(this.view, this, a, b))))
                }
            }
        }, Ya: function() {
            this.log("onMouseUp")
        }, Kb: function(a, b) {
            this.log("keyboard: %s", a);
            var c = !0;
            switch (a) {
                case "bring-to-front":
                    this.view.la.emit("menu.bringToFront",
                            {});
                    break;
                case "send-to-back":
                    this.view.la.emit("menu.sendToBack", {});
                    break;
                case "left":
                    nf(this.view, -1, 0) || (this.view.Ka = Math.min(this.view.Ka + 16, 0), G(this.view), this.view.ka());
                    break;
                case "right":
                    nf(this.view, 1, 0) || (this.view.Ka = Math.max(-(this.view.canvas.width * this.view.scale - this.view.canvas.width), this.view.Ka - 16), G(this.view), this.view.ka());
                    break;
                case "up":
                    nf(this.view, 0, -1) || (this.view.Ia = Math.min(this.view.Ia + 16, 0), G(this.view), this.view.ka());
                    break;
                case "down":
                    nf(this.view, 0, 1) || (this.view.Ia =
                            Math.max(-(this.view.canvas.height * this.view.scale - this.view.canvas.height), this.view.Ia - 16), G(this.view), this.view.ka());
                    break;
                case "select-none":
                    this.view.ob();
                    S(this.view);
                    this.view.ka();
                    this.view.Ca.sb && this.view.la.emit("goto-toolbar");
                    break;
                case "duplicate":
                    this.view.la.emit("menu.duplicate", {});
                    break;
                case "move-up":
                    this.view.la.emit("menu.moveUp", {});
                    break;
                case "move-down":
                    this.view.la.emit("menu.moveDown", {});
                    break;
                case "delete":
                    this.view.la.emit("menu.delete", {});
                    break;
                case "curve-tool":
                    of(this.view);
                    break;
                case "line-tool":
                    pf(this.view);
                    break;
                case "group":
                    this.view.la.emit("menu.group", {});
                    break;
                case "ungroup":
                    this.view.la.emit("menu.ungroup", {});
                    break;
                case "undo":
                    this.view.la.emit("menu.undo", {});
                    break;
                case "redo":
                    this.view.la.emit("menu.redo", {});
                    break;
                case "cut":
                    this.view.la.emit("menu.cut", {});
                    break;
                case "copy":
                    this.view.la.emit("menu.copy", {});
                    break;
                case "paste":
                    this.view.la.emit("menu.paste", {});
                    break;
                case "zoom-normal":
                    var d = qf(this.view);
                    this.view.scale = 1;
                    this.view.Ka = -d.x;
                    this.view.Ia =
                            -d.y;
                    G(this.view);
                    this.view.ka();
                    break;
                case "zoom-in":
                    this.view.ff();
                    break;
                case "zoom-out":
                    this.view.gf();
                    break;
                default:
                    c = !1
            }
            c && (b.preventDefault(), b.stopPropagation())
        }, oc: function(a) {
            var b;
            1 === a.button ? (this.view.Xb = a.ib, this.view.Nc = a.ib, b = "fillStyle") : (this.view.Yb = a.ib, b = "strokeStyle");
            this.view.setProperty(b, a.ib)
        }, pd: function(a, b) {
            this.log("onDoubleClick");
            var c = this.view.ja.pb(a, b, this.view.Ja);
            this.log("hittest: %s, hasText: %s", null !== c, null !== c && c.Sf());
            c && c.Sf() ? (this.log("Text double-clicked."),
                    rf(this.view), zd(this.view.pa, c, a, b)) : c && "MathNode" === c.type() && this.view.la.emit("math.edit", Y(this.view)[0])
        }};
    for (var sf, tf = [], uf = 0; 4 > uf; uf++)
        tf.push(String.fromCharCode(">2$-".charCodeAt(uf) ^ "zwibbler3".charCodeAt(uf % 9)));
    sf = tf.join("");
    for (var vf, wf = [115, 116, 114, 111, 107, 101, 84, 101, 120, 116], xf = [], yf = 0; yf < wf.length; yf++)
        xf.push(String.fromCharCode(wf[yf]));
    vf = xf.join("");
    function zf(a, b, c, d, e, f) {
        this.da = e;
        this.language = f;
        this.Gb = c;
        this.la = d;
        this.canvas = a[0];
        this.ia = this.canvas.getContext("2d");
        this.zd = !0 === e.get("pageView");
        Af(this);
        this.Ca = {sb: !1, Va: !1, wf: !1, x: 100, y: 100};
        this.pa = new gb(this);
        this.nb = null;
        this.$b = new gd("horizontal", !0);
        this.canvas.parentNode.appendChild(this.$b.canvas);
        this.Fb = new gd("vertical", !1);
        this.canvas.parentNode.appendChild(this.Fb.canvas);
        this.Tb = "none";
        this.Cd = 0;
        this.ng = this.ee = !0;
        this.Ic = [];
        this.Ja = "default";
        e.fc() && (this.$c = document.createElement("img"),
                this.$c.setAttribute("src", e.Pa + "wd-trash.png"));
        var g = this;
        this.rb = new Tb;
        this.rb.canvas = this.canvas;
        this.rb.on("reformat", function(a) {
            g.log("Node %s requests reformat", a.id);
            a.id in g.ja.za && (g.log("   Reformatting... zoom=%s", g.Tb), wd(g.ja, a.id), g.update(), g.zoom(g.Tb), g.ra.emit("resource-loaded"))
        });
        this.rb.on("convert-dom-request", function(a, b) {
            g.la.emit("convert-dom-request", a, b)
        });
        this.Fa = this.uc = null;
        this.Lc = 4;
        this.da.fc() ? (this.xg = 4 * this.Lc, this.Lc = 9) : this.xg = 2 * this.Lc;
        this.la.bind("menu.undo",
                function() {
                    g.eb()
                });
        this.la.bind("menu.redo", function() {
            g.Za()
        });
        this.la.bind("menu.copy", function() {
            g.copy()
        });
        this.la.bind("menu.cut", function() {
            g.copy();
            Bf(g)
        });
        this.la.bind("menu.paste", function() {
            g.Qe()
        });
        this.la.bind("menu.duplicate", function() {
            g.duplicate()
        });
        this.la.bind("menu.moveUp", function() {
            g.Le()
        });
        this.la.bind("menu.moveDown", function() {
            g.Ke()
        });
        this.la.bind("menu.bringToFront", function() {
            g.qe()
        });
        this.la.bind("menu.sendToBack", function() {
            g.We()
        });
        this.la.bind("menu.group", function() {
            g.group()
        });
        this.la.bind("menu.ungroup", function() {
            g.ke()
        });
        this.la.bind("menu.delete", function() {
            Bf(g)
        });
        this.la.bind("menu.outline-none", function() {
            g.setProperty("lineWidth", 0)
        });
        this.la.bind("menu.outline-pencil", function() {
            g.setProperty("lineWidth", 1)
        });
        this.la.bind("menu.outline-pen", function() {
            g.setProperty("lineWidth", 2)
        });
        this.la.bind("menu.outline-marker", function() {
            g.setProperty("lineWidth", 4)
        });
        this.la.bind("menu.shadow-none", function() {
            g.setProperty("shadow", !1)
        });
        this.la.bind("menu.shadow", function() {
            g.setProperty("shadow",
                    !0)
        });
        this.la.bind("menu.font.FG Virgil", function() {
            g.setProperty("fontName", "FG Virgil")
        });
        this.la.bind("menu.font.Stinky Kitty", function() {
            g.setProperty("fontName", "Stinky Kitty")
        });
        this.la.bind("menu.font.Arial", function() {
            g.setProperty("fontName", "Arial")
        });
        this.la.bind("menu.font.Times New Roman", function() {
            g.setProperty("fontName", "Times New Roman")
        });
        this.la.bind("menu.sloppiness-draftsman", function() {
            g.setProperty("sloppiness", 0)
        });
        this.la.bind("menu.sloppiness-artist", function() {
            g.setProperty("sloppiness",
                    0.25)
        });
        this.la.bind("menu.sloppiness-Cartoonist", function() {
            g.setProperty("sloppiness", 0.5)
        });
        this.la.bind("menu.sloppiness-child", function() {
            g.setProperty("sloppiness", 1)
        });
        this.la.bind("menu.sloppiness-drunk", function() {
            g.setProperty("sloppiness", 2)
        });
        this.la.bind("menu.insert.cylinder", function() {
            var a = g.ja.Aa, b = new Xd([]);
            b.moveTo(100, 100);
            b.lineTo(200, 100);
            b.lineTo(200, 200);
            pe(b, 200, 225, 150, 225);
            pe(b, 100, 225, 100, 200);
            b.lineTo(100, 100);
            b.close();
            var c = new Xd;
            c.moveTo(100, 100);
            pe(c, 100, 75, 150,
                    75);
            pe(c, 200, 75, 200, 100);
            pe(c, 200, 125, 150, 125);
            pe(c, 100, 125, 100, 100);
            c.close();
            g.va([new D("PathNode", {commands: b.Nb(), layer: g.Ja}), new D("PathNode", {commands: c.Nb(), layer: g.Ja}), new we([a, a + 1])])
        });
        this.Fb.on("scroll", function(a) {
            g.Ia = -a * g.scale;
            g.ka()
        });
        this.$b.on("scroll", function(a) {
            g.Ka = -a * g.scale;
            g.ka()
        });
        Cf(this);
        this.xd(b);
        (a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) ? (this.log("Using requestAnimationFrame"), this.requestAnimationFrame =
                a) : this.log("Emulating requestAnimationFrame");
        this.Gf = !1;
        this.Ef = null;
        this.da.on("update", function(a, b) {
            g.eg(a, b)
        });
        p(document).on("webkitfullscreenchange", function() {
            0 <= navigator.userAgent.search("Safari") && 0 > navigator.userAgent.search("Chrome") && (g.log("SAFARI WORKAROUND: Disabling requestAnimationFrame."), g.requestAnimationFrame = zf.prototype.requestAnimationFrame)
        })
    }
    zf.prototype = {log: x("VIEW"), requestAnimationFrame: function(a) {
            a()
        }, Id: function() {
            this.log("getActiveLayer() -> %s", this.Ja);
            return this.Ja
        }, Xe: function(a) {
            this.log("setActiveLayer(%s)", a);
            this.Ja = a;
            this.ob();
            S(this);
            this.ka()
        }, ge: function(a, b) {
            this.ja.ge(a, b);
            b || a !== this.Ja || (this.ob(), S(this));
            this.ka()
        }, xd: function(a) {
            this.ja = a;
            this.scale = 1;
            this.Ia = this.Ka = 0;
            this.selection = [];
            this.Fa = null;
            this.Cb = 1;
            this.Db = new M(0, 0, 0, 0);
            this.nh = new P(this.Db);
            this.Ve = new N;
            this.If = !0;
            this.lg = this.kg = 0;
            this.Nd =
                    null;
            this.Ja = "default";
            this.Xb = "#ffffff";
            this.Nc = this.da.options.defaultBrushColour;
            this.Yb = this.da.options.defaultStrokeStyle;
            this.wa = {};
            this.wa.lineWidth = this.da.options.defaultLineWidth;
            this.wa.sloppiness = 0.5;
            this.wa.fontName = this.da.options.defaultFont;
            this.wa.fontSize = this.da.options.defaultFontsize;
            this.wa.smoothness = 0.3;
            this.wa.textFillStyle = this.da.options.defaultTextFillStyle;
            this.wa.textStrokeStyle = this.da.options.defaultTextStrokeStyle;
            this.wa.textLineWidth = this.da.options.defaultTextLineWidth;
            this.Hd = this.da.get("defaultBrushWidth");
            a = qf(this);
            this.Ka = -a.x;
            this.Ia = -a.y;
            G(this);
            this.ja.sa(this.ia, this.rb);
            "none" !== this.Tb ? this.zoom(this.Tb) : (this.zoom(this.da.get("defaultZoom")), this.ka())
        }, eg: function(a, b) {
            var c = !1;
            switch (a) {
                case "defaultBrushColour":
                    this.Nc = b;
                    this.pa && void 0 !== this.pa.Vg && (this.pa.options.strokeStyle = b);
                    break;
                case "defaultFillStyle":
                    this.Xb = this.wa.fillStyle = b;
                    break;
                case "defaultStrokeStyle":
                    this.Yb = b;
                    this.wa.strokeStyle = b;
                    break;
                case "defaultLineWidth":
                    this.wa.lineWidth =
                            b;
                    break;
                case "defaultFont":
                    this.wa.fontName = b;
                    break;
                case "defaultFontSize":
                    this.wa.fontSize = b;
                    break;
                case "defaultTextFillStyle":
                    this.wa.textFillStyle = b;
                    break;
                case "defaultTextStokeStyle":
                    this.wa.textStrokeStyle = b;
                    break;
                case "defaultTextLineWidth":
                    this.wa.textLineWidth = b;
                    break;
                case "defaultBrushWidth":
                    this.Hd = b;
                    this.pa && this.pa.Vg && (this.pa.options.lineWidth = b);
                    break;
                case "snap":
                case "background":
                    Cf(this);
                    c = !0;
                    break;
                case "symmetry":
                    c = !0;
                    break;
                case "readOnly":
                    !0 === b && (F(this), this.ob(), S(this), c = !0)
            }
            c &&
                    this.ka()
        }, pg: function(a) {
            this.rb.pg(a)
        }, zoom: function(a) {
            var b, c = this.canvas.width - 20;
            b = "width"in this.ja.ba;
            this.Tb = a;
            b || this.log("WARNING: Cannot zoom to page/width because the document size has not been set.");
            if (w(a))
                this.scale = a;
            else if ("none" === a || this.ja.empty() || !b)
                this.scale = 1, this.Ia = this.Ka = 0;
            else if ("page" === a) {
                b = qf(this);
                var d = c = 0;
                this.scale = Math.min(this.canvas.width / b.width, this.canvas.height / b.height);
                this.scale * b.width < this.canvas.width && (c += (this.canvas.width - this.scale * b.width) /
                        2 / this.scale);
                this.scale * b.height < this.canvas.height && (d += (this.canvas.height - this.scale * b.height) / 2 / this.scale);
                this.Ka = -(b.x - c) * this.scale;
                this.Ia = -(b.y - d) * this.scale;
                this.log("RECT=%s scale=%s tx=%s", b, this.scale, this.Ka);
                this.Tb = a
            } else
                "width" === a && (b = qf(this), this.scale = c / b.width, this.Ka = -b.x * this.scale, this.Ia = -b.y * this.scale, this.log("RECT=%s scale=%s tx=%s ty=%s", b, this.scale, this.Ka, this.Ia), this.Tb = a);
            G(this);
            this.ka()
        }, Kb: function(a, b) {
            var c;
            if (this.Ca.sb) {
                var d = 0, e = 0, f = this.da.get("nudge");
                switch (a) {
                    case "right":
                        d = f;
                        break;
                    case "left":
                        d = -f;
                        break;
                    case "down":
                        e = f;
                        break;
                    case "up":
                        e = -f;
                        break;
                    case "enter":
                        this.pa.ac ? (this.Ca.Va = !1, c = "click") : (this.Ca.Va = !this.Ca.Va, c = this.Ca.Va ? "mousedown" : "mouseup")
                }
                if (d || e)
                    this.Ca.x += d, this.Ca.x = Math.max(this.Ca.x, 0), this.Ca.x = Math.min(this.canvas.width, this.Ca.x), this.Ca.y += e, this.Ca.y = Math.max(this.Ca.y, 0), this.Ca.y = Math.min(this.canvas.height, this.Ca.y), this.ka(), c = "mousemove";
                c ? (b.preventDefault(), b.stopPropagation(), this.ka(), e = p(this.canvas).offset(),
                        d = this.Ca.x + e.left, e = this.Ca.y + e.top, this.log("Simulate a %s at (%s,%s)", c, d, e), f = document.createEvent("MouseEvents"), f.initMouseEvent(c, !0, !0, window, 0, d, e, d, e, !1, !1, !1, !1, this.Ca.Va ? 1 : 0, null), this.canvas.dispatchEvent(f), c = !0) : c = !1
            } else
                c = !1;
            if (!c) {
                this.pa.Kb && this.pa.Kb(a, b);
                switch (a) {
                    case "next-page":
                        this.wb(this.ja.Ab + 1);
                        break;
                    case "previous-page":
                        this.wb(this.ja.Ab - 1);
                        break;
                    case "zoom-to-page":
                        this.zoom("page");
                        break;
                    case "zoom-to-width":
                        this.zoom("width")
                }
                b.preventDefault();
                b.stopPropagation()
            }
        },
        rc: function(a) {
            this.Ca.sb = !0;
            this.Ca.Va = !1;
            this.Ca.wf = a;
            this.log("Showing keyboard cursor, caret=%s", a);
            this.ka()
        }, li: function() {
            return this.Ca.sb
        }, cb: function(a) {
            var b = this.da.get("snap"), c;
            0 < b ? (c = Math.round(a.x / b) * b, a = Math.round(a.y / b) * b) : (c = a.x, a = a.y);
            return new B(c, a)
        }, Le: function() {
            var a = Y(this);
            a.length && this.va([new Ae(a, Ee)])
        }, Ke: function() {
            var a = Y(this);
            a.length && this.va([new Ae(a, De)])
        }, qe: function() {
            var a = Y(this);
            a.length && this.va([new Ae(a, Be)])
        }, We: function() {
            var a = Y(this);
            a.length &&
                    this.va([new Ae(a, Ce)])
        }, setProperty: function(a, b) {
            var c = Y(this, !0);
            this.wa[a] = b;
            c.length && this.va([new Ad(c, a, b)]);
            0 < this.selection.length && "lineWidth" === a && "BrushNode" === this.selection[0].type() ? this.Hd = b : "textFillStyle" === a && (this.wa.textFillStyle = b)
        }, group: function() {
            var a = Y(this);
            a.length && this.va([new we(a)])
        }, ke: function() {
            var a = Y(this);
            a.length && this.va([new xe(a)])
        }, ob: function() {
            0 < this.selection.length && (this.Cb += 1, this.selection.length = 0, this.log("Clear selection. selectGeneration=%s",
                    this.Cb));
            this.Fa && (this.log("Clear selection."), this.Fa = null)
        }, selectNodes: function(a) {
            this.ob();
            for (var b = 0; b < a.length; b++)
                a[b].qa("locked") || "PageNode" === a[b].type() || lf(this, a[b]);
            S(this)
        }, va: function(a, b) {
            if (this.da.get("readOnly"))
                this.log("readOnly mode: Ignoring change.");
            else {
                var c = this.ja.va(a, b);
                this.ja.sa(this.ia, this.rb);
                if (c.length)
                    this.selectNodes(c);
                else if (this.selection.length || this.Fa) {
                    c = 0;
                    this.Cb += 1;
                    for (var d = 0; d < this.selection.length; d++)
                        d !== c && (this.selection[c] = this.selection[d]),
                                this.selection[c].id in this.ja.za && (this.selection[c].Cb = this.Cb, c++);
                    this.selection.length !== c && (this.selection.length = c);
                    !this.Fa || this.Fa.id in this.ja.za || (this.log("EditNode %s no longer exists", this.Fa.id), this.Fa = null);
                    0 !== this.selection.length || this.Fa || this.ob();
                    S(this)
                }
                this.zoom(this.Tb);
                this.ka();
                this.la.emit("document-changed")
            }
        }, ld: function() {
            var a = this.selection.concat();
            this.Fa && a.push(this.Fa);
            for (var b = 0; b < a.length; b++)
                this.log("Selected node=%s", a[b].id);
            return a
        }, Nf: function(a) {
            ha(a) ||
                    (a = [a]);
            for (var b = null, c = 0; c < a.length; c++) {
                var d = V(this.ja, a[c]);
                d && (null === b ? b = d.ub().La() : Qc(b, d.ub()))
            }
            null === b && (b = new M(0, 0, 0, 0));
            return b
        }, update: function(a) {
            if (this.ja.sa(this.ia, this.rb) || a)
                rd(this), this.ka()
        }, og: function(a) {
            a ? (this.log("Setting a custom background function."), this.uc = a) : this.log("Clearing custom background function.")
        }, ka: function(a) {
            this.Ef = a;
            if (!this.Gf) {
                this.Gf = !0;
                var b = this;
                this.requestAnimationFrame.call(window, function() {
                    b.Gf = !1;
                    var a = Df(b), d = a.x, e = a.y, f = a.width, g =
                            a.height;
                    b.ia.setTransform(1, 0, 0, 1, 0, 0);
                    b.zd ? (b.ia.fillStyle = "#808080", b.ia.fillRect(0, 0, b.canvas.width, b.canvas.height)) : b.ia.clearRect(0, 0, b.canvas.width, b.canvas.height);
                    b.ia.translate(b.Ka, b.Ia);
                    b.ia.scale(b.scale, b.scale);
                    a = new E(b.Ka, b.Ia);
                    a = a.multiply(new O(b.scale, b.scale));
                    b.ia.Kc = a;
                    b.zd ? (d = b.ia, e = Ke(b.ja), d.beginPath(), d.fillStyle = "#ffffff", d.shadowOffsetX = 3 / b.scale, d.shadowOffsetY = 3 / b.scale, d.shadowBlur = 5 / b.scale, d.shadowColor = "rgba(0,0,0,1.0)", d.rect(0, 0, e.width, e.height), d.fill(), d.shadowColor =
                            "rgba(0,0,0,0.0)", d.shadowBlur = 0, d.shadowOffsetX = 0, d.shadowOffsetY = 0, b.uc && b.uc(d, 0, 0, e.width, e.height)) : b.uc ? (b.ia.save(), b.uc(b.ia, d, e, f, g), b.ia.restore()) : Ef(b, b.ia, d, e, Math.max(f, f - d), Math.max(g, g - d));
                    d = Wd(b);
                    e = b.da.options.symmetry;
                    if (1 < e) {
                        f = 2 * Math.PI / e;
                        g = b.cb(new B(b.canvas.width / 2, b.canvas.height / 2));
                        e & 1 && (a = new Sc(f, g.x, g.y));
                        for (b.ia.save(); f < 2 * Math.PI - 1E-8; )
                            0 === (e & 1) && (a = new Tc(f, g.x, g.y)), b.ia.transform(a.m11, a.m21, a.m12, a.m22, a.xa, a.ya), b.ja.ka(b.ia), f += 2 * Math.PI / e;
                        b.ia.setTransform(1,
                                0, 0, 1, 0, 0);
                        b.ia.fillStyle = "rgba(255,255,255,0.3)";
                        b.ia.fillRect(0, 0, b.canvas.width, b.canvas.height);
                        b.ia.restore()
                    }
                    b.ja.ka(b.ia);
                    d && b.ia.restore();
                    if (0 < b.selection.length) {
                        b.ia.save();
                        a = b.ia;
                        a.lineWidth = 1 / b.scale;
                        a.strokeStyle = "#888888";
                        a.beginPath();
                        for (d = 0; d < b.selection.length; d++)
                            f = b.selection[d], e = R(f), f = new Yc(f.ec), f.transform(e), $c(f, a, [3 / b.scale, 3 / b.scale]);
                        a.stroke();
                        e = b.scale;
                        for (d = 0; d < b.Ic.length; d++)
                            f = b.Ic[d], g = b.Ve.apply(f.x, f.y), f instanceof md ? b.If && (a.beginPath(), a.strokeStyle = "#008000",
                                    a.lineWidth = 3 / e, a.moveTo(g.x, g.y), a.arc(g.x, g.y, 6 / e, 0, 1.5 * Math.PI, !1), a.stroke()) : (a.beginPath(), a.strokeStyle = "#000", a.lineWidth = 1 / e, a.rect(g.x - b.Lc / e, g.y - b.Lc / e, b.Lc / e * 2, b.Lc / e * 2), a.stroke())
                    }
                    b.Fa && b.Fa.Ff(b.ia, 1 / b.scale);
                    b.Nd && b.da.get("showHints") && (b.ia.save(), b.ia.font = 10 / b.scale + "px Arial", b.ia.fillStyle = "#000000", b.ia.textBaseline = "top", b.ia.fillText(b.Nd, 0, 0), b.ia.restore());
                    a = b.ia;
                    b.Ca.sb && (d = b.Ca.x, e = b.Ca.y, a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.beginPath(), b.Ca.wf ? (a.moveTo(d - 3, e - 10),
                            a.lineTo(d + 3, e - 10), a.moveTo(d - 3, e + 10), a.lineTo(d + 3, e + 10), a.moveTo(d, e - 10), a.lineTo(d, e + 10)) : (a.moveTo(d, e - 3), a.lineTo(d, e - 15), a.moveTo(d, e + 3), a.lineTo(d, e + 15), a.moveTo(d - 3, e), a.lineTo(d - 15, e), a.moveTo(d + 3, e), a.lineTo(d + 15, e)), b.Ca.Va && b.ia.arc(d, e, 8, 0, 2 * Math.PI, !1), a.lineWidth = 2, a.strokeStyle = "#000000", a.stroke(), a.restore());
                    b.pa.ah && b.pa.ah(b.ia);
                    b.Ef && b.Ef(b.ia);
                    0 < b.selection.length && b.$c && (b.ia.setTransform(1, 0, 0, 1, 0, 0), b.ia.drawImage(b.$c, b.canvas.width - b.$c.width - kd(b.Fb), 0));
                    b.ia.setTransform(1,
                            0, 0, 1, 0, 0);
                    b.ia.beginPath();
                    b.ia.font = "20px Arial";
                    f = b.ia.measureText(sf).width;
                    a = b.canvas.width / f;
                    b.ia.scale(a, a);
                    b.ia.textBaseline = "top";
                    b.ia.lineWidth = 4 / a;
                    b.ia.strokeStyle = "rgba(128, 128, 128, 0.1)";
                    b.ia[vf](sf, 0, 0)
                })
            }
        }, eb: function() {
            this.da.get("readOnly") ? this.log("readOnly mode: Ignoring undo.") : this.ja.ed() && (this.ja.eb(), this.ja.sa(this.ia, this.rb), Ff(this), rd(this), this.ka(), this.la.emit("document-changed"))
        }, Za: function() {
            this.da.get("readOnly") ? this.log("readOnly mode: Ignoring redo.") :
                    this.ja.dd() && (this.ja.Za(), this.ja.sa(this.ia, this.rb), Ff(this), rd(this), this.ka(), this.la.emit("document-changed"))
        }, copy: function(a) {
            var b = this.ld();
            if (0 !== b.length) {
                var c;
                c = this.ja;
                var d, e, f, g, h;
                d = [];
                e = 0;
                h = Ie(c, b);
                f = 0;
                for (g = h.length; f < g; f++)
                    b = h[f], e = Ne(c, b, d, e);
                c = "zwibblerclip." + JSON.stringify(d);
                !0 !== a && (gf() ? window.localStorage.setItem("clipboard", c) : hf.clipboard = c);
                this.log("Reset paste offset to 0");
                this.Cd = 0;
                return c
            }
        }, duplicate: function() {
            var a = Y(this);
            0 < a.length && this.va([new ze(a, 10)])
        },
        Qe: function(a) {
            var b = [];
            a || (a = gf() ? window.localStorage.getItem("clipboard") : hf.clipboard);
            a = Me(this.ja, a, b);
            var c = this.da.get("pasteOffset");
            0 !== c && (this.Cd += c, this.log("Using paste offset %s", this.Cd), c = new E(this.Cd, this.Cd), a.push(new Q(b, c, c.inverse())));
            this.va(a);
            this.update()
        }, yd: function(a, b, c) {
            this.log("Set document size %s,%s", a, b);
            null === a && (a = void 0);
            null === b && (b = void 0);
            c ? c.push(new Fe({width: a, height: b})) : (this.ja.setProperty("width", a), this.ja.setProperty("height", b), G(this), this.zoom(this.Tb),
                    this.la.emit("document-changed"))
        }, ad: function(a) {
            var b, c, d, e, f;
            d = new Xd;
            e = new B(-50, -50);
            f = new B(50, -50);
            c = new B(50, 50);
            b = new B(-50, 50);
            d.moveTo(e.x, e.y);
            d.lineTo(f.x, f.y);
            d.lineTo(c.x, c.y);
            d.lineTo(b.x, b.y);
            d.lineTo(e.x, e.y);
            d.close();
            a = {commands: d.Nb(), fillStyle: this.Xb, strokeStyle: this.Yb, seed: Math.round(65535 * Math.random()), lineWidth: this.wa.lineWidth, sloppiness: this.wa.sloppiness, roundRadius: a, layer: this.Ja, wrap: this.da.get("multilineText"), fontSize: this.da.get("defaultFontSize")};
            this.log("Create an item on layer %s",
                    this.Ja);
            this.ra.emit("tool-changed", "rectangle");
            C(this, new sd(this, "PathNode", a, 100, 100, "rectangle"))
        }, vg: function(a, b) {
            var c;
            c = new Xd;
            for (var d = 0; d <= a; d++) {
                var e = 50 * Math.sin(b), f = 50 * -Math.cos(b);
                0 === d ? c.moveTo(e, f) : c.lineTo(e, f);
                b += 2 * Math.PI / a
            }
            c.close();
            c = {commands: c.Nb(), fillStyle: this.Xb, strokeStyle: this.Yb, seed: Math.round(65535 * Math.random()), lineWidth: this.wa.lineWidth, sloppiness: this.wa.sloppiness, layer: this.Ja, wrap: this.da.get("multilineText"), fontSize: this.da.get("defaultFontSize")};
            this.log("Create an item on layer %s",
                    this.Ja);
            this.ra.emit("tool-changed", "rectangle");
            C(this, new sd(this, "PathNode", c, 100, 100, "circle"))
        }, le: function() {
            var a = new B(0, 0), b = new Xd;
            b.moveTo(a.x, a.y - 50);
            pe(b, a.x + 50, a.y - 50, a.x + 50, a.y);
            pe(b, a.x + 50, a.y + 50, a.x, a.y + 50);
            pe(b, a.x - 50, a.y + 50, a.x - 50, a.y);
            pe(b, a.x - 50, a.y - 50, a.x, a.y - 50);
            b.close();
            a = {commands: b.Nb(), fillStyle: this.Xb, strokeStyle: this.Yb, seed: Math.round(65535 * Math.random()), lineWidth: this.wa.lineWidth, sloppiness: this.wa.sloppiness, layer: this.Ja, wrap: this.da.get("multilineText"), fontSize: this.da.get("defaultFontSize")};
            this.ra.emit("tool-changed", "ellipse");
            C(this, new sd(this, "PathNode", a, 100, 100, "circle"))
        }, md: function() {
            return Pa(this.canvas)
        }, oc: function(a, b) {
            this.pa.oc ? (this.log("Simulating click of colour %s", a), this.pa.oc({ib: a, button: b ? 2 : 1})) : this.log("A colour is not needed for this tool.")
        }, wb: function(a) {
            this.ja.wb(a) && (this.ob(), S(this), this.ka(), this.ra.emit("set-page", a))
        }, rg: function(a) {
            this.zd = a;
            a = qf(this);
            this.Ka = -a.x;
            this.Ia = -a.y;
            G(this);
            this.ka()
        }, ff: function() {
            this.zoom(1.1 * this.scale)
        }, gf: function() {
            this.zoom(this.scale /
                    1.1)
        }};
    function Df(a) {
        return new M((0 - a.Ka) / a.scale, (0 - a.Ia) / a.scale, a.canvas.width / a.scale, a.canvas.height / a.scale)
    }
    function Gf(a, b) {
        var c, d;
        c = a.ja.Aa;
        d = a.cb(new B(100, 100));
        d = new E(d.x, d.y);
        a.va([new D("ImageNode", {url: b, layer: a.Ja}), new Q([c], d, d.inverse())]);
        return F(a)
    }
    function nf(a, b, c) {
        var d = a.da.get("nudge");
        b *= d / a.scale;
        c *= d / a.scale;
        a.log("Nudge selection by %s, %s", b, c);
        d = Y(a);
        d.length && (b = new E(b, c), a.va([new Q(d, b, b.inverse())]));
        return 0 < d.length
    }
    function G(a) {
        if (a.da.get("scrollbars")) {
            var b = qf(a), c = b.width, d = b.height, e = a.canvas.width / a.scale, f = a.canvas.height / a.scale;
            if (f >= d)
                a.Fb.Ra();
            else {
                a.Fb.show();
                var g = a.Fb, h = b.y, k = b.bottom(), l = -a.Ia / a.scale;
                g.kc = h;
                g.jc = k - h;
                g.ef = f;
                g.position = l;
                g.sa();
                g.ka()
            }
            e >= c ? a.$b.Ra() : (a.$b.show(), g = a.$b, h = b.x, b = b.right(), k = -a.Ka / a.scale, g.kc = h, g.jc = b - h, g.ef = e, g.position = k, g.sa(), g.ka());
            e >= c && f >= d || (e >= c ? hd(a.Fb, 20, a.canvas.height) : f >= d ? hd(a.$b, a.canvas.width, 20) : (hd(a.Fb, 20, a.canvas.height - 20), hd(a.$b, a.canvas.width -
                    20, 20)))
        } else
            a.Fb.Ra(), a.$b.Ra()
    }
    function qf(a) {
        a.zd ? (a = Ke(a.ja), a = new M(0, 0, a.width, a.height), a.Ac(20, 20)) : a = Le(a.ja);
        return a
    }
    function Hf(a, b) {
        a.da.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (C(a, new qe(a, "arrow", void 0, b)), a.ra.emit("tool-changed", "arrow"))
    }
    function of(a, b) {
        a.da.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (C(a, new qe(a, "curves", void 0, b)), a.ra.emit("tool-changed", "curve"))
    }
    function If(a, b) {
        a.da.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (b.lineWidth = b.lineWidth || a.Hd, b.strokeStyle = b.strokeStyle || a.Nc, C(a, new Vd(a, a.pa, b, "shapes")), a.ra.emit("tool-changed", "shapebrush"))
    }
    function Jf(a, b) {
        a.da.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (b.lineWidth = b.lineWidth || a.Hd, b.strokeStyle = b.strokeStyle || a.Nc, C(a, new Vd(a, a.pa, b, "brush")), a.ra.emit("tool-changed", "brush"))
    }
    function pf(a, b) {
        a.da.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (C(a, new qe(a, "lines", void 0, b)), a.ra.emit("tool-changed", "line"))
    }
    function rf(a) {
        a.da.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (C(a, new xd(a)), a.ra.emit("tool-changed", "text"))
    }
    function C(a, b) {
        a.pa && a.pa.nc && a.pa.nc();
        a.pa = b;
        b.Zb && b.Zb()
    }
    function F(a) {
        C(a, new gb(a));
        a.ra.emit("tool-changed", "pick")
    }
    function re(a, b) {
        b ? (a.Nd = a.language.get(b), a.la.emit("hint", a.Nd)) : (a.Nd = null, a.la.emit("hint", ""))
    }
    function Wd(a) {
        if (a.zd) {
            var b = Ke(a.ja);
            a.ia.save();
            a.ia.beginPath();
            a.ia.rect(0, 0, b.width, b.height);
            a.ia.clip()
        }
        return a.zd
    }
    function Ef(a, b, c, d, e, f) {
        a.background ? (b.fillStyle = a.ia.createPattern(a.background, "repeat"), b.fillRect(c, d, e, f)) : a.uc ? a.uc(b, c, d, e, f) : "G_vmlCanvasManager"in window && (b.fillStyle = "rgba(0, 0, 0, 0.0)", b.fillRect(c, d, e, f))
    }
    function Cf(a) {
        var b = a.da.get("snap"), c = null, d, e;
        d = a.da.get("background");
        var f = lc(d, !0);
        if ("grid" === d) {
            var c = a.da.get("gridBlocks"), b = a.da.get("gridSpacing"), g = c * b, c = La(document.body);
            c.width = g;
            c.height = g;
            d = c.getContext("2d");
            d.beginPath();
            for (e = 0; e < g; e += b)
                e % g && (d.moveTo(e + 0.5, 0), d.lineTo(e + 0.5, g));
            for (e = 0; e < g; e += b)
                e % g && (d.moveTo(0, e + 0.5), d.lineTo(g, e + 0.5));
            d.strokeStyle = a.da.get("gridColour");
            d.lineWidth = 0.5;
            d.stroke();
            d.beginPath();
            for (e = 0; e <= g; e += g)
                d.moveTo(e, 0), d.lineTo(e, g);
            for (e = 0; e <= g; e +=
                    g)
                d.moveTo(0, e + 0.5), d.lineTo(g, e + 0.5);
            d.lineWidth = 2;
            d.stroke()
        } else
            f ? (a.log("Using background colour %s", f.toString()), a.uc = function(a, b, c, d, e) {
                a.fillStyle = f.toString();
                a.fillRect(b, c, d, e)
            }) : 0 < b && "clear" !== d && (c = La(document.body), c.width = b, c.height = b, d = c.getContext("2d"), d.beginPath(), d.moveTo(0, 0), d.arc(0, 0, 3, 0, 2 * Math.PI, !1), d.moveTo(b, 0), d.arc(b, 0, 3, 0, 2 * Math.PI, !1), d.moveTo(b, b), d.arc(b, b, 3, 0, 2 * Math.PI, !1), d.moveTo(0, b), d.arc(0, b, 3, 0, 2 * Math.PI, !1), d.fillStyle = "#c0c0c0", d.fill());
        c && document.body.removeChild(c);
        a.background = c
    }
    function Y(a, b) {
        var c = [], d = a.ld();
        b || (d = Ie(a.ja, d));
        for (var e = 0; e < d.length; e++)
            a.log("Selected id=%s", d[e].id), c.push(d[e].id);
        return c
    }
    function Ff(a) {
        for (var b = 0, c = 0; c < a.selection.length; c++)
            c !== b && (a.selection[b] = a.selection[c]), a.selection[b].id in a.ja.za && (b += 1);
        a.selection.length !== b && (a.selection.length = b)
    }
    function rd(a) {
        function b(a, b, c, d, f) {
            !1 !== e.ee && e.Ic.push(new Dd(a, c, new B(b.x + d * b.width, b.y + f * b.height), new B(b.x + (1 - d) * b.width, b.y + (1 - f) * b.height)))
        }
        var c;
        a.ee = !0;
        a.ng = !0;
        if (0 !== a.selection.length) {
            a.Db = a.selection[0].ub().La();
            a.selection[0].qa("lockSize") && (a.ee = !1);
            a.selection[0].qa("lockRotate") && (a.ng = !1);
            for (c = 1; c < a.selection.length; c++)
                Qc(a.Db, a.selection[c].ub()), a.selection[c].qa("lockSize") && (a.ee = !1), a.selection[c].qa("lockRotate") && (a.ng = !1);
            a.nh = 1 === a.selection.length ? a.selection[0].Ng() :
                    new P(a.Db);
            c = a.selection[0].qa("rotateHandle");
            var d;
            1 === a.selection.length && c ? (d = R(a.selection[0]), d = d.apply(c[0], c[1]), a.kg = d.x, a.lg = d.y) : (a.kg = a.Db.x + a.Db.width - 30 / a.scale, a.lg = a.Db.y);
            var e = a;
            a.Ic.length = 0;
            var f, g, h = 0 < a.da.get("snap");
            a.log("snap=%s", a.da.get("snap"));
            if (1 < a.selection.length)
                d = new N, f = null, g = a.Db, a.da.get("allowResize") && (b(f, g, d, 0.5, 0), b(f, g, d, 1, 0.5), b(f, g, d, 0.5, 1), b(f, g, d, 0, 0.5), b(f, g, d, 0, 0), b(f, g, d, 1, 0), b(f, g, d, 1, 1), b(f, g, d, 0, 1)), e.Ic.push(new md(f, d, new B(g.x + 0.5 * g.width,
                        g.y - 30 / a.scale), new B(g.x + 0.5 * g.width, g.y + 0.5 * g.height), h));
            else
                for (c = 0; c < a.selection.length; c++)
                    f = a.selection[c], g = f.ec, d = R(f), a.da.get("allowResize") && (b(f, g, d, 0.5, 0), b(f, g, d, 1, 0.5), b(f, g, d, 0.5, 1), b(f, g, d, 0, 0.5), b(f, g, d, 0, 0), b(f, g, d, 1, 0), b(f, g, d, 1, 1), b(f, g, d, 0, 1)), e.Ic.push(new md(f, R(f), new B(g.x + 0.5 * g.width, g.y - 30 / a.scale), new B(g.x + 0.5 * g.width, g.y + 0.5 * g.height), h))
        }
    }
    function S(a) {
        rd(a);
        if (a.nb) {
            var b = a.nb, c = a.selection;
            b.action = null;
            b.Te.length = 0;
            b.Ue = {};
            b.za = c.concat();
            for (var d = !1, e = 0; e < c.length; e++) {
                var f = c[e];
                Kd(f) && (d = !0);
                var g = f.ba, h;
                for (h in g)
                    if (g.hasOwnProperty(h)) {
                        var k = b, l = h, m = f, q = void 0, q = k.da;
                        l in k.Ue ? (q = k.Ue[l], q.value !== m.qa(l) && (q.value = null)) : "locked" === l || "points" === l || !0 === m.qa("closed") && ("arrowSize" === l || "arrowStyle" === l || "doubleArrow" === l) || !1 === m.qa("closed") && ("fontName" === l || "fontSize" === l || "textFillStyle" === l || "text" === l || "fillStyle" ===
                                l) || "ImageNode" === m.type() && ("fillStyle" === l || "strokeStyle" === l || "lineWidth" === l || "shadow" === l) || "BrushNode" === m.type() && "fillStyle" === l || "MathNode" === m.type() && ("fillStyle" === l || "strokeStyle" === l || "lineWidth" === l) || "TextNode" === m.type() && "fillStyle" === l || "lockSize" === l || "lockRotate" === l || "rotateAround" === l || "layer" === l || 0 === l.indexOf("cell-") || "fontName" === l && !q.get("showFontNameProperty") || "fontSize" === l && !q.get("showFontSizeProperty") || "smoothness" === l && !q.get("showSmoothnessProperty") || "sloppiness" ===
                                l && !q.get("showSloppinessProperty") || (q = {jg: Kf(k, m, l), value: m.qa(l)}, q.jg.display && 0 === q.jg.display.indexOf("Display-") || (k.Te.push(q), k.Ue[l] = q))
                    }
            }
            Lf(b);
            if (b.da.get("showKeyboardHelp"))
                for (f = d, d = Ga(p("<div>"), "keydiv"), d.$("font-size", "8pt"), d.$("color", "#909090"), d.$("font-weight", "normal"), p(b.aa).append(d), g = b.language.Qc(), d.append("<h1>" + g("keyboard") + "</h1>"), e = [{key:b.da.get("keyCurveTool"), description:g("draw-curves")}, {key:b.da.get("keyLineTool"), description:g("draw-lines")}], 0 < c.length &&
                        e.push({key:b.da.get("keyDelete"), description:g("delete-selection")}, {key:b.da.get("keyDuplicate"), description:g("duplicate-selection")}, {key:b.da.get("keyMoveUp"), description:g("move-selection-closer")}, {key:b.da.get("keyMoveDown"), description:g("move-selection-away")}), 1 < c.length && e.push({key:b.da.get("keyGroup"), description:g("group-selection")}), f && e.push({key:b.da.get("keyUngroup"), description:g("break-apart-group")}), e.push({key:b.da.get("keyZoomIn"), description:g("zoom-in")}), e.push({key:b.da.get("keyZoomOut"),
                        description:g("zoom-out")}), e.push({key:g("arrow-keys"), description:g("move-while-zoomed")}), b = 0; b < e.length; b++)
                    c = Ga(p("<a>").text(e[b].key), "key"), c.$("background", "#d0d0d0"), c.$("border-left", "1px solid #808080"), c.$("border-right", "1px solid #e0e0e0"), c.$("border-top", "1px solid #808080"), c.$("border-bottom", "1px solid #e0e0e0"), c.$("padding-left", "0.5em"), c.$("padding-right", "0.5em"), c.$("margin-right", "1em"), c.$("color", "#4fa0d3"), c.$("font-weight", "bold"), c = p("<p>").append(c), c[0].appendChild(document.createTextNode(e[b].description)),
                            d.append(c)
        }
        a.la.emit("selected-nodes")
    }
    function lf(a, b) {
        a.Fa = null;
        if (b.Cb !== a.Cb && Md(b) === a.Ja) {
            a.selection.push(b);
            b.Cb = a.Cb;
            if (Kd(b)) {
                for (var c = b.parent, d = 0; d < c.children.length; d++)
                    lf(a, c.children[d]);
                lf(a, c)
            }
            b.children && 0 < b.children.length && lf(a, b.children[0])
        }
    }
    function Bf(a) {
        var b = Y(a);
        b.length && a.va([new ue(b)])
    }
    function Cd(a) {
        a.Ca.sb = !0;
        a.Ca.wf = !1;
        if (0 < a.selection.length) {
            a.log("showKeyboardCursorAndStartMoving()");
            a.Ca.Va = !0;
            var b = Oc(a.Db);
            a.Ca.x = b.x;
            a.Ca.y = b.y;
            F(a);
            C(a, new ld(a, new Ed(a.selection[0], R(a.selection[0])), !1, b.x - 4, b.y - 4))
        }
        a.ka()
    }
    function Af(a) {
        var b = mf(a), c = new Date;
        p(a.canvas).bind("touchstart", function(b) {
            if (a.pa.fb) {
                if (300 < (new Date).getTime() - c.getTime())
                    a.pa.fb(b.vb);
                else if (a.pa.pd) {
                    var d = kf(a, b.vb.touches[0]);
                    a.pa.pd(d.x, d.y, b.vb)
                }
                b.stopPropagation();
                b.preventDefault();
                c = new Date
            }
        });
        p(a.canvas).bind("touchmove", function(b) {
            a.pa.fb && (a.pa.fb(b.vb), b.stopPropagation(), b.preventDefault())
        });
        p(a.canvas).bind("touchend", function(b) {
            a.pa.fb && (a.pa.fb(b.vb), b.stopPropagation(), b.preventDefault())
        });
        p(a.canvas).bind("gesturestart",
                function(b) {
                    a.log("GestureStart");
                    a.pa.qd && (a.pa.qd(b.vb), b.stopPropagation(), b.preventDefault())
                });
        p(a.canvas).bind("gesturechange", function(b) {
            a.log("GestureChange");
            a.pa.qd && (a.pa.qd(b.vb), b.stopPropagation(), b.preventDefault())
        });
        p(a.canvas).bind("gestureend", function(b) {
            a.log("GestureEnd");
            a.pa.qd && (a.pa.qd(b.vb), b.stopPropagation(), b.preventDefault())
        });
        p(a.canvas).bind("pointerdown", function(c) {
            if (a.pa.Ta) {
                var d = p(a.canvas).offset();
                a.pa.Ta((c.pageX - d.left - b - a.Ka) / a.scale, (c.pageY - d.top - b -
                        a.Ia) / a.scale, c.vb);
                c.stopPropagation();
                c.preventDefault()
            }
        });
        p(a.canvas).bind("pointermove", function(c) {
            if (a.pa.Xa) {
                var d = p(a.canvas).offset();
                a.pa.Xa((c.pageX - d.left - b - a.Ka) / a.scale, (c.pageY - d.top - b - a.Ia) / a.scale, c.vb);
                c.stopPropagation();
                c.preventDefault()
            }
        });
        p(a.canvas).bind("pointerup", function(c) {
            if (a.pa.Ya) {
                var d = p(a.canvas).offset();
                a.pa.Ya((c.pageX - d.left - b - a.Ka) / a.scale, (c.pageY - d.top - b - a.Ia) / a.scale, c.vb);
                c.stopPropagation();
                c.preventDefault()
            }
        });
        Ba(p(a.canvas), function(c) {
            if (a.pa.Xa) {
                var d =
                        p(a.canvas).offset();
                a.pa.Xa((c.pageX - d.left - b - a.Ka) / a.scale, (c.pageY - d.top - b - a.Ia) / a.scale, c)
            }
            c.preventDefault()
        });
        Da(p(a.canvas), function(c) {
            var d = p(a.canvas).offset();
            a.pa.Ta && a.pa.Ta((c.pageX - d.left - b - a.Ka) / a.scale, (c.pageY - d.top - b - a.Ia) / a.scale, c);
            c.preventDefault()
        });
        Ca(p(a.canvas), function(c) {
            var d = p(a.canvas).offset();
            a.pa.Ya && a.pa.Ya((c.pageX - d.left - b - a.Ka) / a.scale, (c.pageY - d.top - b - a.Ia) / a.scale, c);
            c.stopPropagation();
            c.preventDefault()
        });
        p(a.canvas).click(function(c) {
            var d = p(a.canvas).offset();
            a.pa.ac && a.pa.ac((c.pageX - d.left - b - a.Ka) / a.scale, (c.pageY - d.top - b - a.Ia) / a.scale);
            c.stopPropagation();
            c.preventDefault()
        });
        Aa(p(a.canvas), function(c) {
            var d = p(a.canvas).offset();
            if (a.pa.pd || a.pa.ac) {
                var g = (c.pageX - d.left - b - a.Ka) / a.scale, d = (c.pageY - d.top - b - a.Ia) / a.scale;
                Oa() && a.pa.ac && (a.log("Insert false mouse click for IE"), a.pa.ac(g, d));
                a.pa.pd && a.pa.pd(g, d, c)
            }
            c.stopPropagation();
            c.preventDefault()
        });
        p(a.canvas).bind("mouseenter", function(a) {
            a.stopPropagation();
            a.preventDefault()
        });
        p(a.canvas).bind("mouseleave",
                function(a) {
                    a.stopPropagation();
                    a.preventDefault()
                });
        p(a.canvas).bind("mouseover", function(a) {
            a.stopPropagation();
            a.preventDefault()
        });
        p(a.canvas).bind("mouseout", function(a) {
            a.stopPropagation();
            a.preventDefault()
        });
        !window.parent && a.da.get("setFocus") && p(a.canvas).focus();
        a.Gb.bind("colour", function(b) {
            a.pa.oc && a.pa.oc(b)
        });
        var d = "mousewheel";
        "onwheel"in document.createElement("div") && (d = "wheel");
        a.log("Binding to '%s' for mouse wheel", d);
        p(a.canvas).bind(d, function(b) {
            if ("block" === a.Fb.canvas.style.display) {
                var c =
                        qf(a), d = b.vb.wheelDelta || -40 * b.vb.deltaY, h = d / 120 * 32;
                a.Ia = -120 >= d ? Math.max(a.Ia + h, -(c.bottom() * a.scale - a.canvas.height)) : Math.min(a.Ia + h, -c.y * a.scale);
                G(a);
                a.ka();
                b.stopPropagation();
                b.preventDefault()
            }
        })
    }
    function kf(a, b) {
        return z(a, b.pageX, b.pageY)
    }
    function Bd(a, b, c) {
        var d = mf(a), e = p(a.canvas).offset();
        return new B(b * a.scale + a.Ka + e.left + d, c * a.scale + a.Ia + e.top + d)
    }
    function z(a, b, c) {
        var d = mf(a), e = p(a.canvas).offset();
        return a.cb(new B((b - e.left - d - a.Ka) / a.scale, (c - e.top - d - a.Ia) / a.scale))
    }
    function Mf(a, b, c) {
        a.wa[b] = c;
        "fillStyle" === b ? a.Xb = c : "strokeStyle" === b && (a.Yb = c)
    }
    function mf(a) {
        return parseInt(p(a.canvas).$("border-left-width"), 10) || 0
    }
    function Nf(a, b) {
        a.ra = b;
        F(a)
    }
    ;
    function Of(a) {
        Pf(this, a)
    }
    function Pf(a, b) {
        a.aa = b || p("<div>");
        a.aa.$("position", "absolute");
        a.aa.$("margin", "0px");
        a.aa.$("padding", "0px");
        p("body").append(a.aa)
    }
    n = Of.prototype;
    n.width = function(a) {
        function b(a) {
            a = parseInt(c.aa.$(a), 10);
            return isNaN(a) ? 0 : a
        }
        var c = this;
        if (void 0 === a)
            return this.aa.outerWidth();
        a -= b("border-left-width");
        a -= b("border-right-width");
        a -= b("padding-right");
        a -= b("padding-left");
        a -= b("margin-left");
        a -= b("margin-right");
        a = Math.max(0, a);
        this.aa.$("width", "" + a + "px")
    };
    n.height = function(a) {
        function b(a) {
            a = parseInt(c.aa.$(a), 10);
            return isNaN(a) ? 0 : a
        }
        var c = this;
        if (void 0 === a)
            return this.aa.outerHeight();
        a -= b("border-top-width");
        a -= b("border-bottom-width");
        a -= b("padding-top");
        a -= b("padding-bottom");
        a -= b("margin-top");
        a -= b("margin-bottom");
        this.me = a = Math.max(0, a);
        this.aa.$("height", "" + this.me + "px")
    };
    n.moveTo = function(a, b) {
        this.aa.$("left", "" + a + "px");
        this.aa.$("top", "" + b + "px")
    };
    n.show = function() {
        this.aa.show()
    };
    n.Ra = function() {
        this.aa.Ra()
    };
    function Qf(a) {
        Of.apply(this, arguments);
        var b = this;
        this.aa.$("background", "black");
        this.aa.$("font-family", '"Lucida Console","Dejavu Sans Mono",Monospace,"Courier New"');
        this.aa.$("font-size", "10px");
        this.aa.$("line-height", "12px");
        this.aa.$("overflow", "scroll");
        this.aa.$("cursor", "default");
        this.ag = 0;
        this.Wf = {};
        this.sb = !1;
        pa(function(a, d) {
            return Rf(b, a, d)
        });
        this.timeout = null;
        this.lb = [];
        Rf(this, "DEBUG", "Debug window starting")
    }
    Qf.prototype = {zb: "#ffffff #008800 #008888 #880000 #880088 #884400 #888888 #444444 #0000ff #00ff00 #00ffff #ff0000 #ff00ff #ffff00".split(" "), show: function() {
            Of.prototype.show.call(this);
            this.sb = !0;
            Sf(this);
            this.aa[0].scrollTop = this.aa[0].scrollHeight
        }, Ra: function() {
            this.sb = !1;
            Of.prototype.Ra.call(this)
        }};
    function Sf(a) {
        var b, c, d, e, f, g;
        g = a.lb;
        e = 0;
        for (f = g.length; e < f; e++) {
            c = g[e];
            d = c.key;
            c = c.qi;
            b = a;
            var h = d;
            h in b.Wf || (b.Wf[h] = b.zb[b.ag], b.ag = (b.ag + 1) % b.zb.length);
            b = b.Wf[h];
            b = p("<div>").$("color", b);
            b.$("border-bottom", "1px solid #222");
            b.text("" + d + ": " + c);
            a.aa.append(b)
        }
        a.aa[0].scrollTop = a.aa[0].scrollHeight;
        a.timeout = null;
        a.lb.length = 0
    }
    function Rf(a, b, c) {
        var d, e, f;
        f = c.split("\n");
        d = 0;
        for (e = f.length; d < e; d++)
            c = f[d], a.lb.push({key: b, qi: c});
        a.sb && null === a.timeout && (a.timeout = setTimeout(function() {
            return Sf(a)
        }, 100))
    }
    Ac(Of.prototype, Qf.prototype);
    function Tf(a) {
        var b = p("<div>");
        Pf(this, b);
        a.append(this.aa);
        this.Ma = {};
        this.maxWidth = 128;
        this.maxHeight = 0;
        this.Zi = 5;
        this.aa.$("overflow-x", "auto");
        this.aa.$("overflow-y", "auto");
        this.Yf = "grid";
        this.bg = 0;
        this.De = 1;
        this.cells = [];
        this.ug = null
    }
    Tf.prototype = {on: function(a, b) {
            this.Ma[a] = b
        }, log: x("ListView"), sa: function() {
            var a, b, c, d, e;
            b = null;
            e = this.cells;
            c = 0;
            for (d = e.length; c < d; c++) {
                a = e[c];
                if (!a.Ug) {
                    if (null === b) {
                        b = this.aa;
                        var f = a.Ga, f = wa(f);
                        0 < b.length && b[0].insertBefore(f[0], b[0].firstChild)
                    } else
                        b = b.Ga, f = a.Ga, f = wa(f), 0 < b.length && 0 < f.length && b[0].parentNode.insertBefore(f[0], b[0]);
                    a.Ug = !0
                }
                b = a
            }
        }, clear: function() {
            this.aa.empty();
            this.cells.length = 0;
            this.De += 1
        }};
    function Uf(a, b, c) {
        var d, e;
        e = a.De;
        d = {Ga: null, index: a.bg, Ug: !1};
        a.bg += 1;
        Gb(b, function(b) {
            var g, h;
            e === a.De && (h = b.width, g = b.height, a.maxWidth && h > a.maxWidth && (b.width = a.maxWidth, b.height = g / h * a.maxWidth), a.maxHeight && g > a.maxHeight && (b.width = a.maxHeight / (g / h), b.height = a.maxHeight), b = p(b), b.$("margin", "" + a.Zi + "px"), b.$("border-width", "3"), b.$("border-color", "white"), b.$("border-style", "solid"), b.$("image-rendering", "optimizeQuality"), za(b, function() {
                a.log("Mouseenter");
                return b.$("border-color", "#888888")
            }),
                    ya(b, function() {
                        return b.$("border-color", "white")
                    }), b.click(function() {
                if ("click"in a.Ma)
                    return a.Ma.click(c)
            }), d.Ga = b, a.cells.push(d), a.cells.sort(function(a, b) {
                return a.index - b.index
            }), a.ug || (a.ug = setTimeout(function() {
                a.ug = null;
                a.sa()
            }, 500)))
        })
    }
    function Vf(a) {
        a.Yf = "horizontal";
        "grid" !== a.Yf && a.aa.$("white-space", "nowrap")
    }
    Tf.prototype = p.extend({}, Of.prototype, Tf.prototype);
    function Wf(a, b, c) {
        this.Ha(a, b, c)
    }
    Wf.prototype.log = x("Menubar");
    Wf.prototype.Ha = function(a, b, c) {
        Pf(this, p("<div>"));
        this.Gi = c;
        this.aa.$("position", "absolute");
        this.aa.$("background", "#ccc");
        this.aa.$("font-family", "tahoma,helvetica,arial,sans");
        this.aa.$("font-size", "12px");
        this.aa.$("padding", "0.5em");
        this.aa.$("cursor", "default");
        this.aa.$("MozUserSelect", "none");
        this.aa[0].onselectstart = function() {
            return!1
        };
        c && (this.aa.$("background", "white"), this.aa.$("border-left", "1px solid #ccc"), this.aa.$("border-bottom", "1px solid #888"), this.aa.$("border-right", "1px solid #888"),
                this.aa.$("box-shadow", "3px 3px 5px #ccc"));
        this.Td = a;
        this.la = b;
        for (b = 0; b < a.items.length; b++)
            Xf(this, a.items[b]);
        this.hc = this.bc = null;
        this.aa.$("z-index", 3001)
    };
    function Xf(a, b) {
        var c;
        a.Gi ? ("separator" === b.type ? c = p("<hr>") : (c = p("<div>"), c.$("padding-left", "0.5em"), c.$("padding-right", "0.5em"), c.text(b.display), xa(c, function() {
            c.$("background", "#ff9900")
        }, function() {
            c.$("background", "transparent")
        }), Ca(c, function() {
            a.se && a.se();
            a.la.emit(b.event, b.Uh)
        })), a.aa.append(c)) : "separator" !== b.type && (6 < b.display.length && "image:" === b.display.substr(0, 6) ? (c = p("<img>"), c.Sa("src", b.display.substr(6)), c.load(function() {
            a.la.emit("resize", {})
        }), c.$("border", "1px solid #888"),
                c.$("box-shadow", "3px 3px 3px #000"), c.$("border-radius", "5px"), c.$("vertical-align", "middle"), c.$("margin-left", "0.5em"), c.$("margin-right", "0.5em"), xa(c, function() {
            c.$("background", "#ff9900");
            c.$("color", "white");
            a.hc && Ja(c)
        }, function() {
            c.$("background", "transparent");
            c.$("color", "black")
        }), a.aa.append(c)) : (c = p("<div>"), c.$("display", "inline"), c.$("padding-left", "0.5em"), c.$("padding-right", "0.5em"), c.$("padding-top", "0.5em"), c.$("padding-bottom", "0.5em"), c.$("MozUserSelect", "none"), c[0].onselectstart =
                function() {
                    return!1
                }, c.$("vertical-align", "middle"), c.text(b.display), xa(c, function() {
            c.$("background", "#ff9900");
            if (a.hc && a.hc !== b.Td) {
                var d = c.offset();
                a.log("highlight a menu item.");
                a.sh(b, d.left, d.top + c.outerHeight())
            }
        }, function() {
            c.$("background", "transparent")
        })), "menu" === b.type ? Da(c, function() {
            var d = c.offset();
            a.sh(b, d.left, d.top + c.outerHeight())
        }) : c.click(function() {
            a.la.emit(b.event, {})
        }), a.aa.append(c))
    }
    Wf.prototype.click = function(a) {
        this.se = a
    };
    function Yf(a) {
        a.hc && (a.hc.aa.remove(), a.hc = null);
        a.bc && (a.bc.Ra(), a.bc = null)
    }
    Wf.prototype.sh = function(a, b, c) {
        if (this.hc && this.hc.Td === a.Td)
            Yf(this);
        else {
            Yf(this);
            var d = p(this.aa).offset().top + this.height(), d = new aa("transparent", 0, d), e = this, f = function() {
                Yf(e)
            };
            d.show(f);
            a = new Wf(a.Td, this.la, !0);
            a.click(f);
            a.moveTo(b, c);
            this.hc = a;
            this.bc = d
        }
    };
    Ac(Of.prototype, Wf.prototype);
    function Zf(a, b) {
        this.da = a;
        this.language = b;
        Pf(this, p("<div>"));
        Ga(this.aa, "PropertyPanel");
        this.Te = [];
        this.Ue = {};
        this.view = null;
        this.za = [];
        (this.Eg = vc() && "wheel" === a.get("colourPicker")) || this.log("ColourWheel not supported in this canvas.");
        this.action = null;
        this.aa.$("background", "#ffffff");
        this.aa.$("border", "none");
        this.aa.$("font-family", "tahoma,arial,helvetica,sans");
        this.aa.$("color", "#4fa0d3");
        this.aa.$("font-weight", "bold");
        this.aa.$("font-size", "10pt");
        this.aa.$("overflow-y", "scroll");
        var c =
                this;
        this.aa.click(function() {
            c.log("PropertyPanel clicked.");
            c.emit("click")
        });
        this.onclick = null
    }
    Zf.prototype = {log: x("PROP"), on: function(a, b) {
            if ("click" === a)
                this.onclick = b;
            else
                throw"This object only handles the click event";
        }, emit: function() {
            if (this.onclick)
                this.onclick()
        }, apply: function(a, b) {
            this.view.setProperty(a, b)
        }};
    function $f(a, b, c, d) {
        null !== a.action && a.action.name === d.name || a.view.setProperty(d.name, b);
        c.value = b
    }
    function ag(a, b) {
        if (!b.Rg)
            if (a.Eg) {
                var c = document.createElement("div"), d = new sc(c, 120);
                uc(d, b.input.value);
                d.fg = function(c) {
                    $f(a, c, b.input, b.input.Mb)
                };
                b.yj = d;
                b.Rg = !0;
                b.parentNode.appendChild(c)
            } else {
                c = new oc(p(b.parentNode), 20, !1, !0);
                c.aa.$("position", "static");
                qc(c, a.da.get("colourPalette"));
                b.yj = c;
                b.Rg = !0;
                b.parentNode.appendChild(c.aa[0]);
                var e;
                c.on("colour", function(c) {
                    $f(a, c.ib, b.input, b.input.Mb);
                    c = lc(c.ib).ha[3];
                    e.value = Math.round(100 * c)
                });
                e = Kc();
                e.min = 0;
                e.max = 100;
                var f = lc(b.input.value);
                e.rh(Math.round(100 *
                        f.ha[3]));
                e.onchange = function() {
                    f = lc(b.input.value);
                    f.ha[3] = e.value / 100;
                    $f(a, f.toString(), b.input, b.input.Mb)
                };
                b.parentNode.appendChild(document.createElement("br"));
                b.parentNode.appendChild(e)
            }
    }
    function Lf(a) {
        function b() {
            ag(a, this)
        }
        function c() {
            var b = this;
            "timer"in b && clearTimeout(b.timer);
            b.timer = setTimeout(function() {
                a.apply(b.Mb.name, b.value)
            }, 250)
        }
        function d() {
            var b = a.view, c = this.Mb.name;
            b.log("Someone clicked a button for %s", c);
            "mathml" === c && b.la.emit("math.edit", Y(b)[0])
        }
        function e(b) {
            13 === b.keyCode && a.apply(this.Mb.name, this.value)
        }
        function f() {
            a.apply(this.Mb.name, this.Mb.ha[parseInt(this.value, 10)].value)
        }
        p(a.aa).empty();
        var g, h;
        for (g = 0; g < a.Te.length; g++) {
            var k = a.Te[g], l = k.jg;
            if ("none" !== l.type) {
                var m = document.createElement("div");
                h = document.createElement("span");
                h.appendChild(document.createTextNode(l.display));
                m.appendChild(h);
                m.appendChild(document.createElement("br"));
                if ("select" === l.type) {
                    var q = document.createElement("select");
                    for (h = 0; h < l.ha.length; h++) {
                        var r = l.ha[h], s = document.createElement("option");
                        s.appendChild(document.createTextNode(r.name));
                        s.setAttribute("value", h);
                        r.value === k.value && s.setAttribute("selected", "");
                        q.appendChild(s)
                    }
                    q.Mb = l;
                    q.onchange = f;
                    m.appendChild(q)
                } else if ("colour" ===
                        l.type)
                    h = document.createElement("input"), h.setAttribute("type", "text"), h.value = k.value, h.Mb = l, Ea(p(h), e), m.appendChild(h), k = document.createElement("img"), k.src = a.da.Pa + "wd-wheel.png", k.style.verticalAlign = "middle", k.input = h, m.appendChild(k), p(k).click(b);
                else if ("text" === l.type)
                    h = document.createElement("input"), h.setAttribute("type", "text"), h.value = k.value, h.Mb = l, Ea(p(h), e), m.appendChild(h);
                else if ("textarea" === l.type)
                    h = document.createElement("textarea"), h.setAttribute("rows", "3"), h.setAttribute("cols",
                            "20"), h.value = k.value, h.Mb = l, Ea(p(h), c), m.appendChild(h);
                else if ("button" === l.type)
                    h = document.createElement("input"), h.setAttribute("type", "button"), h.value = "Edit", h.Mb = l, p(h).click(d), m.appendChild(h);
                else
                    throw"Error: No such property";
                a.aa.append(m)
            }
        }
    }
    function Kf(a, b, c) {
        var d = a.language.Qc();
        if ("strokeStyle" === c)
            return{name: c, type: "colour", display: d("outline-colour")};
        if ("fillStyle" === c)
            return{name: c, type: "colour", display: d("fill-colour")};
        if ("lineWidth" === c)
            return a = [{name: d("thickness-pencil"), value: 1}, {name: d("thickness-pen"), value: 2}, {name: d("thickness-marker"), value: 4}, {name: d("thickness-brush"), value: 10}], !0 !== b.qa("closed") && "TextNode" !== b.type() || a.unshift({name: d("none"), value: 0}), {name: c, display: d("outline-thickness"), type: "select", ha: a};
        if ("sloppiness" === c)
            return{name: "sloppiness", display: d("sloppiness"), type: "select", ha: [{name: d("sloppiness-draftsman"), value: 0}, {name: d("sloppiness-artist"), value: 0.25}, {name: d("sloppiness-cartoonist"), value: 0.5}, {name: d("sloppiness-child"), value: 1}, {name: d("sloppiness-drunk"), value: 2}]};
        if ("smoothness" === c)
            return{name: "smoothness", display: d("smoothness"), type: "select", ha: [{name: d("smoothness-sharpest"), value: 0}, {name: d("smoothness-sharper"), value: 0.1}, {name: d("smoothness-sharp"), value: 0.2}, {name: d("smoothness-smooth"),
                        value: 0.3}, {name: d("smoothness-smoothest"), value: 0.5}]};
        if ("shadow" === c)
            return{name: "shadow", display: d("shadow"), type: "select", ha: [{name: d("yes"), value: !0}, {name: d("no"), value: !1}]};
        if ("dashes" === c)
            return{name: "dashes", display: d("line-style"), type: "select", ha: [{name: d("line-style-solid"), value: ""}, {name: d("line-style-short-dashes"), value: "5,5"}, {name: d("line-style-long-dashes"), value: "10,5"}]};
        if ("matrix" === c || "inverse" === c || "closed" === c || "commands" === c || "seed" === c)
            return{name: c, type: "none"};
        if ("text" ===
                c)
            return{name: "text", display: d("text"), type: "textarea"};
        if ("textFillStyle" === c)
            return{name: "textFillStyle", display: d("text-colour"), type: "colour"};
        if ("fontSize" === c)
            return{name: "fontSize", display: d("font-size"), type: "select", ha: [{name: "10", value: 10}, {name: "12", value: 12}, {name: "15", value: 15}, {name: "20", value: 20}, {name: "30", value: 30}, {name: "40", value: 40}, {name: "50", value: 50}, {name: "60", value: 60}, {name: "100", value: 100}]};
        if ("fontName" === c) {
            b = [];
            c = a.da.options.fonts;
            for (a = 0; a < c.length; a++)
                b.push({name: c[a],
                    value: c[a]});
            return{name: "fontName", display: d("font"), type: "select", ha: b}
        }
        return"arrowSize" === c ? {name: "arrowSize", display: d("arrowhead-size"), type: "select", ha: [{name: d("arrowhead-size-none"), value: 0}, {name: d("arrowhead-size-tiny"), value: 10}, {name: d("arrowhead-size-small"), value: 15}, {name: d("arrowhead-size-medium"), value: 20}, {name: d("arrowhead-size-large"), value: 30}]} : "arrowStyle" === c ? {name: "arrowStyle", display: d("arrowhead-style"), type: "select", ha: [{name: d("arrowhead-style-simple"), value: "simple"},
                {name: d("arrowhead-style-solid"), value: "solid"}]} : "doubleArrow" === c ? {name: "doubleArrow", display: d("double-arrows"), type: "select", ha: [{name: d("no"), value: !1}, {name: d("yes"), value: !0}]} : "url" === c ? {name: "url", display: d("image-url"), type: "text"} : "mathml" === c ? {name: "mathml", display: "Equation", type: "button"} : "rows" === c ? {name: c, display: "Rows", type: "text"} : "columns" === c ? {name: c, display: "Columns", type: "text"} : {name: c, display: "Display-" + c, type: "text"}
    }
    Zf.prototype = p.extend({}, Of.prototype, Zf.prototype);
    function bg() {
        this.na = new N;
        this.stack = [];
        this.lineCap = "butt";
        this.Sc = "miter";
        this.strokeStyle = "#000000";
        this.lineWidth = 1;
        this.fillStyle = "#000000";
        this.textBaseline = "top";
        this.font = "10pt arial"
    }
    bg.prototype = {save: function() {
            this.stack.push({fillStyle: this.fillStyle, font: this.font, Sc: this.Sc, lineCap: this.lineCap, lineWidth: this.lineWidth, na: this.na.La(), strokeStyle: this.strokeStyle, textBaseline: this.textBaseline})
        }, restore: function() {
            var a = this.stack.pop();
            this.fillStyle = a.fillStyle;
            this.font = a.font;
            this.Sc = a.Sc;
            this.lineCap = a.lineCap;
            this.lineWidth = a.lineWidth;
            this.na = a.na;
            this.strokeStyle = a.strokeStyle;
            this.textBaseline = a.textBaseline
        }, strokeRect: function(a, b, c, d) {
            this.beginPath();
            this.rect(a,
                    b, c, d);
            this.stroke()
        }, rect: function(a, b, c, d) {
            this.beginPath();
            this.moveTo(a, b);
            this.lineTo(a + c, b);
            this.lineTo(a + c, b + d);
            this.lineTo(a, b + d);
            this.lineTo(a, b);
            this.closePath()
        }, fillRect: function(a, b, c, d) {
            this.rect(a, b, c, d);
            this.fill()
        }, Fd: function(a) {
            var b = null, c = null, d = "normal", e = "normal", f = "normal", g = "normal";
            a = a.split(/\s+/);
            a:for (; ; ) {
                var h = a.shift();
                if (!h)
                    break;
                switch (h) {
                    case "normal":
                        break;
                    case "italic":
                    case "oblique":
                        d = h;
                        break;
                    case "small-caps":
                        f = h;
                        break;
                    case "bold":
                    case "bolder":
                    case "lighter":
                    case "100":
                    case "200":
                    case "300":
                    case "400":
                    case "500":
                    case "600":
                    case "700":
                    case "800":
                    case "900":
                        e =
                                h;
                        break;
                    default:
                        if (!c) {
                            h = h.split("/");
                            c = h[0];
                            1 < h.length && (g = h[1]);
                            break
                        }
                        b = h;
                        a.length && (b += " " + a.join(" "));
                        break a
                    }
            }
            return{fontStyle: d, fontVariant: f, fontWeight: e, fontSize: c, lineHeight: g, fontFamily: b}
        }};
    function cg(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d;
        this.Wc = [];
        this.gb = this.object("Pages", {Kids: [], Count: 0});
        this.Hh = this.object("Catalog", {Pages: this.gb._id + " 0 R"});
        this.Qb = {};
        this.images = {};
        this.df = {};
        this.Aa = 1;
        this.Mh = !1;
        this.$e()
    }
    cg.prototype = {log: x("PdfWriter"), $e: function(a, b, c, d) {
            a = a || this.x;
            b = b || this.y;
            c = c || this.width;
            d = d || this.height;
            this.log("StartPage MediaBox=[%s %s %s %s]", a, b, c, d);
            this.page = this.object("Page", {MediaBox: [a, b, a + c, b + d], Parent: this.gb._id + " 0 R"});
            this.gb.Kids.push(this.page._id + " 0 R");
            this.gb.Count += 1;
            this.df = {}
        }, object: function(a, b) {
            var c = this.Wc.length + 1;
            a && (b.Type = a);
            b._id = c;
            this.Wc.push(b);
            return b
        }, Qa: function(a) {
            if (this.Mh) {
                var b = Va();
                Sa(b, a);
                b.flush();
                a = b.Kd().toString();
                a = this.object(null,
                        {_stream: a, Filter: "[/ASCII85Decode /LZWDecode]", DecodeParms: "[ null << /EarlyChange 0 >> ]"})
            } else
                a = this.object(null, {_stream: a});
            return a
        }, td: function() {
            var a = [], b = [], c;
            a.push("%PDF-1.4\n%\u0080\u0081\u0082\u0083\n");
            for (c = 0; c < this.Wc.length; c++)
                dg(this, a, b, this.Wc[c], !1);
            var d = a.join("").length;
            a.push("xref\n0 " + (this.Wc.length + 1) + "\n");
            a.push("0000000000 65535 f\n");
            for (c = 0; c < this.Wc.length; c++) {
                for (var e = b[c], e = "" + e; 10 > e.length; )
                    e = "0" + e;
                a.push(e + " 00000 n \n")
            }
            a.push("trailer\n");
            a.push("<< /Size " +
                    (this.Wc.length + 1) + "\n");
            a.push("   /Root " + this.Hh._id + " 0 R\n");
            a.push(">>\n");
            a.push("startxref\n");
            a.push(d + "\n");
            a.push("%%EOF\n");
            return a.join("")
        }, je: function() {
            for (var a = this.td(), b = new Uint8Array(a.length), c = 0; c < a.length; c++)
                b[c] = a.charCodeAt(c);
            return new Blob([b], {type: "application/pdf"})
        }, Sb: function(a) {
            for (var b = [], c = 0; c < arguments.length; c++) {
                var d = "" + arguments[c];
                0 < d.indexOf("e") && (d = arguments[c].toFixed(20));
                b.push(d)
            }
            return b.join(" ")
        }};
    function dg(a, b, c, d, e) {
        e ? b.push("<<\n") : (c.push(b.join("").length), b.push(d._id + " 0 obj\n"), "Type"in d ? b.push("<< /Type /" + d.Type + "\n") : b.push("<<\n"));
        "_stream"in d && (d.Length = d._stream.toString().length);
        for (var f in d)
            if (d.hasOwnProperty(f) && "Type" !== f && "_" !== f.charAt(0)) {
                e && b.push("    ");
                b.push("   /" + f + " ");
                var g = d[f];
                "object" === typeof g && "[object Array]" === Object.prototype.toString.apply(g) ? b.push("[ " + g.join(" ") + " ]") : "object" === typeof g ? dg(a, b, c, g, !0) : b.push(g);
                b.push("\n")
            }
        e && b.push("    ");
        b.push(">>\n");
        "_stream"in d && (b.push("stream\n"), b.push(d._stream + "\n"), b.push("endstream\n"));
        e || b.push("endobj\n")
    }
    function eg(a, b, c) {
        "Resources"in a.page || (a.page.Resources = {});
        b in a.page.Resources || (a.page.Resources[b] = {});
        a.page.Resources[b][c._name] = c._id + " 0 R"
    }
    function fg(a, b, c) {
        var d = "" + b + "-" + c;
        if (!(d in a.df)) {
            var e = "gs" + a.Aa;
            a.Aa += 1;
            var f = a.object("ExtGState", {_name: e});
            c ? f.ca = a.Sb(b) : f.CA = a.Sb(b);
            a.df[d] = e;
            eg(a, "ExtGState", f)
        }
        return a.df[d]
    }
    function gg(a, b) {
        bg.call(this);
        this.Xh = b;
        this.yg = this.Ch;
        this.pc = a.La();
        this.pc.transform(new O(0.75, 0.75, 0, 0));
        this.rd = "black";
        this.Ba = new cg(72 * a.x / 96, 72 * a.y / 96, 72 * a.width / 96, 72 * a.height / 96);
        this.Qa = [];
        this.path = [];
        this.y = this.x = 0;
        this.hh = [];
        hg(this)
    }
    gg.prototype = {log: x("PDFContext"), save: function() {
            bg.prototype.save.call(this);
            this.Qa.push("q");
            this.hh.push({na: this.na.La(), rd: this.rd, de: this.de, ce: this.ce, be: this.be, ae: this.ae, $d: this.$d, Zd: this.Zd, Yd: this.Yd})
        }, restore: function() {
            bg.prototype.restore.call(this);
            this.Qa.push("Q");
            var a = this.hh.pop();
            this.na = a.na;
            this.rd = a.rd;
            this.de = a.de;
            this.ce = a.ce;
            this.be = a.be;
            this.ae = a.ae;
            this.$d = a.$d;
            this.Zd = a.Zd;
            this.Yd = a.Yd
        }, $e: function(a) {
            var b = new O(0.75, 0.75, 0, 0);
            a && (this.pc = a.La(), this.pc.transform(b));
            ig(this);
            this.Ba.$e(this.pc.x, this.pc.y, this.pc.width, this.pc.height);
            hg(this);
            this.beginPath()
        }, beginPath: function() {
            this.path.length = 0
        }, toString: function() {
            ig(this);
            return this.Ba.td()
        }, je: function() {
            ig(this);
            return this.Ba.je()
        }, setTransform: function(a, b, c, d, e, f) {
            var g = Oc(this.pc);
            this.na = (new N(a, c, b, d, e, f)).multiply(new Tc(0, g.x, g.y)).multiply(new O(0.75, 0.75, 0, 0))
        }, transform: function(a, b, c, d, e, f) {
            a = new N(a, c, b, d, e, f);
            this.na = this.na.multiply(a)
        }, translate: function(a, b) {
            this.transform(1, 0, 0,
                    1, a, b)
        }, scale: function(a, b) {
            this.transform(a, 0, 0, b, 0, 0)
        }, closePath: function() {
            this.path.push("h")
        }, fill: function() {
            jg(this);
            for (var a = 0; a < this.path.length; a++)
                this.Qa.push(this.path[a]);
            this.Qa.push("f")
        }, stroke: function() {
            kg(this);
            for (var a = 0; a < this.path.length; a++)
                this.Qa.push(this.path[a]);
            this.Qa.push("S")
        }, moveTo: function(a, b) {
            var c = this.na.apply(a, b);
            this.path.push(this.Ba.Sb(c.x, c.y) + " m");
            this.x = a;
            this.y = b
        }, lineTo: function(a, b) {
            var c = this.na.apply(a, b);
            this.path.push(this.Ba.Sb(c.x, c.y) + " l");
            this.x = a;
            this.y = b
        }, quadraticCurveTo: function(a, b, c, d) {
            this.bezierCurveTo(2 / 3 * a + 1 / 3 * this.x, 2 / 3 * b + 1 / 3 * this.y, 2 / 3 * a + 1 / 3 * c, 2 / 3 * b + 1 / 3 * d, c, d)
        }, bezierCurveTo: function(a, b, c, d, e, f) {
            a = this.na.apply(a, b);
            c = this.na.apply(c, d);
            d = this.na.apply(e, f);
            this.path.push(this.Ba.Sb(a.x, a.y, c.x, c.y, d.x, d.y) + " c");
            this.x = e;
            this.y = f
        }, arc: function() {
        }, fillText: function(a, b, c) {
            this.yg(a, b, c, 0)
        }, strokeText: function(a, b, c) {
            this.yg(a, b, c, 1)
        }, Ch: function(a, b, c, d) {
            var e, f, g = this.Fd(this.font), h = this.Xh.get(g.fontFamily);
            if (h) {
                0 ===
                        d ? jg(this) : kg(this);
                this.beginPath();
                g = parseFloat(g.fontSize);
                this.save();
                this.translate(b, c);
                h.transform(this, g);
                for (g = c = b = 0; g < h.Rd.length; g++)
                    h.Rd[g].reset();
                for (g = 0; g < a.length; g++) {
                    var k, l = h;
                    k = a.charCodeAt(g);
                    var m = 0;
                    for (e = 0; e < l.yf.length && !(m = l.yf[e].map(k)); e++)
                        ;
                    k = m;
                    l = h;
                    m = k;
                    t("hmtx"in l.$a);
                    e = l.file;
                    f = e.seek(l.$a.hmtx.offset + 4);
                    var q = l.$a.hmtx.offset, r = {};
                    m < l.Oe ? (q += 4 * m, f = l.file.seek(q), r.pf = e.getUint16()) : (f = e.seek(q + 4 * l.Oe), r.pf = e.getUint16(), e.seek(q + 4 * l.Oe + 2 * (m - l.Oe)));
                    r.pi = e.getInt16();
                    l.file.seek(f);
                    l = r;
                    e = h;
                    f = k;
                    for (var q = void 0, s = m = r = 0; s < e.Rd.length; s++)
                        q = e.Rd[s].get(f), r += q.x, m += q.y;
                    e = r;
                    f = m;
                    h.log("Metrics for %s code %s index %s: %s %s kern: %s,%s", a.charAt(g), a.charCodeAt(g), k, l.pf, l.pi, e, f);
                    m = b + e;
                    e = c + f;
                    k = ec(h, k);
                    if (null !== k && "simple" === k.type)
                        for (var s = r = q = f = 0, u = void 0; q < k.oa.length; q++) {
                            var v = k.oa[q];
                            0 === f ? (this.moveTo(v.x + m, v.y + e), f = 1) : 1 === f ? v.od ? this.lineTo(v.x + m, v.y + e) : f = 2 : (u = k.oa[q - 1], v.od ? (this.quadraticCurveTo(u.x + m, u.y + e, v.x + m, v.y + e), f = 1) : this.quadraticCurveTo(u.x + m,
                                    u.y + e, (u.x + v.x) / 2 + m, (u.y + v.y) / 2 + e));
                            q === k.wc[r] && (2 === f && (u = v, v = k.oa[s], v.od ? this.quadraticCurveTo(u.x + m, u.y + e, v.x + m, v.y + e) : this.quadraticCurveTo(u.x + m, u.y + e, (u.x + v.x) / 2 + m, (u.y + v.y) / 2 + e)), s = q + 1, r += 1, f = 0)
                        }
                    b += l.pf
                }
                this.restore();
                0 === d ? this.fill() : this.stroke()
            } else {
                h = this.Fd(this.font);
                if (this.$d !== h.fontSize || this.Zd !== h.fontFamily)
                    g = this.Ba, l = h.fontFamily, l in g.Qb || (k = "F" + g.Aa, g.Aa += 1, m = "/" + l.replace(/ /g, ""), k = g.object("Font", {_name: k, BaseFont: m, Encoding: "/StandardEncoding", Subtype: "/Type1"}), g.Qb[l] =
                            k), eg(g, "Font", g.Qb[l]), this.Qa.push("/" + g.Qb[l]._name + " " + this.Ba.Sb(parseFloat(h.fontSize)) + " Tf"), this.$d = h.fontSize, this.Zd = h.fontFamily;
                this.Yd !== d && (this.Qa.push(d + " Tr"), this.Yd = 0);
                0 === d ? jg(this) : kg(this);
                this.Qa.push("BT");
                d = this.na.multiply(new N(1, 0, 0, -1, b, c));
                this.Qa.push(this.Ba.Sb(d.m11, d.m21, d.m12, d.m22, d.xa, d.ya) + " Tm");
                this.Qa.push("(" + a.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)") + ") Tj");
                this.Qa.push("ET")
            }
        }, Fd: function(a) {
            var b = null, c = null, d = "normal", e = "normal",
                    f = "normal", g = "normal";
            a = a.split(/\s+/);
            a:for (; ; ) {
                var h = a.shift();
                if (!h)
                    break;
                switch (h) {
                    case "normal":
                        break;
                    case "italic":
                    case "oblique":
                        d = h;
                        break;
                    case "small-caps":
                        f = h;
                        break;
                    case "bold":
                    case "bolder":
                    case "lighter":
                    case "100":
                    case "200":
                    case "300":
                    case "400":
                    case "500":
                    case "600":
                    case "700":
                    case "800":
                    case "900":
                        e = h;
                        break;
                    default:
                        if (!c) {
                            h = h.split("/");
                            c = h[0];
                            1 < h.length && (g = h[1]);
                            break
                        }
                        b = h;
                        a.length && (b += " " + a.join(" "));
                        break a
                    }
            }
            return{fontStyle: d, fontVariant: f, fontWeight: e, fontSize: c, lineHeight: g,
                fontFamily: b}
        }, drawImage: function(a, b, c, d, e, f, g, h, k) {
            var l = parseInt(a.width, 10), m = parseInt(a.height, 10);
            if (3 === arguments.length)
                return this.drawImage(a, 0, 0, l, m, arguments[1], arguments[2], l, m);
            if (5 === arguments.length)
                return this.drawImage(a, 0, 0, l, m, arguments[1], arguments[2], arguments[3], arguments[4]);
            this.log("DrawImage(%s, %s, %s, %s, %s, %s, %s %s)", b, c, d, e, f, g, h, k);
            g += k;
            l = document.createElement("canvas");
            m = l.getContext("2d");
            l.width = d;
            l.height = e;
            m.drawImage(a, -b, -c);
            var m = this.Ba, q = [a.src, b, c, d,
                e].join(), r;
            if (!(q in m.images)) {
                var s = "I" + m.Aa;
                m.Aa += 1;
                var u = l.getContext("2d").getImageData(0, 0, l.width, l.height);
                r = "";
                var v = !1, y = Va();
                for (r = 0; r < u.data.length; r += 4)
                    y.kb(u.data[r]), y.kb(u.data[r + 1]), y.kb(u.data[r + 2]), v = v || 255 > u.data[r + 3];
                y.flush();
                r = y.Kd().toString();
                s = m.object("XObject", {Subtype: "/Image", Width: l.width, Height: l.height, ColorSpace: "/DeviceRGB", BitsPerComponent: 8, Length: r.length, Interpolate: "true", Filter: "[/ASCII85Decode /LZWDecode]", DecodeParms: "[ null << /EarlyChange 0 >> ]", _name: s,
                    _stream: r});
                if (v) {
                    y = Va();
                    for (r = 0; r < u.data.length; r += 4)
                        y.kb(u.data[r + 3]);
                    y.flush();
                    r = y.Kd().toString();
                    l = m.object("XObject", {Subtype: "/Image", Width: l.width, Height: l.height, ColorSpace: "/DeviceGray", BitsPerComponent: 8, Length: r.length, Filter: "[/ASCII85Decode /LZWDecode]", DecodeParms: "[ null << /EarlyChange 0 >> ]", _stream: r});
                    s.SMask = l._id + " 0 R"
                }
                m.images[q] = s
            }
            eg(m, "XObject", m.images[q]);
            l = "/" + m.images[q]._name;
            this.Qa.push("q");
            m = this.na.multiply(new N(h, 0, 0, -k, f, g));
            this.Qa.push(this.Ba.Sb(m.m11, m.m21,
                    m.m12, m.m22, m.xa, m.ya) + " cm");
            this.Qa.push(l + " Do");
            this.Qa.push("Q")
        }, td: function() {
            return this.Ba.td()
        }};
    function kg(a) {
        function b(a) {
            return"miter" === a ? 0 : "round" === a ? 1 : 2
        }
        function c(a) {
            return"butt" === a ? 0 : "round" === a ? 1 : 2
        }
        if (a.de !== a.strokeStyle) {
            var d = nc(lc(a.strokeStyle), hc);
            a.Qa.push(a.Ba.Sb(d.ha[0], d.ha[1], d.ha[2]) + " RG");
            d = fg(a.Ba, d.ha[3], !1);
            a.Qa.push("/" + d + " gs");
            a.de = a.strokeStyle
        }
        a.ce !== a.lineWidth && (a.ce = a.lineWidth, a.Qa.push(a.Ba.Sb(a.lineWidth) + " w"));
        a.be !== a.lineJoin && (a.be = a.lineJoin, a.Qa.push(b(a.lineJoin) + " j"));
        a.ae !== a.lineCap && (a.ae = a.lineCap, a.Qa.push(c(a.lineCap) + " J"))
    }
    function jg(a) {
        if (a.rd !== a.fillStyle) {
            var b = nc(lc(a.fillStyle), hc);
            a.Qa.push(a.Ba.Sb(b.ha[0], b.ha[1], b.ha[2]) + " rg");
            b = fg(a.Ba, b.ha[3], !0);
            a.Qa.push("/" + b + " gs");
            a.rd = a.fillStyle
        }
    }
    function ig(a) {
        if (a.Qa.length) {
            var b = a.Ba.Qa(a.Qa.join("\n"));
            a.Ba.page.Contents = b._id + " 0 R"
        }
        a.Qa.length = 0
    }
    function hg(a) {
        a.log("Start page: %s", a.pc);
        a.setTransform(1, 0, 0, 1, 0, 0)
    }
    gg.prototype = p.extend({}, bg.prototype, gg.prototype);
    function lg(a, b, c) {
        this.name = a;
        this.attributes = b;
        this.children = [];
        this.text = c
    }
    lg.prototype = {toString: function() {
            var a = [];
            mg(this, a, "  ");
            return a.join("")
        }};
    function mg(a, b, c) {
        var d;
        b.push(c);
        b.push("<");
        b.push(a.name);
        for (d in a.attributes)
            a.attributes.hasOwnProperty(d) && (b.push(" "), b.push(d), void 0 !== a.attributes[d] && null !== a.attributes[d] && (b.push('="'), b.push(a.attributes[d]), b.push('"')));
        if (a.children.length || void 0 !== a.text) {
            b.push(">\n");
            for (d = 0; d < a.children.length; d++)
                mg(a.children[d], b, c + "  ");
            void 0 !== a.text && b.push(c + "  " + a.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"));
            b.push("</" + a.name + ">")
        } else
            b.push("/>");
        b.push("\n")
    }
    ;
    function ng(a) {
        bg.call(this);
        this.na = new N;
        this.ea = [];
        this.path = [];
        this.log("SVG context rect: %s", a);
        this.root = new lg("svg", {xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", version: 1.2, baseProfile: "tiny", width: a.width, height: a.height, viewBox: a.x + " " + a.y + " " + a.width + " " + a.height})
    }
    ng.prototype = {log: x("SvgContext"), toString: function() {
            return'<?xml version="1.0" encoding="UTF-8"?>\n' + this.root.toString()
        }, je: function() {
            for (var a = this.toString(), b = new Uint8Array(a.length), c = 0; c < a.length; c++)
                b[c] = a.charCodeAt(c);
            return new Blob([b], {type: "image/svg+xml"})
        }, beginPath: function() {
            this.path.length = 0
        }, transform: function(a, b, c, d, e, f) {
            a = new N(a, c, b, d, e, f);
            this.na = this.na.multiply(a)
        }, setTransform: function(a, b, c, d, e, f) {
            this.na = new N(a, c, b, d, e, f)
        }, translate: function(a, b) {
            this.na.xa += a;
            this.na.ya += b
        }, scale: function(a, b) {
            this.na = this.na.multiply(new O(a, b))
        }, closePath: function() {
            this.path.push("Z")
        }, fill: function() {
            this.root.children.push(new lg("path", {transform: "matrix(" + this.na.m11 + " " + this.na.m21 + " " + this.na.m12 + " " + this.na.m22 + " " + this.na.xa + " " + this.na.ya + ")", stroke: "none", fill: this.fillStyle, d: this.path.join(" ")}))
        }, stroke: function() {
            this.root.children.push(new lg("path", {transform: "matrix(" + this.na.m11 + " " + this.na.m21 + " " + this.na.m12 + " " + this.na.m22 + " " + this.na.xa + " " + this.na.ya +
                        ")", fill: "none", stroke: this.strokeStyle, "stroke-width": this.lineWidth, "stroke-linejoin": this.Sc, "stroke-linecap": this.lineCap, d: this.path.join(" ")}))
        }, moveTo: function(a, b) {
            this.path.push("M" + a + "," + b)
        }, lineTo: function(a, b) {
            this.path.push("L" + a + "," + b)
        }, quadraticCurveTo: function(a, b, c, d) {
            this.path.push("Q" + a + "," + b);
            this.path.push(c + "," + d)
        }, bezierCurveTo: function(a, b, c, d, e, f) {
            this.path.push("C" + a + "," + b);
            this.path.push(c + "," + d);
            this.path.push(e + "," + f)
        }, arc: function(a, b, c, d, e, f) {
            var g = a + c * Math.cos(d);
            d = b + c * Math.sin(d);
            a += c * Math.cos(e);
            b += c * Math.sin(e);
            this.path.push("M");
            this.path.push(g);
            this.path.push(d);
            this.path.push("A");
            this.path.push(c);
            this.path.push(c);
            this.path.push(0);
            this.path.push(f ? 0 : 1);
            this.path.push(0);
            this.path.push(a);
            this.path.push(b)
        }, fillText: function(a, b, c) {
            var d = this.Fd(this.font);
            this.root.children.push(new lg("text", {transform: "matrix(" + this.na.m11 + " " + this.na.m21 + " " + this.na.m12 + " " + this.na.m22 + " " + this.na.xa + " " + this.na.ya + ")", "font-weight": d.fontWeight, "font-size": parseFloat(d.fontSize),
                "font-style": d.fontStyle, "font-family": d.fontFamily, x: b, y: c, stroke: "none", fill: this.fillStyle}, a))
        }, strokeText: function(a, b, c) {
            var d = this.Fd(this.font);
            this.root.children.push(new lg("text", {transform: "matrix(" + this.na.m11 + " " + this.na.m21 + " " + this.na.m12 + " " + this.na.m22 + " " + this.na.xa + " " + this.na.ya + ")", "font-weight": d.fontWeight, "font-size": parseFloat(d.fontSize), "font-style": d.fontStyle, "font-family": d.fontFamily, x: b, y: c, stroke: this.strokeStyle, fill: "none"}, a))
        }, drawImage: function(a, b, c, d, e, f, g,
                h, k) {
            var l = document.createElement("canvas"), m = l.getContext("2d");
            l.width = d;
            l.height = e;
            m.drawImage(a, -b, -c);
            a = l.toDataURL();
            this.root.children.push(new lg("image", {transform: "matrix(" + this.na.m11 + " " + this.na.m21 + " " + this.na.m12 + " " + this.na.m22 + " " + this.na.xa + " " + this.na.ya + ")", x: f, y: g, width: h, height: k, "xlink:href": a}))
        }};
    ng.prototype = p.extend({}, bg.prototype, ng.prototype);
    var og = x("DOC");
    Ge.prototype.save = function(a, b) {
        var c, d;
        if ("list" === a)
            d = pg(this), c = "application/json";
        else if ("zwibbler3" === a)
            c = pg(this), d = "zwibbler3." + window.JSON.stringify(c), c = "application/octet-stream";
        else if ("svg" === a)
            c = Le(this), d = new ng(c), this.ka(d), c = "image/svg+xml";
        else if ("pdf" === a) {
            c = Le(this);
            d = new gg(c, window.Zwibbler.Qb);
            var e = this.Ab;
            for (c = 0; c < this.zc(); c++)
                0 < c && d.$e(), this.wb(c), this.ka(d);
            this.wb(e);
            c = "application/pdf"
        } else
            throw"Unknown save format: " + a;
        var f;
        if (ia(d))
            if ("string" === b)
                f = d;
            else if ("data-uri" ===
                    b)
                f = "data:" + c + ";base64," + fa(d);
            else {
                if ("blob" === b)
                    for (e = new Uint8Array(d.length), c = 0; c < d.length; c++)
                        e[c] = d.charCodeAt(c)
            }
        else if (d.je && d.toString)
            "string" === b ? f = d.toString() : "data-uri" === b ? f = "data:" + c + ";base64," + fa(d.toString()) : "blob" === b && (f = d.je());
        else
            throw"Error in ZwibblerDocument.save()";
        return f
    };
    function qg(a) {
        if ("{" === a.charAt(0))
            return rg(a);
        if (0 === a.indexOf("zwibbler3.")) {
            var b = window.JSON.parse(a.substr(10));
            return sg(b)
        }
        if (0 === a.indexOf("zwibblerclip."))
            return b = new Ge(!1), a = Me(b, a, []), b.va(a), Qe(b), b;
        throw"Format detection failed.";
    }
    function rg(a) {
        var b = x("IMPORT"), c = new Ge, d = c.Aa, e, f, g, h, k, l = [];
        k = function(a) {
            var b = new N;
            b.m11 = a.m11;
            b.m12 = a.m12;
            b.m21 = a.m21;
            b.m22 = a.m22;
            b.xa = a.dx;
            b.ya = a.dy;
            return b
        };
        g = function(a) {
            var b = 0;
            "arrowSize"in a && (b = a.arrowSize, a = a.path);
            var c = k(a.matrix), b = {strokeStyle: a.strokeStyle, fillStyle: a.fillStyle, lineWidth: a.lineWidth, smoothness: a.smoothness, sloppiness: a.sloppiness, shadow: a.shadow, arrowSize: b, seed: Math.round(65535 * Math.random())};
            if ("textNode"in a) {
                var e = a.textNode;
                b.fontSize = e.fontSize;
                b.fontName =
                        e.fontName;
                b.text = e.text;
                b.textFillStyle = "textFillStyle"in e ? e.textFillStyle : e.fillStyle
            }
            "path"in a && (a = a.path);
            var f = a.startX, g = a.startY, e = a.closed, h = new Xd;
            a = a.segments;
            f = c.apply(f, g);
            h.moveTo(f.x, f.y);
            for (f = 0; f < a.length; f++) {
                var m = a[f];
                switch (m.type) {
                    case 1:
                        g = c.apply(m.x, m.y);
                        h.lineTo(g.x, g.y);
                        break;
                    case 2:
                        g = c.apply(m.x, m.y);
                        h.Af(g.x, g.y);
                        break;
                    case 3:
                        g = c.apply(m.x1, m.y1);
                        m = c.apply(m.x, m.y);
                        pe(h, g.x, g.y, m.x, m.y);
                        break;
                    default:
                        throw"Unknown path segment type: " + m.type;
                    }
            }
            e && h.close();
            b.commands =
                    h.Nb();
            l.push(new D("PathNode", b));
            d += 1
        };
        e = function(a, b) {
            for (var c = [], e = a.children, g = e.length - 1; 0 <= g; g--) {
                var h = d;
                try {
                    f(e[g], b + 1)
                } catch (k) {
                    continue
                }
                c.push(h)
            }
            0 < b && (d += 1, l.push(new we(c)))
        };
        h = function(a) {
            var b = k(a.matrix), b = b.multiply(new E(0, 1.3 * a.fontSize));
            a = {fillStyle: a.fillStyle, lineWidth: 0, text: a.text, fontName: a.fontName, fontSize: a.fontSize, matrix: b, inverse: b.inverse()};
            l.push(new D("TextNode", a));
            d += 1
        };
        f = function(a, b) {
            switch (a.type) {
                case "Node":
                    e(a, b);
                    break;
                case "PathNode":
                case "ArrowNode":
                    g(a);
                    break;
                case "TextNode":
                    h(a);
                    break;
                default:
                    throw"Unknown node type: " + a.type;
                }
        };
        var m;
        try {
            m = window.JSON.parse(a)
        } catch (q) {
            a = a.replace(/\\\\/g, "\\").replace(/\\"/g, '"');
            try {
                m = window.JSON.parse(a)
            } catch (r) {
                a = a.replace(",", ",\n");
                try {
                    m = eval("(" + a + ")")
                } catch (s) {
                    throw b("Couldn't parse file."), "Couldn't parse file.";
                }
            }
        }
        b("Successfully parsed!");
        f(m, 0);
        c.va(l);
        return c
    }
    function tg(a) {
        function b() {
            for (var a = [], b = 0; 4 > b; b++)
                a.push(Math.random());
            return a
        }
        function c(a) {
            var e = {}, f;
            e.type = "Node";
            f = R(a);
            e.matrix = {m11: f.m11, m12: f.m12, m21: f.m21, m22: f.m22, dx: f.xa, dy: f.ya};
            e.children = [];
            if (Ld(a))
                for (f = 0; f < a.children.length; f++)
                    e.children.push(c(a.children[f]));
            if ("BaseNode" !== a.type() && "GroupNode" !== a.type())
                if ("TextNode" === a.type())
                    e.type = "TextNode", e.fillStyle = a.qa("textFillStyle"), e.fontName = a.qa("fontName"), e.fontSize = a.qa("fontSize"), e.text = a.qa("text");
                else if ("PathNode" ===
                        a.type()) {
                    f = e;
                    0 < a.qa("arrowSize") && !a.qa("closed") && (e.type = "ArrowNode", e.arrowSize = a.qa("arrowSize"), f = {}, e.path = f);
                    e.type = "PathNode";
                    "" !== a.qa("text") && (f = {}, f.fillStyle = a.qa("textFillStyle"), f.fontName = a.qa("fontName"), f.fontSize = a.qa("fontSize"), f.text = a.qa("text"), e.textNode = f);
                    var g = a.ba.commands;
                    if (3 > g.length)
                        throw"Tried to export empty path.";
                    e.strokeStyle = a.qa("strokeStyle");
                    e.fillStyle = a.qa("fillStyle");
                    e.lineWidth = a.qa("lineWidth");
                    e.smoothness = a.qa("smoothness");
                    e.sloppiness = a.qa("sloppiness");
                    e.startX = g[1];
                    e.startY = g[2];
                    e.closed = a.qa("closed");
                    e.segments = [];
                    e.shadow = a.qa("shadow");
                    e.seed = a.qa("seed");
                    for (f = 3; f < g.length; )
                        g[f] === ke ? e.segments.push({type: 1, x: g[f + 1], y: g[f + 2], r: b()}) : g[f] === le ? e.segments.push({type: 2, x: g[f + 1], y: g[f + 2]}) : g[f] === me && e.segments.push({type: 3, x: g[f + 1], y: g[f + 2], x1: g[f + 3], y1: g[f + 4], r: b()}), f += T[g[f]] + 1
                } else
                    throw"Unknown node type: " + a.type();
            return e
        }
        return window.JSON.stringify(c(a))
    }
    function pg(a) {
        function b(a, d) {
            var e = {id: d.id, type: d.type()};
            c.push(e);
            a && (e.parent = a.id);
            var f = d.ba, m;
            for (m in f)
                f.hasOwnProperty(m) && ("matrix" === m ? e[m] = f[m].Nb() : "inverse" !== m && (e[m] = f[m]));
            if (Ld(d))
                for (e = 0; e < d.children.length; e++)
                    b(d, d.children[e])
        }
        var c = [], d = {type: "document"}, e = !1, f;
        for (f in a.ba)
            a.ba.hasOwnProperty(f) && (d[f] = a.ba[f], e = !0);
        e && c.push(d);
        b(null, a.root);
        return c
    }
    function sg(a) {
        function b(a, c) {
            var d;
            if (void 0 !== a) {
                d = {};
                for (var e in a)
                    a.hasOwnProperty(e) && "children" !== e && "parent" !== e && "id" !== e && "type" !== e && ("matrix" === e ? (d[e] = new N(a[e]), d.inverse = d.matrix.inverse()) : d[e] = a[e]);
                e = h;
                0 !== a.id && f.push(new D(a.type, d, c, -1));
                g[a.id] = h;
                h += 1;
                if (void 0 !== a.children)
                    for (d = 0; d < a.children.length; d++)
                        b(a.children[d], e)
            }
        }
        var c, d, e;
        a = window.JSON.parse(window.JSON.stringify(a));
        var f = [], g = {}, h = 0, k = {}, l = !1;
        for (c = 0; c < a.length; c++)
            if (e = a[c], "document" === e.type)
                delete e.type,
                        f.push(new Fe(e));
            else {
                "PageNode" === e.type && (l = !0);
                if ("parent"in e) {
                    if (!(e.parent in k))
                        throw"Error: child " + e.id + " references parent " + e.parent + " before it was defined.";
                    d = k[e.parent];
                    void 0 !== d.children ? d.children.push(e) : d.children = [e]
                }
                "GroupNode" !== e.type && "PageNode" !== e.type || void 0 !== e.children || (e.children = []);
                k[e.id] = e
            }
        l || (h += 1);
        b(k[0], h);
        og(JSON.stringify(g));
        for (c = 0; c < f.length; c++)
            og(f[c].toString());
        a = new Ge(l);
        a.va(f);
        Qe(a);
        return a
    }
    ;
    function ug(a, b, c) {
        var d, e = this;
        this.ra = a;
        this.aa = b;
        this.aa.empty();
        "absolute" !== this.aa.$("position") && "fixed" !== this.aa.$("position") && this.aa.$("position", "relative");
        this.aa.$("overlow", "none");
        this.aa.$("text-align", "left");
        this.hd = new Qf(p("<div>").$("width", "300px"));
        this.log("Starting Zwibbler Version %s", ff);
        this.aa.append(this.hd.aa);
        this.da = new af(c);
        this.language = new kb(ef);
        nb(this.language, this.da.get("language"));
        this.Ub = null;
        this.vc = p("<div>");
        this.vc.$("position", "absolute");
        this.vc.$("overflow",
                "hidden");
        this.aa.append(this.vc);
        this.canvas = p(La(this.vc[0]));
        this.canvas.$("outline", "0");
        this.canvas.$("position", "absolute");
        this.canvas.$("left", "0");
        this.canvas.$("top", "0");
        this.canvas.$("-ms-touch-action", "none");
        this.canvas.$("touch-action", "none");
        this.canvas.Sa("tabindex", "0");
        this.ia = this.canvas[0].getContext("2d");
        this.da.fc() ? this.Gb = new oc(this.aa, 40, !0, !1) : this.Gb = new oc(this.aa, 20, !1, !1);
        this.la = new K;
        this.la.bind("document-changed", function() {
            vg(e)
        });
        this.la.bind("document-changed",
                function() {
                    vg(e)
                });
        this.view = new zf(this.canvas, new Ge, this.Gb, this.la, this.da, this.language);
        wg(this);
        xg(this);
        yg(this);
        this.nb = new Zf(this.da, this.language);
        this.aa.append(this.nb.aa);
        this.da.th() && (this.view.nb = this.nb);
        this.nb.view = this.view;
        this.nb.on("click", function() {
            e.focus("none")
        });
        p(window).resize(function() {
            return e.bd()
        });
        this.la.bind("resize", function() {
            return e.bd
        });
        this.query = Xe();
        this.Jc = "debug"in this.query || this.da.Jc();
        this.Pb = new Tf(this.aa);
        this.Pb.aa.$("border-right", "1px solid black");
        this.Ib = new Tf(this.aa);
        this.Ib.aa.$("border-top", "1px solid black");
        Vf(this.Ib);
        this.Ib.on("click", function(a) {
            return Gf(e.view, a)
        });
        this.Pb.on("click", function(a) {
            return zg(e, a)
        });
        null !== this.da.options.backgroundImage && (zg(this, this.da.options.backgroundImage), Qe(this.view.ja));
        Ag(this);
        this.da.get("showMathTool") && (d = new Hb, d.load(function() {
            e.log("App: MJAX loaded.");
            return e.view.pg(d)
        }));
        this.da.on("update", function(a, b) {
            e.eg(a, b)
        });
        this.Yg = this.$g = -1;
        this.qb = new Lb(p("<div>"), !1, !this.da.get("showPageSelectorControls"));
        this.qb.aa.$("position", "absolute");
        this.qb.aa.$("top", "0");
        this.qb.aa.$("bottom", "0");
        this.qb.aa.$("width", "160px");
        this.qb.aa.$("left", "50px");
        this.qb.aa.$("background", "#888");
        Pb(this.qb, this.da.get("showPageSelector"));
        this.aa.append(this.qb.aa);
        this.ig = p("<div>").$("position", "absolute").$("top", "0").$("right", "0").$("box-shadow", "3px 3px 3px #444").$("background", "#ccc").$("color", "black").$("border-bottom-left-radius", "4px").$("font-family", "arial,sans");
        this.aa.append(this.ig);
        this.bd();
        this.Bf =
                (a = df(this.da)) ? new Lb(p(a), !0, !0) : null;
        this.da.get("setFocus") && this.focus("toolbar");
        this.da.get("pageView") && this.view.zoom("page");
        this.ye = [];
        Ob(this.qb, this.ra);
        this.Bf && (Ob(this.Bf, this.ra), Pb(this.Bf, !0));
        Nf(this.view, this.ra);
        this.ra.emit("document-changed");
        this.ra.emit("set-page", this.view.ja.Ab)
    }
    ug.prototype = {log: x("APP"), eg: function(a, b) {
            var c = !1;
            this.log("onConfigChange %s=%s", a, b);
            switch (a) {
                case "debug":
                    this.Jc = b;
                    c = !0;
                    break;
                case "showPageSelector":
                    c = !0;
                    Pb(this.qb, b);
                    break;
                case "backgroundImage":
                    zg(this, b);
                    break;
                case "language":
                    this.language.code = b
            }
            c && this.bd(!0)
        }, xd: function(a) {
            this.Ub = null;
            this.view.xd(a);
            wg(this);
            Bg(this);
            this.ra && (this.ra.emit("document-changed"), this.ra.emit("set-page", a.Ab));
            for (a = 0; a < this.ye.length; a++) {
                var b = this.ye[a];
                this.log("Removing old DomElement of type %s",
                        b.tagName);
                p(b).remove()
            }
            this.ye = []
        }, focus: function(a) {
            this.log("Set focus to %s", a);
            if ("toolbar" !== a && "canvas" !== a && "none" !== a)
                throw"Focus must be toolbar or canvas or none, not " + a;
            this.Ed = a;
            "toolbar" === this.Ed ? (this.toolbar.focus(), a = this.view, a.Ca.sb && (a.Ca.sb = !1, a.ka()), this.aa.focus()) : "canvas" === this.Ed && (this.toolbar.blur(), this.aa.focus())
        }, rc: function(a) {
            this.focus("canvas");
            this.view.rc(a)
        }, createNode: function(a, b, c) {
            var d;
            d = this.view.ja.Aa;
            "layer"in c || (c.layer = this.view.Ja);
            a.push(new D(b,
                    c));
            return d
        }, transformNode: function(a, b, c) {
            a.push(new Q([b], c, c.inverse()));
            return!0
        }, cf: function(a, b, c, d) {
            c = new E(c, d);
            a.push(new Q([b], c, c.inverse()));
            return!0
        }, mg: function(a, b, c, d) {
            c = new O(c, d, 0, 0);
            a.push(new Q([b], c, c.inverse()));
            return!0
        }, Cf: function(a, b) {
            ha(b) || (b = [b]);
            return a.push(new ue(b))
        }, Mf: function() {
            return null !== this.Ub && this.Ub in this.view.ja.za ? V(this.view.ja, this.Ub).qa("url") : null
        }, Me: function() {
            this.xd(new Ge);
            null !== this.da.options.backgroundImage && (zg(this, this.da.options.backgroundImage),
                    Qe(this.view.ja))
        }, bd: function(a) {
            var b, c, d, e, f, g, h, k, l, m, q, r, s, u, v;
            u = p(window).width();
            k = p(window).height();
            if (a || u !== this.oi || k !== this.ni)
                this.oi = u, this.ni = k, u = this.aa.width() - 0, k = this.aa.height() - 0, 0 >= u || !a && u === this.$g && k === this.Yg || (this.$g = u, this.Yg = k, this.da.options.showMenu ? (this.Tc.show(), this.Tc.moveTo(0, 0), this.Tc.width(u), a = this.Tc.height()) : (this.Tc.Ra(), a = 0), this.da.options.showBackgroundSelector ? (b = 100, this.Pb.show(), f = this.Pb, f.maxWidth = b - 24, f.maxHeight = 0) : (b = 0, this.Pb.Ra()), this.da.options.showImageSelector ?
                        (e = 100, f = this.Ib, f.maxWidth = 0, f.maxHeight = e - 24, this.Ib.show()) : (e = 0, this.Ib.Ra()), this.da.options.showPageSelector ? (this.qb.aa.show(), v = this.qb.aa.outerWidth()) : (this.qb.aa.Ra(), v = 0), this.da.Wi() ? (this.Gb.show(), pc(this.Gb, u), f = this.Gb.height()) : (this.Gb.Ra(), f = 0), this.log("Colour panel height is %s", f), this.da.Xi() ? (this.toolbar.show(!0), c = k - a - f, d = this.toolbar, 0 >= c || (g = 52 * Math.ceil(d.bf / c) + 1, d.aa.style.width = "" + g + "px", d.log("Toolbar width/height = %s,%s totalHeight=%s", g, c, d.bf)), s = this.toolbar.width()) :
                        (this.toolbar.show(!1), s = 0), c = mf(this.view), this.toolbar.moveTo(b + v, a), g = k - f, h = m = r = 0, this.Jc && (h = this.hd.width()), (q = this.da.th() && 700 <= u) && (m = 300), r += m + h, l = u - 2 * c - b - r, d = k - 2 * c - f - a - e, this.Pb.width(b), this.Pb.height(k - 2 * c - a - f), this.Pb.moveTo(0, a), this.qb.aa.$("top", "" + a + "px"), this.qb.aa.$("left", "0"), this.Ib.width(l), this.Ib.height(e), this.Ib.moveTo(b, k - 2 * c - f - e), e = v + b + s, b = u - 2 * c - s - r - b - v, this.log("menuHeight = %s", a), this.vc.$("left", "" + e + "px"), this.vc.$("top", "" + a + "px"), this.vc.$("width", "" + b + "px"), this.vc.$("height",
                        "" + d + "px"), this.canvas.Sa("width", "" + b), this.canvas.Sa("height", "" + d), this.Gb.moveTo(0, g), pc(this.Gb, u), this.Gb.ka(), this.ig.$("top", "" + a + "px").$("right", "" + (m + h) + "px"), this.Jc ? (this.hd.show(), this.hd.moveTo(u - h, a), this.hd.height(k - 2 * c - f - a)) : this.hd.Ra(), q ? (this.nb.show(), this.nb.moveTo(u - h - m, a), this.nb.width(m), this.nb.height(k - 2 * c - a - f)) : this.Bh || this.nb.Ra(), k = this.view, a = p(k.canvas), f = a.offset(), e = p(k.canvas.parentNode).offset(), u = a.width(), a = a.height(), b = f.left - e.left, f = f.top - e.top, e = mf(k), k.Fb.moveTo(b +
                        u - 20 + e, f + e), hd(k.Fb, 20, a - 20), k.$b.moveTo(b + e, f + a - 20 + e), hd(k.$b, u - 20, 20), k.zoom(k.Tb), k.ka())
        }, emit: function(a, b) {
            return this.la.emit(a, b)
        }, Ye: function(a, b, c, d) {
            this.log("External app setItemProperty %s: %s=%s", b, c, d);
            b = ha(b) ? b : [b];
            a.push(new Ad(b, c, d))
        }, qg: function(a, b, c) {
            var d;
            this.log("External app setNodeProperty %s: %s", b, c);
            ha(b) || (b = [b]);
            for (d in c)
                c.hasOwnProperty(d) && a.push(new Ad(b, d, c[d]));
            if (0 < a.length)
                return this.view.va(a)
        }, Ee: function(a, b) {
            var c, d;
            (c = V(this.view.ja, a)) && (d = c.qa(b));
            this.log("GetItemProperty %s: %s=%s", a, b, d);
            return d
        }, Pf: function(a) {
            return(a = V(this.view.ja, a)) ? a.type() : ""
        }, zf: function(a, b) {
            var c, d, e, f, g, h;
            if (6 > b.length)
                this.log("newShape: Cannot create shape with fewer than three points.");
            else {
                c = new Xd;
                e = g = 0;
                for (h = b.length - 1; g <= h; e = g += 2)
                    f = this.view.cb(new B(b[e], b[e + 1])), 0 === e ? (c.moveTo(f.x, f.y), d = f) : c.lineTo(f.x, f.y);
                c.lineTo(d.x, d.y);
                c.close();
                return this.we(a, c.Nb())
            }
        }, we: function(a, b) {
            return this.createNode(a, "PathNode", {commands: b, fillStyle: this.view.Xb,
                strokeStyle: this.view.Yb, seed: Math.round(65535 * Math.random()), lineWidth: this.view.wa.lineWidth, sloppiness: this.view.wa.sloppiness, angleArcs: this.da.get("angleArcs")})
        }, gd: function(a, b) {
            var c;
            c = this.view.ja.Aa;
            a.push(new we(b));
            return c
        }, ke: function(a, b) {
            a.push(new xe(b))
        }};
    function Cg(a) {
        var b, c, d;
        d = Le(a.view.ja);
        b = p("<canvas>");
        b.Sa("width", "" + d.width);
        b.Sa("height", "" + d.height);
        c = b[0].getContext("2d");
        c.translate(-d.x, -d.y);
        Ef(a.view, c, d.x, d.y, d.width, d.height);
        a.view.ja.ka(c);
        return b[0].toDataURL()
    }
    function zg(a, b) {
        var c, d;
        c = [];
        null !== a.Ub && a.Ub in a.view.ja.za && c.push(new ue([a.Ub]));
        d = a.view.ja.Aa;
        c.push(new D("ImageNode", {url: b, locked: !0, layer: a.view.Ja}));
        c.push(new Ae([d], Ce));
        a.Ub = d;
        a.view.va(c);
        a.view.ob();
        S(a.view)
    }
    function Bg(a) {
        a.Ub = null;
        a.view.ja.Bb(!1, function(b) {
            "ImageNode" === b.type() && !0 === b.qa("locked") && (a.log("Found background image at nodeid %s", b.id), a.Ub = b.id)
        })
    }
    function Dg(a) {
        a.focus("canvas");
        Cd(a.view)
    }
    function yg(a) {
        a.Ed = "none";
        a.Xf = new Fc;
        cf(a.da, a.Xf);
        a.Xf.on("*", function(b, c) {
            "toolbar" === a.Ed ? a.toolbar.Kb(b, c) : "canvas" === a.Ed ? a.view.Kb(b, c) : a.log("Ignore key action -- don't have focus.")
        });
        a.aa.Sa("tabindex", "0");
        Hc(a.Xf, a.aa[0]);
        a.canvas.click(function() {
            Oa() ? a.Ed = "canvas" : a.focus("canvas")
        });
        p(a.toolbar.aa).click(function() {
            a.focus("toolbar")
        });
        a.Gb.on("colour", function() {
            a.focus("canvas")
        });
        a.la.on("goto-toolbar", function() {
            a.focus("toolbar")
        });
        a.la.on("goto-canvas", function() {
            a.focus("canvas")
        })
    }
    function xg(a) {
        function b(a) {
            return 0 === a.type.indexOf("key")
        }
        var c, d, e, f, g, h, k = a.language.Qc();
        a.toolbar = new Bc(a.da.fc());
        if (a.da.get("showToolbar")) {
            a.da.get("showPickTool") && Ec(a.toolbar, "pick", k("pick-tool"), a.da.Pa + "wd-pick.png", function(c) {
                F(a.view);
                b(c) && a.rc()
            });
            a.da.get("showSquareTool") && a.toolbar.yb(a.da.Pa + "wd-box.png", k("rectangle-tool"), function(c) {
                a.view.ad(0);
                b(c) && Dg(a)
            });
            a.da.get("showRoundRectTool") && a.toolbar.yb(a.da.Pa + "wd-roundrect.png", k("rounded-rectangle-tool"), function(c) {
                a.view.ad(a.da.get("defaultRoundRectRadius"));
                b(c) && Dg(a)
            });
            a.da.get("showCircleTool") && a.toolbar.yb(a.da.Pa + "wd-circle.png", k("circle-tool"), function(c) {
                a.view.le();
                b(c) && Dg(a)
            });
            a.da.get("showShapeBrushTool") && Ec(a.toolbar, "shapebrush", k("shape-brush-tool"), a.da.Pa + "wd-shapebrush.png", function(c) {
                If(a.view, {});
                b(c) && a.rc()
            });
            a.da.Vi() && Ec(a.toolbar, "brush", k("brush-tool"), a.da.Pa + "wd-brush.png", function(c) {
                Jf(a.view, {});
                b(c) && a.rc()
            });
            a.da.get("showLineTool") && Ec(a.toolbar, "line", k("line-tool"), a.da.Pa + "wd-line.png", function(c) {
                pf(a.view, {angleArcs: a.da.get("angleArcs")});
                b(c) && a.rc()
            });
            a.da.get("showCurveTool") && Ec(a.toolbar, "curve", k("curve-tool"), a.da.Pa + "wd-curve.png", function(c) {
                of(a.view, {});
                b(c) && a.rc()
            });
            a.da.get("showArrowTool") && Ec(a.toolbar, "arrow", k("arrow-tool"), a.da.Pa + "wd-arrow.png", function(c) {
                Hf(a.view, {});
                b(c) && a.rc()
            });
            a.da.get("showTextTool") && Ec(a.toolbar, "text", k("text-tool"), a.da.Pa + "wd-text.png", function(c) {
                var d = a.view, e, f;
                "interactive" === d.da.get("textMode") ? rf(d) : (e = d.ja.Aa, f = d.cb(new B(100, 100)), f = new E(f.x, f.y), d.va([new D("TextNode", {text: d.da.options.defaultText,
                        fontSize: d.wa.fontSize, fontName: d.wa.fontName, textFillStyle: d.wa.textFillStyle, strokeStyle: d.wa.textStrokeStyle, lineWidth: d.wa.textLineWidth, layer: d.Ja}), new Q([e], f, f.inverse())]));
                b(c) && a.rc(!0)
            });
            a.da.get("showMathTool") && a.toolbar.yb(a.da.Pa + "wd-equation.png", k("math-tool"), function() {
                var b = a.view, c, d;
                F(b);
                c = b.ja.Aa;
                d = new E(100, 100);
                b.va([new D("MathNode", {mathml: "<math xmlns='http://www.w3.org/1998/Math/MathML'></math>", layer: b.Ja}), new Q([c], d, d.inverse())]);
                b.la.emit("math.edit", c)
            });
            c = function(b) {
                a.toolbar.yb(d,
                        b.name, function() {
                            a.log("Custom button %s clicked.", b.name);
                            b.onclick(a.ra)
                        })
            };
            g = 0;
            for (h = Eg.length; g < h; g++)
                e = Eg[g], f = e.name, d = e.image, a.log("add custom button %s", f), c(e);
            Dc(a.toolbar, "pick");
            a.da.options.showImageTool && a.toolbar.yb(a.da.Pa + "wd-image.png", k("image-tool"), function() {
                Gf(a.view, "logo.png")
            });
            a.da.options.showMoveToFrontBack && (a.toolbar.yb(a.da.Pa + "wd-moveup.png", k("bring-to-front"), function() {
                a.la.emit("menu.bringToFront")
            }), a.toolbar.yb(a.da.Pa + "wd-movedown.png", k("send-to-back"), function() {
                a.la.emit("menu.sendToBack")
            }));
            a.da.options.showMenu || (a.da.get("showUndoRedo") && (a.toolbar.yb(a.da.Pa + "wd-undo.png", k("undo"), function() {
                a.la.emit("menu.undo")
            }), a.toolbar.yb(a.da.Pa + "wd-redo.png", k("redo"), function() {
                a.la.emit("menu.redo")
            })), a.da.get("showCopyPaste") && (a.toolbar.yb(a.da.Pa + "wd-copy.png", k("copy"), function() {
                a.la.emit("menu.copy")
            }), a.toolbar.yb(a.da.Pa + "wd-paste.png", k("paste"), function() {
                a.la.emit("menu.paste")
            })))
        }
        a.toolbar.on("click", function() {
            a.focus("toolbar")
        });
        a.toolbar.aa.style.position = "absolute";
        a.toolbar.aa.style.left = "0";
        a.toolbar.aa.style.right = "0";
        a.aa.append(a.toolbar.aa);
        a.ra.on("tool-changed", function(b) {
            Dc(a.toolbar, b)
        });
        c = new Re;
        e = new Re;
        X(e, "New", "menu.new");
        Se(c, "File", e);
        e = new Re;
        X(e, "Undo\tCtrl+Z", "menu.undo");
        X(e, "Redo\tCtrl+Shift+Z", "menu.redo");
        Te(e);
        X(e, "Cut\tCtrl+X", "menu.cut");
        X(e, "Copy\tCtrl+C", "menu.copy");
        X(e, "Paste\tCtrl+V", "menu.paste");
        X(e, "Duplicate\tCtrl+D", "menu.duplicate");
        Te(e);
        X(e, "Delete\tDel", "menu.delete");
        Se(c, "Edit", e);
        e = new Re;
        X(e, "Raise", "menu.moveUp");
        X(e, "Lower", "menu.moveDown");
        X(e, "Raise to front", "menu.bringToFront");
        X(e, "Send to back", "menu.sendToBack");
        Te(e);
        X(e, "Group", "menu.group");
        X(e, "Break apart group", "menu.ungroup");
        Se(c, "Arrange", e);
        e = new Re;
        X(e, "No Outline", "menu.outline-none");
        X(e, "Pencil Outline", "menu.outline-pencil");
        X(e, "Pen Outline", "menu.outline-pen");
        X(e, "Marker Outline", "menu.outline-marker");
        Te(e);
        X(e, "No shadow", "menu.shadow-none");
        X(e, "Shadow", "menu.shadow");
        Te(e);
        X(e, "Draftsman", "menu.sloppiness-draftsman");
        X(e, "Artist",
                "menu.sloppiness-artist");
        X(e, "Cartoonist", "menu.sloppiness-cartoonist");
        X(e, "Child", "menu.sloppiness-child");
        X(e, "Drunk", "menu.sloppiness-drunk");
        Se(c, "Appearance", e);
        e = new Re;
        X(e, "Arial", "menu.font.Arial");
        X(e, "Times New Roman", "menu.font.Times New Roman");
        Se(c, "Font", e);
        e = new Re;
        X(e, "Force redraw", "menu.force-redraw");
        Te(e);
        X(e, "Rebuild document", "menu.rebuild-doc");
        X(e, "Show/Hide Debug Panel", "menu.toggle-debug");
        X(e, "dump", "menu.dump");
        Se(c, "Debug", e);
        a.Tc = new Wf(c, a.la);
        a.aa.append(a.Tc.aa);
        a.Tc.moveTo(0, 0);
        a.la.bind("menu.new", function() {
            a.Me()
        });
        a.la.bind("menu.force-redraw", function() {
            a.view.update(!0)
        });
        a.la.bind("menu.remove-cookie", function() {
            var a = "cookieid", b = "", c;
            c = new Date;
            c.setTime(c.getTime() + -1E3);
            a = encodeURIComponent(a);
            b = encodeURIComponent(b);
            a = "" + a + "=" + b + "; expires=" + c.toGMTString() + "; path=/";
            Qa("Set document.cookie=%s", a);
            document.cookie = a
        });
        a.la.bind("menu.rebuild-doc", function() {
            for (var b = a.view.ja; b.Na.eb(b); )
                ;
            if (b.root.children.length)
                throw"Error: There should be 0 children length.";
            if (1 !== b.Aa)
                throw"Error: nextId should be 1";
            for (; b.Na.Za(b); )
                ;
        });
        a.la.bind("menu.toggle-debug", function() {
            a.Jc = !a.Jc;
            var b = a.Jc, c;
            c = Xe();
            b ? c.debug = "1" : delete c.debug;
            var d, e;
            e = [];
            b = !0;
            for (d in c)
                c.hasOwnProperty(d) && (b || e.push("&"), b = !1, e.push(encodeURIComponent(d)), "" !== c[d] && (e.push("="), e.push(encodeURIComponent(c[d]))));
            window.location.hash = e.join("");
            a.bd()
        });
        a.la.bind("menu.dump", function() {
            window.console.log(tg(a.view.ja.root))
        });
        a.la.bind("math.edit", function(b) {
            a.ra && (a.log("Starting equation editor"),
                    a.ra.emit("math.edit", b))
        });
        a.la.bind("selected-nodes", function() {
            a.ra && a.ra.emit("selected-nodes")
        });
        a.la.bind("node-clicked", function(b) {
            a.ra && a.ra.emit("node-clicked", b)
        });
        a.la.bind("hint", function(b) {
            a.ra && a.ra.emit("hint", b)
        });
        a.la.bind("convert-dom-request", function(b, c) {
            a.ra && a.ra.emit("convert-dom-request", c, b)
        })
    }
    function vg(a) {
        a.log("Local document changed.");
        a.ra.emit("document-changed")
    }
    function wg(a) {
        a.da.options.sloppy || Mf(a.view, "sloppiness", 0);
        var b;
        b = ("" + a.da.options.defaultSmoothness).toLowerCase();
        Mf(a.view, "smoothness", "sharpest" === b ? 0 : "sharper" === b ? 0.1 : "sharp" === b ? 0.2 : "smoothest" === b ? 0.5 : 0.3);
        Mf(a.view, "fillStyle", a.da.options.defaultFillStyle);
        Mf(a.view, "strokeStyle", a.da.options.defaultStrokeStyle);
        Mf(a.view, "fontName", a.da.options.defaultFont);
        Mf(a.view, "fontSize", a.da.options.defaultFontSize);
        Mf(a.view, "lineWidth", a.da.options.defaultLineWidth);
        Mf(a.view, "textFillStyle",
                a.da.options.defaultTextFillStyle)
    }
    function Ag(a) {
        var b, c, d, e, f;
        a.canvas[0].getContext("2d");
        e = a.da.options.fonts;
        f = [];
        c = 0;
        for (d = e.length; c < d; c++)
            b = e[c], a.log("Preloading: %s", b), b = p("<div>").$("font-family", b).text("abcd"), b.$("color", "transparent"), f.push(a.aa.append(b))
    }
    ;
    function Z(a, b) {
        this.Ma = {};
        this.Od = !1;
        this.Oa = [];
        this.Vc = 0;
        this.fa = new ug(this, a, b);
        Fg(this)
    }
    Z.prototype = {log: x("CONTEXT"), Dh: function() {
            this.Od = !1;
            this.Oa = []
        }, of: function(a) {
            this.fa.language.of(a)
        }, Eh: function() {
            return this.Pd(this.zc())
        }, Cg: function() {
            this.Oa = [];
            this.Vc = 0;
            this.Od = !0
        }, qe: function() {
            this.fa.view.qe()
        }, dd: function() {
            return this.fa.view.ja.dd()
        }, ed: function() {
            return this.fa.view.ja.ed()
        }, ob: function() {
            this.fa.view.ob();
            S(this.fa.view);
            this.fa.view.ka()
        }, Jh: function() {
            Qe(this.fa.view.ja)
        }, Kh: function(a, b) {
            this.fa.view.oc(a, b)
        }, Lh: function() {
            this.fa.view.va(this.Oa, !0);
            this.Od =
                    !1;
            this.Oa = [];
            this.Vc = 0
        }, ue: function() {
            this.fa.view.va(this.Oa);
            this.Od = !1;
            this.Oa = [];
            this.Vc = 0
        }, copy: function(a) {
            return this.fa.view.copy(a)
        }, gd: function(a) {
            return $(this, this.fa.gd(this.Oa, a))
        }, createNode: function(a, b) {
            return $(this, this.fa.createNode(this.Oa, a, b))
        }, we: function(a) {
            return $(this, this.fa.we(this.Oa, a))
        }, Oh: function(a, b) {
            "string" === typeof b && (b = p("#" + b));
            if ("PageSelector" === a) {
                this.log("Creating page selector");
                var c = new Lb(b, !1, !1);
                Pb(c, !0);
                Ob(c, this);
                Nb(c)
            } else
                return this.Ob("Cannot create UI Elemment %s",
                        a), !1;
            return!0
        }, zf: function(a) {
            return $(this, this.fa.zf(this.Oa, a))
        }, Ph: function() {
            var a = this.fa.view.copy(!1);
            this.Hg();
            return a
        }, Cf: function(a) {
            this.Fg(a)
        }, Fg: function(a) {
            return $(this, this.fa.Cf(this.Oa, a))
        }, Gg: function() {
            if (1 === this.zc())
                this.log("Cannot remove all the pages.");
            else {
                var a = this.fa.view.ja;
                this.Oa.push(new ue([a.gb[a.Ab].id]));
                $(this)
            }
        }, Hg: function() {
            Bf(this.fa.view)
        }, Df: function() {
            if (1 === arguments.length && !1 === arguments[0]) {
                var a = this.fa.view.ja;
                a.kh = a.Na.next
            }
            return this.fa.view.ja.Df()
        },
        Th: function(a, b) {
            var c;
            if ("pdf" === a || "svg" === a || "png" === a) {
                ("pdf" === a || "svg" === a) && "Blob"in window ? (c = this.fa.view.ja.save(a, "blob"), c = window.URL.createObjectURL(c)) : c = "png" === a ? this.save("png") : this.fa.view.ja.save(a, "data-uri");
                var d = document.createElement("a");
                d.innerHTML = "download";
                d.setAttribute("href", c);
                d.setAttribute("download", b);
                d.style.display = "none";
                document.body.appendChild(d);
                d.click();
                setTimeout(function() {
                    document.body.removeChild(d)
                }, 100)
            } else
                this.log("unsupported format for download: %s",
                        a)
        }, ka: function(a, b) {
            b = b || {};
            var c = b.page || 0, d = this.fa.view.ja.Ab, e = Le(this.fa.view.ja);
            this.fa.view.ja.wb(c);
            Ef(this.fa.view, a, 0, 0, e.width, e.height);
            this.fa.view.ja.ka(a);
            this.fa.view.ja.wb(d)
        }, duplicate: function() {
            this.fa.view.duplicate()
        }, emit: function(a, b) {
            var c, d = this;
            this.Ma || (this.Ma = {});
            c = Array.prototype.slice.call(arguments, 1);
            setTimeout(function() {
                var b, f, g, h;
                if (a in d.Ma)
                    for (h = d.Ma[a], f = 0, g = h.length; f < g; f++)
                        b = h[f], b.apply(null, c)
            }, 0);
            return this
        }, Vh: function(a) {
            a = this.Jg(a);
            return a.length ?
                    a[0] : null
        }, Jg: function(a) {
            var b = this.fa.view.ja, c = [], d;
            for (d in b.za)
                if (b.za.hasOwnProperty(d)) {
                    var e = b.za[d];
                    e.qa("tag") === a && c.push(e)
                }
            a = [];
            for (b = 0; b < c.length; b++)
                a.push(c[b].id);
            return a
        }, Wh: function(a) {
            var b = this.fa.view;
            a = a / 180 * Math.PI;
            0 === b.selection.length && null === b.Fa || b.log("flipSelection: selection is empty");
            var c;
            c = b.ld();
            if (0 === c.length)
                c = new B(0, 0);
            else {
                for (var d = c[0].ub().La(), e = 1; e < c.length; e++)
                    Qc(d, c[e].ub());
                c = Oc(d)
            }
            a = new Tc(a, c.x, c.y);
            b.va([new Q(Y(b), a, a.inverse())])
        }, Id: function() {
            return this.fa.view.Id()
        },
        Mg: function(a) {
            var b = [];
            this.fa.view.ja.Bb(!a, function(a) {
                b.push(a.id)
            });
            return b
        }, Mf: function() {
            return this.fa.Mf()
        }, Nf: function(a) {
            return Gg(this.fa.view.Nf(a))
        }, kd: function() {
            return this.fa.view.ja.Ab
        }, Yh: function(a, b) {
            var c = z(this.fa.view, a, b);
            return{x: c.x, y: c.y}
        }, Of: function() {
            var a = Le(this.fa.view.ja);
            return{x: a.x, y: a.y, width: a.width, height: a.height}
        }, Zh: function() {
            return Gg(this.fa.view.ja.ub())
        }, ai: function(a, b) {
            return this.Ee(a, b)
        }, ci: function() {
            var a = [], b = {}, c;
            this.fa.view.ja.Bb(!1, function(d) {
                !(c =
                        Md(d)) || c in b || (b[c] = 1, a.push(c))
            });
            c = this.Id();
            c in b || a.push(c);
            return a
        }, bi: function(a) {
            var b = [];
            this.fa.view.ja.Bb(!1, function(c) {
                Md(c) === a && b.push(c.id)
            });
            return b
        }, Ee: function(a, b) {
            return this.fa.Ee(a, b)
        }, di: function(a) {
            var b = V(this.fa.view.ja, a);
            null === b && this.Ob("Error: node %s does not exist", a);
            a = b.ub();
            return{x: a.x, y: a.y, width: a.width, height: a.height}
        }, Pf: function(a) {
            return this.fa.Pf(a)
        }, zc: function() {
            return this.fa.view.ja.zc()
        }, Qf: function(a) {
            a = V(this.fa.view.ja, a);
            if ("PathNode" !==
                    a.type())
                return null;
            a = bd(a.Qf().La());
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                b.push(d.x);
                b.push(d.y)
            }
            return b
        }, Ah: function() {
            this.fa.view.nb = this.fa.nb;
            this.fa.Bh = !0;
            return this.fa.nb.aa[0]
        }, ei: function(a, b, c, d) {
            var e;
            e = Bd(this.fa.view, a, b);
            if (void 0 === c)
                return{x: e.x, y: e.y};
            a = Bd(this.fa.view, a + c, b + d);
            return Gg(new M(e.x, e.y, a.x - e.x, a.y - e.y))
        }, ld: function(a) {
            return Y(this.fa.view, a)
        }, gi: function() {
            return Gg(Df(this.fa.view))
        }, Ob: function(a, b) {
            for (var c = arguments[0].split("%s"), d = [], e = 0; e < c.length; e++)
                d.push(c[e]),
                        e < c.length - 1 && d.push(JSON.stringify(arguments[e + 1]));
            this.log(d.join(""));
            throw{message: d, toString: function() {
                    return d
                }};
        }, Pd: function(a) {
            var b = this.fa.view.ja.Aa;
            this.Oa.push(new D("PageNode", {}, this.fa.view.ja.root.id, a));
            $(this, b);
            return a
        }, Vf: function(a) {
            return this.fa.view.ja.Vf(a)
        }, load: function(a, b) {
            1 === arguments.length && (b = arguments[0], a = "zwibbler3");
            var c;
            "list" === a ? (this.fa.xd(sg(b)), c = void 0) : c = this.fa.xd(qg(b));
            return c
        }, Ke: function() {
            this.fa.view.Ke()
        }, Le: function() {
            this.fa.view.Le()
        },
        Me: function() {
            this.fa.Me();
            Fg(this)
        }, nextPage: function() {
            this.fe(Math.min(this.kd() + 1, this.zc() - 1))
        }, on: function(a, b) {
            a in this.Ma ? this.Ma[a].push(b) : this.Ma[a] = [b];
            return this
        }, wi: function(a) {
            "function" === typeof a || this.Ob("Error: onComplete needs a function argument.");
            var b = this.fa.view;
            b.rb.Vb ? (b.log("Formatting in progress; will call function soon"), Ib(b.rb, a)) : (b.log("Format already done; call function in 1 tick"), setTimeout(a, 0))
        }, Qe: function(a) {
            this.fa.view.Qe(a)
        }, Hi: function() {
            this.fe(Math.max(this.kd() -
                    1, 0))
        }, Za: function() {
            this.fa.la.emit("menu.redo")
        }, resize: function() {
            var a = this;
            setTimeout(function() {
                a.fa.bd(!0)
            }, 1)
        }, save: function(a) {
            a = a || "zwibbler3";
            switch (a) {
                case "list":
                    return pg(this.fa.view.ja.root);
                case "png":
                    return Cg(this.fa);
                case "zwibbler3":
                    return this.fa.view.ja.save("zwibbler3", "string");
                case "svg":
                case "pdf":
                    return this.fa.view.ja.save(a, "string");
                case "image/png":
                    var b = Cg(this.fa), b = b.substr(b.indexOf(",") + 1);
                    a = ["base64"];
                    for (var c = 0; c < a.length; c++)
                        b = ea[a[c]](b);
                    return b;
                default:
                    return"Unsupported format: " +
                    a
                }
        }, We: function() {
            this.fa.view.We()
        }, Xe: function(a) {
            this.fa.view.Xe(a)
        }, Mi: function(a) {
            var b = this.fa, c, d, e, f;
            b.Pb.clear();
            f = [];
            d = 0;
            for (e = a.length; d < e; d++)
                c = a[d], "string" === typeof c ? f.push(Uf(b.Pb, c, c)) : f.push(Uf(b.Pb, c.small, c.large))
        }, Ni: function(a, b) {
            return this.fa.da.set(a, b)
        }, fe: function(a) {
            this.fa.view.wb(a)
        }, og: function(a) {
            this.fa.view.og(a)
        }, yd: function(a, b) {
            !w(a) && null !== a || !w(b) && null !== b ? alert("setDocumentSize: width/height must be numbers") : this.fa.view.yd(a, b)
        }, oh: function(a, b) {
            !w(a) &&
                    null !== a || !w(b) && null !== b ? alert("setDocumentSize: width/height must be numbers") : $(this, this.fa.view.yd(a, b, this.Oa))
        }, Oi: function(a, b) {
            var c = V(this.fa.view.ja, a);
            c || this.Ob("setDomElement: Node %s does not exist", a);
            "DomNode" !== c.type() && this.Ob("setDomElement: Node %s is not a DomNode. It is %s", a, c.type());
            c.ph(b);
            this.fa.ye.push(b)
        }, Ri: function(a, b) {
            ia(a) && ia(b) ? (this.Id() === a && this.Xe(b), this.fa.view.ja.Bb(!1, function(c) {
                Md(c) === a && c.setProperty("layer", b)
            })) : this.Ob("setLayerName() needs string arguments.")
        },
        qh: function(a) {
            var b = null, c = null, d, e = !0, f = !1;
            if (2 === arguments.length)
                w(arguments[0]) && w(arguments[1]) ? (d = arguments[0], b = arguments[1]) : ia(arguments[0]) && "boolean" === typeof arguments[1] ? (c = arguments[0], f = arguments[1]) : e = !1;
            else if (1 === arguments.length && ia(arguments[0]))
                for (var g = arguments[0].split(" "), h = 0; h < g.length; h++)
                    "landscape" === g[h] ? f = !0 : "portrait" === g[h] ? f = !1 : c = g[h];
            if (!1 === e)
                return this.log("Bad arguments to setPaperSize()."), !1;
            if (null === c)
                return this.yd(d, b), !0;
            switch (c) {
                case "letter":
                    d =
                            816;
                    b = 1056;
                    break;
                case "legal":
                    d = 816;
                    b = 1344;
                    break;
                case "11x17":
                    d = 1056;
                    b = 1632;
                    break;
                case "tabloid":
                    d = 1056;
                    b = 1632;
                    break;
                case "a0":
                    d = 841 / 25.4 * 96;
                    b = 1189 / 25.4 * 96;
                    break;
                case "a1":
                    d = 594 / 25.4 * 96;
                    b = 841 / 25.4 * 96;
                    break;
                case "a2":
                    d = 420 / 25.4 * 96;
                    b = 594 / 25.4 * 96;
                    break;
                case "a3":
                    d = 297 / 25.4 * 96;
                    b = 420 / 25.4 * 96;
                    break;
                case "a4":
                    d = 210 / 25.4 * 96;
                    b = 297 / 25.4 * 96;
                    break;
                case "none":
                    b = d = null;
                    break;
                default:
                    return this.log("Invalid paper size: %s", c), !1
            }
            f && (c = d, d = b, b = c);
            this.yd(d, b);
            return!0
        }, Pi: function(a) {
            var b = this.fa, c, d, e, f;
            b.Ib.clear();
            f = [];
            d = 0;
            for (e = a.length; d < e; d++)
                c = a[d], "string" === typeof c ? f.push(Uf(b.Ib, c, c)) : f.push(Uf(b.Ib, c.small, c.large))
        }, Qi: function(a, b, c) {
            this.Ye(a, b, c)
        }, qg: function(a, b) {
            if (2 !== arguments.length)
                throw"Error: setNodeProperties takes 2 arguments.";
            return $(this, this.fa.qg(this.Oa, a, b))
        }, Ye: function(a, b, c) {
            return $(this, this.fa.Ye(this.Oa, a, b, c))
        }, rg: function(a) {
            this.fa.view.rg(a)
        }, Ti: function(a) {
            "object" === typeof a && w(a.x) && w(a.y) && w(a.width) && w(a.height) || this.Ob("setViewRect: arg must be an object with numeric x, y, width, height properties");
            0 !== a.width && 0 !== a.height || this.Ob("setViewRect: width and height must be non-zero.");
            var b = this.fa.view;
            a = new M(a.x, a.y, a.width, a.height);
            b.log("setViewRect(%s)", a);
            var c = Math.min(b.canvas.width / a.width, b.canvas.height / a.height), d = a.y * c;
            b.Ka = -(a.x * c);
            b.Ia = -d;
            b.scale = c;
            b.Tb = "none";
            G(b);
            b.ka()
        }, Ui: function(a) {
            w(a) || "page" === a || "width" === a ? this.fa.view.zoom(a) : this.log("setZoom: invalid parameter.")
        }, ge: function(a, b) {
            this.fa.view.ge(a, b)
        }, cf: function(a, b, c) {
            this.log("Translate node %s by %s,%s actions=%s",
                    a, b, c, this.Oa.length);
            return $(this, this.fa.cf(this.Oa, a, b, c))
        }, Ki: function(a) {
            var b = Math.round(a / (Math.PI / 2));
            a = b * Math.PI / 2;
            var b = 0 === b % 2, c = this.Mg(!0), d = this.Of(), e = d.width / 2, f = d.height / 2;
            this.Cg();
            for (var g = 0; g < c.length; g++)
                this.jh(c[g], a, e, f), b || this.cf(c[g], f - e, e - f);
            b || this.oh(d.height, d.width);
            this.ue()
        }, jh: function(a, b, c, d) {
            this.log("Rotate node %s by %s around (%s,%s) actions=%s", a, b / Math.PI * 180, c, d, this.Oa.length);
            var e = V(this.fa.view.ja, a);
            null === e && this.Ob("rotateNode: Node %s doesn't exist",
                    a);
            4 > arguments.length && (e = Oc(e.ub()), c = e.x, d = e.y);
            return $(this, this.fa.transformNode(this.Oa, a, new Sc(b, c, d)))
        }, mg: function(a, b, c) {
            this.log("Scale node %s by %s,%s actions=%s", a, b, c, this.Oa.length);
            return $(this, this.fa.mg(this.Oa, a, b, c))
        }, eb: function() {
            this.fa.la.emit("menu.undo")
        }, ke: function(a) {
            return $(this, this.fa.ke(this.Oa, a))
        }, upload: function(a, b) {
            function c() {
            }
            function d() {
            }
            var e = new Ue(this.fa.ig, b || "Working"), f = new XMLHttpRequest, g = new FormData(a);
            f.upload.addEventListener("progress",
                    function(a) {
                        e.update(a.loaded / a.total)
                    }, !1);
            f.addEventListener("load", function() {
                e.aa.remove();
                d(f.response, f)
            }, !1);
            f.addEventListener("error", function() {
                e.error("Error");
                c(f, f)
            }, !1);
            f.addEventListener("abort", function() {
                e.error("Aborted");
                c(f)
            }, !1);
            f.open(a.method, a.action);
            f.send(g);
            var h = {success: function(a) {
                    d = a;
                    return h
                }, error: function(a) {
                    c = a;
                    return h
                }};
            return h
        }, kj: function(a) {
            Hf(this.fa.view, a)
        }, lj: function(a, b) {
            2 === arguments.length ? Jf(this.fa.view, {lineWidth: b, strokeStyle: a}) : Jf(this.fa.view,
                    arguments[0] || {})
        }, mj: function() {
            this.fa.view.le()
        }, nj: function(a) {
            of(this.fa.view, a)
        }, le: function() {
            this.fa.view.le()
        }, oj: function(a, b) {
            var c = this.fa.view, d = {strokeStyle: a, lineWidth: b};
            c.da.get("readOnly") ? c.log("readOnly mode: Ignoring tool click.") : (d.lineWidth = d.lineWidth || c.Hd, d.strokeStyle = d.strokeStyle || c.Nc, C(c, new Vd(c, c.pa, d, "freehand")), c.ra.emit("tool-changed", "freehand"))
        }, wj: function(a) {
            var b = this.fa.view;
            C(b, new hb(b, a))
        }, pj: function(a) {
            pf(this.fa.view, a)
        }, qj: function() {
            var a = this.fa.view;
            a.ra.emit("tool-changed", "pan");
            C(a, new ib(a))
        }, rj: function() {
            F(this.fa.view)
        }, vg: function(a, b) {
            this.fa.view.vg(a, b)
        }, ad: function() {
            this.fa.view.ad(0)
        }, sj: function() {
            this.fa.view.ad(this.fa.da.get("defaultRoundRectRadius"))
        }, tj: function(a, b) {
            If(this.fa.view, {strokeStyle: a, lineWidth: b})
        }, vj: function(a) {
            var b = this.fa.view;
            b.da.get("readOnly") ? b.log("readOnly mode: Ignoring tool click.") : (C(b, new qe(b, "stampline", a)), b.ra.emit("tool-changed", "stampline"))
        }, uj: function() {
            this.fa.view.ad(0)
        }, xj: function() {
            rf(this.fa.view)
        },
        ff: function() {
            this.fa.view.ff()
        }, gf: function() {
            this.fa.view.gf()
        }};
    function Fg(a) {
        var b = a.fa.da.get("defaultPaperSize");
        a.log("onNewDocument()");
        "none" !== b && a.qh(b)
    }
    function Gg(a) {
        return{x: a.x, y: a.y, width: a.width, height: a.height}
    }
    function $(a, b) {
        if (!a.Od)
            return a.log("Not in a transaction. committing immediately. id=%s", b), a.ue(), b;
        if ("number" === typeof b)
            return a.Vc += 1, a.log("id=%s numCreated=%s", b, a.Vc), b + a.Vc - 1
    }
    ;
    "jQuery"in window && (window.jQuery.fn.zwibbler = function(a) {
        a = a || {};
        var b = null;
        this.each(function(c, d) {
            d.zwibbler && p(d).empty();
            b = new Z(p(d), a);
            d.zwibbler = b
        });
        return b
    }, window.jQuery.fn.zwibblerContext = function() {
        return this[0].zwibbler
    });
    var Eg = [], Zd = {};
    window.Zwibbler = {create: function(a, b) {
            var c = document.getElementById(a);
            return null === c ? (alert("Zwibbler.create: Cannot find an element with id " + a), null) : new Z(p(c), b)
        }, addButton: function(a) {
            for (var b = ["name", "image", "onclick"], c = 0; c < b.length; c++)
                if (!(b[c]in a))
                    return alert("Zwibbler.addButton: missing " + b[c]), !1;
            Eg.push(a);
            return!0
        }, addCustomNode: function(a, b) {
            Zd[a] = b
        }, Dialog: function(a, b) {
            function c(a) {
                ia(a) && "#" !== a.charAt(0) && "." !== a.charAt(0) && (a = "#" + a);
                return p(a)
            }
            var d = c(a);
            b = b || {};
            var e = Pa(d[0]),
                    f = new aa("rgba(0,0,0,0.0)");
            d.$("z-index", "" + e);
            f.zIndex = e;
            f.insertBefore = d;
            var g = b.showNear, h = b.showHow, k = {hide: function() {
                    f.Ra();
                    d.Ra();
                    if (k.onhide)
                        k.onhide()
                }, show: function(a, b) {
                    a = a || g;
                    b = b || h;
                    d.show();
                    var e = d.width(), r = d.height();
                    if (a && b) {
                        var e = c(a), r = b, s = e.offset(), r = r.toLowerCase().split(" ");
                        2 !== r.length && (r = ["tl", "tl"]);
                        0 <= r[0].indexOf("b") && (s.top += e.outerHeight());
                        0 <= r[0].indexOf("r") && (s.left += e.outerWidth());
                        0 <= r[1].indexOf("b") && (s.top -= d.outerHeight());
                        0 <= r[1].indexOf("r") && (s.left -=
                                d.outerWidth());
                        d.$("position", "absolute");
                        d.offset(s)
                    } else
                        d.$("left", "50%"), d.$("top", "50%"), d.$("margin-left", "" + -e / 2 + "px"), d.$("margin-top", "" + -r / 2 + "px");
                    f.show(k.hide);
                    if (k.onshow)
                        k.onshow()
                }, onshow: b.onshow, onhide: b.onhide};
            return k
        }, ColourWheel: function(a, b) {
            a = p(a)[0];
            var c = new sc(a, b), d = new K;
            c.fg = function(a) {
                d.emit("change", a)
            };
            return{on: function(a, b) {
                    d.on(a, b)
                }, colour: function() {
                    if (arguments.length)
                        uc(c, arguments[0]);
                    else
                        return c.bb.toString()
                }}
        }, SlidingPanel: function(a, b) {
            b = b || {};
            var c =
                    b.autohide, d;
            d = "string" === typeof a ? p("#" + a) : p(a);
            var e = new Jb(d);
            if (b.onshow)
                e.on("show", b.onshow);
            if (b.onhide)
                e.on("hide", b.onhide);
            return{show: function(a) {
                    e.show(a, c)
                }, hide: function() {
                    e.Ra()
                }}
        }, createPreview: function(a, b) {
            return window.Zwibbler.render(a, b)
        }, render: function(a, b) {
            function c() {
                var a = q.ub(), b = 1, c = 0, r = 0;
                f && (a.y = f);
                k && (a.height = k - a.y);
                g && (a.x = g);
                h && (a.width = h - a.x);
                d && e ? b = Math.min(d / a.width, e / a.height) : d ? (b = d / a.width, e = a.height * b) : e ? (b = e / a.height, d = a.width * b) : (d = a.width, e = a.height);
                a.width *
                        b < d && (c = d / 2 - a.width * b / 2);
                a.height * b < e && (r = e / 2 - a.height * b / 2);
                c -= a.x * b;
                r -= a.y * b;
                l.width = Math.ceil(d);
                l.height = Math.ceil(e);
                m.translate(c, r);
                m.scale(b, b);
                q.ka(m)
            }
            b = b || {};
            var d = b.width || 0, e = b.height || 0, f = b.top || 0, g = b.left || 0, h = b.right || 0, k = b.bottom || 0, l = La(null), m = l.getContext("2d"), q = qg(a), r = new Tb;
            q.sa(m, r);
            r.on("reformat", function(a) {
                wd(q, a.id)
            });
            if (r.Vb)
                r.on("done", function() {
                    q.sa(m, r);
                    c()
                });
            else
                c();
            return l
        }, parseColour: function(a) {
            a = lc(a);
            return{r: a.ha[0], g: a.ha[1], b: a.ha[2], a: a.ha[3]}
        }, makeColour: function(a) {
            return(new L(hc,
                    [a.r, a.g, a.b, a.a])).toString()
        }, getAbsoluteUrl: function(a) {
            var b = document.createElement("a");
            b.href = a;
            return b.href
        }, base64Encode: function(a) {
            return fa(a)
        }, Qb: new fc, addFont: function(a, b) {
            window.Zwibbler.Qb.add(a, b)
        }};
    $d.prototype.setElement = $d.prototype.ph;
    Z.prototype.abortTransaction = Z.prototype.Dh;
    Z.prototype.addToLanguage = Z.prototype.of;
    Z.prototype.addPage = Z.prototype.Eh;
    Z.prototype.beginTransaction = Z.prototype.Cg;
    Z.prototype.bringToFront = Z.prototype.qe;
    Z.prototype.canRedo = Z.prototype.dd;
    Z.prototype.canUndo = Z.prototype.ed;
    Z.prototype.clearSelection = Z.prototype.ob;
    Z.prototype.clearUndo = Z.prototype.Jh;
    Z.prototype.clickColour = Z.prototype.Kh;
    Z.prototype.commitIrreversibleTransaction = Z.prototype.Lh;
    Z.prototype.commitTransaction = Z.prototype.ue;
    Z.prototype.copy = Z.prototype.copy;
    Z.prototype.createGroup = Z.prototype.gd;
    Z.prototype.createNode = Z.prototype.createNode;
    Z.prototype.createPath = Z.prototype.we;
    Z.prototype.createUiElement = Z.prototype.Oh;
    Z.prototype.createShape = Z.prototype.zf;
    Z.prototype.cut = Z.prototype.Ph;
    Z.prototype.deleteNode = Z.prototype.Cf;
    Z.prototype.deleteNodes = Z.prototype.Fg;
    Z.prototype.deletePage = Z.prototype.Gg;
    Z.prototype.deleteSelection = Z.prototype.Hg;
    Z.prototype.dirty = Z.prototype.Df;
    Z.prototype.download = Z.prototype.Th;
    Z.prototype.draw = Z.prototype.ka;
    Z.prototype.duplicate = Z.prototype.duplicate;
    Z.prototype.findNode = Z.prototype.Vh;
    Z.prototype.findNodes = Z.prototype.Jg;
    Z.prototype.flip = Z.prototype.Wh;
    Z.prototype.getActiveLayer = Z.prototype.Id;
    Z.prototype.getAllNodes = Z.prototype.Mg;
    Z.prototype.getBackgroundImage = Z.prototype.Mf;
    Z.prototype.getBoundingRectangle = Z.prototype.Nf;
    Z.prototype.getCurrentPage = Z.prototype.kd;
    Z.prototype.getDocumentCoordinates = Z.prototype.Yh;
    Z.prototype.getDocumentSize = Z.prototype.Of;
    Z.prototype.getDrawingRectangle = Z.prototype.Zh;
    Z.prototype.getItemProperty = Z.prototype.ai;
    Z.prototype.getLayers = Z.prototype.ci;
    Z.prototype.getLayerNodes = Z.prototype.bi;
    Z.prototype.getNodeProperty = Z.prototype.Ee;
    Z.prototype.getNodeRectangle = Z.prototype.di;
    Z.prototype.getNodeType = Z.prototype.Pf;
    Z.prototype.getPageCount = Z.prototype.zc;
    Z.prototype.getPathData = Z.prototype.Qf;
    Z.prototype._getPropertyPanelElement = Z.prototype.Ah;
    Z.prototype.getScreenCoordinates = Z.prototype.ei;
    Z.prototype.getSelectedNodes = Z.prototype.ld;
    Z.prototype.getViewRectangle = Z.prototype.gi;
    Z.prototype.insertPage = Z.prototype.Pd;
    Z.prototype.isLayerVisible = Z.prototype.Vf;
    Z.prototype.load = Z.prototype.load;
    Z.prototype.moveDown = Z.prototype.Ke;
    Z.prototype.moveUp = Z.prototype.Le;
    Z.prototype.newDocument = Z.prototype.Me;
    Z.prototype.nextPage = Z.prototype.nextPage;
    Z.prototype.on = Z.prototype.on;
    Z.prototype.onComplete = Z.prototype.wi;
    Z.prototype.paste = Z.prototype.Qe;
    Z.prototype.previousPage = Z.prototype.Hi;
    Z.prototype.redo = Z.prototype.Za;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.save = Z.prototype.save;
    Z.prototype.sendToBack = Z.prototype.We;
    Z.prototype.setActiveLayer = Z.prototype.Xe;
    Z.prototype.setBackgroundBrowserImages = Z.prototype.Mi;
    Z.prototype.setConfig = Z.prototype.Ni;
    Z.prototype.setCurrentPage = Z.prototype.fe;
    Z.prototype.setCustomBackgroundFn = Z.prototype.og;
    Z.prototype.setDocumentSize = Z.prototype.yd;
    Z.prototype.setDocumentSizeInTransaction = Z.prototype.oh;
    Z.prototype.setDomElement = Z.prototype.Oi;
    Z.prototype.setLayerName = Z.prototype.Ri;
    Z.prototype.setPaperSize = Z.prototype.qh;
    Z.prototype.setIconBrowserImages = Z.prototype.Pi;
    Z.prototype.setItemProperty = Z.prototype.Qi;
    Z.prototype.setNodeProperties = Z.prototype.qg;
    Z.prototype.setNodeProperty = Z.prototype.Ye;
    Z.prototype.setPageView = Z.prototype.rg;
    Z.prototype.setViewRectangle = Z.prototype.Ti;
    Z.prototype.setZoom = Z.prototype.Ui;
    Z.prototype.showLayer = Z.prototype.ge;
    Z.prototype.translateNode = Z.prototype.cf;
    Z.prototype.rotateDocument = Z.prototype.Ki;
    Z.prototype.rotateNode = Z.prototype.jh;
    Z.prototype.scaleNode = Z.prototype.mg;
    Z.prototype.undo = Z.prototype.eb;
    Z.prototype.ungroup = Z.prototype.ke;
    Z.prototype.upload = Z.prototype.upload;
    Z.prototype.useArrowTool = Z.prototype.kj;
    Z.prototype.useBrushTool = Z.prototype.lj;
    Z.prototype.useCircleTool = Z.prototype.mj;
    Z.prototype.useCurveTool = Z.prototype.nj;
    Z.prototype.useEllipseTool = Z.prototype.le;
    Z.prototype.useFreehandTool = Z.prototype.oj;
    Z.prototype.useStampTool = Z.prototype.wj;
    Z.prototype.useLineTool = Z.prototype.pj;
    Z.prototype.usePanTool = Z.prototype.qj;
    Z.prototype.usePickTool = Z.prototype.rj;
    Z.prototype.usePolygonTool = Z.prototype.vg;
    Z.prototype.useRectangleTool = Z.prototype.ad;
    Z.prototype.useRoundRectTool = Z.prototype.sj;
    Z.prototype.useShapeBrushTool = Z.prototype.tj;
    Z.prototype.useStampLineTool = Z.prototype.vj;
    Z.prototype.useSquareTool = Z.prototype.uj;
    Z.prototype.useTextTool = Z.prototype.xj;
    Z.prototype.zoomIn = Z.prototype.ff;
    Z.prototype.zoomOut = Z.prototype.gf;
    ug.prototype.emit = ug.prototype.emit;
    ug.prototype.createGroup = ug.prototype.gd;

})();