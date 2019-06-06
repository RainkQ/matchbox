var WOW;
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [], i = e.document, o = Object.getPrototypeOf, r = n.slice, a = n.concat, s = n.push, l = n.indexOf, c = {},
        u = c.toString, d = c.hasOwnProperty, h = d.toString, f = h.call(Object), p = {}, g = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, m = function (e) {
            return null != e && e === e.window
        }, v = {type: !0, src: !0, nonce: !0, noModule: !0};

    function y(e, t, n) {
        var o, r, a = (n = n || i).createElement("script");
        if (a.text = e, t) for (o in v) (r = t[o] || t.getAttribute && t.getAttribute(o)) && a.setAttribute(o, r);
        n.head.appendChild(a).parentNode.removeChild(a)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }

    var x = "3.4.0", w = function (e, t) {
        return new w.fn.init(e, t)
    }, k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function C(e) {
        var t = !!e && "length" in e && e.length, n = b(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    w.fn = w.prototype = {
        jquery: x, constructor: w, length: 0, toArray: function () {
            return r.call(this)
        }, get: function (e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return w.each(this, e)
        }, map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(r.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: s, sort: n.sort, splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) i = e[t], "__proto__" !== t && a !== i && (c && i && (w.isPlainObject(i) || (o = Array.isArray(i))) ? (n = a[t], r = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}, o = !1, a[t] = w.extend(c, r, i)) : void 0 !== i && (a[t] = i));
        return a
    }, w.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = o(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || h.call(n) !== f))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e, t) {
            y(e, {nonce: t && t.nonce})
        }, each: function (e, t) {
            var n, i = 0;
            if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(k, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        }, grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var i, o, r = 0, s = [];
            if (C(e)) for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o); else for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return a.apply([], s)
        }, guid: 1, support: p
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var S = function (e) {
        var t, n, i, o, r, a, s, l, c, u, d, h, f, p, g, m, v, y, b, x = "sizzle" + 1 * new Date, w = e.document, k = 0,
            C = 0, S = le(), _ = le(), T = le(), E = le(), A = function (e, t) {
                return e === t && (d = !0), 0
            }, D = {}.hasOwnProperty, I = [], P = I.pop, M = I.push, O = I.push, L = I.slice, N = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]", j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            $ = "\\[" + R + "*(" + j + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + R + "*\\]",
            H = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            W = new RegExp(R + "+", "g"), B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            V = new RegExp("^" + R + "*," + R + "*"), z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            q = new RegExp(R + "|>"), Y = new RegExp(H), U = new RegExp("^" + j + "$"), X = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            }, K = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"), ne = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function () {
                h()
            }, ae = xe(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {dir: "parentNode", next: "legend"});
        try {
            O.apply(I = L.call(w.childNodes), w.childNodes), I[w.childNodes.length].nodeType
        } catch (t) {
            O = {
                apply: I.length ? function (e, t) {
                    M.apply(e, L.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }

        function se(e, t, i, o) {
            var r, s, c, u, d, p, v, y = t && t.ownerDocument, k = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return i;
            if (!o && ((t ? t.ownerDocument || t : w) !== f && h(t), t = t || f, g)) {
                if (11 !== k && (d = J.exec(e))) if (r = d[1]) {
                    if (9 === k) {
                        if (!(c = t.getElementById(r))) return i;
                        if (c.id === r) return i.push(c), i
                    } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
                } else {
                    if (d[2]) return O.apply(i, t.getElementsByTagName(e)), i;
                    if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(r)), i
                }
                if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== k || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === k && q.test(e)) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(ie, oe) : t.setAttribute("id", u = x), s = (p = a(e)).length; s--;) p[s] = "#" + u + " " + be(p[s]);
                        v = p.join(","), y = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return O.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                        E(e, !0)
                    } finally {
                        u === x && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(B, "$1"), t, i, o)
        }

        function le() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
        }

        function ce(e) {
            return e[x] = !0, e
        }

        function ue(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
        }

        function he(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ce(function (t) {
                return t = +t, ce(function (n, i) {
                    for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (t in n = se.support = {}, r = se.isXML = function (e) {
            var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
            return !K.test(t || n && n.nodeName || "HTML")
        }, h = se.setDocument = function (e) {
            var t, o, a = e ? e.ownerDocument || e : w;
            return a !== f && 9 === a.nodeType && a.documentElement && (p = (f = a).documentElement, g = !r(f), w !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Z.test(f.getElementsByClassName), n.getById = ue(function (e) {
                return p.appendChild(e).id = x, !f.getElementsByName || !f.getElementsByName(x).length
            }), n.getById ? (i.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (i.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, i.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                        for (o = t.getElementsByName(e), i = 0; r = o[i++];) if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                    }
                    return []
                }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], m = [], (n.qsa = Z.test(f.querySelectorAll)) && (ue(function (e) {
                p.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = f.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            })), (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", H)
            }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Z.test(p.compareDocumentPosition), b = t || Z.test(p.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, A = t ? function (e, t) {
                if (e === t) return d = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === w && b(w, e) ? -1 : t === f || t.ownerDocument === w && b(w, t) ? 1 : u ? N(u, e) - N(u, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return d = !0, 0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], s = [t];
                if (!o || !r) return e === f ? -1 : t === f ? 1 : o ? -1 : r ? 1 : u ? N(u, e) - N(u, t) : 0;
                if (o === r) return he(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[i] === s[i];) i++;
                return i ? he(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0
            }), f
        }, se.matches = function (e, t) {
            return se(e, null, null, t)
        }, se.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && h(e), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
                E(t, !0)
            }
            return 0 < se(t, f, null, [e]).length
        }, se.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && h(e), b(e, t)
        }, se.attr = function (e, t) {
            (e.ownerDocument || e) !== f && h(e);
            var o = i.attrHandle[t.toLowerCase()],
                r = o && D.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
            return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, se.escape = function (e) {
            return (e + "").replace(ie, oe)
        }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function (e) {
            var t, i = [], o = 0, r = 0;
            if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), d) {
                for (; t = e[r++];) t === e[r] && (o = i.push(r));
                for (; o--;) e.splice(i[o], 1)
            }
            return u = null, e
        }, o = se.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[i++];) n += o(t);
            return n
        }, (i = se.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && S(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (i) {
                        var o = se.attr(i, e);
                        return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(W, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === i && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, h, f, p, g = r !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (h = t; h = h[g];) if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                for (b = (f = (c = (u = (d = (h = m)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();) if (1 === h.nodeType && ++b && h === t) {
                                    u[e] = [k, f, b];
                                    break
                                }
                            } else if (y && (b = f = (c = (u = (d = (h = t)[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === k && c[1]), !1 === b) for (; (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[x] || (h[x] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [k, b]), h !== t));) ;
                            return (b -= o) === i || b % i == 0 && 0 <= b / i
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return o[x] ? o(t) : 1 < o.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, n) {
                        for (var i, r = o(e, t), a = r.length; a--;) e[i = N(e, r[a])] = !(n[i] = r[a])
                    }) : function (e) {
                        return o(e, 0, n)
                    }) : o
                }
            },
            pseudos: {
                not: ce(function (e) {
                    var t = [], n = [], i = s(e.replace(B, "$1"));
                    return i[x] ? ce(function (e, t, n, o) {
                        for (var r, a = i(e, null, o, []), s = e.length; s--;) (r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function (e, o, r) {
                        return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                    }
                }), has: ce(function (e) {
                    return function (t) {
                        return 0 < se(e, t).length
                    }
                }), contains: ce(function (e) {
                    return e = e.replace(te, ne), function (t) {
                        return -1 < (t.textContent || o(t)).indexOf(e)
                    }
                }), lang: ce(function (e) {
                    return U.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === p
                }, focus: function (e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !i.pseudos.empty(e)
                }, header: function (e) {
                    return G.test(e.nodeName)
                }, input: function (e) {
                    return Q.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: me(function () {
                    return [0]
                }), last: me(function (e, t) {
                    return [t - 1]
                }), eq: me(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: me(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: me(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                    return e
                }), gt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[t] = fe(t);
        for (t in{submit: !0, reset: !0}) i.pseudos[t] = pe(t);

        function ye() {
        }

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function xe(e, t, n) {
            var i = t.dir, o = t.next, r = o || i, a = n && "parentNode" === r, s = C++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];) if (1 === t.nodeType || a) return e(t, n, o);
                return !1
            } : function (t, n, l) {
                var c, u, d, h = [k, s];
                if (l) {
                    for (; t = t[i];) if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || a) if (u = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((c = u[r]) && c[0] === k && c[1] === s) return h[2] = c[2];
                    if ((u[r] = h)[2] = e(t, n, l)) return !0
                }
                return !1
            }
        }

        function we(e) {
            return 1 < e.length ? function (t, n, i) {
                for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function ke(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++) (r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
            return a
        }

        function Ce(e, t, n, i, o, r) {
            return i && !i[x] && (i = Ce(i)), o && !o[x] && (o = Ce(o, r)), ce(function (r, a, s, l) {
                var c, u, d, h = [], f = [], p = a.length, g = r || function (e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) se(e, t[i], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []), m = !e || !r && t ? g : ke(g, h, e, s, l),
                    v = n ? o || (r ? e : p || i) ? [] : a : m;
                if (n && n(m, v, s, l), i) for (c = ke(v, f), i(c, [], s, l), u = c.length; u--;) (d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = v.length; u--;) (d = v[u]) && c.push(m[u] = d);
                            o(null, v = [], c, l)
                        }
                        for (u = v.length; u--;) (d = v[u]) && -1 < (c = o ? N(r, d) : h[u]) && (r[c] = !(a[c] = d))
                    }
                } else v = ke(v === a ? v.splice(p, v.length) : v), o ? o(null, a, v, l) : O.apply(a, v)
            })
        }

        function Se(e) {
            for (var t, n, o, r = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = xe(function (e) {
                return e === t
            }, s, !0), d = xe(function (e) {
                return -1 < N(t, e)
            }, s, !0), h = [function (e, n, i) {
                var o = !a && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                return t = null, o
            }]; l < r; l++) if (n = i.relative[e[l].type]) h = [xe(we(h), n)]; else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                    for (o = ++l; o < r && !i.relative[e[o].type]; o++) ;
                    return Ce(1 < l && we(h), 1 < l && be(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(B, "$1"), n, l < o && Se(e.slice(l, o)), o < r && Se(e = e.slice(o)), o < r && be(e))
                }
                h.push(n)
            }
            return we(h)
        }

        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, a = se.tokenize = function (e, t) {
            var n, o, r, a, s, l, c, u = _[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = i.preFilter; s;) {
                for (a in n && !(o = V.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), n = !1, (o = z.exec(s)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace(B, " ")
                }), s = s.slice(n.length)), i.filter) !(o = X[a].exec(s)) || c[a] && !(o = c[a](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: a,
                    matches: o
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : _(e, l).slice(0)
        }, s = se.compile = function (e, t) {
            var n, o, r, s, l, u, d = [], p = [], m = T[e + " "];
            if (!m) {
                for (t || (t = a(e)), n = t.length; n--;) (m = Se(t[n]))[x] ? d.push(m) : p.push(m);
                (m = T(e, (o = p, s = 0 < (r = d).length, l = 0 < o.length, u = function (e, t, n, a, u) {
                    var d, p, m, v = 0, y = "0", b = e && [], x = [], w = c, C = e || l && i.find.TAG("*", u),
                        S = k += null == w ? 1 : Math.random() || .1, _ = C.length;
                    for (u && (c = t === f || t || u); y !== _ && null != (d = C[y]); y++) {
                        if (l && d) {
                            for (p = 0, t || d.ownerDocument === f || (h(d), n = !g); m = o[p++];) if (m(d, t || f, n)) {
                                a.push(d);
                                break
                            }
                            u && (k = S)
                        }
                        s && ((d = !m && d) && v--, e && b.push(d))
                    }
                    if (v += y, s && y !== v) {
                        for (p = 0; m = r[p++];) m(b, x, t, n);
                        if (e) {
                            if (0 < v) for (; y--;) b[y] || x[y] || (x[y] = P.call(a));
                            x = ke(x)
                        }
                        O.apply(a, x), u && !e && 0 < x.length && 1 < v + r.length && se.uniqueSort(a)
                    }
                    return u && (k = S, c = w), b
                }, s ? ce(u) : u))).selector = e
            }
            return m
        }, l = se.select = function (e, t, n, o) {
            var r, l, c, u, d, h = "function" == typeof e && e, f = !o && a(e = h.selector || e);
            if (n = n || [], 1 === f.length) {
                if (2 < (l = f[0] = f[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (r = X.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);) if ((d = i.find[u]) && (o = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                    if (l.splice(r, 1), !(e = o.length && be(l))) return O.apply(n, o), n;
                    break
                }
            }
            return (h || s(e, f))(o, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!d, h(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || de(F, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), se
    }(e);
    w.find = S, w.expr = S.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = S.uniqueSort, w.text = S.getText, w.isXMLDoc = S.isXML, w.contains = S.contains, w.escapeSelector = S.escape;
    var _ = function (e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (o && w(e).is(n)) break;
            i.push(e)
        }
        return i
    }, T = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, E = w.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, t, n) {
        return g(t) ? w.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return -1 < l.call(t, e) !== n
        }) : w.filter(t, e, n)
    }

    w.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < i; t++) if (w.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, o[t], n);
            return 1 < i ? w.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(I(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(I(this, e || [], !0))
        }, is: function (e) {
            return !!I(this, "string" == typeof e && E.test(e) ? w(e) : e || [], !1).length
        }
    });
    var P, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var o, r;
        if (!e) return this;
        if (n = n || P, "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : M.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(o[1]) && w.isPlainObject(t)) for (o in t) g(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, P = w(i);
    var O = /^(?:parents|prev(?:Until|All))/, L = {children: !0, contents: !0, next: !0, prev: !0};

    function N(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    w.fn.extend({
        has: function (e) {
            var t = w(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, i = 0, o = this.length, r = [], a = "string" != typeof e && w(e);
            if (!E.test(e)) for (; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                r.push(n);
                break
            }
            return this.pushStack(1 < r.length ? w.uniqueSort(r) : r)
        }, index: function (e) {
            return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return _(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return _(e, "parentNode", n)
        }, next: function (e) {
            return N(e, "nextSibling")
        }, prev: function (e) {
            return N(e, "previousSibling")
        }, nextAll: function (e) {
            return _(e, "nextSibling")
        }, prevAll: function (e) {
            return _(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return _(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return _(e, "previousSibling", n)
        }, siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return T(e.firstChild)
        }, contents: function (e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, i) {
            var o = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = w.filter(i, o)), 1 < this.length && (L[e] || w.uniqueSort(o), O.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var F = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function j(e) {
        throw e
    }

    function $(e, t, n, i) {
        var o;
        try {
            e && g(o = e.promise) ? o.call(e).done(t).fail(n) : e && g(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    w.Callbacks = function (e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(F) || [], function (e, t) {
            n[t] = !0
        }), n) : w.extend({}, e);
        var i, o, r, a, s = [], l = [], c = -1, u = function () {
            for (a = a || e.once, r = i = !0; l.length; c = -1) for (o = l.shift(); ++c < s.length;) !1 === s[c].apply(o[0], o[1]) && e.stopOnFalse && (c = s.length, o = !1);
            e.memory || (o = !1), i = !1, a && (s = o ? [] : "")
        }, d = {
            add: function () {
                return s && (o && !i && (c = s.length - 1, l.push(o)), function t(n) {
                    w.each(n, function (n, i) {
                        g(i) ? e.unique && d.has(i) || s.push(i) : i && i.length && "string" !== b(i) && t(i)
                    })
                }(arguments), o && !i && u()), this
            }, remove: function () {
                return w.each(arguments, function (e, t) {
                    for (var n; -1 < (n = w.inArray(t, s, n));) s.splice(n, 1), n <= c && c--
                }), this
            }, has: function (e) {
                return e ? -1 < w.inArray(e, s) : 0 < s.length
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return a = l = [], s = o = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return a = l = [], o || i || (s = o = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return d
    }, w.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", o = {
                    state: function () {
                        return i
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return o.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, i) {
                                var o = g(e[i[4]]) && e[i[4]];
                                r[i[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, i, o) {
                        var r = 0;

                        function a(t, n, i, o) {
                            return function () {
                                var s = this, l = arguments, c = function () {
                                    var e, c;
                                    if (!(t < r)) {
                                        if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? o ? c.call(e, a(r, n, R, o), a(r, n, j, o)) : (r++, c.call(e, a(r, n, R, o), a(r, n, j, o), a(r, n, R, n.notifyWith))) : (i !== R && (s = void 0, l = [e]), (o || n.resolveWith)(s, l))
                                    }
                                }, u = o ? c : function () {
                                    try {
                                        c()
                                    } catch (e) {
                                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), r <= t + 1 && (i !== j && (s = void 0, l = [e]), n.rejectWith(s, l))
                                    }
                                };
                                t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }

                        return w.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(o) ? o : R, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : R)), n[2][3].add(a(0, e, g(i) ? i : j))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? w.extend(e, o) : o
                    }
                }, r = {};
            return w.each(n, function (e, t) {
                var a = t[2], s = t[5];
                o[t[1]] = a.add, s && a.add(function () {
                    i = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), r[t[0]] = function () {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = a.fireWith
            }), o.promise(r), t && t.call(r, r), r
        }, when: function (e) {
            var t = arguments.length, n = t, i = Array(n), o = r.call(arguments), a = w.Deferred(), s = function (e) {
                return function (n) {
                    i[e] = this, o[e] = 1 < arguments.length ? r.call(arguments) : n, --t || a.resolveWith(i, o)
                }
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(o[n] && o[n].then))) return a.then();
            for (; n--;) $(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var W = w.Deferred();

    function B() {
        i.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), w.ready()
    }

    w.fn.ready = function (e) {
        return W.then(e).catch(function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || W.resolveWith(i, [w])
        }
    }), w.ready.then = W.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var V = function (e, t, n, i, o, r, a) {
        var s = 0, l = e.length, c = null == n;
        if ("object" === b(n)) for (s in o = !0, n) V(e, t, s, n[s], !0, r, a); else if (void 0 !== i && (o = !0, g(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(w(e), n)
        })), t)) for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }, z = /^-ms-/, q = /-([a-z])/g;

    function Y(e, t) {
        return t.toUpperCase()
    }

    function U(e) {
        return e.replace(z, "ms-").replace(q, Y)
    }

    var X = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function K() {
        this.expando = w.expando + K.uid++
    }

    K.uid = 1, K.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[U(t)] = n; else for (i in t) o[U(i)] = t[i];
            return o
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in i ? [t] : t.match(F) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var Q = new K, G = new K, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, J = /[A-Z]/g;

    function ee(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Z.test(o) ? JSON.parse(o) : o)
            } catch (e) {
            }
            G.set(e, t, n)
        } else n = void 0;
        return n
    }

    w.extend({
        hasData: function (e) {
            return G.hasData(e) || Q.hasData(e)
        }, data: function (e, t, n) {
            return G.access(e, t, n)
        }, removeData: function (e, t) {
            G.remove(e, t)
        }, _data: function (e, t, n) {
            return Q.access(e, t, n)
        }, _removeData: function (e, t) {
            Q.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0], a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = G.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = U(i.slice(5)), ee(r, i, o[i]));
                    Q.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                G.set(this, e)
            }) : V(this, function (t) {
                var n;
                if (r && void 0 === t) return void 0 !== (n = G.get(r, e)) ? n : void 0 !== (n = ee(r, e)) ? n : void 0;
                this.each(function () {
                    G.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                G.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Q.get(e, t), n && (!i || Array.isArray(n) ? i = Q.access(e, t, w.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t), i = n.length, o = n.shift(), r = w._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
                w.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, o = w.Deferred(), r = this, a = this.length, s = function () {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = Q.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"], oe = i.documentElement, re = function (e) {
            return w.contains(e.ownerDocument, e)
        }, ae = {composed: !0};
    oe.attachShadow && (re = function (e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var se = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === w.css(e, "display")
    }, le = function (e, t, n, i) {
        var o, r, a = {};
        for (r in t) a[r] = e.style[r], e.style[r] = t[r];
        for (r in o = n.apply(e, i || []), t) e.style[r] = a[r];
        return o
    };

    function ce(e, t, n, i) {
        var o, r, a = 20, s = i ? function () {
                return i.cur()
            } : function () {
                return w.css(e, t, "")
            }, l = s(), c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (w.cssNumber[t] || "px" !== c && +l) && ne.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--;) w.style(e, t, u + c), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), u /= r;
            u *= 2, w.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    var ue = {};

    function de(e, t) {
        for (var n, i, o, r, a, s, l, c = [], u = 0, d = e.length; u < d; u++) (i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = Q.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && se(i) && (c[u] = (l = a = r = void 0, a = (o = i).ownerDocument, s = o.nodeName, (l = ue[s]) || (r = a.body.appendChild(a.createElement(s)), l = w.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), ue[s] = l)))) : "none" !== n && (c[u] = "none", Q.set(i, "display", n)));
        for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }

    w.fn.extend({
        show: function () {
            return de(this, !0)
        }, hide: function () {
            return de(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                se(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var he = /^(?:checkbox|radio)$/i, fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }

    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, be, xe = /<|&#?\w+;/;

    function we(e, t, n, i, o) {
        for (var r, a, s, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++) if ((r = e[f]) || 0 === r) if ("object" === b(r)) w.merge(h, r.nodeType ? [r] : r); else if (xe.test(r)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (fe.exec(r) || ["", ""])[1].toLowerCase(), l = ge[s] || ge._default, a.innerHTML = l[1] + w.htmlPrefilter(r) + l[2], u = l[0]; u--;) a = a.lastChild;
            w.merge(h, a.childNodes), (a = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = h[f++];) if (i && -1 < w.inArray(r, i)) o && o.push(r); else if (c = re(r), a = me(d.appendChild(r), "script"), c && ve(a), n) for (u = 0; r = a[u++];) pe.test(r.type || "") && n.push(r);
        return d
    }

    ye = i.createDocumentFragment().appendChild(i.createElement("div")), (be = i.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), p.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var ke = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Se = /^([^.]*)(?:\.(.+)|)/;

    function _e() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ee(e, t) {
        return e === function () {
            try {
                return i.activeElement
            } catch (e) {
            }
        }() == ("focus" === t)
    }

    function Ae(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) {
            for (s in"string" != typeof n && (i = i || n, n = void 0), t) Ae(e, s, n, i, t[s], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Te; else if (!o) return e;
        return 1 === r && (a = o, (o = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, o, i, n)
        })
    }

    function De(e, t, n) {
        n ? (Q.set(e, t, !1), w.event.add(e, t, {
            namespace: !1, handler: function (e) {
                var i, o, a = Q.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a) (w.event.special[t] || {}).delegateType && e.stopPropagation(); else if (a = r.call(arguments), Q.set(this, t, a), i = n(this, t), this[t](), a !== (o = Q.get(this, t)) || i ? Q.set(this, t, !1) : o = void 0, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o
                } else a && (Q.set(this, t, w.event.trigger(w.extend(a.shift(), w.Event.prototype), a, this)), e.stopImmediatePropagation())
            }
        })) : w.event.add(e, t, _e)
    }

    w.event = {
        global: {}, add: function (e, t, n, i, o) {
            var r, a, s, l, c, u, d, h, f, p, g, m = Q.get(e);
            if (m) for (n.handler && (n = (r = n).handler, o = r.selector), o && w.find.matchesSelector(oe, o), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match(F) || [""]).length; c--;) f = g = (s = Se.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f && (d = w.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = w.event.special[f] || {}, u = w.extend({
                type: f,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && w.expr.match.needsContext.test(o),
                namespace: p.join(".")
            }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), w.event.global[f] = !0)
        }, remove: function (e, t, n, i, o) {
            var r, a, s, l, c, u, d, h, f, p, g, m = Q.hasData(e) && Q.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(F) || [""]).length; c--;) if (f = g = (s = Se.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                    for (d = w.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = h.length; r--;) u = h[r], !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                    a && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || w.removeEvent(e, f, m.handle), delete l[f])
                } else for (f in l) w.event.remove(e, f + t[c], n, i, !0);
                w.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, i, o, r, a, s = w.event.fix(e), l = new Array(arguments.length),
                c = (Q.get(this, "events") || {})[s.type] || [], u = w.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = w.event.handlers.call(this, s, c), t = 0; (o = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== r.namespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((w.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        }, handlers: function (e, t) {
            var n, i, o, r, a, s = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? -1 < w(o, this).index(c) : w.find(o, this, null, [c]).length), a[o] && r.push(i);
                r.length && s.push({elem: c, handlers: r})
            }
            return c = this, l < t.length && s.push({elem: c, handlers: t.slice(l)}), s
        }, addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && A(t, "input") && void 0 === Q.get(t, "click") && De(t, "click", _e), !1
                }, trigger: function (e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && A(t, "input") && void 0 === Q.get(t, "click") && De(t, "click"), !0
                }, _default: function (e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = _e, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = _e, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _e, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        w.event.special[e] = {
            setup: function () {
                return De(this, e, Ee), !1
            }, trigger: function () {
                return De(this, e), !0
            }, delegateType: t
        }
    }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = e.relatedTarget, o = e.handleObj;
                return i && (i === this || w.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, i) {
            return Ae(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return Ae(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Pe = /<script|<style|<link/i, Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function Ne(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Fe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Re(e, t) {
        var n, i, o, r, a, s, l, c;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (r = Q.access(e), a = Q.set(t, r), c = r.events)) for (o in delete a.handle, a.events = {}, c) for (n = 0, i = c[o].length; n < i; n++) w.event.add(t, o, c[o][n]);
            G.hasData(e) && (s = G.access(e), l = w.extend({}, s), G.set(t, l))
        }
    }

    function je(e, t, n, i) {
        t = a.apply([], t);
        var o, r, s, l, c, u, d = 0, h = e.length, f = h - 1, m = t[0], v = g(m);
        if (v || 1 < h && "string" == typeof m && !p.checkClone && Me.test(m)) return e.each(function (o) {
            var r = e.eq(o);
            v && (t[0] = m.call(this, o, r.html())), je(r, t, n, i)
        });
        if (h && (r = (o = we(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (l = (s = w.map(me(o, "script"), Ne)).length; d < h; d++) c = o, d !== f && (c = w.clone(c, !0, !0), l && w.merge(s, me(c, "script"))), n.call(e[d], c, d);
            if (l) for (u = s[s.length - 1].ownerDocument, w.map(s, Fe), d = 0; d < l; d++) c = s[d], pe.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {nonce: c.nonce || c.getAttribute("nonce")}) : y(c.textContent.replace(Oe, ""), c, u))
        }
        return e
    }

    function $e(e, t, n) {
        for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || w.cleanData(me(i)), i.parentNode && (n && re(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ie, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, o, r, a, s, l, c, u = e.cloneNode(!0), d = re(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = me(u), i = 0, o = (r = me(e)).length; i < o; i++) s = r[i], "input" === (c = (l = a[i]).nodeName.toLowerCase()) && he.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t) if (n) for (r = r || me(e), a = a || me(u), i = 0, o = r.length; i < o; i++) Re(r[i], a[i]); else Re(e, u);
            return 0 < (a = me(u, "script")).length && ve(a, !d && me(e, "script")), u
        }, cleanData: function (e) {
            for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++) if (X(n)) {
                if (t = n[Q.expando]) {
                    if (t.events) for (i in t.events) o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                    n[Q.expando] = void 0
                }
                n[G.expando] && (n[G.expando] = void 0)
            }
        }
    }), w.fn.extend({
        detach: function (e) {
            return $e(this, e, !0)
        }, remove: function (e) {
            return $e(this, e)
        }, text: function (e) {
            return V(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return je(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        }, prepend: function () {
            return je(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return je(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return je(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        }, html: function (e) {
            return V(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return je(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, i = [], o = w(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), w(o[a])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var He = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), We = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, Be = new RegExp(ie.join("|"), "i");

    function Ve(e, t, n) {
        var i, o, r, a, s = e.style;
        return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || re(e) || (a = w.style(e, t)), !p.pixelBoxStyles() && He.test(a) && Be.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function ze(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                o = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", s = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", a = 12 === n(u.offsetWidth / 3), oe.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }

        var o, r, a, s, l, c = i.createElement("div"), u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, {
            boxSizingReliable: function () {
                return t(), r
            }, pixelBoxStyles: function () {
                return t(), s
            }, pixelPosition: function () {
                return t(), o
            }, reliableMarginLeft: function () {
                return t(), l
            }, scrollboxSize: function () {
                return t(), a
            }
        }))
    }();
    var qe = ["Webkit", "Moz", "ms"], Ye = i.createElement("div").style, Ue = {};

    function Xe(e) {
        return w.cssProps[e] || Ue[e] || (e in Ye ? e : Ue[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = qe.length; n--;) if ((e = qe[n] + t) in Ye) return e
        }(e) || e)
    }

    var Ke = /^(none|table(?!-c[ea]).+)/, Qe = /^--/,
        Ge = {position: "absolute", visibility: "hidden", display: "block"},
        Ze = {letterSpacing: "0", fontWeight: "400"};

    function Je(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function et(e, t, n, i, o, r) {
        var a = "width" === t ? 1 : 0, s = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += w.css(e, n + ie[a], !0, o)), i ? ("content" === n && (l -= w.css(e, "padding" + ie[a], !0, o)), "margin" !== n && (l -= w.css(e, "border" + ie[a] + "Width", !0, o))) : (l += w.css(e, "padding" + ie[a], !0, o), "padding" !== n ? l += w.css(e, "border" + ie[a] + "Width", !0, o) : s += w.css(e, "border" + ie[a] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5)) || 0), l
    }

    function tt(e, t, n) {
        var i = We(e), o = (!p.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i), r = o,
            a = Ve(e, t, i), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (He.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!p.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === w.css(e, "boxSizing", !1, i), (r = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (o ? "border" : "content"), r, i, a) + "px"
    }

    function nt(e, t, n, i, o) {
        return new nt.prototype.init(e, t, n, i, o)
    }

    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ve(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = U(t), l = Qe.test(t), c = e.style;
                if (l || (t = Xe(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = ne.exec(n)) && o[1] && (n = ce(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (w.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var o, r, a, s = U(t);
            return Qe.test(t) || (t = Xe(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ve(e, t, i)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !Ke.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : le(e, Ge, function () {
                    return tt(e, t, i)
                })
            }, set: function (e, n, i) {
                var o, r = We(e), a = !p.scrollboxSize() && "absolute" === r.position,
                    s = (a || i) && "border-box" === w.css(e, "boxSizing", !1, r), l = i ? et(e, t, i, s, r) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - et(e, t, "border", !1, r) - .5)), l && (o = ne.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Je(0, n, l)
            }
        }
    }), w.cssHooks.marginLeft = ze(p.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ie[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Je)
    }), w.fn.extend({
        css: function (e, t) {
            return V(this, function (e, t, n) {
                var i, o, r = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = We(e), o = t.length; a < o; a++) r[t[a]] = w.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((w.Tween = nt).prototype = {
        constructor: nt, init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (w.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, w.fx = nt.prototype.init, w.fx.step = {};
    var it, ot, rt, at, st = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;

    function ct() {
        ot && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ct) : e.setTimeout(ct, w.fx.interval), w.fx.tick())
    }

    function ut() {
        return e.setTimeout(function () {
            it = void 0
        }), it = Date.now()
    }

    function dt(e, t) {
        var n, i = 0, o = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ie[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function ht(e, t, n) {
        for (var i, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), r = 0, a = o.length; r < a; r++) if (i = o[r].call(n, t, e)) return i
    }

    function ft(e, t, n) {
        var i, o, r = 0, a = ft.prefilters.length, s = w.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o) return !1;
            for (var t = it || ut(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) c.tweens[r].run(i);
            return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
        }, c = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {specialEasing: {}, easing: w.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: it || ut(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
            }
        }), u = c.props;
        for (function (e, t) {
            var n, i, o, r, a;
            for (n in e) if (o = t[i = U(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = w.cssHooks[i]) && "expand" in a) for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o); else t[i] = o
        }(u, c.opts.specialEasing); r < a; r++) if (i = ft.prefilters[r].call(c, e, u, c.opts)) return g(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return w.map(u, ht, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    w.Animation = w.extend(ft, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ce(n.elem, e, ne.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(F);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var i, o, r, a, s, l, c, u, d = "width" in t || "height" in t, h = this, f = {}, p = e.style,
                g = e.nodeType && se(e), m = Q.get(e, "fxshow");
            for (i in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, h.always(function () {
                h.always(function () {
                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (o = t[i], st.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i]) continue;
                    g = !0
                }
                f[i] = m && m[i] || w.style(e, i)
            }
            if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f)) for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Q.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (de([e], !0), c = e.style.display || c, u = w.css(e, "display"), de([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (h.done(function () {
                p.display = c
            }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(e, "fxshow", {display: c}), r && (m.hidden = !g), g && de([e], !0), h.done(function () {
                for (i in g || de([e]), Q.remove(e, "fxshow"), f) w.style(e, i, f[i])
            })), l = ht(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }], prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), w.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            g(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
        }, i
    }, w.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(se).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var o = w.isEmptyObject(e), r = w.speed(t, n, i), a = function () {
                var t = ft(this, w.extend({}, e), r);
                (o || Q.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, o = null != e && e + "queueHooks", r = w.timers, a = Q.get(this);
                if (o) a[o] && a[o].stop && i(a[o]); else for (o in a) a[o] && a[o].stop && lt.test(o) && i(a[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || w.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Q.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = w.timers, a = i ? i.length : 0;
                for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, o)
        }
    }), w.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        w.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), w.timers = [], w.fx.tick = function () {
        var e, t = 0, n = w.timers;
        for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), it = void 0
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        ot || (ot = !0, ct())
    }, w.fx.stop = function () {
        ot = null
    }, w.fx.speeds = {slow: 600, fast: 200, _default: 400}, w.fn.delay = function (t, n) {
        return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(o)
            }
        })
    }, rt = i.createElement("input"), at = i.createElement("select").appendChild(i.createElement("option")), rt.type = "checkbox", p.checkOn = "" !== rt.value, p.optSelected = at.selected, (rt = i.createElement("input")).value = "t", rt.type = "radio", p.radioValue = "t" === rt.value;
    var pt, gt = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return V(this, w.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === r && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, o = t && t.match(F);
            if (o && 1 === e.nodeType) for (; n = o[i++];) e.removeAttribute(n)
        }
    }), pt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = gt[t] || w.find.attr;
        gt[t] = function (e, t, i) {
            var o, r, a = t.toLowerCase();
            return i || (r = gt[a], gt[a] = o, o = null != n(e, t, i) ? a : null, gt[a] = r), o
        }
    });
    var mt = /^(?:input|select|textarea|button)$/i, vt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(F) || []).join(" ")
    }

    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(F) || []
    }

    w.fn.extend({
        prop: function (e, t) {
            return V(this, w.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), p.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, a, s, l = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, bt(this)))
            });
            if ((t = xt(e)).length) for (; n = this[l++];) if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o !== (s = yt(i)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, o, r, a, s, l = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, bt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length) for (; n = this[l++];) if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                for (a = 0; r = t[a++];) for (; -1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                o !== (s = yt(i)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, bt(this), t), t)
            }) : this.each(function () {
                var t, o, r, a;
                if (i) for (o = 0, r = w(this), a = xt(e); t = a[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || ((t = bt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && -1 < (" " + yt(bt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = g(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : yt(w.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, i, o = e.options, r = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        l = a ? r + 1 : o.length;
                    for (i = r < 0 ? l : a ? r : 0; i < l; i++) if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (t = w(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, i, o = e.options, r = w.makeArray(t), a = o.length; a--;) ((i = o[a]).selected = -1 < w.inArray(w.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        }, p.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var kt = /^(?:focusinfocus|focusoutblur)$/, Ct = function (e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function (t, n, o, r) {
            var a, s, l, c, u, h, f, p, v = [o || i], y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = p = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !kt.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : w.makeArray(n, [t]), f = w.event.special[y] || {}, r || !f.trigger || !1 !== f.trigger.apply(o, n))) {
                if (!r && !f.noBubble && !m(o)) {
                    for (c = f.delegateType || y, kt.test(c + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), l = s;
                    l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0; (s = v[a++]) && !t.isPropagationStopped();) p = s, t.type = 1 < a ? c : f.bindType || y, (h = (Q.get(s, "events") || {})[t.type] && Q.get(s, "handle")) && h.apply(s, n), (h = u && s[u]) && h.apply && X(s) && (t.result = h.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = y, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !X(o) || u && g(o[y]) && !m(o) && ((l = o[u]) && (o[u] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, Ct), o[y](), t.isPropagationStopped() && p.removeEventListener(y, Ct), w.event.triggered = void 0, l && (o[u] = l)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = w.extend(new w.Event, n, {type: e, isSimulated: !0});
            w.event.trigger(i, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), p.focusin || w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, o = Q.access(i, t);
                o || i.addEventListener(e, n, !0), Q.access(i, t, (o || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, o = Q.access(i, t) - 1;
                o ? Q.access(i, t, o) : (i.removeEventListener(e, n, !0), Q.remove(i, t))
            }
        }
    });
    var St = e.location, _t = Date.now(), Tt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var Et = /\[\]$/, At = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;

    function Pt(e, t, n, i) {
        var o;
        if (Array.isArray(t)) w.each(t, function (t, o) {
            n || Et.test(e) ? i(e, o) : Pt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        }); else if (n || "object" !== b(t)) i(e, t); else for (o in t) Pt(e + "[" + o + "]", t[o], n, i)
    }

    w.param = function (e, t) {
        var n, i = [], o = function (e, t) {
            var n = g(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            o(this.name, this.value)
        }); else for (n in e) Pt(n, e[n], t, o);
        return i.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && It.test(this.nodeName) && !Dt.test(e) && (this.checked || !he.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {name: t.name, value: e.replace(At, "\r\n")}
                }) : {name: t.name, value: n.replace(At, "\r\n")}
            }).get()
        }
    });
    var Mt = /%20/g, Ot = /#.*$/, Lt = /([?&])_=[^&]*/, Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/,
        Rt = /^\/\//, jt = {}, $t = {}, Ht = "*/".concat("*"), Wt = i.createElement("a");

    function Bt(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0, r = t.toLowerCase().match(F) || [];
            if (g(n)) for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Vt(e, t, n, i) {
        var o = {}, r = e === $t;

        function a(s) {
            var l;
            return o[s] = !0, w.each(e[s] || [], function (e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            }), l
        }

        return a(t.dataTypes[0]) || !o["*"] && a("*")
    }

    function zt(e, t) {
        var n, i, o = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e
    }

    Wt.href = St.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(jt),
        ajaxTransport: Bt($t),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, a, s, l, c, u, d, h, f, p = w.ajaxSetup({}, n), g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(),
                y = w.Callbacks("once memory"), b = p.statusCode || {}, x = {}, k = {}, C = "canceled", S = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!s) for (s = {}; t = Nt.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return u ? a : null
                    }, setRequestHeader: function (e, t) {
                        return null == u && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, x[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == u && (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (u) S.always(e[S.status]); else for (t in e) b[t] = [b[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || C;
                        return o && o.abort(t), _(0, t), this
                    }
                };
            if (v.promise(S), p.url = ((t || p.url || St.href) + "").replace(Rt, St.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(F) || [""], null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Wt.protocol + "//" + Wt.host != c.protocol + "//" + c.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Vt(jt, p, n, S), u) return S;
            for (h in(d = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ft.test(p.type), r = p.url.replace(Ot, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Mt, "+")) : (f = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (Tt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Lt, "$1"), f = (Tt.test(r) ? "&" : "?") + "_=" + _t++ + f), p.url = r + f), p.ifModified && (w.lastModified[r] && S.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && S.setRequestHeader("If-None-Match", w.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, S, p) || u)) return S.abort();
            if (C = "abort", y.add(p.complete), S.done(p.success), S.fail(p.error), o = Vt($t, p, n, S)) {
                if (S.readyState = 1, d && m.trigger("ajaxSend", [S, p]), u) return S;
                p.async && 0 < p.timeout && (l = e.setTimeout(function () {
                    S.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, o.send(x, _)
                } catch (t) {
                    if (u) throw t;
                    _(-1, t)
                }
            } else _(-1, "No Transport");

            function _(t, n, i, s) {
                var c, h, f, x, k, C = n;
                u || (u = !0, l && e.clearTimeout(l), o = void 0, a = s || "", S.readyState = 0 < t ? 4 : 0, c = 200 <= t && t < 300 || 304 === t, i && (x = function (e, t, n) {
                    for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (o in s) if (s[o] && s[o].test(i)) {
                        l.unshift(o);
                        break
                    }
                    if (l[0] in n) r = l[0]; else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            a || (a = o)
                        }
                        r = r || a
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(p, S, i)), x = function (e, t, n, i) {
                    var o, r, a, s, l, c = {}, u = e.dataTypes.slice();
                    if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (r = u.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                        if (!(a = c[l + " " + r] || c["* " + r])) for (o in c) if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e.throws) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + r}
                        }
                    }
                    return {state: "success", data: t}
                }(p, x, S, c), c ? (p.ifModified && ((k = S.getResponseHeader("Last-Modified")) && (w.lastModified[r] = k), (k = S.getResponseHeader("etag")) && (w.etag[r] = k)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, h = x.data, c = !(f = x.error))) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", c ? v.resolveWith(g, [h, C, S]) : v.rejectWith(g, [S, C, f]), S.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [S, p, c ? h : f]), y.fireWith(g, [S, C]), d && (m.trigger("ajaxComplete", [S, p]), --w.active || w.event.trigger("ajaxStop")))
            }

            return S
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, i, o) {
            return g(n) && (o = o || i, i = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e, t) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                w.globalEval(e, t)
            }
        })
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var qt = {0: 200, 1223: 204}, Yt = w.ajaxSettings.xhr();
    p.cors = !!Yt && "withCredentials" in Yt, p.ajax = Yt = !!Yt, w.ajaxTransport(function (t) {
        var n, i;
        if (p.cors || Yt && !t.crossDomain) return {
            send: function (o, r) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                n = function (e) {
                    return function () {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(qt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (o) {
                    if (n) throw o
                }
            }, abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function (o, r) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function (e) {
                    t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            }, abort: function () {
                n && n()
            }
        }
    });
    var Ut, Xt = [], Kt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Xt.pop() || w.expando + "_" + _t++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, a,
            s = !1 !== t.jsonp && (Kt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Kt, "$1" + o) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return a || w.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            a = arguments
        }, i.always(function () {
            void 0 === r ? w(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Xt.push(o)), a && g(r) && r(a[0]), a = r = void 0
        }), "script"
    }), p.createHTMLDocument = ((Ut = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), w.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(o)) : t = i), a = !n && [], (r = D.exec(e)) ? [t.createElement(r[1])] : (r = we([e], t, a), a && a.length && w(a).remove(), w.merge([], r.childNodes)));
        var o, r, a
    }, w.fn.load = function (e, t, n) {
        var i, o, r, a = this, s = e.indexOf(" ");
        return -1 < s && (i = yt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && w.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, a.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, a, s, l, c = w.css(e, "position"), u = w(e), d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), r = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (a = (i = u.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, i = this[0], o = {top: 0, left: 0};
                if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect(); else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0), o.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - w.css(i, "marginTop", !0),
                    left: t.left - o.left - w.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || oe
            })
        }
    }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (i) {
            return V(this, function (e, i, o) {
                var r;
                if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
            }, e, i, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = ze(p.pixelPosition, function (e, n) {
            if (n) return n = Ve(e, t), He.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({Height: "height", Width: "width"}, function (e, t) {
        w.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            w.fn[i] = function (o, r) {
                var a = arguments.length && (n || "boolean" != typeof o),
                    s = n || (!0 === o || !0 === r ? "margin" : "border");
                return V(this, function (t, n, o) {
                    var r;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? w.css(t, n, s) : w.style(t, n, o, s)
                }, t, a ? o : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = r.call(arguments, 2), (o = function () {
            return e.apply(t || this, i.concat(r.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, o
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = g, w.isWindow = m, w.camelCase = U, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Qt = e.jQuery, Gt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Gt), t && e.jQuery === w && (e.jQuery = Qt), w
    }, t || (e.jQuery = e.$ = w), w
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function () {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function i(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case"HTML":
            case"BODY":
                return e.ownerDocument.body;
            case"#document":
                return e.body
        }
        var o = t(e), r = o.overflow, a = o.overflowX, s = o.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + a) ? e : i(n(e))
    }

    function o(e) {
        return 11 === e ? Y : 10 === e ? U : Y || U
    }

    function r(e) {
        if (!e) return document.documentElement;
        for (var n = o(10) ? document.body : null, i = e.offsetParent; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
        var a = i && i.nodeName;
        return a && "BODY" !== a && "HTML" !== a ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? r(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function a(e) {
        return null === e.parentNode ? e : a(e.parentNode)
    }

    function s(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, o = n ? t : e,
            l = document.createRange();
        l.setStart(i, 0), l.setEnd(o, 0);
        var c = l.commonAncestorContainer;
        if (e !== c && t !== c || i.contains(o)) return function (e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e)
        }(c) ? c : r(c);
        var u = a(e);
        return u.host ? s(u.host, t) : s(e, a(t).host)
    }

    function l(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function c(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = l(t, "top"), o = l(t, "left"),
            r = n ? -1 : 1;
        return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
    }

    function u(e, t) {
        var n = "x" === t ? "Left" : "Top", i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function d(e, t, n, i) {
        return H(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], o(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function h(e) {
        var t = e.body, n = e.documentElement, i = o(10) && getComputedStyle(n);
        return {height: d("Height", t, n, i), width: d("Width", t, n, i)}
    }

    function f(e) {
        return G({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function p(e) {
        var n = {};
        try {
            if (o(10)) {
                n = e.getBoundingClientRect();
                var i = l(e, "top"), r = l(e, "left");
                n.top += i, n.left += r, n.bottom += i, n.right += r
            } else n = e.getBoundingClientRect()
        } catch (e) {
        }
        var a = {left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top},
            s = "HTML" === e.nodeName ? h(e.ownerDocument) : {}, c = s.width || e.clientWidth || a.right - a.left,
            d = s.height || e.clientHeight || a.bottom - a.top, p = e.offsetWidth - c, g = e.offsetHeight - d;
        if (p || g) {
            var m = t(e);
            p -= u(m, "x"), g -= u(m, "y"), a.width -= p, a.height -= g
        }
        return f(a)
    }

    function g(e, n) {
        var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], a = o(10), s = "HTML" === n.nodeName,
            l = p(e), u = p(n), d = i(e), h = t(n), g = parseFloat(h.borderTopWidth, 10),
            m = parseFloat(h.borderLeftWidth, 10);
        r && s && (u.top = H(u.top, 0), u.left = H(u.left, 0));
        var v = f({top: l.top - u.top - g, left: l.left - u.left - m, width: l.width, height: l.height});
        if (v.marginTop = 0, v.marginLeft = 0, !a && s) {
            var y = parseFloat(h.marginTop, 10), b = parseFloat(h.marginLeft, 10);
            v.top -= g - y, v.bottom -= g - y, v.left -= m - b, v.right -= m - b, v.marginTop = y, v.marginLeft = b
        }
        return (a && !r ? n.contains(d) : n === d && "BODY" !== d.nodeName) && (v = c(v, n)), v
    }

    function m(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = e.ownerDocument.documentElement,
            i = g(e, n), o = H(n.clientWidth, window.innerWidth || 0), r = H(n.clientHeight, window.innerHeight || 0),
            a = t ? 0 : l(n), s = t ? 0 : l(n, "left");
        return f({top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: o, height: r})
    }

    function v(e) {
        var i = e.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || v(n(e)))
    }

    function y(e) {
        if (!e || !e.parentElement || o()) return document.documentElement;
        for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
        return n || document.documentElement
    }

    function b(e, t, o, r) {
        var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], l = {top: 0, left: 0},
            c = a ? y(e) : s(e, t);
        if ("viewport" === r) l = m(c, a); else {
            var u;
            "scrollParent" === r ? "BODY" === (u = i(n(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === r ? e.ownerDocument.documentElement : r;
            var d = g(u, c, a);
            if ("HTML" !== u.nodeName || v(c)) l = d; else {
                var f = h(e.ownerDocument), p = f.height, b = f.width;
                l.top += d.top - d.marginTop, l.bottom = p + d.top, l.left += d.left - d.marginLeft, l.right = b + d.left
            }
        }
        var x = "number" == typeof (o = o || 0);
        return l.left += x ? o : o.left || 0, l.top += x ? o : o.top || 0, l.right -= x ? o : o.right || 0, l.bottom -= x ? o : o.bottom || 0, l
    }

    function x(e, t, n, i, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = b(n, i, r, o), s = {
            top: {width: a.width, height: t.top - a.top},
            right: {width: a.right - t.right, height: a.height},
            bottom: {width: a.width, height: a.bottom - t.bottom},
            left: {width: t.left - a.left, height: a.height}
        }, l = Object.keys(s).map(function (e) {
            return G({key: e}, s[e], {
                area: function (e) {
                    return e.width * e.height
                }(s[e])
            })
        }).sort(function (e, t) {
            return t.area - e.area
        }), c = l.filter(function (e) {
            var t = e.width, i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        }), u = 0 < c.length ? c[0].key : l[0].key, d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function w(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return g(n, i ? y(t) : s(t, n), i)
    }

    function k(e) {
        var t = getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {width: e.offsetWidth + i, height: e.offsetHeight + n}
    }

    function C(e) {
        var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function S(e, t, n) {
        n = n.split("-")[0];
        var i = k(e), o = {width: i.width, height: i.height}, r = -1 !== ["right", "left"].indexOf(n),
            a = r ? "top" : "left", s = r ? "left" : "top", l = r ? "height" : "width", c = r ? "width" : "height";
        return o[a] = t[a] + t[l] / 2 - i[l] / 2, o[s] = n === s ? t[s] - i[c] : t[C(s)], o
    }

    function _(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function T(t, n, i) {
        return (void 0 === i ? t : t.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var i = _(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(t, "name", i))).forEach(function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = f(n.offsets.popper), n.offsets.reference = f(n.offsets.reference), n = i(n, t))
        }), n
    }

    function E(e, t) {
        return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function A(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var o = t[i], r = o ? "" + o + n : e;
            if (void 0 !== document.body.style[r]) return r
        }
        return null
    }

    function D(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function I(e, t, n, o) {
        n.updateBound = o, D(e).addEventListener("resize", n.updateBound, {passive: !0});
        var r = i(e);
        return function e(t, n, o, r) {
            var a = "BODY" === t.nodeName, s = a ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, o, {passive: !0}), a || e(i(s.parentNode), n, o, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function P() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, D(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function M(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function O(e, t) {
        Object.keys(t).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && M(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function L(e, t, n) {
        var i = _(e, function (e) {
            return e.name === t
        }), o = !!i && e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!o) {
            var r = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }

    function N(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = J.indexOf(e),
            i = J.slice(n + 1).concat(J.slice(0, n));
        return t ? i.reverse() : i
    }

    function F(e, t, n, i) {
        var o = [0, 0], r = -1 !== ["right", "left"].indexOf(i), a = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), s = a.indexOf(_(a, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
        return (c = c.map(function (e, i) {
            var o = (1 === i ? !r : r) ? "height" : "width", a = !1;
            return e.reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return function (e, t, n, i) {
                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +o[1], a = o[2];
                    if (!r) return e;
                    if (0 === a.indexOf("%")) {
                        var s;
                        switch (a) {
                            case"%p":
                                s = n;
                                break;
                            case"%":
                            case"%r":
                            default:
                                s = i
                        }
                        return f(s)[t] / 100 * r
                    }
                    return "vh" === a || "vw" === a ? ("vh" === a ? H(document.documentElement.clientHeight, window.innerHeight || 0) : H(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r
                }(e, o, t, n)
            })
        })).forEach(function (e, t) {
            e.forEach(function (n, i) {
                M(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }), o
    }

    for (var R = Math.min, j = Math.round, $ = Math.floor, H = Math.max, W = "undefined" != typeof window && "undefined" != typeof document, B = ["Edge", "Trident", "Firefox"], V = 0, z = 0; z < B.length; z += 1) if (W && 0 <= navigator.userAgent.indexOf(B[z])) {
        V = 1;
        break
    }
    var q = W && window.Promise ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then(function () {
                    t = !1, e()
                }))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, V))
            }
        }, Y = W && !(!window.MSInputMethodContext || !document.documentMode), U = W && /MSIE 10/.test(navigator.userAgent),
        X = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, K = function () {
            function e(e, t) {
                for (var n, i = 0; i < t.length; i++) (n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), Q = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, G = Object.assign || function (e) {
            for (var t, n = 1; n < arguments.length; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        Z = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        J = Z.slice(3), ee = "flip", te = "clockwise", ne = "counterclockwise", ie = function () {
            function t(n, i) {
                var o = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                X(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(o.update)
                }, this.update = q(this.update.bind(this)), this.options = G({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(G({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                    o.options.modifiers[e] = G({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return G({name: e}, o.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && e(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state)
                }), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }

            return K(t, [{
                key: "update", value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                            e.offsets.reference = w(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = x(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = T(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, E(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[A("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return P.call(this)
                }
            }]), t
        }();
    return ie.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ie.placements = Z, ie.Defaults = {
        placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
                    if (i) {
                        var o = e.offsets, r = o.reference, a = o.popper, s = -1 !== ["bottom", "top"].indexOf(n),
                            l = s ? "left" : "top", c = s ? "width" : "height",
                            u = {start: Q({}, l, r[l]), end: Q({}, l, r[l] + r[c] - a[c])};
                        e.offsets.popper = G({}, a, u[i])
                    }
                    return e
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (e, t) {
                    var n, i = t.offset, o = e.placement, r = e.offsets, a = r.popper, s = r.reference,
                        l = o.split("-")[0];
                    return n = M(+i) ? [+i, 0] : F(i, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (e, t) {
                    var n = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === n && (n = r(n));
                    var i = A("transform"), o = e.instance.popper.style, a = o.top, s = o.left, l = o[i];
                    o.top = "", o.left = "", o[i] = "";
                    var c = b(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    o.top = a, o.left = s, o[i] = l, t.boundaries = c;
                    var u = t.priority, d = e.offsets.popper, h = {
                        primary: function (e) {
                            var n = d[e];
                            return d[e] < c[e] && !t.escapeWithReference && (n = H(d[e], c[e])), Q({}, e, n)
                        }, secondary: function (e) {
                            var n = "right" === e ? "left" : "top", i = d[n];
                            return d[e] > c[e] && !t.escapeWithReference && (i = R(d[n], c[e] - ("right" === e ? d.width : d.height))), Q({}, n, i)
                        }
                    };
                    return u.forEach(function (e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        d = G({}, d, h[t](e))
                    }), e.offsets.popper = d, e
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, n = t.popper, i = t.reference, o = e.placement.split("-")[0], r = $,
                        a = -1 !== ["top", "bottom"].indexOf(o), s = a ? "right" : "bottom", l = a ? "left" : "top",
                        c = a ? "width" : "height";
                    return n[s] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[s]) && (e.offsets.popper[l] = r(i[s])), e
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (e, n) {
                    var i;
                    if (!L(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var o = n.element;
                    if ("string" == typeof o) {
                        if (!(o = e.instance.popper.querySelector(o))) return e
                    } else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var r = e.placement.split("-")[0], a = e.offsets, s = a.popper, l = a.reference,
                        c = -1 !== ["left", "right"].indexOf(r), u = c ? "height" : "width", d = c ? "Top" : "Left",
                        h = d.toLowerCase(), p = c ? "left" : "top", g = c ? "bottom" : "right", m = k(o)[u];
                    l[g] - m < s[h] && (e.offsets.popper[h] -= s[h] - (l[g] - m)), l[h] + m > s[g] && (e.offsets.popper[h] += l[h] + m - s[g]), e.offsets.popper = f(e.offsets.popper);
                    var v = l[h] + l[u] / 2 - m / 2, y = t(e.instance.popper), b = parseFloat(y["margin" + d], 10),
                        x = parseFloat(y["border" + d + "Width"], 10), w = v - e.offsets.popper[h] - b - x;
                    return w = H(R(s[u] - m, w), 0), e.arrowElement = o, e.offsets.arrow = (Q(i = {}, h, j(w)), Q(i, p, ""), i), e
                }, element: "[x-arrow]"
            }, flip: {
                order: 600, enabled: !0, fn: function (e, t) {
                    if (E(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = b(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        i = e.placement.split("-")[0], o = C(i), r = e.placement.split("-")[1] || "", a = [];
                    switch (t.behavior) {
                        case ee:
                            a = [i, o];
                            break;
                        case te:
                            a = N(i);
                            break;
                        case ne:
                            a = N(i, !0);
                            break;
                        default:
                            a = t.behavior
                    }
                    return a.forEach(function (s, l) {
                        if (i !== s || a.length === l + 1) return e;
                        i = e.placement.split("-")[0], o = C(i);
                        var c = e.offsets.popper, u = e.offsets.reference, d = $,
                            h = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                            f = d(c.left) < d(n.left), p = d(c.right) > d(n.right), g = d(c.top) < d(n.top),
                            m = d(c.bottom) > d(n.bottom),
                            v = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && m,
                            y = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!t.flipVariations && (y && "start" === r && f || y && "end" === r && p || !y && "start" === r && g || !y && "end" === r && m);
                        (h || v || b) && (e.flipped = !0, (h || v) && (i = a[l + 1]), b && (r = function (e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = G({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = T(e.instance.modifiers, e, "flip"))
                    }), e
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            }, inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, n = t.split("-")[0], i = e.offsets, o = i.popper, r = i.reference,
                        a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n);
                    return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0), e.placement = C(t), e.offsets.popper = f(o), e
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!L(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, n = _(e.instance.modifiers, function (e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var n = t.x, i = t.y, o = e.offsets.popper, a = _(e.instance.modifiers, function (e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, l, c = void 0 === a ? t.gpuAcceleration : a, u = r(e.instance.popper), d = p(u),
                        h = {position: o.position},
                        f = {left: $(o.left), top: j(o.top), bottom: j(o.bottom), right: $(o.right)},
                        g = "bottom" === n ? "top" : "bottom", m = "right" === i ? "left" : "right", v = A("transform");
                    if (l = "bottom" == g ? "HTML" === u.nodeName ? -u.clientHeight + f.bottom : -d.height + f.bottom : f.top, s = "right" == m ? "HTML" === u.nodeName ? -u.clientWidth + f.right : -d.width + f.right : f.left, c && v) h[v] = "translate3d(" + s + "px, " + l + "px, 0)", h[g] = 0, h[m] = 0, h.willChange = "transform"; else {
                        var y = "bottom" == g ? -1 : 1, b = "right" == m ? -1 : 1;
                        h[g] = l * y, h[m] = s * b, h.willChange = g + ", " + m
                    }
                    var x = {"x-placement": e.placement};
                    return e.attributes = G({}, x, e.attributes), e.styles = G({}, h, e.styles), e.arrowStyles = G({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    return O(e.instance.popper, e.styles), function (e, t) {
                        Object.keys(t).forEach(function (n) {
                            !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                        })
                    }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && O(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, n, i, o) {
                    var r = w(o, t, e, n.positionFixed),
                        a = x(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a), O(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
                }, gpuAcceleration: void 0
            }
        }
    }, ie
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function (e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}, i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function (t) {
                r(e, t, n[t])
            })
        }
        return e
    }

    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = "transitionend";

    function l(e) {
        var n = this, i = !1;
        return t(this).one(c.TRANSITION_END, function () {
            i = !0
        }), setTimeout(function () {
            i || c.triggerTransitionEnd(n)
        }, e), this
    }

    var c = {
        TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        }, getSelectorFromElement: function (e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        }, getTransitionDurationFromElement: function (e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"), i = t(e).css("transition-delay"), o = parseFloat(n),
                r = parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        }, reflow: function (e) {
            return e.offsetHeight
        }, triggerTransitionEnd: function (e) {
            t(e).trigger(s)
        }, supportsTransitionEnd: function () {
            return Boolean(s)
        }, isElement: function (e) {
            return (e[0] || e).nodeType
        }, typeCheckConfig: function (e, t, n) {
            for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                var o = n[i], r = t[i],
                    a = r && c.isElement(r) ? "element" : (s = r, {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
                if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
            }
            var s
        }, findShadowRoot: function (e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null
        }
    };
    t.fn.emulateTransitionEnd = l, t.event.special[c.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function (e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var u = t.fn.alert,
        d = {CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api"},
        h = "alert", f = "fade", p = "show", g = function () {
            function e(e) {
                this._element = e
            }

            var n = e.prototype;
            return n.close = function (e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, n.dispose = function () {
                t.removeData(this._element, "bs.alert"), this._element = null
            }, n._getRootElement = function (e) {
                var n = c.getSelectorFromElement(e), i = !1;
                return n && (i = document.querySelector(n)), i || (i = t(e).closest("." + h)[0]), i
            }, n._triggerCloseEvent = function (e) {
                var n = t.Event(d.CLOSE);
                return t(e).trigger(n), n
            }, n._removeElement = function (e) {
                var n = this;
                if (t(e).removeClass(p), t(e).hasClass(f)) {
                    var i = c.getTransitionDurationFromElement(e);
                    t(e).one(c.TRANSITION_END, function (t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(i)
                } else this._destroyElement(e)
            }, n._destroyElement = function (e) {
                t(e).detach().trigger(d.CLOSED).remove()
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this), o = i.data("bs.alert");
                    o || (o = new e(this), i.data("bs.alert", o)), "close" === n && o[n](this)
                })
            }, e._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), t.fn.alert = g._jQueryInterface, t.fn.alert.Constructor = g, t.fn.alert.noConflict = function () {
        return t.fn.alert = u, g._jQueryInterface
    };
    var m = t.fn.button, v = "active", y = "btn", b = "focus", x = '[data-toggle^="button"]',
        w = '[data-toggle="buttons"]', k = 'input:not([type="hidden"])', C = ".active", S = ".btn", _ = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        }, T = function () {
            function e(e) {
                this._element = e
            }

            var n = e.prototype;
            return n.toggle = function () {
                var e = !0, n = !0, i = t(this._element).closest(w)[0];
                if (i) {
                    var o = this._element.querySelector(k);
                    if (o) {
                        if ("radio" === o.type) if (o.checked && this._element.classList.contains(v)) e = !1; else {
                            var r = i.querySelector(C);
                            r && t(r).removeClass(v)
                        }
                        if (e) {
                            if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            o.checked = !this._element.classList.contains(v), t(o).trigger("change")
                        }
                        o.focus(), n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)), e && t(this._element).toggleClass(v)
            }, n.dispose = function () {
                t.removeData(this._element, "bs.button"), this._element = null
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data("bs.button");
                    i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(_.CLICK_DATA_API, x, function (e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass(y) || (n = t(n).closest(S)), T._jQueryInterface.call(t(n), "toggle")
    }).on(_.FOCUS_BLUR_DATA_API, x, function (e) {
        var n = t(e.target).closest(S)[0];
        t(n).toggleClass(b, /^focus(in)?$/.test(e.type))
    }), t.fn.button = T._jQueryInterface, t.fn.button.Constructor = T, t.fn.button.noConflict = function () {
        return t.fn.button = m, T._jQueryInterface
    };
    var E = "carousel", A = ".bs.carousel", D = t.fn[E],
        I = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, P = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, M = "next", O = "prev", L = "left", N = "right", F = {
            SLIDE: "slide.bs.carousel",
            SLID: "slid.bs.carousel",
            KEYDOWN: "keydown.bs.carousel",
            MOUSEENTER: "mouseenter.bs.carousel",
            MOUSELEAVE: "mouseleave.bs.carousel",
            TOUCHSTART: "touchstart.bs.carousel",
            TOUCHMOVE: "touchmove.bs.carousel",
            TOUCHEND: "touchend.bs.carousel",
            POINTERDOWN: "pointerdown.bs.carousel",
            POINTERUP: "pointerup.bs.carousel",
            DRAG_START: "dragstart.bs.carousel",
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
        }, R = "carousel", j = "active", $ = "slide", H = "carousel-item-right", W = "carousel-item-left",
        B = "carousel-item-next", V = "carousel-item-prev", z = "pointer-event", q = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            ITEM_IMG: ".carousel-item img",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, Y = {TOUCH: "touch", PEN: "pen"}, U = function () {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(q.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }

            var n = e.prototype;
            return n.next = function () {
                this._isSliding || this._slide(M)
            }, n.nextWhenVisible = function () {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, n.prev = function () {
                this._isSliding || this._slide(O)
            }, n.pause = function (e) {
                e || (this._isPaused = !0), this._element.querySelector(q.NEXT_PREV) && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function (e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function (e) {
                var n = this;
                this._activeElement = this._element.querySelector(q.ACTIVE_ITEM);
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(F.SLID, function () {
                    return n.to(e)
                }); else {
                    if (i === e) return this.pause(), void this.cycle();
                    var o = e > i ? M : O;
                    this._slide(o, this._items[e])
                }
            }, n.dispose = function () {
                t(this._element).off(A), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function (e) {
                return e = a({}, I, e), c.typeCheckConfig(E, e, P), e
            }, n._handleSwipe = function () {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    t > 0 && this.prev(), t < 0 && this.next()
                }
            }, n._addEventListeners = function () {
                var e = this;
                this._config.keyboard && t(this._element).on(F.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(F.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(F.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function () {
                var e = this;
                if (this._touchSupported) {
                    var n = function (t) {
                        e._pointerEvent && Y[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                    }, i = function (t) {
                        e._pointerEvent && Y[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                            return e.cycle(t)
                        }, 500 + e._config.interval))
                    };
                    t(this._element.querySelectorAll(q.ITEM_IMG)).on(F.DRAG_START, function (e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(F.POINTERDOWN, function (e) {
                        return n(e)
                    }), t(this._element).on(F.POINTERUP, function (e) {
                        return i(e)
                    }), this._element.classList.add(z)) : (t(this._element).on(F.TOUCHSTART, function (e) {
                        return n(e)
                    }), t(this._element).on(F.TOUCHMOVE, function (t) {
                        return function (t) {
                            t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), t(this._element).on(F.TOUCHEND, function (e) {
                        return i(e)
                    }))
                }
            }, n._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, n._getItemIndex = function (e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(q.ITEM)) : [], this._items.indexOf(e)
            }, n._getItemByDirection = function (e, t) {
                var n = e === M, i = e === O, o = this._getItemIndex(t), r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
                var a = (o + (e === O ? -1 : 1)) % this._items.length;
                return -1 === a ? this._items[this._items.length - 1] : this._items[a]
            }, n._triggerSlideEvent = function (e, n) {
                var i = this._getItemIndex(e), o = this._getItemIndex(this._element.querySelector(q.ACTIVE_ITEM)),
                    r = t.Event(F.SLIDE, {relatedTarget: e, direction: n, from: o, to: i});
                return t(this._element).trigger(r), r
            }, n._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(q.ACTIVE));
                    t(n).removeClass(j);
                    var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(j)
                }
            }, n._slide = function (e, n) {
                var i, o, r, a = this, s = this._element.querySelector(q.ACTIVE_ITEM), l = this._getItemIndex(s),
                    u = n || s && this._getItemByDirection(e, s), d = this._getItemIndex(u), h = Boolean(this._interval);
                if (e === M ? (i = W, o = B, r = L) : (i = H, o = V, r = N), u && t(u).hasClass(j)) this._isSliding = !1; else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && s && u) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(u);
                    var f = t.Event(F.SLID, {relatedTarget: u, direction: r, from: l, to: d});
                    if (t(this._element).hasClass($)) {
                        t(u).addClass(o), c.reflow(u), t(s).addClass(i), t(u).addClass(i);
                        var p = parseInt(u.getAttribute("data-interval"), 10);
                        p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var g = c.getTransitionDurationFromElement(s);
                        t(s).one(c.TRANSITION_END, function () {
                            t(u).removeClass(i + " " + o).addClass(j), t(s).removeClass(j + " " + o + " " + i), a._isSliding = !1, setTimeout(function () {
                                return t(a._element).trigger(f)
                            }, 0)
                        }).emulateTransitionEnd(g)
                    } else t(s).removeClass(j), t(u).addClass(j), this._isSliding = !1, t(this._element).trigger(f);
                    h && this.cycle()
                }
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data("bs.carousel"), o = a({}, I, t(this).data());
                    "object" == typeof n && (o = a({}, o, n));
                    var r = "string" == typeof n ? n : o.slide;
                    if (i || (i = new e(this, o), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n); else if ("string" == typeof r) {
                        if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                        i[r]()
                    } else o.interval && o.ride && (i.pause(), i.cycle())
                })
            }, e._dataApiClickHandler = function (n) {
                var i = c.getSelectorFromElement(this);
                if (i) {
                    var o = t(i)[0];
                    if (o && t(o).hasClass(R)) {
                        var r = a({}, t(o).data(), t(this).data()), s = this.getAttribute("data-slide-to");
                        s && (r.interval = !1), e._jQueryInterface.call(t(o), r), s && t(o).data("bs.carousel").to(s), n.preventDefault()
                    }
                }
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return I
                }
            }]), e
        }();
    t(document).on(F.CLICK_DATA_API, q.DATA_SLIDE, U._dataApiClickHandler), t(window).on(F.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll(q.DATA_RIDE)), n = 0, i = e.length; n < i; n++) {
            var o = t(e[n]);
            U._jQueryInterface.call(o, o.data())
        }
    }), t.fn[E] = U._jQueryInterface, t.fn[E].Constructor = U, t.fn[E].noConflict = function () {
        return t.fn[E] = D, U._jQueryInterface
    };
    var X = "collapse", K = t.fn[X], Q = {toggle: !0, parent: ""}, G = {toggle: "boolean", parent: "(string|element)"},
        Z = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
        }, J = "show", ee = "collapse", te = "collapsing", ne = "collapsed", ie = "width", oe = "height",
        re = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, ae = function () {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(re.DATA_TOGGLE)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i], a = c.getSelectorFromElement(r),
                        s = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
                            return t === e
                        });
                    null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            var n = e.prototype;
            return n.toggle = function () {
                t(this._element).hasClass(J) ? this.hide() : this.show()
            }, n.show = function () {
                var n, i, o = this;
                if (!this._isTransitioning && !t(this._element).hasClass(J) && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(re.ACTIVES)).filter(function (e) {
                    return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(ee)
                })).length && (n = null), !(n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                    var r = t.Event(Z.SHOW);
                    if (t(this._element).trigger(r), !r.isDefaultPrevented()) {
                        n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
                        var a = this._getDimension();
                        t(this._element).removeClass(ee).addClass(te), this._element.style[a] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(ne).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            l = c.getTransitionDurationFromElement(this._element);
                        t(this._element).one(c.TRANSITION_END, function () {
                            t(o._element).removeClass(te).addClass(ee).addClass(J), o._element.style[a] = "", o.setTransitioning(!1), t(o._element).trigger(Z.SHOWN)
                        }).emulateTransitionEnd(l), this._element.style[a] = this._element[s] + "px"
                    }
                }
            }, n.hide = function () {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(J)) {
                    var n = t.Event(Z.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), t(this._element).addClass(te).removeClass(ee).removeClass(J);
                        var o = this._triggerArray.length;
                        if (o > 0) for (var r = 0; r < o; r++) {
                            var a = this._triggerArray[r], s = c.getSelectorFromElement(a);
                            if (null !== s) t([].slice.call(document.querySelectorAll(s))).hasClass(J) || t(a).addClass(ne).attr("aria-expanded", !1)
                        }
                        this.setTransitioning(!0);
                        this._element.style[i] = "";
                        var l = c.getTransitionDurationFromElement(this._element);
                        t(this._element).one(c.TRANSITION_END, function () {
                            e.setTransitioning(!1), t(e._element).removeClass(te).addClass(ee).trigger(Z.HIDDEN)
                        }).emulateTransitionEnd(l)
                    }
                }
            }, n.setTransitioning = function (e) {
                this._isTransitioning = e
            }, n.dispose = function () {
                t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function (e) {
                return (e = a({}, Q, e)).toggle = Boolean(e.toggle), c.typeCheckConfig(X, e, G), e
            }, n._getDimension = function () {
                return t(this._element).hasClass(ie) ? ie : oe
            }, n._getParent = function () {
                var n, i = this;
                c.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(n.querySelectorAll(o));
                return t(r).each(function (t, n) {
                    i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), n
            }, n._addAriaAndCollapsedClass = function (e, n) {
                var i = t(e).hasClass(J);
                n.length && t(n).toggleClass(ne, !i).attr("aria-expanded", i)
            }, e._getTargetFromElement = function (e) {
                var t = c.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this), o = i.data("bs.collapse"), r = a({}, Q, i.data(), "object" == typeof n && n ? n : {});
                    if (!o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || (o = new e(this, r), i.data("bs.collapse", o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return Q
                }
            }]), e
        }();
    t(document).on(Z.CLICK_DATA_API, re.DATA_TOGGLE, function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this), i = c.getSelectorFromElement(this), o = [].slice.call(document.querySelectorAll(i));
        t(o).each(function () {
            var e = t(this), i = e.data("bs.collapse") ? "toggle" : n.data();
            ae._jQueryInterface.call(e, i)
        })
    }), t.fn[X] = ae._jQueryInterface, t.fn[X].Constructor = ae, t.fn[X].noConflict = function () {
        return t.fn[X] = K, ae._jQueryInterface
    };
    var se = "dropdown", le = t.fn[se], ce = new RegExp("38|40|27"), ue = {
            HIDE: "hide.bs.dropdown",
            HIDDEN: "hidden.bs.dropdown",
            SHOW: "show.bs.dropdown",
            SHOWN: "shown.bs.dropdown",
            CLICK: "click.bs.dropdown",
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
        }, de = "disabled", he = "show", fe = "dropup", pe = "dropright", ge = "dropleft", me = "dropdown-menu-right",
        ve = "position-static", ye = '[data-toggle="dropdown"]', be = ".dropdown form", xe = ".dropdown-menu",
        we = ".navbar-nav", ke = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ce = "top-start",
        Se = "top-end", _e = "bottom-start", Te = "bottom-end", Ee = "right-start", Ae = "left-start",
        De = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, Ie = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Pe = function () {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var i = e.prototype;
            return i.toggle = function () {
                if (!this._element.disabled && !t(this._element).hasClass(de)) {
                    var i = e._getParentFromElement(this._element), o = t(this._menu).hasClass(he);
                    if (e._clearMenus(), !o) {
                        var r = {relatedTarget: this._element}, a = t.Event(ue.SHOW, r);
                        if (t(i).trigger(a), !a.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var s = this._element;
                                "parent" === this._config.reference ? s = i : c.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(i).addClass(ve), this._popper = new n(s, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(i).closest(we).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(he), t(i).toggleClass(he).trigger(t.Event(ue.SHOWN, r))
                        }
                    }
                }
            }, i.show = function () {
                if (!(this._element.disabled || t(this._element).hasClass(de) || t(this._menu).hasClass(he))) {
                    var n = {relatedTarget: this._element}, i = t.Event(ue.SHOW, n),
                        o = e._getParentFromElement(this._element);
                    t(o).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(he), t(o).toggleClass(he).trigger(t.Event(ue.SHOWN, n)))
                }
            }, i.hide = function () {
                if (!this._element.disabled && !t(this._element).hasClass(de) && t(this._menu).hasClass(he)) {
                    var n = {relatedTarget: this._element}, i = t.Event(ue.HIDE, n),
                        o = e._getParentFromElement(this._element);
                    t(o).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(he), t(o).toggleClass(he).trigger(t.Event(ue.HIDDEN, n)))
                }
            }, i.dispose = function () {
                t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function () {
                var e = this;
                t(this._element).on(ue.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, i._getConfig = function (e) {
                return e = a({}, this.constructor.Default, t(this._element).data(), e), c.typeCheckConfig(se, e, this.constructor.DefaultType), e
            }, i._getMenuElement = function () {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(xe))
                }
                return this._menu
            }, i._getPlacement = function () {
                var e = t(this._element.parentNode), n = _e;
                return e.hasClass(fe) ? (n = Ce, t(this._menu).hasClass(me) && (n = Se)) : e.hasClass(pe) ? n = Ee : e.hasClass(ge) ? n = Ae : t(this._menu).hasClass(me) && (n = Te), n
            }, i._detectNavbar = function () {
                return t(this._element).closest(".navbar").length > 0
            }, i._getOffset = function () {
                var e = this, t = {};
                return "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = a({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, i._getPopperConfig = function () {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {enabled: !1}), e
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data("bs.dropdown");
                    if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, e._clearMenus = function (n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var i = [].slice.call(document.querySelectorAll(ye)), o = 0, r = i.length; o < r; o++) {
                    var a = e._getParentFromElement(i[o]), s = t(i[o]).data("bs.dropdown"), l = {relatedTarget: i[o]};
                    if (n && "click" === n.type && (l.clickEvent = n), s) {
                        var c = s._menu;
                        if (t(a).hasClass(he) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(a, n.target))) {
                            var u = t.Event(ue.HIDE, l);
                            t(a).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[o].setAttribute("aria-expanded", "false"), t(c).removeClass(he), t(a).removeClass(he).trigger(t.Event(ue.HIDDEN, l)))
                        }
                    }
                }
            }, e._getParentFromElement = function (e) {
                var t, n = c.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function (n) {
                if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(xe).length)) : ce.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(de))) {
                    var i = e._getParentFromElement(this), o = t(i).hasClass(he);
                    if (o && (!o || 27 !== n.which && 32 !== n.which)) {
                        var r = [].slice.call(i.querySelectorAll(ke));
                        if (0 !== r.length) {
                            var a = r.indexOf(n.target);
                            38 === n.which && a > 0 && a--, 40 === n.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus()
                        }
                    } else {
                        if (27 === n.which) {
                            var s = i.querySelector(ye);
                            t(s).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return De
                }
            }, {
                key: "DefaultType", get: function () {
                    return Ie
                }
            }]), e
        }();
    t(document).on(ue.KEYDOWN_DATA_API, ye, Pe._dataApiKeydownHandler).on(ue.KEYDOWN_DATA_API, xe, Pe._dataApiKeydownHandler).on(ue.CLICK_DATA_API + " " + ue.KEYUP_DATA_API, Pe._clearMenus).on(ue.CLICK_DATA_API, ye, function (e) {
        e.preventDefault(), e.stopPropagation(), Pe._jQueryInterface.call(t(this), "toggle")
    }).on(ue.CLICK_DATA_API, be, function (e) {
        e.stopPropagation()
    }), t.fn[se] = Pe._jQueryInterface, t.fn[se].Constructor = Pe, t.fn[se].noConflict = function () {
        return t.fn[se] = le, Pe._jQueryInterface
    };
    var Me = t.fn.modal, Oe = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
        Le = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, Ne = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
        }, Fe = "modal-dialog-scrollable", Re = "modal-scrollbar-measure", je = "modal-backdrop", $e = "modal-open",
        He = "fade", We = "show", Be = {
            DIALOG: ".modal-dialog",
            MODAL_BODY: ".modal-body",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
        }, Ve = function () {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Be.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }

            var n = e.prototype;
            return n.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, n.show = function (e) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(He) && (this._isTransitioning = !0);
                    var i = t.Event(Ne.SHOW, {relatedTarget: e});
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(Ne.CLICK_DISMISS, Be.DATA_DISMISS, function (e) {
                        return n.hide(e)
                    }), t(this._dialog).on(Ne.MOUSEDOWN_DISMISS, function () {
                        t(n._element).one(Ne.MOUSEUP_DISMISS, function (e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return n._showElement(e)
                    }))
                }
            }, n.hide = function (e) {
                var n = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = t.Event(Ne.HIDE);
                    if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = t(this._element).hasClass(He);
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(Ne.FOCUSIN), t(this._element).removeClass(We), t(this._element).off(Ne.CLICK_DISMISS), t(this._dialog).off(Ne.MOUSEDOWN_DISMISS), o) {
                            var r = c.getTransitionDurationFromElement(this._element);
                            t(this._element).one(c.TRANSITION_END, function (e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function () {
                [window, this._element, this._dialog].forEach(function (e) {
                    return t(e).off(".bs.modal")
                }), t(document).off(Ne.FOCUSIN), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function () {
                this._adjustDialog()
            }, n._getConfig = function (e) {
                return e = a({}, Oe, e), c.typeCheckConfig("modal", e, Le), e
            }, n._showElement = function (e) {
                var n = this, i = t(this._element).hasClass(He);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass(Fe) ? this._dialog.querySelector(Be.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, i && c.reflow(this._element), t(this._element).addClass(We), this._config.focus && this._enforceFocus();
                var o = t.Event(Ne.SHOWN, {relatedTarget: e}), r = function () {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                };
                if (i) {
                    var a = c.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(c.TRANSITION_END, r).emulateTransitionEnd(a)
                } else r()
            }, n._enforceFocus = function () {
                var e = this;
                t(document).off(Ne.FOCUSIN).on(Ne.FOCUSIN, function (n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, n._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(Ne.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off(Ne.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function () {
                var e = this;
                this._isShown ? t(window).on(Ne.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : t(window).off(Ne.RESIZE)
            }, n._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                    t(document.body).removeClass($e), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(Ne.HIDDEN)
                })
            }, n._removeBackdrop = function () {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function (e) {
                var n = this, i = t(this._element).hasClass(He) ? He : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = je, i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(Ne.CLICK_DISMISS, function (e) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                    }), i && c.reflow(this._backdrop), t(this._backdrop).addClass(We), !e) return;
                    if (!i) return void e();
                    var o = c.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(o)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(We);
                    var r = function () {
                        n._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(He)) {
                        var a = c.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(a)
                    } else r()
                } else e && e()
            }, n._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(Be.FIXED_CONTENT)),
                        i = [].slice.call(document.querySelectorAll(Be.STICKY_CONTENT));
                    t(n).each(function (n, i) {
                        var o = i.style.paddingRight, r = t(i).css("padding-right");
                        t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }), t(i).each(function (n, i) {
                        var o = i.style.marginRight, r = t(i).css("margin-right");
                        t(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    });
                    var o = document.body.style.paddingRight, r = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass($e)
            }, n._resetScrollbar = function () {
                var e = [].slice.call(document.querySelectorAll(Be.FIXED_CONTENT));
                t(e).each(function (e, n) {
                    var i = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + Be.STICKY_CONTENT));
                t(n).each(function (e, n) {
                    var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = Re, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var o = t(this).data("bs.modal"), r = a({}, Oe, t(this).data(), "object" == typeof n && n ? n : {});
                    if (o || (o = new e(this, r), t(this).data("bs.modal", o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](i)
                    } else r.show && o.show(i)
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return Oe
                }
            }]), e
        }();
    t(document).on(Ne.CLICK_DATA_API, Be.DATA_TOGGLE, function (e) {
        var n, i = this, o = c.getSelectorFromElement(this);
        o && (n = document.querySelector(o));
        var r = t(n).data("bs.modal") ? "toggle" : a({}, t(n).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var s = t(n).one(Ne.SHOW, function (e) {
            e.isDefaultPrevented() || s.one(Ne.HIDDEN, function () {
                t(i).is(":visible") && i.focus()
            })
        });
        Ve._jQueryInterface.call(t(n), r, this)
    }), t.fn.modal = Ve._jQueryInterface, t.fn.modal.Constructor = Ve, t.fn.modal.noConflict = function () {
        return t.fn.modal = Me, Ve._jQueryInterface
    };
    var ze = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], qe = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }, Ye = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Ue = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function Xe(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), a = function (e, n) {
            var i = r[e], a = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
            var s = [].slice.call(i.attributes), l = [].concat(t["*"] || [], t[a] || []);
            s.forEach(function (e) {
                (function (e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(n)) return -1 === ze.indexOf(n) || Boolean(e.nodeValue.match(Ye) || e.nodeValue.match(Ue));
                    for (var i = t.filter(function (e) {
                        return e instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++) if (n.match(i[o])) return !0;
                    return !1
                })(e, l) || i.removeAttribute(e.nodeName)
            })
        }, s = 0, l = r.length; s < l; s++) a(s);
        return i.body.innerHTML
    }

    var Ke = "tooltip", Qe = t.fn.tooltip, Ge = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Ze = ["sanitize", "whiteList", "sanitizeFn"], Je = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        }, et = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, tt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: qe
        }, nt = "show", it = "out", ot = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        }, rt = "fade", at = "show", st = ".tooltip-inner", lt = ".arrow", ct = "hover", ut = "focus", dt = "click",
        ht = "manual", ft = function () {
            function e(e, t) {
                if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }

            var i = e.prototype;
            return i.enable = function () {
                this._isEnabled = !0
            }, i.disable = function () {
                this._isEnabled = !1
            }, i.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function (e) {
                if (this._isEnabled) if (e) {
                    var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
                    i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (t(this.getTipElement()).hasClass(at)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, i.dispose = function () {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function () {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var o = c.findShadowRoot(this.element),
                        r = t.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r) return;
                    var a = this.getTipElement(), s = c.getUID(this.constructor.NAME);
                    a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(a).addClass(rt);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                        u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var d = this._getContainer();
                    t(a).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(a).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, {
                        placement: u,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: lt},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), t(a).addClass(at), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var h = function () {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === it && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(rt)) {
                        var f = c.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(c.TRANSITION_END, h).emulateTransitionEnd(f)
                    } else h()
                }
            }, i.hide = function (e) {
                var n = this, i = this.getTipElement(), o = t.Event(this.constructor.Event.HIDE), r = function () {
                    n._hoverState !== nt && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                };
                if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (t(i).removeClass(at), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[dt] = !1, this._activeTrigger[ut] = !1, this._activeTrigger[ct] = !1, t(this.tip).hasClass(rt)) {
                        var a = c.getTransitionDurationFromElement(i);
                        t(i).one(c.TRANSITION_END, r).emulateTransitionEnd(a)
                    } else r();
                    this._hoverState = ""
                }
            }, i.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function () {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, i.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, i.setContent = function () {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(st)), this.getTitle()), t(e).removeClass(rt + " " + at)
            }, i.setElementContent = function (e, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Xe(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
            }, i.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, i._getOffset = function () {
                var e = this, t = {};
                return "function" == typeof this.config.offset ? t.fn = function (t) {
                    return t.offsets = a({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, i._getContainer = function () {
                return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, i._getAttachment = function (e) {
                return et[e.toUpperCase()]
            }, i._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                        return e.toggle(t)
                    }); else if (n !== ht) {
                        var i = n === ct ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            o = n === ct ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function (t) {
                            return e._enter(t)
                        }).on(o, e.config.selector, function (t) {
                            return e._leave(t)
                        })
                    }
                }), t(this.element).closest(".modal").on("hide.bs.modal", function () {
                    e.element && e.hide()
                }), this.config.selector ? this.config = a({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? ut : ct] = !0), t(n.getTipElement()).hasClass(at) || n._hoverState === nt ? n._hoverState = nt : (clearTimeout(n._timeout), n._hoverState = nt, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                    n._hoverState === nt && n.show()
                }, n.config.delay.show) : n.show())
            }, i._leave = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? ut : ct] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = it, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                    n._hoverState === it && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, i._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                return !1
            }, i._getConfig = function (e) {
                var n = t(this.element).data();
                return Object.keys(n).forEach(function (e) {
                    -1 !== Ze.indexOf(e) && delete n[e]
                }), "number" == typeof (e = a({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c.typeCheckConfig(Ke, e, this.constructor.DefaultType), e.sanitize && (e.template = Xe(e.template, e.whiteList, e.sanitizeFn)), e
            }, i._getDelegateConfig = function () {
                var e = {};
                if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, i._cleanTipClass = function () {
                var e = t(this.getTipElement()), n = e.attr("class").match(Ge);
                null !== n && n.length && e.removeClass(n.join(""))
            }, i._handlePopperPlacementChange = function (e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, i._fixTransition = function () {
                var e = this.getTipElement(), n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(rt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data("bs.tooltip"), o = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, o), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return tt
                }
            }, {
                key: "NAME", get: function () {
                    return Ke
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.tooltip"
                }
            }, {
                key: "Event", get: function () {
                    return ot
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType", get: function () {
                    return Je
                }
            }]), e
        }();
    t.fn.tooltip = ft._jQueryInterface, t.fn.tooltip.Constructor = ft, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = Qe, ft._jQueryInterface
    };
    var pt = "popover", gt = t.fn.popover, mt = new RegExp("(^|\\s)bs-popover\\S+", "g"), vt = a({}, ft.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), yt = a({}, ft.DefaultType, {content: "(string|element|function)"}), bt = "fade", xt = "show",
        wt = ".popover-header", kt = ".popover-body", Ct = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        }, St = function (e) {
            var n, i;

            function r() {
                return e.apply(this, arguments) || this
            }

            i = e, (n = r).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
            var a = r.prototype;
            return a.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, a.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-popover-" + e)
            }, a.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, a.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(wt), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(kt), n), e.removeClass(bt + " " + xt)
            }, a._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, a._cleanTipClass = function () {
                var e = t(this.getTipElement()), n = e.attr("class").match(mt);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }, r._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = t(this).data("bs.popover"), i = "object" == typeof e ? e : null;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new r(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, o(r, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return vt
                }
            }, {
                key: "NAME", get: function () {
                    return pt
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.popover"
                }
            }, {
                key: "Event", get: function () {
                    return Ct
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType", get: function () {
                    return yt
                }
            }]), r
        }(ft);
    t.fn.popover = St._jQueryInterface, t.fn.popover.Constructor = St, t.fn.popover.noConflict = function () {
        return t.fn.popover = gt, St._jQueryInterface
    };
    var _t = "scrollspy", Tt = t.fn[_t], Et = {offset: 10, method: "auto", target: ""},
        At = {offset: "number", method: "string", target: "(string|element)"}, Dt = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
        }, It = "dropdown-item", Pt = "active", Mt = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, Ot = "offset", Lt = "position", Nt = function () {
            function e(e, n) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + Mt.NAV_LINKS + "," + this._config.target + " " + Mt.LIST_ITEMS + "," + this._config.target + " " + Mt.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(Dt.SCROLL, function (e) {
                    return i._process(e)
                }), this.refresh(), this._process()
            }

            var n = e.prototype;
            return n.refresh = function () {
                var e = this, n = this._scrollElement === this._scrollElement.window ? Ot : Lt,
                    i = "auto" === this._config.method ? n : this._config.method, o = i === Lt ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
                    var n, r = c.getSelectorFromElement(e);
                    if (r && (n = document.querySelector(r)), n) {
                        var a = n.getBoundingClientRect();
                        if (a.width || a.height) return [t(n)[i]().top + o, r]
                    }
                    return null
                }).filter(function (e) {
                    return e
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, n.dispose = function () {
                t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function (e) {
                if ("string" != typeof (e = a({}, Et, "object" == typeof e && e ? e : {})).target) {
                    var n = t(e.target).attr("id");
                    n || (n = c.getUID(_t), t(e.target).attr("id", n)), e.target = "#" + n
                }
                return c.typeCheckConfig(_t, e, At), e
            }, n._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function () {
                var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, n._activate = function (e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",").map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                }), i = t([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass(It) ? (i.closest(Mt.DROPDOWN).find(Mt.DROPDOWN_TOGGLE).addClass(Pt), i.addClass(Pt)) : (i.addClass(Pt), i.parents(Mt.NAV_LIST_GROUP).prev(Mt.NAV_LINKS + ", " + Mt.LIST_ITEMS).addClass(Pt), i.parents(Mt.NAV_LIST_GROUP).prev(Mt.NAV_ITEMS).children(Mt.NAV_LINKS).addClass(Pt)), t(this._scrollElement).trigger(Dt.ACTIVATE, {relatedTarget: e})
            }, n._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
                    return e.classList.contains(Pt)
                }).forEach(function (e) {
                    return e.classList.remove(Pt)
                })
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this).data("bs.scrollspy");
                    if (i || (i = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return Et
                }
            }]), e
        }();
    t(window).on(Dt.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll(Mt.DATA_SPY)), n = e.length; n--;) {
            var i = t(e[n]);
            Nt._jQueryInterface.call(i, i.data())
        }
    }), t.fn[_t] = Nt._jQueryInterface, t.fn[_t].Constructor = Nt, t.fn[_t].noConflict = function () {
        return t.fn[_t] = Tt, Nt._jQueryInterface
    };
    var Ft = t.fn.tab, Rt = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
        }, jt = "dropdown-menu", $t = "active", Ht = "disabled", Wt = "fade", Bt = "show", Vt = ".dropdown",
        zt = ".nav, .list-group", qt = ".active", Yt = "> li > .active",
        Ut = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Xt = ".dropdown-toggle",
        Kt = "> .dropdown-menu .active", Qt = function () {
            function e(e) {
                this._element = e
            }

            var n = e.prototype;
            return n.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass($t) || t(this._element).hasClass(Ht))) {
                    var n, i, o = t(this._element).closest(zt)[0], r = c.getSelectorFromElement(this._element);
                    if (o) {
                        var a = "UL" === o.nodeName || "OL" === o.nodeName ? Yt : qt;
                        i = (i = t.makeArray(t(o).find(a)))[i.length - 1]
                    }
                    var s = t.Event(Rt.HIDE, {relatedTarget: this._element}), l = t.Event(Rt.SHOW, {relatedTarget: i});
                    if (i && t(i).trigger(s), t(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (n = document.querySelector(r)), this._activate(this._element, o);
                        var u = function () {
                            var n = t.Event(Rt.HIDDEN, {relatedTarget: e._element}),
                                o = t.Event(Rt.SHOWN, {relatedTarget: i});
                            t(i).trigger(n), t(e._element).trigger(o)
                        };
                        n ? this._activate(n, n.parentNode, u) : u()
                    }
                }
            }, n.dispose = function () {
                t.removeData(this._element, "bs.tab"), this._element = null
            }, n._activate = function (e, n, i) {
                var o = this, r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(qt) : t(n).find(Yt))[0],
                    a = i && r && t(r).hasClass(Wt), s = function () {
                        return o._transitionComplete(e, r, i)
                    };
                if (r && a) {
                    var l = c.getTransitionDurationFromElement(r);
                    t(r).removeClass(Bt).one(c.TRANSITION_END, s).emulateTransitionEnd(l)
                } else s()
            }, n._transitionComplete = function (e, n, i) {
                if (n) {
                    t(n).removeClass($t);
                    var o = t(n.parentNode).find(Kt)[0];
                    o && t(o).removeClass($t), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass($t), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), c.reflow(e), e.classList.contains(Wt) && e.classList.add(Bt), e.parentNode && t(e.parentNode).hasClass(jt)) {
                    var r = t(e).closest(Vt)[0];
                    if (r) {
                        var a = [].slice.call(r.querySelectorAll(Xt));
                        t(a).addClass($t)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this), o = i.data("bs.tab");
                    if (o || (o = new e(this), i.data("bs.tab", o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(Rt.CLICK_DATA_API, Ut, function (e) {
        e.preventDefault(), Qt._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = Qt._jQueryInterface, t.fn.tab.Constructor = Qt, t.fn.tab.noConflict = function () {
        return t.fn.tab = Ft, Qt._jQueryInterface
    };
    var Gt = t.fn.toast, Zt = {
            CLICK_DISMISS: "click.dismiss.bs.toast",
            HIDE: "hide.bs.toast",
            HIDDEN: "hidden.bs.toast",
            SHOW: "show.bs.toast",
            SHOWN: "shown.bs.toast"
        }, Jt = "fade", en = "hide", tn = "show", nn = "showing",
        on = {animation: "boolean", autohide: "boolean", delay: "number"},
        rn = {animation: !0, autohide: !0, delay: 500}, an = '[data-dismiss="toast"]', sn = function () {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }

            var n = e.prototype;
            return n.show = function () {
                var e = this;
                t(this._element).trigger(Zt.SHOW), this._config.animation && this._element.classList.add(Jt);
                var n = function () {
                    e._element.classList.remove(nn), e._element.classList.add(tn), t(e._element).trigger(Zt.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove(en), this._element.classList.add(nn), this._config.animation) {
                    var i = c.getTransitionDurationFromElement(this._element);
                    t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, n.hide = function (e) {
                var n = this;
                this._element.classList.contains(tn) && (t(this._element).trigger(Zt.HIDE), e ? this._close() : this._timeout = setTimeout(function () {
                    n._close()
                }, this._config.delay))
            }, n.dispose = function () {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(tn) && this._element.classList.remove(tn), t(this._element).off(Zt.CLICK_DISMISS), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
            }, n._getConfig = function (e) {
                return e = a({}, rn, t(this._element).data(), "object" == typeof e && e ? e : {}), c.typeCheckConfig("toast", e, this.constructor.DefaultType), e
            }, n._setListeners = function () {
                var e = this;
                t(this._element).on(Zt.CLICK_DISMISS, an, function () {
                    return e.hide(!0)
                })
            }, n._close = function () {
                var e = this, n = function () {
                    e._element.classList.add(en), t(e._element).trigger(Zt.HIDDEN)
                };
                if (this._element.classList.remove(tn), this._config.animation) {
                    var i = c.getTransitionDurationFromElement(this._element);
                    t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, e._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = t(this), o = i.data("bs.toast");
                    if (o || (o = new e(this, "object" == typeof n && n), i.data("bs.toast", o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](this)
                    }
                })
            }, o(e, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType", get: function () {
                    return on
                }
            }, {
                key: "Default", get: function () {
                    return rn
                }
            }]), e
        }();
    t.fn.toast = sn._jQueryInterface, t.fn.toast.Constructor = sn, t.fn.toast.noConflict = function () {
        return t.fn.toast = Gt, sn._jQueryInterface
    }, function () {
        if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(), e.Util = c, e.Alert = g, e.Button = T, e.Carousel = U, e.Collapse = ae, e.Dropdown = Pe, e.Modal = Ve, e.Popover = St, e.Scrollspy = Nt, e.Tab = Qt, e.Toast = sn, e.Tooltip = ft, Object.defineProperty(e, "__esModule", {value: !0})
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (e, t, n, i, o) {
        return jQuery.easing[jQuery.easing.def](e, t, n, i, o)
    }, easeInQuad: function (e, t, n, i, o) {
        return i * (t /= o) * t + n
    }, easeOutQuad: function (e, t, n, i, o) {
        return -i * (t /= o) * (t - 2) + n
    }, easeInOutQuad: function (e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
    }, easeInCubic: function (e, t, n, i, o) {
        return i * (t /= o) * t * t + n
    }, easeOutCubic: function (e, t, n, i, o) {
        return i * ((t = t / o - 1) * t * t + 1) + n
    }, easeInOutCubic: function (e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    }, easeInQuart: function (e, t, n, i, o) {
        return i * (t /= o) * t * t * t + n
    }, easeOutQuart: function (e, t, n, i, o) {
        return -i * ((t = t / o - 1) * t * t * t - 1) + n
    }, easeInOutQuart: function (e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
    }, easeInQuint: function (e, t, n, i, o) {
        return i * (t /= o) * t * t * t * t + n
    }, easeOutQuint: function (e, t, n, i, o) {
        return i * ((t = t / o - 1) * t * t * t * t + 1) + n
    }, easeInOutQuint: function (e, t, n, i, o) {
        return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    }, easeInSine: function (e, t, n, i, o) {
        return -i * Math.cos(t / o * (Math.PI / 2)) + i + n
    }, easeOutSine: function (e, t, n, i, o) {
        return i * Math.sin(t / o * (Math.PI / 2)) + n
    }, easeInOutSine: function (e, t, n, i, o) {
        return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n
    }, easeInExpo: function (e, t, n, i, o) {
        return 0 == t ? n : i * Math.pow(2, 10 * (t / o - 1)) + n
    }, easeOutExpo: function (e, t, n, i, o) {
        return t == o ? n + i : i * (1 - Math.pow(2, -10 * t / o)) + n
    }, easeInOutExpo: function (e, t, n, i, o) {
        return 0 == t ? n : t == o ? n + i : (t /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
    }, easeInCirc: function (e, t, n, i, o) {
        return -i * (Math.sqrt(1 - (t /= o) * t) - 1) + n
    }, easeOutCirc: function (e, t, n, i, o) {
        return i * Math.sqrt(1 - (t = t / o - 1) * t) + n
    }, easeInOutCirc: function (e, t, n, i, o) {
        return (t /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    }, easeInElastic: function (e, t, n, i, o) {
        var r = 1.70158, a = 0, s = i;
        if (0 == t) return n;
        if (1 == (t /= o)) return n + i;
        if (a || (a = .3 * o), s < Math.abs(i)) {
            s = i;
            r = a / 4
        } else r = a / (2 * Math.PI) * Math.asin(i / s);
        return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) + n
    }, easeOutElastic: function (e, t, n, i, o) {
        var r = 1.70158, a = 0, s = i;
        if (0 == t) return n;
        if (1 == (t /= o)) return n + i;
        if (a || (a = .3 * o), s < Math.abs(i)) {
            s = i;
            r = a / 4
        } else r = a / (2 * Math.PI) * Math.asin(i / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * o - r) * (2 * Math.PI) / a) + i + n
    }, easeInOutElastic: function (e, t, n, i, o) {
        var r = 1.70158, a = 0, s = i;
        if (0 == t) return n;
        if (2 == (t /= o / 2)) return n + i;
        if (a || (a = o * (.3 * 1.5)), s < Math.abs(i)) {
            s = i;
            r = a / 4
        } else r = a / (2 * Math.PI) * Math.asin(i / s);
        return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) * -.5 + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) * .5 + i + n
    }, easeInBack: function (e, t, n, i, o, r) {
        return void 0 == r && (r = 1.70158), i * (t /= o) * t * ((r + 1) * t - r) + n
    }, easeOutBack: function (e, t, n, i, o, r) {
        return void 0 == r && (r = 1.70158), i * ((t = t / o - 1) * t * ((r + 1) * t + r) + 1) + n
    }, easeInOutBack: function (e, t, n, i, o, r) {
        return void 0 == r && (r = 1.70158), (t /= o / 2) < 1 ? i / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + n : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + n
    }, easeInBounce: function (e, t, n, i, o) {
        return i - jQuery.easing.easeOutBounce(e, o - t, 0, i, o) + n
    }, easeOutBounce: function (e, t, n, i, o) {
        return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    }, easeInOutBounce: function (e, t, n, i, o) {
        return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, i, o) + .5 * i + n
    }
}), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (e) {
    function t(e) {
        var t = e.length, i = n.type(e);
        return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    if (!e.jQuery) {
        var n = function (e, t) {
            return new n.fn.init(e, t)
        };
        n.isWindow = function (e) {
            return null != e && e == e.window
        }, n.type = function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[a.call(e)] || "object" : typeof e
        }, n.isArray = Array.isArray || function (e) {
            return "array" === n.type(e)
        }, n.isPlainObject = function (e) {
            var t;
            if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
            try {
                if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            for (t in e) ;
            return void 0 === t || r.call(e, t)
        }, n.each = function (e, n, i) {
            var o = 0, r = e.length, a = t(e);
            if (i) {
                if (a) for (; r > o && !1 !== n.apply(e[o], i); o++) ; else for (o in e) if (!1 === n.apply(e[o], i)) break
            } else if (a) for (; r > o && !1 !== n.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === n.call(e[o], o, e[o])) break;
            return e
        }, n.data = function (e, t, o) {
            if (void 0 === o) {
                var r = (a = e[n.expando]) && i[a];
                if (void 0 === t) return r;
                if (r && t in r) return r[t]
            } else if (void 0 !== t) {
                var a = e[n.expando] || (e[n.expando] = ++n.uuid);
                return i[a] = i[a] || {}, i[a][t] = o, o
            }
        }, n.removeData = function (e, t) {
            var o = e[n.expando], r = o && i[o];
            r && n.each(t, function (e, t) {
                delete r[t]
            })
        }, n.extend = function () {
            var e, t, i, o, r, a, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++) if (null != (r = arguments[l])) for (o in r) e = s[o], s !== (i = r[o]) && (u && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[o] = n.extend(u, a, i)) : void 0 !== i && (s[o] = i));
            return s
        }, n.queue = function (e, i, o) {
            if (e) {
                i = (i || "fx") + "queue";
                var r = n.data(e, i);
                return o ? (!r || n.isArray(o) ? r = n.data(e, i, function (e, n) {
                    var i = n || [];
                    return null != e && (t(Object(e)) ? function (e, t) {
                        for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
                        if (n != n) for (; void 0 !== t[i];) e[o++] = t[i++];
                        e.length = o
                    }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                }(o)) : r.push(o), r) : r || []
            }
        }, n.dequeue = function (e, t) {
            n.each(e.nodeType ? [e] : e, function (e, i) {
                t = t || "fx";
                var o = n.queue(i, t), r = o.shift();
                "inprogress" === r && (r = o.shift()), r && ("fx" === t && o.unshift("inprogress"), r.call(i, function () {
                    n.dequeue(i, t)
                }))
            })
        }, n.fn = n.prototype = {
            init: function (e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            }, offset: function () {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            }, position: function () {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }

                var t = this[0], e = e.apply(t), i = this.offset(),
                    o = /^(?:body|html)$/i.test(e.nodeName) ? {top: 0, left: 0} : n(e).offset();
                return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: i.top - o.top,
                    left: i.left - o.left
                }
            }
        };
        var i = {};
        n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
        for (var o = {}, r = o.hasOwnProperty, a = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) o["[object " + s[l] + "]"] = s[l].toLowerCase();
        n.fn.init.prototype = n.fn, e.Velocity = {Utilities: n}
    }
}(window), function (e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function () {
    return function (e, t, n, i) {
        function o(e) {
            return f.isWrapped(e) ? e = [].slice.call(e) : f.isNode(e) && (e = [e]), e
        }

        function r(e) {
            var t = u.data(e, "velocity");
            return null === t ? i : t
        }

        function a(e, n, i, o) {
            function r(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function a(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, n) {
                return ((r(t, n) * e + a(t, n)) * e + s(t)) * e
            }

            function c(e, t, n) {
                return 3 * r(t, n) * e * e + 2 * a(t, n) * e + s(t)
            }

            function u(t, n) {
                for (var o = 0; f > o; ++o) {
                    var r = c(n, e, i);
                    if (0 === r) return n;
                    n -= (l(n, e, i) - t) / r
                }
                return n
            }

            function d(t, n, o) {
                var r, a, s = 0;
                do {
                    (r = l(a = n + (o - n) / 2, e, i) - t) > 0 ? o = a : n = a
                } while (Math.abs(r) > g && ++s < m);
                return a
            }

            function h() {
                k = !0, (e != n || i != o) && function () {
                    for (var t = 0; v > t; ++t) w[t] = l(t * y, e, i)
                }()
            }

            var f = 4, p = .001, g = 1e-7, m = 10, v = 11, y = 1 / (v - 1), b = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var x = 0; 4 > x; ++x) if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
            e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
            var w = b ? new Float32Array(v) : new Array(v), k = !1, C = function (t) {
                return k || h(), e === n && i === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(function (t) {
                    for (var n = 0, o = 1, r = v - 1; o != r && w[o] <= t; ++o) n += y;
                    var a = n + (t - w[--o]) / (w[o + 1] - w[o]) * y, s = c(a, e, i);
                    return s >= p ? u(t, a) : 0 == s ? a : d(t, n, n + y)
                }(t), n, o)
            };
            C.getControlPoints = function () {
                return [{x: e, y: n}, {x: i, y: o}]
            };
            var S = "generateBezier(" + [e, n, i, o] + ")";
            return C.toString = function () {
                return S
            }, C
        }

        function s(e, t) {
            var n = e;
            return f.isString(e) ? v.Easings[e] || (n = !1) : n = f.isArray(e) && 1 === e.length ? function (e) {
                return function (t) {
                    return Math.round(t * e) * (1 / e)
                }
            }.apply(null, e) : f.isArray(e) && 2 === e.length ? y.apply(null, e.concat([t])) : !(!f.isArray(e) || 4 !== e.length) && a.apply(null, e), !1 === n && (n = v.Easings[v.defaults.easing] ? v.defaults.easing : m), n
        }

        function l(e) {
            if (e) {
                var t = (new Date).getTime(), n = v.State.calls.length;
                n > 1e4 && (v.State.calls = function (e) {
                    for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                        var o = e[t];
                        o && i.push(o)
                    }
                    return i
                }(v.State.calls));
                for (var o = 0; n > o; o++) if (v.State.calls[o]) {
                    var a = v.State.calls[o], s = a[0], d = a[2], h = a[3], p = !!h, g = null;
                    h || (h = v.State.calls[o][3] = t - 16);
                    for (var m = Math.min((t - h) / d.duration, 1), y = 0, x = s.length; x > y; y++) {
                        var k = s[y], C = k.element;
                        if (r(C)) {
                            var S = !1;
                            if (d.display !== i && null !== d.display && "none" !== d.display) {
                                if ("flex" === d.display) {
                                    u.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (e, t) {
                                        b.setPropertyValue(C, "display", t)
                                    })
                                }
                                b.setPropertyValue(C, "display", d.display)
                            }
                            for (var _ in d.visibility !== i && "hidden" !== d.visibility && b.setPropertyValue(C, "visibility", d.visibility), k) if ("element" !== _) {
                                var T, E = k[_], A = f.isString(E.easing) ? v.Easings[E.easing] : E.easing;
                                if (1 === m) T = E.endValue; else {
                                    var D = E.endValue - E.startValue;
                                    if (T = E.startValue + D * A(m, d, D), !p && T === E.currentValue) continue
                                }
                                if (E.currentValue = T, "tween" === _) g = T; else {
                                    if (b.Hooks.registered[_]) {
                                        var I = b.Hooks.getRoot(_), P = r(C).rootPropertyValueCache[I];
                                        P && (E.rootPropertyValue = P)
                                    }
                                    var M = b.setPropertyValue(C, _, E.currentValue + (0 === parseFloat(T) ? "" : E.unitType), E.rootPropertyValue, E.scrollData);
                                    b.Hooks.registered[_] && (r(C).rootPropertyValueCache[I] = b.Normalizations.registered[I] ? b.Normalizations.registered[I]("extract", null, M[1]) : M[1]), "transform" === M[0] && (S = !0)
                                }
                            }
                            d.mobileHA && r(C).transformCache.translate3d === i && (r(C).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && b.flushTransformCache(C)
                        }
                    }
                    d.display !== i && "none" !== d.display && (v.State.calls[o][2].display = !1), d.visibility !== i && "hidden" !== d.visibility && (v.State.calls[o][2].visibility = !1), d.progress && d.progress.call(a[1], a[1], m, Math.max(0, h + d.duration - t), h, g), 1 === m && c(o)
                }
            }
            v.State.isTicking && w(l)
        }

        function c(e, t) {
            if (!v.State.calls[e]) return !1;
            for (var n = v.State.calls[e][0], o = v.State.calls[e][1], a = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, c = 0, d = n.length; d > c; c++) {
                var h = n[c].element;
                if (t || a.loop || ("none" === a.display && b.setPropertyValue(h, "display", a.display), "hidden" === a.visibility && b.setPropertyValue(h, "visibility", a.visibility)), !0 !== a.loop && (u.queue(h)[1] === i || !/\.velocityQueueEntryFlag/i.test(u.queue(h)[1])) && r(h)) {
                    r(h).isAnimating = !1, r(h).rootPropertyValueCache = {};
                    var f = !1;
                    u.each(b.Lists.transforms3D, function (e, t) {
                        var n = /^scale/.test(t) ? 1 : 0, o = r(h).transformCache[t];
                        r(h).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(o) && (f = !0, delete r(h).transformCache[t])
                    }), a.mobileHA && (f = !0, delete r(h).transformCache.translate3d), f && b.flushTransformCache(h), b.Values.removeClass(h, "velocity-animating")
                }
                if (!t && a.complete && !a.loop && c === d - 1) try {
                    a.complete.call(o, o)
                } catch (e) {
                    setTimeout(function () {
                        throw e
                    }, 1)
                }
                s && !0 !== a.loop && s(o), r(h) && !0 === a.loop && !t && (u.each(r(h).tweensContainer, function (e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), v(h, "reverse", {loop: !0, delay: a.delay})), !1 !== a.queue && u.dequeue(h, a.queue)
            }
            v.State.calls[e] = !1;
            for (var p = 0, g = v.State.calls.length; g > p; p++) if (!1 !== v.State.calls[p]) {
                l = !0;
                break
            }
            !1 === l && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
        }

        var u, d = function () {
            if (n.documentMode) return n.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = n.createElement("div");
                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
            }
            return i
        }(), h = function () {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                var n, i = (new Date).getTime();
                return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function () {
                    t(i + n)
                }, n)
            }
        }(), f = {
            isString: function (e) {
                return "string" == typeof e
            }, isArray: Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, isFunction: function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }, isNode: function (e) {
                return e && e.nodeType
            }, isNodeList: function (e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            }, isWrapped: function (e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            }, isSVG: function (e) {
                return t.SVGElement && e instanceof t.SVGElement
            }, isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0
            }
        }, p = !1;
        if (e.fn && e.fn.jquery ? (u = e, p = !0) : u = t.Velocity.Utilities, 8 >= d && !p) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(7 >= d)) {
            var g = 400, m = "swing", v = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: t.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: n.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: u,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                    queue: "",
                    duration: g,
                    easing: m,
                    begin: i,
                    complete: i,
                    progress: i,
                    display: i,
                    visibility: i,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function (e) {
                    u.data(e, "velocity", {
                        isSVG: f.isSVG(e),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {major: 1, minor: 2, patch: 2},
                debug: !1
            };
            t.pageYOffset !== i ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
            var y = function () {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, n, i) {
                    var o = {x: t.x + i.dx * n, v: t.v + i.dv * n, tension: t.tension, friction: t.friction};
                    return {dx: o.v, dv: e(o)}
                }

                function n(n, i) {
                    var o = {dx: n.v, dv: e(n)}, r = t(n, .5 * i, o), a = t(n, .5 * i, r), s = t(n, i, a),
                        l = 1 / 6 * (o.dx + 2 * (r.dx + a.dx) + s.dx), c = 1 / 6 * (o.dv + 2 * (r.dv + a.dv) + s.dv);
                    return n.x = n.x + l * i, n.v = n.v + c * i, n
                }

                return function e(t, i, o) {
                    var r, a, s, l = {x: -1, v: 0, tension: null, friction: null}, c = [0], u = 0;
                    for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, o = o || null, l.tension = t, l.friction = i, (r = null !== o) ? a = (u = e(t, i)) / o * .016 : a = .016; s = n(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;) ;
                    return r ? function (e) {
                        return c[e * (c.length - 1) | 0]
                    } : u
                }
            }();
            v.Easings = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, spring: function (e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, u.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
                v.Easings[t[0]] = a.apply(null, t[1])
            });
            var b = v.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    }, registered: {}, register: function () {
                        for (var e = 0; e < b.Lists.colors.length; e++) {
                            var t = "color" === b.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            b.Hooks.templates[b.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var n, i, o;
                        if (d) for (n in b.Hooks.templates) {
                            o = (i = b.Hooks.templates[n])[0].split(" ");
                            var r = i[1].match(b.RegEx.valueSplit);
                            "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), b.Hooks.templates[n] = [o.join(" "), r.join(" ")])
                        }
                        for (n in b.Hooks.templates) for (var e in o = (i = b.Hooks.templates[n])[0].split(" ")) {
                            var a = n + o[e], s = e;
                            b.Hooks.registered[a] = [n, s]
                        }
                    }, getRoot: function (e) {
                        var t = b.Hooks.registered[e];
                        return t ? t[0] : e
                    }, cleanRootPropertyValue: function (e, t) {
                        return b.RegEx.valueUnwrap.test(t) && (t = t.match(b.RegEx.valueUnwrap)[1]), b.Values.isCSSNullValue(t) && (t = b.Hooks.templates[e][1]), t
                    }, extractValue: function (e, t) {
                        var n = b.Hooks.registered[e];
                        if (n) {
                            var i = n[0], o = n[1];
                            return (t = b.Hooks.cleanRootPropertyValue(i, t)).toString().match(b.RegEx.valueSplit)[o]
                        }
                        return t
                    }, injectValue: function (e, t, n) {
                        var i = b.Hooks.registered[e];
                        if (i) {
                            var o, r = i[0], a = i[1];
                            return (o = (n = b.Hooks.cleanRootPropertyValue(r, n)).toString().match(b.RegEx.valueSplit))[a] = t, o.join(" ")
                        }
                        return n
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function (e, t, n) {
                            switch (e) {
                                case"name":
                                    return "clip";
                                case"extract":
                                    var i;
                                    return b.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : i = (i = n.toString().match(b.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : n, i;
                                case"inject":
                                    return "rect(" + n + ")"
                            }
                        }, blur: function (e, t, n) {
                            switch (e) {
                                case"name":
                                    return v.State.isFirefox ? "filter" : "-webkit-filter";
                                case"extract":
                                    var i = parseFloat(n);
                                    if (!i && 0 !== i) {
                                        var o = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        i = o ? o[1] : 0
                                    }
                                    return i;
                                case"inject":
                                    return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        }, opacity: function (e, t, n) {
                            if (8 >= d) switch (e) {
                                case"name":
                                    return "filter";
                                case"extract":
                                    var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i ? i[1] / 100 : 1;
                                case"inject":
                                    return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                            } else switch (e) {
                                case"name":
                                    return "opacity";
                                case"extract":
                                case"inject":
                                    return n
                            }
                        }
                    }, register: function () {
                        9 >= d || v.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
                        for (var e = 0; e < b.Lists.transformsBase.length; e++) !function () {
                            var t = b.Lists.transformsBase[e];
                            b.Normalizations.registered[t] = function (e, n, o) {
                                switch (e) {
                                    case"name":
                                        return "transform";
                                    case"extract":
                                        return r(n) === i || r(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : r(n).transformCache[t].replace(/[()]/g, "");
                                    case"inject":
                                        var a = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case"translate":
                                                a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                break;
                                            case"scal":
                                            case"scale":
                                                v.State.isAndroid && r(n).transformCache[t] === i && 1 > o && (o = 1), a = !/(\d)$/i.test(o);
                                                break;
                                            case"skew":
                                                a = !/(deg|\d)$/i.test(o);
                                                break;
                                            case"rotate":
                                                a = !/(deg|\d)$/i.test(o)
                                        }
                                        return a || (r(n).transformCache[t] = "(" + o + ")"), r(n).transformCache[t]
                                }
                            }
                        }();
                        for (e = 0; e < b.Lists.colors.length; e++) !function () {
                            var t = b.Lists.colors[e];
                            b.Normalizations.registered[t] = function (e, n, o) {
                                switch (e) {
                                    case"name":
                                        return t;
                                    case"extract":
                                        var r;
                                        if (b.RegEx.wrappedValueAlreadyExtracted.test(o)) r = o; else {
                                            var a, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(o) ? a = s[o] !== i ? s[o] : s.black : b.RegEx.isHex.test(o) ? a = "rgb(" + b.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (a = s.black), r = (a || o).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= d || 3 !== r.split(" ").length || (r += " 1"), r;
                                    case"inject":
                                        return 8 >= d ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function (e) {
                        return e.replace(/-(\w)/g, function (e, t) {
                            return t.toUpperCase()
                        })
                    }, SVGAttribute: function (e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (d || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    }, prefixCheck: function (e) {
                        if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                            var o;
                            if (o = 0 === n ? e : t[n] + e.replace(/^\w/, function (e) {
                                return e.toUpperCase()
                            }), f.isString(v.State.prefixElement.style[o])) return v.State.prefixMatches[e] = o, [o, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function (e) {
                        var t;
                        return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
                            return t + t + n + n + i + i
                        }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    }, isCSSNullValue: function (e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    }, getUnitType: function (e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    }, getDisplayType: function (e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    }, addClass: function (e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    }, removeClass: function (e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function (e, n, o, a) {
                    function s(e, n) {
                        function o() {
                            h && b.setPropertyValue(e, "display", "none")
                        }

                        var l = 0;
                        if (8 >= d) l = u.css(e, n); else {
                            var c, h = !1;
                            if (/^(width|height)$/.test(n) && 0 === b.getPropertyValue(e, "display") && (h = !0, b.setPropertyValue(e, "display", b.Values.getDisplayType(e))), !a) {
                                if ("height" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var f = e.offsetHeight - (parseFloat(b.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingBottom")) || 0);
                                    return o(), f
                                }
                                if ("width" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var p = e.offsetWidth - (parseFloat(b.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingRight")) || 0);
                                    return o(), p
                                }
                            }
                            c = r(e) === i ? t.getComputedStyle(e, null) : r(e).computedStyle ? r(e).computedStyle : r(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), ("" === (l = 9 === d && "filter" === n ? c.getPropertyValue(n) : c[n]) || null === l) && (l = e.style[n]), o()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                            var g = s(e, "position");
                            ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = u(e).position()[n] + "px")
                        }
                        return l
                    }

                    var l;
                    if (b.Hooks.registered[n]) {
                        var c = n, h = b.Hooks.getRoot(c);
                        o === i && (o = b.getPropertyValue(e, b.Names.prefixCheck(h)[0])), b.Normalizations.registered[h] && (o = b.Normalizations.registered[h]("extract", e, o)), l = b.Hooks.extractValue(c, o)
                    } else if (b.Normalizations.registered[n]) {
                        var f, p;
                        "transform" !== (f = b.Normalizations.registered[n]("name", e)) && (p = s(e, b.Names.prefixCheck(f)[0]), b.Values.isCSSNullValue(p) && b.Hooks.templates[n] && (p = b.Hooks.templates[n][1])), l = b.Normalizations.registered[n]("extract", e, p)
                    }
                    if (!/^[\d-]/.test(l)) if (r(e) && r(e).isSVG && b.Names.SVGAttribute(n)) if (/^(height|width)$/i.test(n)) try {
                        l = e.getBBox()[n]
                    } catch (e) {
                        l = 0
                    } else l = e.getAttribute(n); else l = s(e, b.Names.prefixCheck(n)[0]);
                    return b.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + n + ": " + l), l
                },
                setPropertyValue: function (e, n, i, o, a) {
                    var s = n;
                    if ("scroll" === n) a.container ? a.container["scroll" + a.direction] = i : "Left" === a.direction ? t.scrollTo(i, a.alternateValue) : t.scrollTo(a.alternateValue, i); else if (b.Normalizations.registered[n] && "transform" === b.Normalizations.registered[n]("name", e)) b.Normalizations.registered[n]("inject", e, i), s = "transform", i = r(e).transformCache[n]; else {
                        if (b.Hooks.registered[n]) {
                            var l = n, c = b.Hooks.getRoot(n);
                            o = o || b.getPropertyValue(e, c), i = b.Hooks.injectValue(l, i, o), n = c
                        }
                        if (b.Normalizations.registered[n] && (i = b.Normalizations.registered[n]("inject", e, i), n = b.Normalizations.registered[n]("name", e)), s = b.Names.prefixCheck(n)[0], 8 >= d) try {
                            e.style[s] = i
                        } catch (e) {
                            v.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                        } else r(e) && r(e).isSVG && b.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
                        v.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                    }
                    return [s, i]
                },
                flushTransformCache: function (e) {
                    function t(t) {
                        return parseFloat(b.getPropertyValue(e, t))
                    }

                    var n = "";
                    if ((d || v.State.isAndroid && !v.State.isChrome) && r(e).isSVG) {
                        var i = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        };
                        u.each(r(e).transformCache, function (e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
                        })
                    } else {
                        var o, a;
                        u.each(r(e).transformCache, function (t) {
                            return o = r(e).transformCache[t], "transformPerspective" === t ? (a = o, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void (n += t + o + " "))
                        }), a && (n = "perspective" + a + " " + n)
                    }
                    b.setPropertyValue(e, "transform", n)
                }
            };
            b.Hooks.register(), b.Normalizations.register(), v.hook = function (e, t, n) {
                var a = i;
                return e = o(e), u.each(e, function (e, o) {
                    if (r(o) === i && v.init(o), n === i) a === i && (a = v.CSS.getPropertyValue(o, t)); else {
                        var s = v.CSS.setPropertyValue(o, t, n);
                        "transform" === s[0] && v.CSS.flushTransformCache(o), a = s
                    }
                }), a
            };
            var x = function () {
                function e() {
                    return d ? E.promise || null : h
                }

                function a() {
                    function e(e) {
                        function h(e, t) {
                            var n = i, o = i, r = i;
                            return f.isArray(e) ? (n = e[0], !f.isArray(e[1]) && /^[\d-]/.test(e[1]) || f.isFunction(e[1]) || b.RegEx.isHex.test(e[1]) ? r = e[1] : (f.isString(e[1]) && !b.RegEx.isHex.test(e[1]) || f.isArray(e[1])) && (o = t ? e[1] : s(e[1], c.duration), e[2] !== i && (r = e[2]))) : n = e, t || (o = o || c.easing), f.isFunction(n) && (n = n.call(a, S, C)), f.isFunction(r) && (r = r.call(a, S, C)), [n || 0, o, r]
                        }

                        function p(e, t) {
                            var n, i;
                            return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                                return n = e, ""
                            }), n || (n = b.Values.getUnitType(e)), [i, n]
                        }

                        function g() {
                            var e = {
                                    myParent: a.parentNode || n.body,
                                    position: b.getPropertyValue(a, "position"),
                                    fontSize: b.getPropertyValue(a, "fontSize")
                                }, i = e.position === L.lastPosition && e.myParent === L.lastParent,
                                o = e.fontSize === L.lastFontSize;
                            L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                            var s = 100, l = {};
                            if (o && i) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight; else {
                                var c = r(a).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                v.init(c), e.myParent.appendChild(c), u.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                    v.CSS.setPropertyValue(c, t, "hidden")
                                }), v.CSS.setPropertyValue(c, "position", e.position), v.CSS.setPropertyValue(c, "fontSize", e.fontSize), v.CSS.setPropertyValue(c, "boxSizing", "content-box"), u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                    v.CSS.setPropertyValue(c, t, s + "%")
                                }), v.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(b.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
                            }
                            return null === L.remToPx && (L.remToPx = parseFloat(b.getPropertyValue(n.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                        }

                        if (c.begin && 0 === S) try {
                            c.begin.call(m, m)
                        } catch (e) {
                            setTimeout(function () {
                                throw e
                            }, 1)
                        }
                        if ("scroll" === T) {
                            var x, k, _, A = /^x$/i.test(c.axis) ? "Left" : "Top", D = parseFloat(c.offset) || 0;
                            c.container ? f.isWrapped(c.container) || f.isNode(c.container) ? (c.container = c.container[0] || c.container, _ = (x = c.container["scroll" + A]) + u(a).position()[A.toLowerCase()] + D) : c.container = null : (x = v.State.scrollAnchor[v.State["scrollProperty" + A]], k = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], _ = u(a).offset()[A.toLowerCase()] + D), d = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: x,
                                    currentValue: x,
                                    endValue: _,
                                    unitType: "",
                                    easing: c.easing,
                                    scrollData: {container: c.container, direction: A, alternateValue: k}
                                }, element: a
                            }, v.debug && console.log("tweensContainer (scroll): ", d.scroll, a)
                        } else if ("reverse" === T) {
                            if (!r(a).tweensContainer) return void u.dequeue(a, c.queue);
                            "none" === r(a).opts.display && (r(a).opts.display = "auto"), "hidden" === r(a).opts.visibility && (r(a).opts.visibility = "visible"), r(a).opts.loop = !1, r(a).opts.begin = null, r(a).opts.complete = null, w.easing || delete c.easing, w.duration || delete c.duration, c = u.extend({}, r(a).opts, c);
                            var I = u.extend(!0, {}, r(a).tweensContainer);
                            for (var P in I) if ("element" !== P) {
                                var M = I[P].startValue;
                                I[P].startValue = I[P].currentValue = I[P].endValue, I[P].endValue = M, f.isEmptyObject(w) || (I[P].easing = c.easing), v.debug && console.log("reverse tweensContainer (" + P + "): " + JSON.stringify(I[P]), a)
                            }
                            d = I
                        } else if ("start" === T) {
                            for (var O in r(a).tweensContainer && !0 === r(a).isAnimating && (I = r(a).tweensContainer), u.each(y, function (e, t) {
                                if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
                                    var n = h(t, !0), o = n[0], r = n[1], a = n[2];
                                    if (b.RegEx.isHex.test(o)) {
                                        for (var s = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(o), c = a ? b.Values.hexToRgb(a) : i, u = 0; u < s.length; u++) {
                                            var d = [l[u]];
                                            r && d.push(r), c !== i && d.push(c[u]), y[e + s[u]] = d
                                        }
                                        delete y[e]
                                    }
                                }
                            }), y) {
                                var F = h(y[O]), R = F[0], j = F[1], $ = F[2];
                                O = b.Names.camelCase(O);
                                var H = b.Hooks.getRoot(O), W = !1;
                                if (r(a).isSVG || "tween" === H || !1 !== b.Names.prefixCheck(H)[1] || b.Normalizations.registered[H] !== i) {
                                    (c.display !== i && null !== c.display && "none" !== c.display || c.visibility !== i && "hidden" !== c.visibility) && /opacity|filter/.test(O) && !$ && 0 !== R && ($ = 0), c._cacheValues && I && I[O] ? ($ === i && ($ = I[O].endValue + I[O].unitType), W = r(a).rootPropertyValueCache[H]) : b.Hooks.registered[O] ? $ === i ? (W = b.getPropertyValue(a, H), $ = b.getPropertyValue(a, O, W)) : W = b.Hooks.templates[H][1] : $ === i && ($ = b.getPropertyValue(a, O));
                                    var B, V, z, q = !1;
                                    if ($ = (B = p(O, $))[0], z = B[1], R = (B = p(O, R))[0].replace(/^([+-\/*])=/, function (e, t) {
                                        return q = t, ""
                                    }), V = B[1], $ = parseFloat($) || 0, R = parseFloat(R) || 0, "%" === V && (/^(fontSize|lineHeight)$/.test(O) ? (R /= 100, V = "em") : /^scale/.test(O) ? (R /= 100, V = "") : /(Red|Green|Blue)$/i.test(O) && (R = R / 100 * 255, V = "")), /[\/*]/.test(q)) V = z; else if (z !== V && 0 !== $) if (0 === R) V = z; else {
                                        o = o || g();
                                        var Y = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";
                                        switch (z) {
                                            case"%":
                                                $ *= "x" === Y ? o.percentToPxWidth : o.percentToPxHeight;
                                                break;
                                            case"px":
                                                break;
                                            default:
                                                $ *= o[z + "ToPx"]
                                        }
                                        switch (V) {
                                            case"%":
                                                $ *= 1 / ("x" === Y ? o.percentToPxWidth : o.percentToPxHeight);
                                                break;
                                            case"px":
                                                break;
                                            default:
                                                $ *= 1 / o[V + "ToPx"]
                                        }
                                    }
                                    switch (q) {
                                        case"+":
                                            R = $ + R;
                                            break;
                                        case"-":
                                            R = $ - R;
                                            break;
                                        case"*":
                                            R *= $;
                                            break;
                                        case"/":
                                            R = $ / R
                                    }
                                    d[O] = {
                                        rootPropertyValue: W,
                                        startValue: $,
                                        currentValue: $,
                                        endValue: R,
                                        unitType: V,
                                        easing: j
                                    }, v.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(d[O]), a)
                                } else v.debug && console.log("Skipping [" + H + "] due to a lack of browser support.")
                            }
                            d.element = a
                        }
                        d.element && (b.Values.addClass(a, "velocity-animating"), N.push(d), "" === c.queue && (r(a).tweensContainer = d, r(a).opts = c), r(a).isAnimating = !0, S === C - 1 ? (v.State.calls.push([N, m, c, null, E.resolver]), !1 === v.State.isTicking && (v.State.isTicking = !0, l())) : S++)
                    }

                    var o, a = this, c = u.extend({}, v.defaults, w), d = {};
                    switch (r(a) === i && v.init(a), parseFloat(c.delay) && !1 !== c.queue && u.queue(a, c.queue, function (e) {
                        v.velocityQueueEntryFlag = !0, r(a).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(c.delay)),
                            next: e
                        }
                    }), c.duration.toString().toLowerCase()) {
                        case"fast":
                            c.duration = 200;
                            break;
                        case"normal":
                            c.duration = g;
                            break;
                        case"slow":
                            c.duration = 600;
                            break;
                        default:
                            c.duration = parseFloat(c.duration) || 1
                    }
                    !1 !== v.mock && (!0 === v.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(v.mock) || 1, c.delay *= parseFloat(v.mock) || 1)), c.easing = s(c.easing, c.duration), c.begin && !f.isFunction(c.begin) && (c.begin = null), c.progress && !f.isFunction(c.progress) && (c.progress = null), c.complete && !f.isFunction(c.complete) && (c.complete = null), c.display !== i && null !== c.display && (c.display = c.display.toString().toLowerCase(), "auto" === c.display && (c.display = v.CSS.Values.getDisplayType(a))), c.visibility !== i && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()), c.mobileHA = c.mobileHA && v.State.isMobile && !v.State.isGingerbread, !1 === c.queue ? c.delay ? setTimeout(e, c.delay) : e() : u.queue(a, c.queue, function (t, n) {
                        return !0 === n ? (E.promise && E.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void e())
                    }), "" !== c.queue && "fx" !== c.queue || "inprogress" === u.queue(a)[0] || u.dequeue(a)
                }

                var d, h, p, m, y, w,
                    k = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || f.isString(arguments[0].properties));
                if (f.isWrapped(this) ? (d = !1, p = 0, m = this, h = this) : (d = !0, p = 1, m = k ? arguments[0].elements || arguments[0].e : arguments[0]), m = o(m)) {
                    k ? (y = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (y = arguments[p], w = arguments[p + 1]);
                    var C = m.length, S = 0;
                    if (!/^(stop|finish)$/i.test(y) && !u.isPlainObject(w)) {
                        w = {};
                        for (var _ = p + 1; _ < arguments.length; _++) f.isArray(arguments[_]) || !/^(fast|normal|slow)$/i.test(arguments[_]) && !/^\d/.test(arguments[_]) ? f.isString(arguments[_]) || f.isArray(arguments[_]) ? w.easing = arguments[_] : f.isFunction(arguments[_]) && (w.complete = arguments[_]) : w.duration = arguments[_]
                    }
                    var T, E = {promise: null, resolver: null, rejecter: null};
                    switch (d && v.Promise && (E.promise = new v.Promise(function (e, t) {
                        E.resolver = e, E.rejecter = t
                    })), y) {
                        case"scroll":
                            T = "scroll";
                            break;
                        case"reverse":
                            T = "reverse";
                            break;
                        case"finish":
                        case"stop":
                            u.each(m, function (e, t) {
                                r(t) && r(t).delayTimer && (clearTimeout(r(t).delayTimer.setTimeout), r(t).delayTimer.next && r(t).delayTimer.next(), delete r(t).delayTimer)
                            });
                            var A = [];
                            return u.each(v.State.calls, function (e, t) {
                                t && u.each(t[1], function (n, o) {
                                    var a = w === i ? "" : w;
                                    return !0 !== a && t[2].queue !== a && (w !== i || !1 !== t[2].queue) || void u.each(m, function (n, i) {
                                        i === o && ((!0 === w || f.isString(w)) && (u.each(u.queue(i, f.isString(w) ? w : ""), function (e, t) {
                                            f.isFunction(t) && t(null, !0)
                                        }), u.queue(i, f.isString(w) ? w : "", [])), "stop" === y ? (r(i) && r(i).tweensContainer && !1 !== a && u.each(r(i).tweensContainer, function (e, t) {
                                            t.endValue = t.currentValue
                                        }), A.push(e)) : "finish" === y && (t[2].duration = 1))
                                    })
                                })
                            }), "stop" === y && (u.each(A, function (e, t) {
                                c(t, !0)
                            }), E.promise && E.resolver(m)), e();
                        default:
                            if (!u.isPlainObject(y) || f.isEmptyObject(y)) {
                                if (f.isString(y) && v.Redirects[y]) {
                                    var D = (O = u.extend({}, w)).duration, I = O.delay || 0;
                                    return !0 === O.backwards && (m = u.extend(!0, [], m).reverse()), u.each(m, function (e, t) {
                                        parseFloat(O.stagger) ? O.delay = I + parseFloat(O.stagger) * e : f.isFunction(O.stagger) && (O.delay = I + O.stagger.call(t, e, C)), O.drag && (O.duration = parseFloat(D) || (/^(callout|transition)/.test(y) ? 1e3 : g), O.duration = Math.max(O.duration * (O.backwards ? 1 - e / C : (e + 1) / C), .75 * O.duration, 200)), v.Redirects[y].call(t, t, O || {}, e, C, m, E.promise ? E : i)
                                    }), e()
                                }
                                var P = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return E.promise ? E.rejecter(new Error(P)) : console.log(P), e()
                            }
                            T = "start"
                    }
                    var M, O, L = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    }, N = [];
                    if (u.each(m, function (e, t) {
                        f.isNode(t) && a.call(t)
                    }), (O = u.extend({}, v.defaults, w)).loop = parseInt(O.loop), M = 2 * O.loop - 1, O.loop) for (var F = 0; M > F; F++) {
                        var R = {delay: O.delay, progress: O.progress};
                        F === M - 1 && (R.display = O.display, R.visibility = O.visibility, R.complete = O.complete), x(m, "reverse", R)
                    }
                    return e()
                }
            };
            (v = u.extend(x, v)).animate = x;
            var w = t.requestAnimationFrame || h;
            return v.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function () {
                n.hidden ? (w = function (e) {
                    return setTimeout(function () {
                        e(!0)
                    }, 16)
                }, l()) : w = t.requestAnimationFrame || h
            }), e.Velocity = v, e !== t && (e.fn.velocity = x, e.fn.velocity.defaults = v.defaults), u.each(["Down", "Up"], function (e, t) {
                v.Redirects["slide" + t] = function (e, n, o, r, a, s) {
                    var l = u.extend({}, n), c = l.begin, d = l.complete,
                        h = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""}, f = {};
                    l.display === i && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                        for (var n in c && c.call(a, a), h) {
                            f[n] = e.style[n];
                            var i = v.CSS.getPropertyValue(e, n);
                            h[n] = "Down" === t ? [i, 0] : [0, i]
                        }
                        f.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function () {
                        for (var t in f) e.style[t] = f[t];
                        d && d.call(a, a), s && s.resolver(a)
                    }, v(e, h, l)
                }
            }), u.each(["In", "Out"], function (e, t) {
                v.Redirects["fade" + t] = function (e, n, o, r, a, s) {
                    var l = u.extend({}, n), c = {opacity: "In" === t ? 1 : 0}, d = l.complete;
                    l.complete = o !== r - 1 ? l.begin = null : function () {
                        d && d.call(a, a), s && s.resolver(a)
                    }, l.display === i && (l.display = "In" === t ? "auto" : "none"), v(this, c, l)
                }
            }), v
        }
        jQuery.fn.velocity = jQuery.fn.animate
    }(window.jQuery || window.Zepto || window, window, document)
})), function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = e()
    }
}(function () {
    return function () {
        return function e(t, n, i) {
            function o(a, s) {
                if (!n[a]) {
                    if (!t[a]) {
                        var l = "function" == typeof require && require;
                        if (!s && l) return l(a, !0);
                        if (r) return r(a, !0);
                        var c = new Error("Cannot find module '" + a + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var u = n[a] = {exports: {}};
                    t[a][0].call(u.exports, function (e) {
                        return o(t[a][1][e] || e)
                    }, u, u.exports, e, t, n, i)
                }
                return n[a].exports
            }

            for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
            return o
        }
    }()({
        1: [function (e, t, n) {
        }, {}], 2: [function (e, t, n) {
            var i = e(6);

            function o(e) {
                if (e) {
                    var t = [0, 0, 0], n = 1, o = e.match(/^#([a-fA-F0-9]{3})$/i);
                    if (o) {
                        o = o[1];
                        for (var r = 0; r < t.length; r++) t[r] = parseInt(o[r] + o[r], 16)
                    } else if (o = e.match(/^#([a-fA-F0-9]{6})$/i)) {
                        o = o[1];
                        for (r = 0; r < t.length; r++) t[r] = parseInt(o.slice(2 * r, 2 * r + 2), 16)
                    } else if (o = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (r = 0; r < t.length; r++) t[r] = parseInt(o[r + 1]);
                        n = parseFloat(o[4])
                    } else if (o = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(o[r + 1]));
                        n = parseFloat(o[4])
                    } else if (o = e.match(/(\w+)/)) {
                        if ("transparent" == o[1]) return [0, 0, 0, 0];
                        if (!(t = i[o[1]])) return
                    }
                    for (r = 0; r < t.length; r++) t[r] = u(t[r], 0, 255);
                    return n = n || 0 == n ? u(n, 0, 1) : 1, t[3] = n, t
                }
            }

            function r(e) {
                if (e) {
                    var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (t) {
                        var n = parseFloat(t[4]);
                        return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function a(e) {
                if (e) {
                    var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (t) {
                        var n = parseFloat(t[4]);
                        return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)]
                    }
                }
            }

            function s(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
            }

            function l(e, t) {
                return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
            }

            function c(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
            }

            function u(e, t, n) {
                return Math.min(Math.max(t, e), n)
            }

            function d(e) {
                var t = e.toString(16).toUpperCase();
                return t.length < 2 ? "0" + t : t
            }

            t.exports = {
                getRgba: o, getHsla: r, getRgb: function (e) {
                    var t = o(e);
                    return t && t.slice(0, 3)
                }, getHsl: function (e) {
                    var t = r(e);
                    return t && t.slice(0, 3)
                }, getHwb: a, getAlpha: function (e) {
                    var t = o(e);
                    if (t) return t[3];
                    if (t = r(e)) return t[3];
                    if (t = a(e)) return t[3]
                }, hexString: function (e) {
                    return "#" + d(e[0]) + d(e[1]) + d(e[2])
                }, rgbString: function (e, t) {
                    if (t < 1 || e[3] && e[3] < 1) return s(e, t);
                    return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
                }, rgbaString: s, percentString: function (e, t) {
                    if (t < 1 || e[3] && e[3] < 1) return l(e, t);
                    var n = Math.round(e[0] / 255 * 100), i = Math.round(e[1] / 255 * 100),
                        o = Math.round(e[2] / 255 * 100);
                    return "rgb(" + n + "%, " + i + "%, " + o + "%)"
                }, percentaString: l, hslString: function (e, t) {
                    if (t < 1 || e[3] && e[3] < 1) return c(e, t);
                    return "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
                }, hslaString: c, hwbString: function (e, t) {
                    void 0 === t && (t = void 0 !== e[3] ? e[3] : 1);
                    return "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
                }, keyword: function (e) {
                    return h[e.slice(0, 3)]
                }
            };
            var h = {};
            for (var f in i) h[i[f]] = f
        }, {6: 6}], 3: [function (e, t, n) {
            var i = e(5), o = e(2), r = function (e) {
                return e instanceof r ? e : this instanceof r ? (this.valid = !1, this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                }, void ("string" == typeof e ? (t = o.getRgba(e)) ? this.setValues("rgb", t) : (t = o.getHsla(e)) ? this.setValues("hsl", t) : (t = o.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new r(e);
                var t
            };
            r.prototype = {
                isValid: function () {
                    return this.valid
                }, rgb: function () {
                    return this.setSpace("rgb", arguments)
                }, hsl: function () {
                    return this.setSpace("hsl", arguments)
                }, hsv: function () {
                    return this.setSpace("hsv", arguments)
                }, hwb: function () {
                    return this.setSpace("hwb", arguments)
                }, cmyk: function () {
                    return this.setSpace("cmyk", arguments)
                }, rgbArray: function () {
                    return this.values.rgb
                }, hslArray: function () {
                    return this.values.hsl
                }, hsvArray: function () {
                    return this.values.hsv
                }, hwbArray: function () {
                    var e = this.values;
                    return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
                }, cmykArray: function () {
                    return this.values.cmyk
                }, rgbaArray: function () {
                    var e = this.values;
                    return e.rgb.concat([e.alpha])
                }, hslaArray: function () {
                    var e = this.values;
                    return e.hsl.concat([e.alpha])
                }, alpha: function (e) {
                    return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
                }, red: function (e) {
                    return this.setChannel("rgb", 0, e)
                }, green: function (e) {
                    return this.setChannel("rgb", 1, e)
                }, blue: function (e) {
                    return this.setChannel("rgb", 2, e)
                }, hue: function (e) {
                    return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
                }, saturation: function (e) {
                    return this.setChannel("hsl", 1, e)
                }, lightness: function (e) {
                    return this.setChannel("hsl", 2, e)
                }, saturationv: function (e) {
                    return this.setChannel("hsv", 1, e)
                }, whiteness: function (e) {
                    return this.setChannel("hwb", 1, e)
                }, blackness: function (e) {
                    return this.setChannel("hwb", 2, e)
                }, value: function (e) {
                    return this.setChannel("hsv", 2, e)
                }, cyan: function (e) {
                    return this.setChannel("cmyk", 0, e)
                }, magenta: function (e) {
                    return this.setChannel("cmyk", 1, e)
                }, yellow: function (e) {
                    return this.setChannel("cmyk", 2, e)
                }, black: function (e) {
                    return this.setChannel("cmyk", 3, e)
                }, hexString: function () {
                    return o.hexString(this.values.rgb)
                }, rgbString: function () {
                    return o.rgbString(this.values.rgb, this.values.alpha)
                }, rgbaString: function () {
                    return o.rgbaString(this.values.rgb, this.values.alpha)
                }, percentString: function () {
                    return o.percentString(this.values.rgb, this.values.alpha)
                }, hslString: function () {
                    return o.hslString(this.values.hsl, this.values.alpha)
                }, hslaString: function () {
                    return o.hslaString(this.values.hsl, this.values.alpha)
                }, hwbString: function () {
                    return o.hwbString(this.values.hwb, this.values.alpha)
                }, keyword: function () {
                    return o.keyword(this.values.rgb, this.values.alpha)
                }, rgbNumber: function () {
                    var e = this.values.rgb;
                    return e[0] << 16 | e[1] << 8 | e[2]
                }, luminosity: function () {
                    for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
                        var i = e[n] / 255;
                        t[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                    }
                    return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                }, contrast: function (e) {
                    var t = this.luminosity(), n = e.luminosity();
                    return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
                }, level: function (e) {
                    var t = this.contrast(e);
                    return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
                }, dark: function () {
                    var e = this.values.rgb;
                    return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
                }, light: function () {
                    return !this.dark()
                }, negate: function () {
                    for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
                    return this.setValues("rgb", e), this
                }, lighten: function (e) {
                    var t = this.values.hsl;
                    return t[2] += t[2] * e, this.setValues("hsl", t), this
                }, darken: function (e) {
                    var t = this.values.hsl;
                    return t[2] -= t[2] * e, this.setValues("hsl", t), this
                }, saturate: function (e) {
                    var t = this.values.hsl;
                    return t[1] += t[1] * e, this.setValues("hsl", t), this
                }, desaturate: function (e) {
                    var t = this.values.hsl;
                    return t[1] -= t[1] * e, this.setValues("hsl", t), this
                }, whiten: function (e) {
                    var t = this.values.hwb;
                    return t[1] += t[1] * e, this.setValues("hwb", t), this
                }, blacken: function (e) {
                    var t = this.values.hwb;
                    return t[2] += t[2] * e, this.setValues("hwb", t), this
                }, greyscale: function () {
                    var e = this.values.rgb, t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                    return this.setValues("rgb", [t, t, t]), this
                }, clearer: function (e) {
                    var t = this.values.alpha;
                    return this.setValues("alpha", t - t * e), this
                }, opaquer: function (e) {
                    var t = this.values.alpha;
                    return this.setValues("alpha", t + t * e), this
                }, rotate: function (e) {
                    var t = this.values.hsl, n = (t[0] + e) % 360;
                    return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
                }, mix: function (e, t) {
                    var n = e, i = void 0 === t ? .5 : t, o = 2 * i - 1, r = this.alpha() - n.alpha(),
                        a = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2, s = 1 - a;
                    return this.rgb(a * this.red() + s * n.red(), a * this.green() + s * n.green(), a * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i))
                }, toJSON: function () {
                    return this.rgb()
                }, clone: function () {
                    var e, t, n = new r, i = this.values, o = n.values;
                    for (var a in i) i.hasOwnProperty(a) && (e = i[a], "[object Array]" === (t = {}.toString.call(e)) ? o[a] = e.slice(0) : "[object Number]" === t ? o[a] = e : console.error("unexpected color value:", e));
                    return n
                }
            }, r.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, r.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, r.prototype.getValues = function (e) {
                for (var t = this.values, n = {}, i = 0; i < e.length; i++) n[e.charAt(i)] = t[e][i];
                return 1 !== t.alpha && (n.a = t.alpha), n
            }, r.prototype.setValues = function (e, t) {
                var n, o, r = this.values, a = this.spaces, s = this.maxes, l = 1;
                if (this.valid = !0, "alpha" === e) l = t; else if (t.length) r[e] = t.slice(0, e.length), l = t[e.length]; else if (void 0 !== t[e.charAt(0)]) {
                    for (n = 0; n < e.length; n++) r[e][n] = t[e.charAt(n)];
                    l = t.a
                } else if (void 0 !== t[a[e][0]]) {
                    var c = a[e];
                    for (n = 0; n < e.length; n++) r[e][n] = t[c[n]];
                    l = t.alpha
                }
                if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === e) return !1;
                for (n = 0; n < e.length; n++) o = Math.max(0, Math.min(s[e][n], r[e][n])), r[e][n] = Math.round(o);
                for (var u in a) u !== e && (r[u] = i[e][u](r[e]));
                return !0
            }, r.prototype.setSpace = function (e, t) {
                var n = t[0];
                return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this)
            }, r.prototype.setChannel = function (e, t, n) {
                var i = this.values[e];
                return void 0 === n ? i[t] : n === i[t] ? this : (i[t] = n, this.setValues(e, i), this)
            }, "undefined" != typeof window && (window.Color = r), t.exports = r
        }, {2: 2, 5: 5}], 4: [function (e, t, n) {
            function i(e) {
                var t, n, i = e[0] / 255, o = e[1] / 255, r = e[2] / 255, a = Math.min(i, o, r), s = Math.max(i, o, r),
                    l = s - a;
                return s == a ? t = 0 : i == s ? t = (o - r) / l : o == s ? t = 2 + (r - i) / l : r == s && (t = 4 + (i - o) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (a + s) / 2, [t, 100 * (s == a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n]
            }

            function o(e) {
                var t, n, i = e[0], o = e[1], r = e[2], a = Math.min(i, o, r), s = Math.max(i, o, r), l = s - a;
                return n = 0 == s ? 0 : l / s * 1e3 / 10, s == a ? t = 0 : i == s ? t = (o - r) / l : o == s ? t = 2 + (r - i) / l : r == s && (t = 4 + (i - o) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, s / 255 * 1e3 / 10]
            }

            function a(e) {
                var t = e[0], n = e[1], o = e[2];
                return [i(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, o))), 100 * (o = 1 - 1 / 255 * Math.max(t, Math.max(n, o)))]
            }

            function s(e) {
                var t, n = e[0] / 255, i = e[1] / 255, o = e[2] / 255;
                return [100 * ((1 - n - (t = Math.min(1 - n, 1 - i, 1 - o))) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * ((1 - o - t) / (1 - t) || 0), 100 * t]
            }

            function l(e) {
                return _[JSON.stringify(e)]
            }

            function c(e) {
                var t = e[0] / 255, n = e[1] / 255, i = e[2] / 255;
                return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * i), 100 * (.0193 * t + .1192 * n + .9505 * i)]
            }

            function u(e) {
                var t = c(e), n = t[0], i = t[1], o = t[2];
                return i /= 100, o /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
            }

            function d(e) {
                var t, n, i, o, r, a = e[0] / 360, s = e[1] / 100, l = e[2] / 100;
                if (0 == s) return [r = 255 * l, r, r];
                t = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];
                for (var c = 0; c < 3; c++) (i = a + 1 / 3 * -(c - 1)) < 0 && i++, i > 1 && i--, r = 6 * i < 1 ? t + 6 * (n - t) * i : 2 * i < 1 ? n : 3 * i < 2 ? t + (n - t) * (2 / 3 - i) * 6 : t, o[c] = 255 * r;
                return o
            }

            function h(e) {
                var t = e[0] / 60, n = e[1] / 100, i = e[2] / 100, o = Math.floor(t) % 6, r = t - Math.floor(t),
                    a = 255 * i * (1 - n), s = 255 * i * (1 - n * r), l = 255 * i * (1 - n * (1 - r));
                i *= 255;
                switch (o) {
                    case 0:
                        return [i, l, a];
                    case 1:
                        return [s, i, a];
                    case 2:
                        return [a, i, l];
                    case 3:
                        return [a, s, i];
                    case 4:
                        return [l, a, i];
                    case 5:
                        return [i, a, s]
                }
            }

            function f(e) {
                var t, n, i, o, a = e[0] / 360, s = e[1] / 100, l = e[2] / 100, c = s + l;
                switch (c > 1 && (s /= c, l /= c), n = 1 - l, i = 6 * a - (t = Math.floor(6 * a)), 0 != (1 & t) && (i = 1 - i), o = s + i * (n - s), t) {
                    default:
                    case 6:
                    case 0:
                        r = n, g = o, b = s;
                        break;
                    case 1:
                        r = o, g = n, b = s;
                        break;
                    case 2:
                        r = s, g = n, b = o;
                        break;
                    case 3:
                        r = s, g = o, b = n;
                        break;
                    case 4:
                        r = o, g = s, b = n;
                        break;
                    case 5:
                        r = n, g = s, b = o
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function p(e) {
                var t = e[0] / 100, n = e[1] / 100, i = e[2] / 100, o = e[3] / 100;
                return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, i * (1 - o) + o))]
            }

            function m(e) {
                var t, n, i, o = e[0] / 100, r = e[1] / 100, a = e[2] / 100;
                return n = -.9689 * o + 1.8758 * r + .0415 * a, i = .0557 * o + -.204 * r + 1.057 * a, t = (t = 3.2406 * o + -1.5372 * r + -.4986 * a) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
            }

            function v(e) {
                var t = e[0], n = e[1], i = e[2];
                return n /= 100, i /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
            }

            function y(e) {
                var t, n, i, o, r = e[0], a = e[1], s = e[2];
                return r <= 8 ? o = (n = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((r + 16) / 116, 3), o = Math.pow(n / 100, 1 / 3)), [t = t / 95.047 <= .008856 ? t = 95.047 * (a / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + o, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3)]
            }

            function x(e) {
                var t, n = e[0], i = e[1], o = e[2];
                return (t = 360 * Math.atan2(o, i) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(i * i + o * o), t]
            }

            function w(e) {
                return m(y(e))
            }

            function k(e) {
                var t, n = e[0], i = e[1];
                return t = e[2] / 360 * 2 * Math.PI, [n, i * Math.cos(t), i * Math.sin(t)]
            }

            function C(e) {
                return S[e]
            }

            t.exports = {
                rgb2hsl: i,
                rgb2hsv: o,
                rgb2hwb: a,
                rgb2cmyk: s,
                rgb2keyword: l,
                rgb2xyz: c,
                rgb2lab: u,
                rgb2lch: function (e) {
                    return x(u(e))
                },
                hsl2rgb: d,
                hsl2hsv: function (e) {
                    var t = e[0], n = e[1] / 100, i = e[2] / 100;
                    if (0 === i) return [0, 0, 0];
                    return [t, 100 * (2 * (n *= (i *= 2) <= 1 ? i : 2 - i) / (i + n)), 100 * ((i + n) / 2)]
                },
                hsl2hwb: function (e) {
                    return a(d(e))
                },
                hsl2cmyk: function (e) {
                    return s(d(e))
                },
                hsl2keyword: function (e) {
                    return l(d(e))
                },
                hsv2rgb: h,
                hsv2hsl: function (e) {
                    var t, n, i = e[0], o = e[1] / 100, r = e[2] / 100;
                    return t = o * r, [i, 100 * (t = (t /= (n = (2 - o) * r) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
                },
                hsv2hwb: function (e) {
                    return a(h(e))
                },
                hsv2cmyk: function (e) {
                    return s(h(e))
                },
                hsv2keyword: function (e) {
                    return l(h(e))
                },
                hwb2rgb: f,
                hwb2hsl: function (e) {
                    return i(f(e))
                },
                hwb2hsv: function (e) {
                    return o(f(e))
                },
                hwb2cmyk: function (e) {
                    return s(f(e))
                },
                hwb2keyword: function (e) {
                    return l(f(e))
                },
                cmyk2rgb: p,
                cmyk2hsl: function (e) {
                    return i(p(e))
                },
                cmyk2hsv: function (e) {
                    return o(p(e))
                },
                cmyk2hwb: function (e) {
                    return a(p(e))
                },
                cmyk2keyword: function (e) {
                    return l(p(e))
                },
                keyword2rgb: C,
                keyword2hsl: function (e) {
                    return i(C(e))
                },
                keyword2hsv: function (e) {
                    return o(C(e))
                },
                keyword2hwb: function (e) {
                    return a(C(e))
                },
                keyword2cmyk: function (e) {
                    return s(C(e))
                },
                keyword2lab: function (e) {
                    return u(C(e))
                },
                keyword2xyz: function (e) {
                    return c(C(e))
                },
                xyz2rgb: m,
                xyz2lab: v,
                xyz2lch: function (e) {
                    return x(v(e))
                },
                lab2xyz: y,
                lab2rgb: w,
                lab2lch: x,
                lch2lab: k,
                lch2xyz: function (e) {
                    return y(k(e))
                },
                lch2rgb: function (e) {
                    return w(k(e))
                }
            };
            var S = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }, _ = {};
            for (var T in S) _[JSON.stringify(S[T])] = T
        }, {}], 5: [function (e, t, n) {
            var i = e(4), o = function () {
                return new c
            };
            for (var r in i) {
                o[r + "Raw"] = function (e) {
                    return function (t) {
                        return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), i[e](t)
                    }
                }(r);
                var a = /(\w+)2(\w+)/.exec(r), s = a[1], l = a[2];
                (o[s] = o[s] || {})[l] = o[r] = function (e) {
                    return function (t) {
                        "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                        var n = i[e](t);
                        if ("string" == typeof n || void 0 === n) return n;
                        for (var o = 0; o < n.length; o++) n[o] = Math.round(n[o]);
                        return n
                    }
                }(r)
            }
            var c = function () {
                this.convs = {}
            };
            c.prototype.routeSpace = function (e, t) {
                var n = t[0];
                return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n))
            }, c.prototype.setValues = function (e, t) {
                return this.space = e, this.convs = {}, this.convs[e] = t, this
            }, c.prototype.getValues = function (e) {
                var t = this.convs[e];
                if (!t) {
                    var n = this.space, i = this.convs[n];
                    t = o[n][e](i), this.convs[e] = t
                }
                return t
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (e) {
                c.prototype[e] = function (t) {
                    return this.routeSpace(e, arguments)
                }
            }), t.exports = o
        }, {4: 4}], 6: [function (e, t, n) {
            "use strict";
            t.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}], 7: [function (e, t, n) {
            var i = e(30)();
            i.helpers = e(46), e(28)(i), i.Animation = e(22), i.animationService = e(23), i.defaults = e(26), i.Element = e(27), i.elements = e(41), i.Interaction = e(29), i.layouts = e(31), i.platform = e(49), i.plugins = e(32), i.Scale = e(33), i.scaleService = e(34), i.Ticks = e(35), i.Tooltip = e(36), e(24)(i), e(25)(i), e(56)(i), e(54)(i), e(55)(i), e(57)(i), e(58)(i), e(59)(i), e(15)(i), e(16)(i), e(17)(i), e(18)(i), e(19)(i), e(20)(i), e(21)(i), e(8)(i), e(9)(i), e(10)(i), e(11)(i), e(12)(i), e(13)(i), e(14)(i);
            var o = e(50);
            for (var r in o) o.hasOwnProperty(r) && i.plugins.register(o[r]);
            i.platform.initialize(), t.exports = i, "undefined" != typeof window && (window.Chart = i), i.Legend = o.legend._element, i.Title = o.title._element, i.pluginService = i.plugins, i.PluginBase = i.Element.extend({}), i.canvasHelpers = i.helpers.canvas, i.layoutService = i.layouts
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            41: 41,
            46: 46,
            49: 49,
            50: 50,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            58: 58,
            59: 59,
            8: 8,
            9: 9
        }], 8: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Bar = function (t, n) {
                    return n.type = "bar", new e(t, n)
                }
            }
        }, {}], 9: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Bubble = function (t, n) {
                    return n.type = "bubble", new e(t, n)
                }
            }
        }, {}], 10: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Doughnut = function (t, n) {
                    return n.type = "doughnut", new e(t, n)
                }
            }
        }, {}], 11: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Line = function (t, n) {
                    return n.type = "line", new e(t, n)
                }
            }
        }, {}], 12: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.PolarArea = function (t, n) {
                    return n.type = "polarArea", new e(t, n)
                }
            }
        }, {}], 13: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Radar = function (t, n) {
                    return n.type = "radar", new e(t, n)
                }
            }
        }, {}], 14: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                e.Scatter = function (t, n) {
                    return n.type = "scatter", new e(t, n)
                }
            }
        }, {}], 15: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(41), r = e(46);
            i._set("bar", {
                hover: {mode: "label"},
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {offsetGridLines: !0}
                    }], yAxes: [{type: "linear"}]
                }
            }), i._set("horizontalBar", {
                hover: {mode: "index", axis: "y"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom"}],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {offsetGridLines: !0}
                    }]
                },
                elements: {rectangle: {borderSkipped: "left"}},
                tooltips: {
                    callbacks: {
                        title: function (e, t) {
                            var n = "";
                            return e.length > 0 && (e[0].yLabel ? n = e[0].yLabel : t.labels.length > 0 && e[0].index < t.labels.length && (n = t.labels[e[0].index])), n
                        }, label: function (e, t) {
                            return (t.datasets[e.datasetIndex].label || "") + ": " + e.xLabel
                        }
                    }, mode: "index", axis: "y"
                }
            }), t.exports = function (e) {
                e.controllers.bar = e.DatasetController.extend({
                    dataElementType: o.Rectangle, initialize: function () {
                        var t;
                        e.DatasetController.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
                    }, update: function (e) {
                        var t, n, i = this.getMeta().data;
                        for (this._ruler = this.getRuler(), t = 0, n = i.length; t < n; ++t) this.updateElement(i[t], t, e)
                    }, updateElement: function (e, t, n) {
                        var i = this, o = i.chart, a = i.getMeta(), s = i.getDataset(), l = e.custom || {},
                            c = o.options.elements.rectangle;
                        e._xScale = i.getScaleForId(a.xAxisID), e._yScale = i.getScaleForId(a.yAxisID), e._datasetIndex = i.index, e._index = t, e._model = {
                            datasetLabel: s.label,
                            label: o.data.labels[t],
                            borderSkipped: l.borderSkipped ? l.borderSkipped : c.borderSkipped,
                            backgroundColor: l.backgroundColor ? l.backgroundColor : r.valueAtIndexOrDefault(s.backgroundColor, t, c.backgroundColor),
                            borderColor: l.borderColor ? l.borderColor : r.valueAtIndexOrDefault(s.borderColor, t, c.borderColor),
                            borderWidth: l.borderWidth ? l.borderWidth : r.valueAtIndexOrDefault(s.borderWidth, t, c.borderWidth)
                        }, i.updateElementGeometry(e, t, n), e.pivot()
                    }, updateElementGeometry: function (e, t, n) {
                        var i = this, o = e._model, r = i.getValueScale(), a = r.getBasePixel(), s = r.isHorizontal(),
                            l = i._ruler || i.getRuler(), c = i.calculateBarValuePixels(i.index, t),
                            u = i.calculateBarIndexPixels(i.index, t, l);
                        o.horizontal = s, o.base = n ? a : c.base, o.x = s ? n ? a : c.head : u.center, o.y = s ? u.center : n ? a : c.head, o.height = s ? u.size : void 0, o.width = s ? void 0 : u.size
                    }, getValueScaleId: function () {
                        return this.getMeta().yAxisID
                    }, getIndexScaleId: function () {
                        return this.getMeta().xAxisID
                    }, getValueScale: function () {
                        return this.getScaleForId(this.getValueScaleId())
                    }, getIndexScale: function () {
                        return this.getScaleForId(this.getIndexScaleId())
                    }, _getStacks: function (e) {
                        var t, n, i = this.chart, o = this.getIndexScale().options.stacked,
                            r = void 0 === e ? i.data.datasets.length : e + 1, a = [];
                        for (t = 0; t < r; ++t) (n = i.getDatasetMeta(t)).bar && i.isDatasetVisible(t) && (!1 === o || !0 === o && -1 === a.indexOf(n.stack) || void 0 === o && (void 0 === n.stack || -1 === a.indexOf(n.stack))) && a.push(n.stack);
                        return a
                    }, getStackCount: function () {
                        return this._getStacks().length
                    }, getStackIndex: function (e, t) {
                        var n = this._getStacks(e), i = void 0 !== t ? n.indexOf(t) : -1;
                        return -1 === i ? n.length - 1 : i
                    }, getRuler: function () {
                        var e, t, n = this.getIndexScale(), i = this.getStackCount(), o = this.index,
                            a = n.isHorizontal(), s = a ? n.left : n.top, l = s + (a ? n.width : n.height), c = [];
                        for (e = 0, t = this.getMeta().data.length; e < t; ++e) c.push(n.getPixelForValue(null, e, o));
                        return {
                            min: r.isNullOrUndef(n.options.barThickness) ? function (e, t) {
                                var n, i, o, r, a = e.isHorizontal() ? e.width : e.height, s = e.getTicks();
                                for (o = 1, r = t.length; o < r; ++o) a = Math.min(a, t[o] - t[o - 1]);
                                for (o = 0, r = s.length; o < r; ++o) i = e.getPixelForTick(o), a = o > 0 ? Math.min(a, i - n) : a, n = i;
                                return a
                            }(n, c) : -1, pixels: c, start: s, end: l, stackCount: i, scale: n
                        }
                    }, calculateBarValuePixels: function (e, t) {
                        var n, i, o, r, a, s, l = this.chart, c = this.getMeta(), u = this.getValueScale(),
                            d = l.data.datasets, h = u.getRightValue(d[e].data[t]), f = u.options.stacked, p = c.stack,
                            g = 0;
                        if (f || void 0 === f && void 0 !== p) for (n = 0; n < e; ++n) (i = l.getDatasetMeta(n)).bar && i.stack === p && i.controller.getValueScaleId() === u.id && l.isDatasetVisible(n) && (o = u.getRightValue(d[n].data[t]), (h < 0 && o < 0 || h >= 0 && o > 0) && (g += o));
                        return r = u.getPixelForValue(g), {
                            size: s = ((a = u.getPixelForValue(g + h)) - r) / 2,
                            base: r,
                            head: a,
                            center: a + s / 2
                        }
                    }, calculateBarIndexPixels: function (e, t, n) {
                        var i = n.scale.options, o = "flex" === i.barThickness ? function (e, t, n) {
                                var i, o = t.pixels, r = o[e], a = e > 0 ? o[e - 1] : null,
                                    s = e < o.length - 1 ? o[e + 1] : null, l = n.categoryPercentage;
                                return null === a && (a = r - (null === s ? t.end - r : s - r)), null === s && (s = r + r - a), i = r - (r - a) / 2 * l, {
                                    chunk: (s - a) / 2 * l / t.stackCount,
                                    ratio: n.barPercentage,
                                    start: i
                                }
                            }(t, n, i) : function (e, t, n) {
                                var i, o, a = n.barThickness, s = t.stackCount, l = t.pixels[e];
                                return r.isNullOrUndef(a) ? (i = t.min * n.categoryPercentage, o = n.barPercentage) : (i = a * s, o = 1), {
                                    chunk: i / s,
                                    ratio: o,
                                    start: l - i / 2
                                }
                            }(t, n, i), a = this.getStackIndex(e, this.getMeta().stack),
                            s = o.start + o.chunk * a + o.chunk / 2,
                            l = Math.min(r.valueOrDefault(i.maxBarThickness, 1 / 0), o.chunk * o.ratio);
                        return {base: s - l / 2, head: s + l / 2, center: s, size: l}
                    }, draw: function () {
                        var e = this.chart, t = this.getValueScale(), n = this.getMeta().data, i = this.getDataset(),
                            o = n.length, a = 0;
                        for (r.canvas.clipArea(e.ctx, e.chartArea); a < o; ++a) isNaN(t.getRightValue(i.data[a])) || n[a].draw();
                        r.canvas.unclipArea(e.ctx)
                    }
                }), e.controllers.horizontalBar = e.controllers.bar.extend({
                    getValueScaleId: function () {
                        return this.getMeta().xAxisID
                    }, getIndexScaleId: function () {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }, {26: 26, 41: 41, 46: 46}], 16: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(41), r = e(46);
            i._set("bubble", {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom", id: "x-axis-0"}],
                    yAxes: [{type: "linear", position: "left", id: "y-axis-0"}]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e, t) {
                            var n = t.datasets[e.datasetIndex].label || "",
                                i = t.datasets[e.datasetIndex].data[e.index];
                            return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + i.r + ")"
                        }
                    }
                }
            }), t.exports = function (e) {
                e.controllers.bubble = e.DatasetController.extend({
                    dataElementType: o.Point, update: function (e) {
                        var t = this, n = t.getMeta().data;
                        r.each(n, function (n, i) {
                            t.updateElement(n, i, e)
                        })
                    }, updateElement: function (e, t, n) {
                        var i = this, o = i.getMeta(), r = e.custom || {}, a = i.getScaleForId(o.xAxisID),
                            s = i.getScaleForId(o.yAxisID), l = i._resolveElementOptions(e, t),
                            c = i.getDataset().data[t], u = i.index,
                            d = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof c ? c : NaN, t, u),
                            h = n ? s.getBasePixel() : s.getPixelForValue(c, t, u);
                        e._xScale = a, e._yScale = s, e._options = l, e._datasetIndex = u, e._index = t, e._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            rotation: l.rotation,
                            radius: n ? 0 : l.radius,
                            skip: r.skip || isNaN(d) || isNaN(h),
                            x: d,
                            y: h
                        }, e.pivot()
                    }, setHoverStyle: function (e) {
                        var t = e._model, n = e._options;
                        e.$previousStyle = {
                            backgroundColor: t.backgroundColor,
                            borderColor: t.borderColor,
                            borderWidth: t.borderWidth,
                            radius: t.radius
                        }, t.backgroundColor = r.valueOrDefault(n.hoverBackgroundColor, r.getHoverColor(n.backgroundColor)), t.borderColor = r.valueOrDefault(n.hoverBorderColor, r.getHoverColor(n.borderColor)), t.borderWidth = r.valueOrDefault(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius
                    }, _resolveElementOptions: function (e, t) {
                        var n, i, o, a = this.chart, s = a.data.datasets[this.index], l = e.custom || {},
                            c = a.options.elements.point, u = r.options.resolve, d = s.data[t], h = {},
                            f = {chart: a, dataIndex: t, dataset: s, datasetIndex: this.index},
                            p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                        for (n = 0, i = p.length; n < i; ++n) h[o = p[n]] = u([l[o], s[o], c[o]], f, t);
                        return h.radius = u([l.radius, d ? d.r : void 0, s.radius, c.radius], f, t), h
                    }
                })
            }
        }, {26: 26, 41: 41, 46: 46}], 17: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(41), r = e(46);
            i._set("doughnut", {
                animation: {animateRotate: !0, animateScale: !1},
                hover: {mode: "single"},
                legendCallback: function (e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    var n = e.data, i = n.datasets, o = n.labels;
                    if (i.length) for (var r = 0; r < i[0].data.length; ++r) t.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), o[r] && t.push(o[r]), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (e) {
                            var t = e.data;
                            return t.labels.length && t.datasets.length ? t.labels.map(function (n, i) {
                                var o = e.getDatasetMeta(0), a = t.datasets[0], s = o.data[i], l = s && s.custom || {},
                                    c = r.valueAtIndexOrDefault, u = e.options.elements.arc;
                                return {
                                    text: n,
                                    fillStyle: l.backgroundColor ? l.backgroundColor : c(a.backgroundColor, i, u.backgroundColor),
                                    strokeStyle: l.borderColor ? l.borderColor : c(a.borderColor, i, u.borderColor),
                                    lineWidth: l.borderWidth ? l.borderWidth : c(a.borderWidth, i, u.borderWidth),
                                    hidden: isNaN(a.data[i]) || o.data[i].hidden,
                                    index: i
                                }
                            }) : []
                        }
                    }, onClick: function (e, t) {
                        var n, i, o, r = t.index, a = this.chart;
                        for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) (o = a.getDatasetMeta(n)).data[r] && (o.data[r].hidden = !o.data[r].hidden);
                        a.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -.5 * Math.PI,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e, t) {
                            var n = t.labels[e.index], i = ": " + t.datasets[e.datasetIndex].data[e.index];
                            return r.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                        }
                    }
                }
            }), i._set("pie", r.clone(i.doughnut)), i._set("pie", {cutoutPercentage: 0}), t.exports = function (e) {
                e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
                    dataElementType: o.Arc, linkScales: r.noop, getRingIndex: function (e) {
                        for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t;
                        return t
                    }, update: function (e) {
                        var t = this, n = t.chart, i = n.chartArea, o = n.options, a = o.elements.arc,
                            s = i.right - i.left - a.borderWidth, l = i.bottom - i.top - a.borderWidth,
                            c = Math.min(s, l), u = {x: 0, y: 0}, d = t.getMeta(), h = o.cutoutPercentage,
                            f = o.circumference;
                        if (f < 2 * Math.PI) {
                            var p = o.rotation % (2 * Math.PI),
                                g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
                                m = {x: Math.cos(p), y: Math.sin(p)}, v = {x: Math.cos(g), y: Math.sin(g)},
                                y = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                b = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                x = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                w = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                k = h / 100, C = {
                                    x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : k), v.x * (v.x < 0 ? 1 : k)),
                                    y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : k), v.y * (v.y < 0 ? 1 : k))
                                }, S = {
                                    x: y ? 1 : Math.max(m.x * (m.x > 0 ? 1 : k), v.x * (v.x > 0 ? 1 : k)),
                                    y: b ? 1 : Math.max(m.y * (m.y > 0 ? 1 : k), v.y * (v.y > 0 ? 1 : k))
                                }, _ = {width: .5 * (S.x - C.x), height: .5 * (S.y - C.y)};
                            c = Math.min(s / _.width, l / _.height), u = {x: -.5 * (S.x + C.x), y: -.5 * (S.y + C.y)}
                        }
                        n.borderWidth = t.getMaxBorderWidth(d.data), n.outerRadius = Math.max((c - n.borderWidth) / 2, 0), n.innerRadius = Math.max(h ? n.outerRadius / 100 * h : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = u.x * n.outerRadius, n.offsetY = u.y * n.outerRadius, d.total = t.calculateTotal(), t.outerRadius = n.outerRadius - n.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - n.radiusLength, 0), r.each(d.data, function (n, i) {
                            t.updateElement(n, i, e)
                        })
                    }, updateElement: function (e, t, n) {
                        var i = this, o = i.chart, a = o.chartArea, s = o.options, l = s.animation,
                            c = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, d = s.rotation, h = s.rotation,
                            f = i.getDataset(),
                            p = n && l.animateRotate ? 0 : e.hidden ? 0 : i.calculateCircumference(f.data[t]) * (s.circumference / (2 * Math.PI)),
                            g = n && l.animateScale ? 0 : i.innerRadius, m = n && l.animateScale ? 0 : i.outerRadius,
                            v = r.valueAtIndexOrDefault;
                        r.extend(e, {
                            _datasetIndex: i.index,
                            _index: t,
                            _model: {
                                x: c + o.offsetX,
                                y: u + o.offsetY,
                                startAngle: d,
                                endAngle: h,
                                circumference: p,
                                outerRadius: m,
                                innerRadius: g,
                                label: v(f.label, t, o.data.labels[t])
                            }
                        });
                        var y = e._model, b = e.custom || {}, x = r.valueAtIndexOrDefault,
                            w = this.chart.options.elements.arc;
                        y.backgroundColor = b.backgroundColor ? b.backgroundColor : x(f.backgroundColor, t, w.backgroundColor), y.borderColor = b.borderColor ? b.borderColor : x(f.borderColor, t, w.borderColor), y.borderWidth = b.borderWidth ? b.borderWidth : x(f.borderWidth, t, w.borderWidth), n && l.animateRotate || (y.startAngle = 0 === t ? s.rotation : i.getMeta().data[t - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), e.pivot()
                    }, calculateTotal: function () {
                        var e, t = this.getDataset(), n = this.getMeta(), i = 0;
                        return r.each(n.data, function (n, o) {
                            e = t.data[o], isNaN(e) || n.hidden || (i += Math.abs(e))
                        }), i
                    }, calculateCircumference: function (e) {
                        var t = this.getMeta().total;
                        return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0
                    }, getMaxBorderWidth: function (e) {
                        for (var t, n, i = 0, o = this.index, r = e.length, a = 0; a < r; a++) t = e[a]._model ? e[a]._model.borderWidth : 0, i = (n = e[a]._chart ? e[a]._chart.config.data.datasets[o].hoverBorderWidth : 0) > (i = t > i ? t : i) ? n : i;
                        return i
                    }
                })
            }
        }, {26: 26, 41: 41, 46: 46}], 18: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(41), r = e(46);
            i._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {mode: "label"},
                scales: {xAxes: [{type: "category", id: "x-axis-0"}], yAxes: [{type: "linear", id: "y-axis-0"}]}
            }), t.exports = function (e) {
                function t(e, t) {
                    return r.valueOrDefault(e.showLine, t.showLines)
                }

                e.controllers.line = e.DatasetController.extend({
                    datasetElementType: o.Line, dataElementType: o.Point, update: function (e) {
                        var n, i, o, a = this, s = a.getMeta(), l = s.dataset, c = s.data || [], u = a.chart.options,
                            d = u.elements.line, h = a.getScaleForId(s.yAxisID), f = a.getDataset(), p = t(f, u);
                        for (p && (o = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = a.index, l._children = c, l._model = {
                            spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps,
                            tension: o.tension ? o.tension : r.valueOrDefault(f.lineTension, d.tension),
                            backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || d.backgroundColor,
                            borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || d.borderWidth,
                            borderColor: o.borderColor ? o.borderColor : f.borderColor || d.borderColor,
                            borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || d.borderCapStyle,
                            borderDash: o.borderDash ? o.borderDash : f.borderDash || d.borderDash,
                            borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || d.borderDashOffset,
                            borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || d.borderJoinStyle,
                            fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : d.fill,
                            steppedLine: o.steppedLine ? o.steppedLine : r.valueOrDefault(f.steppedLine, d.stepped),
                            cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : r.valueOrDefault(f.cubicInterpolationMode, d.cubicInterpolationMode)
                        }, l.pivot()), n = 0, i = c.length; n < i; ++n) a.updateElement(c[n], n, e);
                        for (p && 0 !== l._model.tension && a.updateBezierControlPoints(), n = 0, i = c.length; n < i; ++n) c[n].pivot()
                    }, getPointBackgroundColor: function (e, t) {
                        var n = this.chart.options.elements.point.backgroundColor, i = this.getDataset(),
                            o = e.custom || {};
                        return o.backgroundColor ? n = o.backgroundColor : i.pointBackgroundColor ? n = r.valueAtIndexOrDefault(i.pointBackgroundColor, t, n) : i.backgroundColor && (n = i.backgroundColor), n
                    }, getPointBorderColor: function (e, t) {
                        var n = this.chart.options.elements.point.borderColor, i = this.getDataset(),
                            o = e.custom || {};
                        return o.borderColor ? n = o.borderColor : i.pointBorderColor ? n = r.valueAtIndexOrDefault(i.pointBorderColor, t, n) : i.borderColor && (n = i.borderColor), n
                    }, getPointBorderWidth: function (e, t) {
                        var n = this.chart.options.elements.point.borderWidth, i = this.getDataset(),
                            o = e.custom || {};
                        return isNaN(o.borderWidth) ? !isNaN(i.pointBorderWidth) || r.isArray(i.pointBorderWidth) ? n = r.valueAtIndexOrDefault(i.pointBorderWidth, t, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = o.borderWidth, n
                    }, getPointRotation: function (e, t) {
                        var n = this.chart.options.elements.point.rotation, i = this.getDataset(), o = e.custom || {};
                        return isNaN(o.rotation) ? isNaN(i.pointRotation) && !r.isArray(i.pointRotation) || (n = r.valueAtIndexOrDefault(i.pointRotation, t, n)) : n = o.rotation, n
                    }, updateElement: function (e, t, n) {
                        var i, o, a = this, s = a.getMeta(), l = e.custom || {}, c = a.getDataset(), u = a.index,
                            d = c.data[t], h = a.getScaleForId(s.yAxisID), f = a.getScaleForId(s.xAxisID),
                            p = a.chart.options.elements.point;
                        void 0 !== c.radius && void 0 === c.pointRadius && (c.pointRadius = c.radius), void 0 !== c.hitRadius && void 0 === c.pointHitRadius && (c.pointHitRadius = c.hitRadius), i = f.getPixelForValue("object" == typeof d ? d : NaN, t, u), o = n ? h.getBasePixel() : a.calculatePointY(d, t, u), e._xScale = f, e._yScale = h, e._datasetIndex = u, e._index = t, e._model = {
                            x: i,
                            y: o,
                            skip: l.skip || isNaN(i) || isNaN(o),
                            radius: l.radius || r.valueAtIndexOrDefault(c.pointRadius, t, p.radius),
                            pointStyle: l.pointStyle || r.valueAtIndexOrDefault(c.pointStyle, t, p.pointStyle),
                            rotation: a.getPointRotation(e, t),
                            backgroundColor: a.getPointBackgroundColor(e, t),
                            borderColor: a.getPointBorderColor(e, t),
                            borderWidth: a.getPointBorderWidth(e, t),
                            tension: s.dataset._model ? s.dataset._model.tension : 0,
                            steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                            hitRadius: l.hitRadius || r.valueAtIndexOrDefault(c.pointHitRadius, t, p.hitRadius)
                        }
                    }, calculatePointY: function (e, t, n) {
                        var i, o, r, a = this.chart, s = this.getMeta(), l = this.getScaleForId(s.yAxisID), c = 0,
                            u = 0;
                        if (l.options.stacked) {
                            for (i = 0; i < n; i++) if (o = a.data.datasets[i], "line" === (r = a.getDatasetMeta(i)).type && r.yAxisID === l.id && a.isDatasetVisible(i)) {
                                var d = Number(l.getRightValue(o.data[t]));
                                d < 0 ? u += d || 0 : c += d || 0
                            }
                            var h = Number(l.getRightValue(e));
                            return h < 0 ? l.getPixelForValue(u + h) : l.getPixelForValue(c + h)
                        }
                        return l.getPixelForValue(e)
                    }, updateBezierControlPoints: function () {
                        var e, t, n, i, o = this.getMeta(), a = this.chart.chartArea, s = o.data || [];

                        function l(e, t, n) {
                            return Math.max(Math.min(e, n), t)
                        }

                        if (o.dataset._model.spanGaps && (s = s.filter(function (e) {
                            return !e._model.skip
                        })), "monotone" === o.dataset._model.cubicInterpolationMode) r.splineCurveMonotone(s); else for (e = 0, t = s.length; e < t; ++e) n = s[e]._model, i = r.splineCurve(r.previousItem(s, e)._model, n, r.nextItem(s, e)._model, o.dataset._model.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
                        if (this.chart.options.elements.line.capBezierPoints) for (e = 0, t = s.length; e < t; ++e) (n = s[e]._model).controlPointPreviousX = l(n.controlPointPreviousX, a.left, a.right), n.controlPointPreviousY = l(n.controlPointPreviousY, a.top, a.bottom), n.controlPointNextX = l(n.controlPointNextX, a.left, a.right), n.controlPointNextY = l(n.controlPointNextY, a.top, a.bottom)
                    }, draw: function () {
                        var e, n = this.chart, i = this.getMeta(), o = i.data || [], a = n.chartArea, s = o.length,
                            l = 0;
                        for (t(this.getDataset(), n.options) && (e = (i.dataset._model.borderWidth || 0) / 2, r.canvas.clipArea(n.ctx, {
                            left: a.left,
                            right: a.right,
                            top: a.top - e,
                            bottom: a.bottom + e
                        }), i.dataset.draw(), r.canvas.unclipArea(n.ctx)); l < s; ++l) o[l].draw(a)
                    }, setHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e._index, i = e.custom || {},
                            o = e._model;
                        e.$previousStyle = {
                            backgroundColor: o.backgroundColor,
                            borderColor: o.borderColor,
                            borderWidth: o.borderWidth,
                            radius: o.radius
                        }, o.backgroundColor = i.hoverBackgroundColor || r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, n, r.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor || r.valueAtIndexOrDefault(t.pointHoverBorderColor, n, r.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth || r.valueAtIndexOrDefault(t.pointHoverBorderWidth, n, o.borderWidth), o.radius = i.hoverRadius || r.valueAtIndexOrDefault(t.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius)
                    }
                })
            }
        }, {26: 26, 41: 41, 46: 46}], 19: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(41), r = e(46);
            i._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {display: !1},
                    gridLines: {circular: !0},
                    pointLabels: {display: !1},
                    ticks: {beginAtZero: !0}
                },
                animation: {animateRotate: !0, animateScale: !0},
                startAngle: -.5 * Math.PI,
                legendCallback: function (e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    var n = e.data, i = n.datasets, o = n.labels;
                    if (i.length) for (var r = 0; r < i[0].data.length; ++r) t.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), o[r] && t.push(o[r]), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (e) {
                            var t = e.data;
                            return t.labels.length && t.datasets.length ? t.labels.map(function (n, i) {
                                var o = e.getDatasetMeta(0), a = t.datasets[0], s = o.data[i].custom || {},
                                    l = r.valueAtIndexOrDefault, c = e.options.elements.arc;
                                return {
                                    text: n,
                                    fillStyle: s.backgroundColor ? s.backgroundColor : l(a.backgroundColor, i, c.backgroundColor),
                                    strokeStyle: s.borderColor ? s.borderColor : l(a.borderColor, i, c.borderColor),
                                    lineWidth: s.borderWidth ? s.borderWidth : l(a.borderWidth, i, c.borderWidth),
                                    hidden: isNaN(a.data[i]) || o.data[i].hidden,
                                    index: i
                                }
                            }) : []
                        }
                    }, onClick: function (e, t) {
                        var n, i, o, r = t.index, a = this.chart;
                        for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) (o = a.getDatasetMeta(n)).data[r].hidden = !o.data[r].hidden;
                        a.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e, t) {
                            return t.labels[e.index] + ": " + e.yLabel
                        }
                    }
                }
            }), t.exports = function (e) {
                e.controllers.polarArea = e.DatasetController.extend({
                    dataElementType: o.Arc, linkScales: r.noop, update: function (e) {
                        var t, n, i, o = this, a = o.getDataset(), s = o.getMeta(), l = o.chart.options.startAngle || 0,
                            c = o._starts = [], u = o._angles = [];
                        for (o._updateRadius(), s.count = o.countVisibleElements(), t = 0, n = a.data.length; t < n; t++) c[t] = l, i = o._computeAngle(t), u[t] = i, l += i;
                        r.each(s.data, function (t, n) {
                            o.updateElement(t, n, e)
                        })
                    }, _updateRadius: function () {
                        var e = this, t = e.chart, n = t.chartArea, i = t.options, o = i.elements.arc,
                            r = Math.min(n.right - n.left, n.bottom - n.top);
                        t.outerRadius = Math.max((r - o.borderWidth / 2) / 2, 0), t.innerRadius = Math.max(i.cutoutPercentage ? t.outerRadius / 100 * i.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength
                    }, updateElement: function (e, t, n) {
                        var i = this, o = i.chart, a = i.getDataset(), s = o.options, l = s.animation, c = o.scale,
                            u = o.data.labels, d = c.xCenter, h = c.yCenter, f = s.startAngle,
                            p = e.hidden ? 0 : c.getDistanceFromCenterForValue(a.data[t]), g = i._starts[t],
                            m = g + (e.hidden ? 0 : i._angles[t]),
                            v = l.animateScale ? 0 : c.getDistanceFromCenterForValue(a.data[t]);
                        r.extend(e, {
                            _datasetIndex: i.index,
                            _index: t,
                            _scale: c,
                            _model: {
                                x: d,
                                y: h,
                                innerRadius: 0,
                                outerRadius: n ? v : p,
                                startAngle: n && l.animateRotate ? f : g,
                                endAngle: n && l.animateRotate ? f : m,
                                label: r.valueAtIndexOrDefault(u, t, u[t])
                            }
                        });
                        var y = this.chart.options.elements.arc, b = e.custom || {}, x = r.valueAtIndexOrDefault,
                            w = e._model;
                        w.backgroundColor = b.backgroundColor ? b.backgroundColor : x(a.backgroundColor, t, y.backgroundColor), w.borderColor = b.borderColor ? b.borderColor : x(a.borderColor, t, y.borderColor), w.borderWidth = b.borderWidth ? b.borderWidth : x(a.borderWidth, t, y.borderWidth), e.pivot()
                    }, countVisibleElements: function () {
                        var e = this.getDataset(), t = this.getMeta(), n = 0;
                        return r.each(t.data, function (t, i) {
                            isNaN(e.data[i]) || t.hidden || n++
                        }), n
                    }, _computeAngle: function (e) {
                        var t = this, n = this.getMeta().count, i = t.getDataset(), o = t.getMeta();
                        if (isNaN(i.data[e]) || o.data[e].hidden) return 0;
                        var a = {chart: t.chart, dataIndex: e, dataset: i, datasetIndex: t.index};
                        return r.options.resolve([t.chart.options.elements.arc.angle, 2 * Math.PI / n], a, e)
                    }
                })
            }
        }, {26: 26, 41: 41, 46: 46}], 20: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(41), r = e(46);
            i._set("radar", {scale: {type: "radialLinear"}, elements: {line: {tension: 0}}}), t.exports = function (e) {
                e.controllers.radar = e.DatasetController.extend({
                    datasetElementType: o.Line, dataElementType: o.Point, linkScales: r.noop, update: function (e) {
                        var t = this, n = t.getMeta(), i = n.dataset, o = n.data, a = i.custom || {},
                            s = t.getDataset(), l = t.chart.options.elements.line, c = t.chart.scale;
                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), r.extend(n.dataset, {
                            _datasetIndex: t.index,
                            _scale: c,
                            _children: o,
                            _loop: !0,
                            _model: {
                                tension: a.tension ? a.tension : r.valueOrDefault(s.lineTension, l.tension),
                                backgroundColor: a.backgroundColor ? a.backgroundColor : s.backgroundColor || l.backgroundColor,
                                borderWidth: a.borderWidth ? a.borderWidth : s.borderWidth || l.borderWidth,
                                borderColor: a.borderColor ? a.borderColor : s.borderColor || l.borderColor,
                                fill: a.fill ? a.fill : void 0 !== s.fill ? s.fill : l.fill,
                                borderCapStyle: a.borderCapStyle ? a.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                borderDash: a.borderDash ? a.borderDash : s.borderDash || l.borderDash,
                                borderDashOffset: a.borderDashOffset ? a.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                            }
                        }), n.dataset.pivot(), r.each(o, function (n, i) {
                            t.updateElement(n, i, e)
                        }, t), t.updateBezierControlPoints()
                    }, updateElement: function (e, t, n) {
                        var i = this, o = e.custom || {}, a = i.getDataset(), s = i.chart.scale,
                            l = i.chart.options.elements.point, c = s.getPointPositionForValue(t, a.data[t]);
                        void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), void 0 !== a.hitRadius && void 0 === a.pointHitRadius && (a.pointHitRadius = a.hitRadius), r.extend(e, {
                            _datasetIndex: i.index,
                            _index: t,
                            _scale: s,
                            _model: {
                                x: n ? s.xCenter : c.x,
                                y: n ? s.yCenter : c.y,
                                tension: o.tension ? o.tension : r.valueOrDefault(a.lineTension, i.chart.options.elements.line.tension),
                                radius: o.radius ? o.radius : r.valueAtIndexOrDefault(a.pointRadius, t, l.radius),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : r.valueAtIndexOrDefault(a.pointBackgroundColor, t, l.backgroundColor),
                                borderColor: o.borderColor ? o.borderColor : r.valueAtIndexOrDefault(a.pointBorderColor, t, l.borderColor),
                                borderWidth: o.borderWidth ? o.borderWidth : r.valueAtIndexOrDefault(a.pointBorderWidth, t, l.borderWidth),
                                pointStyle: o.pointStyle ? o.pointStyle : r.valueAtIndexOrDefault(a.pointStyle, t, l.pointStyle),
                                rotation: o.rotation ? o.rotation : r.valueAtIndexOrDefault(a.pointRotation, t, l.rotation),
                                hitRadius: o.hitRadius ? o.hitRadius : r.valueAtIndexOrDefault(a.pointHitRadius, t, l.hitRadius)
                            }
                        }), e._model.skip = o.skip ? o.skip : isNaN(e._model.x) || isNaN(e._model.y)
                    }, updateBezierControlPoints: function () {
                        var e = this.chart.chartArea, t = this.getMeta();
                        r.each(t.data, function (n, i) {
                            var o = n._model,
                                a = r.splineCurve(r.previousItem(t.data, i, !0)._model, o, r.nextItem(t.data, i, !0)._model, o.tension);
                            o.controlPointPreviousX = Math.max(Math.min(a.previous.x, e.right), e.left), o.controlPointPreviousY = Math.max(Math.min(a.previous.y, e.bottom), e.top), o.controlPointNextX = Math.max(Math.min(a.next.x, e.right), e.left), o.controlPointNextY = Math.max(Math.min(a.next.y, e.bottom), e.top), n.pivot()
                        })
                    }, setHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e.custom || {}, i = e._index,
                            o = e._model;
                        e.$previousStyle = {
                            backgroundColor: o.backgroundColor,
                            borderColor: o.borderColor,
                            borderWidth: o.borderWidth,
                            radius: o.radius
                        }, o.radius = n.hoverRadius ? n.hoverRadius : r.valueAtIndexOrDefault(t.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, i, r.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : r.valueAtIndexOrDefault(t.pointHoverBorderColor, i, r.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : r.valueAtIndexOrDefault(t.pointHoverBorderWidth, i, o.borderWidth)
                    }
                })
            }
        }, {26: 26, 41: 41, 46: 46}], 21: [function (e, t, n) {
            "use strict";
            e(26)._set("scatter", {
                hover: {mode: "single"},
                scales: {
                    xAxes: [{id: "x-axis-1", type: "linear", position: "bottom"}],
                    yAxes: [{id: "y-axis-1", type: "linear", position: "left"}]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (e) {
                            return "(" + e.xLabel + ", " + e.yLabel + ")"
                        }
                    }
                }
            }), t.exports = function (e) {
                e.controllers.scatter = e.controllers.line
            }
        }, {26: 26}], 22: [function (e, t, n) {
            "use strict";
            var i = e(27);
            n = t.exports = i.extend({
                chart: null,
                currentStep: 0,
                numSteps: 60,
                easing: "",
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
            });
            Object.defineProperty(n.prototype, "animationObject", {
                get: function () {
                    return this
                }
            }), Object.defineProperty(n.prototype, "chartInstance", {
                get: function () {
                    return this.chart
                }, set: function (e) {
                    this.chart = e
                }
            })
        }, {27: 27}], 23: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(46);
            i._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: o.noop,
                    onComplete: o.noop
                }
            }), t.exports = {
                frameDuration: 17, animations: [], dropFrames: 0, request: null, addAnimation: function (e, t, n, i) {
                    var o, r, a = this.animations;
                    for (t.chart = e, i || (e.animating = !0), o = 0, r = a.length; o < r; ++o) if (a[o].chart === e) return void (a[o] = t);
                    a.push(t), 1 === a.length && this.requestAnimationFrame()
                }, cancelAnimation: function (e) {
                    var t = o.findIndex(this.animations, function (t) {
                        return t.chart === e
                    });
                    -1 !== t && (this.animations.splice(t, 1), e.animating = !1)
                }, requestAnimationFrame: function () {
                    var e = this;
                    null === e.request && (e.request = o.requestAnimFrame.call(window, function () {
                        e.request = null, e.startDigest()
                    }))
                }, startDigest: function () {
                    var e = this, t = Date.now(), n = 0;
                    e.dropFrames > 1 && (n = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1), e.advance(1 + n);
                    var i = Date.now();
                    e.dropFrames += (i - t) / e.frameDuration, e.animations.length > 0 && e.requestAnimationFrame()
                }, advance: function (e) {
                    for (var t, n, i = this.animations, r = 0; r < i.length;) n = (t = i[r]).chart, t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), o.callback(t.render, [n, t], n), o.callback(t.onAnimationProgress, [t], n), t.currentStep >= t.numSteps ? (o.callback(t.onAnimationComplete, [t], n), n.animating = !1, i.splice(r, 1)) : ++r
                }
            }
        }, {26: 26, 46: 46}], 24: [function (e, t, n) {
            "use strict";
            var i = e(22), o = e(23), r = e(26), a = e(46), s = e(29), l = e(31), c = e(49), u = e(32), d = e(34),
                h = e(36);
            t.exports = function (e) {
                function t(e) {
                    return "top" === e || "bottom" === e
                }

                e.types = {}, e.instances = {}, e.controllers = {}, a.extend(e.prototype, {
                    construct: function (t, n) {
                        var i = this;
                        n = function (e) {
                            var t = (e = e || {}).data = e.data || {};
                            return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = a.configMerge(r.global, r[e.type], e.options || {}), e
                        }(n);
                        var o = c.acquireContext(t, n), s = o && o.canvas, l = s && s.height, u = s && s.width;
                        i.id = a.uid(), i.ctx = o, i.canvas = s, i.config = n, i.width = u, i.height = l, i.aspectRatio = l ? u / l : null, i.options = n.options, i._bufferedRender = !1, i.chart = i, i.controller = i, e.instances[i.id] = i, Object.defineProperty(i, "data", {
                            get: function () {
                                return i.config.data
                            }, set: function (e) {
                                i.config.data = e
                            }
                        }), o && s ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    }, initialize: function () {
                        var e = this;
                        return u.notify(e, "beforeInit"), a.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.initToolTip(), u.notify(e, "afterInit"), e
                    }, clear: function () {
                        return a.canvas.clear(this), this
                    }, stop: function () {
                        return o.cancelAnimation(this), this
                    }, resize: function (e) {
                        var t = this, n = t.options, i = t.canvas, o = n.maintainAspectRatio && t.aspectRatio || null,
                            r = Math.max(0, Math.floor(a.getMaximumWidth(i))),
                            s = Math.max(0, Math.floor(o ? r / o : a.getMaximumHeight(i)));
                        if ((t.width !== r || t.height !== s) && (i.width = t.width = r, i.height = t.height = s, i.style.width = r + "px", i.style.height = s + "px", a.retinaScale(t, n.devicePixelRatio), !e)) {
                            var l = {width: r, height: s};
                            u.notify(t, "resize", [l]), t.options.onResize && t.options.onResize(t, l), t.stop(), t.update({duration: t.options.responsiveAnimationDuration})
                        }
                    }, ensureScalesHaveIDs: function () {
                        var e = this.options, t = e.scales || {}, n = e.scale;
                        a.each(t.xAxes, function (e, t) {
                            e.id = e.id || "x-axis-" + t
                        }), a.each(t.yAxes, function (e, t) {
                            e.id = e.id || "y-axis-" + t
                        }), n && (n.id = n.id || "scale")
                    }, buildOrUpdateScales: function () {
                        var e = this, n = e.options, i = e.scales || {}, o = [],
                            r = Object.keys(i).reduce(function (e, t) {
                                return e[t] = !1, e
                            }, {});
                        n.scales && (o = o.concat((n.scales.xAxes || []).map(function (e) {
                            return {options: e, dtype: "category", dposition: "bottom"}
                        }), (n.scales.yAxes || []).map(function (e) {
                            return {options: e, dtype: "linear", dposition: "left"}
                        }))), n.scale && o.push({
                            options: n.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), a.each(o, function (n) {
                            var o = n.options, s = o.id, l = a.valueOrDefault(o.type, n.dtype);
                            t(o.position) !== t(n.dposition) && (o.position = n.dposition), r[s] = !0;
                            var c = null;
                            if (s in i && i[s].type === l) (c = i[s]).options = o, c.ctx = e.ctx, c.chart = e; else {
                                var u = d.getScaleConstructor(l);
                                if (!u) return;
                                c = new u({id: s, type: l, options: o, ctx: e.ctx, chart: e}), i[c.id] = c
                            }
                            c.mergeTicksOptions(), n.isDefault && (e.scale = c)
                        }), a.each(r, function (e, t) {
                            e || delete i[t]
                        }), e.scales = i, d.addScalesToLayout(this)
                    }, buildOrUpdateControllers: function () {
                        var t = this, n = [], i = [];
                        return a.each(t.data.datasets, function (o, r) {
                            var a = t.getDatasetMeta(r), s = o.type || t.config.type;
                            if (a.type && a.type !== s && (t.destroyDatasetMeta(r), a = t.getDatasetMeta(r)), a.type = s, n.push(a.type), a.controller) a.controller.updateIndex(r), a.controller.linkScales(); else {
                                var l = e.controllers[a.type];
                                if (void 0 === l) throw new Error('"' + a.type + '" is not a chart type.');
                                a.controller = new l(t, r), i.push(a.controller)
                            }
                        }, t), i
                    }, resetElements: function () {
                        var e = this;
                        a.each(e.data.datasets, function (t, n) {
                            e.getDatasetMeta(n).controller.reset()
                        }, e)
                    }, reset: function () {
                        this.resetElements(), this.tooltip.initialize()
                    }, update: function (t) {
                        var n, i, o = this;
                        if (t && "object" == typeof t || (t = {
                            duration: t,
                            lazy: arguments[1]
                        }), i = (n = o).options, a.each(n.scales, function (e) {
                            l.removeBox(n, e)
                        }), i = a.configMerge(e.defaults.global, e.defaults[n.config.type], i), n.options = n.config.options = i, n.ensureScalesHaveIDs(), n.buildOrUpdateScales(), n.tooltip._options = i.tooltips, n.tooltip.initialize(), u._invalidate(o), !1 !== u.notify(o, "beforeUpdate")) {
                            o.tooltip._data = o.data;
                            var r = o.buildOrUpdateControllers();
                            a.each(o.data.datasets, function (e, t) {
                                o.getDatasetMeta(t).controller.buildOrUpdateElements()
                            }, o), o.updateLayout(), o.options.animation && o.options.animation.duration && a.each(r, function (e) {
                                e.reset()
                            }), o.updateDatasets(), o.tooltip.initialize(), o.lastActive = [], u.notify(o, "afterUpdate"), o._bufferedRender ? o._bufferedRequest = {
                                duration: t.duration,
                                easing: t.easing,
                                lazy: t.lazy
                            } : o.render(t)
                        }
                    }, updateLayout: function () {
                        !1 !== u.notify(this, "beforeLayout") && (l.update(this, this.width, this.height), u.notify(this, "afterScaleUpdate"), u.notify(this, "afterLayout"))
                    }, updateDatasets: function () {
                        if (!1 !== u.notify(this, "beforeDatasetsUpdate")) {
                            for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                            u.notify(this, "afterDatasetsUpdate")
                        }
                    }, updateDataset: function (e) {
                        var t = this.getDatasetMeta(e), n = {meta: t, index: e};
                        !1 !== u.notify(this, "beforeDatasetUpdate", [n]) && (t.controller.update(), u.notify(this, "afterDatasetUpdate", [n]))
                    }, render: function (e) {
                        var t = this;
                        e && "object" == typeof e || (e = {duration: e, lazy: arguments[1]});
                        var n = e.duration, r = e.lazy;
                        if (!1 !== u.notify(t, "beforeRender")) {
                            var s = t.options.animation, l = function (e) {
                                u.notify(t, "afterRender"), a.callback(s && s.onComplete, [e], t)
                            };
                            if (s && (void 0 !== n && 0 !== n || void 0 === n && 0 !== s.duration)) {
                                var c = new i({
                                    numSteps: (n || s.duration) / 16.66,
                                    easing: e.easing || s.easing,
                                    render: function (e, t) {
                                        var n = a.easing.effects[t.easing], i = t.currentStep, o = i / t.numSteps;
                                        e.draw(n(o), o, i)
                                    },
                                    onAnimationProgress: s.onProgress,
                                    onAnimationComplete: l
                                });
                                o.addAnimation(t, c, n, r)
                            } else t.draw(), l(new i({numSteps: 0, chart: t}));
                            return t
                        }
                    }, draw: function (e) {
                        var t = this;
                        t.clear(), a.isNullOrUndef(e) && (e = 1), t.transition(e), t.width <= 0 || t.height <= 0 || !1 !== u.notify(t, "beforeDraw", [e]) && (a.each(t.boxes, function (e) {
                            e.draw(t.chartArea)
                        }, t), t.scale && t.scale.draw(), t.drawDatasets(e), t._drawTooltip(e), u.notify(t, "afterDraw", [e]))
                    }, transition: function (e) {
                        for (var t = 0, n = (this.data.datasets || []).length; t < n; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                        this.tooltip.transition(e)
                    }, drawDatasets: function (e) {
                        var t = this;
                        if (!1 !== u.notify(t, "beforeDatasetsDraw", [e])) {
                            for (var n = (t.data.datasets || []).length - 1; n >= 0; --n) t.isDatasetVisible(n) && t.drawDataset(n, e);
                            u.notify(t, "afterDatasetsDraw", [e])
                        }
                    }, drawDataset: function (e, t) {
                        var n = this.getDatasetMeta(e), i = {meta: n, index: e, easingValue: t};
                        !1 !== u.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(t), u.notify(this, "afterDatasetDraw", [i]))
                    }, _drawTooltip: function (e) {
                        var t = this.tooltip, n = {tooltip: t, easingValue: e};
                        !1 !== u.notify(this, "beforeTooltipDraw", [n]) && (t.draw(), u.notify(this, "afterTooltipDraw", [n]))
                    }, getElementAtEvent: function (e) {
                        return s.modes.single(this, e)
                    }, getElementsAtEvent: function (e) {
                        return s.modes.label(this, e, {intersect: !0})
                    }, getElementsAtXAxis: function (e) {
                        return s.modes["x-axis"](this, e, {intersect: !0})
                    }, getElementsAtEventForMode: function (e, t, n) {
                        var i = s.modes[t];
                        return "function" == typeof i ? i(this, e, n) : []
                    }, getDatasetAtEvent: function (e) {
                        return s.modes.dataset(this, e, {intersect: !0})
                    }, getDatasetMeta: function (e) {
                        var t = this.data.datasets[e];
                        t._meta || (t._meta = {});
                        var n = t._meta[this.id];
                        return n || (n = t._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), n
                    }, getVisibleDatasetCount: function () {
                        for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++;
                        return e
                    }, isDatasetVisible: function (e) {
                        var t = this.getDatasetMeta(e);
                        return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
                    }, generateLegend: function () {
                        return this.options.legendCallback(this)
                    }, destroyDatasetMeta: function (e) {
                        var t = this.id, n = this.data.datasets[e], i = n._meta && n._meta[t];
                        i && (i.controller.destroy(), delete n._meta[t])
                    }, destroy: function () {
                        var t, n, i = this, o = i.canvas;
                        for (i.stop(), t = 0, n = i.data.datasets.length; t < n; ++t) i.destroyDatasetMeta(t);
                        o && (i.unbindEvents(), a.canvas.clear(i), c.releaseContext(i.ctx), i.canvas = null, i.ctx = null), u.notify(i, "destroy"), delete e.instances[i.id]
                    }, toBase64Image: function () {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    }, initToolTip: function () {
                        var e = this;
                        e.tooltip = new h({
                            _chart: e,
                            _chartInstance: e,
                            _data: e.data,
                            _options: e.options.tooltips
                        }, e)
                    }, bindEvents: function () {
                        var e = this, t = e._listeners = {}, n = function () {
                            e.eventHandler.apply(e, arguments)
                        };
                        a.each(e.options.events, function (i) {
                            c.addEventListener(e, i, n), t[i] = n
                        }), e.options.responsive && (n = function () {
                            e.resize()
                        }, c.addEventListener(e, "resize", n), t.resize = n)
                    }, unbindEvents: function () {
                        var e = this, t = e._listeners;
                        t && (delete e._listeners, a.each(t, function (t, n) {
                            c.removeEventListener(e, n, t)
                        }))
                    }, updateHoverStyle: function (e, t, n) {
                        var i, o, r, a = n ? "setHoverStyle" : "removeHoverStyle";
                        for (o = 0, r = e.length; o < r; ++o) (i = e[o]) && this.getDatasetMeta(i._datasetIndex).controller[a](i)
                    }, eventHandler: function (e) {
                        var t = this, n = t.tooltip;
                        if (!1 !== u.notify(t, "beforeEvent", [e])) {
                            t._bufferedRender = !0, t._bufferedRequest = null;
                            var i = t.handleEvent(e);
                            n && (i = n._start ? n.handleEvent(e) : i | n.handleEvent(e)), u.notify(t, "afterEvent", [e]);
                            var o = t._bufferedRequest;
                            return o ? t.render(o) : i && !t.animating && (t.stop(), t.render({
                                duration: t.options.hover.animationDuration,
                                lazy: !0
                            })), t._bufferedRender = !1, t._bufferedRequest = null, t
                        }
                    }, handleEvent: function (e) {
                        var t, n = this, i = n.options || {}, o = i.hover;
                        return n.lastActive = n.lastActive || [], "mouseout" === e.type ? n.active = [] : n.active = n.getElementsAtEventForMode(e, o.mode, o), a.callback(i.onHover || i.hover.onHover, [e.native, n.active], n), "mouseup" !== e.type && "click" !== e.type || i.onClick && i.onClick.call(n, e.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, o.mode, !1), n.active.length && o.mode && n.updateHoverStyle(n.active, o.mode, !0), t = !a.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, t
                    }
                }), e.Controller = e
            }
        }, {22: 22, 23: 23, 26: 26, 29: 29, 31: 31, 32: 32, 34: 34, 36: 36, 46: 46, 49: 49}], 25: [function (e, t, n) {
            "use strict";
            var i = e(46);
            t.exports = function (e) {
                var t = ["push", "pop", "shift", "splice", "unshift"];

                function n(e, n) {
                    var i = e._chartjs;
                    if (i) {
                        var o = i.listeners, r = o.indexOf(n);
                        -1 !== r && o.splice(r, 1), o.length > 0 || (t.forEach(function (t) {
                            delete e[t]
                        }), delete e._chartjs)
                    }
                }

                e.DatasetController = function (e, t) {
                    this.initialize(e, t)
                }, i.extend(e.DatasetController.prototype, {
                    datasetElementType: null, dataElementType: null, initialize: function (e, t) {
                        this.chart = e, this.index = t, this.linkScales(), this.addElements()
                    }, updateIndex: function (e) {
                        this.index = e
                    }, linkScales: function () {
                        var e = this, t = e.getMeta(), n = e.getDataset();
                        null !== t.xAxisID && t.xAxisID in e.chart.scales || (t.xAxisID = n.xAxisID || e.chart.options.scales.xAxes[0].id), null !== t.yAxisID && t.yAxisID in e.chart.scales || (t.yAxisID = n.yAxisID || e.chart.options.scales.yAxes[0].id)
                    }, getDataset: function () {
                        return this.chart.data.datasets[this.index]
                    }, getMeta: function () {
                        return this.chart.getDatasetMeta(this.index)
                    }, getScaleForId: function (e) {
                        return this.chart.scales[e]
                    }, reset: function () {
                        this.update(!0)
                    }, destroy: function () {
                        this._data && n(this._data, this)
                    }, createMetaDataset: function () {
                        var e = this.datasetElementType;
                        return e && new e({_chart: this.chart, _datasetIndex: this.index})
                    }, createMetaData: function (e) {
                        var t = this.dataElementType;
                        return t && new t({_chart: this.chart, _datasetIndex: this.index, _index: e})
                    }, addElements: function () {
                        var e, t, n = this.getMeta(), i = this.getDataset().data || [], o = n.data;
                        for (e = 0, t = i.length; e < t; ++e) o[e] = o[e] || this.createMetaData(e);
                        n.dataset = n.dataset || this.createMetaDataset()
                    }, addElementAndReset: function (e) {
                        var t = this.createMetaData(e);
                        this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
                    }, buildOrUpdateElements: function () {
                        var e, o, r = this, a = r.getDataset(), s = a.data || (a.data = []);
                        r._data !== s && (r._data && n(r._data, r), o = r, (e = s)._chartjs ? e._chartjs.listeners.push(o) : (Object.defineProperty(e, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {listeners: [o]}
                        }), t.forEach(function (t) {
                            var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1), o = e[t];
                            Object.defineProperty(e, t, {
                                configurable: !0, enumerable: !1, value: function () {
                                    var t = Array.prototype.slice.call(arguments), r = o.apply(this, t);
                                    return i.each(e._chartjs.listeners, function (e) {
                                        "function" == typeof e[n] && e[n].apply(e, t)
                                    }), r
                                }
                            })
                        })), r._data = s), r.resyncElements()
                    }, update: i.noop, transition: function (e) {
                        for (var t = this.getMeta(), n = t.data || [], i = n.length, o = 0; o < i; ++o) n[o].transition(e);
                        t.dataset && t.dataset.transition(e)
                    }, draw: function () {
                        var e = this.getMeta(), t = e.data || [], n = t.length, i = 0;
                        for (e.dataset && e.dataset.draw(); i < n; ++i) t[i].draw()
                    }, removeHoverStyle: function (e) {
                        i.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle
                    }, setHoverStyle: function (e) {
                        var t = this.chart.data.datasets[e._datasetIndex], n = e._index, o = e.custom || {},
                            r = i.valueAtIndexOrDefault, a = i.getHoverColor, s = e._model;
                        e.$previousStyle = {
                            backgroundColor: s.backgroundColor,
                            borderColor: s.borderColor,
                            borderWidth: s.borderWidth
                        }, s.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : r(t.hoverBackgroundColor, n, a(s.backgroundColor)), s.borderColor = o.hoverBorderColor ? o.hoverBorderColor : r(t.hoverBorderColor, n, a(s.borderColor)), s.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : r(t.hoverBorderWidth, n, s.borderWidth)
                    }, resyncElements: function () {
                        var e = this.getMeta(), t = this.getDataset().data, n = e.data.length, i = t.length;
                        i < n ? e.data.splice(i, n - i) : i > n && this.insertElements(n, i - n)
                    }, insertElements: function (e, t) {
                        for (var n = 0; n < t; ++n) this.addElementAndReset(e + n)
                    }, onDataPush: function () {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    }, onDataPop: function () {
                        this.getMeta().data.pop()
                    }, onDataShift: function () {
                        this.getMeta().data.shift()
                    }, onDataSplice: function (e, t) {
                        this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
                    }, onDataUnshift: function () {
                        this.insertElements(0, arguments.length)
                    }
                }), e.DatasetController.extend = i.inherits
            }
        }, {46: 46}], 26: [function (e, t, n) {
            "use strict";
            var i = e(46);
            t.exports = {
                _set: function (e, t) {
                    return i.merge(this[e] || (this[e] = {}), t)
                }
            }
        }, {46: 46}], 27: [function (e, t, n) {
            "use strict";
            var i = e(3), o = e(46);
            var r = function (e) {
                o.extend(this, e), this.initialize.apply(this, arguments)
            };
            o.extend(r.prototype, {
                initialize: function () {
                    this.hidden = !1
                }, pivot: function () {
                    var e = this;
                    return e._view || (e._view = o.clone(e._model)), e._start = {}, e
                }, transition: function (e) {
                    var t = this, n = t._model, o = t._start, r = t._view;
                    return n && 1 !== e ? (r || (r = t._view = {}), o || (o = t._start = {}), function (e, t, n, o) {
                        var r, a, s, l, c, u, d, h, f, p = Object.keys(n);
                        for (r = 0, a = p.length; r < a; ++r) if (u = n[s = p[r]], t.hasOwnProperty(s) || (t[s] = u), (l = t[s]) !== u && "_" !== s[0]) {
                            if (e.hasOwnProperty(s) || (e[s] = l), (d = typeof u) == typeof (c = e[s])) if ("string" === d) {
                                if ((h = i(c)).valid && (f = i(u)).valid) {
                                    t[s] = f.mix(h, o).rgbString();
                                    continue
                                }
                            } else if ("number" === d && isFinite(c) && isFinite(u)) {
                                t[s] = c + (u - c) * o;
                                continue
                            }
                            t[s] = u
                        }
                    }(o, r, n, e), t) : (t._view = n, t._start = null, t)
                }, tooltipPosition: function () {
                    return {x: this._model.x, y: this._model.y}
                }, hasValue: function () {
                    return o.isNumber(this._model.x) && o.isNumber(this._model.y)
                }
            }), r.extend = o.inherits, t.exports = r
        }, {3: 3, 46: 46}], 28: [function (e, t, n) {
            "use strict";
            var i = e(3), o = e(26), r = e(46), a = e(34);
            t.exports = function () {
                function e(e, t, n) {
                    var i;
                    return "string" == typeof e ? (i = parseInt(e, 10), -1 !== e.indexOf("%") && (i = i / 100 * t.parentNode[n])) : i = e, i
                }

                function t(e) {
                    return void 0 !== e && null !== e && "none" !== e
                }

                function n(n, i, o) {
                    var a = document.defaultView, s = r._getParentNode(n), l = a.getComputedStyle(n)[i],
                        c = a.getComputedStyle(s)[i], u = t(l), d = t(c), h = Number.POSITIVE_INFINITY;
                    return u || d ? Math.min(u ? e(l, n, o) : h, d ? e(c, s, o) : h) : "none"
                }

                r.configMerge = function () {
                    return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (e, t, n, i) {
                            var o = t[e] || {}, s = n[e];
                            "scales" === e ? t[e] = r.scaleMerge(o, s) : "scale" === e ? t[e] = r.merge(o, [a.getScaleDefaults(s.type), s]) : r._merger(e, t, n, i)
                        }
                    })
                }, r.scaleMerge = function () {
                    return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (e, t, n, i) {
                            if ("xAxes" === e || "yAxes" === e) {
                                var o, s, l, c = n[e].length;
                                for (t[e] || (t[e] = []), o = 0; o < c; ++o) l = n[e][o], s = r.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), o >= t[e].length && t[e].push({}), !t[e][o].type || l.type && l.type !== t[e][o].type ? r.merge(t[e][o], [a.getScaleDefaults(s), l]) : r.merge(t[e][o], l)
                            } else r._merger(e, t, n, i)
                        }
                    })
                }, r.where = function (e, t) {
                    if (r.isArray(e) && Array.prototype.filter) return e.filter(t);
                    var n = [];
                    return r.each(e, function (e) {
                        t(e) && n.push(e)
                    }), n
                }, r.findIndex = Array.prototype.findIndex ? function (e, t, n) {
                    return e.findIndex(t, n)
                } : function (e, t, n) {
                    n = void 0 === n ? e : n;
                    for (var i = 0, o = e.length; i < o; ++i) if (t.call(n, e[i], i, e)) return i;
                    return -1
                }, r.findNextWhere = function (e, t, n) {
                    r.isNullOrUndef(n) && (n = -1);
                    for (var i = n + 1; i < e.length; i++) {
                        var o = e[i];
                        if (t(o)) return o
                    }
                }, r.findPreviousWhere = function (e, t, n) {
                    r.isNullOrUndef(n) && (n = e.length);
                    for (var i = n - 1; i >= 0; i--) {
                        var o = e[i];
                        if (t(o)) return o
                    }
                }, r.isNumber = function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                }, r.almostEquals = function (e, t, n) {
                    return Math.abs(e - t) < n
                }, r.almostWhole = function (e, t) {
                    var n = Math.round(e);
                    return n - t < e && n + t > e
                }, r.max = function (e) {
                    return e.reduce(function (e, t) {
                        return isNaN(t) ? e : Math.max(e, t)
                    }, Number.NEGATIVE_INFINITY)
                }, r.min = function (e) {
                    return e.reduce(function (e, t) {
                        return isNaN(t) ? e : Math.min(e, t)
                    }, Number.POSITIVE_INFINITY)
                }, r.sign = Math.sign ? function (e) {
                    return Math.sign(e)
                } : function (e) {
                    return 0 === (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
                }, r.log10 = Math.log10 ? function (e) {
                    return Math.log10(e)
                } : function (e) {
                    var t = Math.log(e) * Math.LOG10E, n = Math.round(t);
                    return e === Math.pow(10, n) ? n : t
                }, r.toRadians = function (e) {
                    return e * (Math.PI / 180)
                }, r.toDegrees = function (e) {
                    return e * (180 / Math.PI)
                }, r.getAngleFromPoint = function (e, t) {
                    var n = t.x - e.x, i = t.y - e.y, o = Math.sqrt(n * n + i * i), r = Math.atan2(i, n);
                    return r < -.5 * Math.PI && (r += 2 * Math.PI), {angle: r, distance: o}
                }, r.distanceBetweenPoints = function (e, t) {
                    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                }, r.aliasPixel = function (e) {
                    return e % 2 == 0 ? 0 : .5
                }, r.splineCurve = function (e, t, n, i) {
                    var o = e.skip ? t : e, r = t, a = n.skip ? t : n,
                        s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                        l = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)), c = s / (s + l),
                        u = l / (s + l), d = i * (c = isNaN(c) ? 0 : c), h = i * (u = isNaN(u) ? 0 : u);
                    return {
                        previous: {x: r.x - d * (a.x - o.x), y: r.y - d * (a.y - o.y)},
                        next: {x: r.x + h * (a.x - o.x), y: r.y + h * (a.y - o.y)}
                    }
                }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function (e) {
                    var t, n, i, o, a, s, l, c, u, d = (e || []).map(function (e) {
                        return {model: e._model, deltaK: 0, mK: 0}
                    }), h = d.length;
                    for (t = 0; t < h; ++t) if (!(i = d[t]).model.skip) {
                        if (n = t > 0 ? d[t - 1] : null, (o = t < h - 1 ? d[t + 1] : null) && !o.model.skip) {
                            var f = o.model.x - i.model.x;
                            i.deltaK = 0 !== f ? (o.model.y - i.model.y) / f : 0
                        }
                        !n || n.model.skip ? i.mK = i.deltaK : !o || o.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                    }
                    for (t = 0; t < h - 1; ++t) i = d[t], o = d[t + 1], i.model.skip || o.model.skip || (r.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = o.mK = 0 : (a = i.mK / i.deltaK, s = o.mK / i.deltaK, (c = Math.pow(a, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(c), i.mK = a * l * i.deltaK, o.mK = s * l * i.deltaK)));
                    for (t = 0; t < h; ++t) (i = d[t]).model.skip || (n = t > 0 ? d[t - 1] : null, o = t < h - 1 ? d[t + 1] : null, n && !n.model.skip && (u = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - u, i.model.controlPointPreviousY = i.model.y - u * i.mK), o && !o.model.skip && (u = (o.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + u, i.model.controlPointNextY = i.model.y + u * i.mK))
                }, r.nextItem = function (e, t, n) {
                    return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
                }, r.previousItem = function (e, t, n) {
                    return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
                }, r.niceNum = function (e, t) {
                    var n = Math.floor(r.log10(e)), i = e / Math.pow(10, n);
                    return (t ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                }, r.requestAnimFrame = "undefined" == typeof window ? function (e) {
                    e()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                    return window.setTimeout(e, 1e3 / 60)
                }, r.getRelativePosition = function (e, t) {
                    var n, i, o = e.originalEvent || e, a = e.target || e.srcElement, s = a.getBoundingClientRect(),
                        l = o.touches;
                    l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = o.clientX, i = o.clientY);
                    var c = parseFloat(r.getStyle(a, "padding-left")), u = parseFloat(r.getStyle(a, "padding-top")),
                        d = parseFloat(r.getStyle(a, "padding-right")), h = parseFloat(r.getStyle(a, "padding-bottom")),
                        f = s.right - s.left - c - d, p = s.bottom - s.top - u - h;
                    return {
                        x: n = Math.round((n - s.left - c) / f * a.width / t.currentDevicePixelRatio),
                        y: i = Math.round((i - s.top - u) / p * a.height / t.currentDevicePixelRatio)
                    }
                }, r.getConstraintWidth = function (e) {
                    return n(e, "max-width", "clientWidth")
                }, r.getConstraintHeight = function (e) {
                    return n(e, "max-height", "clientHeight")
                }, r._calculatePadding = function (e, t, n) {
                    return (t = r.getStyle(e, t)).indexOf("%") > -1 ? n / parseInt(t, 10) : parseInt(t, 10)
                }, r._getParentNode = function (e) {
                    var t = e.parentNode;
                    return t && t.host && (t = t.host), t
                }, r.getMaximumWidth = function (e) {
                    var t = r._getParentNode(e);
                    if (!t) return e.clientWidth;
                    var n = t.clientWidth,
                        i = n - r._calculatePadding(t, "padding-left", n) - r._calculatePadding(t, "padding-right", n),
                        o = r.getConstraintWidth(e);
                    return isNaN(o) ? i : Math.min(i, o)
                }, r.getMaximumHeight = function (e) {
                    var t = r._getParentNode(e);
                    if (!t) return e.clientHeight;
                    var n = t.clientHeight,
                        i = n - r._calculatePadding(t, "padding-top", n) - r._calculatePadding(t, "padding-bottom", n),
                        o = r.getConstraintHeight(e);
                    return isNaN(o) ? i : Math.min(i, o)
                }, r.getStyle = function (e, t) {
                    return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
                }, r.retinaScale = function (e, t) {
                    var n = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1;
                    if (1 !== n) {
                        var i = e.canvas, o = e.height, r = e.width;
                        i.height = o * n, i.width = r * n, e.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = o + "px", i.style.width = r + "px")
                    }
                }, r.fontString = function (e, t, n) {
                    return t + " " + e + "px " + n
                }, r.longestText = function (e, t, n, i) {
                    var o = (i = i || {}).data = i.data || {}, a = i.garbageCollect = i.garbageCollect || [];
                    i.font !== t && (o = i.data = {}, a = i.garbageCollect = [], i.font = t), e.font = t;
                    var s = 0;
                    r.each(n, function (t) {
                        void 0 !== t && null !== t && !0 !== r.isArray(t) ? s = r.measureText(e, o, a, s, t) : r.isArray(t) && r.each(t, function (t) {
                            void 0 === t || null === t || r.isArray(t) || (s = r.measureText(e, o, a, s, t))
                        })
                    });
                    var l = a.length / 2;
                    if (l > n.length) {
                        for (var c = 0; c < l; c++) delete o[a[c]];
                        a.splice(0, l)
                    }
                    return s
                }, r.measureText = function (e, t, n, i, o) {
                    var r = t[o];
                    return r || (r = t[o] = e.measureText(o).width, n.push(o)), r > i && (i = r), i
                }, r.numberOfLabelLines = function (e) {
                    var t = 1;
                    return r.each(e, function (e) {
                        r.isArray(e) && e.length > t && (t = e.length)
                    }), t
                }, r.color = i ? function (e) {
                    return e instanceof CanvasGradient && (e = o.global.defaultColor), i(e)
                } : function (e) {
                    return console.error("Color.js not found!"), e
                }, r.getHoverColor = function (e) {
                    return e instanceof CanvasPattern ? e : r.color(e).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {26: 26, 3: 3, 34: 34, 46: 46}], 29: [function (e, t, n) {
            "use strict";
            var i = e(46);

            function o(e, t) {
                return e.native ? {x: e.x, y: e.y} : i.getRelativePosition(e, t)
            }

            function r(e, t) {
                var n, i, o, r, a;
                for (i = 0, r = e.data.datasets.length; i < r; ++i) if (e.isDatasetVisible(i)) for (o = 0, a = (n = e.getDatasetMeta(i)).data.length; o < a; ++o) {
                    var s = n.data[o];
                    s._view.skip || t(s)
                }
            }

            function a(e, t) {
                var n = [];
                return r(e, function (e) {
                    e.inRange(t.x, t.y) && n.push(e)
                }), n
            }

            function s(e, t, n, i) {
                var o = Number.POSITIVE_INFINITY, a = [];
                return r(e, function (e) {
                    if (!n || e.inRange(t.x, t.y)) {
                        var r = e.getCenterPoint(), s = i(t, r);
                        s < o ? (a = [e], o = s) : s === o && a.push(e)
                    }
                }), a
            }

            function l(e) {
                var t = -1 !== e.indexOf("x"), n = -1 !== e.indexOf("y");
                return function (e, i) {
                    var o = t ? Math.abs(e.x - i.x) : 0, r = n ? Math.abs(e.y - i.y) : 0;
                    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2))
                }
            }

            function c(e, t, n) {
                var i = o(t, e);
                n.axis = n.axis || "x";
                var r = l(n.axis), c = n.intersect ? a(e, i) : s(e, i, !1, r), u = [];
                return c.length ? (e.data.datasets.forEach(function (t, n) {
                    if (e.isDatasetVisible(n)) {
                        var i = e.getDatasetMeta(n).data[c[0]._index];
                        i && !i._view.skip && u.push(i)
                    }
                }), u) : []
            }

            t.exports = {
                modes: {
                    single: function (e, t) {
                        var n = o(t, e), i = [];
                        return r(e, function (e) {
                            if (e.inRange(n.x, n.y)) return i.push(e), i
                        }), i.slice(0, 1)
                    }, label: c, index: c, dataset: function (e, t, n) {
                        var i = o(t, e);
                        n.axis = n.axis || "xy";
                        var r = l(n.axis), c = n.intersect ? a(e, i) : s(e, i, !1, r);
                        return c.length > 0 && (c = e.getDatasetMeta(c[0]._datasetIndex).data), c
                    }, "x-axis": function (e, t) {
                        return c(e, t, {intersect: !1})
                    }, point: function (e, t) {
                        return a(e, o(t, e))
                    }, nearest: function (e, t, n) {
                        var i = o(t, e);
                        n.axis = n.axis || "xy";
                        var r = l(n.axis), a = s(e, i, n.intersect, r);
                        return a.length > 1 && a.sort(function (e, t) {
                            var n = e.getArea() - t.getArea();
                            return 0 === n && (n = e._datasetIndex - t._datasetIndex), n
                        }), a.slice(0, 1)
                    }, x: function (e, t, n) {
                        var i = o(t, e), a = [], s = !1;
                        return r(e, function (e) {
                            e.inXRange(i.x) && a.push(e), e.inRange(i.x, i.y) && (s = !0)
                        }), n.intersect && !s && (a = []), a
                    }, y: function (e, t, n) {
                        var i = o(t, e), a = [], s = !1;
                        return r(e, function (e) {
                            e.inYRange(i.y) && a.push(e), e.inRange(i.x, i.y) && (s = !0)
                        }), n.intersect && !s && (a = []), a
                    }
                }
            }
        }, {46: 46}], 30: [function (e, t, n) {
            "use strict";
            e(26)._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {onHover: null, mode: "nearest", intersect: !0, animationDuration: 400},
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {padding: {top: 0, right: 0, bottom: 0, left: 0}}
            }), t.exports = function () {
                var e = function (e, t) {
                    return this.construct(e, t), this
                };
                return e.Chart = e, e
            }
        }, {26: 26}], 31: [function (e, t, n) {
            "use strict";
            var i = e(46);

            function o(e, t) {
                return i.where(e, function (e) {
                    return e.position === t
                })
            }

            function r(e, t) {
                e.forEach(function (e, t) {
                    return e._tmpIndex_ = t, e
                }), e.sort(function (e, n) {
                    var i = t ? n : e, o = t ? e : n;
                    return i.weight === o.weight ? i._tmpIndex_ - o._tmpIndex_ : i.weight - o.weight
                }), e.forEach(function (e) {
                    delete e._tmpIndex_
                })
            }

            t.exports = {
                defaults: {}, addBox: function (e, t) {
                    e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t)
                }, removeBox: function (e, t) {
                    var n = e.boxes ? e.boxes.indexOf(t) : -1;
                    -1 !== n && e.boxes.splice(n, 1)
                }, configure: function (e, t, n) {
                    for (var i, o = ["fullWidth", "position", "weight"], r = o.length, a = 0; a < r; ++a) i = o[a], n.hasOwnProperty(i) && (t[i] = n[i])
                }, update: function (e, t, n) {
                    if (e) {
                        var a = e.options.layout || {}, s = i.options.toPadding(a.padding), l = s.left, c = s.right,
                            u = s.top, d = s.bottom, h = o(e.boxes, "left"), f = o(e.boxes, "right"),
                            p = o(e.boxes, "top"), g = o(e.boxes, "bottom"), m = o(e.boxes, "chartArea");
                        r(h, !0), r(f, !1), r(p, !0), r(g, !1);
                        var v = t - l - c, y = n - u - d, b = y / 2, x = (t - v / 2) / (h.length + f.length),
                            w = (n - b) / (p.length + g.length), k = v, C = y, S = [];
                        i.each(h.concat(f, p, g), function (e) {
                            var t, n = e.isHorizontal();
                            n ? (t = e.update(e.fullWidth ? v : k, w), C -= t.height) : (t = e.update(x, C), k -= t.width), S.push({
                                horizontal: n,
                                minSize: t,
                                box: e
                            })
                        });
                        var _ = 0, T = 0, E = 0, A = 0;
                        i.each(p.concat(g), function (e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                _ = Math.max(_, t.left), T = Math.max(T, t.right)
                            }
                        }), i.each(h.concat(f), function (e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                E = Math.max(E, t.top), A = Math.max(A, t.bottom)
                            }
                        });
                        var D = l, I = c, P = u, M = d;
                        i.each(h.concat(f), $), i.each(h, function (e) {
                            D += e.width
                        }), i.each(f, function (e) {
                            I += e.width
                        }), i.each(p.concat(g), $), i.each(p, function (e) {
                            P += e.height
                        }), i.each(g, function (e) {
                            M += e.height
                        }), i.each(h.concat(f), function (e) {
                            var t = i.findNextWhere(S, function (t) {
                                return t.box === e
                            }), n = {left: 0, right: 0, top: P, bottom: M};
                            t && e.update(t.minSize.width, C, n)
                        }), D = l, I = c, P = u, M = d, i.each(h, function (e) {
                            D += e.width
                        }), i.each(f, function (e) {
                            I += e.width
                        }), i.each(p, function (e) {
                            P += e.height
                        }), i.each(g, function (e) {
                            M += e.height
                        });
                        var O = Math.max(_ - D, 0);
                        D += O, I += Math.max(T - I, 0);
                        var L = Math.max(E - P, 0);
                        P += L, M += Math.max(A - M, 0);
                        var N = n - P - M, F = t - D - I;
                        F === k && N === C || (i.each(h, function (e) {
                            e.height = N
                        }), i.each(f, function (e) {
                            e.height = N
                        }), i.each(p, function (e) {
                            e.fullWidth || (e.width = F)
                        }), i.each(g, function (e) {
                            e.fullWidth || (e.width = F)
                        }), C = N, k = F);
                        var R = l + O, j = u + L;
                        i.each(h.concat(p), H), R += k, j += C, i.each(f, H), i.each(g, H), e.chartArea = {
                            left: D,
                            top: P,
                            right: D + k,
                            bottom: P + C
                        }, i.each(m, function (t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(k, C)
                        })
                    }

                    function $(e) {
                        var t = i.findNextWhere(S, function (t) {
                            return t.box === e
                        });
                        if (t) if (e.isHorizontal()) {
                            var n = {left: Math.max(D, _), right: Math.max(I, T), top: 0, bottom: 0};
                            e.update(e.fullWidth ? v : k, y / 2, n)
                        } else e.update(t.minSize.width, C)
                    }

                    function H(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? l : D, e.right = e.fullWidth ? t - c : D + k, e.top = j, e.bottom = j + e.height, j = e.bottom) : (e.left = R, e.right = R + e.width, e.top = P, e.bottom = P + C, R = e.right)
                    }
                }
            }
        }, {46: 46}], 32: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(46);
            i._set("global", {plugins: {}}), t.exports = {
                _plugins: [], _cacheId: 0, register: function (e) {
                    var t = this._plugins;
                    [].concat(e).forEach(function (e) {
                        -1 === t.indexOf(e) && t.push(e)
                    }), this._cacheId++
                }, unregister: function (e) {
                    var t = this._plugins;
                    [].concat(e).forEach(function (e) {
                        var n = t.indexOf(e);
                        -1 !== n && t.splice(n, 1)
                    }), this._cacheId++
                }, clear: function () {
                    this._plugins = [], this._cacheId++
                }, count: function () {
                    return this._plugins.length
                }, getAll: function () {
                    return this._plugins
                }, notify: function (e, t, n) {
                    var i, o, r, a, s, l = this.descriptors(e), c = l.length;
                    for (i = 0; i < c; ++i) if ("function" == typeof (s = (r = (o = l[i]).plugin)[t]) && ((a = [e].concat(n || [])).push(o.options), !1 === s.apply(r, a))) return !1;
                    return !0
                }, descriptors: function (e) {
                    var t = e.$plugins || (e.$plugins = {});
                    if (t.id === this._cacheId) return t.descriptors;
                    var n = [], r = [], a = e && e.config || {}, s = a.options && a.options.plugins || {};
                    return this._plugins.concat(a.plugins || []).forEach(function (e) {
                        if (-1 === n.indexOf(e)) {
                            var t = e.id, a = s[t];
                            !1 !== a && (!0 === a && (a = o.clone(i.global.plugins[t])), n.push(e), r.push({
                                plugin: e,
                                options: a || {}
                            }))
                        }
                    }), t.descriptors = r, t.id = this._cacheId, r
                }, _invalidate: function (e) {
                    delete e.$plugins
                }
            }
        }, {26: 26, 46: 46}], 33: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(27), r = e(46), a = e(35);

            function s(e) {
                var t, n, i = [];
                for (t = 0, n = e.length; t < n; ++t) i.push(e[t].label);
                return i
            }

            function l(e, t, n) {
                var i = e.getPixelForTick(t);
                return n && (i -= 0 === t ? (e.getPixelForTick(1) - i) / 2 : (i - e.getPixelForTick(t - 1)) / 2), i
            }

            function c(e, t, n) {
                return r.isArray(t) ? r.longestText(e, n, t) : e.measureText(t).width
            }

            function u(e) {
                var t = r.valueOrDefault, n = i.global, o = t(e.fontSize, n.defaultFontSize),
                    a = t(e.fontStyle, n.defaultFontStyle), s = t(e.fontFamily, n.defaultFontFamily);
                return {size: o, style: a, family: s, font: r.fontString(o, a, s)}
            }

            function d(e) {
                return r.options.toLineHeight(r.valueOrDefault(e.lineHeight, 1.2), r.valueOrDefault(e.fontSize, i.global.defaultFontSize))
            }

            i._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {display: !1, labelString: "", lineHeight: 1.2, padding: {top: 4, bottom: 4}},
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: a.formatters.values,
                    minor: {},
                    major: {}
                }
            }), t.exports = o.extend({
                getPadding: function () {
                    return {
                        left: this.paddingLeft || 0,
                        top: this.paddingTop || 0,
                        right: this.paddingRight || 0,
                        bottom: this.paddingBottom || 0
                    }
                },
                getTicks: function () {
                    return this._ticks
                },
                mergeTicksOptions: function () {
                    var e = this.options.ticks;
                    for (var t in!1 === e.minor && (e.minor = {display: !1}), !1 === e.major && (e.major = {display: !1}), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
                },
                beforeUpdate: function () {
                    r.callback(this.options.beforeUpdate, [this])
                },
                update: function (e, t, n) {
                    var i, o, a, s, l, c, u = this;
                    for (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = r.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, n), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), l = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), a = u.convertTicksToLabels(l) || u.ticks, u.afterTickToLabelConversion(), u.ticks = a, i = 0, o = a.length; i < o; ++i) s = a[i], (c = l[i]) ? c.label = s : l.push(c = {
                        label: s,
                        major: !1
                    });
                    return u._ticks = l, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                },
                afterUpdate: function () {
                    r.callback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function () {
                    r.callback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function () {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
                },
                afterSetDimensions: function () {
                    r.callback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function () {
                    r.callback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: r.noop,
                afterDataLimits: function () {
                    r.callback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function () {
                    r.callback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: r.noop,
                afterBuildTicks: function () {
                    r.callback(this.options.afterBuildTicks, [this])
                },
                beforeTickToLabelConversion: function () {
                    r.callback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function () {
                    var e = this.options.ticks;
                    this.ticks = this.ticks.map(e.userCallback || e.callback, this)
                },
                afterTickToLabelConversion: function () {
                    r.callback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function () {
                    r.callback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function () {
                    var e = this, t = e.ctx, n = e.options.ticks, i = s(e._ticks), o = u(n);
                    t.font = o.font;
                    var a = n.minRotation || 0;
                    if (i.length && e.options.display && e.isHorizontal()) for (var l, c = r.longestText(t, o.font, i, e.longestTextCache), d = c, h = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; d > h && a < n.maxRotation;) {
                        var f = r.toRadians(a);
                        if (l = Math.cos(f), Math.sin(f) * c > e.maxHeight) {
                            a--;
                            break
                        }
                        a++, d = l * c
                    }
                    e.labelRotation = a
                },
                afterCalculateTickRotation: function () {
                    r.callback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function () {
                    r.callback(this.options.beforeFit, [this])
                },
                fit: function () {
                    var e = this, t = e.minSize = {width: 0, height: 0}, n = s(e._ticks), i = e.options, o = i.ticks,
                        a = i.scaleLabel, l = i.gridLines, h = i.display, f = e.isHorizontal(), p = u(o),
                        g = i.gridLines.tickMarkLength;
                    if (t.width = f ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : h && l.drawTicks ? g : 0, t.height = f ? h && l.drawTicks ? g : 0 : e.maxHeight, a.display && h) {
                        var m = d(a) + r.options.toPadding(a.padding).height;
                        f ? t.height += m : t.width += m
                    }
                    if (o.display && h) {
                        var v = r.longestText(e.ctx, p.font, n, e.longestTextCache), y = r.numberOfLabelLines(n),
                            b = .5 * p.size, x = e.options.ticks.padding;
                        if (f) {
                            e.longestLabelWidth = v;
                            var w = r.toRadians(e.labelRotation), k = Math.cos(w),
                                C = Math.sin(w) * v + p.size * y + b * (y - 1) + b;
                            t.height = Math.min(e.maxHeight, t.height + C + x), e.ctx.font = p.font;
                            var S = c(e.ctx, n[0], p.font), _ = c(e.ctx, n[n.length - 1], p.font);
                            0 !== e.labelRotation ? (e.paddingLeft = "bottom" === i.position ? k * S + 3 : k * b + 3, e.paddingRight = "bottom" === i.position ? k * b + 3 : k * _ + 3) : (e.paddingLeft = S / 2 + 3, e.paddingRight = _ / 2 + 3)
                        } else o.mirror ? v = 0 : v += x + b, t.width = Math.min(e.maxWidth, t.width + v), e.paddingTop = p.size / 2, e.paddingBottom = p.size / 2
                    }
                    e.handleMargins(), e.width = t.width, e.height = t.height
                },
                handleMargins: function () {
                    var e = this;
                    e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
                },
                afterFit: function () {
                    r.callback(this.options.afterFit, [this])
                },
                isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                isFullWidth: function () {
                    return this.options.fullWidth
                },
                getRightValue: function (e) {
                    if (r.isNullOrUndef(e)) return NaN;
                    if ("number" == typeof e && !isFinite(e)) return NaN;
                    if (e) if (this.isHorizontal()) {
                        if (void 0 !== e.x) return this.getRightValue(e.x)
                    } else if (void 0 !== e.y) return this.getRightValue(e.y);
                    return e
                },
                getLabelForIndex: r.noop,
                getPixelForValue: r.noop,
                getValueForPixel: r.noop,
                getPixelForTick: function (e) {
                    var t = this, n = t.options.offset;
                    if (t.isHorizontal()) {
                        var i = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (n ? 0 : 1), 1),
                            o = i * e + t.paddingLeft;
                        n && (o += i / 2);
                        var r = t.left + Math.round(o);
                        return r += t.isFullWidth() ? t.margins.left : 0
                    }
                    var a = t.height - (t.paddingTop + t.paddingBottom);
                    return t.top + e * (a / (t._ticks.length - 1))
                },
                getPixelForDecimal: function (e) {
                    var t = this;
                    if (t.isHorizontal()) {
                        var n = (t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft,
                            i = t.left + Math.round(n);
                        return i += t.isFullWidth() ? t.margins.left : 0
                    }
                    return t.top + e * t.height
                },
                getBasePixel: function () {
                    return this.getPixelForValue(this.getBaseValue())
                },
                getBaseValue: function () {
                    var e = this.min, t = this.max;
                    return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
                },
                _autoSkip: function (e) {
                    var t, n, i, o, a = this, s = a.isHorizontal(), l = a.options.ticks.minor, c = e.length,
                        u = r.toRadians(a.labelRotation), d = Math.cos(u), h = a.longestLabelWidth * d, f = [];
                    for (l.maxTicksLimit && (o = l.maxTicksLimit), s && (t = !1, (h + l.autoSkipPadding) * c > a.width - (a.paddingLeft + a.paddingRight) && (t = 1 + Math.floor((h + l.autoSkipPadding) * c / (a.width - (a.paddingLeft + a.paddingRight)))), o && c > o && (t = Math.max(t, Math.floor(c / o)))), n = 0; n < c; n++) i = e[n], (t > 1 && n % t > 0 || n % t == 0 && n + t >= c) && n !== c - 1 && delete i.label, f.push(i);
                    return f
                },
                draw: function (e) {
                    var t = this, n = t.options;
                    if (n.display) {
                        var o = t.ctx, a = i.global, s = n.ticks.minor, c = n.ticks.major || s, h = n.gridLines,
                            f = n.scaleLabel, p = 0 !== t.labelRotation, g = t.isHorizontal(),
                            m = s.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                            v = r.valueOrDefault(s.fontColor, a.defaultFontColor), y = u(s),
                            b = r.valueOrDefault(c.fontColor, a.defaultFontColor), x = u(c),
                            w = h.drawTicks ? h.tickMarkLength : 0,
                            k = r.valueOrDefault(f.fontColor, a.defaultFontColor), C = u(f),
                            S = r.options.toPadding(f.padding), _ = r.toRadians(t.labelRotation), T = [],
                            E = t.options.gridLines.lineWidth, A = "right" === n.position ? t.left : t.right - E - w,
                            D = "right" === n.position ? t.left + w : t.right,
                            I = "bottom" === n.position ? t.top + E : t.bottom - w - E,
                            P = "bottom" === n.position ? t.top + E + w : t.bottom + E;
                        if (r.each(m, function (i, o) {
                            if (!r.isNullOrUndef(i.label)) {
                                var c, u, d, f, v, y, b, x, k, C, S, M, O, L, N = i.label;
                                o === t.zeroLineIndex && n.offset === h.offsetGridLines ? (c = h.zeroLineWidth, u = h.zeroLineColor, d = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (c = r.valueAtIndexOrDefault(h.lineWidth, o), u = r.valueAtIndexOrDefault(h.color, o), d = r.valueOrDefault(h.borderDash, a.borderDash), f = r.valueOrDefault(h.borderDashOffset, a.borderDashOffset));
                                var F = "middle", R = "middle", j = s.padding;
                                if (g) {
                                    var $ = w + j;
                                    "bottom" === n.position ? (R = p ? "middle" : "top", F = p ? "right" : "center", L = t.top + $) : (R = p ? "middle" : "bottom", F = p ? "left" : "center", L = t.bottom - $);
                                    var H = l(t, o, h.offsetGridLines && m.length > 1);
                                    H < t.left && (u = "rgba(0,0,0,0)"), H += r.aliasPixel(c), O = t.getPixelForTick(o) + s.labelOffset, v = b = k = S = H, y = I, x = P, C = e.top, M = e.bottom + E
                                } else {
                                    var W, B = "left" === n.position;
                                    s.mirror ? (F = B ? "left" : "right", W = j) : (F = B ? "right" : "left", W = w + j), O = B ? t.right - W : t.left + W;
                                    var V = l(t, o, h.offsetGridLines && m.length > 1);
                                    V < t.top && (u = "rgba(0,0,0,0)"), V += r.aliasPixel(c), L = t.getPixelForTick(o) + s.labelOffset, v = A, b = D, k = e.left, S = e.right + E, y = x = C = M = V
                                }
                                T.push({
                                    tx1: v,
                                    ty1: y,
                                    tx2: b,
                                    ty2: x,
                                    x1: k,
                                    y1: C,
                                    x2: S,
                                    y2: M,
                                    labelX: O,
                                    labelY: L,
                                    glWidth: c,
                                    glColor: u,
                                    glBorderDash: d,
                                    glBorderDashOffset: f,
                                    rotation: -1 * _,
                                    label: N,
                                    major: i.major,
                                    textBaseline: R,
                                    textAlign: F
                                })
                            }
                        }), r.each(T, function (e) {
                            if (h.display && (o.save(), o.lineWidth = e.glWidth, o.strokeStyle = e.glColor, o.setLineDash && (o.setLineDash(e.glBorderDash), o.lineDashOffset = e.glBorderDashOffset), o.beginPath(), h.drawTicks && (o.moveTo(e.tx1, e.ty1), o.lineTo(e.tx2, e.ty2)), h.drawOnChartArea && (o.moveTo(e.x1, e.y1), o.lineTo(e.x2, e.y2)), o.stroke(), o.restore()), s.display) {
                                o.save(), o.translate(e.labelX, e.labelY), o.rotate(e.rotation), o.font = e.major ? x.font : y.font, o.fillStyle = e.major ? b : v, o.textBaseline = e.textBaseline, o.textAlign = e.textAlign;
                                var n = e.label;
                                if (r.isArray(n)) for (var i = n.length, a = 1.5 * y.size, l = t.isHorizontal() ? 0 : -a * (i - 1) / 2, c = 0; c < i; ++c) o.fillText("" + n[c], 0, l), l += a; else o.fillText(n, 0, 0);
                                o.restore()
                            }
                        }), f.display) {
                            var M, O, L = 0, N = d(f) / 2;
                            if (g) M = t.left + (t.right - t.left) / 2, O = "bottom" === n.position ? t.bottom - N - S.bottom : t.top + N + S.top; else {
                                var F = "left" === n.position;
                                M = F ? t.left + N + S.top : t.right - N - S.top, O = t.top + (t.bottom - t.top) / 2, L = F ? -.5 * Math.PI : .5 * Math.PI
                            }
                            o.save(), o.translate(M, O), o.rotate(L), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = k, o.font = C.font, o.fillText(f.labelString, 0, 0), o.restore()
                        }
                        if (h.drawBorder) {
                            o.lineWidth = r.valueAtIndexOrDefault(h.lineWidth, 0), o.strokeStyle = r.valueAtIndexOrDefault(h.color, 0);
                            var R = t.left, j = t.right + E, $ = t.top, H = t.bottom + E, W = r.aliasPixel(o.lineWidth);
                            g ? ($ = H = "top" === n.position ? t.bottom : t.top, $ += W, H += W) : (R = j = "left" === n.position ? t.right : t.left, R += W, j += W), o.beginPath(), o.moveTo(R, $), o.lineTo(j, H), o.stroke()
                        }
                    }
                }
            })
        }, {26: 26, 27: 27, 35: 35, 46: 46}], 34: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(46), r = e(31);
            t.exports = {
                constructors: {}, defaults: {}, registerScaleType: function (e, t, n) {
                    this.constructors[e] = t, this.defaults[e] = o.clone(n)
                }, getScaleConstructor: function (e) {
                    return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
                }, getScaleDefaults: function (e) {
                    return this.defaults.hasOwnProperty(e) ? o.merge({}, [i.scale, this.defaults[e]]) : {}
                }, updateScaleDefaults: function (e, t) {
                    this.defaults.hasOwnProperty(e) && (this.defaults[e] = o.extend(this.defaults[e], t))
                }, addScalesToLayout: function (e) {
                    o.each(e.scales, function (t) {
                        t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, r.addBox(e, t)
                    })
                }
            }
        }, {26: 26, 31: 31, 46: 46}], 35: [function (e, t, n) {
            "use strict";
            var i = e(46);
            t.exports = {
                formatters: {
                    values: function (e) {
                        return i.isArray(e) ? e : "" + e
                    }, linear: function (e, t, n) {
                        var o = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                        Math.abs(o) > 1 && e !== Math.floor(e) && (o = e - Math.floor(e));
                        var r = i.log10(Math.abs(o)), a = "";
                        if (0 !== e) if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                            var s = i.log10(Math.abs(e));
                            a = e.toExponential(Math.floor(s) - Math.floor(r))
                        } else {
                            var l = -1 * Math.floor(r);
                            l = Math.max(Math.min(l, 20), 0), a = e.toFixed(l)
                        } else a = "0";
                        return a
                    }, logarithmic: function (e, t, n) {
                        var o = e / Math.pow(10, Math.floor(i.log10(e)));
                        return 0 === e ? "0" : 1 === o || 2 === o || 5 === o || 0 === t || t === n.length - 1 ? e.toExponential() : ""
                    }
                }
            }
        }, {46: 46}], 36: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(27), r = e(46);
            i._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: r.noop,
                        title: function (e, t) {
                            var n = "", i = t.labels, o = i ? i.length : 0;
                            if (e.length > 0) {
                                var r = e[0];
                                r.xLabel ? n = r.xLabel : o > 0 && r.index < o && (n = i[r.index])
                            }
                            return n
                        },
                        afterTitle: r.noop,
                        beforeBody: r.noop,
                        beforeLabel: r.noop,
                        label: function (e, t) {
                            var n = t.datasets[e.datasetIndex].label || "";
                            return n && (n += ": "), n += e.yLabel
                        },
                        labelColor: function (e, t) {
                            var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
                            return {borderColor: n.borderColor, backgroundColor: n.backgroundColor}
                        },
                        labelTextColor: function () {
                            return this._options.bodyFontColor
                        },
                        afterLabel: r.noop,
                        afterBody: r.noop,
                        beforeFooter: r.noop,
                        footer: r.noop,
                        afterFooter: r.noop
                    }
                }
            });
            var a = {
                average: function (e) {
                    if (!e.length) return !1;
                    var t, n, i = 0, o = 0, r = 0;
                    for (t = 0, n = e.length; t < n; ++t) {
                        var a = e[t];
                        if (a && a.hasValue()) {
                            var s = a.tooltipPosition();
                            i += s.x, o += s.y, ++r
                        }
                    }
                    return {x: Math.round(i / r), y: Math.round(o / r)}
                }, nearest: function (e, t) {
                    var n, i, o, a = t.x, s = t.y, l = Number.POSITIVE_INFINITY;
                    for (n = 0, i = e.length; n < i; ++n) {
                        var c = e[n];
                        if (c && c.hasValue()) {
                            var u = c.getCenterPoint(), d = r.distanceBetweenPoints(t, u);
                            d < l && (l = d, o = c)
                        }
                    }
                    if (o) {
                        var h = o.tooltipPosition();
                        a = h.x, s = h.y
                    }
                    return {x: a, y: s}
                }
            };

            function s(e, t) {
                var n = r.color(e);
                return n.alpha(t * n.alpha()).rgbaString()
            }

            function l(e, t) {
                return t && (r.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
            }

            function c(e) {
                return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e
            }

            function u(e) {
                var t = i.global, n = r.valueOrDefault;
                return {
                    xPadding: e.xPadding,
                    yPadding: e.yPadding,
                    xAlign: e.xAlign,
                    yAlign: e.yAlign,
                    bodyFontColor: e.bodyFontColor,
                    _bodyFontFamily: n(e.bodyFontFamily, t.defaultFontFamily),
                    _bodyFontStyle: n(e.bodyFontStyle, t.defaultFontStyle),
                    _bodyAlign: e.bodyAlign,
                    bodyFontSize: n(e.bodyFontSize, t.defaultFontSize),
                    bodySpacing: e.bodySpacing,
                    titleFontColor: e.titleFontColor,
                    _titleFontFamily: n(e.titleFontFamily, t.defaultFontFamily),
                    _titleFontStyle: n(e.titleFontStyle, t.defaultFontStyle),
                    titleFontSize: n(e.titleFontSize, t.defaultFontSize),
                    _titleAlign: e.titleAlign,
                    titleSpacing: e.titleSpacing,
                    titleMarginBottom: e.titleMarginBottom,
                    footerFontColor: e.footerFontColor,
                    _footerFontFamily: n(e.footerFontFamily, t.defaultFontFamily),
                    _footerFontStyle: n(e.footerFontStyle, t.defaultFontStyle),
                    footerFontSize: n(e.footerFontSize, t.defaultFontSize),
                    _footerAlign: e.footerAlign,
                    footerSpacing: e.footerSpacing,
                    footerMarginTop: e.footerMarginTop,
                    caretSize: e.caretSize,
                    cornerRadius: e.cornerRadius,
                    backgroundColor: e.backgroundColor,
                    opacity: 0,
                    legendColorBackground: e.multiKeyBackground,
                    displayColors: e.displayColors,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth
                }
            }

            function d(e) {
                return l([], c(e))
            }

            (t.exports = o.extend({
                initialize: function () {
                    this._model = u(this._options), this._lastActive = []
                }, getTitle: function () {
                    var e = this._options.callbacks, t = e.beforeTitle.apply(this, arguments),
                        n = e.title.apply(this, arguments), i = e.afterTitle.apply(this, arguments), o = [];
                    return o = l(o = l(o = l(o, c(t)), c(n)), c(i))
                }, getBeforeBody: function () {
                    return d(this._options.callbacks.beforeBody.apply(this, arguments))
                }, getBody: function (e, t) {
                    var n = this, i = n._options.callbacks, o = [];
                    return r.each(e, function (e) {
                        var r = {before: [], lines: [], after: []};
                        l(r.before, c(i.beforeLabel.call(n, e, t))), l(r.lines, i.label.call(n, e, t)), l(r.after, c(i.afterLabel.call(n, e, t))), o.push(r)
                    }), o
                }, getAfterBody: function () {
                    return d(this._options.callbacks.afterBody.apply(this, arguments))
                }, getFooter: function () {
                    var e = this._options.callbacks, t = e.beforeFooter.apply(this, arguments),
                        n = e.footer.apply(this, arguments), i = e.afterFooter.apply(this, arguments), o = [];
                    return o = l(o = l(o = l(o, c(t)), c(n)), c(i))
                }, update: function (e) {
                    var t, n, i, o, s, l, c, d = this, h = d._options, f = d._model, p = d._model = u(h), g = d._active,
                        m = d._data, v = {xAlign: f.xAlign, yAlign: f.yAlign}, y = {x: f.x, y: f.y},
                        b = {width: f.width, height: f.height}, x = {x: f.caretX, y: f.caretY};
                    if (g.length) {
                        p.opacity = 1;
                        var w = [], k = [];
                        x = a[h.position].call(d, g, d._eventPosition);
                        var C = [];
                        for (t = 0, n = g.length; t < n; ++t) C.push((i = g[t], o = void 0, s = void 0, void 0, void 0, o = i._xScale, s = i._yScale || i._scale, l = i._index, c = i._datasetIndex, {
                            xLabel: o ? o.getLabelForIndex(l, c) : "",
                            yLabel: s ? s.getLabelForIndex(l, c) : "",
                            index: l,
                            datasetIndex: c,
                            x: i._model.x,
                            y: i._model.y
                        }));
                        h.filter && (C = C.filter(function (e) {
                            return h.filter(e, m)
                        })), h.itemSort && (C = C.sort(function (e, t) {
                            return h.itemSort(e, t, m)
                        })), r.each(C, function (e) {
                            w.push(h.callbacks.labelColor.call(d, e, d._chart)), k.push(h.callbacks.labelTextColor.call(d, e, d._chart))
                        }), p.title = d.getTitle(C, m), p.beforeBody = d.getBeforeBody(C, m), p.body = d.getBody(C, m), p.afterBody = d.getAfterBody(C, m), p.footer = d.getFooter(C, m), p.x = Math.round(x.x), p.y = Math.round(x.y), p.caretPadding = h.caretPadding, p.labelColors = w, p.labelTextColors = k, p.dataPoints = C, y = function (e, t, n, i) {
                            var o = e.x, r = e.y, a = e.caretSize, s = e.caretPadding, l = e.cornerRadius, c = n.xAlign,
                                u = n.yAlign, d = a + s, h = l + s;
                            return "right" === c ? o -= t.width : "center" === c && ((o -= t.width / 2) + t.width > i.width && (o = i.width - t.width), o < 0 && (o = 0)), "top" === u ? r += d : r -= "bottom" === u ? t.height + d : t.height / 2, "center" === u ? "left" === c ? o += d : "right" === c && (o -= d) : "left" === c ? o -= h : "right" === c && (o += h), {
                                x: o,
                                y: r
                            }
                        }(p, b = function (e, t) {
                            var n = e._chart.ctx, i = 2 * t.yPadding, o = 0, a = t.body, s = a.reduce(function (e, t) {
                                return e + t.before.length + t.lines.length + t.after.length
                            }, 0);
                            s += t.beforeBody.length + t.afterBody.length;
                            var l = t.title.length, c = t.footer.length, u = t.titleFontSize, d = t.bodyFontSize,
                                h = t.footerFontSize;
                            i += l * u, i += l ? (l - 1) * t.titleSpacing : 0, i += l ? t.titleMarginBottom : 0, i += s * d, i += s ? (s - 1) * t.bodySpacing : 0, i += c ? t.footerMarginTop : 0, i += c * h, i += c ? (c - 1) * t.footerSpacing : 0;
                            var f = 0, p = function (e) {
                                o = Math.max(o, n.measureText(e).width + f)
                            };
                            return n.font = r.fontString(u, t._titleFontStyle, t._titleFontFamily), r.each(t.title, p), n.font = r.fontString(d, t._bodyFontStyle, t._bodyFontFamily), r.each(t.beforeBody.concat(t.afterBody), p), f = t.displayColors ? d + 2 : 0, r.each(a, function (e) {
                                r.each(e.before, p), r.each(e.lines, p), r.each(e.after, p)
                            }), f = 0, n.font = r.fontString(h, t._footerFontStyle, t._footerFontFamily), r.each(t.footer, p), {
                                width: o += 2 * t.xPadding,
                                height: i
                            }
                        }(this, p), v = function (e, t) {
                            var n, i, o, r, a, s = e._model, l = e._chart, c = e._chart.chartArea, u = "center",
                                d = "center";
                            s.y < t.height ? d = "top" : s.y > l.height - t.height && (d = "bottom");
                            var h = (c.left + c.right) / 2, f = (c.top + c.bottom) / 2;
                            "center" === d ? (n = function (e) {
                                return e <= h
                            }, i = function (e) {
                                return e > h
                            }) : (n = function (e) {
                                return e <= t.width / 2
                            }, i = function (e) {
                                return e >= l.width - t.width / 2
                            }), o = function (e) {
                                return e + t.width + s.caretSize + s.caretPadding > l.width
                            }, r = function (e) {
                                return e - t.width - s.caretSize - s.caretPadding < 0
                            }, a = function (e) {
                                return e <= f ? "top" : "bottom"
                            }, n(s.x) ? (u = "left", o(s.x) && (u = "center", d = a(s.y))) : i(s.x) && (u = "right", r(s.x) && (u = "center", d = a(s.y)));
                            var p = e._options;
                            return {xAlign: p.xAlign ? p.xAlign : u, yAlign: p.yAlign ? p.yAlign : d}
                        }(this, b), d._chart)
                    } else p.opacity = 0;
                    return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = y.x, p.y = y.y, p.width = b.width, p.height = b.height, p.caretX = x.x, p.caretY = x.y, d._model = p, e && h.custom && h.custom.call(d, p), d
                }, drawCaret: function (e, t) {
                    var n = this._chart.ctx, i = this._view, o = this.getCaretPosition(e, t, i);
                    n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3)
                }, getCaretPosition: function (e, t, n) {
                    var i, o, r, a, s, l, c = n.caretSize, u = n.cornerRadius, d = n.xAlign, h = n.yAlign, f = e.x,
                        p = e.y, g = t.width, m = t.height;
                    if ("center" === h) s = p + m / 2, "left" === d ? (o = (i = f) - c, r = i, a = s + c, l = s - c) : (o = (i = f + g) + c, r = i, a = s - c, l = s + c); else if ("left" === d ? (i = (o = f + u + c) - c, r = o + c) : "right" === d ? (i = (o = f + g - u - c) - c, r = o + c) : (i = (o = n.caretX) - c, r = o + c), "top" === h) s = (a = p) - c, l = a; else {
                        s = (a = p + m) + c, l = a;
                        var v = r;
                        r = i, i = v
                    }
                    return {x1: i, x2: o, x3: r, y1: a, y2: s, y3: l}
                }, drawTitle: function (e, t, n, i) {
                    var o = t.title;
                    if (o.length) {
                        n.textAlign = t._titleAlign, n.textBaseline = "top";
                        var a, l, c = t.titleFontSize, u = t.titleSpacing;
                        for (n.fillStyle = s(t.titleFontColor, i), n.font = r.fontString(c, t._titleFontStyle, t._titleFontFamily), a = 0, l = o.length; a < l; ++a) n.fillText(o[a], e.x, e.y), e.y += c + u, a + 1 === o.length && (e.y += t.titleMarginBottom - u)
                    }
                }, drawBody: function (e, t, n, i) {
                    var o = t.bodyFontSize, a = t.bodySpacing, l = t.body;
                    n.textAlign = t._bodyAlign, n.textBaseline = "top", n.font = r.fontString(o, t._bodyFontStyle, t._bodyFontFamily);
                    var c = 0, u = function (t) {
                        n.fillText(t, e.x + c, e.y), e.y += o + a
                    };
                    n.fillStyle = s(t.bodyFontColor, i), r.each(t.beforeBody, u);
                    var d = t.displayColors;
                    c = d ? o + 2 : 0, r.each(l, function (a, l) {
                        var c = s(t.labelTextColors[l], i);
                        n.fillStyle = c, r.each(a.before, u), r.each(a.lines, function (r) {
                            d && (n.fillStyle = s(t.legendColorBackground, i), n.fillRect(e.x, e.y, o, o), n.lineWidth = 1, n.strokeStyle = s(t.labelColors[l].borderColor, i), n.strokeRect(e.x, e.y, o, o), n.fillStyle = s(t.labelColors[l].backgroundColor, i), n.fillRect(e.x + 1, e.y + 1, o - 2, o - 2), n.fillStyle = c), u(r)
                        }), r.each(a.after, u)
                    }), c = 0, r.each(t.afterBody, u), e.y -= a
                }, drawFooter: function (e, t, n, i) {
                    var o = t.footer;
                    o.length && (e.y += t.footerMarginTop, n.textAlign = t._footerAlign, n.textBaseline = "top", n.fillStyle = s(t.footerFontColor, i), n.font = r.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), r.each(o, function (i) {
                        n.fillText(i, e.x, e.y), e.y += t.footerFontSize + t.footerSpacing
                    }))
                }, drawBackground: function (e, t, n, i, o) {
                    n.fillStyle = s(t.backgroundColor, o), n.strokeStyle = s(t.borderColor, o), n.lineWidth = t.borderWidth;
                    var r = t.xAlign, a = t.yAlign, l = e.x, c = e.y, u = i.width, d = i.height, h = t.cornerRadius;
                    n.beginPath(), n.moveTo(l + h, c), "top" === a && this.drawCaret(e, i), n.lineTo(l + u - h, c), n.quadraticCurveTo(l + u, c, l + u, c + h), "center" === a && "right" === r && this.drawCaret(e, i), n.lineTo(l + u, c + d - h), n.quadraticCurveTo(l + u, c + d, l + u - h, c + d), "bottom" === a && this.drawCaret(e, i), n.lineTo(l + h, c + d), n.quadraticCurveTo(l, c + d, l, c + d - h), "center" === a && "left" === r && this.drawCaret(e, i), n.lineTo(l, c + h), n.quadraticCurveTo(l, c, l + h, c), n.closePath(), n.fill(), t.borderWidth > 0 && n.stroke()
                }, draw: function () {
                    var e = this._chart.ctx, t = this._view;
                    if (0 !== t.opacity) {
                        var n = {width: t.width, height: t.height}, i = {x: t.x, y: t.y},
                            o = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                            r = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                        this._options.enabled && r && (this.drawBackground(i, t, e, n, o), i.x += t.xPadding, i.y += t.yPadding, this.drawTitle(i, t, e, o), this.drawBody(i, t, e, o), this.drawFooter(i, t, e, o))
                    }
                }, handleEvent: function (e) {
                    var t, n = this, i = n._options;
                    return n._lastActive = n._lastActive || [], "mouseout" === e.type ? n._active = [] : n._active = n._chart.getElementsAtEventForMode(e, i.mode, i), (t = !r.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                        x: e.x,
                        y: e.y
                    }, n.update(!0), n.pivot())), t
                }
            })).positioners = a
        }, {26: 26, 27: 27, 46: 46}], 37: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(27), r = e(46);
            i._set("global", {
                elements: {
                    arc: {
                        backgroundColor: i.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), t.exports = o.extend({
                inLabelRange: function (e) {
                    var t = this._view;
                    return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
                }, inRange: function (e, t) {
                    var n = this._view;
                    if (n) {
                        for (var i = r.getAngleFromPoint(n, {
                            x: e,
                            y: t
                        }), o = i.angle, a = i.distance, s = n.startAngle, l = n.endAngle; l < s;) l += 2 * Math.PI;
                        for (; o > l;) o -= 2 * Math.PI;
                        for (; o < s;) o += 2 * Math.PI;
                        var c = o >= s && o <= l, u = a >= n.innerRadius && a <= n.outerRadius;
                        return c && u
                    }
                    return !1
                }, getCenterPoint: function () {
                    var e = this._view, t = (e.startAngle + e.endAngle) / 2, n = (e.innerRadius + e.outerRadius) / 2;
                    return {x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n}
                }, getArea: function () {
                    var e = this._view;
                    return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
                }, tooltipPosition: function () {
                    var e = this._view, t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                        n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
                    return {x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n}
                }, draw: function () {
                    var e = this._chart.ctx, t = this._view, n = t.startAngle, i = t.endAngle;
                    e.beginPath(), e.arc(t.x, t.y, t.outerRadius, n, i), e.arc(t.x, t.y, t.innerRadius, i, n, !0), e.closePath(), e.strokeStyle = t.borderColor, e.lineWidth = t.borderWidth, e.fillStyle = t.backgroundColor, e.fill(), e.lineJoin = "bevel", t.borderWidth && e.stroke()
                }
            })
        }, {26: 26, 27: 27, 46: 46}], 38: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(27), r = e(46), a = i.global;
            i._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: a.defaultColor,
                        borderWidth: 3,
                        borderColor: a.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), t.exports = o.extend({
                draw: function () {
                    var e, t, n, i, o = this._view, s = this._chart.ctx, l = o.spanGaps, c = this._children.slice(),
                        u = a.elements.line, d = -1;
                    for (this._loop && c.length && c.push(c[0]), s.save(), s.lineCap = o.borderCapStyle || u.borderCapStyle, s.setLineDash && s.setLineDash(o.borderDash || u.borderDash), s.lineDashOffset = o.borderDashOffset || u.borderDashOffset, s.lineJoin = o.borderJoinStyle || u.borderJoinStyle, s.lineWidth = o.borderWidth || u.borderWidth, s.strokeStyle = o.borderColor || a.defaultColor, s.beginPath(), d = -1, e = 0; e < c.length; ++e) t = c[e], n = r.previousItem(c, e), i = t._view, 0 === e ? i.skip || (s.moveTo(i.x, i.y), d = e) : (n = -1 === d ? n : c[d], i.skip || (d !== e - 1 && !l || -1 === d ? s.moveTo(i.x, i.y) : r.canvas.lineTo(s, n._view, t._view), d = e));
                    s.stroke(), s.restore()
                }
            })
        }, {26: 26, 27: 27, 46: 46}], 39: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(27), r = e(46), a = i.global.defaultColor;

            function s(e) {
                var t = this._view;
                return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
            }

            i._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: a,
                        borderColor: a,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), t.exports = o.extend({
                inRange: function (e, t) {
                    var n = this._view;
                    return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                }, inLabelRange: s, inXRange: s, inYRange: function (e) {
                    var t = this._view;
                    return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
                }, getCenterPoint: function () {
                    var e = this._view;
                    return {x: e.x, y: e.y}
                }, getArea: function () {
                    return Math.PI * Math.pow(this._view.radius, 2)
                }, tooltipPosition: function () {
                    var e = this._view;
                    return {x: e.x, y: e.y, padding: e.radius + e.borderWidth}
                }, draw: function (e) {
                    var t = this._view, n = this._model, o = this._chart.ctx, s = t.pointStyle, l = t.rotation,
                        c = t.radius, u = t.x, d = t.y;
                    t.skip || (void 0 === e || n.x >= e.left && 1.01 * e.right >= n.x && n.y >= e.top && 1.01 * e.bottom >= n.y) && (o.strokeStyle = t.borderColor || a, o.lineWidth = r.valueOrDefault(t.borderWidth, i.global.elements.point.borderWidth), o.fillStyle = t.backgroundColor || a, r.canvas.drawPoint(o, s, c, u, d, l))
                }
            })
        }, {26: 26, 27: 27, 46: 46}], 40: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(27);

            function r(e) {
                return void 0 !== e._view.width
            }

            function a(e) {
                var t, n, i, o, a = e._view;
                if (r(e)) {
                    var s = a.width / 2;
                    t = a.x - s, n = a.x + s, i = Math.min(a.y, a.base), o = Math.max(a.y, a.base)
                } else {
                    var l = a.height / 2;
                    t = Math.min(a.x, a.base), n = Math.max(a.x, a.base), i = a.y - l, o = a.y + l
                }
                return {left: t, top: i, right: n, bottom: o}
            }

            i._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: i.global.defaultColor,
                        borderColor: i.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), t.exports = o.extend({
                draw: function () {
                    var e, t, n, i, o, r, a, s = this._chart.ctx, l = this._view, c = l.borderWidth;
                    if (l.horizontal ? (e = l.base, t = l.x, n = l.y - l.height / 2, i = l.y + l.height / 2, o = t > e ? 1 : -1, r = 1, a = l.borderSkipped || "left") : (e = l.x - l.width / 2, t = l.x + l.width / 2, n = l.y, o = 1, r = (i = l.base) > n ? 1 : -1, a = l.borderSkipped || "bottom"), c) {
                        var u = Math.min(Math.abs(e - t), Math.abs(n - i)), d = (c = c > u ? u : c) / 2,
                            h = e + ("left" !== a ? d * o : 0), f = t + ("right" !== a ? -d * o : 0),
                            p = n + ("top" !== a ? d * r : 0), g = i + ("bottom" !== a ? -d * r : 0);
                        h !== f && (n = p, i = g), p !== g && (e = h, t = f)
                    }
                    s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = c;
                    var m = [[e, i], [e, n], [t, n], [t, i]], v = ["bottom", "left", "top", "right"].indexOf(a, 0);

                    function y(e) {
                        return m[(v + e) % 4]
                    }

                    -1 === v && (v = 0);
                    var b = y(0);
                    s.moveTo(b[0], b[1]);
                    for (var x = 1; x < 4; x++) b = y(x), s.lineTo(b[0], b[1]);
                    s.fill(), c && s.stroke()
                }, height: function () {
                    var e = this._view;
                    return e.base - e.y
                }, inRange: function (e, t) {
                    var n = !1;
                    if (this._view) {
                        var i = a(this);
                        n = e >= i.left && e <= i.right && t >= i.top && t <= i.bottom
                    }
                    return n
                }, inLabelRange: function (e, t) {
                    if (!this._view) return !1;
                    var n = a(this);
                    return r(this) ? e >= n.left && e <= n.right : t >= n.top && t <= n.bottom
                }, inXRange: function (e) {
                    var t = a(this);
                    return e >= t.left && e <= t.right
                }, inYRange: function (e) {
                    var t = a(this);
                    return e >= t.top && e <= t.bottom
                }, getCenterPoint: function () {
                    var e, t, n = this._view;
                    return r(this) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), {x: e, y: t}
                }, getArea: function () {
                    var e = this._view;
                    return e.width * Math.abs(e.y - e.base)
                }, tooltipPosition: function () {
                    var e = this._view;
                    return {x: e.x, y: e.y}
                }
            })
        }, {26: 26, 27: 27}], 41: [function (e, t, n) {
            "use strict";
            t.exports = {}, t.exports.Arc = e(37), t.exports.Line = e(38), t.exports.Point = e(39), t.exports.Rectangle = e(40)
        }, {37: 37, 38: 38, 39: 39, 40: 40}], 42: [function (e, t, n) {
            "use strict";
            var i = e(43);
            n = t.exports = {
                clear: function (e) {
                    e.ctx.clearRect(0, 0, e.width, e.height)
                }, roundedRect: function (e, t, n, i, o, r) {
                    if (r) {
                        var a = Math.min(r, o / 2 - 1e-7, i / 2 - 1e-7);
                        e.moveTo(t + a, n), e.lineTo(t + i - a, n), e.arcTo(t + i, n, t + i, n + a, a), e.lineTo(t + i, n + o - a), e.arcTo(t + i, n + o, t + i - a, n + o, a), e.lineTo(t + a, n + o), e.arcTo(t, n + o, t, n + o - a, a), e.lineTo(t, n + a), e.arcTo(t, n, t + a, n, a), e.closePath(), e.moveTo(t, n)
                    } else e.rect(t, n, i, o)
                }, drawPoint: function (e, t, n, i, o, r) {
                    var a, s, l, c, u, d;
                    if (r = r || 0, !t || "object" != typeof t || "[object HTMLImageElement]" !== (a = t.toString()) && "[object HTMLCanvasElement]" !== a) {
                        if (!(isNaN(n) || n <= 0)) {
                            switch (e.save(), e.translate(i, o), e.rotate(r * Math.PI / 180), e.beginPath(), t) {
                                default:
                                    e.arc(0, 0, n, 0, 2 * Math.PI), e.closePath();
                                    break;
                                case"triangle":
                                    u = (s = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2, e.moveTo(-s / 2, u / 3), e.lineTo(s / 2, u / 3), e.lineTo(0, -2 * u / 3), e.closePath();
                                    break;
                                case"rect":
                                    d = 1 / Math.SQRT2 * n, e.rect(-d, -d, 2 * d, 2 * d);
                                    break;
                                case"rectRounded":
                                    var h = n / Math.SQRT2, f = -h, p = -h, g = Math.SQRT2 * n;
                                    this.roundedRect(e, f, p, g, g, .425 * n);
                                    break;
                                case"rectRot":
                                    d = 1 / Math.SQRT2 * n, e.moveTo(-d, 0), e.lineTo(0, d), e.lineTo(d, 0), e.lineTo(0, -d), e.closePath();
                                    break;
                                case"cross":
                                    e.moveTo(0, n), e.lineTo(0, -n), e.moveTo(-n, 0), e.lineTo(n, 0);
                                    break;
                                case"crossRot":
                                    l = Math.cos(Math.PI / 4) * n, c = Math.sin(Math.PI / 4) * n, e.moveTo(-l, -c), e.lineTo(l, c), e.moveTo(-l, c), e.lineTo(l, -c);
                                    break;
                                case"star":
                                    e.moveTo(0, n), e.lineTo(0, -n), e.moveTo(-n, 0), e.lineTo(n, 0), l = Math.cos(Math.PI / 4) * n, c = Math.sin(Math.PI / 4) * n, e.moveTo(-l, -c), e.lineTo(l, c), e.moveTo(-l, c), e.lineTo(l, -c);
                                    break;
                                case"line":
                                    e.moveTo(-n, 0), e.lineTo(n, 0);
                                    break;
                                case"dash":
                                    e.moveTo(0, 0), e.lineTo(n, 0)
                            }
                            e.fill(), e.stroke(), e.restore()
                        }
                    } else e.drawImage(t, i - t.width / 2, o - t.height / 2, t.width, t.height)
                }, clipArea: function (e, t) {
                    e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
                }, unclipArea: function (e) {
                    e.restore()
                }, lineTo: function (e, t, n, i) {
                    if (n.steppedLine) return "after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y), void e.lineTo(n.x, n.y);
                    n.tension ? e.bezierCurveTo(i ? t.controlPointPreviousX : t.controlPointNextX, i ? t.controlPointPreviousY : t.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y)
                }
            };
            i.clear = n.clear, i.drawRoundedRectangle = function (e) {
                e.beginPath(), n.roundedRect.apply(n, arguments)
            }
        }, {43: 43}], 43: [function (e, t, n) {
            "use strict";
            var i, o = {
                noop: function () {
                }, uid: (i = 0, function () {
                    return i++
                }), isNullOrUndef: function (e) {
                    return null === e || void 0 === e
                }, isArray: Array.isArray ? Array.isArray : function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }, isObject: function (e) {
                    return null !== e && "[object Object]" === Object.prototype.toString.call(e)
                }, valueOrDefault: function (e, t) {
                    return void 0 === e ? t : e
                }, valueAtIndexOrDefault: function (e, t, n) {
                    return o.valueOrDefault(o.isArray(e) ? e[t] : e, n)
                }, callback: function (e, t, n) {
                    if (e && "function" == typeof e.call) return e.apply(n, t)
                }, each: function (e, t, n, i) {
                    var r, a, s;
                    if (o.isArray(e)) if (a = e.length, i) for (r = a - 1; r >= 0; r--) t.call(n, e[r], r); else for (r = 0; r < a; r++) t.call(n, e[r], r); else if (o.isObject(e)) for (a = (s = Object.keys(e)).length, r = 0; r < a; r++) t.call(n, e[s[r]], s[r])
                }, arrayEquals: function (e, t) {
                    var n, i, r, a;
                    if (!e || !t || e.length !== t.length) return !1;
                    for (n = 0, i = e.length; n < i; ++n) if (r = e[n], a = t[n], r instanceof Array && a instanceof Array) {
                        if (!o.arrayEquals(r, a)) return !1
                    } else if (r !== a) return !1;
                    return !0
                }, clone: function (e) {
                    if (o.isArray(e)) return e.map(o.clone);
                    if (o.isObject(e)) {
                        for (var t = {}, n = Object.keys(e), i = n.length, r = 0; r < i; ++r) t[n[r]] = o.clone(e[n[r]]);
                        return t
                    }
                    return e
                }, _merger: function (e, t, n, i) {
                    var r = t[e], a = n[e];
                    o.isObject(r) && o.isObject(a) ? o.merge(r, a, i) : t[e] = o.clone(a)
                }, _mergerIf: function (e, t, n) {
                    var i = t[e], r = n[e];
                    o.isObject(i) && o.isObject(r) ? o.mergeIf(i, r) : t.hasOwnProperty(e) || (t[e] = o.clone(r))
                }, merge: function (e, t, n) {
                    var i, r, a, s, l, c = o.isArray(t) ? t : [t], u = c.length;
                    if (!o.isObject(e)) return e;
                    for (i = (n = n || {}).merger || o._merger, r = 0; r < u; ++r) if (t = c[r], o.isObject(t)) for (l = 0, s = (a = Object.keys(t)).length; l < s; ++l) i(a[l], e, t, n);
                    return e
                }, mergeIf: function (e, t) {
                    return o.merge(e, t, {merger: o._mergerIf})
                }, extend: function (e) {
                    for (var t = function (t, n) {
                        e[n] = t
                    }, n = 1, i = arguments.length; n < i; ++n) o.each(arguments[n], t);
                    return e
                }, inherits: function (e) {
                    var t = this, n = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
                        return t.apply(this, arguments)
                    }, i = function () {
                        this.constructor = n
                    };
                    return i.prototype = t.prototype, n.prototype = new i, n.extend = o.inherits, e && o.extend(n.prototype, e), n.__super__ = t.prototype, n
                }
            };
            t.exports = o, o.callCallback = o.callback, o.indexOf = function (e, t, n) {
                return Array.prototype.indexOf.call(e, t, n)
            }, o.getValueOrDefault = o.valueOrDefault, o.getValueAtIndexOrDefault = o.valueAtIndexOrDefault
        }, {}], 44: [function (e, t, n) {
            "use strict";
            var i = e(43), o = {
                linear: function (e) {
                    return e
                }, easeInQuad: function (e) {
                    return e * e
                }, easeOutQuad: function (e) {
                    return -e * (e - 2)
                }, easeInOutQuad: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                }, easeInCubic: function (e) {
                    return e * e * e
                }, easeOutCubic: function (e) {
                    return (e -= 1) * e * e + 1
                }, easeInOutCubic: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                }, easeInQuart: function (e) {
                    return e * e * e * e
                }, easeOutQuart: function (e) {
                    return -((e -= 1) * e * e * e - 1)
                }, easeInOutQuart: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                }, easeInQuint: function (e) {
                    return e * e * e * e * e
                }, easeOutQuint: function (e) {
                    return (e -= 1) * e * e * e * e + 1
                }, easeInOutQuint: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                }, easeInSine: function (e) {
                    return 1 - Math.cos(e * (Math.PI / 2))
                }, easeOutSine: function (e) {
                    return Math.sin(e * (Math.PI / 2))
                }, easeInOutSine: function (e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                }, easeInExpo: function (e) {
                    return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                }, easeOutExpo: function (e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                }, easeInOutExpo: function (e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
                }, easeInCirc: function (e) {
                    return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
                }, easeOutCirc: function (e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }, easeInOutCirc: function (e) {
                    return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                }, easeInElastic: function (e) {
                    var t = 1.70158, n = 0, i = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n))
                }, easeOutElastic: function (e) {
                    var t = 1.70158, n = 0, i = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
                }, easeInOutElastic: function (e) {
                    var t = 1.70158, n = 0, i = 1;
                    return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / i), e < 1 ? i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
                }, easeInBack: function (e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t)
                }, easeOutBack: function (e) {
                    var t = 1.70158;
                    return (e -= 1) * e * ((t + 1) * e + t) + 1
                }, easeInOutBack: function (e) {
                    var t = 1.70158;
                    return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
                }, easeInBounce: function (e) {
                    return 1 - o.easeOutBounce(1 - e)
                }, easeOutBounce: function (e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }, easeInOutBounce: function (e) {
                    return e < .5 ? .5 * o.easeInBounce(2 * e) : .5 * o.easeOutBounce(2 * e - 1) + .5
                }
            };
            t.exports = {effects: o}, i.easingEffects = o
        }, {43: 43}], 45: [function (e, t, n) {
            "use strict";
            var i = e(43);
            t.exports = {
                toLineHeight: function (e, t) {
                    var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!n || "normal" === n[1]) return 1.2 * t;
                    switch (e = +n[2], n[3]) {
                        case"px":
                            return e;
                        case"%":
                            e /= 100
                    }
                    return t * e
                }, toPadding: function (e) {
                    var t, n, o, r;
                    return i.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, o = +e.bottom || 0, r = +e.left || 0) : t = n = o = r = +e || 0, {
                        top: t,
                        right: n,
                        bottom: o,
                        left: r,
                        height: t + o,
                        width: r + n
                    }
                }, resolve: function (e, t, n) {
                    var o, r, a;
                    for (o = 0, r = e.length; o < r; ++o) if (void 0 !== (a = e[o]) && (void 0 !== t && "function" == typeof a && (a = a(t)), void 0 !== n && i.isArray(a) && (a = a[n]), void 0 !== a)) return a
                }
            }
        }, {43: 43}], 46: [function (e, t, n) {
            "use strict";
            t.exports = e(43), t.exports.easing = e(44), t.exports.canvas = e(42), t.exports.options = e(45)
        }, {42: 42, 43: 43, 44: 44, 45: 45}], 47: [function (e, t, n) {
            t.exports = {
                acquireContext: function (e) {
                    return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
                }
            }
        }, {}], 48: [function (e, t, n) {
            "use strict";
            var i = e(46), o = "$chartjs", r = "chartjs-", a = r + "render-monitor", s = r + "render-animation",
                l = ["animationstart", "webkitAnimationStart"], c = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };

            function u(e, t) {
                var n = i.getStyle(e, t), o = n && n.match(/^(\d+)(\.\d+)?px$/);
                return o ? Number(o[1]) : void 0
            }

            var d = !!function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("e", null, t)
                } catch (e) {
                }
                return e
            }() && {passive: !0};

            function h(e, t, n) {
                e.addEventListener(t, n, d)
            }

            function f(e, t, n) {
                e.removeEventListener(t, n, d)
            }

            function p(e, t, n, i, o) {
                return {type: e, chart: t, native: o || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null}
            }

            function g(e, t, n) {
                var c, u, d, f, g = e[o] || (e[o] = {}), m = g.resizer = function (e) {
                    var t = document.createElement("div"), n = r + "size-monitor",
                        i = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                    t.style.cssText = i, t.className = n, t.innerHTML = '<div class="' + n + '-expand" style="' + i + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + i + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                    var o = t.childNodes[0], a = t.childNodes[1];
                    t._reset = function () {
                        o.scrollLeft = 1e6, o.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6
                    };
                    var s = function () {
                        t._reset(), e()
                    };
                    return h(o, "scroll", s.bind(o, "expand")), h(a, "scroll", s.bind(a, "shrink")), t
                }((c = function () {
                    if (g.resizer) return t(p("resize", n))
                }, d = !1, f = [], function () {
                    f = Array.prototype.slice.call(arguments), u = u || this, d || (d = !0, i.requestAnimFrame.call(window, function () {
                        d = !1, c.apply(u, f)
                    }))
                }));
                !function (e, t) {
                    var n = e[o] || (e[o] = {}), r = n.renderProxy = function (e) {
                        e.animationName === s && t()
                    };
                    i.each(l, function (t) {
                        h(e, t, r)
                    }), n.reflow = !!e.offsetParent, e.classList.add(a)
                }(e, function () {
                    if (g.resizer) {
                        var t = e.parentNode;
                        t && t !== m.parentNode && t.insertBefore(m, t.firstChild), m._reset()
                    }
                })
            }

            function m(e) {
                var t = e[o] || {}, n = t.resizer;
                delete t.resizer, function (e) {
                    var t = e[o] || {}, n = t.renderProxy;
                    n && (i.each(l, function (t) {
                        f(e, t, n)
                    }), delete t.renderProxy), e.classList.remove(a)
                }(e), n && n.parentNode && n.parentNode.removeChild(n)
            }

            t.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document, initialize: function () {
                    var e, t, n, i = "from{opacity:0.99}to{opacity:1}";
                    t = "@-webkit-keyframes " + s + "{" + i + "}@keyframes " + s + "{" + i + "}." + a + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", n = (e = this)._style || document.createElement("style"), e._style || (e._style = n, t = "/* Chart.js */\n" + t, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(t))
                }, acquireContext: function (e, t) {
                    "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
                    var n = e && e.getContext && e.getContext("2d");
                    return n && n.canvas === e ? (function (e, t) {
                        var n = e.style, i = e.getAttribute("height"), r = e.getAttribute("width");
                        if (e[o] = {
                            initial: {
                                height: i,
                                width: r,
                                style: {display: n.display, height: n.height, width: n.width}
                            }
                        }, n.display = n.display || "block", null === r || "" === r) {
                            var a = u(e, "width");
                            void 0 !== a && (e.width = a)
                        }
                        if (null === i || "" === i) if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2); else {
                            var s = u(e, "height");
                            void 0 !== a && (e.height = s)
                        }
                    }(e, t), n) : null
                }, releaseContext: function (e) {
                    var t = e.canvas;
                    if (t[o]) {
                        var n = t[o].initial;
                        ["height", "width"].forEach(function (e) {
                            var o = n[e];
                            i.isNullOrUndef(o) ? t.removeAttribute(e) : t.setAttribute(e, o)
                        }), i.each(n.style || {}, function (e, n) {
                            t.style[n] = e
                        }), t.width = t.width, delete t[o]
                    }
                }, addEventListener: function (e, t, n) {
                    var r = e.canvas;
                    if ("resize" !== t) {
                        var a = n[o] || (n[o] = {});
                        h(r, t, (a.proxies || (a.proxies = {}))[e.id + "_" + t] = function (t) {
                            n(function (e, t) {
                                var n = c[e.type] || e.type, o = i.getRelativePosition(e, t);
                                return p(n, t, o.x, o.y, e)
                            }(t, e))
                        })
                    } else g(r, n, e)
                }, removeEventListener: function (e, t, n) {
                    var i = e.canvas;
                    if ("resize" !== t) {
                        var r = ((n[o] || {}).proxies || {})[e.id + "_" + t];
                        r && f(i, t, r)
                    } else m(i)
                }
            }, i.addEvent = h, i.removeEvent = f
        }, {46: 46}], 49: [function (e, t, n) {
            "use strict";
            var i = e(46), o = e(47), r = e(48), a = r._enabled ? r : o;
            t.exports = i.extend({
                initialize: function () {
                }, acquireContext: function () {
                }, releaseContext: function () {
                }, addEventListener: function () {
                }, removeEventListener: function () {
                }
            }, a)
        }, {46: 46, 47: 47, 48: 48}], 50: [function (e, t, n) {
            "use strict";
            t.exports = {}, t.exports.filler = e(51), t.exports.legend = e(52), t.exports.title = e(53)
        }, {51: 51, 52: 52, 53: 53}], 51: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(41), r = e(46);
            i._set("global", {plugins: {filler: {propagate: !0}}});
            var a = {
                dataset: function (e) {
                    var t = e.fill, n = e.chart, i = n.getDatasetMeta(t),
                        o = i && n.isDatasetVisible(t) && i.dataset._children || [], r = o.length || 0;
                    return r ? function (e, t) {
                        return t < r && o[t]._view || null
                    } : null
                }, boundary: function (e) {
                    var t = e.boundary, n = t ? t.x : null, i = t ? t.y : null;
                    return function (e) {
                        return {x: null === n ? e.x : n, y: null === i ? e.y : i}
                    }
                }
            };

            function s(e, t, n) {
                var i, o = e._model || {}, r = o.fill;
                if (void 0 === r && (r = !!o.backgroundColor), !1 === r || null === r) return !1;
                if (!0 === r) return "origin";
                if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = t + i), !(i === t || i < 0 || i >= n) && i;
                switch (r) {
                    case"bottom":
                        return "start";
                    case"top":
                        return "end";
                    case"zero":
                        return "origin";
                    case"origin":
                    case"start":
                    case"end":
                        return r;
                    default:
                        return !1
                }
            }

            function l(e) {
                var t, n = e.el._model || {}, i = e.el._scale || {}, o = e.fill, r = null;
                if (isFinite(o)) return null;
                if ("start" === o ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === o ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePosition ? r = i.getBasePosition() : i.getBasePixel && (r = i.getBasePixel()), void 0 !== r && null !== r) {
                    if (void 0 !== r.x && void 0 !== r.y) return r;
                    if ("number" == typeof r && isFinite(r)) return {
                        x: (t = i.isHorizontal()) ? r : null,
                        y: t ? null : r
                    }
                }
                return null
            }

            function c(e, t, n) {
                var i, o = e[t].fill, r = [t];
                if (!n) return o;
                for (; !1 !== o && -1 === r.indexOf(o);) {
                    if (!isFinite(o)) return o;
                    if (!(i = e[o])) return !1;
                    if (i.visible) return o;
                    r.push(o), o = i.fill
                }
                return !1
            }

            function u(e) {
                var t = e.fill, n = "dataset";
                return !1 === t ? null : (isFinite(t) || (n = "boundary"), a[n](e))
            }

            function d(e) {
                return e && !e.skip
            }

            function h(e, t, n, i, o) {
                var a;
                if (i && o) {
                    for (e.moveTo(t[0].x, t[0].y), a = 1; a < i; ++a) r.canvas.lineTo(e, t[a - 1], t[a]);
                    for (e.lineTo(n[o - 1].x, n[o - 1].y), a = o - 1; a > 0; --a) r.canvas.lineTo(e, n[a], n[a - 1], !0)
                }
            }

            t.exports = {
                id: "filler", afterDatasetsUpdate: function (e, t) {
                    var n, i, r, a, d = (e.data.datasets || []).length, h = t.propagate, f = [];
                    for (i = 0; i < d; ++i) a = null, (r = (n = e.getDatasetMeta(i)).dataset) && r._model && r instanceof o.Line && (a = {
                        visible: e.isDatasetVisible(i),
                        fill: s(r, i, d),
                        chart: e,
                        el: r
                    }), n.$filler = a, f.push(a);
                    for (i = 0; i < d; ++i) (a = f[i]) && (a.fill = c(f, i, h), a.boundary = l(a), a.mapper = u(a))
                }, beforeDatasetDraw: function (e, t) {
                    var n = t.meta.$filler;
                    if (n) {
                        var o = e.ctx, a = n.el, s = a._view, l = a._children || [], c = n.mapper,
                            u = s.backgroundColor || i.global.defaultColor;
                        c && u && l.length && (r.canvas.clipArea(o, e.chartArea), function (e, t, n, i, o, r) {
                            var a, s, l, c, u, f, p, g = t.length, m = i.spanGaps, v = [], y = [], b = 0, x = 0;
                            for (e.beginPath(), a = 0, s = g + !!r; a < s; ++a) u = n(c = t[l = a % g]._view, l, i), f = d(c), p = d(u), f && p ? (b = v.push(c), x = y.push(u)) : b && x && (m ? (f && v.push(c), p && y.push(u)) : (h(e, v, y, b, x), b = x = 0, v = [], y = []));
                            h(e, v, y, b, x), e.closePath(), e.fillStyle = o, e.fill()
                        }(o, l, c, s, u, a._loop), r.canvas.unclipArea(o))
                    }
                }
            }
        }, {26: 26, 41: 41, 46: 46}], 52: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(27), r = e(46), a = e(31), s = r.noop;

            function l(e, t) {
                return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
            }

            i._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function (e, t) {
                        var n = t.datasetIndex, i = this.chart, o = i.getDatasetMeta(n);
                        o.hidden = null === o.hidden ? !i.data.datasets[n].hidden : null, i.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40, padding: 10, generateLabels: function (e) {
                            var t = e.data;
                            return r.isArray(t.datasets) ? t.datasets.map(function (t, n) {
                                return {
                                    text: t.label,
                                    fillStyle: r.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                    hidden: !e.isDatasetVisible(n),
                                    lineCap: t.borderCapStyle,
                                    lineDash: t.borderDash,
                                    lineDashOffset: t.borderDashOffset,
                                    lineJoin: t.borderJoinStyle,
                                    lineWidth: t.borderWidth,
                                    strokeStyle: t.borderColor,
                                    pointStyle: t.pointStyle,
                                    datasetIndex: n
                                }
                            }, this) : []
                        }
                    }
                }, legendCallback: function (e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    for (var n = 0; n < e.data.datasets.length; n++) t.push('<li><span style="background-color:' + e.data.datasets[n].backgroundColor + '"></span>'), e.data.datasets[n].label && t.push(e.data.datasets[n].label), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                }
            });
            var c = o.extend({
                initialize: function (e) {
                    r.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
                }, beforeUpdate: s, update: function (e, t, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                }, afterUpdate: s, beforeSetDimensions: s, setDimensions: function () {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                }, afterSetDimensions: s, beforeBuildLabels: s, buildLabels: function () {
                    var e = this, t = e.options.labels || {}, n = r.callback(t.generateLabels, [e.chart], e) || [];
                    t.filter && (n = n.filter(function (n) {
                        return t.filter(n, e.chart.data)
                    })), e.options.reverse && n.reverse(), e.legendItems = n
                }, afterBuildLabels: s, beforeFit: s, fit: function () {
                    var e = this, t = e.options, n = t.labels, o = t.display, a = e.ctx, s = i.global,
                        c = r.valueOrDefault, u = c(n.fontSize, s.defaultFontSize),
                        d = c(n.fontStyle, s.defaultFontStyle), h = c(n.fontFamily, s.defaultFontFamily),
                        f = r.fontString(u, d, h), p = e.legendHitBoxes = [], g = e.minSize, m = e.isHorizontal();
                    if (m ? (g.width = e.maxWidth, g.height = o ? 10 : 0) : (g.width = o ? 10 : 0, g.height = e.maxHeight), o) if (a.font = f, m) {
                        var v = e.lineWidths = [0], y = e.legendItems.length ? u + n.padding : 0;
                        a.textAlign = "left", a.textBaseline = "top", r.each(e.legendItems, function (t, i) {
                            var o = l(n, u) + u / 2 + a.measureText(t.text).width;
                            v[v.length - 1] + o + n.padding >= e.width && (y += u + n.padding, v[v.length] = e.left), p[i] = {
                                left: 0,
                                top: 0,
                                width: o,
                                height: u
                            }, v[v.length - 1] += o + n.padding
                        }), g.height += y
                    } else {
                        var b = n.padding, x = e.columnWidths = [], w = n.padding, k = 0, C = 0, S = u + b;
                        r.each(e.legendItems, function (e, t) {
                            var i = l(n, u) + u / 2 + a.measureText(e.text).width;
                            C + S > g.height && (w += k + n.padding, x.push(k), k = 0, C = 0), k = Math.max(k, i), C += S, p[t] = {
                                left: 0,
                                top: 0,
                                width: i,
                                height: u
                            }
                        }), w += k, x.push(k), g.width += w
                    }
                    e.width = g.width, e.height = g.height
                }, afterFit: s, isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                }, draw: function () {
                    var e = this, t = e.options, n = t.labels, o = i.global, a = o.elements.line, s = e.width,
                        c = e.lineWidths;
                    if (t.display) {
                        var u, d = e.ctx, h = r.valueOrDefault, f = h(n.fontColor, o.defaultFontColor),
                            p = h(n.fontSize, o.defaultFontSize), g = h(n.fontStyle, o.defaultFontStyle),
                            m = h(n.fontFamily, o.defaultFontFamily), v = r.fontString(p, g, m);
                        d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = f, d.fillStyle = f, d.font = v;
                        var y = l(n, p), b = e.legendHitBoxes, x = e.isHorizontal();
                        u = x ? {x: e.left + (s - c[0]) / 2, y: e.top + n.padding, line: 0} : {
                            x: e.left + n.padding,
                            y: e.top + n.padding,
                            line: 0
                        };
                        var w = p + n.padding;
                        r.each(e.legendItems, function (i, l) {
                            var f = d.measureText(i.text).width, g = y + p / 2 + f, m = u.x, v = u.y;
                            x ? m + g >= s && (v = u.y += w, u.line++, m = u.x = e.left + (s - c[u.line]) / 2) : v + w > e.bottom && (m = u.x = m + e.columnWidths[u.line] + n.padding, v = u.y = e.top + n.padding, u.line++), function (e, n, i) {
                                if (!(isNaN(y) || y <= 0)) {
                                    d.save(), d.fillStyle = h(i.fillStyle, o.defaultColor), d.lineCap = h(i.lineCap, a.borderCapStyle), d.lineDashOffset = h(i.lineDashOffset, a.borderDashOffset), d.lineJoin = h(i.lineJoin, a.borderJoinStyle), d.lineWidth = h(i.lineWidth, a.borderWidth), d.strokeStyle = h(i.strokeStyle, o.defaultColor);
                                    var s = 0 === h(i.lineWidth, a.borderWidth);
                                    if (d.setLineDash && d.setLineDash(h(i.lineDash, a.borderDash)), t.labels && t.labels.usePointStyle) {
                                        var l = p * Math.SQRT2 / 2, c = l / Math.SQRT2, u = e + c, f = n + c;
                                        r.canvas.drawPoint(d, i.pointStyle, l, u, f)
                                    } else s || d.strokeRect(e, n, y, p), d.fillRect(e, n, y, p);
                                    d.restore()
                                }
                            }(m, v, i), b[l].left = m, b[l].top = v, function (e, t, n, i) {
                                var o = p / 2, r = y + o + e, a = t + o;
                                d.fillText(n.text, r, a), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(r, a), d.lineTo(r + i, a), d.stroke())
                            }(m, v, i, f), x ? u.x += g + n.padding : u.y += w
                        })
                    }
                }, handleEvent: function (e) {
                    var t = this, n = t.options, i = "mouseup" === e.type ? "click" : e.type, o = !1;
                    if ("mousemove" === i) {
                        if (!n.onHover) return
                    } else {
                        if ("click" !== i) return;
                        if (!n.onClick) return
                    }
                    var r = e.x, a = e.y;
                    if (r >= t.left && r <= t.right && a >= t.top && a <= t.bottom) for (var s = t.legendHitBoxes, l = 0; l < s.length; ++l) {
                        var c = s[l];
                        if (r >= c.left && r <= c.left + c.width && a >= c.top && a <= c.top + c.height) {
                            if ("click" === i) {
                                n.onClick.call(t, e.native, t.legendItems[l]), o = !0;
                                break
                            }
                            if ("mousemove" === i) {
                                n.onHover.call(t, e.native, t.legendItems[l]), o = !0;
                                break
                            }
                        }
                    }
                    return o
                }
            });

            function u(e, t) {
                var n = new c({ctx: e.ctx, options: t, chart: e});
                a.configure(e, n, t), a.addBox(e, n), e.legend = n
            }

            t.exports = {
                id: "legend", _element: c, beforeInit: function (e) {
                    var t = e.options.legend;
                    t && u(e, t)
                }, beforeUpdate: function (e) {
                    var t = e.options.legend, n = e.legend;
                    t ? (r.mergeIf(t, i.global.legend), n ? (a.configure(e, n, t), n.options = t) : u(e, t)) : n && (a.removeBox(e, n), delete e.legend)
                }, afterEvent: function (e, t) {
                    var n = e.legend;
                    n && n.handleEvent(t)
                }
            }
        }, {26: 26, 27: 27, 31: 31, 46: 46}], 53: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(27), r = e(46), a = e(31), s = r.noop;
            i._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var l = o.extend({
                initialize: function (e) {
                    r.extend(this, e), this.legendHitBoxes = []
                },
                beforeUpdate: s,
                update: function (e, t, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = e, i.maxHeight = t, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: s,
                beforeSetDimensions: s,
                setDimensions: function () {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: s,
                beforeBuildLabels: s,
                buildLabels: s,
                afterBuildLabels: s,
                beforeFit: s,
                fit: function () {
                    var e = this, t = r.valueOrDefault, n = e.options, o = n.display,
                        a = t(n.fontSize, i.global.defaultFontSize), s = e.minSize,
                        l = r.isArray(n.text) ? n.text.length : 1, c = r.options.toLineHeight(n.lineHeight, a),
                        u = o ? l * c + 2 * n.padding : 0;
                    e.isHorizontal() ? (s.width = e.maxWidth, s.height = u) : (s.width = u, s.height = e.maxHeight), e.width = s.width, e.height = s.height
                },
                afterFit: s,
                isHorizontal: function () {
                    var e = this.options.position;
                    return "top" === e || "bottom" === e
                },
                draw: function () {
                    var e = this, t = e.ctx, n = r.valueOrDefault, o = e.options, a = i.global;
                    if (o.display) {
                        var s, l, c, u = n(o.fontSize, a.defaultFontSize), d = n(o.fontStyle, a.defaultFontStyle),
                            h = n(o.fontFamily, a.defaultFontFamily), f = r.fontString(u, d, h),
                            p = r.options.toLineHeight(o.lineHeight, u), g = p / 2 + o.padding, m = 0, v = e.top,
                            y = e.left, b = e.bottom, x = e.right;
                        t.fillStyle = n(o.fontColor, a.defaultFontColor), t.font = f, e.isHorizontal() ? (l = y + (x - y) / 2, c = v + g, s = x - y) : (l = "left" === o.position ? y + g : x - g, c = v + (b - v) / 2, s = b - v, m = Math.PI * ("left" === o.position ? -.5 : .5)), t.save(), t.translate(l, c), t.rotate(m), t.textAlign = "center", t.textBaseline = "middle";
                        var w = o.text;
                        if (r.isArray(w)) for (var k = 0, C = 0; C < w.length; ++C) t.fillText(w[C], 0, k, s), k += p; else t.fillText(w, 0, 0, s);
                        t.restore()
                    }
                }
            });

            function c(e, t) {
                var n = new l({ctx: e.ctx, options: t, chart: e});
                a.configure(e, n, t), a.addBox(e, n), e.titleBlock = n
            }

            t.exports = {
                id: "title", _element: l, beforeInit: function (e) {
                    var t = e.options.title;
                    t && c(e, t)
                }, beforeUpdate: function (e) {
                    var t = e.options.title, n = e.titleBlock;
                    t ? (r.mergeIf(t, i.global.title), n ? (a.configure(e, n, t), n.options = t) : c(e, t)) : n && (a.removeBox(e, n), delete e.titleBlock)
                }
            }
        }, {26: 26, 27: 27, 31: 31, 46: 46}], 54: [function (e, t, n) {
            "use strict";
            var i = e(33), o = e(34);
            t.exports = function () {
                var e = i.extend({
                    getLabels: function () {
                        var e = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
                    }, determineDataLimits: function () {
                        var e, t = this, n = t.getLabels();
                        t.minIndex = 0, t.maxIndex = n.length - 1, void 0 !== t.options.ticks.min && (e = n.indexOf(t.options.ticks.min), t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = n.indexOf(t.options.ticks.max), t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex]
                    }, buildTicks: function () {
                        var e = this, t = e.getLabels();
                        e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
                    }, getLabelForIndex: function (e, t) {
                        var n = this, i = n.chart.data, o = n.isHorizontal();
                        return i.yLabels && !o ? n.getRightValue(i.datasets[t].data[e]) : n.ticks[e - n.minIndex]
                    }, getPixelForValue: function (e, t) {
                        var n, i = this, o = i.options.offset,
                            r = Math.max(i.maxIndex + 1 - i.minIndex - (o ? 0 : 1), 1);
                        if (void 0 !== e && null !== e && (n = i.isHorizontal() ? e.x : e.y), void 0 !== n || void 0 !== e && isNaN(t)) {
                            var a = i.getLabels();
                            e = n || e;
                            var s = a.indexOf(e);
                            t = -1 !== s ? s : t
                        }
                        if (i.isHorizontal()) {
                            var l = i.width / r, c = l * (t - i.minIndex);
                            return o && (c += l / 2), i.left + Math.round(c)
                        }
                        var u = i.height / r, d = u * (t - i.minIndex);
                        return o && (d += u / 2), i.top + Math.round(d)
                    }, getPixelForTick: function (e) {
                        return this.getPixelForValue(this.ticks[e], e + this.minIndex, null)
                    }, getValueForPixel: function (e) {
                        var t = this, n = t.options.offset, i = Math.max(t._ticks.length - (n ? 0 : 1), 1),
                            o = t.isHorizontal(), r = (o ? t.width : t.height) / i;
                        return e -= o ? t.left : t.top, n && (e -= r / 2), (e <= 0 ? 0 : Math.round(e / r)) + t.minIndex
                    }, getBasePixel: function () {
                        return this.bottom
                    }
                });
                o.registerScaleType("category", e, {position: "bottom"})
            }
        }, {33: 33, 34: 34}], 55: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(46), r = e(34), a = e(35);
            t.exports = function (e) {
                var t = {position: "left", ticks: {callback: a.formatters.linear}}, n = e.LinearScaleBase.extend({
                    determineDataLimits: function () {
                        var e = this, t = e.options, n = e.chart, i = n.data.datasets, r = e.isHorizontal();

                        function a(t) {
                            return r ? t.xAxisID === e.id : t.yAxisID === e.id
                        }

                        e.min = null, e.max = null;
                        var s = t.stacked;
                        if (void 0 === s && o.each(i, function (e, t) {
                            if (!s) {
                                var i = n.getDatasetMeta(t);
                                n.isDatasetVisible(t) && a(i) && void 0 !== i.stack && (s = !0)
                            }
                        }), t.stacked || s) {
                            var l = {};
                            o.each(i, function (i, r) {
                                var s = n.getDatasetMeta(r),
                                    c = [s.type, void 0 === t.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                void 0 === l[c] && (l[c] = {positiveValues: [], negativeValues: []});
                                var u = l[c].positiveValues, d = l[c].negativeValues;
                                n.isDatasetVisible(r) && a(s) && o.each(i.data, function (n, i) {
                                    var o = +e.getRightValue(n);
                                    isNaN(o) || s.data[i].hidden || (u[i] = u[i] || 0, d[i] = d[i] || 0, t.relativePoints ? u[i] = 100 : o < 0 ? d[i] += o : u[i] += o)
                                })
                            }), o.each(l, function (t) {
                                var n = t.positiveValues.concat(t.negativeValues), i = o.min(n), r = o.max(n);
                                e.min = null === e.min ? i : Math.min(e.min, i), e.max = null === e.max ? r : Math.max(e.max, r)
                            })
                        } else o.each(i, function (t, i) {
                            var r = n.getDatasetMeta(i);
                            n.isDatasetVisible(i) && a(r) && o.each(t.data, function (t, n) {
                                var i = +e.getRightValue(t);
                                isNaN(i) || r.data[n].hidden || (null === e.min ? e.min = i : i < e.min && (e.min = i), null === e.max ? e.max = i : i > e.max && (e.max = i))
                            })
                        });
                        e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var e, t = this.options.ticks;
                        if (this.isHorizontal()) e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.width / 50)); else {
                            var n = o.valueOrDefault(t.fontSize, i.global.defaultFontSize);
                            e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)))
                        }
                        return e
                    }, handleDirectionalChanges: function () {
                        this.isHorizontal() || this.ticks.reverse()
                    }, getLabelForIndex: function (e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    }, getPixelForValue: function (e) {
                        var t = this, n = t.start, i = +t.getRightValue(e), o = t.end - n;
                        return t.isHorizontal() ? t.left + t.width / o * (i - n) : t.bottom - t.height / o * (i - n)
                    }, getValueForPixel: function (e) {
                        var t = this, n = t.isHorizontal(), i = n ? t.width : t.height,
                            o = (n ? e - t.left : t.bottom - e) / i;
                        return t.start + (t.end - t.start) * o
                    }, getPixelForTick: function (e) {
                        return this.getPixelForValue(this.ticksAsNumbers[e])
                    }
                });
                r.registerScaleType("linear", n, t)
            }
        }, {26: 26, 34: 34, 35: 35, 46: 46}], 56: [function (e, t, n) {
            "use strict";
            var i = e(46), o = e(33);
            t.exports = function (e) {
                var t = i.noop;
                e.LinearScaleBase = o.extend({
                    getRightValue: function (e) {
                        return "string" == typeof e ? +e : o.prototype.getRightValue.call(this, e)
                    }, handleTickRangeOptions: function () {
                        var e = this, t = e.options.ticks;
                        if (t.beginAtZero) {
                            var n = i.sign(e.min), o = i.sign(e.max);
                            n < 0 && o < 0 ? e.max = 0 : n > 0 && o > 0 && (e.min = 0)
                        }
                        var r = void 0 !== t.min || void 0 !== t.suggestedMin,
                            a = void 0 !== t.max || void 0 !== t.suggestedMax;
                        void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), r !== a && e.min >= e.max && (r ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
                    }, getTickLimit: t, handleDirectionalChanges: t, buildTicks: function () {
                        var e = this, t = e.options.ticks, n = e.getTickLimit(), o = {
                            maxTicks: n = Math.max(2, n),
                            min: t.min,
                            max: t.max,
                            precision: t.precision,
                            stepSize: i.valueOrDefault(t.fixedStepSize, t.stepSize)
                        }, r = e.ticks = function (e, t) {
                            var n, o, r, a = [];
                            if (e.stepSize && e.stepSize > 0) r = e.stepSize; else {
                                var s = i.niceNum(t.max - t.min, !1);
                                r = i.niceNum(s / (e.maxTicks - 1), !0), void 0 !== (o = e.precision) && (n = Math.pow(10, o), r = Math.ceil(r * n) / n)
                            }
                            var l = Math.floor(t.min / r) * r, c = Math.ceil(t.max / r) * r;
                            i.isNullOrUndef(e.min) || i.isNullOrUndef(e.max) || !e.stepSize || i.almostWhole((e.max - e.min) / e.stepSize, r / 1e3) && (l = e.min, c = e.max);
                            var u = (c - l) / r;
                            u = i.almostEquals(u, Math.round(u), r / 1e3) ? Math.round(u) : Math.ceil(u), o = 1, r < 1 && (o = Math.pow(10, 1 - Math.floor(i.log10(r))), l = Math.round(l * o) / o, c = Math.round(c * o) / o), a.push(void 0 !== e.min ? e.min : l);
                            for (var d = 1; d < u; ++d) a.push(Math.round((l + d * r) * o) / o);
                            return a.push(void 0 !== e.max ? e.max : c), a
                        }(o, e);
                        e.handleDirectionalChanges(), e.max = i.max(r), e.min = i.min(r), t.reverse ? (r.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
                    }, convertTicksToLabels: function () {
                        var e = this;
                        e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), o.prototype.convertTicksToLabels.call(e)
                    }
                })
            }
        }, {33: 33, 46: 46}], 57: [function (e, t, n) {
            "use strict";
            var i = e(46), o = e(33), r = e(34), a = e(35);
            t.exports = function (e) {
                var t = {position: "left", ticks: {callback: a.formatters.logarithmic}}, n = o.extend({
                    determineDataLimits: function () {
                        var e = this, t = e.options, n = e.chart, o = n.data.datasets, r = e.isHorizontal();

                        function a(t) {
                            return r ? t.xAxisID === e.id : t.yAxisID === e.id
                        }

                        e.min = null, e.max = null, e.minNotZero = null;
                        var s = t.stacked;
                        if (void 0 === s && i.each(o, function (e, t) {
                            if (!s) {
                                var i = n.getDatasetMeta(t);
                                n.isDatasetVisible(t) && a(i) && void 0 !== i.stack && (s = !0)
                            }
                        }), t.stacked || s) {
                            var l = {};
                            i.each(o, function (o, r) {
                                var s = n.getDatasetMeta(r),
                                    c = [s.type, void 0 === t.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                                n.isDatasetVisible(r) && a(s) && (void 0 === l[c] && (l[c] = []), i.each(o.data, function (t, n) {
                                    var i = l[c], o = +e.getRightValue(t);
                                    isNaN(o) || s.data[n].hidden || o < 0 || (i[n] = i[n] || 0, i[n] += o)
                                }))
                            }), i.each(l, function (t) {
                                if (t.length > 0) {
                                    var n = i.min(t), o = i.max(t);
                                    e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? o : Math.max(e.max, o)
                                }
                            })
                        } else i.each(o, function (t, o) {
                            var r = n.getDatasetMeta(o);
                            n.isDatasetVisible(o) && a(r) && i.each(t.data, function (t, n) {
                                var i = +e.getRightValue(t);
                                isNaN(i) || r.data[n].hidden || i < 0 || (null === e.min ? e.min = i : i < e.min && (e.min = i), null === e.max ? e.max = i : i > e.max && (e.max = i), 0 !== i && (null === e.minNotZero || i < e.minNotZero) && (e.minNotZero = i))
                            })
                        });
                        this.handleTickRangeOptions()
                    }, handleTickRangeOptions: function () {
                        var e = this, t = e.options.ticks, n = i.valueOrDefault;
                        e.min = n(t.min, e.min), e.max = n(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(i.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(i.log10(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(i.log10(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(i.log10(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(i.log10(e.max))) : e.minNotZero = 1)
                    }, buildTicks: function () {
                        var e = this, t = e.options.ticks, n = !e.isHorizontal(), o = {min: t.min, max: t.max},
                            r = e.ticks = function (e, t) {
                                var n, o, r = [], a = i.valueOrDefault,
                                    s = a(e.min, Math.pow(10, Math.floor(i.log10(t.min)))),
                                    l = Math.floor(i.log10(t.max)), c = Math.ceil(t.max / Math.pow(10, l));
                                0 === s ? (n = Math.floor(i.log10(t.minNotZero)), o = Math.floor(t.minNotZero / Math.pow(10, n)), r.push(s), s = o * Math.pow(10, n)) : (n = Math.floor(i.log10(s)), o = Math.floor(s / Math.pow(10, n)));
                                var u = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                                do {
                                    r.push(s), 10 == ++o && (o = 1, u = ++n >= 0 ? 1 : u), s = Math.round(o * Math.pow(10, n) * u) / u
                                } while (n < l || n === l && o < c);
                                var d = a(e.max, s);
                                return r.push(d), r
                            }(o, e);
                        e.max = i.max(r), e.min = i.min(r), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n && r.reverse()
                    }, convertTicksToLabels: function () {
                        this.tickValues = this.ticks.slice(), o.prototype.convertTicksToLabels.call(this)
                    }, getLabelForIndex: function (e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    }, getPixelForTick: function (e) {
                        return this.getPixelForValue(this.tickValues[e])
                    }, _getFirstTickValue: function (e) {
                        var t = Math.floor(i.log10(e));
                        return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t)
                    }, getPixelForValue: function (t) {
                        var n, o, r, a, s, l = this, c = l.options.ticks.reverse, u = i.log10,
                            d = l._getFirstTickValue(l.minNotZero), h = 0;
                        return t = +l.getRightValue(t), c ? (r = l.end, a = l.start, s = -1) : (r = l.start, a = l.end, s = 1), l.isHorizontal() ? (n = l.width, o = c ? l.right : l.left) : (n = l.height, s *= -1, o = c ? l.top : l.bottom), t !== r && (0 === r && (n -= h = i.getValueOrDefault(l.options.ticks.fontSize, e.defaults.global.defaultFontSize), r = d), 0 !== t && (h += n / (u(a) - u(r)) * (u(t) - u(r))), o += s * h), o
                    }, getValueForPixel: function (t) {
                        var n, o, r, a, s = this, l = s.options.ticks.reverse, c = i.log10,
                            u = s._getFirstTickValue(s.minNotZero);
                        if (l ? (o = s.end, r = s.start) : (o = s.start, r = s.end), s.isHorizontal() ? (n = s.width, a = l ? s.right - t : t - s.left) : (n = s.height, a = l ? t - s.top : s.bottom - t), a !== o) {
                            if (0 === o) {
                                var d = i.getValueOrDefault(s.options.ticks.fontSize, e.defaults.global.defaultFontSize);
                                a -= d, n -= d, o = u
                            }
                            a *= c(r) - c(o), a /= n, a = Math.pow(10, c(o) + a)
                        }
                        return a
                    }
                });
                r.registerScaleType("logarithmic", n, t)
            }
        }, {33: 33, 34: 34, 35: 35, 46: 46}], 58: [function (e, t, n) {
            "use strict";
            var i = e(26), o = e(46), r = e(34), a = e(35);
            t.exports = function (e) {
                var t = i.global, n = {
                    display: !0,
                    animate: !0,
                    position: "chartArea",
                    angleLines: {display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1},
                    gridLines: {circular: !1},
                    ticks: {
                        showLabelBackdrop: !0,
                        backdropColor: "rgba(255,255,255,0.75)",
                        backdropPaddingY: 2,
                        backdropPaddingX: 2,
                        callback: a.formatters.linear
                    },
                    pointLabels: {
                        display: !0, fontSize: 10, callback: function (e) {
                            return e
                        }
                    }
                };

                function s(e) {
                    var t = e.options;
                    return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
                }

                function l(e) {
                    var n = e.options.pointLabels, i = o.valueOrDefault(n.fontSize, t.defaultFontSize),
                        r = o.valueOrDefault(n.fontStyle, t.defaultFontStyle),
                        a = o.valueOrDefault(n.fontFamily, t.defaultFontFamily);
                    return {size: i, style: r, family: a, font: o.fontString(i, r, a)}
                }

                function c(e, t, n, i, o) {
                    return e === i || e === o ? {start: t - n / 2, end: t + n / 2} : e < i || e > o ? {
                        start: t - n - 5,
                        end: t
                    } : {start: t, end: t + n + 5}
                }

                function u(e) {
                    return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
                }

                function d(e, t, n, i) {
                    if (o.isArray(t)) for (var r = n.y, a = 1.5 * i, s = 0; s < t.length; ++s) e.fillText(t[s], n.x, r), r += a; else e.fillText(t, n.x, n.y)
                }

                function h(e, t, n) {
                    90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h)
                }

                function f(e) {
                    return o.isNumber(e) ? e : 0
                }

                var p = e.LinearScaleBase.extend({
                    setDimensions: function () {
                        var e = this, n = e.options, i = n.ticks;
                        e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
                        var r = o.min([e.height, e.width]), a = o.valueOrDefault(i.fontSize, t.defaultFontSize);
                        e.drawingArea = n.display ? r / 2 - (a / 2 + i.backdropPaddingY) : r / 2
                    }, determineDataLimits: function () {
                        var e = this, t = e.chart, n = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
                        o.each(t.data.datasets, function (r, a) {
                            if (t.isDatasetVisible(a)) {
                                var s = t.getDatasetMeta(a);
                                o.each(r.data, function (t, o) {
                                    var r = +e.getRightValue(t);
                                    isNaN(r) || s.data[o].hidden || (n = Math.min(r, n), i = Math.max(r, i))
                                })
                            }
                        }), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = i === Number.NEGATIVE_INFINITY ? 0 : i, e.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var e = this.options.ticks, n = o.valueOrDefault(e.fontSize, t.defaultFontSize);
                        return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)))
                    }, convertTicksToLabels: function () {
                        var t = this;
                        e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                    }, getLabelForIndex: function (e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    }, fit: function () {
                        var e, t;
                        this.options.pointLabels.display ? function (e) {
                            var t, n, i, r = l(e), a = Math.min(e.height / 2, e.width / 2),
                                u = {r: e.width, l: 0, t: e.height, b: 0}, d = {};
                            e.ctx.font = r.font, e._pointLabelSizes = [];
                            var h, f, p, g = s(e);
                            for (t = 0; t < g; t++) {
                                i = e.getPointPosition(t, a), h = e.ctx, f = r.size, p = e.pointLabels[t] || "", n = o.isArray(p) ? {
                                    w: o.longestText(h, h.font, p),
                                    h: p.length * f + 1.5 * (p.length - 1) * f
                                } : {w: h.measureText(p).width, h: f}, e._pointLabelSizes[t] = n;
                                var m = e.getIndexAngle(t), v = o.toDegrees(m) % 360, y = c(v, i.x, n.w, 0, 180),
                                    b = c(v, i.y, n.h, 90, 270);
                                y.start < u.l && (u.l = y.start, d.l = m), y.end > u.r && (u.r = y.end, d.r = m), b.start < u.t && (u.t = b.start, d.t = m), b.end > u.b && (u.b = b.end, d.b = m)
                            }
                            e.setReductions(a, u, d)
                        }(this) : (e = this, t = Math.min(e.height / 2, e.width / 2), e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0))
                    }, setReductions: function (e, t, n) {
                        var i = t.l / Math.sin(n.l), o = Math.max(t.r - this.width, 0) / Math.sin(n.r),
                            r = -t.t / Math.cos(n.t), a = -Math.max(t.b - this.height, 0) / Math.cos(n.b);
                        i = f(i), o = f(o), r = f(r), a = f(a), this.drawingArea = Math.min(Math.round(e - (i + o) / 2), Math.round(e - (r + a) / 2)), this.setCenterPoint(i, o, r, a)
                    }, setCenterPoint: function (e, t, n, i) {
                        var o = this, r = o.width - t - o.drawingArea, a = e + o.drawingArea, s = n + o.drawingArea,
                            l = o.height - i - o.drawingArea;
                        o.xCenter = Math.round((a + r) / 2 + o.left), o.yCenter = Math.round((s + l) / 2 + o.top)
                    }, getIndexAngle: function (e) {
                        return e * (2 * Math.PI / s(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    }, getDistanceFromCenterForValue: function (e) {
                        var t = this;
                        if (null === e) return 0;
                        var n = t.drawingArea / (t.max - t.min);
                        return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n
                    }, getPointPosition: function (e, t) {
                        var n = this.getIndexAngle(e) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(n) * t) + this.xCenter,
                            y: Math.round(Math.sin(n) * t) + this.yCenter
                        }
                    }, getPointPositionForValue: function (e, t) {
                        return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
                    }, getBasePosition: function () {
                        var e = this.min, t = this.max;
                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0)
                    }, draw: function () {
                        var e = this, n = e.options, i = n.gridLines, r = n.ticks, a = o.valueOrDefault;
                        if (n.display) {
                            var c = e.ctx, f = this.getIndexAngle(0), p = a(r.fontSize, t.defaultFontSize),
                                g = a(r.fontStyle, t.defaultFontStyle), m = a(r.fontFamily, t.defaultFontFamily),
                                v = o.fontString(p, g, m);
                            o.each(e.ticks, function (n, l) {
                                if (l > 0 || r.reverse) {
                                    var u = e.getDistanceFromCenterForValue(e.ticksAsNumbers[l]);
                                    if (i.display && 0 !== l && function (e, t, n, i) {
                                        var r = e.ctx;
                                        if (r.strokeStyle = o.valueAtIndexOrDefault(t.color, i - 1), r.lineWidth = o.valueAtIndexOrDefault(t.lineWidth, i - 1), e.options.gridLines.circular) r.beginPath(), r.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI), r.closePath(), r.stroke(); else {
                                            var a = s(e);
                                            if (0 === a) return;
                                            r.beginPath();
                                            var l = e.getPointPosition(0, n);
                                            r.moveTo(l.x, l.y);
                                            for (var c = 1; c < a; c++) l = e.getPointPosition(c, n), r.lineTo(l.x, l.y);
                                            r.closePath(), r.stroke()
                                        }
                                    }(e, i, u, l), r.display) {
                                        var d = a(r.fontColor, t.defaultFontColor);
                                        if (c.font = v, c.save(), c.translate(e.xCenter, e.yCenter), c.rotate(f), r.showLabelBackdrop) {
                                            var h = c.measureText(n).width;
                                            c.fillStyle = r.backdropColor, c.fillRect(-h / 2 - r.backdropPaddingX, -u - p / 2 - r.backdropPaddingY, h + 2 * r.backdropPaddingX, p + 2 * r.backdropPaddingY)
                                        }
                                        c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = d, c.fillText(n, 0, -u), c.restore()
                                    }
                                }
                            }), (n.angleLines.display || n.pointLabels.display) && function (e) {
                                var n = e.ctx, i = e.options, r = i.angleLines, a = i.pointLabels;
                                n.lineWidth = r.lineWidth, n.strokeStyle = r.color;
                                var c = e.getDistanceFromCenterForValue(i.ticks.reverse ? e.min : e.max), f = l(e);
                                n.textBaseline = "top";
                                for (var p = s(e) - 1; p >= 0; p--) {
                                    if (r.display) {
                                        var g = e.getPointPosition(p, c);
                                        n.beginPath(), n.moveTo(e.xCenter, e.yCenter), n.lineTo(g.x, g.y), n.stroke(), n.closePath()
                                    }
                                    if (a.display) {
                                        var m = e.getPointPosition(p, c + 5),
                                            v = o.valueAtIndexOrDefault(a.fontColor, p, t.defaultFontColor);
                                        n.font = f.font, n.fillStyle = v;
                                        var y = e.getIndexAngle(p), b = o.toDegrees(y);
                                        n.textAlign = u(b), h(b, e._pointLabelSizes[p], m), d(n, e.pointLabels[p] || "", m, f.size)
                                    }
                                }
                            }(e)
                        }
                    }
                });
                r.registerScaleType("radialLinear", p, n)
            }
        }, {26: 26, 34: 34, 35: 35, 46: 46}], 59: [function (e, t, n) {
            "use strict";
            var i = e(1);
            i = "function" == typeof i ? i : window.moment;
            var o = e(26), r = e(46), a = e(33), s = e(34), l = Number.MIN_SAFE_INTEGER || -9007199254740991,
                c = Number.MAX_SAFE_INTEGER || 9007199254740991, u = {
                    millisecond: {common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]},
                    second: {common: !0, size: 1e3, steps: [1, 2, 5, 10, 15, 30]},
                    minute: {common: !0, size: 6e4, steps: [1, 2, 5, 10, 15, 30]},
                    hour: {common: !0, size: 36e5, steps: [1, 2, 3, 6, 12]},
                    day: {common: !0, size: 864e5, steps: [1, 2, 5]},
                    week: {common: !1, size: 6048e5, steps: [1, 2, 3, 4]},
                    month: {common: !0, size: 2628e6, steps: [1, 2, 3]},
                    quarter: {common: !1, size: 7884e6, steps: [1, 2, 3, 4]},
                    year: {common: !0, size: 3154e7}
                }, d = Object.keys(u);

            function h(e, t) {
                return e - t
            }

            function f(e) {
                var t, n, i, o = {}, r = [];
                for (t = 0, n = e.length; t < n; ++t) o[i = e[t]] || (o[i] = !0, r.push(i));
                return r
            }

            function p(e, t, n, i) {
                var o = function (e, t, n) {
                        for (var i, o, r, a = 0, s = e.length - 1; a >= 0 && a <= s;) {
                            if (o = e[(i = a + s >> 1) - 1] || null, r = e[i], !o) return {lo: null, hi: r};
                            if (r[t] < n) a = i + 1; else {
                                if (!(o[t] > n)) return {lo: o, hi: r};
                                s = i - 1
                            }
                        }
                        return {lo: r, hi: null}
                    }(e, t, n), r = o.lo ? o.hi ? o.lo : e[e.length - 2] : e[0],
                    a = o.lo ? o.hi ? o.hi : e[e.length - 1] : e[1], s = a[t] - r[t], l = s ? (n - r[t]) / s : 0,
                    c = (a[i] - r[i]) * l;
                return r[i] + c
            }

            function g(e, t) {
                var n = t.parser, o = t.parser || t.format;
                return "function" == typeof n ? n(e) : "string" == typeof e && "string" == typeof o ? i(e, o) : (e instanceof i || (e = i(e)), e.isValid() ? e : "function" == typeof o ? o(e) : e)
            }

            function m(e, t) {
                if (r.isNullOrUndef(e)) return null;
                var n = t.options.time, i = g(t.getRightValue(e), n);
                return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null
            }

            function v(e) {
                for (var t = d.indexOf(e) + 1, n = d.length; t < n; ++t) if (u[d[t]].common) return d[t]
            }

            function y(e, t, n, o) {
                var a, s = o.time, l = s.unit || function (e, t, n, i) {
                        var o, r, a, s = d.length;
                        for (o = d.indexOf(e); o < s - 1; ++o) if (a = (r = u[d[o]]).steps ? r.steps[r.steps.length - 1] : c, r.common && Math.ceil((n - t) / (a * r.size)) <= i) return d[o];
                        return d[s - 1]
                    }(s.minUnit, e, t, n), h = v(l), f = r.valueOrDefault(s.stepSize, s.unitStepSize),
                    p = "week" === l && s.isoWeekday, g = o.ticks.major.enabled, m = u[l], y = i(e), b = i(t), x = [];
                for (f || (f = function (e, t, n, i) {
                    var o, r, a, s = t - e, l = u[n], c = l.size, d = l.steps;
                    if (!d) return Math.ceil(s / (i * c));
                    for (o = 0, r = d.length; o < r && (a = d[o], !(Math.ceil(s / (c * a)) <= i)); ++o) ;
                    return a
                }(e, t, l, n)), p && (y = y.isoWeekday(p), b = b.isoWeekday(p)), y = y.startOf(p ? "day" : l), (b = b.startOf(p ? "day" : l)) < t && b.add(1, l), a = i(y), g && h && !p && !s.round && (a.startOf(h), a.add(~~((y - a) / (m.size * f)) * f, l)); a < b; a.add(f, l)) x.push(+a);
                return x.push(+a), x
            }

            t.exports = function () {
                var e = a.extend({
                    initialize: function () {
                        if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), a.prototype.initialize.call(this)
                    }, update: function () {
                        var e = this.options;
                        return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), a.prototype.update.apply(this, arguments)
                    }, getRightValue: function (e) {
                        return e && void 0 !== e.t && (e = e.t), a.prototype.getRightValue.call(this, e)
                    }, determineDataLimits: function () {
                        var e, t, n, o, a, s, u = this, d = u.chart, p = u.options.time, g = p.unit || "day", v = c,
                            y = l, b = [], x = [], w = [];
                        for (e = 0, n = d.data.labels.length; e < n; ++e) w.push(m(d.data.labels[e], u));
                        for (e = 0, n = (d.data.datasets || []).length; e < n; ++e) if (d.isDatasetVisible(e)) if (a = d.data.datasets[e].data, r.isObject(a[0])) for (x[e] = [], t = 0, o = a.length; t < o; ++t) s = m(a[t], u), b.push(s), x[e][t] = s; else b.push.apply(b, w), x[e] = w.slice(0); else x[e] = [];
                        w.length && (w = f(w).sort(h), v = Math.min(v, w[0]), y = Math.max(y, w[w.length - 1])), b.length && (b = f(b).sort(h), v = Math.min(v, b[0]), y = Math.max(y, b[b.length - 1])), v = m(p.min, u) || v, y = m(p.max, u) || y, v = v === c ? +i().startOf(g) : v, y = y === l ? +i().endOf(g) + 1 : y, u.min = Math.min(v, y), u.max = Math.max(v + 1, y), u._horizontal = u.isHorizontal(), u._table = [], u._timestamps = {
                            data: b,
                            datasets: x,
                            labels: w
                        }
                    }, buildTicks: function () {
                        var e, t, n, o = this, r = o.min, a = o.max, s = o.options, l = s.time, c = [], h = [];
                        switch (s.ticks.source) {
                            case"data":
                                c = o._timestamps.data;
                                break;
                            case"labels":
                                c = o._timestamps.labels;
                                break;
                            case"auto":
                            default:
                                c = y(r, a, o.getLabelCapacity(r), s)
                        }
                        for ("ticks" === s.bounds && c.length && (r = c[0], a = c[c.length - 1]), r = m(l.min, o) || r, a = m(l.max, o) || a, e = 0, t = c.length; e < t; ++e) (n = c[e]) >= r && n <= a && h.push(n);
                        return o.min = r, o.max = a, o._unit = l.unit || function (e, t, n, o) {
                            var r, a, s = i.duration(i(o).diff(i(n)));
                            for (r = d.length - 1; r >= d.indexOf(t); r--) if (a = d[r], u[a].common && s.as(a) >= e.length) return a;
                            return d[t ? d.indexOf(t) : 0]
                        }(h, l.minUnit, o.min, o.max), o._majorUnit = v(o._unit), o._table = function (e, t, n, i) {
                            if ("linear" === i || !e.length) return [{time: t, pos: 0}, {time: n, pos: 1}];
                            var o, r, a, s, l, c = [], u = [t];
                            for (o = 0, r = e.length; o < r; ++o) (s = e[o]) > t && s < n && u.push(s);
                            for (u.push(n), o = 0, r = u.length; o < r; ++o) l = u[o + 1], a = u[o - 1], s = u[o], void 0 !== a && void 0 !== l && Math.round((l + a) / 2) === s || c.push({
                                time: s,
                                pos: o / (r - 1)
                            });
                            return c
                        }(o._timestamps.data, r, a, s.distribution), o._offsets = function (e, t, n, i, o) {
                            var r, a, s = 0, l = 0;
                            return o.offset && t.length && (o.time.min || (r = t.length > 1 ? t[1] : i, a = t[0], s = (p(e, "time", r, "pos") - p(e, "time", a, "pos")) / 2), o.time.max || (r = t[t.length - 1], a = t.length > 1 ? t[t.length - 2] : n, l = (p(e, "time", r, "pos") - p(e, "time", a, "pos")) / 2)), {
                                left: s,
                                right: l
                            }
                        }(o._table, h, r, a, s), o._labelFormat = function (e, t) {
                            var n, i, o, r = e.length;
                            for (n = 0; n < r; n++) {
                                if (0 !== (i = g(e[n], t)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                0 === i.second() && 0 === i.minute() && 0 === i.hour() || (o = !0)
                            }
                            return o ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                        }(o._timestamps.data, l), function (e, t) {
                            var n, o, r, a, s = [];
                            for (n = 0, o = e.length; n < o; ++n) r = e[n], a = !!t && r === +i(r).startOf(t), s.push({
                                value: r,
                                major: a
                            });
                            return s
                        }(h, o._majorUnit)
                    }, getLabelForIndex: function (e, t) {
                        var n = this.chart.data, i = this.options.time,
                            o = n.labels && e < n.labels.length ? n.labels[e] : "", a = n.datasets[t].data[e];
                        return r.isObject(a) && (o = this.getRightValue(a)), i.tooltipFormat ? g(o, i).format(i.tooltipFormat) : "string" == typeof o ? o : g(o, i).format(this._labelFormat)
                    }, tickFormatFunction: function (e, t, n, i) {
                        var o = this.options, a = e.valueOf(), s = o.time.displayFormats, l = s[this._unit],
                            c = this._majorUnit, u = s[c], d = e.clone().startOf(c).valueOf(), h = o.ticks.major,
                            f = h.enabled && c && u && a === d, p = e.format(i || (f ? u : l)),
                            g = f ? h : o.ticks.minor, m = r.valueOrDefault(g.callback, g.userCallback);
                        return m ? m(p, t, n) : p
                    }, convertTicksToLabels: function (e) {
                        var t, n, o = [];
                        for (t = 0, n = e.length; t < n; ++t) o.push(this.tickFormatFunction(i(e[t].value), t, e));
                        return o
                    }, getPixelForOffset: function (e) {
                        var t = this, n = t._horizontal ? t.width : t.height, i = t._horizontal ? t.left : t.top,
                            o = p(t._table, "time", e, "pos");
                        return i + n * (t._offsets.left + o) / (t._offsets.left + 1 + t._offsets.right)
                    }, getPixelForValue: function (e, t, n) {
                        var i = null;
                        if (void 0 !== t && void 0 !== n && (i = this._timestamps.datasets[n][t]), null === i && (i = m(e, this)), null !== i) return this.getPixelForOffset(i)
                    }, getPixelForTick: function (e) {
                        var t = this.getTicks();
                        return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
                    }, getValueForPixel: function (e) {
                        var t = this, n = t._horizontal ? t.width : t.height, o = t._horizontal ? t.left : t.top,
                            r = (n ? (e - o) / n : 0) * (t._offsets.left + 1 + t._offsets.left) - t._offsets.right,
                            a = p(t._table, "pos", r, "time");
                        return i(a)
                    }, getLabelWidth: function (e) {
                        var t = this.options.ticks, n = this.ctx.measureText(e).width, i = r.toRadians(t.maxRotation),
                            a = Math.cos(i), s = Math.sin(i);
                        return n * a + r.valueOrDefault(t.fontSize, o.global.defaultFontSize) * s
                    }, getLabelCapacity: function (e) {
                        var t = this, n = t.options.time.displayFormats.millisecond,
                            o = t.tickFormatFunction(i(e), 0, [], n), r = t.getLabelWidth(o),
                            a = t.isHorizontal() ? t.width : t.height, s = Math.floor(a / r);
                        return s > 0 ? s : 1
                    }
                });
                s.registerScaleType("time", e, {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {autoSkip: !1, source: "auto", major: {enabled: !1}}
                })
            }
        }, {1: 1, 26: 26, 33: 33, 34: 34, 46: 46}]
    }, {}, [7])(7)
}), function (e) {
    WOW = function () {
        return {
            init: function () {
                var t = [], n = 1;

                function i() {
                    var n = window.innerHeight, i = window.scrollY;
                    e(".wow").each(function () {
                        if ("visible" != e(this).css("visibility") && (n + i - 100 > o(this) && i < o(this) || n + i - 100 > o(this) + e(this).height() && i < o(this) + e(this).height() || n + i == e(document).height() && o(this) + 100 > e(document).height())) {
                            var r = e(this).index(".wow"), a = e(this).attr("data-wow-delay");
                            if (a) {
                                a = e(this).attr("data-wow-delay").slice(0, -1);
                                var s = this;
                                parseFloat(a);
                                e(s).addClass("animated"), e(s).css({visibility: "visible"}), e(s).css({"animation-delay": a}), e(s).css({"animation-name": t[r]});
                                var l = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                e(this).attr("data-wow-delay") && (l += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                s = this;
                                setTimeout(function () {
                                    e(s).removeClass("animated")
                                }, l)
                            } else {
                                e(this).addClass("animated"), e(this).css({visibility: "visible"}), e(this).css({"animation-name": t[r]});
                                l = 1e3 * e(this).css("animation-duration").slice(0, -1), s = this;
                                setTimeout(function () {
                                    e(s).removeClass("animated")
                                }, l)
                            }
                        }
                    })
                }

                function o(e) {
                    var t = e.getBoundingClientRect(), n = document.body, i = document.documentElement,
                        o = window.pageYOffset || i.scrollTop || n.scrollTop, r = i.clientTop || n.clientTop || 0,
                        a = t.top + o - r;
                    return Math.round(a)
                }

                e(".wow").each(function () {
                    e(this).css({visibility: "hidden"}), t[e(this).index(".wow")] = e(this).css("animation-name"), e(this).css({"animation-name": "none"})
                }), e(window).scroll(function () {
                    var t, r;
                    n ? (t = window.innerHeight, r = window.scrollY, e(".wow.animated").each(function () {
                        if (t + r - 100 > o(this) && r > o(this) + 100 || t + r - 100 < o(this) && r < o(this) + 100 || o(this) + e(this).height > e(document).height() - 100) e(this).removeClass("animated"), e(this).css({"animation-name": "none"}), e(this).css({visibility: "hidden"}); else {
                            var n = 1e3 * e(this).css("animation-duration").slice(0, -1);
                            e(this).attr("data-wow-delay") && (n += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                            var i = this;
                            setTimeout(function () {
                                e(i).removeClass("animated")
                            }, n)
                        }
                    }), i(), n--) : i()
                }), e(".wow").each(function () {
                    var n = e(this).index(".wow"), i = e(this).attr("data-wow-delay");
                    i ? (i = e(this).attr("data-wow-delay").slice(0, -1), parseFloat(i), e(this).addClass("animated"), e(this).css({visibility: "visible"}), e(this).css({"animation-delay": i + "s"}), e(this).css({"animation-name": t[n]})) : (e(this).addClass("animated"), e(this).css({visibility: "visible"}), e(this).css({"animation-name": t[n]}))
                })
            }
        }
    }
}(jQuery), function (e) {
    e(window).on("scroll", function () {
        var t = e(".navbar");
        t.length && (t.offset().top > 50 ? e(".scrolling-navbar").addClass("top-nav-collapse") : e(".scrolling-navbar").removeClass("top-nav-collapse"))
    })
}(jQuery), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function () {
        return e.Waves = t.call(e), e.Waves
    }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
}("object" == typeof global ? global : this, function () {
    "use strict";
    var e = e || {}, t = document.querySelectorAll.bind(document), n = Object.prototype.toString,
        i = "ontouchstart" in window;

    function o(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }

    function r(e) {
        var i, r = n.call(e);
        return "[object String]" === r ? t(e) : o(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r) && e.hasOwnProperty("length") ? e : o(i = e) && i.nodeType > 0 ? [e] : []
    }

    function a(e) {
        var t, n, i = {top: 0, left: 0}, o = e && e.ownerDocument;
        return t = o.documentElement, void 0 !== e.getBoundingClientRect && (i = e.getBoundingClientRect()), n = function (e) {
            return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
            var t
        }(o), {top: i.top + n.pageYOffset - t.clientTop, left: i.left + n.pageXOffset - t.clientLeft}
    }

    function s(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
        return t
    }

    var l = {
        duration: 750, delay: 200, show: function (e, t, n) {
            if (2 === e.button) return !1;
            t = t || this;
            var i = document.createElement("div");
            i.className = "waves-ripple waves-rippling", t.appendChild(i);
            var o = a(t), r = 0, c = 0;
            "touches" in e && e.touches.length ? (r = e.touches[0].pageY - o.top, c = e.touches[0].pageX - o.left) : (r = e.pageY - o.top, c = e.pageX - o.left), c = c >= 0 ? c : 0, r = r >= 0 ? r : 0;
            var u = "scale(" + t.clientWidth / 100 * 3 + ")", d = "translate(0,0)";
            n && (d = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", c), i.setAttribute("data-y", r), i.setAttribute("data-scale", u), i.setAttribute("data-translate", d);
            var h = {top: r + "px", left: c + "px"};
            i.classList.add("waves-notransition"), i.setAttribute("style", s(h)), i.classList.remove("waves-notransition"), h["-webkit-transform"] = u + " " + d, h["-moz-transform"] = u + " " + d, h["-ms-transform"] = u + " " + d, h["-o-transform"] = u + " " + d, h.transform = u + " " + d, h.opacity = "1";
            var f = "mousemove" === e.type ? 2500 : l.duration;
            h["-webkit-transition-duration"] = f + "ms", h["-moz-transition-duration"] = f + "ms", h["-o-transition-duration"] = f + "ms", h["transition-duration"] = f + "ms", i.setAttribute("style", s(h))
        }, hide: function (e, t) {
            for (var n = (t = t || this).getElementsByClassName("waves-rippling"), o = 0, r = n.length; o < r; o++) u(e, t, n[o]);
            i && (t.removeEventListener("touchend", l.hide), t.removeEventListener("touchcancel", l.hide)), t.removeEventListener("mouseup", l.hide), t.removeEventListener("mouseleave", l.hide)
        }
    }, c = {
        input: function (e) {
            var t = e.parentNode;
            if ("span" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                var n = document.createElement("span");
                n.className = "waves-input-wrapper", t.replaceChild(n, e), n.appendChild(e)
            }
        }, img: function (e) {
            var t = e.parentNode;
            if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                t.replaceChild(n, e), n.appendChild(e)
            }
        }
    };

    function u(e, t, n) {
        if (n) {
            n.classList.remove("waves-rippling");
            var i = n.getAttribute("data-x"), o = n.getAttribute("data-y"), r = n.getAttribute("data-scale"),
                a = n.getAttribute("data-translate"), c = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
            c < 0 && (c = 0), "mousemove" === e.type && (c = 150);
            var u = "mousemove" === e.type ? 2500 : l.duration;
            setTimeout(function () {
                var e = {
                    top: o + "px",
                    left: i + "px",
                    opacity: "0",
                    "-webkit-transition-duration": u + "ms",
                    "-moz-transition-duration": u + "ms",
                    "-o-transition-duration": u + "ms",
                    "transition-duration": u + "ms",
                    "-webkit-transform": r + " " + a,
                    "-moz-transform": r + " " + a,
                    "-ms-transform": r + " " + a,
                    "-o-transform": r + " " + a,
                    transform: r + " " + a
                };
                n.setAttribute("style", s(e)), setTimeout(function () {
                    try {
                        t.removeChild(n)
                    } catch (e) {
                        return !1
                    }
                }, u)
            }, c)
        }
    }

    var d = {
        touches: 0, allowEvent: function (e) {
            var t = !0;
            return /^(mousedown|mousemove)$/.test(e.type) && d.touches && (t = !1), t
        }, registerEvent: function (e) {
            var t = e.type;
            "touchstart" === t ? d.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function () {
                d.touches && (d.touches -= 1)
            }, 500)
        }
    };

    function h(e) {
        var t = function (e) {
            if (!1 === d.allowEvent(e)) return null;
            for (var t = null, n = e.target || e.srcElement; n.parentElement;) {
                if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                    t = n;
                    break
                }
                n = n.parentElement
            }
            return t
        }(e);
        if (null !== t) {
            if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
            if (d.registerEvent(e), "touchstart" === e.type && l.delay) {
                var n = !1, o = setTimeout(function () {
                    o = null, l.show(e, t)
                }, l.delay), r = function (i) {
                    o && (clearTimeout(o), o = null, l.show(e, t)), n || (n = !0, l.hide(i, t)), s()
                }, a = function (e) {
                    o && (clearTimeout(o), o = null), r(e), s()
                };
                t.addEventListener("touchmove", a, !1), t.addEventListener("touchend", r, !1), t.addEventListener("touchcancel", r, !1);
                var s = function () {
                    t.removeEventListener("touchmove", a), t.removeEventListener("touchend", r), t.removeEventListener("touchcancel", r)
                }
            } else l.show(e, t), i && (t.addEventListener("touchend", l.hide, !1), t.addEventListener("touchcancel", l.hide, !1)), t.addEventListener("mouseup", l.hide, !1), t.addEventListener("mouseleave", l.hide, !1)
        }
    }

    return e.init = function (e) {
        var t = document.body;
        "duration" in (e = e || {}) && (l.duration = e.duration), "delay" in e && (l.delay = e.delay), i && (t.addEventListener("touchstart", h, !1), t.addEventListener("touchcancel", d.registerEvent, !1), t.addEventListener("touchend", d.registerEvent, !1)), t.addEventListener("mousedown", h, !1)
    }, e.attach = function (e, t) {
        var i, o;
        e = r(e), "[object Array]" === n.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
        for (var a = 0, s = e.length; a < s; a++) o = (i = e[a]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (c[o](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + t)
    }, e.ripple = function (e, t) {
        var n = (e = r(e)).length;
        if ((t = t || {}).wait = t.wait || 0, t.position = t.position || null, n) for (var i, o, s, c = {}, u = 0, d = {
            type: "mousedown",
            button: 1
        }, h = function (e, t) {
            return function () {
                l.hide(e, t)
            }
        }; u < n; u++) if (i = e[u], o = t.position || {
            x: i.clientWidth / 2,
            y: i.clientHeight / 2
        }, s = a(i), c.x = s.left + o.x, c.y = s.top + o.y, d.pageX = c.x, d.pageY = c.y, l.show(d, i), t.wait >= 0 && null !== t.wait) {
            setTimeout(h({type: "mouseup", button: 1}, i), t.wait)
        }
    }, e.calm = function (e) {
        for (var t = {type: "mouseup", button: 1}, n = 0, i = (e = r(e)).length; n < i; n++) l.hide(t, e[n])
    }, e.displayEffect = function (t) {
        console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), e.init(t)
    }, e
}), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init();
var _this = void 0;
!function (e) {
    var t, n,
        i = "".concat(["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function (e) {
            return "input[type=".concat(e, "]")
        }).join(", "), ", textarea"), o = function (e) {
            var t = e.siblings("label, i"), n = e.val().length, i = e.attr("placeholder");
            t["".concat(n || i ? "add" : "remove", "Class")]("active")
        }, r = function (e) {
            if (e.hasClass("validate")) {
                var t = e.val(), n = !t.length, i = !e[0].validity.badInput;
                if (n && i) e.removeClass("valid").removeClass("invalid"); else {
                    var o = e.is(":valid"), r = Number(e.attr("length")) || 0;
                    o && (!r || r > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
                }
            }
        }, a = function () {
            var t = e(_this);
            if (t.val().length) {
                var n = e(".hiddendiv"), i = t.css("font-family"), o = t.css("font-size");
                o && n.css("font-size", o), i && n.css("font-family", i), "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text("".concat(t.val(), "\n"));
                var r = n.html().replace(/\n/g, "<br>");
                n.html(r), n.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", n.height())
            }
        };
    e(i).each(function (t, n) {
        var i = e(n), r = i.siblings("label, i");
        o(i), n.validity.badInput && r.addClass("active")
    }), e(document).on("focus", i, function (t) {
        e(t.target).siblings("label, i").addClass("active")
    }), e(document).on("blur", i, function (t) {
        var n = e(t.target), i = !n.val(), o = !t.target.validity.badInput, a = void 0 === n.attr("placeholder");
        i && o && a && n.siblings("label, i").removeClass("active"), r(n)
    }), e(document).on("change", i, function (t) {
        var n = e(t.target);
        o(n), r(n)
    }), e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("reset", function (t) {
        var n = e(t.target);
        n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid").each(function (t, n) {
            var i = e(n), o = !i.val(), r = !i.attr("placeholder");
            o && r && i.siblings("label, i").removeClass("active")
        }), n.find("select.initialized").each(function (t, n) {
            var i = e(n), o = i.siblings("input.select-dropdown"), r = i.children("[selected]").val();
            i.val(r), o.val(r)
        }))
    }), (n = e(".md-textarea-auto")).length && (t = window.attachEvent ? function (e, t, n) {
        e.attachEvent("on".concat(t), n)
    } : function (e, t, n) {
        e.addEventListener(t, n, !1)
    }, n.each(function () {
        var e = this;

        function n() {
            e.style.height = "auto", e.style.height = "".concat(e.scrollHeight, "px")
        }

        function i() {
            window.setTimeout(n, 0)
        }

        t(e, "change", n), t(e, "cut", i), t(e, "paste", i), t(e, "drop", i), t(e, "keydown", i), n()
    }));
    var s = e("body");
    if (!e(".hiddendiv").first().length) {
        var l = e('<div class="hiddendiv common"></div>');
        s.append(l)
    }
    e(".materialize-textarea").each(a), s.on("keyup keydown", ".materialize-textarea", a)
}(jQuery), $(document).ready(function () {
    $("body").attr("aria-busy", !0), $("#preloader-markup").load("mdb-addons/preloader.html", function () {
        $(window).on("load", function () {
            $("#mdb-preloader").fadeOut("slow"), $("body").removeAttr("aria-busy")
        })
    })
}), function (e) {
    e(document).on("click.card", ".card", function (t) {
        if (e(this).find(".card-reveal").length) {
            var n = e(t.target), i = n.is(".card-reveal .card-title"), o = n.is(".card-reveal .card-title i"),
                r = n.is(".card .activator"), a = n.is(".card .activator i");
            i || o ? e(this).find(".card-reveal").velocity({translateY: 0}, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function () {
                    e(this).css({display: "none"})
                }
            }) : (r || a) && e(this).find(".card-reveal").css({display: "block"}).velocity("stop", !1).velocity({translateY: "-100%"}, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            })
        }
    }), e(".rotate-btn").on("click", function () {
        var t = e(this).attr("data-card");
        e("#".concat(t)).toggleClass("flipped")
    }), e(window).on("load", function () {
        var t = e(".front").outerHeight(), n = e(".back").outerHeight();
        t > n ? e(".card-wrapper, .back").height(t) : t > n ? e(".card-wrapper, .front").height(n) : e(".card-wrapper").height(n)
    }), e(".card-share > a").on("click", function (t) {
        t.preventDefault(), e(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")
    })
}(jQuery), $(".map-card").click(function () {
    $(".card-body").toggleClass("closed")
}), function (e) {
    function t() {
        var t = Number(e(this).attr("length")), n = Number(e(this).val().length), i = n <= t;
        e(this).parent().find('span[class="character-counter"]').html("".concat(n, "/").concat(t)), function (e, t) {
            var n = t.hasClass("invalid");
            e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"))
        }(i, e(this))
    }

    function n() {
        e(this).parent().find('span[class="character-counter"]').html("")
    }

    e.fn.characterCounter = function () {
        return this.each(function () {
            var i, o;
            void 0 !== e(this).attr("length") && (e(this).on("input", t), e(this).on("focus", t), e(this).on("blur", n), i = e(this), o = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), i.parent().append(o))
        })
    }, e(document).ready(function () {
        e("input, textarea").characterCounter()
    })
}(jQuery), function (e) {
    e(["jquery"], function (e) {
        return function () {
            var t, n, i, o = 0, r = {error: "error", info: "info", success: "success", warning: "warning"}, a = {
                clear: function (n, i) {
                    var o = d();
                    t || s(o);
                    l(n, o, i) || function (n) {
                        for (var i = t.children(), o = i.length - 1; o >= 0; o--) l(e(i[o]), n)
                    }(o)
                }, remove: function (n) {
                    var i = d();
                    t || s(i);
                    if (n && 0 === e(":focus", n).length) return void h(n);
                    t.children().length && t.remove()
                }, error: function (e, t, n) {
                    return u({
                        type: r.error,
                        iconClass: d().iconClasses.error,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }, getContainer: s, info: function (e, t, n) {
                    return u({
                        type: r.info,
                        iconClass: d().iconClasses.info,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }, options: {}, subscribe: function (e) {
                    n = e
                }, success: function (e, t, n) {
                    return u({
                        type: r.success,
                        iconClass: d().iconClasses.success,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }, version: "2.1.1", warning: function (e, t, n) {
                    return u({
                        type: r.warning,
                        iconClass: d().iconClasses.warning,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }
            };
            return a;

            function s(n, i) {
                return n || (n = d()), (t = e("#" + n.containerId)).length ? t : (i && (t = function (n) {
                    return (t = e("<div/>").attr("id", n.containerId).addClass(n.positionClass).attr("aria-live", "polite").attr("role", "alert")).appendTo(e(n.target)), t
                }(n)), t)
            }

            function l(t, n, i) {
                var o = !(!i || !i.force) && i.force;
                return !(!t || !o && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
                    duration: n.hideDuration,
                    easing: n.hideEasing,
                    complete: function () {
                        h(t)
                    }
                }), !0)
            }

            function c(e) {
                n && n(e)
            }

            function u(n) {
                var r = d(), a = n.iconClass || r.iconClass;
                if (void 0 !== n.optionsOverride && (r = e.extend(r, n.optionsOverride), a = n.optionsOverride.iconClass || a), !function (e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === i) return !0;
                        i = t.message
                    }
                    return !1
                }(r, n)) {
                    o++, t = s(r, !0);
                    var l = null, u = e("<div/>"), f = e("<div/>"), p = e("<div/>"), g = e("<div/>"),
                        m = e(r.closeHtml), v = {intervalId: null, hideEta: null, maxHideTime: null},
                        y = {toastId: o, state: "visible", startTime: new Date, options: r, map: n};
                    return n.iconClass && u.addClass(r.toastClass).addClass(a), n.title && (f.append(n.title).addClass(r.titleClass), u.append(f)), n.message && (p.append(n.message).addClass(r.messageClass), u.append(p)), r.closeButton && (m.addClass("md-toast-close-button").attr("role", "button"), u.prepend(m)), r.progressBar && (g.addClass("md-toast-progress"), u.prepend(g)), r.newestOnTop ? t.prepend(u) : t.append(u), u.hide(), u[r.showMethod]({
                        duration: r.showDuration,
                        easing: r.showEasing,
                        complete: r.onShown
                    }), r.timeOut > 0 && (l = setTimeout(b, r.timeOut), v.maxHideTime = parseFloat(r.timeOut), v.hideEta = (new Date).getTime() + v.maxHideTime, r.progressBar && (v.intervalId = setInterval(k, 10))), function () {
                        u.hover(w, x), !r.onclick && r.tapToDismiss && u.click(b);
                        r.closeButton && m && m.click(function (e) {
                            e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), b(!0)
                        });
                        r.onclick && u.click(function () {
                            r.onclick(), b()
                        })
                    }(), c(y), r.debug && console && console.log(y), u
                }

                function b(t) {
                    if (!e(":focus", u).length || t) return clearTimeout(v.intervalId), u[r.hideMethod]({
                        duration: r.hideDuration,
                        easing: r.hideEasing,
                        complete: function () {
                            h(u), r.onHidden && "hidden" !== y.state && r.onHidden(), y.state = "hidden", y.endTime = new Date, c(y)
                        }
                    })
                }

                function x() {
                    (r.timeOut > 0 || r.extendedTimeOut > 0) && (l = setTimeout(b, r.extendedTimeOut), v.maxHideTime = parseFloat(r.extendedTimeOut), v.hideEta = (new Date).getTime() + v.maxHideTime)
                }

                function w() {
                    clearTimeout(l), v.hideEta = 0, u.stop(!0, !0)[r.showMethod]({
                        duration: r.showDuration,
                        easing: r.showEasing
                    })
                }

                function k() {
                    var e = (v.hideEta - (new Date).getTime()) / v.maxHideTime * 100;
                    g.width(e + "%")
                }
            }

            function d() {
                return e.extend({}, {
                    tapToDismiss: !0,
                    toastClass: "md-toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "md-toast-error",
                        info: "md-toast-info",
                        success: "md-toast-success",
                        warning: "md-toast-warning"
                    },
                    iconClass: "md-toast-info",
                    positionClass: "md-toast-top-right",
                    timeOut: 5e3,
                    titleClass: "md-toast-title",
                    messageClass: "md-toast-message",
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1
                }, a.options)
            }

            function h(e) {
                t || (t = s()), e.is(":visible") || (e.remove(), e = null, 0 === t.children().length && (t.remove(), i = void 0))
            }
        }()
    })
}("function" == typeof define && define.amd ? define : function (e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
});
var SMOOTH_SCROLL_DURATION = 700;
$(".smooth-scroll").on("click", "a", function () {
    var e = $(this).attr("href");
    if (void 0 !== e && 0 === e.indexOf("#")) {
        var t = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
            n = $(this).parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");
        return $("body,html").animate({scrollTop: $(e).offset().top - t}, SMOOTH_SCROLL_DURATION), void 0 !== n && !1 !== n && history.replaceState(null, null, e), !1
    }
}), function (e) {
    e.fn.scrollTo = function (t) {
        return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
    }, e.fn.dropdown = function (t) {
        this.each(function () {
            var n = e(this), i = e.extend({}, e.fn.dropdown.defaults, t), o = !1,
                r = e("#".concat(n.attr("data-activates")));

            function a() {
                void 0 !== n.data("induration") && (i.inDuration = n.data("inDuration")), void 0 !== n.data("outduration") && (i.outDuration = n.data("outDuration")), void 0 !== n.data("constrainwidth") && (i.constrain_width = n.data("constrainwidth")), void 0 !== n.data("hover") && (i.hover = n.data("hover")), void 0 !== n.data("gutter") && (i.gutter = n.data("gutter")), void 0 !== n.data("beloworigin") && (i.belowOrigin = n.data("beloworigin")), void 0 !== n.data("alignment") && (i.alignment = n.data("alignment"))
            }

            function s(t) {
                "focus" === t && (o = !0), a(), r.addClass("active"), n.addClass("active"), !0 === i.constrain_width ? r.css("width", n.outerWidth()) : r.css("white-space", "nowrap");
                var s = window.innerHeight, l = n.innerHeight(), c = n.offset().left,
                    u = n.offset().top - e(window).scrollTop(), d = i.alignment, h = 0, f = 0, p = 0;
                !0 === i.belowOrigin && (p = l);
                var g = 0, m = n.parent();
                if (!m.is("body") && m[0].scrollHeight > m[0].clientHeight && (g = m[0].scrollTop), c + r.innerWidth() > e(window).width() ? d = "right" : c - r.innerWidth() + n.innerWidth() < 0 && (d = "left"), u + r.innerHeight() > s) if (u + l - r.innerHeight() < 0) {
                    var v = s - u - p;
                    r.css("max-height", v)
                } else p || (p += l), p -= r.innerHeight();
                if ("left" === d) h = i.gutter, f = n.position().left + h; else if ("right" === d) {
                    f = n.position().left + n.outerWidth() - r.outerWidth() + (h = -i.gutter)
                }
                r.css({
                    position: "absolute",
                    top: n.position().top + p + g,
                    left: f
                }), r.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: i.inDuration,
                    easing: "easeOutCubic",
                    complete: function () {
                        e(this).css("height", "")
                    }
                }).animate({opacity: 1, scrollTop: 0}, {queue: !1, duration: i.inDuration, easing: "easeOutSine"})
            }

            function l() {
                o = !1, r.fadeOut(i.outDuration), r.removeClass("active"), n.removeClass("active"), setTimeout(function () {
                    r.css("max-height", "")
                }, i.outDuration)
            }

            if (a(), n.after(r), i.hover) {
                var c = !1;
                n.unbind("click.".concat(n.attr("id"))), n.on("mouseenter", function () {
                    !1 === c && (s(), c = !0)
                }), n.on("mouseleave", function (t) {
                    var n = t.toElement || t.relatedTarget;
                    e(n).closest(".dropdown-content").is(r) || (r.stop(!0, !0), l(), c = !1)
                }), r.on("mouseleave", function (t) {
                    var i = t.toElement || t.relatedTarget;
                    e(i).closest(".dropdown-button").is(n) || (r.stop(!0, !0), l(), c = !1)
                })
            } else n.unbind("click.".concat(n.attr("id"))), n.bind("click.".concat(n.attr("id")), function (t) {
                o || (n[0] !== t.currentTarget || n.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? n.hasClass("active") && (l(), e(document).unbind("click.".concat(r.attr("id"), " touchstart.").concat(r.attr("id")))) : (t.preventDefault(), s("click")), r.hasClass("active") && e(document).bind("click.".concat(r.attr("id"), " touchstart.").concat(r.attr("id")), function (t) {
                    r.is(t.target) || n.is(t.target) || n.find(t.target).length || (l(), e(document).unbind("click.".concat(r.attr("id"), " touchstart.").concat(r.attr("id"))))
                }))
            });
            n.on("open", function (e, t) {
                s(t)
            }), n.on("close", l)
        })
    }, e.fn.dropdown.defaults = {
        inDuration: 300,
        outDuration: 225,
        constrain_width: !0,
        hover: !1,
        gutter: 0,
        belowOrigin: !1,
        alignment: "left"
    }, e(".dropdown-button").dropdown(), e.fn.mdbDropSearch = function (t) {
        var n = e(this).find("input");
        this.filter(function (t, i) {
            e(i).on("keyup", function () {
                for (var e = n.closest("div[id]").find("a, li"), t = 0; t < e.length; t++) e.eq(t).html().toUpperCase().indexOf(n.val().toUpperCase()) > -1 ? e.eq(t).css({display: ""}) : e.eq(t).css({display: "none"})
            })
        });
        var i = e.extend({
            color: "#000",
            backgroundColor: "",
            fontSize: ".9rem",
            fontWeight: "400",
            borderRadius: "",
            borderColor: ""
        }, t);
        return this.css({
            color: i.color,
            backgroundColor: i.backgroundColor,
            fontSize: i.fontSize,
            fontWeight: i.fontWeight,
            borderRadius: i.borderRadius,
            border: i.border,
            margin: i.margin
        })
    }
}(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");

function dropdownEffectData(e) {
    var t = "fadeIn", n = "fadeOut", i = $(e), o = $(".dropdown-menu", e), r = i.parents("ul.nav");
    return r.height > 0 && (t = r.data("dropdown-in") || null, n = r.data("dropdown-out") || null), {
        target: e,
        dropdown: i,
        dropdownMenu: o,
        effectIn: o.data("dropdown-in") || t,
        effectOut: o.data("dropdown-out") || n
    }
}

function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass(["animated", t].join(" ")))
}

function dropdownEffectEnd(e, t) {
    e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass(["animated", e.effectIn, e.effectOut].join(" ")), "function" == typeof t && t()
    })
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

dropdownSelectors.on({
    "show.bs.dropdown": function () {
        var e = dropdownEffectData(this);
        dropdownEffectStart(e, e.effectIn)
    }, "shown.bs.dropdown": function () {
        var e = dropdownEffectData(this);
        e.effectIn && e.effectOut && dropdownEffectEnd(e)
    }, "hide.bs.dropdown": function (e) {
        var t = dropdownEffectData(this);
        t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function () {
            t.dropdown.removeClass("show"), t.dropdownMenu.removeClass("show")
        }))
    }
}), function (e) {
    var t = this;
    e(document).ready(function () {
        e(document).on("mouseenter", ".fixed-action-btn", function () {
            var t = e(this);
            n(t)
        }), e(document).on("mouseleave", ".fixed-action-btn", function () {
            var t = e(this);
            i(t)
        }), e(document).on("click", ".fixed-action-btn > a", function () {
            var t = e(this).parent();
            t.hasClass("active") ? n(t) : i(t), t.hasClass("active") ? i(t) : n(t)
        })
    }), e.fn.extend({
        openFAB: function () {
            n(e(this))
        }, closeFAB: function () {
            i(e(this))
        }
    });
    var n = function (e) {
        var t = e;
        t.hasClass("active") || (t.addClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function (e) {
            e.classList.add("shown")
        }))
    }, i = function (e) {
        e.removeClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function (e) {
            e.classList.remove("shown")
        })
    };
    e(".fixed-action-btn:not(.smooth-scroll) > .btn-floating").on("click", function (o) {
        if (!e(t).hasClass("smooth-scroll")) return o.preventDefault(), r = e(".fixed-action-btn"), (a = r).hasClass("active") ? i(a) : n(a), !1;
        var r, a
    })
}(jQuery), function (e) {
    var t = 240, n = 1440, i = 300, o = 200, r = 50, a = 200, s = "easeOutQuad", l = "easeOutCubic", c = !0, u = !1,
        d = function () {
            function d(h, f) {
                _classCallCheck(this, d), this.defaults = {
                    MENU_WIDTH: t,
                    edge: "left",
                    closeOnClick: !1,
                    breakpoint: n,
                    timeDurationOpen: i,
                    timeDurationClose: o,
                    timeDurationOverlayOpen: r,
                    timeDurationOverlayClose: a,
                    easingOpen: s,
                    easingClose: l,
                    showOverlay: c,
                    showCloseButton: u
                }, this.$element = h, this.$elementCloned = h.clone().css({
                    display: "inline-block",
                    lineHeight: "24px"
                }), this.options = this.assignOptions(f), this.menuOut = !1, this.lastTouchVelocity = {
                    x: {
                        startPosition: 0,
                        startTime: 0,
                        endPosition: 0,
                        endTime: 0
                    }
                }, this.$body = e("body"), this.$menu = e("#".concat(this.$element.attr("data-activates"))), this.$sidenavOverlay = e("#sidenav-overlay"), this.$dragTarget = e('<div class="drag-target"></div>'), this.$body.append(this.$dragTarget), this.init()
            }

            return _createClass(d, [{
                key: "init", value: function () {
                    this.setMENU_WIDTH(), this.setMenuTranslation(), this.closeOnClick(), this.openOnClick(), this.bindTouchEvents(), this.showCloseButton(), this.inputOnClick()
                }
            }, {
                key: "bindTouchEvents", value: function () {
                    var e = this;
                    this.$dragTarget.on("click", function () {
                        e.removeMenu()
                    }), this.$elementCloned.on("click", function () {
                        e.removeMenu()
                    }), this.$dragTarget.on("touchstart", function (t) {
                        e.lastTouchVelocity.x.startPosition = t.touches[0].clientX, e.lastTouchVelocity.x.startTime = Date.now()
                    }), this.$dragTarget.on("touchmove", this.touchmoveEventHandler.bind(this)), this.$dragTarget.on("touchend", this.touchendEventHandler.bind(this))
                }
            }, {
                key: "touchmoveEventHandler", value: function (e) {
                    if ("touchmove" === e.type) {
                        var t = e.touches[0], n = t.clientX;
                        Date.now() - this.lastTouchVelocity.x.startTime > 20 && (this.lastTouchVelocity.x.startPosition = t.clientX, this.lastTouchVelocity.x.startTime = Date.now()), this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (n > this.options.MENU_WIDTH ? n = this.options.MENU_WIDTH : n < 0 && (n = 0)), this.translateSidenavX(n), this.updateOverlayOpacity(n)
                    }
                }
            }, {
                key: "panEventHandler", value: function (e) {
                    if ("touch" === e.gesture.pointerType) {
                        var t = e.gesture.center.x;
                        this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (t > this.options.MENU_WIDTH ? t = this.options.MENU_WIDTH : t < 0 && (t = 0)), this.translateSidenavX(t), this.updateOverlayOpacity(t)
                    }
                }
            }, {
                key: "translateSidenavX", value: function (e) {
                    if ("left" === this.options.edge) {
                        var t = e >= this.options.MENU_WIDTH / 2;
                        this.menuOut = t, this.$menu.css("transform", "translateX(".concat(e - this.options.MENU_WIDTH, "px)"))
                    } else {
                        var n = e < window.innerWidth - this.options.MENU_WIDTH / 2;
                        this.menuOut = n;
                        var i = e - this.options.MENU_WIDTH / 2;
                        i < 0 && (i = 0), this.$menu.css("transform", "translateX(".concat(i, "px)"))
                    }
                }
            }, {
                key: "updateOverlayOpacity", value: function (e) {
                    var t;
                    t = "left" === this.options.edge ? e / this.options.MENU_WIDTH : Math.abs((e - window.innerWidth) / this.options.MENU_WIDTH), this.$sidenavOverlay.velocity({opacity: t}, {
                        duration: 10,
                        queue: !1,
                        easing: this.options.easingOpen
                    })
                }
            }, {
                key: "buildSidenavOverlay", value: function () {
                    var t = this;
                    !0 === this.options.showOverlay && (this.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), this.$sidenavOverlay.css("opacity", 0).on("click", function () {
                        t.removeMenu()
                    }), this.$body.append(this.$sidenavOverlay))
                }
            }, {
                key: "disableScrolling", value: function () {
                    var e = this.$body.innerWidth();
                    this.$body.css("overflow", "hidden"), this.$body.width(e)
                }
            }, {
                key: "touchendEventHandler", value: function (e) {
                    if ("touchend" === e.type) {
                        var t = e.changedTouches[0];
                        this.lastTouchVelocity.x.endTime = Date.now(), this.lastTouchVelocity.x.endPosition = t.clientX;
                        var n = this.calculateTouchVelocityX(), i = t.clientX, o = i - this.options.MENU_WIDTH,
                            r = i - this.options.MENU_WIDTH / 2;
                        o > 0 && (o = 0), r < 0 && (r = 0), "left" === this.options.edge ? (this.menuOut && n <= .3 || n < -.5 ? (0 !== o && this.translateMenuX([0, o], "300"), this.showSidenavOverlay()) : (!this.menuOut || n > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, o], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : this.menuOut && n >= -.3 || n > .5 ? (this.translateMenuX([0, r], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                            width: "50%",
                            right: "",
                            left: 0
                        })) : (!this.menuOut || n < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, r], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                            width: "10px",
                            right: 0,
                            left: ""
                        }))
                    }
                }
            }, {
                key: "calculateTouchVelocityX", value: function () {
                    return Math.abs(this.lastTouchVelocity.x.endPosition - this.lastTouchVelocity.x.startPosition) / Math.abs(this.lastTouchVelocity.x.endTime - this.lastTouchVelocity.x.startTime)
                }
            }, {
                key: "panendEventHandler", value: function (e) {
                    if ("touch" === e.gesture.pointerType) {
                        var t = e.gesture.velocityX, n = e.gesture.center.x, i = n - this.options.MENU_WIDTH,
                            o = n - this.options.MENU_WIDTH / 2;
                        i > 0 && (i = 0), o < 0 && (o = 0), "left" === this.options.edge ? (this.menuOut && t <= .3 || t < -.5 ? (0 !== i && this.translateMenuX([0, i], "300"), this.showSidenavOverlay()) : (!this.menuOut || t > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, i], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : this.menuOut && t >= -.3 || t > .5 ? (this.translateMenuX([0, o], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                            width: "50%",
                            right: "",
                            left: 0
                        })) : (!this.menuOut || t < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, o], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                            width: "10px",
                            right: 0,
                            left: ""
                        }))
                    }
                }
            }, {
                key: "translateMenuX", value: function (e, t) {
                    this.$menu.velocity({translateX: e}, {
                        duration: "string" == typeof t ? Number(t) : t,
                        queue: !1,
                        easing: this.options.easingOpen
                    })
                }
            }, {
                key: "hideSidenavOverlay", value: function () {
                    this.$sidenavOverlay.velocity({opacity: 0}, {
                        duration: this.options.timeDurationOverlayClose,
                        queue: !1,
                        easing: this.options.easingOpen,
                        complete: function () {
                            e(this).remove()
                        }
                    }), this.$sidenavOverlay = e()
                }
            }, {
                key: "showSidenavOverlay", value: function () {
                    this.$sidenavOverlay.velocity({opacity: 1}, {
                        duration: this.options.timeDurationOverlayOpen,
                        queue: !1,
                        easing: this.options.easingOpen
                    })
                }
            }, {
                key: "enableScrolling", value: function () {
                    this.$body.css({overflow: "", width: ""})
                }
            }, {
                key: "openOnClick", value: function () {
                    var t = this;
                    this.$element.on("click", function (n) {
                        if (n.preventDefault(), !0 === t.menuOut) t.menuOut = !1, t.removeMenu(); else {
                            !0 === t.options.showOverlay ? (t.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), t.$body.append(t.$sidenavOverlay)) : t.showCloseButton();
                            var i = [];
                            i = "left" === t.options.edge ? [0, -1 * t.options.MENU_WIDTH] : [0, t.options.MENU_WIDTH], t.$menu.velocity({translateX: i}, {
                                duration: t.options.timeDurationOpen,
                                queue: !1,
                                easing: t.options.easingOpen
                            }), t.$sidenavOverlay.on("click", function () {
                                t.removeMenu()
                            })
                        }
                    })
                }
            }, {
                key: "closeOnClick", value: function () {
                    var e = this;
                    !0 === this.options.closeOnClick && this.$menu.on("click", "a:not(.collapsible-header)", function () {
                        e.removeMenu()
                    })
                }
            }, {
                key: "showCloseButton", value: function () {
                    !0 === this.options.showCloseButton && (this.$menu.prepend(this.$elementCloned), this.$menu.find(".logo-wrapper").css({borderTop: "1px solid rgba(153,153,153,.3)"}))
                }
            }, {
                key: "setMenuTranslation", value: function () {
                    var t = this;
                    "left" === this.options.edge ? (this.$menu.css("transform", "translateX(-100%)"), this.$dragTarget.css({left: 0})) : (this.$menu.addClass("right-aligned").css("transform", "translateX(100%)"), this.$dragTarget.css({right: 0})), this.$menu.hasClass("fixed") && (window.innerWidth > this.options.breakpoint && this.$menu.css("transform", "translateX(0)"), this.$menu.find("input[type=text]").on("touchstart", function (e) {
                        t.$menu.addClass("transform-fix-input")
                    }), e(window).resize(function () {
                        if (window.innerWidth > t.options.breakpoint) t.$sidenavOverlay.length ? t.removeMenu(!0) : t.$menu.css("transform", "translateX(0%)"); else if (!1 === t.menuOut) {
                            var e = "left" === t.options.edge ? "-100" : "100";
                            t.$menu.css("transform", "translateX(".concat(e, "%)"))
                        }
                    }))
                }
            }, {
                key: "setMENU_WIDTH", value: function () {
                    var n = e("#".concat(this.$menu.attr("id"))).find("> .sidenav-bg");
                    this.options.MENU_WIDTH !== t && (this.$menu.css("width", this.options.MENU_WIDTH), n.css("width", this.options.MENU_WIDTH))
                }
            }, {
                key: "inputOnClick", value: function () {
                    var e = this;
                    this.$menu.find("input[type=text]").on("touchstart", function (t) {
                        e.$menu.css("transform", "translateX(0)")
                    })
                }
            }, {
                key: "assignOptions", value: function (t) {
                    return e.extend({}, this.defaults, t)
                }
            }, {
                key: "removeMenu", value: function (e) {
                    var t = this;
                    this.$body.css({
                        overflow: "",
                        width: ""
                    }), this.$menu.velocity({translateX: "left" === this.options.edge ? "-100%" : "100%"}, {
                        duration: this.options.timeDurationClose,
                        queue: !1,
                        easing: this.options.easingClose,
                        complete: function () {
                            !0 === e && (t.$menu.removeAttr("style"), t.$menu.css("width", t.options.MENU_WIDTH))
                        }
                    }), this.$menu.hasClass("transform-fix-input") && this.$menu.removeClass("transform-fix-input"), this.hideSidenavOverlay()
                }
            }, {
                key: "show", value: function () {
                    this.trigger("click")
                }
            }, {
                key: "hide", value: function () {
                    this.trigger("click")
                }
            }]), d
        }();
    e.fn.sideNav = function (t) {
        return this.each(function () {
            new d(e(this), t)
        })
    }
}(jQuery), $(function () {
    $("#toggle").click(function () {
        $("#slide-out").hasClass("slim") ? ($("#slide-out").removeClass("slim"), $(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left")) : ($("#slide-out").addClass("slim"), $(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"))
    })
}), function (e) {
    e.fn.collapsible = function (t) {
        var n = {accordion: void 0};

        function i(t, n) {
            $panelHeaders = t.find("> li > .collapsible-header"), n.hasClass("active") ? n.parent().addClass("active") : n.parent().removeClass("active"), n.parent().hasClass("active") ? n.siblings(".collapsible-body").stop(!0, !1).slideDown({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            }) : n.siblings(".collapsible-body").stop(!0, !1).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            }), $panelHeaders.not(n).removeClass("active").parent().removeClass("active"), $panelHeaders.not(n).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            })
        }

        function o(t) {
            t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            })
        }

        function r(e) {
            return a(e).length > 0
        }

        function a(e) {
            return e.closest("li > .collapsible-header")
        }

        return t = e.extend(n, t), this.each(function () {
            var n = e(this), s = e(this).find("> li > .collapsible-header"), l = n.data("collapsible");
            n.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), t.accordion || "accordion" === l || void 0 === l ? ((s = n.find("> li > .collapsible-header")).on("click.collapse", function (t) {
                var o = e(t.target);
                r(o) && (o = a(o)), o.toggleClass("active"), i(n, o)
            }), i(n, s.filter(".active").first())) : s.each(function () {
                e(this).on("click.collapse", function (t) {
                    var n = e(t.target);
                    r(n) && (n = a(n)), n.toggleClass("active"), o(n)
                }), e(this).hasClass("active") && o(e(this))
            })
        })
    }, e(".collapsible").collapsible()
}(jQuery), function (e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function (e) {
    var t = function (e, t) {
        var n, i = document.createElement("canvas");
        e.appendChild(i), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(i);
        var o = i.getContext("2d");
        i.width = i.height = t.size;
        var r = 1;
        window.devicePixelRatio > 1 && (r = window.devicePixelRatio, i.style.width = i.style.height = [t.size, "px"].join(""), i.width = i.height = t.size * r, o.scale(r, r)), o.translate(t.size / 2, t.size / 2), o.rotate((t.rotate / 180 - .5) * Math.PI);
        var a = (t.size - t.lineWidth) / 2;
        t.scaleColor && t.scaleLength && (a -= t.scaleLength + 2), Date.now = Date.now || function () {
            return +new Date
        };
        var s = function (e, t, n) {
                var i = (n = Math.min(Math.max(-1, n || 0), 1)) <= 0;
                o.beginPath(), o.arc(0, 0, a, 0, 2 * Math.PI * n, i), o.strokeStyle = e, o.lineWidth = t, o.stroke()
            },
            l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
                window.setTimeout(e, 1e3 / 60)
            }, c = function () {
                t.scaleColor && function () {
                    var e, n;
                    o.lineWidth = 1, o.fillStyle = t.scaleColor, o.save();
                    for (var i = 24; i > 0; --i) i % 6 == 0 ? (n = t.scaleLength, e = 0) : (n = .6 * t.scaleLength, e = t.scaleLength - n), o.fillRect(-t.size / 2 + e, 0, n, 1), o.rotate(Math.PI / 12);
                    o.restore()
                }(), t.trackColor && s(t.trackColor, t.trackWidth || t.lineWidth, 1)
            };
        this.getCanvas = function () {
            return i
        }, this.getCtx = function () {
            return o
        }, this.clear = function () {
            o.clearRect(t.size / -2, t.size / -2, t.size, t.size)
        }, this.draw = function (e) {
            var i;
            t.scaleColor || t.trackColor ? o.getImageData && o.putImageData ? n ? o.putImageData(n, 0, 0) : (c(), n = o.getImageData(0, 0, t.size * r, t.size * r)) : (this.clear(), c()) : this.clear(), o.lineCap = t.lineCap, i = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, s(i, t.lineWidth, e / 100)
        }.bind(this), this.animate = function (e, n) {
            var i = Date.now();
            t.onStart(e, n);
            var o = function () {
                var r = Math.min(Date.now() - i, t.animate.duration),
                    a = t.easing(this, r, e, n - e, t.animate.duration);
                this.draw(a), t.onStep(e, n, a), r >= t.animate.duration ? t.onStop(e, n) : l(o)
            }.bind(this);
            l(o)
        }.bind(this)
    };
    e.fn.easyPieChart = function (n) {
        return this.each(function () {
            var i;
            e.data(this, "easyPieChart") || (i = e.extend({}, n, e(this).data()), e.data(this, "easyPieChart", new function (e, n) {
                var i = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    trackWidth: void 0,
                    size: 110,
                    rotate: 0,
                    animate: {duration: 1e3, enabled: !0},
                    easing: function (e, t, n, i, o) {
                        return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
                    },
                    onStart: function (e, t) {
                    },
                    onStep: function (e, t, n) {
                    },
                    onStop: function (e, t) {
                    }
                };
                i.renderer = t;
                var o = {}, r = 0, a = function () {
                    for (var t in this.el = e, this.options = o, i) i.hasOwnProperty(t) && (o[t] = n && void 0 !== n[t] ? n[t] : i[t], "function" == typeof o[t] && (o[t] = o[t].bind(this)));
                    "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = i.easing, "number" == typeof o.animate && (o.animate = {
                        duration: o.animate,
                        enabled: !0
                    }), "boolean" != typeof o.animate || o.animate || (o.animate = {
                        duration: 1e3,
                        enabled: o.animate
                    }), this.renderer = new o.renderer(e, o), this.renderer.draw(r), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
                }.bind(this);
                this.update = function (e) {
                    return e = parseFloat(e), o.animate.enabled ? this.renderer.animate(r, e) : this.renderer.draw(e), r = e, this
                }.bind(this), this.disableAnimation = function () {
                    return o.animate.enabled = !1, this
                }, this.enableAnimation = function () {
                    return o.animate.enabled = !0, this
                }, a()
            }(this, i)))
        })
    }
}), function (e) {
    var t, n = "input[type=range]:not(.custom-range):not(.multi-range)", i = !1;
    e(document).on("change", n, function () {
        var t = e(this);
        t.siblings(".thumb").find(".value").html(t.val())
    }), e(document).on("input mousedown touchstart", n, function (o) {
        var r = e(this), a = r.siblings(".thumb"), s = r.outerWidth();
        if (!a.length && function () {
            var t = e('<span class="thumb"><span class="value"></span></span>');
            e(n).after(t)
        }(), a.find(".value").html(r.val()), i = !0, r.addClass("active"), a.hasClass("active") || a.velocity({
            height: "30px",
            width: "30px",
            top: "-20px",
            marginLeft: "-15px"
        }, {duration: 300, easing: "easeOutExpo"}), "input" !== o.type) {
            var l = void 0 === o.pageX || null === o.pageX;
            (t = l ? o.originalEvent.touches[0].pageX - e(this).offset().left : o.pageX - e(this).offset().left) < 0 ? t = 0 : t > s && (t = s), a.addClass("active").css("left", t)
        }
        a.find(".value").html(r.val())
    }), e(document).on("mouseup touchend", ".range-field", function () {
        i = !1, e(this).removeClass("active")
    }), e(document).on("mousemove touchmove", ".range-field", function (t) {
        var o, r = e(this).children(".thumb");
        if (i) {
            r.hasClass("active") || r.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }), o = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
            var a = e(this).outerWidth();
            o < 0 ? o = 0 : o > a && (o = a), r.addClass("active").css("left", o), r.find(".value").html(r.siblings(n).val())
        }
    }), e(document).on("mouseout touchleave", ".range-field", function () {
        if (!i) {
            var t = e(this).children(".thumb");
            t.hasClass("active") && t.velocity({
                height: "0",
                width: "0",
                top: "10px",
                marginLeft: "-6px"
            }, {duration: 100}), t.removeClass("active")
        }
    })
}(jQuery), function (e) {
    e(document).on("change", '.file-field input[type="file"]', function (t) {
        var n = e(t.target), i = n.closest(".file-field").find("input.file-path"), o = n[0].files, r = [];
        Array.isArray(o) ? o.forEach(function (e) {
            return r.push(e.name)
        }) : Object.keys(o).forEach(function (e) {
            r.push(o[e].name)
        }), i.val(r.join(", ")), i.trigger("change")
    })
}(jQuery), function (e) {
    var t, n = function () {
        function t(n, i) {
            _classCallCheck(this, t), this.$nativeSelect = n, this.defaults = {
                destroy: !1,
                nativeID: null,
                BSsearchIn: !1,
                BSinputText: !1,
                fasClasses: "",
                farClasses: "",
                fabClasses: "",
                copyClassesOption: !1,
                language: {
                    active: !1,
                    pl: {selectAll: "Wybierz wszystko", optionsSelected: "wybranych opcji"},
                    in: {selectAll: "Pilih semuanya", optionsSelected: "opsi yang dipilih"},
                    fr: {selectAll: "Tout choisir", optionsSelected: "options sélectionnées"},
                    ge: {selectAll: "Wähle alles aus", optionsSelected: "ausgewählte Optionen"},
                    ar: {selectAll: "اختر كل شيء", optionsSelected: "الخيارات المحددة"}
                }
            }, this.options = this.assignOptions(i), this.isMultiple = Boolean(this.$nativeSelect.attr("multiple")), this.isSearchable = Boolean(this.$nativeSelect.attr("searchable")), this.isRequired = Boolean(this.$nativeSelect.attr("required")), this.uuid = null !== this.options.nativeID && "" !== this.options.nativeID && void 0 !== this.options.nativeID && "string" == typeof this.options.nativeID ? this.options.nativeID : this._randomUUID(), this.$selectWrapper = e('<div class="select-wrapper"></div>'), this.$materialOptionsList = e('<ul id="select-options-'.concat(this.uuid, '" class="dropdown-content select-dropdown w-100 ').concat(this.isMultiple ? "multiple-select-dropdown" : "", '"></ul>')), this.$materialSelectInitialOption = n.find("option:selected").text() || n.find("option:first").text() || "", this.$nativeSelectChildren = this.$nativeSelect.children("option, optgroup"), this.$materialSelect = e('<input type="text" class="'.concat(this.options.BSinputText ? "browser-default custom-select multi-bs-select select-dropdown" : "select-dropdown", '" readonly="true" ').concat(this.$nativeSelect.is(":disabled") ? "disabled" : "", ' data-activates="select-options-').concat(this.uuid, '" value=""/>')), this.$dropdownIcon = this.options.BSinputText ? "" : e('<span class="caret">&#9660;</span>'), this.$searchInput = null, this.$toggleAll = e('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>Select all</label></span></li>'), this.mainLabel = this.$nativeSelect.next(".mdb-main-label"), this.valuesSelected = [], this.keyCodes = {
                tab: 9,
                esc: 27,
                enter: 13,
                arrowUp: 38,
                arrowDown: 40
            }, t.mutationObservers = []
        }

        return _createClass(t, [{
            key: "assignOptions", value: function (t) {
                return e.extend({}, this.defaults, t)
            }
        }, {
            key: "init", value: function () {
                if (Boolean(this.$nativeSelect.data("select-id")) && this._removeMaterialWrapper(), this.options.destroy) this.$nativeSelect.data("select-id", null).removeClass("initialized"); else {
                    this.options.BSsearchIn || this.options.BSinputText ? this.$selectWrapper.addClass(this.$nativeSelect.attr("class").split(" ").filter(function (e) {
                        return "md-form" !== e
                    }).join(" ")).css({
                        marginTop: "1.5rem",
                        marginBottom: "1.5rem"
                    }) : this.$selectWrapper.addClass(this.$nativeSelect.attr("class")), this.$nativeSelect.data("select-id", this.uuid);
                    var e = this.$materialSelectInitialOption.replace(/"/g, "&quot;").replace(/  +/g, " ").trim();
                    0 === this.mainLabel.length ? this.$materialSelect.val(e) : this.mainLabel.text(), this.renderMaterialSelect(), this.bindEvents(), this.isRequired && this.enableValidation(), this.options.language.active && this.$toggleAll && (this.options.language.pl && this.$toggleAll.find("label").text(this.options.language.pl.selectAll ? this.options.language.pl.selectAll : this.defaults.language.pl.selectAll), this.options.language.fr && this.$toggleAll.find("label").text(this.options.language.fr.selectAll ? this.options.language.fr.selectAll : this.defaults.language.fr.selectAll), this.options.language.ge && this.$toggleAll.find("label").text(this.options.language.ge.selectAll ? this.options.language.ge.selectAll : this.defaults.language.ge.selectAll), this.options.language.ar && this.$toggleAll.find("label").text(this.options.language.ar.selectAll ? this.options.language.ar.selectAll : this.defaults.language.ar.selectAll), this.options.language.in && this.$toggleAll.find("label").text(this.options.language.in.selectAll ? this.options.language.in.selectAll : this.defaults.language.in.selectAll)), this.$materialSelect.hasClass("custom-select") && this.$materialSelect.hasClass("select-dropdown") && this.$materialSelect.css({
                        display: "inline-block",
                        width: "100%",
                        height: "calc(1.5em + .75rem + 2px)",
                        padding: ".375rem 1.75rem .375rem .75rem",
                        "font-size": "1rem",
                        "line-height": "1.5",
                        "background-color": "#fff",
                        border: "1px solid #ced4da"
                    })
                }
            }
        }, {
            key: "_removeMaterialWrapper", value: function () {
                var t = this.$nativeSelect.data("select-id");
                this.$nativeSelect.parent().find("span.caret").remove(), this.$nativeSelect.parent().find("input").remove(), this.$nativeSelect.unwrap(), e("ul#select-options-".concat(t)).remove()
            }
        }, {
            key: "renderMaterialSelect", value: function () {
                var e = this;
                if (this.$nativeSelect.before(this.$selectWrapper), this.appendDropdownIcon(), this.appendMaterialSelect(), this.appendMaterialOptionsList(), this.appendNativeSelect(), this.appendSaveSelectButton(), this.$nativeSelect.is(":disabled") || this.$materialSelect.dropdown({
                    hover: !1,
                    closeOnClick: !1
                }), !1 !== this.$nativeSelect.data("inherit-tabindex") && this.$materialSelect.attr("tabindex", this.$nativeSelect.attr("tabindex")), this.isMultiple) this.$nativeSelect.find("option:selected:not(:disabled)").each(function (t, n) {
                    var i = n.index;
                    e._toggleSelectedValue(i), e.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(i).find(":checkbox").prop("checked", !0)
                }); else {
                    var t = this.$nativeSelect.find("option:selected").index();
                    this.$materialOptionsList.find("li").eq(t).addClass("active")
                }
                this.$nativeSelect.addClass("initialized"), this.options.BSinputText && this.mainLabel.css("top", "-7px")
            }
        }, {
            key: "appendDropdownIcon", value: function () {
                this.$nativeSelect.is(":disabled") && this.$dropdownIcon.addClass("disabled"), this.$selectWrapper.append(this.$dropdownIcon)
            }
        }, {
            key: "appendMaterialSelect", value: function () {
                this.$selectWrapper.append(this.$materialSelect)
            }
        }, {
            key: "appendMaterialOptionsList", value: function () {
                this.isSearchable && this.appendSearchInputOption(), this.buildMaterialOptions(), this.isMultiple && this.appendToggleAllCheckbox(), this.$selectWrapper.append(this.$materialOptionsList)
            }
        }, {
            key: "appendNativeSelect", value: function () {
                this.$nativeSelect.appendTo(this.$selectWrapper)
            }
        }, {
            key: "appendSearchInputOption", value: function () {
                var t = this.$nativeSelect.attr("searchable");
                this.options.BSsearchIn ? this.$searchInput = e('<span class="search-wrap ml-2"><div class="mt-0"><input type="text" class="search form-control mb-2 w-100 d-block select-default" placeholder="'.concat(t, '"></div></span>')) : this.$searchInput = e('<span class="search-wrap ml-2"><div class="md-form mt-0"><input type="text" class="search form-control w-100 d-block" placeholder="'.concat(t, '"></div></span>')), this.$materialOptionsList.append(this.$searchInput), this.$searchInput.on("click", function (e) {
                    e.stopPropagation()
                })
            }
        }, {
            key: "appendToggleAllCheckbox", value: function () {
                this.$materialOptionsList.find("li.disabled").first().after(this.$toggleAll)
            }
        }, {
            key: "appendSaveSelectButton", value: function () {
                this.$selectWrapper.parent().find("button.btn-save").appendTo(this.$materialOptionsList)
            }
        }, {
            key: "buildMaterialOptions", value: function () {
                var t = this;
                this.$nativeSelectChildren.each(function (n, i) {
                    var o = e(i);
                    if (o.is("option")) t.buildSingleOption(o, t.isMultiple ? "multiple" : ""); else if (o.is("optgroup")) {
                        var r = e('<li class="optgroup"><span>'.concat(o.attr("label"), "</span></li>"));
                        t.$materialOptionsList.append(r), o.children("option").each(function (n, i) {
                            t.buildSingleOption(e(i), "optgroup-option")
                        })
                    }
                })
            }
        }, {
            key: "buildSingleOption", value: function (t, n) {
                var i = t.is(":disabled") ? "disabled" : "", o = "optgroup-option" === n ? "optgroup-option" : "",
                    r = t.data("icon"),
                    a = t.data("fas") ? '<i class="fa-pull-right m-2 fas fa-'.concat(t.data("fas"), " ").concat([...this.options.fasClasses].join(""), '"></i> ') : "",
                    s = t.data("far") ? '<i class="fa-pull-right m-2 far fa-'.concat(t.data("far"), " ").concat([...this.options.farClasses].join(""), '"></i> ') : "",
                    l = t.data("fab") ? '<i class="fa-pull-right m-2 fab fa-'.concat(t.data("fab"), " ").concat([...this.options.fabClasses].join(""), '"></i> ') : "",
                    c = t.attr("class"), u = r ? '<img alt="" src="'.concat(r, '" class="').concat(c, '">') : "",
                    d = this.isMultiple ? '<input type="checkbox" class="form-check-input" '.concat(i, "/><label></label>") : "";
                this.$materialOptionsList.append(e('<li class="'.concat(i, " ").concat(o, " ").concat(this.options.copyClassesOption ? c : "", ' ">').concat(u, '<span class="filtrable">').concat(d, " ").concat(t.html(), " ").concat(a, " ").concat(s, " ").concat(l, "</span></li>")))
            }
        }, {
            key: "enableValidation", value: function () {
                this.$nativeSelect.css({
                    position: "absolute",
                    top: "1rem",
                    left: "0",
                    height: "0",
                    width: "0",
                    opacity: "0",
                    padding: "0",
                    "pointer-events": "none"
                }), -1 === this.$nativeSelect.attr("style").indexOf("inline!important") && this.$nativeSelect.attr("style", "".concat(this.$nativeSelect.attr("style"), " display: inline!important;")), this.$nativeSelect.attr("tabindex", -1), this.$nativeSelect.data("inherit-tabindex", !1)
            }
        }, {
            key: "bindEvents", value: function () {
                var n = this, i = new MutationObserver(this._onMutationObserverChange.bind(this));
                i.observe(this.$nativeSelect.get(0), {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), i.customId = this.uuid, i.customStatus = "observing", t.clearMutationObservers(), t.mutationObservers.push(i), this.$nativeSelect.parent().find("button.btn-save").on("click", this._onSaveSelectBtnClick.bind(this)), this.$materialSelect.on("focus", this._onMaterialSelectFocus.bind(this)), this.$materialSelect.on("click", this._onMaterialSelectClick.bind(this)), this.$materialSelect.on("blur", this._onMaterialSelectBlur.bind(this)), this.$materialSelect.on("keydown", this._onMaterialSelectKeydown.bind(this)), this.$toggleAll.on("click", this._onToggleAllClick.bind(this)), this.$materialOptionsList.on("mousedown", this._onEachMaterialOptionMousedown.bind(this)), this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each(function (t, i) {
                    e(i).on("click", n._onEachMaterialOptionClick.bind(n, t, i))
                }), !this.isMultiple && this.isSearchable && this.$materialOptionsList.find("li").on("click", this._onSingleMaterialOptionClick.bind(this)), this.isSearchable && this.$searchInput.find(".search").on("keyup", this._onSearchInputKeyup), e("html").on("click", this._onHTMLClick.bind(this))
            }
        }, {
            key: "_onMutationObserverChange", value: function (n) {
                n.forEach(function (n) {
                    var i = e(n.target).closest("select");
                    !0 !== i.data("stop-refresh") && ("childList" === n.type || "attributes" === n.type && e(n.target).is("option")) && (t.clearMutationObservers(), i.materialSelect({destroy: !0}), i.materialSelect())
                })
            }
        }, {
            key: "_onSaveSelectBtnClick", value: function (t) {
                e("input.multi-bs-select").trigger("close"), this.$materialOptionsList.hide(), this.$materialSelect.removeClass("active")
            }
        }, {
            key: "_onEachMaterialOptionClick", value: function (t, n, i) {
                i.stopPropagation();
                var o = e(n);
                if (!o.hasClass("disabled") && !o.hasClass("optgroup")) {
                    var r = !0;
                    if (this.isMultiple) {
                        o.find('input[type="checkbox"]').prop("checked", function (e, t) {
                            return !t
                        });
                        var a = Boolean(this.$nativeSelect.find("optgroup").length),
                            s = this._isToggleAllPresent() ? o.index() - 1 : o.index();
                        r = this.isSearchable && a ? this._toggleSelectedValue(s - o.prevAll(".optgroup").length - 1) : this.isSearchable ? this._toggleSelectedValue(s - 1) : a ? this._toggleSelectedValue(s - o.prevAll(".optgroup").length) : this._toggleSelectedValue(s), this._isToggleAllPresent() && this._updateToggleAllOption(), this.$materialSelect.trigger("focus")
                    } else this.$materialOptionsList.find("li").removeClass("active"), o.toggleClass("active"), this.$materialSelect.val(o.text().replace(/  +/g, " ").trim()), this.$materialSelect.trigger("close");
                    this._selectSingleOption(o), this.$nativeSelect.data("stop-refresh", !0), this.$nativeSelect.find("option").eq(t).prop("selected", r), this.$nativeSelect.removeData("stop-refresh"), this._triggerChangeOnNativeSelect(), this.mainLabel.prev().find("input").hasClass("select-dropdown") && this.mainLabel.prev().find("input.select-dropdown").val().length > 0 && this.mainLabel.addClass("active"), "function" == typeof this.options && this.options(), o.hasClass("li-added") && this.$materialOptionsList.append(this.buildSingleOption(o, ""))
                }
            }
        }, {
            key: "_triggerChangeOnNativeSelect", value: function () {
                var e = new KeyboardEvent("change", {bubbles: !0, cancelable: !0});
                this.$nativeSelect.get(0).dispatchEvent(e)
            }
        }, {
            key: "_onMaterialSelectFocus", value: function (t) {
                var n = e(t.target);
                if (e("ul.select-dropdown").not(this.$materialOptionsList.get(0)).is(":visible") && e("input.select-dropdown").trigger("close"), !this.$materialOptionsList.is(":visible")) {
                    n.trigger("open", ["focus"]);
                    var i = n.val(), o = this.$materialOptionsList.find("li").filter(function () {
                        return e(this).text().toLowerCase() === i.toLowerCase()
                    })[0];
                    this._selectSingleOption(o)
                }
                this.isMultiple || this.mainLabel.addClass("active active-check")
            }
        }, {
            key: "_onMaterialSelectClick", value: function (e) {
                this.mainLabel.addClass("active-check"), e.stopPropagation()
            }
        }, {
            key: "_onMaterialSelectBlur", value: function (t) {
                var n = e(t);
                this.isMultiple || this.isSearchable || n.trigger("close"), this.$materialOptionsList.find("li.selected").removeClass("selected"), this.mainLabel.removeClass("active-check"), this.mainLabel.prev().find("input").hasClass("select-dropdown") && "" === this.mainLabel.prev().find("input.select-dropdown").val() && this.mainLabel.removeClass("active")
            }
        }, {
            key: "_onSingleMaterialOptionClick", value: function () {
                this.$materialSelect.trigger("close")
            }
        }, {
            key: "_onEachMaterialOptionMousedown", value: function (t) {
                var n = t.target;
                e(".modal-content").find(this.$materialOptionsList).length && n.scrollHeight > n.offsetHeight && t.preventDefault(), this.mainLabel.removeClass("active-check")
            }
        }, {
            key: "_onHTMLClick", value: function (t) {
                e(t.target).closest("#select-options-".concat(this.uuid)).length || e(t.target).hasClass("mdb-select") || !e("#select-options-".concat(this.uuid)).hasClass("active") || (this.$materialSelect.trigger("close"), this.mainLabel.removeClass("active-check")), this.isSearchable && null !== this.$searchInput && this.$materialOptionsList.hasClass("active") && this.$materialOptionsList.find(".search-wrap input.search").focus()
            }
        }, {
            key: "_onToggleAllClick", value: function (t) {
                var n = this, i = e(this.$toggleAll).find('input[type="checkbox"]').first(), o = !e(i).prop("checked");
                e(i).prop("checked", o), this.$materialOptionsList.find("li:not(.optgroup):not(.disabled):not(.select-toggle-all)").each(function (t, i) {
                    var r = e(i).find('input[type="checkbox"]');
                    o && r.is(":checked") || !o && !r.is(":checked") || (n._isToggleAllPresent() && t++, r.prop("checked", o), n.$nativeSelect.find("option").eq(t).prop("selected", o), o ? e(i).removeClass("active") : e(i).addClass("active"), n._toggleSelectedValue(t), n._selectOption(i), n._setValueToMaterialSelect())
                }), this.$nativeSelect.data("stop-refresh", !0), this._triggerChangeOnNativeSelect(), this.$nativeSelect.removeData("stop-refresh"), t.stopPropagation()
            }
        }, {
            key: "_onMaterialSelectKeydown", value: function (t) {
                var n = e(t.target), i = t.which === this.keyCodes.tab, o = t.which === this.keyCodes.esc,
                    r = t.which === this.keyCodes.enter, a = t.which === this.keyCodes.arrowUp,
                    s = t.which === this.keyCodes.arrowDown, l = this.$materialOptionsList.is(":visible");
                i ? this._handleTabKey(n) : !s || l ? r && !l || (t.preventDefault(), r ? this._handleEnterKey(n) : s ? this._handleArrowDownKey() : a ? this._handleArrowUpKey() : o ? this._handleEscKey(n) : this._handleLetterKey(t)) : n.trigger("open")
            }
        }, {
            key: "_handleTabKey", value: function (e) {
                this._handleEscKey(e)
            }
        }, {
            key: "_handleEnterKey", value: function (t) {
                this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click").addClass("active"), this.isMultiple || e(t).trigger("close")
            }
        }, {
            key: "_handleArrowDownKey", value: function () {
                var e = this.$materialOptionsList.find("li").not(".disabled").first(),
                    t = this.$materialOptionsList.find("li").not(".disabled").last(),
                    n = this.$materialOptionsList.find("li.selected").length > 0,
                    i = n ? this.$materialOptionsList.find("li.selected") : e,
                    o = i.is(t) || !n ? i : i.next("li:not(.disabled)");
                this._selectSingleOption(o), o.find("input").is(":checked") || o.removeClass("active"), o.prev().hasClass("selected") || o.prev().find("input").is(":checked") || o.prev().removeClass("active"), o.addClass("active")
            }
        }, {
            key: "_handleArrowUpKey", value: function () {
                var e = this.$materialOptionsList.find("li").not(".disabled").first(),
                    t = this.$materialOptionsList.find("li").not(".disabled").last(),
                    n = this.$materialOptionsList.find("li.selected").length > 0,
                    i = n ? this.$materialOptionsList.find("li.selected") : t,
                    o = i.is(e) || !n ? i : i.prev("li:not(.disabled)");
                this._selectSingleOption(o), o.find("input").is(":checked") || o.removeClass("active"), o.next().hasClass("selected") || o.next().find("input").is(":checked") || o.next().removeClass("active"), o.addClass("active")
            }
        }, {
            key: "_handleEscKey", value: function (t) {
                e(t).trigger("close")
            }
        }, {
            key: "_handleLetterKey", value: function (t) {
                var n = this, i = "", o = String.fromCharCode(t.which).toLowerCase(),
                    r = Object.keys(this.keyCodes).map(function (e) {
                        return n.keyCodes[e]
                    });
                if (o && -1 === r.indexOf(t.which)) {
                    i += o;
                    var a = this.$materialOptionsList.find("li").filter(function (t, n) {
                        return e(n).text().toLowerCase().includes(i)
                    }).first();
                    this.isMultiple || this.$materialOptionsList.find("li").removeClass("active"), a.addClass("active"), this._selectSingleOption(a)
                }
            }
        }, {
            key: "_onSearchInputKeyup", value: function (t) {
                var n = e(t.target), i = n.closest("ul"), o = n.val();
                i.find("li span.filtrable").each(function () {
                    var t = e(this);
                    "string" == typeof this.outerHTML && (this.textContent.toLowerCase().includes(o.toLowerCase()) ? t.show().parent().show() : t.hide().parent().hide())
                })
            }
        }, {
            key: "_isToggleAllPresent", value: function () {
                return this.$materialOptionsList.find(this.$toggleAll).length
            }
        }, {
            key: "_updateToggleAllOption", value: function () {
                var e = this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled").find("[type=checkbox]"),
                    t = e.filter(":checked"), n = this.$toggleAll.find("[type=checkbox]").is(":checked");
                t.length !== e.length || n ? t.length < e.length && n && this.$toggleAll.find("[type=checkbox]").prop("checked", !1) : this.$toggleAll.find("[type=checkbox]").prop("checked", !0)
            }
        }, {
            key: "_toggleSelectedValue", value: function (e) {
                var t = this.valuesSelected.indexOf(e), n = -1 !== t;
                return n ? this.valuesSelected.splice(t, 1) : this.valuesSelected.push(e), this.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(e).toggleClass("active"), this.$nativeSelect.find("option").eq(e).prop("selected", !n), this._setValueToMaterialSelect(), !n
            }
        }, {
            key: "_selectSingleOption", value: function (e) {
                this.$materialOptionsList.find("li.selected").removeClass("selected"), this._selectOption(e)
            }
        }, {
            key: "_selectOption", value: function (t) {
                e(t).addClass("selected")
            }
        }, {
            key: "_setValueToMaterialSelect", value: function () {
                var e = this, t = "", n = "options selected", i = this.valuesSelected.length;
                this.options.language.active && this.$toggleAll && (this.options.language.pl ? n = this.options.language.pl.optionsSelected ? this.options.language.pl.optionsSelected : this.defaults.language.pl.optionsSelected : this.options.language.fr ? n = this.options.language.fr.optionsSelected ? this.options.language.fr.optionsSelected : this.defaults.language.fr.optionsSelected : this.options.language.ge ? n = this.options.language.ge.optionsSelected ? this.options.language.ge.optionsSelected : this.defaults.language.ge.optionsSelected : this.options.language.ar ? n = this.options.language.ar.optionsSelected ? this.options.language.ar.optionsSelected : this.defaults.language.ar.optionsSelected : this.options.language.in && (n = this.options.language.in.optionsSelected ? this.options.language.in.optionsSelected : this.defaults.language.in.optionsSelected)), this.valuesSelected.map(function (n) {
                    return t += ", ".concat(e.$nativeSelect.find("option").eq(n).text().replace(/  +/g, " ").trim())
                }), 0 === (t = i >= 5 ? "".concat(i, " ").concat(n) : t.substring(2)).length && 0 === this.mainLabel.length && (t = this.$nativeSelect.find("option:disabled").eq(0).text()), t.length > 0 && !this.options.BSinputText ? this.mainLabel.addClass("active active-check") : this.mainLabel.removeClass("active"), this.options.BSinputText && this.mainLabel.css("top", "-7px"), this.$nativeSelect.siblings("".concat(this.options.BSinputText ? "input.multi-bs-select" : "input.select-dropdown")).val(t)
            }
        }, {
            key: "_randomUUID", value: function () {
                var e = (new Date).getTime();
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                    var n = (e + 16 * Math.random()) % 16 | 0;
                    return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
                })
            }
        }], [{
            key: "clearMutationObservers", value: function () {
                t.mutationObservers.forEach(function (e) {
                    e.disconnect(), e.customStatus = "stopped"
                })
            }
        }]), t
    }();
    e.fn.materialSelect = function (t) {
        e(this).not(".browser-default").not(".custom-select").each(function () {
            new n(e(this), t).init()
        })
    }, e.fn.material_select = e.fn.materialSelect, t = e.fn.val, e.fn.val = function (e) {
        if (!arguments.length) return t.call(this);
        if (!0 !== this.data("stop-refresh") && this.hasClass("mdb-select") && this.hasClass("initialized")) {
            n.clearMutationObservers(), this.materialSelect({destroy: !0});
            var i = t.call(this, e);
            return this.materialSelect(), i
        }
        return t.call(this, e)
    }
}(jQuery), jQuery("select").siblings("input.select-dropdown", "input.multi-bs-select").on("mousedown", function (e) {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
}), function (e) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
}(function (e) {
    var t = e(window), n = e(document), i = e(document.documentElement),
        o = null != document.documentElement.style.transition;

    function r(t, i, c, d) {
        if (!t) return r;
        var h = !1, f = {id: t.id || "P" + Math.abs(~~(Math.random() * new Date)), handlingOpen: !1},
            p = c ? e.extend(!0, {}, c.defaults, d) : d || {}, g = e.extend({}, r.klasses(), p.klass), m = e(t),
            v = function () {
                return this.start()
            }, y = v.prototype = {
                constructor: v, $node: m, start: function () {
                    return f && f.start ? y : (f.methods = {}, f.start = !0, f.open = !1, f.type = t.type, t.autofocus = t == u(), t.readOnly = !p.editable, t.id = t.id || f.id, "text" != t.type && (t.type = "text"), y.component = new c(y, p), y.$root = e('<div class="' + g.picker + '" id="' + t.id + '_root" />'), l(y.$root[0], "hidden", !0), y.$holder = e(b()).appendTo(y.$root), x(), p.formatSubmit && function () {
                        var n;
                        !0 === p.hiddenName ? (n = t.name, t.name = "") : n = (n = ["string" == typeof p.hiddenPrefix ? p.hiddenPrefix : "", "string" == typeof p.hiddenSuffix ? p.hiddenSuffix : "_submit"])[0] + t.name + n[1];
                        y._hidden = e('<input type=hidden name="' + n + '"' + (m.data("value") || t.value ? ' value="' + y.get("select", p.formatSubmit) + '"' : "") + ">")[0], m.on("change." + f.id, function () {
                            y._hidden.value = t.value ? y.get("select", p.formatSubmit) : ""
                        })
                    }(), function () {
                        m.data(i, y).addClass(g.input).val(m.data("value") ? y.get("select", p.format) : t.value).on("focus." + f.id + " click." + f.id, (n = function (e) {
                            e.preventDefault(), y.open()
                        }, o = 100, function () {
                            var e = this, t = arguments, i = r && !a;
                            clearTimeout(a), a = setTimeout(function () {
                                a = null, r || n.apply(e, t)
                            }, o), i && n.apply(e, t)
                        })).on("mousedown", function () {
                            f.handlingOpen = !0;
                            var t = function () {
                                setTimeout(function () {
                                    e(document).off("mouseup", t), f.handlingOpen = !1
                                }, 0)
                            };
                            e(document).on("mouseup", t)
                        }), p.editable || m.on("keydown." + f.id, k);
                        var n, o, r, a;
                        l(t, {haspopup: !0, expanded: !1, readonly: !1, owns: t.id + "_root"})
                    }(), p.containerHidden ? e(p.containerHidden).append(y._hidden) : m.after(y._hidden), p.container ? e(p.container).append(y.$root) : m.after(y.$root), y.on({
                        start: y.component.onStart,
                        render: y.component.onRender,
                        stop: y.component.onStop,
                        open: y.component.onOpen,
                        close: y.component.onClose,
                        set: y.component.onSet
                    }).on({
                        start: p.onStart,
                        render: p.onRender,
                        stop: p.onStop,
                        open: p.onOpen,
                        close: p.onClose,
                        set: p.onSet
                    }), h = function (e) {
                        var t;
                        e.currentStyle ? t = e.currentStyle.position : window.getComputedStyle && (t = getComputedStyle(e).position);
                        return "fixed" == t
                    }(y.$holder[0]), t.autofocus && y.open(), y.trigger("start").trigger("render"))
                }, render: function (t) {
                    return t ? (y.$holder = e(b()), x(), y.$root.html(y.$holder)) : y.$root.find("." + g.box).html(y.component.nodes(f.open)), y.trigger("render")
                }, stop: function () {
                    return f.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), m.removeClass(g.input).removeData(i), setTimeout(function () {
                        m.off("." + f.id)
                    }, 0), t.type = f.type, t.readOnly = !1, y.trigger("stop"), f.methods = {}, f.start = !1, y) : y
                }, open: function (i) {
                    return f.open ? y : (m.addClass(g.active), l(t, "expanded", !0), setTimeout(function () {
                        y.$root.addClass(g.opened), l(y.$root[0], "hidden", !1)
                    }, 0), !1 !== i && (f.open = !0, h && e("body").css("overflow", "hidden").css("padding-right", "+=" + a()), h && o ? y.$holder.find("." + g.frame).one("transitionend", function () {
                        y.$holder.eq(0).focus()
                    }) : setTimeout(function () {
                        y.$holder.eq(0).focus()
                    }, 0), n.on("click." + f.id + " focusin." + f.id, function (e) {
                        if (!f.handlingOpen) {
                            var n = s(e, t);
                            e.isSimulated || n == t || n == document || 3 == e.which || y.close(n === y.$holder[0])
                        }
                    }).on("keydown." + f.id, function (n) {
                        var i = n.keyCode, o = y.component.key[i], a = s(n, t);
                        27 == i ? y.close(!0) : a != y.$holder[0] || !o && 13 != i ? e.contains(y.$root[0], a) && 13 == i && (n.preventDefault(), a.click()) : (n.preventDefault(), o ? r._.trigger(y.component.key.go, y, [r._.trigger(o)]) : y.$root.find("." + g.highlighted).hasClass(g.disabled) || (y.set("select", y.component.item.highlight), p.closeOnSelect && y.close(!0)))
                    })), y.trigger("open"))
                }, close: function (i) {
                    return i && (p.editable ? t.focus() : (y.$holder.off("focus.toOpen").focus(), setTimeout(function () {
                        y.$holder.on("focus.toOpen", w)
                    }, 0))), m.removeClass(g.active), l(t, "expanded", !1), setTimeout(function () {
                        y.$root.removeClass(g.opened + " " + g.focused), l(y.$root[0], "hidden", !0)
                    }, 0), f.open ? (f.open = !1, h && e("body").css("overflow", "").css("padding-right", "-=" + a()), n.off("." + f.id), y.trigger("close")) : y
                }, clear: function (e) {
                    return y.set("clear", null, e)
                }, set: function (t, n, i) {
                    var o, r, a = e.isPlainObject(t), s = a ? t : {};
                    if (i = a && e.isPlainObject(n) ? n : i || {}, t) {
                        for (o in a || (s[t] = n), s) r = s[o], o in y.component.item && (void 0 === r && (r = null), y.component.set(o, r, i)), "select" != o && "clear" != o || !p.updateInput || m.val("clear" == o ? "" : y.get(o, p.format)).trigger("change");
                        y.render()
                    }
                    return i.muted ? y : y.trigger("set", s)
                }, get: function (e, n) {
                    if (null != f[e = e || "value"]) return f[e];
                    if ("valueSubmit" == e) {
                        if (y._hidden) return y._hidden.value;
                        e = "value"
                    }
                    if ("value" == e) return t.value;
                    if (e in y.component.item) {
                        if ("string" == typeof n) {
                            var i = y.component.get(e);
                            return i ? r._.trigger(y.component.formats.toString, y.component, [n, i]) : ""
                        }
                        return y.component.get(e)
                    }
                }, on: function (t, n, i) {
                    var o, r, a = e.isPlainObject(t), s = a ? t : {};
                    if (t) for (o in a || (s[t] = n), s) r = s[o], i && (o = "_" + o), f.methods[o] = f.methods[o] || [], f.methods[o].push(r);
                    return y
                }, off: function () {
                    var e, t, n = arguments;
                    for (e = 0, namesCount = n.length; e < namesCount; e += 1) (t = n[e]) in f.methods && delete f.methods[t];
                    return y
                }, trigger: function (e, t) {
                    var n = function (e) {
                        var n = f.methods[e];
                        n && n.map(function (e) {
                            r._.trigger(e, y, [t])
                        })
                    };
                    return n("_" + e), n(e), y
                }
            };

        function b() {
            return r._.node("div", r._.node("div", r._.node("div", r._.node("div", y.component.nodes(f.open), g.box), g.wrap), g.frame), g.holder, 'tabindex="-1"')
        }

        function x() {
            y.$holder.on({
                keydown: k, "focus.toOpen": w, blur: function () {
                    m.removeClass(g.target)
                }, focusin: function (e) {
                    y.$root.removeClass(g.focused), e.stopPropagation()
                }, "mousedown click": function (n) {
                    var i = s(n, t);
                    i != y.$holder[0] && (n.stopPropagation(), "mousedown" != n.type || e(i).is("input, select, textarea, button, option") || (n.preventDefault(), y.$holder.eq(0).focus()))
                }
            }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
                var t = e(this), n = t.data(), i = t.hasClass(g.navDisabled) || t.hasClass(g.disabled), o = u();
                o = o && (o.type || o.href ? o : null), (i || o && !e.contains(y.$root[0], o)) && y.$holder.eq(0).focus(), !i && n.nav ? y.set("highlight", y.component.item.highlight, {nav: n.nav}) : !i && "pick" in n ? (y.set("select", n.pick), p.closeOnSelect && y.close(!0)) : n.clear ? (y.clear(), p.closeOnClear && y.close(!0)) : n.close && y.close(!0)
            })
        }

        function w(e) {
            e.stopPropagation(), m.addClass(g.target), y.$root.addClass(g.focused), y.open()
        }

        function k(e) {
            var t = e.keyCode, n = /^(8|46)$/.test(t);
            if (27 == t) return y.close(!0), !1;
            (32 == t || n || !f.open && y.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? y.clear().close() : y.open())
        }

        return new v
    }

    function a() {
        if (i.height() <= t.height()) return 0;
        var n = e('<div style="visibility:hidden;width:100px" />').appendTo("body"), o = n[0].offsetWidth;
        n.css("overflow", "scroll");
        var r = e('<div style="width:100%" />').appendTo(n)[0].offsetWidth;
        return n.remove(), o - r
    }

    function s(e, t) {
        var n = [];
        return e.path && (n = e.path), e.originalEvent && e.originalEvent.path && (n = e.originalEvent.path), n && n.length > 0 ? t && n.indexOf(t) >= 0 ? t : n[0] : e.target
    }

    function l(t, n, i) {
        if (e.isPlainObject(n)) for (var o in n) c(t, o, n[o]); else c(t, n, i)
    }

    function c(e, t, n) {
        e.setAttribute(("role" == t ? "" : "aria-") + t, n)
    }

    function u() {
        try {
            return document.activeElement
        } catch (e) {
        }
    }

    return r.klasses = function (e) {
        return {
            picker: e = e || "picker",
            opened: e + "--opened",
            focused: e + "--focused",
            input: e + "__input",
            active: e + "__input--active",
            target: e + "__input--target",
            holder: e + "__holder",
            frame: e + "__frame",
            wrap: e + "__wrap",
            box: e + "__box"
        }
    }, r._ = {
        group: function (e) {
            for (var t, n = "", i = r._.trigger(e.min, e); i <= r._.trigger(e.max, e, [i]); i += e.i) t = r._.trigger(e.item, e, [i]), n += r._.node(e.node, t[0], t[1], t[2]);
            return n
        }, node: function (t, n, i, o) {
            return n ? (n = e.isArray(n) ? n.join("") : n, "<" + t + (i = i ? ' class="' + i + '"' : "") + (o = o ? " " + o : "") + ">" + n + "</" + t + ">") : ""
        }, lead: function (e) {
            return (e < 10 ? "0" : "") + e
        }, trigger: function (e, t, n) {
            return "function" == typeof e ? e.apply(t, n || []) : e
        }, digits: function (e) {
            return /\d/.test(e[1]) ? 2 : 1
        }, isDate: function (e) {
            return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
        }, isInteger: function (e) {
            return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
        }, ariaAttr: function (t, n) {
            e.isPlainObject(t) || (t = {attribute: n});
            for (var i in n = "", t) {
                var o = ("role" == i ? "" : "aria-") + i, r = t[i];
                n += null == r ? "" : o + '="' + t[i] + '"'
            }
            return n
        }
    }, r.extend = function (t, n) {
        e.fn[t] = function (i, o) {
            var a = this.data(t);
            return "picker" == i ? a : a && "string" == typeof i ? r._.trigger(a[i], a, [o]) : this.each(function () {
                e(this).data(t) || new r(this, t, n, i)
            })
        }, e.fn[t].defaults = n.defaults
    }, r
}), function (e) {
    "function" == typeof define && define.amd ? define(["./picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
}(function (e, t) {
    var n, i = e._;

    function o(e, t) {
        var n, i = this, o = e.$node[0], r = o.value, a = e.$node.data("value"), s = a || r,
            l = a ? t.formatSubmit : t.format, c = function () {
                return o.currentStyle ? "rtl" == o.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
            };
        i.settings = t, i.$node = e.$node, i.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, i.item = {}, i.item.clear = null, i.item.disable = (t.disable || []).slice(0), i.item.enable = -(!0 === (n = i.item.disable)[0] ? n.shift() : -1), i.set("min", t.min).set("max", t.max).set("now"), s ? i.set("select", s, {
            format: l,
            defaultValue: !0
        }) : i.set("select", null).set("highlight", i.item.now), i.key = {
            40: 7, 38: -7, 39: function () {
                return c() ? -1 : 1
            }, 37: function () {
                return c() ? 1 : -1
            }, go: function (e) {
                var t = i.item.highlight, n = new Date(t.year, t.month, t.date + e);
                i.set("highlight", n, {interval: e}), this.render()
            }
        }, e.on("render", function () {
            e.$root.find("." + t.klass.selectMonth).on("change", function () {
                var n = this.value;
                n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
            }), e.$root.find("." + t.klass.selectYear).on("change", function () {
                var n = this.value;
                n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function () {
            var n = "";
            i.disabled(i.get("now")) && (n = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + n + ", select").attr("disabled", !1)
        }, 1).on("close", function () {
            e.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }

    o.prototype.set = function (e, t, n) {
        var i = this, o = i.item;
        return null === t ? ("clear" == e && (e = "select"), o[e] = t, i) : (o["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[e].split(" ").map(function (o) {
            return t = i[o](e, t, n)
        }).pop(), "select" == e ? i.set("highlight", o.select, n) : "highlight" == e ? i.set("view", o.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (o.select && i.disabled(o.select) && i.set("select", o.select, n), o.highlight && i.disabled(o.highlight) && i.set("highlight", o.highlight, n)), i)
    }, o.prototype.get = function (e) {
        return this.item[e]
    }, o.prototype.create = function (e, n, o) {
        var r;
        return (n = void 0 === n ? e : n) == -1 / 0 || n == 1 / 0 ? r = n : t.isPlainObject(n) && i.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = i.isDate(n) ? n : this.create().obj) : n = i.isInteger(n) || i.isDate(n) ? this.normalize(new Date(n), o) : this.now(e, n, o), {
            year: r || n.getFullYear(),
            month: r || n.getMonth(),
            date: r || n.getDate(),
            day: r || n.getDay(),
            obj: r || n,
            pick: r || n.getTime()
        }
    }, o.prototype.createRange = function (e, n) {
        var o = this, r = function (e) {
            return !0 === e || t.isArray(e) || i.isDate(e) ? o.create(e) : e
        };
        return i.isInteger(e) || (e = r(e)), i.isInteger(n) || (n = r(n)), i.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : i.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]), {
            from: r(e),
            to: r(n)
        }
    }, o.prototype.withinRange = function (e, t) {
        return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
    }, o.prototype.overlapRanges = function (e, t) {
        return e = this.createRange(e.from, e.to), t = this.createRange(t.from, t.to), this.withinRange(e, t.from) || this.withinRange(e, t.to) || this.withinRange(t, e.from) || this.withinRange(t, e.to)
    }, o.prototype.now = function (e, t, n) {
        return t = new Date, n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n)
    }, o.prototype.navigate = function (e, n, i) {
        var o, r, a, s, l = t.isArray(n), c = t.isPlainObject(n), u = this.item.view;
        if (l || c) {
            for (c ? (r = n.year, a = n.month, s = n.date) : (r = +n[0], a = +n[1], s = +n[2]), i && i.nav && u && u.month !== a && (r = u.year, a = u.month), r = (o = new Date(r, a + (i && i.nav ? i.nav : 0), 1)).getFullYear(), a = o.getMonth(); new Date(r, a, s).getMonth() !== a;) s -= 1;
            n = [r, a, s]
        }
        return n
    }, o.prototype.normalize = function (e) {
        return e.setHours(0, 0, 0, 0), e
    }, o.prototype.measure = function (e, t) {
        return i.isInteger(t) ? t = this.now(e, t, {rel: t}) : t ? "string" == typeof t && (t = this.parse(e, t)) : t = "min" == e ? -1 / 0 : 1 / 0, t
    }, o.prototype.viewset = function (e, t) {
        return this.create([t.year, t.month, 1])
    }, o.prototype.validate = function (e, n, o) {
        var r, a, s, l, c = this, u = n, d = o && o.interval ? o.interval : 1, h = -1 === c.item.enable, f = c.item.min,
            p = c.item.max, g = h && c.item.disable.filter(function (e) {
                if (t.isArray(e)) {
                    var o = c.create(e).pick;
                    o < n.pick ? r = !0 : o > n.pick && (a = !0)
                }
                return i.isInteger(e)
            }).length;
        if ((!o || !o.nav && !o.defaultValue) && (!h && c.disabled(n) || h && c.disabled(n) && (g || r || a) || !h && (n.pick <= f.pick || n.pick >= p.pick))) for (h && !g && (!a && d > 0 || !r && d < 0) && (d *= -1); c.disabled(n) && (Math.abs(d) > 1 && (n.month < u.month || n.month > u.month) && (n = u, d = d > 0 ? 1 : -1), n.pick <= f.pick ? (s = !0, d = 1, n = c.create([f.year, f.month, f.date + (n.pick === f.pick ? 0 : -1)])) : n.pick >= p.pick && (l = !0, d = -1, n = c.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : 1)])), !s || !l);) n = c.create([n.year, n.month, n.date + d]);
        return n
    }, o.prototype.disabled = function (e) {
        var n = this, o = n.item.disable.filter(function (o) {
            return i.isInteger(o) ? e.day === (n.settings.firstDay ? o : o - 1) % 7 : t.isArray(o) || i.isDate(o) ? e.pick === n.create(o).pick : t.isPlainObject(o) ? n.withinRange(o, e) : void 0
        });
        return o = o.length && !o.filter(function (e) {
            return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
        }).length, -1 === n.item.enable ? !o : o || e.pick < n.item.min.pick || e.pick > n.item.max.pick
    }, o.prototype.parse = function (e, t, n) {
        var o = this, r = {};
        return t && "string" == typeof t ? (n && n.format || ((n = n || {}).format = o.settings.format), o.formats.toArray(n.format).map(function (e) {
            var n = o.formats[e], a = n ? i.trigger(n, o, [t, r]) : e.replace(/^!/, "").length;
            n && (r[e] = t.substr(0, a)), t = t.substr(a)
        }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t
    }, o.prototype.formats = function () {
        function e(e, t, n) {
            var i = e.match(/[^\x00-\x7F]+|\w+/)[0];
            return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length
        }

        function t(e) {
            return e.match(/\w+/)[0].length
        }

        return {
            d: function (e, t) {
                return e ? i.digits(e) : t.date
            }, dd: function (e, t) {
                return e ? 2 : i.lead(t.date)
            }, ddd: function (e, n) {
                return e ? t(e) : this.settings.weekdaysShort[n.day]
            }, dddd: function (e, n) {
                return e ? t(e) : this.settings.weekdaysFull[n.day]
            }, m: function (e, t) {
                return e ? i.digits(e) : t.month + 1
            }, mm: function (e, t) {
                return e ? 2 : i.lead(t.month + 1)
            }, mmm: function (t, n) {
                var i = this.settings.monthsShort;
                return t ? e(t, i, n) : i[n.month]
            }, mmmm: function (t, n) {
                var i = this.settings.monthsFull;
                return t ? e(t, i, n) : i[n.month]
            }, yy: function (e, t) {
                return e ? 2 : ("" + t.year).slice(2)
            }, yyyy: function (e, t) {
                return e ? 4 : t.year
            }, toArray: function (e) {
                return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            }, toString: function (e, t) {
                var n = this;
                return n.formats.toArray(e).map(function (e) {
                    return i.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
                }).join("")
            }
        }
    }(), o.prototype.isDateExact = function (e, n) {
        return i.isInteger(e) && i.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (i.isDate(e) || t.isArray(e)) && (i.isDate(n) || t.isArray(n)) ? this.create(e).pick === this.create(n).pick : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && (this.isDateExact(e.from, n.from) && this.isDateExact(e.to, n.to))
    }, o.prototype.isDateOverlap = function (e, n) {
        var o = this.settings.firstDay ? 1 : 0;
        return i.isInteger(e) && (i.isDate(n) || t.isArray(n)) ? (e = e % 7 + o) === this.create(n).day + 1 : i.isInteger(n) && (i.isDate(e) || t.isArray(e)) ? (n = n % 7 + o) === this.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && this.overlapRanges(e, n)
    }, o.prototype.flipEnable = function (e) {
        var t = this.item;
        t.enable = e || (-1 == t.enable ? 1 : -1)
    }, o.prototype.deactivate = function (e, n) {
        var o = this, r = o.item.disable.slice(0);
        return "flip" == n ? o.flipEnable() : !1 === n ? (o.flipEnable(1), r = []) : !0 === n ? (o.flipEnable(-1), r = []) : n.map(function (e) {
            for (var n, a = 0; a < r.length; a += 1) if (o.isDateExact(e, r[a])) {
                n = !0;
                break
            }
            n || (i.isInteger(e) || i.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e)
        }), r
    }, o.prototype.activate = function (e, n) {
        var o = this, r = o.item.disable, a = r.length;
        return "flip" == n ? o.flipEnable() : !0 === n ? (o.flipEnable(1), r = []) : !1 === n ? (o.flipEnable(-1), r = []) : n.map(function (e) {
            var n, s, l, c;
            for (l = 0; l < a; l += 1) {
                if (s = r[l], o.isDateExact(s, e)) {
                    n = r[l] = null, c = !0;
                    break
                }
                if (o.isDateOverlap(s, e)) {
                    t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e)[3] || n.push("inverted") : i.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                    break
                }
            }
            if (n) for (l = 0; l < a; l += 1) if (o.isDateExact(r[l], e)) {
                r[l] = null;
                break
            }
            if (c) for (l = 0; l < a; l += 1) if (o.isDateOverlap(r[l], e)) {
                r[l] = null;
                break
            }
            n && r.push(n)
        }), r.filter(function (e) {
            return null != e
        })
    }, o.prototype.nodes = function (e) {
        var t, n, o = this, r = o.settings, a = o.item, s = a.now, l = a.select, c = a.highlight, u = a.view,
            d = a.disable, h = a.min, f = a.max,
            p = (t = (r.showWeekdaysFull ? r.weekdaysFull : r.weekdaysShort).slice(0), n = r.weekdaysFull.slice(0), r.firstDay && (t.push(t.shift()), n.push(n.shift())), i.node("thead", i.node("tr", i.group({
                min: 0,
                max: 6,
                i: 1,
                node: "th",
                item: function (e) {
                    return [t[e], r.klass.weekdays, 'scope=col title="' + n[e] + '"']
                }
            })))), g = function (e) {
                return i.node("button", " ", r.klass["nav" + (e ? "Next" : "Prev")] + (e && u.year >= f.year && u.month >= f.month || !e && u.year <= h.year && u.month <= h.month ? " " + r.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + i.ariaAttr({
                    role: "button",
                    controls: o.$node[0].id + "_table"
                }) + ' title="' + (e ? r.labelMonthNext : r.labelMonthPrev) + '"')
            }, m = function () {
                var t = r.showMonthsShort ? r.monthsShort : r.monthsFull;
                return r.selectMonths ? i.node("select", i.group({
                    min: 0,
                    max: 11,
                    i: 1,
                    node: "option",
                    item: function (e) {
                        return [t[e], 0, "value=" + e + (u.month == e ? " selected" : "") + (u.year == h.year && e < h.month || u.year == f.year && e > f.month ? " disabled" : "")]
                    }
                }), r.klass.selectMonth, (e ? "" : "disabled") + " " + i.ariaAttr({controls: o.$node[0].id + "_table"}) + ' title="' + r.labelMonthSelect + '"') : i.node("div", t[u.month], r.klass.month)
            }, v = function () {
                var t = u.year, n = !0 === r.selectYears ? 5 : ~~(r.selectYears / 2);
                if (n) {
                    var a = h.year, s = f.year, l = t - n, c = t + n;
                    if (a > l && (c += a - l, l = a), s < c) {
                        var d = l - a, p = c - s;
                        l -= d > p ? p : d, c = s
                    }
                    return i.node("select", i.group({
                        min: l, max: c, i: 1, node: "option", item: function (e) {
                            return [e, 0, "value=" + e + (t == e ? " selected" : "")]
                        }
                    }), r.klass.selectYear, (e ? "" : "disabled") + " " + i.ariaAttr({controls: o.$node[0].id + "_table"}) + ' title="' + r.labelYearSelect + '"')
                }
                return i.node("div", t, r.klass.year)
            };
        return i.node("div", (r.selectYears ? v() + m() : m() + v()) + g() + g(1), r.klass.header) + i.node("table", p + i.node("tbody", i.group({
            min: 0,
            max: 5,
            i: 1,
            node: "tr",
            item: function (e) {
                var t = r.firstDay && 0 === o.create([u.year, u.month, 1]).day ? -7 : 0;
                return [i.group({
                    min: 7 * e - u.day + t + 1, max: function () {
                        return this.min + 7 - 1
                    }, i: 1, node: "td", item: function (e) {
                        e = o.create([u.year, u.month, e + (r.firstDay ? 1 : 0)]);
                        var t, n = l && l.pick == e.pick, a = c && c.pick == e.pick,
                            p = d && o.disabled(e) || e.pick < h.pick || e.pick > f.pick,
                            g = i.trigger(o.formats.toString, o, [r.format, e]);
                        return [i.node("div", e.date, (t = [r.klass.day], t.push(u.month == e.month ? r.klass.infocus : r.klass.outfocus), s.pick == e.pick && t.push(r.klass.now), n && t.push(r.klass.selected), a && t.push(r.klass.highlighted), p && t.push(r.klass.disabled), t.join(" ")), "data-pick=" + e.pick + " " + i.ariaAttr({
                            role: "gridcell",
                            label: g,
                            selected: !(!n || o.$node.val() !== g) || null,
                            activedescendant: !!a || null,
                            disabled: !!p || null
                        })), "", i.ariaAttr({role: "presentation"})]
                    }
                })]
            }
        })), r.klass.table, 'id="' + o.$node[0].id + '_table" ' + i.ariaAttr({
            role: "grid",
            controls: o.$node[0].id,
            readonly: !0
        })) + i.node("div", i.node("button", r.today, r.klass.buttonToday, "type=button data-pick=" + s.pick + (e && !o.disabled(s) ? "" : " disabled") + " " + i.ariaAttr({controls: o.$node[0].id})) + i.node("button", r.clear, r.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + i.ariaAttr({controls: o.$node[0].id})) + i.node("button", r.close, r.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + i.ariaAttr({controls: o.$node[0].id})), r.klass.footer)
    }, o.defaults = {
        labelMonthNext: "Next month",
        labelMonthPrev: "Previous month",
        labelMonthSelect: "Select a month",
        labelYearSelect: "Select a year",
        monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        today: "Today",
        clear: "Clear",
        close: "Close",
        closeOnSelect: !0,
        closeOnClear: !0,
        updateInput: !0,
        format: "d mmmm, yyyy",
        klass: {
            table: (n = e.klasses().picker + "__") + "table",
            header: n + "header",
            navPrev: n + "nav--prev btn btn-flat",
            navNext: n + "nav--next btn btn-flat",
            navDisabled: n + "nav--disabled",
            month: n + "month",
            year: n + "year",
            selectMonth: n + "select--month",
            selectYear: n + "select--year",
            weekdays: n + "weekday",
            day: n + "day",
            disabled: n + "day--disabled",
            selected: n + "day--selected",
            highlighted: n + "day--highlighted",
            now: n + "day--today",
            infocus: n + "day--infocus",
            outfocus: n + "day--outfocus",
            footer: n + "footer",
            buttonClear: n + "button--clear",
            buttonToday: n + "button--today",
            buttonClose: n + "button--close"
        }
    }, e.extend("pickadate", o)
}), $.extend($.fn.pickadate.defaults, {
    selectMonths: !0, selectYears: 15, onRender: function () {
        var e = this.$root, t = this.get("highlight", "yyyy"), n = this.get("highlight", "dd"),
            i = this.get("highlight", "mmm"), o = this.get("highlight", "dddd").slice(0, 3),
            r = i.charAt(0).toUpperCase() + i.slice(1);
        e.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + ', </div><div class="picker__month-display"><div>' + r + '</div></div><div class="picker__day-display"><div>' + n + '</div></div><div    class="picker__year-display"><div>' + t + "</div></div></div>")
    }
}), function () {
    var e, t, n, i = window.jQuery, o = i(window), r = i(document), a = "http://www.w3.org/2000/svg",
        s = "SVGAngle" in window && ((t = document.createElement("div")).innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == a, t.innerHTML = "", e),
        l = "transition" in (n = document.createElement("div").style) || "WebkitTransition" in n || "MozTransition" in n || "msTransition" in n || "OTransition" in n,
        c = "ontouchstart" in window, u = "mousedown" + (c ? " touchstart" : ""),
        d = "mousemove.clockpicker" + (c ? " touchmove.clockpicker" : ""),
        h = "mouseup.clockpicker" + (c ? " touchend.clockpicker" : ""),
        f = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null;

    function p(e) {
        return document.createElementNS(a, e)
    }

    function g(e, t, n) {
        var i;
        return function () {
            var o = this, r = arguments, a = n && !i;
            clearTimeout(i), i = setTimeout(function () {
                i = null, n || e.apply(o, r)
            }, t), a && e.apply(o, r)
        }
    }

    function m(e) {
        return (e < 10 ? "0" : "") + e
    }

    var v = 0;
    var y = 135, b = 110, x = 80, w = 20, k = 2 * y, C = l ? 350 : 1,
        S = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");

    function _(e, t) {
        var n, o, a = i(S), l = a.find(".clockpicker-plate"), c = a.find(".picker__holder"),
            f = a.find(".clockpicker-hours"), _ = a.find(".clockpicker-minutes"),
            E = a.find(".clockpicker-am-pm-block"), A = "INPUT" === e.prop("tagName"), D = A ? e : e.find("input"),
            I = (D.prop("type"), i("label[for=" + D.attr("id") + "]")), P = this;
        if (this.id = (o = ++v + "", (n = "cp") ? n + o : o), this.element = e, this.holder = c, this.options = t, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = A, this.input = D, this.label = I, this.popover = a, this.plate = l, this.hoursView = f, this.minutesView = _, this.amPmBlock = E, this.spanHours = a.find(".clockpicker-span-hours"), this.spanMinutes = a.find(".clockpicker-span-minutes"), this.spanAmPm = a.find(".clockpicker-span-am-pm"), this.footer = a.find(".picker__footer"), this.amOrPm = "", t.twelvehour) {
            var M = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
            i(M);
            t.ampmclickable ? (this.spanAmPm.empty(), i('<div id="click-am">AM</div>').on("click", function () {
                P.spanAmPm.children("#click-am").addClass("text-primary"), P.spanAmPm.children("#click-pm").removeClass("text-primary"), P.amOrPm = "AM"
            }).appendTo(this.spanAmPm), i('<div id="click-pm">PM</div>').on("click", function () {
                P.spanAmPm.children("#click-pm").addClass("text-primary"), P.spanAmPm.children("#click-am").removeClass("text-primary"), P.amOrPm = "PM"
            }).appendTo(this.spanAmPm)) : (i('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function () {
                P.amOrPm = "AM", P.amPmBlock.children(".pm-button").removeClass("active"), P.amPmBlock.children(".am-button").addClass("active"), P.spanAmPm.empty().append("AM")
            }).appendTo(this.amPmBlock), i('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function () {
                P.amOrPm = "PM", P.amPmBlock.children(".am-button").removeClass("active"), P.amPmBlock.children(".pm-button").addClass("active"), P.spanAmPm.empty().append("PM")
            }).appendTo(this.amPmBlock))
        }
        t.darktheme && a.addClass("darktheme"), i('<button type="button" class="btn btn-flat clockpicker-button" tabindex="' + (t.twelvehour ? "3" : "1") + '">' + t.donetext + "</button>").click(i.proxy(this.done, this)).appendTo(this.footer), i('<button type="button" class="btn btn-flat clockpicker-button" tabindex="' + (t.twelvehour ? "4" : "2") + '">' + t.cleartext + "</button>").click(i.proxy(this.clearInput, this)).appendTo(this.footer), this.spanHours.click(i.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(i.proxy(this.toggleView, this, "minutes")), D.on("focus.clockpicker click.clockpicker", g(i.proxy(this.show, this), 100));
        var O, L, N, F, R = i('<div class="clockpicker-tick"></div>');
        if (t.twelvehour) for (O = 0; O < 12; O += t.hourstep) L = R.clone(), N = O / 6 * Math.PI, F = b, L.css("font-size", "140%"), L.css({
            left: y + Math.sin(N) * F - w,
            top: y - Math.cos(N) * F - w
        }), L.html(0 === O ? 12 : O), f.append(L), L.on(u, H); else for (O = 0; O < 24; O += t.hourstep) {
            L = R.clone(), N = O / 6 * Math.PI;
            var j = O > 0 && O < 13;
            F = j ? x : b, L.css({
                left: y + Math.sin(N) * F - w,
                top: y - Math.cos(N) * F - w
            }), j && L.css("font-size", "120%"), L.html(0 === O ? "00" : O), f.append(L), L.on(u, H)
        }
        var $ = Math.max(t.minutestep, 5);
        for (O = 0; O < 60; O += $) for (O = 0; O < 60; O += 5) L = R.clone(), N = O / 30 * Math.PI, L.css({
            left: y + Math.sin(N) * b - w,
            top: y - Math.cos(N) * b - w
        }), L.css("font-size", "140%"), L.html(m(O)), _.append(L), L.on(u, H);

        function H(e, n) {
            var i = l.offset(), o = /^touch/.test(e.type), a = i.left + y, c = i.top + y,
                u = (o ? e.originalEvent.touches[0] : e).pageX - a, f = (o ? e.originalEvent.touches[0] : e).pageY - c,
                p = Math.sqrt(u * u + f * f), g = !1;
            if (!n || !(p < b - w || p > b + w)) {
                e.preventDefault();
                var m = setTimeout(function () {
                    P.popover.addClass("clockpicker-moving")
                }, 200);
                s && l.append(P.canvas), P.setHand(u, f, !n, !0), r.off(d).on(d, function (e) {
                    e.preventDefault();
                    var t = /^touch/.test(e.type), n = (t ? e.originalEvent.touches[0] : e).pageX - a,
                        i = (t ? e.originalEvent.touches[0] : e).pageY - c;
                    (g || n !== u || i !== f) && (g = !0, P.setHand(n, i, !1, !0))
                }), r.off(h).on(h, function (e) {
                    r.off(h), e.preventDefault();
                    var i = /^touch/.test(e.type), o = (i ? e.originalEvent.changedTouches[0] : e).pageX - a,
                        s = (i ? e.originalEvent.changedTouches[0] : e).pageY - c;
                    (n || g) && o === u && s === f && P.setHand(o, s), "hours" === P.currentView ? P.toggleView("minutes", C / 2) : t.autoclose && (P.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
                        P.done()
                    }, C / 2)), l.prepend(W), clearTimeout(m), P.popover.removeClass("clockpicker-moving"), r.off(d)
                })
            }
        }

        if (l.on(u, function (e) {
            0 === i(e.target).closest(".clockpicker-tick").length && H(e, !0)
        }), s) {
            var W = a.find(".clockpicker-canvas"), B = p("svg");
            B.setAttribute("class", "clockpicker-svg"), B.setAttribute("width", k), B.setAttribute("height", k);
            var V = p("g");
            V.setAttribute("transform", "translate(" + y + "," + y + ")");
            var z = p("circle");
            z.setAttribute("class", "clockpicker-canvas-bearing"), z.setAttribute("cx", 0), z.setAttribute("cy", 0), z.setAttribute("r", 2);
            var q = p("line");
            q.setAttribute("x1", 0), q.setAttribute("y1", 0);
            var Y = p("circle");
            Y.setAttribute("class", "clockpicker-canvas-bg"), Y.setAttribute("r", w);
            var U = p("circle");
            U.setAttribute("class", "clockpicker-canvas-fg"), U.setAttribute("r", 5), V.appendChild(q), V.appendChild(Y), V.appendChild(U), V.appendChild(z), B.appendChild(V), W.append(B), this.hand = q, this.bg = Y, this.fg = U, this.bearing = z, this.g = V, this.canvas = W
        }
        T(this.options.init)
    }

    function T(e) {
        e && "function" == typeof e && e()
    }

    _.DEFAULTS = {
        default: "",
        fromnow: 0,
        donetext: "Done",
        cleartext: "Clear",
        autoclose: !1,
        ampmclickable: !1,
        darktheme: !1,
        twelvehour: !1,
        vibrate: !0,
        hourstep: 1,
        minutestep: 1,
        ampmSubmit: !1
    }, _.prototype.toggle = function () {
        this[this.isShown ? "hide" : "show"]()
    }, _.prototype.locate = function () {
        var e = this.element, t = this.popover;
        e.offset(), e.outerWidth(), e.outerHeight(), this.options.align;
        t.show()
    }, _.prototype.parseInputValue = function () {
        var e = this.input.prop("value") || this.options.default || "";
        if ("now" === e && (e = new Date(+new Date + this.options.fromnow)), e instanceof Date && (e = e.getHours() + ":" + e.getMinutes()), e = e.split(":"), this.hours = +e[0] || 0, this.minutes = +(e[1] + "").replace(/\D/g, "") || 0, this.hours = Math.round(this.hours / this.options.hourstep) * this.options.hourstep, this.minutes = Math.round(this.minutes / this.options.minutestep) * this.options.minutestep, this.options.twelvehour) {
            var t = (e[1] + "").replace(/\d+/g, "").toLowerCase();
            this.amOrPm = this.hours > 12 || "pm" === t ? "PM" : "AM"
        }
    }, _.prototype.show = function (e) {
        if (!this.isShown) {
            T(this.options.beforeShow), i(":input").each(function () {
                i(this).attr("tabindex", -1)
            });
            var t = this;
            this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), i(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), o.on("resize.clockpicker" + this.id, function () {
                t.isShown && t.locate()
            }), this.isAppended = !0), this.parseInputValue(), this.spanHours.html(m(this.hours)), this.spanMinutes.html(m(this.minutes)), this.options.twelvehour && this.spanAmPm.empty().append(this.amOrPm), this.toggleView("hours"), this.locate(), this.isShown = !0, r.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, g(function (e) {
                var n = i(e.target);
                0 === n.closest(t.popover.find(".picker__wrap")).length && 0 === n.closest(t.input).length && t.hide()
            }, 100)), r.on("keyup.clockpicker." + this.id, g(function (e) {
                27 === e.keyCode && t.hide()
            }, 100)), T(this.options.afterShow)
        }
    }, _.prototype.hide = function () {
        T(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), i(document.body).css("overflow", "visible"), this.isShown = !1, i(":input").each(function (e) {
            i(this).attr("tabindex", e + 1)
        }), r.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), r.off("keyup.clockpicker." + this.id), this.popover.hide(), T(this.options.afterHide)
    }, _.prototype.toggleView = function (e, t) {
        var n = !1;
        "minutes" === e && "visible" === i(this.hoursView).css("visibility") && (T(this.options.beforeHourSelect), n = !0);
        var o = "hours" === e, r = o ? this.hoursView : this.minutesView, a = o ? this.minutesView : this.hoursView;
        this.currentView = e, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), a.addClass("clockpicker-dial-out"), r.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(t), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
            a.css("visibility", "hidden")
        }, C), n && T(this.options.afterHourSelect)
    }, _.prototype.resetClock = function (e) {
        var t = this.currentView, n = this[t], i = "hours" === t, o = n * (Math.PI / (i ? 6 : 30)),
            r = i && n > 0 && n < 13 ? x : b, a = Math.sin(o) * r, l = -Math.cos(o) * r, c = this;
        s && e ? (c.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
            c.canvas.removeClass("clockpicker-canvas-out"), c.setHand(a, l)
        }, e)) : this.setHand(a, l)
    }, _.prototype.setHand = function (e, t, n, o) {
        var r, a, l = Math.atan2(e, -t), c = "hours" === this.currentView, u = Math.sqrt(e * e + t * t),
            d = this.options, h = c && u < (b + x) / 2, p = h ? x : b;
        if (r = c ? d.hourstep / 6 * Math.PI : d.minutestep / 30 * Math.PI, d.twelvehour && (p = b), l < 0 && (l = 2 * Math.PI + l), l = (a = Math.round(l / r)) * r, c ? (a *= d.hourstep, d.twelvehour || !h != a > 0 || (a += 12), d.twelvehour && 0 === a && (a = 12), 24 === a && (a = 0)) : 60 === (a *= d.minutestep) && (a = 0), c ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : a % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== a && f && this.options.vibrate && (this.vibrateTimer || (navigator[f](10), this.vibrateTimer = setTimeout(i.proxy(function () {
            this.vibrateTimer = null
        }, this), 100))), this[this.currentView] = a, this[c ? "spanHours" : "spanMinutes"].html(m(a)), s) {
            o || !c && a % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
            var g = Math.sin(l) * p, v = -Math.cos(l) * p;
            this.hand.setAttribute("x2", g), this.hand.setAttribute("y2", v), this.bg.setAttribute("cx", g), this.bg.setAttribute("cy", v), this.fg.setAttribute("cx", g), this.fg.setAttribute("cy", v)
        } else this[c ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
            var e = i(this);
            e.toggleClass("active", a === +e.html())
        })
    }, _.prototype.clearInput = function () {
        this.input.val(""), this.hide(), this.options.afterDone && "function" == typeof this.options.afterDone && this.options.afterDone(this.input, null)
    }, _.prototype.getTime = function (e) {
        this.parseInputValue();
        var t = this.hours;
        this.options.twelvehour && t < 12 && "PM" === this.amOrPm && (t += 12);
        var n = new Date;
        return n.setMinutes(this.minutes), n.setHours(t), n.setSeconds(0), e && e.apply(this.element, n) || n
    }, _.prototype.done = function () {
        T(this.options.beforeDone), this.hide(), this.label.addClass("active");
        var e = this.input.prop("value"), t = this.hours, n = ":" + m(this.minutes);
        this.isHTML5 && this.options.twelvehour && (this.hours < 12 && "PM" === this.amOrPm && (t += 12), 12 === this.hours && "AM" === this.amOrPm && (t = 0)), n = m(t) + n, !this.isHTML5 && this.options.twelvehour && (n += this.amOrPm), this.input.prop("value", n), n !== e && (this.input.trigger("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), T(this.options.afterDone)
    }, _.prototype.remove = function () {
        this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (o.off("resize.clockpicker" + this.id), this.popover.remove())
    }, i.fn.pickatime = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);

        function n() {
            var n = i(this), o = n.data("clockpicker");
            if (o) "function" == typeof o[e] && o[e].apply(o, t); else {
                var r = i.extend({}, _.DEFAULTS, n.data(), "object" == typeof e && e);
                n.data("clockpicker", new _(n, r))
            }
        }

        if (1 == this.length) {
            var o = n.apply(this[0]);
            return void 0 !== o ? o : this
        }
        return this.each(n)
    }
}(), function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function () {
    "use strict";
    return function (e, t, n, i) {
        var o = {
            features: null, bind: function (e, t, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1)
            }, isArray: function (e) {
                return e instanceof Array
            }, createEl: function (e, t) {
                var n = document.createElement(t || "div");
                return e && (n.className = e), n
            }, getScrollY: function () {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            }, unbind: function (e, t, n) {
                o.bind(e, t, n, !0)
            }, removeClass: function (e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }, addClass: function (e, t) {
                o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            }, hasClass: function (e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            }, getChildByClass: function (e, t) {
                for (var n = e.firstChild; n;) {
                    if (o.hasClass(n, t)) return n;
                    n = n.nextSibling
                }
            }, arraySearch: function (e, t, n) {
                for (var i = e.length; i--;) if (e[i][n] === t) return i;
                return -1
            }, extend: function (e, t, n) {
                for (var i in t) if (t.hasOwnProperty(i)) {
                    if (n && e.hasOwnProperty(i)) continue;
                    e[i] = t[i]
                }
            }, easing: {
                sine: {
                    out: function (e) {
                        return Math.sin(e * (Math.PI / 2))
                    }, inOut: function (e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                }, cubic: {
                    out: function (e) {
                        return --e * e * e + 1
                    }
                }
            }, detectFeatures: function () {
                if (o.features) return o.features;
                var e = o.createEl().style, t = "", n = {};
                if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
                    var i = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        r && r.length > 0 && (r = parseInt(r[1], 10)) >= 1 && 8 > r && (n.isOldIOSPhone = !0)
                    }
                    var a = i.match(/Android\s([0-9\.]*)/), s = a ? a[1] : 0;
                    (s = parseFloat(s)) >= 1 && (4.4 > s && (n.isOldAndroid = !0), n.androidVersion = s), n.isMobileOpera = /opera mini|opera mobi/i.test(i)
                }
                for (var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], h = 0; 4 > h; h++) {
                    t = d[h];
                    for (var f = 0; 3 > f; f++) l = u[f], c = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l), !n[l] && c in e && (n[l] = c);
                    t && !n.raf && (t = t.toLowerCase(), n.raf = window[t + "RequestAnimationFrame"], n.raf && (n.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                }
                if (!n.raf) {
                    var p = 0;
                    n.raf = function (e) {
                        var t = (new Date).getTime(), n = Math.max(0, 16 - (t - p)), i = window.setTimeout(function () {
                            e(t + n)
                        }, n);
                        return p = t + n, i
                    }, n.caf = function (e) {
                        clearTimeout(e)
                    }
                }
                return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n
            }
        };
        o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, n, i) {
            t = t.split(" ");
            for (var o, r = (i ? "detach" : "attach") + "Event", a = function () {
                n.handleEvent.call(n)
            }, s = 0; s < t.length; s++) if (o = t[s]) if ("object" == typeof n && n.handleEvent) {
                if (i) {
                    if (!n["oldIE" + o]) return !1
                } else n["oldIE" + o] = a;
                e[r]("on" + o, n["oldIE" + o])
            } else e[r]("on" + o, n)
        });
        var r = this, a = {
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
            isClickableElement: function (e) {
                return "A" === e.tagName
            },
            getDoubleTapZoom: function (e, t) {
                return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        o.extend(a, i);
        var s, l, c, u, d, h, f, p, g, m, v, y, b, x, w, k, C, S, _, T, E, A, D, I, P, M, O, L, N, F, R, j, $, H, W, B,
            V, z, q, Y, U, X, K, Q, G, Z, J, ee, te, ne, ie, oe, re, ae, se, le = {x: 0, y: 0}, ce = {x: 0, y: 0},
            ue = {x: 0, y: 0}, de = {}, he = 0, fe = {}, pe = {x: 0, y: 0}, ge = 0, me = !0, ve = [], ye = {}, be = !1,
            xe = function (e, t) {
                o.extend(r, t.publicMethods), ve.push(e)
            }, we = function (e) {
                var t = Ht();
                return e > t - 1 ? e - t : 0 > e ? t + e : e
            }, ke = {}, Ce = function (e, t) {
                return ke[e] || (ke[e] = []), ke[e].push(t)
            }, Se = function (e) {
                var t = ke[e];
                if (t) {
                    var n = Array.prototype.slice.call(arguments);
                    n.shift();
                    for (var i = 0; i < t.length; i++) t[i].apply(r, n)
                }
            }, _e = function () {
                return (new Date).getTime()
            }, Te = function (e) {
                re = e, r.bg.style.opacity = e * a.bgOpacity
            }, Ee = function (e, t, n, i, o) {
                (!be || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), e[A] = y + t + "px, " + n + "px" + b + " scale(" + i + ")"
            }, Ae = function (e) {
                ee && (e && (m > r.currItem.fitRatio ? be || (Kt(r.currItem, !1, !0), be = !0) : be && (Kt(r.currItem), be = !1)), Ee(ee, ue.x, ue.y, m))
            }, De = function (e) {
                e.container && Ee(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
            }, Ie = function (e, t) {
                t[A] = y + e + "px, 0px" + b
            }, Pe = function (e, t) {
                if (!a.loop && t) {
                    var n = u + (pe.x * he - e) / pe.x, i = Math.round(e - ct.x);
                    (0 > n && i > 0 || n >= Ht() - 1 && 0 > i) && (e = ct.x + i * a.mainScrollEndFriction)
                }
                ct.x = e, Ie(e, d)
            }, Me = function (e, t) {
                var n = ut[e] - fe[e];
                return ce[e] + le[e] + n - n * (t / v)
            }, Oe = function (e, t) {
                e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
            }, Le = function (e) {
                e.x = Math.round(e.x), e.y = Math.round(e.y)
            }, Ne = null, Fe = function () {
                Ne && (o.unbind(document, "mousemove", Fe), o.addClass(e, "pswp--has_mouse"), a.mouseUsed = !0, Se("mouseUsed")), Ne = setTimeout(function () {
                    Ne = null
                }, 100)
            }, Re = function (e, t) {
                var n = qt(r.currItem, de, e);
                return t && (J = n), n
            }, je = function (e) {
                return e || (e = r.currItem), e.initialZoomLevel
            }, $e = function (e) {
                return e || (e = r.currItem), e.w > 0 ? a.maxSpreadZoom : 1
            }, He = function (e, t, n, i) {
                return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Me(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
            }, We = function (e) {
                var t = "";
                a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
            }, Be = function (e) {
                e && (U || Y || te || B) && (e.preventDefault(), e.stopPropagation())
            }, Ve = function () {
                r.setScrollOffset(0, o.getScrollY())
            }, ze = {}, qe = 0, Ye = function (e) {
                ze[e] && (ze[e].raf && M(ze[e].raf), qe--, delete ze[e])
            }, Ue = function (e) {
                ze[e] && Ye(e), ze[e] || (qe++, ze[e] = {})
            }, Xe = function () {
                for (var e in ze) ze.hasOwnProperty(e) && Ye(e)
            }, Ke = function (e, t, n, i, o, r, a) {
                var s, l = _e();
                Ue(e);
                var c = function () {
                    if (ze[e]) {
                        if ((s = _e() - l) >= i) return Ye(e), r(n), void (a && a());
                        r((n - t) * o(s / i) + t), ze[e].raf = P(c)
                    }
                };
                c()
            }, Qe = {
                shout: Se, listen: Ce, viewportSize: de, options: a, isMainScrollAnimating: function () {
                    return te
                }, getZoomLevel: function () {
                    return m
                }, getCurrentIndex: function () {
                    return u
                }, isDragging: function () {
                    return z
                }, isZooming: function () {
                    return G
                }, setScrollOffset: function (e, t) {
                    fe.x = e, F = fe.y = t, Se("updateScrollOffset", fe)
                }, applyZoomPan: function (e, t, n, i) {
                    ue.x = t, ue.y = n, m = e, Ae(i)
                }, init: function () {
                    if (!s && !l) {
                        var n;
                        r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), O = e.className, s = !0, R = o.detectFeatures(), P = R.raf, M = R.caf, A = R.transform, N = R.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), d = r.container.style, r.itemHolders = k = [{
                            el: r.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {el: r.container.children[1], wrap: 0, index: -1}, {
                            el: r.container.children[2],
                            wrap: 0,
                            index: -1
                        }], k[0].el.style.display = k[2].el.style.display = "none", function () {
                            if (A) {
                                var t = R.perspective && !I;
                                return y = "translate" + (t ? "3d(" : "("), void (b = R.perspective ? ", 0px)" : ")")
                            }
                            A = "left", o.addClass(e, "pswp--ie"), Ie = function (e, t) {
                                t.left = e + "px"
                            }, De = function (e) {
                                var t = e.fitRatio > 1 ? 1 : e.fitRatio, n = e.container.style, i = t * e.w, o = t * e.h;
                                n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                            }, Ae = function () {
                                if (ee) {
                                    var e = ee, t = r.currItem, n = t.fitRatio > 1 ? 1 : t.fitRatio, i = n * t.w,
                                        o = n * t.h;
                                    e.width = i + "px", e.height = o + "px", e.left = ue.x + "px", e.top = ue.y + "px"
                                }
                            }
                        }(), g = {resize: r.updateSize, scroll: Ve, keydown: We, click: Be};
                        var i = R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
                        for (R.animationName && R.transform && !i || (a.showAnimationDuration = a.hideAnimationDuration = 0), n = 0; n < ve.length; n++) r["init" + ve[n]]();
                        t && (r.ui = new t(r, o)).init(), Se("firstUpdate"), u = u || a.index || 0, (isNaN(u) || 0 > u || u >= Ht()) && (u = 0), r.currItem = $t(u), (R.isOldIOSPhone || R.isOldAndroid) && (me = !1), e.setAttribute("aria-hidden", "false"), a.modal && (me ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === F && (Se("initialLayout"), F = L = o.getScrollY());
                        var c = "pswp--open ";
                        for (a.mainClass && (c += a.mainClass + " "), a.showHideOpacity && (c += "pswp--animate_opacity "), c += I ? "pswp--touch" : "pswp--notouch", c += R.animationName ? " pswp--css_animation" : "", c += R.svg ? " pswp--svg" : "", o.addClass(e, c), r.updateSize(), h = -1, ge = null, n = 0; 3 > n; n++) Ie((n + h) * pe.x, k[n].el.style);
                        N || o.bind(r.scrollWrap, p, r), Ce("initialZoomInEnd", function () {
                            r.setContent(k[0], u - 1), r.setContent(k[2], u + 1), k[0].el.style.display = k[2].el.style.display = "block", a.focus && e.focus(), o.bind(document, "keydown", r), R.transform && o.bind(r.scrollWrap, "click", r), a.mouseUsed || o.bind(document, "mousemove", Fe), o.bind(window, "resize scroll", r), Se("bindEvents")
                        }), r.setContent(k[1], u), r.updateCurrItem(), Se("afterInit"), me || (x = setInterval(function () {
                            qe || z || G || m !== r.currItem.initialZoomLevel || r.updateSize()
                        }, 1e3)), o.addClass(e, "pswp--visible")
                    }
                }, close: function () {
                    s && (s = !1, l = !0, Se("close"), o.unbind(window, "resize", r), o.unbind(window, "scroll", g.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", Fe), R.transform && o.unbind(r.scrollWrap, "click", r), z && o.unbind(window, f, r), Se("unbindEvents"), Wt(r.currItem, null, !0, r.destroy))
                }, destroy: function () {
                    Se("destroy"), Nt && clearTimeout(Nt), e.setAttribute("aria-hidden", "true"), e.className = O, x && clearInterval(x), o.unbind(r.scrollWrap, p, r), o.unbind(window, "scroll", r), ft(), Xe(), ke = null
                }, panTo: function (e, t, n) {
                    n || (e > J.min.x ? e = J.min.x : e < J.max.x && (e = J.max.x), t > J.min.y ? t = J.min.y : t < J.max.y && (t = J.max.y)), ue.x = e, ue.y = t, Ae()
                }, handleEvent: function (e) {
                    e = e || window.event, g[e.type] && g[e.type](e)
                }, goTo: function (e) {
                    var t = (e = we(e)) - u;
                    ge = t, u = e, r.currItem = $t(u), he -= t, Pe(pe.x * he), Xe(), te = !1, r.updateCurrItem()
                }, next: function () {
                    r.goTo(u + 1)
                }, prev: function () {
                    r.goTo(u - 1)
                }, updateCurrZoomItem: function (e) {
                    if (e && Se("beforeChange", 0), k[1].el.children.length) {
                        var t = k[1].el.children[0];
                        ee = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                    } else ee = null;
                    J = r.currItem.bounds, v = m = r.currItem.initialZoomLevel, ue.x = J.center.x, ue.y = J.center.y, e && Se("afterChange")
                }, invalidateCurrItems: function () {
                    w = !0;
                    for (var e = 0; 3 > e; e++) k[e].item && (k[e].item.needsUpdate = !0)
                }, updateCurrItem: function (e) {
                    if (0 !== ge) {
                        var t, n = Math.abs(ge);
                        if (!(e && 2 > n)) {
                            r.currItem = $t(u), be = !1, Se("beforeChange", ge), n >= 3 && (h += ge + (ge > 0 ? -3 : 3), n = 3);
                            for (var i = 0; n > i; i++) ge > 0 ? (t = k.shift(), k[2] = t, Ie((++h + 2) * pe.x, t.el.style), r.setContent(t, u - n + i + 1 + 1)) : (t = k.pop(), k.unshift(t), Ie(--h * pe.x, t.el.style), r.setContent(t, u + n - i - 1 - 1));
                            if (ee && 1 === Math.abs(ge)) {
                                var o = $t(C);
                                o.initialZoomLevel !== m && (qt(o, de), Kt(o), De(o))
                            }
                            ge = 0, r.updateCurrZoomItem(), C = u, Se("afterChange")
                        }
                    }
                }, updateSize: function (t) {
                    if (!me && a.modal) {
                        var n = o.getScrollY();
                        if (F !== n && (e.style.top = n + "px", F = n), !t && ye.x === window.innerWidth && ye.y === window.innerHeight) return;
                        ye.x = window.innerWidth, ye.y = window.innerHeight, e.style.height = ye.y + "px"
                    }
                    if (de.x = r.scrollWrap.clientWidth, de.y = r.scrollWrap.clientHeight, Ve(), pe.x = de.x + Math.round(de.x * a.spacing), pe.y = de.y, Pe(pe.x * he), Se("beforeResize"), void 0 !== h) {
                        for (var i, s, l, c = 0; 3 > c; c++) i = k[c], Ie((c + h) * pe.x, i.el.style), l = u + c - 1, a.loop && Ht() > 2 && (l = we(l)), (s = $t(l)) && (w || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(i, l), 1 === c && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && l >= 0 && r.setContent(i, l), s && s.container && (qt(s, de), Kt(s), De(s));
                        w = !1
                    }
                    v = m = r.currItem.initialZoomLevel, (J = r.currItem.bounds) && (ue.x = J.center.x, ue.y = J.center.y, Ae(!0)), Se("resize")
                }, zoomTo: function (e, t, n, i, r) {
                    t && (v = m, ut.x = Math.abs(t.x) - ue.x, ut.y = Math.abs(t.y) - ue.y, Oe(ce, ue));
                    var a = Re(e, !1), s = {};
                    He("x", a, s, e), He("y", a, s, e);
                    var l = m, c = ue.x, u = ue.y;
                    Le(s);
                    var d = function (t) {
                        1 === t ? (m = e, ue.x = s.x, ue.y = s.y) : (m = (e - l) * t + l, ue.x = (s.x - c) * t + c, ue.y = (s.y - u) * t + u), r && r(t), Ae(1 === t)
                    };
                    n ? Ke("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, d) : d(1)
                }
            }, Ge = {}, Ze = {}, Je = {}, et = {}, tt = {}, nt = [], it = {}, ot = [], rt = {}, at = 0, st = {x: 0, y: 0},
            lt = 0, ct = {x: 0, y: 0}, ut = {x: 0, y: 0}, dt = {x: 0, y: 0}, ht = function (e, t) {
                return rt.x = Math.abs(e.x - t.x), rt.y = Math.abs(e.y - t.y), Math.sqrt(rt.x * rt.x + rt.y * rt.y)
            }, ft = function () {
                X && (M(X), X = null)
            }, pt = function () {
                z && (X = P(pt), At())
            }, gt = function (e, t) {
                return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : gt(e.parentNode, t))
            }, mt = {}, vt = function (e, t) {
                return mt.prevent = !gt(e.target, a.isClickableElement), Se("preventDragEvent", e, t, mt), mt.prevent
            }, yt = function (e, t) {
                return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
            }, bt = function (e, t, n) {
                n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
            }, xt = function () {
                var e = ue.y - r.currItem.initialPosition.y;
                return 1 - Math.abs(e / (de.y / 2))
            }, wt = {}, kt = {}, Ct = [], St = function (e) {
                for (; Ct.length > 0;) Ct.pop();
                return D ? (se = 0, nt.forEach(function (e) {
                    0 === se ? Ct[0] = e : 1 === se && (Ct[1] = e), se++
                })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Ct[0] = yt(e.touches[0], wt), e.touches.length > 1 && (Ct[1] = yt(e.touches[1], kt))) : (wt.x = e.pageX, wt.y = e.pageY, wt.id = "", Ct[0] = wt), Ct
            }, _t = function (e, t) {
                var n, i, o, s, l = ue[e] + t[e], c = t[e] > 0, u = ct.x + t.x, d = ct.x - it.x;
                return n = l > J.min[e] || l < J.max[e] ? a.panEndFriction : 1, l = ue[e] + t[e] * n, !a.allowPanToNext && m !== r.currItem.initialZoomLevel || (ee ? "h" !== ne || "x" !== e || Y || (c ? (l > J.min[e] && (n = a.panEndFriction, J.min[e], i = J.min[e] - ce[e]), (0 >= i || 0 > d) && Ht() > 1 ? (s = u, 0 > d && u > it.x && (s = it.x)) : J.min.x !== J.max.x && (o = l)) : (l < J.max[e] && (n = a.panEndFriction, J.max[e], i = ce[e] - J.max[e]), (0 >= i || d > 0) && Ht() > 1 ? (s = u, d > 0 && u < it.x && (s = it.x)) : J.min.x !== J.max.x && (o = l))) : s = u, "x" !== e) ? void (te || K || m > r.currItem.fitRatio && (ue[e] += t[e] * n)) : (void 0 !== s && (Pe(s, !0), K = s !== it.x), J.min.x !== J.max.x && (void 0 !== o ? ue.x = o : K || (ue.x += t.x * n)), void 0 !== s)
            }, Tt = function (e) {
                if (!("mousedown" === e.type && e.button > 0)) {
                    if (jt) return void e.preventDefault();
                    if (!V || "mousedown" !== e.type) {
                        if (vt(e, !0) && e.preventDefault(), Se("pointerDown"), D) {
                            var t = o.arraySearch(nt, e.pointerId, "id");
                            0 > t && (t = nt.length), nt[t] = {x: e.pageX, y: e.pageY, id: e.pointerId}
                        }
                        var n = St(e), i = n.length;
                        Q = null, Xe(), z && 1 !== i || (z = ie = !0, o.bind(window, f, r), W = ae = oe = B = K = U = q = Y = !1, ne = null, Se("firstTouchStart", n), Oe(ce, ue), le.x = le.y = 0, Oe(et, n[0]), Oe(tt, et), it.x = pe.x * he, ot = [{
                            x: et.x,
                            y: et.y
                        }], $ = j = _e(), Re(m, !0), ft(), pt()), !G && i > 1 && !te && !K && (v = m, Y = !1, G = q = !0, le.y = le.x = 0, Oe(ce, ue), Oe(Ge, n[0]), Oe(Ze, n[1]), bt(Ge, Ze, dt), ut.x = Math.abs(dt.x) - ue.x, ut.y = Math.abs(dt.y) - ue.y, Z = ht(Ge, Ze))
                    }
                }
            }, Et = function (e) {
                if (e.preventDefault(), D) {
                    var t = o.arraySearch(nt, e.pointerId, "id");
                    if (t > -1) {
                        var n = nt[t];
                        n.x = e.pageX, n.y = e.pageY
                    }
                }
                if (z) {
                    var i = St(e);
                    if (ne || U || G) Q = i; else if (ct.x !== pe.x * he) ne = "h"; else {
                        var r = Math.abs(i[0].x - et.x) - Math.abs(i[0].y - et.y);
                        Math.abs(r) >= 10 && (ne = r > 0 ? "h" : "v", Q = i)
                    }
                }
            }, At = function () {
                if (Q) {
                    var e = Q.length;
                    if (0 !== e) if (Oe(Ge, Q[0]), Je.x = Ge.x - et.x, Je.y = Ge.y - et.y, G && e > 1) {
                        if (et.x = Ge.x, et.y = Ge.y, !Je.x && !Je.y && function (e, t) {
                            return e.x === t.x && e.y === t.y
                        }(Q[1], Ze)) return;
                        Oe(Ze, Q[1]), Y || (Y = !0, Se("zoomGestureStarted"));
                        var t = ht(Ge, Ze), n = Ot(t);
                        n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ae = !0);
                        var i = 1, o = je(), s = $e();
                        if (o > n) if (a.pinchToClose && !ae && v <= r.currItem.initialZoomLevel) {
                            var l = 1 - (o - n) / (o / 1.2);
                            Te(l), Se("onPinchClose", l), oe = !0
                        } else (i = (o - n) / o) > 1 && (i = 1), n = o - i * (o / 3); else n > s && ((i = (n - s) / (6 * o)) > 1 && (i = 1), n = s + i * o);
                        0 > i && (i = 0), bt(Ge, Ze, st), le.x += st.x - dt.x, le.y += st.y - dt.y, Oe(dt, st), ue.x = Me("x", n), ue.y = Me("y", n), W = n > m, m = n, Ae()
                    } else {
                        if (!ne) return;
                        if (ie && (ie = !1, Math.abs(Je.x) >= 10 && (Je.x -= Q[0].x - tt.x), Math.abs(Je.y) >= 10 && (Je.y -= Q[0].y - tt.y)), et.x = Ge.x, et.y = Ge.y, 0 === Je.x && 0 === Je.y) return;
                        if ("v" === ne && a.closeOnVerticalDrag && "fit" === a.scaleMode && m === r.currItem.initialZoomLevel) {
                            le.y += Je.y, ue.y += Je.y;
                            var c = xt();
                            return B = !0, Se("onVerticalDrag", c), Te(c), void Ae()
                        }
                        (function (e, t, n) {
                            if (e - $ > 50) {
                                var i = ot.length > 2 ? ot.shift() : {};
                                i.x = t, i.y = n, ot.push(i), $ = e
                            }
                        })(_e(), Ge.x, Ge.y), U = !0, J = r.currItem.bounds, _t("x", Je) || (_t("y", Je), Le(ue), Ae())
                    }
                }
            }, Dt = function (e) {
                if (R.isOldAndroid) {
                    if (V && "mouseup" === e.type) return;
                    e.type.indexOf("touch") > -1 && (clearTimeout(V), V = setTimeout(function () {
                        V = 0
                    }, 600))
                }
                var t;
                if (Se("pointerUp"), vt(e, !1) && e.preventDefault(), D) {
                    var n = o.arraySearch(nt, e.pointerId, "id");
                    n > -1 && (t = nt.splice(n, 1)[0], navigator.pointerEnabled ? t.type = e.pointerType || "mouse" : (t.type = {
                        4: "mouse",
                        2: "touch",
                        3: "pen"
                    }[e.pointerType], t.type || (t.type = e.pointerType || "mouse")))
                }
                var i, s = St(e), l = s.length;
                if ("mouseup" === e.type && (l = 0), 2 === l) return Q = null, !0;
                1 === l && Oe(tt, s[0]), 0 !== l || ne || te || (t || ("mouseup" === e.type ? t = {
                    x: e.pageX,
                    y: e.pageY,
                    type: "mouse"
                } : e.changedTouches && e.changedTouches[0] && (t = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY,
                    type: "touch"
                })), Se("touchRelease", e, t));
                var c = -1;
                if (0 === l && (z = !1, o.unbind(window, f, r), ft(), G ? c = 0 : -1 !== lt && (c = _e() - lt)), lt = 1 === l ? _e() : -1, i = -1 !== c && 150 > c ? "zoom" : "swipe", G && 2 > l && (G = !1, 1 === l && (i = "zoomPointerUp"), Se("zoomGestureEnded")), Q = null, U || Y || te || B) if (Xe(), H || (H = It()), H.calculateSwipeSpeed("x"), B) if (xt() < a.verticalDragRange) r.close(); else {
                    var u = ue.y, d = re;
                    Ke("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
                        ue.y = (r.currItem.initialPosition.y - u) * e + u, Te((1 - d) * e + d), Ae()
                    }), Se("onVerticalDrag", 1)
                } else {
                    if ((K || te) && 0 === l) {
                        if (Mt(i, H)) return;
                        i = "zoomPointerUp"
                    }
                    if (!te) return "swipe" !== i ? void Lt() : void (!K && m > r.currItem.fitRatio && Pt(H))
                }
            }, It = function () {
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
                        ot.length > 1 ? (e = _e() - $ + 50, t = ot[ot.length - 2][i]) : (e = _e() - j, t = tt[i]), n.lastFlickOffset[i] = et[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                    },
                    calculateOverBoundsAnimOffset: function (e, t) {
                        n.backAnimStarted[e] || (ue[e] > J.min[e] ? n.backAnimDestination[e] = J.min[e] : ue[e] < J.max[e] && (n.backAnimDestination[e] = J.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, Ke("bounceZoomPan" + e, ue[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
                            ue[e] = t, Ae()
                        }))))
                    },
                    calculateAnimOffset: function (e) {
                        n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, ue[e] += n.distanceOffset[e])
                    },
                    panAnimLoop: function () {
                        return ze.zoomPan && (ze.zoomPan.raf = P(n.panAnimLoop), n.now = _e(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Ae(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (ue.x = Math.round(ue.x), ue.y = Math.round(ue.y), Ae(), void Ye("zoomPan")) : void 0
                    }
                };
                return n
            }, Pt = function (e) {
                return e.calculateSwipeSpeed("y"), J = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (Ue("zoomPan"), e.lastNow = _e(), void e.panAnimLoop())
            }, Mt = function (e, t) {
                var n, i, s;
                if (te || (at = u), "swipe" === e) {
                    var l = et.x - tt.x, c = t.lastFlickDist.x < 10;
                    l > 30 && (c || t.lastFlickOffset.x > 20) ? i = -1 : -30 > l && (c || t.lastFlickOffset.x < -20) && (i = 1)
                }
                i && (0 > (u += i) ? (u = a.loop ? Ht() - 1 : 0, s = !0) : u >= Ht() && (u = a.loop ? 0 : Ht() - 1, s = !0), (!s || a.loop) && (ge += i, he -= i, n = !0));
                var d, h = pe.x * he, f = Math.abs(h - ct.x);
                return n || h > ct.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, at === u && (n = !1), te = !0, Se("mainScrollAnimStart"), Ke("mainScroll", ct.x, h, d, o.easing.cubic.out, Pe, function () {
                    Xe(), te = !1, at = -1, (n || at !== u) && r.updateCurrItem(), Se("mainScrollAnimComplete")
                }), n && r.updateCurrItem(!0), n
            }, Ot = function (e) {
                return 1 / Z * e * v
            }, Lt = function () {
                var e = m, t = je(), n = $e();
                t > m ? e = t : m > n && (e = n);
                var i, a = re;
                return oe && !W && !ae && t > m ? (r.close(), !0) : (oe && (i = function (e) {
                    Te((1 - a) * e + a)
                }), r.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
            };
        xe("Gestures", {
            publicMethods: {
                initGestures: function () {
                    var e = function (e, t, n, i, o) {
                        S = e + t, _ = e + n, T = e + i, E = o ? e + o : ""
                    };
                    (D = R.pointerEvent) && R.touch && (R.touch = !1), D ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : R.touch ? (e("touch", "start", "move", "end", "cancel"), I = !0) : e("mouse", "down", "move", "up"), f = _ + " " + T + " " + E, p = S, D && !I && (I = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = I, g[S] = Tt, g[_] = Et, g[T] = Dt, E && (g[E] = g[T]), R.touch && (p += " mousedown", f += " mousemove mouseup", g.mousedown = g[S], g.mousemove = g[_], g.mouseup = g[T]), I || (a.allowPanToNext = !1)
                }
            }
        });
        var Nt, Ft, Rt, jt, $t, Ht, Wt = function (t, n, i, s) {
            var l;
            Nt && clearTimeout(Nt), jt = !0, Rt = !0, t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(u);
            var d = i ? a.hideAnimationDuration : a.showAnimationDuration, h = function () {
                Ye("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Te(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), Se("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), jt = !1
            };
            if (!d || !l || void 0 === l.x) return Se("initialZoom" + (i ? "Out" : "In")), m = t.initialZoomLevel, Oe(ue, t.initialPosition), Ae(), e.style.opacity = i ? 0 : 1, Te(1), void (d ? setTimeout(function () {
                h()
            }, d) : h());
            !function () {
                var n = c, s = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
                t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (m = l.w / t.w, ue.x = l.x, ue.y = l.y - L, r[s ? "template" : "bg"].style.opacity = .001, Ae()), Ue("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), s && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
                    o.addClass(e, "pswp--animate_opacity")
                }, 30)), Nt = setTimeout(function () {
                    if (Se("initialZoom" + (i ? "Out" : "In")), i) {
                        var r = l.w / t.w, a = {x: ue.x, y: ue.y}, c = m, u = re, f = function (t) {
                            1 === t ? (m = r, ue.x = l.x, ue.y = l.y - F) : (m = (r - c) * t + c, ue.x = (l.x - a.x) * t + a.x, ue.y = (l.y - F - a.y) * t + a.y), Ae(), s ? e.style.opacity = 1 - t : Te(u - t * u)
                        };
                        n ? Ke("initialZoom", 0, 1, d, o.easing.cubic.out, f, h) : (f(1), Nt = setTimeout(h, d + 20))
                    } else m = t.initialZoomLevel, Oe(ue, t.initialPosition), Ae(), Te(1), s ? e.style.opacity = 1 : Te(1), Nt = setTimeout(h, d + 20)
                }, i ? 25 : 90)
            }()
        }, Bt = {}, Vt = [], zt = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function () {
                return Ft.length
            }
        }, qt = function (e, t, n) {
            if (e.src && !e.loadError) {
                var i = !n;
                if (i && (e.vGap || (e.vGap = {
                    top: 0,
                    bottom: 0
                }), Se("parseVerticalMargin", e)), Bt.x = t.x, Bt.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                    var o = Bt.x / e.w, r = Bt.y / e.h;
                    e.fitRatio = r > o ? o : r;
                    var s = a.scaleMode;
                    "orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        }, max: {x: 0, y: 0}, min: {x: 0, y: 0}
                    })
                }
                if (!n) return;
                return function (e, t, n) {
                    var i = e.bounds;
                    i.center.x = Math.round((Bt.x - t) / 2), i.center.y = Math.round((Bt.y - n) / 2) + e.vGap.top, i.max.x = t > Bt.x ? Math.round(Bt.x - t) : i.center.x, i.max.y = n > Bt.y ? Math.round(Bt.y - n) + e.vGap.top : i.center.y, i.min.x = t > Bt.x ? 0 : i.center.x, i.min.y = n > Bt.y ? e.vGap.top : i.center.y
                }(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
            }
            return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
                center: {x: 0, y: 0},
                max: {x: 0, y: 0},
                min: {x: 0, y: 0}
            }, e.initialPosition = e.bounds.center, e.bounds
        }, Yt = function (e, t, n, i, o, a) {
            t.loadError || i && (t.imageAppended = !0, Kt(t, i, t === r.currItem && be), n.appendChild(i), a && setTimeout(function () {
                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
            }, 500))
        }, Ut = function (e) {
            e.loading = !0, e.loaded = !1;
            var t = e.img = o.createEl("pswp__img", "img"), n = function () {
                e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
            };
            return t.onload = n, t.onerror = function () {
                e.loadError = !0, n()
            }, t.src = e.src, t
        }, Xt = function (e, t) {
            return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = a.errorMsg.replace("%url%", e.src), !0) : void 0
        }, Kt = function (e, t, n) {
            if (e.src) {
                t || (t = e.container.lastChild);
                var i = n ? e.w : Math.round(e.w * e.fitRatio), o = n ? e.h : Math.round(e.h * e.fitRatio);
                e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
            }
        }, Qt = function () {
            if (Vt.length) {
                for (var e, t = 0; t < Vt.length; t++) (e = Vt[t]).holder.index === e.index && Yt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                Vt = []
            }
        };
        xe("Controller", {
            publicMethods: {
                lazyLoadItem: function (e) {
                    e = we(e);
                    var t = $t(e);
                    t && (!t.loaded && !t.loading || w) && (Se("gettingData", e, t), t.src && Ut(t))
                }, initController: function () {
                    o.extend(a, zt, !0), r.items = Ft = n, $t = r.getItemAt, Ht = a.getNumItemsFn, a.loop, Ht() < 3 && (a.loop = !1), Ce("beforeChange", function (e) {
                        var t, n = a.preload, i = null === e || e >= 0, o = Math.min(n[0], Ht()),
                            s = Math.min(n[1], Ht());
                        for (t = 1; (i ? s : o) >= t; t++) r.lazyLoadItem(u + t);
                        for (t = 1; (i ? o : s) >= t; t++) r.lazyLoadItem(u - t)
                    }), Ce("initialLayout", function () {
                        r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(u)
                    }), Ce("mainScrollAnimComplete", Qt), Ce("initialZoomInEnd", Qt), Ce("destroy", function () {
                        for (var e, t = 0; t < Ft.length; t++) (e = Ft[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                        Vt = null
                    })
                }, getItemAt: function (e) {
                    return e >= 0 && void 0 !== Ft[e] && Ft[e]
                }, allowProgressiveImg: function () {
                    return a.forceProgressiveLoading || !I || a.mouseUsed || screen.width > 1200
                }, setContent: function (e, t) {
                    a.loop && (t = we(t));
                    var n = r.getItemAt(e.index);
                    n && (n.container = null);
                    var i, l = r.getItemAt(t);
                    if (l) {
                        Se("gettingData", t, l), e.index = t, e.item = l;
                        var c = l.container = o.createEl("pswp__zoom-wrap");
                        if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), Xt(l), qt(l, de), !l.src || l.loadError || l.loaded) l.src && !l.loadError && ((i = o.createEl("pswp__img", "img")).style.opacity = 1, i.src = l.src, Kt(l, i), Yt(0, l, c, i)); else {
                            if (l.loadComplete = function (n) {
                                if (s) {
                                    if (e && e.index === t) {
                                        if (Xt(n, !0)) return n.loadComplete = n.img = null, qt(n, de), De(n), void (e.index === u && r.updateCurrZoomItem());
                                        n.imageAppended ? !jt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : R.transform && (te || jt) ? Vt.push({
                                            item: n,
                                            baseDiv: c,
                                            img: n.img,
                                            index: t,
                                            holder: e,
                                            clearPlaceholder: !0
                                        }) : Yt(0, n, c, n.img, 0, !0)
                                    }
                                    n.loadComplete = null, n.img = null, Se("imageLoadComplete", t, n)
                                }
                            }, o.features.transform) {
                                var d = "pswp__img pswp__img--placeholder";
                                d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                var h = o.createEl(d, l.msrc ? "img" : "");
                                l.msrc && (h.src = l.msrc), Kt(l, h), c.appendChild(h), l.placeholder = h
                            }
                            l.loading || Ut(l), r.allowProgressiveImg() && (!Rt && R.transform ? Vt.push({
                                item: l,
                                baseDiv: c,
                                img: l.img,
                                index: t,
                                holder: e
                            }) : Yt(0, l, c, l.img, 0, !0))
                        }
                        Rt || t !== u ? De(l) : (ee = c.style, Wt(l, i || l.img)), e.el.innerHTML = "", e.el.appendChild(c)
                    } else e.el.innerHTML = ""
                }, cleanSlide: function (e) {
                    e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });
        var Gt, Zt, Jt = {}, en = function (e, t, n) {
            var i = document.createEvent("CustomEvent"),
                o = {origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch"};
            i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
        };
        xe("Tap", {
            publicMethods: {
                initTap: function () {
                    Ce("firstTouchStart", r.onTapStart), Ce("touchRelease", r.onTapRelease), Ce("destroy", function () {
                        Jt = {}, Gt = null
                    })
                }, onTapStart: function (e) {
                    e.length > 1 && (clearTimeout(Gt), Gt = null)
                }, onTapRelease: function (e, t) {
                    if (t && !U && !q && !qe) {
                        var n = t;
                        if (Gt && (clearTimeout(Gt), Gt = null, function (e, t) {
                            return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                        }(n, Jt))) return void Se("doubleTap", n);
                        if ("mouse" === t.type) return void en(e, t, "mouse");
                        if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap")) return void en(e, t);
                        Oe(Jt, n), Gt = setTimeout(function () {
                            en(e, t), Gt = null
                        }, 300)
                    }
                }
            }
        }), xe("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function () {
                    N || (I ? Ce("mouseUsed", function () {
                        r.setupDesktopZoom()
                    }) : r.setupDesktopZoom(!0))
                }, setupDesktopZoom: function (t) {
                    Zt = {};
                    var n = "wheel mousewheel DOMMouseScroll";
                    Ce("bindEvents", function () {
                        o.bind(e, n, r.handleMouseWheel)
                    }), Ce("unbindEvents", function () {
                        Zt && o.unbind(e, n, r.handleMouseWheel)
                    }), r.mouseZoomedIn = !1;
                    var i, a = function () {
                        r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > m ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s()
                    }, s = function () {
                        i && (o.removeClass(e, "pswp--dragging"), i = !1)
                    };
                    Ce("resize", a), Ce("afterChange", a), Ce("pointerDown", function () {
                        r.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
                    }), Ce("pointerUp", s), t || a()
                }, handleMouseWheel: function (e) {
                    if (m <= r.currItem.fitRatio) return a.modal && (!a.closeOnScroll || qe || z ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (c = !0, r.close())), !0;
                    if (e.stopPropagation(), Zt.x = 0, "deltaX" in e) 1 === e.deltaMode ? (Zt.x = 18 * e.deltaX, Zt.y = 18 * e.deltaY) : (Zt.x = e.deltaX, Zt.y = e.deltaY); else if ("wheelDelta" in e) e.wheelDeltaX && (Zt.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? Zt.y = -.16 * e.wheelDeltaY : Zt.y = -.16 * e.wheelDelta; else {
                        if (!("detail" in e)) return;
                        Zt.y = e.detail
                    }
                    Re(m, !0);
                    var t = ue.x - Zt.x, n = ue.y - Zt.y;
                    (a.modal || t <= J.min.x && t >= J.max.x && n <= J.min.y && n >= J.max.y) && e.preventDefault(), r.panTo(t, n)
                }, toggleDesktopZoom: function (t) {
                    t = t || {x: de.x / 2 + fe.x, y: de.y / 2 + fe.y};
                    var n = a.getDoubleTapZoom(!0, r.currItem), i = m === n;
                    r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                }
            }
        });
        var tn, nn, on, rn, an, sn, ln, cn, un, dn, hn, fn, pn = {history: !0, galleryUID: 1}, gn = function () {
            return hn.hash.substring(1)
        }, mn = function () {
            tn && clearTimeout(tn), on && clearTimeout(on)
        }, vn = function () {
            var e = gn(), t = {};
            if (e.length < 5) return t;
            var n, i = e.split("&");
            for (n = 0; n < i.length; n++) if (i[n]) {
                var o = i[n].split("=");
                o.length < 2 || (t[o[0]] = o[1])
            }
            if (a.galleryPIDs) {
                var r = t.pid;
                for (t.pid = 0, n = 0; n < Ft.length; n++) if (Ft[n].pid === r) {
                    t.pid = n;
                    break
                }
            } else t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0), t
        }, yn = function () {
            if (on && clearTimeout(on), qe || z) on = setTimeout(yn, 500); else {
                rn ? clearTimeout(nn) : rn = !0;
                var e = u + 1, t = $t(u);
                t.hasOwnProperty("pid") && (e = t.pid);
                var n = ln + "&gid=" + a.galleryUID + "&pid=" + e;
                cn || -1 === hn.hash.indexOf(n) && (dn = !0);
                var i = hn.href.split("#")[0] + "#" + n;
                fn ? "#" + n !== window.location.hash && history[cn ? "replaceState" : "pushState"]("", document.title, i) : cn ? hn.replace(i) : hn.hash = n, cn = !0, nn = setTimeout(function () {
                    rn = !1
                }, 60)
            }
        };
        xe("History", {
            publicMethods: {
                initHistory: function () {
                    if (o.extend(a, pn, !0), a.history) {
                        hn = window.location, dn = !1, un = !1, cn = !1, ln = gn(), fn = "pushState" in history, ln.indexOf("gid=") > -1 && (ln = (ln = ln.split("&gid=")[0]).split("?gid=")[0]), Ce("afterChange", r.updateURL), Ce("unbindEvents", function () {
                            o.unbind(window, "hashchange", r.onHashChange)
                        });
                        var e = function () {
                            sn = !0, un || (dn ? history.back() : ln ? hn.hash = ln : fn ? history.pushState("", document.title, hn.pathname + hn.search) : hn.hash = ""), mn()
                        };
                        Ce("unbindEvents", function () {
                            c && e()
                        }), Ce("destroy", function () {
                            sn || e()
                        }), Ce("firstUpdate", function () {
                            u = vn().pid
                        });
                        var t = ln.indexOf("pid=");
                        t > -1 && "&" === (ln = ln.substring(0, t)).slice(-1) && (ln = ln.slice(0, -1)), setTimeout(function () {
                            s && o.bind(window, "hashchange", r.onHashChange)
                        }, 40)
                    }
                }, onHashChange: function () {
                    return gn() === ln ? (un = !0, void r.close()) : void (rn || (an = !0, r.goTo(vn().pid), an = !1))
                }, updateURL: function () {
                    mn(), an || (cn ? tn = setTimeout(yn, 800) : yn())
                }
            }
        }), o.extend(r, Qe)
    }
}), function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function () {
    "use strict";
    return function (e, t) {
        var n, i, o, r, a, s, l, c, u, d, h, f, p, g, m, v, y, b, x = this, w = !1, k = !0, C = !0, S = {
            barsSize: {top: 44, bottom: "auto"},
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
            clickToCloseNonZoomable: !0,
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
            }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
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
        }, _ = function (e) {
            if (v) return !0;
            e = e || window.event, m.timeToIdle && m.mouseUsed && !u && N();
            for (var n, i, o = (e.target || e.srcElement).getAttribute("class") || "", r = 0; r < $.length; r++) (n = $[r]).onTap && o.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
            if (i) {
                e.stopPropagation && e.stopPropagation(), v = !0;
                var a = t.features.isOldAndroid ? 600 : 30;
                setTimeout(function () {
                    v = !1
                }, a)
            }
        }, T = function () {
            return !e.likelyTouchDevice || m.mouseUsed || screen.width > m.fitControlsWidth
        }, E = function (e, n, i) {
            t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
        }, A = function () {
            var e = 1 === m.getNumItemsFn();
            e !== g && (E(i, "ui--one-slide", e), g = e)
        }, D = function () {
            E(l, "share-modal--hidden", C)
        }, I = function () {
            return (C = !C) ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
                C && D()
            }, 300)) : (D(), setTimeout(function () {
                C || t.addClass(l, "pswp__share-modal--fade-in")
            }, 30)), C || M(), !1
        }, P = function (t) {
            var n = (t = t || window.event).target || t.srcElement;
            return e.shout("shareLinkClick", t, n), !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), C || I(), 1))
        }, M = function () {
            for (var e, t, n, i, o = "", r = 0; r < m.shareButtons.length; r++) e = m.shareButtons[r], t = m.getImageURLForShare(e), n = m.getPageURLForShare(e), i = m.getTextForShare(e), o += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(i)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", m.parseShareButtonOut && (o = m.parseShareButtonOut(e, o));
            l.children[0].innerHTML = o, l.children[0].onclick = P
        }, O = function (e) {
            for (var n = 0; n < m.closeElClasses.length; n++) if (t.hasClass(e, "pswp__" + m.closeElClasses[n])) return !0
        }, L = 0, N = function () {
            clearTimeout(b), L = 0, u && x.setIdle(!1)
        }, F = function (e) {
            var t = (e = e || window.event).relatedTarget || e.toElement;
            t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function () {
                x.setIdle(!0)
            }, m.timeToIdleOutside))
        }, R = function (e) {
            f !== e && (E(h, "preloader--active", !e), f = e)
        }, j = function (e) {
            var n = e.vGap;
            if (T()) {
                var a = m.barsSize;
                if (m.captionEl && "auto" === a.bottom) if (r || ((r = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")), i.insertBefore(r, o), t.addClass(i, "pswp__ui--fit")), m.addCaptionHTMLFn(e, r, !0)) {
                    var s = r.clientHeight;
                    n.bottom = parseInt(s, 10) || 44
                } else n.bottom = a.top; else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                n.top = a.top
            } else n.top = n.bottom = 0
        }, $ = [{
            name: "caption", option: "captionEl", onInit: function (e) {
                o = e
            }
        }, {
            name: "share-modal", option: "shareEl", onInit: function (e) {
                l = e
            }, onTap: function () {
                I()
            }
        }, {
            name: "button--share", option: "shareEl", onInit: function (e) {
                s = e
            }, onTap: function () {
                I()
            }
        }, {name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom}, {
            name: "counter",
            option: "counterEl",
            onInit: function (e) {
                a = e
            }
        }, {name: "button--close", option: "closeEl", onTap: e.close}, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: e.prev
        }, {name: "button--arrow--right", option: "arrowEl", onTap: e.next}, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
                n.isFullscreen() ? n.exit() : n.enter()
            }
        }, {
            name: "preloader", option: "preloaderEl", onInit: function (e) {
                h = e
            }
        }];
        x.init = function () {
            t.extend(e.options, S, !0), m = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, function () {
                var e;
                d("onVerticalDrag", function (e) {
                    k && .95 > e ? x.hideControls() : !k && e >= .95 && x.showControls()
                }), d("onPinchClose", function (t) {
                    k && .9 > t ? (x.hideControls(), e = !0) : e && !k && t > .9 && x.showControls()
                }), d("zoomGestureEnded", function () {
                    (e = !1) && !k && x.showControls()
                })
            }(), d("beforeChange", x.update), d("doubleTap", function (t) {
                var n = e.currItem.initialZoomLevel;
                e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(m.getDoubleTapZoom(!1, e.currItem), t, 333)
            }), d("preventDragEvent", function (e, t, n) {
                var i = e.target || e.srcElement;
                i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
            }), d("bindEvents", function () {
                t.bind(i, "pswpTap click", _), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
            }), d("unbindEvents", function () {
                C || I(), y && clearInterval(y), t.unbind(document, "mouseout", F), t.unbind(document, "mousemove", N), t.unbind(i, "pswpTap click", _), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (m.hideAnimationDuration = 0, n.exit()), n = null)
            }), d("destroy", function () {
                m.captionEl && (r && i.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
            }), m.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function () {
                m.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
            }), d("initialZoomOut", function () {
                t.addClass(i, "pswp__ui--hidden")
            }), d("parseVerticalMargin", j), function () {
                var e, n, o, r = function (i) {
                    if (i) for (var r = i.length, a = 0; r > a; a++) {
                        e = i[a], n = e.className;
                        for (var s = 0; s < $.length; s++) o = $[s], n.indexOf("pswp__" + o.name) > -1 && (m[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                    }
                };
                r(i.children);
                var a = t.getChildByClass(i, "pswp__top-bar");
                a && r(a.children)
            }(), m.shareEl && s && l && (C = !0), A(), m.timeToIdle && d("mouseUsed", function () {
                t.bind(document, "mousemove", N), t.bind(document, "mouseout", F), y = setInterval(function () {
                    2 == ++L && x.setIdle(!0)
                }, m.timeToIdle / 2)
            }), m.fullscreenEl && !t.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")), m.preloaderEl && (R(!0), d("beforeChange", function () {
                clearTimeout(p), p = setTimeout(function () {
                    e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && R(!1) : R(!0)
                }, m.loadingIndicatorDelay)
            }), d("imageLoadComplete", function (t, n) {
                e.currItem === n && R(!0)
            }))
        }, x.setIdle = function (e) {
            u = e, E(i, "ui--idle", e)
        }, x.update = function () {
            k && e.currItem ? (x.updateIndexIndicator(), m.captionEl && (m.addCaptionHTMLFn(e.currItem, o), E(o, "caption--empty", !e.currItem.title)), w = !0) : w = !1, C || I(), A()
        }, x.updateFullscreen = function (i) {
            i && setTimeout(function () {
                e.setScrollOffset(0, t.getScrollY())
            }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, x.updateIndexIndicator = function () {
            m.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + m.indexIndicatorSep + m.getNumItemsFn())
        }, x.onGlobalTap = function (n) {
            var i = (n = n || window.event).target || n.srcElement;
            if (!v) if (n.detail && "mouse" === n.detail.pointerType) {
                if (O(i)) return void e.close();
                t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? m.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
            } else if (m.tapToToggleControls && (k ? x.hideControls() : x.showControls()), m.tapToClose && (t.hasClass(i, "pswp__img") || O(i))) return void e.close()
        }, x.onMouseOver = function (e) {
            var t = (e = e || window.event).target || e.srcElement;
            E(i, "ui--over-close", O(t))
        }, x.hideControls = function () {
            t.addClass(i, "pswp__ui--hidden"), k = !1
        }, x.showControls = function () {
            k = !0, w || x.update(), t.removeClass(i, "pswp__ui--hidden")
        }, x.supportsFullscreen = function () {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, x.getFullscreenAPI = function () {
            var t, n = document.documentElement, i = "fullscreenchange";
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
                return c = m.closeOnScroll, m.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, t.exit = function () {
                return m.closeOnScroll = c, document[this.exitK]()
            }, t.isFullscreen = function () {
                return document[this.elementK]
            }), t
        }
    }
});
var initPhotoSwipeFromDOM = function (e) {
    for (var t = function (e) {
        (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1;
        var t = function e(t, n) {
            return t && (n(t) ? t : e(t.parentNode, n))
        }(e.target || e.srcElement, function (e) {
            return e.tagName && "FIGURE" === e.tagName.toUpperCase()
        });
        if (t) {
            for (var i, o = t.parentNode, r = t.parentNode.childNodes, a = r.length, s = 0, l = 0; l < a; l++) if (1 === r[l].nodeType) {
                if (r[l] === t) {
                    i = s;
                    break
                }
                s++
            }
            return i >= 0 && n(i, o), !1
        }
    }, n = function (e, t, n, i) {
        var o, r, a = document.querySelectorAll(".pswp")[0];
        if (r = function (e) {
            for (var t, n, i, o, r = e.childNodes, a = r.length, s = [], l = 0; l < a; l++) 1 === (t = r[l]).nodeType && (i = (n = t.children[0]).getAttribute("data-size").split("x"), o = {
                src: n.getAttribute("href"),
                w: parseInt(i[0], 10),
                h: parseInt(i[1], 10)
            }, t.children.length > 1 && (o.title = t.children[1].innerHTML), n.children.length > 0 && (o.msrc = n.children[0].getAttribute("src")), o.el = t, s.push(o));
            return s
        }(t), o = {
            galleryUID: t.getAttribute("data-pswp-uid"), getThumbBoundsFn: function (e) {
                var t = r[e].el.getElementsByTagName("img")[0],
                    n = window.pageYOffset || document.documentElement.scrollTop, i = t.getBoundingClientRect();
                return {x: i.left, y: i.top + n, w: i.width}
            }
        }, i) if (o.galleryPIDs) {
            for (var s = 0; s < r.length; s++) if (r[s].pid == e) {
                o.index = s;
                break
            }
        } else o.index = parseInt(e, 10) - 1; else o.index = parseInt(e, 10);
        isNaN(o.index) || (n && (o.showAnimationDuration = 0), new PhotoSwipe(a, PhotoSwipeUI_Default, r, o).init())
    }, i = document.querySelectorAll(e), o = 0, r = i.length; o < r; o++) i[o].setAttribute("data-pswp-uid", o + 1), i[o].onclick = t;
    var a = function () {
        var e = window.location.hash.substring(1), t = {};
        if (e.length < 5) return t;
        for (var n = e.split("&"), i = 0; i < n.length; i++) if (n[i]) {
            var o = n[i].split("=");
            o.length < 2 || (t[o[0]] = o[1])
        }
        return t.gid && (t.gid = parseInt(t.gid, 10)), t
    }();
    a.pid && a.gid && n(a.pid, i[a.gid - 1], !0, !0)
};

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

initPhotoSwipeFromDOM(".mdb-lightbox"), function (e) {
    var t = 0, n = function () {
        function n(i, o) {
            _classCallCheck(this, n), this.defaults = {
                topSpacing: t,
                zIndex: !1,
                stopper: "#footer",
                stickyClass: !1,
                startScrolling: "top",
                minWidth: !1
            }, this.$element = i, this.options = this.assignOptions(o), this.$window = e(window), this.stopper = this.options.stopper, this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.$placeholder = e('<div class="sticky-placeholder"></div>'), this.scrollTop = 0, this.setPushPoint(), this.setStopperPosition(), this.bindEvents()
        }

        return _createClass(n, [{
            key: "assignOptions", value: function (t) {
                return e.extend({}, this.defaults, t)
            }
        }, {
            key: "bindEvents", value: function () {
                this.$window.on("resize", this.handleResize.bind(this)), this.$window.on("scroll", this.init.bind(this))
            }
        }, {
            key: "hasZIndex", value: function () {
                return "number" == typeof this.options.zIndex
            }
        }, {
            key: "hasStopper", value: function () {
                return e(this.options.stopper).length || "number" == typeof this.options.stopper
            }
        }, {
            key: "isScreenHeightEnough", value: function () {
                return this.$element.outerHeight() + this.options.topSpacing < this.$window.height()
            }
        }, {
            key: "setStopperPosition", value: function () {
                "string" == typeof this.options.stopper ? this.stopPoint = e(this.stopper).offset().top - this.options.topSpacing : "number" == typeof this.options.stopper && (this.stopPoint = this.options.stopper)
            }
        }, {
            key: "setPushPoint", value: function () {
                "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$pushPoint = this.$element.offset().top - this.options.topSpacing : this.$pushPoint = this.$element.offset().top + this.$element.outerHeight(!0) - this.$window.height()
            }
        }, {
            key: "handleResize", value: function () {
                this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.setPushPoint(), this.setStopperPosition(), this.init()
            }
        }, {
            key: "init", value: function () {
                if (this.options.minWidth && this.options.minWidth > this.$window.innerWidth()) return !1;
                "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.scrollTop = this.$window.scrollTop() : this.scrollTop = this.$window.scrollTop() + this.$window.height(), this.$pushPoint < this.scrollTop ? (this.appendPlaceholder(), this.stickyStart()) : this.stickyEnd(), this.$window.scrollTop() > this.$pushPoint ? this.stop() : this.stickyEnd()
            }
        }, {
            key: "appendPlaceholder", value: function () {
                this.$element.after(this.$placeholder), this.$placeholder.css({
                    width: this.elementWidth,
                    height: this.elementHeight
                })
            }
        }, {
            key: "stickyStart", value: function () {
                this.options.stickyClass && this.$element.addClass(this.options.stickyClass), this.$element.get(0).style.overflow = "scroll";
                var e = this.$element.get(0).scrollHeight;
                this.$element.get(0).style.overflow = "", this.$element.css({
                    position: "fixed",
                    width: this.elementWidth,
                    height: e
                }), "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$element.css({top: this.options.topSpacing}) : this.$element.css({
                    bottom: 0,
                    top: ""
                }), this.hasZIndex() && this.$element.css({zIndex: this.options.zIndex})
            }
        }, {
            key: "stickyEnd", value: function () {
                this.options.stickyClass && this.$element.removeClass(this.options.stickyClass), this.$placeholder.remove(), this.$element.css({
                    position: "static",
                    top: t
                })
            }
        }, {
            key: "stop", value: function () {
                this.stopPoint < e(this.$element).offset().top + this.$element.outerHeight(!0) && this.$element.css({
                    position: "absolute",
                    bottom: 0,
                    top: ""
                })
            }
        }]), n
    }();
    e.fn.sticky = function (t) {
        return this.each(function () {
            var i = e(this);
            e(window).on("load", function () {
                new n(i, t).init()
            })
        })
    }
}(jQuery), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.PerfectScrollbar = t()
}(this, function () {
    "use strict";

    function e(e) {
        return getComputedStyle(e)
    }

    function t(e, t) {
        for (var n in t) {
            var i = t[n];
            "number" == typeof i && (i += "px"), e.style[n] = i
        }
        return e
    }

    function n(e) {
        var t = document.createElement("div");
        return t.className = e, t
    }

    function i(e, t) {
        if (!g) throw new Error("No element matching method supported");
        return g.call(e, t)
    }

    function o(e) {
        e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
    }

    function r(e, t) {
        return Array.prototype.filter.call(e.children, function (e) {
            return i(e, t)
        })
    }

    function a(e, t) {
        var n = e.element.classList, i = m.state.scrolling(t);
        n.contains(i) ? clearTimeout(v[t]) : n.add(i)
    }

    function s(e, t) {
        v[t] = setTimeout(function () {
            return e.isAlive && e.element.classList.remove(m.state.scrolling(t))
        }, e.settings.scrollingThreshold)
    }

    function l(e, t) {
        a(e, t), s(e, t)
    }

    function c(e) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(e, !1, !1, void 0), t
    }

    function u(e) {
        return parseInt(e, 10) || 0
    }

    function d(e) {
        return i(e, "input,[contenteditable]") || i(e, "select,[contenteditable]") || i(e, "textarea,[contenteditable]") || i(e, "button,[contenteditable]")
    }

    function h(e, t) {
        return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
    }

    function f(e, n) {
        var i = {width: n.railXWidth}, o = Math.floor(e.scrollTop);
        n.isRtl ? i.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : i.left = e.scrollLeft, n.isScrollbarXUsingBottom ? i.bottom = n.scrollbarXBottom - o : i.top = n.scrollbarXTop + o, t(n.scrollbarXRail, i);
        var r = {top: o, height: n.railYHeight};
        n.isScrollbarYUsingRight ? n.isRtl ? r.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth : r.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? r.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : r.left = n.scrollbarYLeft + e.scrollLeft, t(n.scrollbarYRail, r), t(n.scrollbarX, {
            left: n.scrollbarXLeft,
            width: n.scrollbarXWidth - n.railBorderXWidth
        }), t(n.scrollbarY, {top: n.scrollbarYTop, height: n.scrollbarYHeight - n.railBorderYWidth})
    }

    function p(e, t) {
        function n(t) {
            g[h] = v + b * (t[l] - y), a(e, f), C(e), t.stopPropagation(), t.preventDefault()
        }

        function i() {
            s(e, f), e[p].classList.remove(m.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", n)
        }

        var o = t[0], r = t[1], l = t[2], c = t[3], u = t[4], d = t[5], h = t[6], f = t[7], p = t[8], g = e.element,
            v = null, y = null, b = null;
        e.event.bind(e[u], "mousedown", function (t) {
            v = g[h], y = t[l], b = (e[r] - e[o]) / (e[c] - e[d]), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", i), e[p].classList.add(m.state.clicking), t.stopPropagation(), t.preventDefault()
        })
    }

    var g = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
        m = {
            main: "ps", element: {
                thumb: function (e) {
                    return "ps__thumb-" + e
                }, rail: function (e) {
                    return "ps__rail-" + e
                }, consuming: "ps__child--consume"
            }, state: {
                focus: "ps--focus", clicking: "ps--clicking", active: function (e) {
                    return "ps--active-" + e
                }, scrolling: function (e) {
                    return "ps--scrolling-" + e
                }
            }
        }, v = {x: null, y: null}, y = function (e) {
            this.element = e, this.handlers = {}
        }, b = {isEmpty: {configurable: !0}};
    y.prototype.bind = function (e, t) {
        void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1)
    }, y.prototype.unbind = function (e, t) {
        var n = this;
        this.handlers[e] = this.handlers[e].filter(function (i) {
            return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1)
        })
    }, y.prototype.unbindAll = function () {
        for (var e in this.handlers) this.unbind(e)
    }, b.isEmpty.get = function () {
        var e = this;
        return Object.keys(this.handlers).every(function (t) {
            return 0 === e.handlers[t].length
        })
    }, Object.defineProperties(y.prototype, b);
    var x = function () {
        this.eventElements = []
    };
    x.prototype.eventElement = function (e) {
        var t = this.eventElements.filter(function (t) {
            return t.element === e
        })[0];
        return t || (t = new y(e), this.eventElements.push(t)), t
    }, x.prototype.bind = function (e, t, n) {
        this.eventElement(e).bind(t, n)
    }, x.prototype.unbind = function (e, t, n) {
        var i = this.eventElement(e);
        i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
    }, x.prototype.unbindAll = function () {
        this.eventElements.forEach(function (e) {
            return e.unbindAll()
        }), this.eventElements = []
    }, x.prototype.once = function (e, t, n) {
        var i = this.eventElement(e), o = function (e) {
            i.unbind(t, o), n(e)
        };
        i.bind(t, o)
    };
    var w = function (e, t, n, i, o) {
        var r;
        if (void 0 === i && (i = !0), void 0 === o && (o = !1), "top" === t) r = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"]; else {
            if ("left" !== t) throw new Error("A proper axis should be provided");
            r = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }
        !function (e, t, n, i, o) {
            var r = n[0], a = n[1], s = n[2], u = n[3], d = n[4], h = n[5];
            void 0 === i && (i = !0), void 0 === o && (o = !1);
            var f = e.element;
            e.reach[u] = null, f[s] < 1 && (e.reach[u] = "start"), f[s] > e[r] - e[a] - 1 && (e.reach[u] = "end"), t && (f.dispatchEvent(c("ps-scroll-" + u)), t < 0 ? f.dispatchEvent(c("ps-scroll-" + d)) : t > 0 && f.dispatchEvent(c("ps-scroll-" + h)), i && l(e, u)), e.reach[u] && (t || o) && f.dispatchEvent(c("ps-" + u + "-reach-" + e.reach[u]))
        }(e, n, r, i, o)
    }, k = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    }, C = function (e) {
        var t = e.element, n = Math.floor(t.scrollTop);
        e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight, t.contains(e.scrollbarXRail) || (r(t, m.element.rail("x")).forEach(function (e) {
            return o(e)
        }), t.appendChild(e.scrollbarXRail)), t.contains(e.scrollbarYRail) || (r(t, m.element.rail("y")).forEach(function (e) {
            return o(e)
        }), t.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = h(e, u(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = u((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = h(e, u(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = u(n * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), f(t, e), e.scrollbarXActive ? t.classList.add(m.state.active("x")) : (t.classList.remove(m.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, t.scrollLeft = 0), e.scrollbarYActive ? t.classList.add(m.state.active("y")) : (t.classList.remove(m.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, t.scrollTop = 0)
    }, S = {
        "click-rail": function (e) {
            e.event.bind(e.scrollbarY, "mousedown", function (e) {
                return e.stopPropagation()
            }), e.event.bind(e.scrollbarYRail, "mousedown", function (t) {
                var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                e.element.scrollTop += n * e.containerHeight, C(e), t.stopPropagation()
            }), e.event.bind(e.scrollbarX, "mousedown", function (e) {
                return e.stopPropagation()
            }), e.event.bind(e.scrollbarXRail, "mousedown", function (t) {
                var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                e.element.scrollLeft += n * e.containerWidth, C(e), t.stopPropagation()
            })
        }, "drag-thumb": function (e) {
            p(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), p(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
        }, keyboard: function (e) {
            var t = e.element, n = function () {
                return i(t, ":hover")
            }, o = function () {
                return i(e.scrollbarX, ":focus") || i(e.scrollbarY, ":focus")
            };
            e.event.bind(e.ownerDocument, "keydown", function (i) {
                if (!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented) && (n() || o())) {
                    var r = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                    if (r) {
                        if ("IFRAME" === r.tagName) r = r.contentDocument.activeElement; else for (; r.shadowRoot;) r = r.shadowRoot.activeElement;
                        if (d(r)) return
                    }
                    var a = 0, s = 0;
                    switch (i.which) {
                        case 37:
                            a = i.metaKey ? -e.contentWidth : i.altKey ? -e.containerWidth : -30;
                            break;
                        case 38:
                            s = i.metaKey ? e.contentHeight : i.altKey ? e.containerHeight : 30;
                            break;
                        case 39:
                            a = i.metaKey ? e.contentWidth : i.altKey ? e.containerWidth : 30;
                            break;
                        case 40:
                            s = i.metaKey ? -e.contentHeight : i.altKey ? -e.containerHeight : -30;
                            break;
                        case 32:
                            s = i.shiftKey ? e.containerHeight : -e.containerHeight;
                            break;
                        case 33:
                            s = e.containerHeight;
                            break;
                        case 34:
                            s = -e.containerHeight;
                            break;
                        case 36:
                            s = e.contentHeight;
                            break;
                        case 35:
                            s = -e.contentHeight;
                            break;
                        default:
                            return
                    }
                    e.settings.suppressScrollX && 0 !== a || e.settings.suppressScrollY && 0 !== s || (t.scrollTop -= s, t.scrollLeft += a, C(e), function (n, i) {
                        var o = Math.floor(t.scrollTop);
                        if (0 === n) {
                            if (!e.scrollbarYActive) return !1;
                            if (0 === o && i > 0 || o >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation
                        }
                        var r = t.scrollLeft;
                        if (0 === i) {
                            if (!e.scrollbarXActive) return !1;
                            if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                        }
                        return !0
                    }(a, s) && i.preventDefault())
                }
            })
        }, wheel: function (t) {
            function n(t, n, i) {
                if (!k.isWebKit && o.querySelector("select:focus")) return !0;
                if (!o.contains(t)) return !1;
                for (var r = t; r && r !== o;) {
                    if (r.classList.contains(m.element.consuming)) return !0;
                    var a = e(r);
                    if ([a.overflow, a.overflowX, a.overflowY].join("").match(/(scroll|auto)/)) {
                        var s = r.scrollHeight - r.clientHeight;
                        if (s > 0 && !(0 === r.scrollTop && i > 0 || r.scrollTop === s && i < 0)) return !0;
                        var l = r.scrollWidth - r.clientWidth;
                        if (l > 0 && !(0 === r.scrollLeft && n < 0 || r.scrollLeft === l && n > 0)) return !0
                    }
                    r = r.parentNode
                }
                return !1
            }

            function i(e) {
                var i = function (e) {
                    var t = e.deltaX, n = -1 * e.deltaY;
                    return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
                }(e), r = i[0], a = i[1];
                if (!n(e.target, r, a)) {
                    var s = !1;
                    t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (a ? o.scrollTop -= a * t.settings.wheelSpeed : o.scrollTop += r * t.settings.wheelSpeed, s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (r ? o.scrollLeft += r * t.settings.wheelSpeed : o.scrollLeft -= a * t.settings.wheelSpeed, s = !0) : (o.scrollTop -= a * t.settings.wheelSpeed, o.scrollLeft += r * t.settings.wheelSpeed), C(t), (s = s || function (e, n) {
                        var i = Math.floor(o.scrollTop), r = 0 === o.scrollTop,
                            a = i + o.offsetHeight === o.scrollHeight, s = 0 === o.scrollLeft,
                            l = o.scrollLeft + o.offsetWidth === o.scrollWidth;
                        return !(Math.abs(n) > Math.abs(e) ? r || a : s || l) || !t.settings.wheelPropagation
                    }(r, a)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault())
                }
            }

            var o = t.element;
            void 0 !== window.onwheel ? t.event.bind(o, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(o, "mousewheel", i)
        }, touch: function (t) {
            function n(e, n) {
                var i = Math.floor(u.scrollTop), o = u.scrollLeft, r = Math.abs(e), a = Math.abs(n);
                if (a > r) {
                    if (n < 0 && i === t.contentHeight - t.containerHeight || n > 0 && 0 === i) return 0 === window.scrollY && n > 0 && k.isChrome
                } else if (r > a && (e < 0 && o === t.contentWidth - t.containerWidth || e > 0 && 0 === o)) return !0;
                return !0
            }

            function i(e, n) {
                u.scrollTop -= n, u.scrollLeft -= e, C(t)
            }

            function o(e) {
                return e.targetTouches ? e.targetTouches[0] : e
            }

            function r(e) {
                return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
            }

            function a(e) {
                if (r(e)) {
                    var t = o(e);
                    d.pageX = t.pageX, d.pageY = t.pageY, h = (new Date).getTime(), null !== p && clearInterval(p)
                }
            }

            function s(t, n, i) {
                if (!u.contains(t)) return !1;
                for (var o = t; o && o !== u;) {
                    if (o.classList.contains(m.element.consuming)) return !0;
                    var r = e(o);
                    if ([r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) {
                        var a = o.scrollHeight - o.clientHeight;
                        if (a > 0 && !(0 === o.scrollTop && i > 0 || o.scrollTop === a && i < 0)) return !0;
                        var s = o.scrollLeft - o.clientWidth;
                        if (s > 0 && !(0 === o.scrollLeft && n < 0 || o.scrollLeft === s && n > 0)) return !0
                    }
                    o = o.parentNode
                }
                return !1
            }

            function l(e) {
                if (r(e)) {
                    var t = o(e), a = {pageX: t.pageX, pageY: t.pageY}, l = a.pageX - d.pageX, c = a.pageY - d.pageY;
                    if (s(e.target, l, c)) return;
                    i(l, c), d = a;
                    var u = (new Date).getTime(), p = u - h;
                    p > 0 && (f.x = l / p, f.y = c / p, h = u), n(l, c) && e.preventDefault()
                }
            }

            function c() {
                t.settings.swipeEasing && (clearInterval(p), p = setInterval(function () {
                    t.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (i(30 * f.x, 30 * f.y), f.x *= .8, f.y *= .8) : clearInterval(p)
                }, 10))
            }

            if (k.supportsTouch || k.supportsIePointer) {
                var u = t.element, d = {}, h = 0, f = {}, p = null;
                k.supportsTouch ? (t.event.bind(u, "touchstart", a), t.event.bind(u, "touchmove", l), t.event.bind(u, "touchend", c)) : k.supportsIePointer && (window.PointerEvent ? (t.event.bind(u, "pointerdown", a), t.event.bind(u, "pointermove", l), t.event.bind(u, "pointerup", c)) : window.MSPointerEvent && (t.event.bind(u, "MSPointerDown", a), t.event.bind(u, "MSPointerMove", l), t.event.bind(u, "MSPointerUp", c)))
            }
        }
    }, _ = function (i, o) {
        var r = this;
        if (void 0 === o && (o = {}), "string" == typeof i && (i = document.querySelector(i)), !i || !i.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
        for (var a in this.element = i, i.classList.add(m.main), this.settings = {
            handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollingThreshold: 1e3,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !0,
            wheelSpeed: 1
        }, o) r.settings[a] = o[a];
        this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
        var s = function () {
            return i.classList.add(m.state.focus)
        }, l = function () {
            return i.classList.remove(m.state.focus)
        };
        this.isRtl = "rtl" === e(i).direction, this.isNegativeScroll = function () {
            var e, t = i.scrollLeft;
            return i.scrollLeft = -1, e = i.scrollLeft < 0, i.scrollLeft = t, e
        }(), this.negativeScrollAdjustment = this.isNegativeScroll ? i.scrollWidth - i.clientWidth : 0, this.event = new x, this.ownerDocument = i.ownerDocument || document, this.scrollbarXRail = n(m.element.rail("x")), i.appendChild(this.scrollbarXRail), this.scrollbarX = n(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", l), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
        var c = e(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), t(this.scrollbarXRail, {display: "block"}), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), t(this.scrollbarXRail, {display: ""}), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = n(m.element.rail("y")), i.appendChild(this.scrollbarYRail), this.scrollbarY = n(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", l), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
        var d = e(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(d.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(d.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (t) {
            var n = e(t);
            return u(n.width) + u(n.paddingLeft) + u(n.paddingRight) + u(n.borderLeftWidth) + u(n.borderRightWidth)
        }(this.scrollbarY) : null, this.railBorderYWidth = u(d.borderTopWidth) + u(d.borderBottomWidth), t(this.scrollbarYRail, {display: "block"}), this.railYMarginHeight = u(d.marginTop) + u(d.marginBottom), t(this.scrollbarYRail, {display: ""}), this.railYHeight = null, this.railYRatio = null, this.reach = {
            x: i.scrollLeft <= 0 ? "start" : i.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
            y: i.scrollTop <= 0 ? "start" : i.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
        }, this.isAlive = !0, this.settings.handlers.forEach(function (e) {
            return S[e](r)
        }), this.lastScrollTop = Math.floor(i.scrollTop), this.lastScrollLeft = i.scrollLeft, this.event.bind(this.element, "scroll", function (e) {
            return r.onScroll(e)
        }), C(this)
    };
    return _.prototype.update = function () {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, t(this.scrollbarXRail, {display: "block"}), t(this.scrollbarYRail, {display: "block"}), this.railXMarginWidth = u(e(this.scrollbarXRail).marginLeft) + u(e(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(e(this.scrollbarYRail).marginTop) + u(e(this.scrollbarYRail).marginBottom), t(this.scrollbarXRail, {display: "none"}), t(this.scrollbarYRail, {display: "none"}), C(this), w(this, "top", 0, !1, !0), w(this, "left", 0, !1, !0), t(this.scrollbarXRail, {display: ""}), t(this.scrollbarYRail, {display: ""}))
    }, _.prototype.onScroll = function (e) {
        this.isAlive && (C(this), w(this, "top", this.element.scrollTop - this.lastScrollTop), w(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
    }, _.prototype.destroy = function () {
        this.isAlive && (this.event.unbindAll(), o(this.scrollbarX), o(this.scrollbarY), o(this.scrollbarXRail), o(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
    }, _.prototype.removePsClasses = function () {
        this.element.className = this.element.className.split(" ").filter(function (e) {
            return !e.match(/^ps([-_].+|)$/)
        }).join(" ")
    }, _
}), function (e) {
    e(document).ready(function () {
        e(document).on("click", ".chip .close", function () {
            var t = e(this);
            t.closest(".chips").data("initialized") || t.closest(".chip").remove()
        })
    }), e.fn.materialChip = function (t) {
        var n = this;
        return this.$el = e(this), this.$document = e(document), this.eventsHandled = !1, this.defaultOptions = {
            data: [],
            placeholder: "",
            secondaryPlaceholder: ""
        }, this.selectors = {
            chips: ".chips",
            chip: ".chip",
            input: "input",
            delete: ".fas",
            selectedChip: ".selected"
        }, this.keyCodes = {
            enter: 13,
            backspace: 8,
            delete: 46,
            arrowLeft: 37,
            arrowRight: 39
        }, "data" === t ? this.$el.data("chips") : "options" === t ? this.$el.data("options") : (this.$el.data("options", e.extend({}, this.defaultOptions, t)), this.init = function () {
            n.$el.each(function (t, i) {
                var o = e(i);
                if (!o.data("initialized")) {
                    var r = o.data("options");
                    r.data && Array.isArray(r.data) || (r.data = []), o.data("chips", r.data), o.data("index", t), o.data("initialized", !0), o.hasClass(n.selectors.chips) || o.addClass("chips"), n.renderChips(o)
                }
            })
        }, this.handleEvents = function () {
            var t = this;
            this.$document.on("click", this.selectors.chips, function (n) {
                e(n.target).find(t.selectors.input).focus()
            }), this.$document.on("click", this.selectors.chip, function (n) {
                e(t.selectors.chip).removeClass("selected"), e(n.target).addClass("selected")
            }), this.$document.on("keydown", function (n) {
                if (!e(n.target).is("input, textarea")) {
                    var i = t.$document.find(t.selectors.chip + t.selectors.selectedChip),
                        o = i.closest(t.selectors.chips), r = i.siblings(t.selectors.chip).length;
                    if (i.length) {
                        var a = n.which === t.keyCodes.backspace, s = n.which === t.keyCodes.delete,
                            l = n.which === t.keyCodes.arrowLeft, c = n.which === t.keyCodes.arrowRight;
                        a || s ? (n.preventDefault(), t.deleteSelectedChip(o, i, r)) : l ? t.selectLeftChip(o, i) : c && t.selectRightChip(o, i, r)
                    }
                }
            }), this.$document.on("focusin", "".concat(this.selectors.chips, " ").concat(this.selectors.input), function (n) {
                e(n.target).closest(t.selectors.chips).addClass("focus"), e(t.selectors.chip).removeClass("selected")
            }), this.$document.on("focusout", "".concat(this.selectors.chips, " ").concat(this.selectors.input), function (n) {
                e(n.target).closest(t.selectors.chips).removeClass("focus")
            }), this.$document.on("keydown", "".concat(this.selectors.chips, " ").concat(this.selectors.input), function (n) {
                var i = e(n.target), o = i.closest(t.selectors.chips), r = o.data("index"),
                    a = o.children(t.selectors.chip).length;
                if (n.which === t.keyCodes.enter) return n.preventDefault(), t.addChip(r, {tag: i.val()}, o), void i.val("");
                var s = n.keyCode === t.keyCodes.arrowLeft || n.keyCode === t.keyCodes.delete, l = "" === i.val();
                s && l && a && (t.selectChip(r, a - 1, o), i.blur())
            }), this.$document.on("click", "".concat(this.selectors.chips, " ").concat(this.selectors.delete), function (n) {
                var i = e(n.target), o = i.closest(t.selectors.chips), r = i.closest(t.selectors.chip);
                n.stopPropagation(), t.deleteChip(o.data("index"), r.index(), o), o.find("input").focus()
            })
        }, this.deleteSelectedChip = function (e, t, i) {
            var o = e.data("index"), r = t.index();
            n.deleteChip(o, r, e);
            var a = null;
            r < i - 1 ? a = r : r !== i && r !== i - 1 || (a = i - 1), a < 0 && (a = null), null !== a && n.selectChip(o, a, e), i || e.find("input").focus()
        }, this.selectLeftChip = function (t, i) {
            var o = i.index() - 1;
            o < 0 || (e(n.selectors.chip).removeClass("selected"), n.selectChip(t.data("index"), o, t))
        }, this.selectRightChip = function (t, i, o) {
            var r = i.index() + 1;
            e(n.selectors.chip).removeClass("selected"), r > o ? t.find("input").focus() : n.selectChip(t.data("index"), r, t)
        }, this.renderChips = function (e) {
            var t = "";
            e.data("chips").forEach(function (e) {
                t += n.getSingleChipHtml(e)
            }), t += '<input class="input" placeholder="">', e.html(t), n.setPlaceholder(e)
        }, this.getSingleChipHtml = function (e) {
            if (!e.tag) return "";
            var t = '<div class="chip">'.concat(e.tag);
            return e.image && (t += ' <img src="'.concat(e.image, '"> ')), t += '<i class="close fas fa-times"></i>', t += "</div>"
        }, this.setPlaceholder = function (e) {
            var t = e.data("options");
            e.data("chips").length && t.placeholder ? e.find("input").prop("placeholder", t.placeholder) : !e.data("chips").length && t.secondaryPlaceholder && e.find("input").prop("placeholder", t.secondaryPlaceholder)
        }, this.isValid = function (e, t) {
            for (var n = e.data("chips"), i = 0; i < n.length; i++) if (n[i].tag === t.tag) return !1;
            return "" !== t.tag
        }, this.addChip = function (t, i, o) {
            if (n.isValid(o, i)) {
                var r = n.getSingleChipHtml(i);
                o.data("chips").push(i), e(r).insertBefore(o.find("input")), o.trigger("chip.add", i), n.setPlaceholder(o)
            }
        }, this.deleteChip = function (e, t, i) {
            var o = i.data("chips")[t];
            i.find(".chip").eq(t).remove(), i.data("chips").splice(t, 1), i.trigger("chip.delete", o), n.setPlaceholder(i)
        }, this.selectChip = function (e, t, n) {
            var i = n.find(".chip").eq(t);
            i && !1 === i.hasClass("selected") && (i.addClass("selected"), n.trigger("chip.select", n.data("chips")[t]))
        }, this.getChipsElement = function (e, t) {
            return t.eq(e)
        }, this.init(), this.eventsHandled || (this.handleEvents(), this.eventsHandled = !0), this)
    }, e.fn.material_chip = e.fn.materialChip
}(jQuery);
var objectFitImages = function () {
    "use strict";
    var e = "bfred-it:object-fit-images", t = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
        n = "undefined" == typeof Image ? {style: {"object-position": 1}} : new Image, i = "object-fit" in n.style,
        o = "object-position" in n.style, r = "background-size" in n.style, a = "string" == typeof n.currentSrc,
        s = n.getAttribute, l = n.setAttribute, c = !1;

    function u(e, t, n) {
        var i = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (t || 1) + "' height='" + (n || 0) + "'%3E%3C/svg%3E";
        s.call(e, "src") !== i && l.call(e, "src", i)
    }

    function d(e, t) {
        e.naturalWidth ? t(e) : setTimeout(d, 100, e, t)
    }

    function h(n) {
        var o = function (e) {
            for (var n, i = getComputedStyle(e).fontFamily, o = {}; null !== (n = t.exec(i));) o[n[1]] = n[2];
            return o
        }(n), r = n[e];
        if (o["object-fit"] = o["object-fit"] || "fill", !r.img) {
            if ("fill" === o["object-fit"]) return;
            if (!r.skipTest && i && !o["object-position"]) return
        }
        if (!r.img) {
            r.img = new Image(n.width, n.height), r.img.srcset = s.call(n, "data-ofi-srcset") || n.srcset, r.img.src = s.call(n, "data-ofi-src") || n.src, l.call(n, "data-ofi-src", n.src), n.srcset && l.call(n, "data-ofi-srcset", n.srcset), u(n, n.naturalWidth || n.width, n.naturalHeight || n.height), n.srcset && (n.srcset = "");
            try {
                !function (t) {
                    var n = {
                        get: function (n) {
                            return t[e].img[n || "src"]
                        }, set: function (n, i) {
                            return t[e].img[i || "src"] = n, l.call(t, "data-ofi-" + i, n), h(t), n
                        }
                    };
                    Object.defineProperty(t, "src", n), Object.defineProperty(t, "currentSrc", {
                        get: function () {
                            return n.get("currentSrc")
                        }
                    }), Object.defineProperty(t, "srcset", {
                        get: function () {
                            return n.get("srcset")
                        }, set: function (e) {
                            return n.set(e, "srcset")
                        }
                    })
                }(n)
            } catch (e) {
                window.console && console.warn("https://bit.ly/ofi-old-browser")
            }
        }
        !function (e) {
            if (e.srcset && !a && window.picturefill) {
                var t = window.picturefill._;
                e[t.ns] && e[t.ns].evaled || t.fillImg(e, {reselect: !0}), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {reselect: !0})), e.currentSrc = e[t.ns].curSrc || e.src
            }
        }(r.img), n.style.backgroundImage = 'url("' + (r.img.currentSrc || r.img.src).replace(/"/g, '\\"') + '")', n.style.backgroundPosition = o["object-position"] || "center", n.style.backgroundRepeat = "no-repeat", n.style.backgroundOrigin = "content-box", /scale-down/.test(o["object-fit"]) ? d(r.img, function () {
            r.img.naturalWidth > n.width || r.img.naturalHeight > n.height ? n.style.backgroundSize = "contain" : n.style.backgroundSize = "auto"
        }) : n.style.backgroundSize = o["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), d(r.img, function (e) {
            u(n, e.naturalWidth, e.naturalHeight)
        })
    }

    function f(t, n) {
        var i = !c && !t;
        if (n = n || {}, t = t || "img", o && !n.skipTest || !r) return !1;
        "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
        for (var a = 0; a < t.length; a++) t[a][e] = t[a][e] || {skipTest: n.skipTest}, h(t[a]);
        i && (document.body.addEventListener("load", function (e) {
            "IMG" === e.target.tagName && f(e.target, {skipTest: n.skipTest})
        }, !0), c = !0, t = "img"), n.watchMQ && window.addEventListener("resize", f.bind(null, t, {skipTest: n.skipTest}))
    }

    return f.supportsObjectFit = i, f.supportsObjectPosition = o, function () {
        function t(t, n) {
            return t[e] && t[e].img && ("src" === n || "srcset" === n) ? t[e].img : t
        }

        o || (HTMLImageElement.prototype.getAttribute = function (e) {
            return s.call(t(this, e), e)
        }, HTMLImageElement.prototype.setAttribute = function (e, n) {
            return l.call(t(this, e), e, String(n))
        })
    }(), f
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

!function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
            return e[t]
        }.bind(null, o));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 11)
}([, , function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, , function (e, t, n) {
    "use strict";
    (function (t) {
        var n;
        n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = n
    }).call(this, n(5))
}, function (e, t, n) {
    "use strict";
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    i = function () {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
    }
    e.exports = i
}, , , , , , function (e, t, n) {
    e.exports = n(12)
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = s(n(2)), r = n(4), a = s(n(13));

    function s(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var l = r.window.jarallax;
    if (r.window.jarallax = a.default, r.window.jarallax.noConflict = function () {
        return r.window.jarallax = l, this
    }, void 0 !== r.jQuery) {
        var c = function () {
            var e = arguments || [];
            Array.prototype.unshift.call(e, this);
            var t = a.default.apply(r.window, e);
            return "object" !== (void 0 === t ? "undefined" : i(t)) ? t : this
        };
        c.constructor = a.default.constructor;
        var u = r.jQuery.fn.jarallax;
        r.jQuery.fn.jarallax = c, r.jQuery.fn.jarallax.noConflict = function () {
            return r.jQuery.fn.jarallax = u, this
        }
    }
    (0, o.default)(function () {
        (0, a.default)(document.querySelectorAll("[data-jarallax]"))
    })
}, function (e, t, n) {
    "use strict";
    (function (e) {
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
            return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function (e, t) {
                    var n = [], i = !0, o = !1, r = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0) ;
                    } catch (e) {
                        o = !0, r = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, a = c(n(2)), s = c(n(14)), l = n(4);

        function c(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var u = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1 || navigator.userAgent.indexOf("Edge/") > -1,
            d = function () {
                for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n++) if (t && void 0 !== t.style[e[n]]) return e[n];
                return !1
            }(), h = void 0, f = void 0, p = void 0, g = !1, m = !1;

        function v(e) {
            h = l.window.innerWidth || document.documentElement.clientWidth, f = l.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === e ? "undefined" : r(e)) || "load" !== e.type && "dom-loaded" !== e.type || (g = !0)
        }

        v(), l.window.addEventListener("resize", v), l.window.addEventListener("orientationchange", v), l.window.addEventListener("load", v), (0, a.default)(function () {
            v({type: "dom-loaded"})
        });
        var y = [], b = !1;

        function x() {
            if (y.length) {
                p = void 0 !== l.window.pageYOffset ? l.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                var e = g || !b || b.width !== h || b.height !== f, t = m || e || !b || b.y !== p;
                g = !1, m = !1, (e || t) && (y.forEach(function (n) {
                    e && n.onResize(), t && n.onScroll()
                }), b = {width: h, height: f, y: p}), (0, s.default)(x)
            }
        }

        var w = !!e.ResizeObserver && new e.ResizeObserver(function (e) {
            e && e.length && (0, s.default)(function () {
                e.forEach(function (e) {
                    e.target && e.target.jarallax && (g || e.target.jarallax.onResize(), m = !0)
                })
            })
        }), k = 0, C = function () {
            function e(t, n) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var o = this;
                o.instanceID = k++, o.$item = t, o.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: !1,
                    disableVideo: !1,
                    automaticResize: !0,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoPlayOnlyVisible: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var a = o.$item.getAttribute("data-jarallax"), s = JSON.parse(a || "{}");
                a && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
                var l = o.$item.dataset || {}, c = {};
                if (Object.keys(l).forEach(function (e) {
                    var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                    t && void 0 !== o.defaults[t] && (c[t] = l[e])
                }), o.options = o.extend({}, o.defaults, s, c, n), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach(function (e) {
                    "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1)
                }), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))), (o.options.noAndroid || o.options.noIos) && (console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"), o.options.disableParallax || (o.options.noIos && o.options.noAndroid ? o.options.disableParallax = /iPad|iPhone|iPod|Android/ : o.options.noIos ? o.options.disableParallax = /iPad|iPhone|iPod/ : o.options.noAndroid && (o.options.disableParallax = /Android/))), "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)), o.options.disableParallax instanceof RegExp) {
                    var u = o.options.disableParallax;
                    o.options.disableParallax = function () {
                        return u.test(navigator.userAgent)
                    }
                }
                if ("function" != typeof o.options.disableParallax && (o.options.disableParallax = function () {
                    return !1
                }), "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)), o.options.disableVideo instanceof RegExp) {
                    var d = o.options.disableVideo;
                    o.options.disableVideo = function () {
                        return d.test(navigator.userAgent)
                    }
                }
                "function" != typeof o.options.disableVideo && (o.options.disableVideo = function () {
                    return !1
                });
                var h = o.options.elementInViewport;
                h && "object" === (void 0 === h ? "undefined" : r(h)) && void 0 !== h.length && (h = i(h, 1)[0]);
                h instanceof Element || (h = null), o.options.elementInViewport = h, o.image = {
                    src: o.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
                }, o.initImg() && o.canInitParallax() && o.init()
            }

            return o(e, [{
                key: "css", value: function (e, t) {
                    return "string" == typeof t ? l.window.getComputedStyle(e).getPropertyValue(t) : (t.transform && d && (t[d] = t.transform), Object.keys(t).forEach(function (n) {
                        e.style[n] = t[n]
                    }), e)
                }
            }, {
                key: "extend", value: function (e) {
                    var t = arguments;
                    return e = e || {}, Object.keys(arguments).forEach(function (n) {
                        t[n] && Object.keys(t[n]).forEach(function (i) {
                            e[i] = t[n][i]
                        })
                    }), e
                }
            }, {
                key: "getWindowData", value: function () {
                    return {width: h, height: f, y: p}
                }
            }, {
                key: "initImg", value: function () {
                    var e = this.options.imgElement;
                    return e && "string" == typeof e && (e = this.$item.querySelector(e)), e instanceof Element || (e = null), e && (this.options.keepImg ? this.image.$item = e.cloneNode(!0) : (this.image.$item = e, this.image.$itemParent = e.parentNode), this.image.useImgTag = !0), !!this.image.$item || (null === this.image.src && (this.image.src = this.css(this.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!this.image.src || "none" === this.image.src))
                }
            }, {
                key: "canInitParallax", value: function () {
                    return d && !this.options.disableParallax()
                }
            }, {
                key: "init", value: function () {
                    var e = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        pointerEvents: "none"
                    }, t = {};
                    if (!this.options.keepImg) {
                        var n = this.$item.getAttribute("style");
                        if (n && this.$item.setAttribute("data-jarallax-original-styles", n), this.image.useImgTag) {
                            var i = this.image.$item.getAttribute("style");
                            i && this.image.$item.setAttribute("data-jarallax-original-styles", i)
                        }
                    }
                    if ("static" === this.css(this.$item, "position") && this.css(this.$item, {position: "relative"}), "auto" === this.css(this.$item, "z-index") && this.css(this.$item, {zIndex: 0}), this.image.$container = document.createElement("div"), this.css(this.image.$container, e), this.css(this.image.$container, {"z-index": this.options.zIndex}), u && this.css(this.image.$container, {opacity: .9999}), this.image.$container.setAttribute("id", "jarallax-container-" + this.instanceID), this.$item.appendChild(this.image.$container), this.image.useImgTag ? t = this.extend({
                        "object-fit": this.options.imgSize,
                        "object-position": this.options.imgPosition,
                        "font-family": "object-fit: " + this.options.imgSize + "; object-position: " + this.options.imgPosition + ";",
                        "max-width": "none"
                    }, e, t) : (this.image.$item = document.createElement("div"), this.image.src && (t = this.extend({
                        "background-position": this.options.imgPosition,
                        "background-size": this.options.imgSize,
                        "background-repeat": this.options.imgRepeat,
                        "background-image": 'url("' + this.image.src + '")'
                    }, e, t))), "opacity" !== this.options.type && "scale" !== this.options.type && "scale-opacity" !== this.options.type && 1 !== this.options.speed || (this.image.position = "absolute"), "fixed" === this.image.position) for (var o = 0, r = this.$item; null !== r && r !== document && 0 === o;) {
                        var a = this.css(r, "-webkit-transform") || this.css(r, "-moz-transform") || this.css(r, "transform");
                        a && "none" !== a && (o = 1, this.image.position = "absolute"), r = r.parentNode
                    }
                    t.position = this.image.position, this.css(this.image.$item, t), this.image.$container.appendChild(this.image.$item), this.onResize(), this.onScroll(!0), this.options.automaticResize && w && w.observe(this.$item), this.options.onInit && this.options.onInit.call(this), "none" !== this.css(this.$item, "background-image") && this.css(this.$item, {"background-image": "none"}), this.addToParallaxList()
                }
            }, {
                key: "addToParallaxList", value: function () {
                    y.push(this), 1 === y.length && x()
                }
            }, {
                key: "removeFromParallaxList", value: function () {
                    var e = this;
                    y.forEach(function (t, n) {
                        t.instanceID === e.instanceID && y.splice(n, 1)
                    })
                }
            }, {
                key: "destroy", value: function () {
                    this.removeFromParallaxList();
                    var e = this.$item.getAttribute("data-jarallax-original-styles");
                    if (this.$item.removeAttribute("data-jarallax-original-styles"), e ? this.$item.setAttribute("style", e) : this.$item.removeAttribute("style"), this.image.useImgTag) {
                        var t = this.image.$item.getAttribute("data-jarallax-original-styles");
                        this.image.$item.removeAttribute("data-jarallax-original-styles"), t ? this.image.$item.setAttribute("style", e) : this.image.$item.removeAttribute("style"), this.image.$itemParent && this.image.$itemParent.appendChild(this.image.$item)
                    }
                    this.$clipStyles && this.$clipStyles.parentNode.removeChild(this.$clipStyles), this.image.$container && this.image.$container.parentNode.removeChild(this.image.$container), this.options.onDestroy && this.options.onDestroy.call(this), delete this.$item.jarallax
                }
            }, {
                key: "clipContainer", value: function () {
                    if ("fixed" === this.image.position) {
                        var e = this.image.$container.getBoundingClientRect(), t = e.width, n = e.height;
                        if (!this.$clipStyles) this.$clipStyles = document.createElement("style"), this.$clipStyles.setAttribute("type", "text/css"), this.$clipStyles.setAttribute("id", "jarallax-clip-" + this.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles);
                        var i = "#jarallax-container-" + this.instanceID + " {\n           clip: rect(0 " + t + "px " + n + "px 0);\n           clip: rect(0, " + t + "px, " + n + "px, 0);\n        }";
                        this.$clipStyles.styleSheet ? this.$clipStyles.styleSheet.cssText = i : this.$clipStyles.innerHTML = i
                    }
                }
            }, {
                key: "coverImage", value: function () {
                    var e = this.image.$container.getBoundingClientRect(), t = e.height, n = this.options.speed,
                        i = "scroll" === this.options.type || "scroll-opacity" === this.options.type, o = 0, r = t,
                        a = 0;
                    return i && (o = n < 0 ? n * Math.max(t, f) : n * (t + f), n > 1 ? r = Math.abs(o - f) : n < 0 ? r = o / n + Math.abs(o) : r += Math.abs(f - t) * (1 - n), o /= 2), this.parallaxScrollDistance = o, a = i ? (f - r) / 2 : (t - r) / 2, this.css(this.image.$item, {
                        height: r + "px",
                        marginTop: a + "px",
                        left: "fixed" === this.image.position ? e.left + "px" : "0",
                        width: e.width + "px"
                    }), this.options.onCoverImage && this.options.onCoverImage.call(this), {
                        image: {
                            height: r,
                            marginTop: a
                        }, container: e
                    }
                }
            }, {
                key: "isVisible", value: function () {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll", value: function (e) {
                    var t = this.$item.getBoundingClientRect(), n = t.top, i = t.height, o = {}, r = t;
                    if (this.options.elementInViewport && (r = this.options.elementInViewport.getBoundingClientRect()), this.isElementInViewport = r.bottom >= 0 && r.right >= 0 && r.top <= f && r.left <= h, e || this.isElementInViewport) {
                        var a = Math.max(0, n), s = Math.max(0, i + n), l = Math.max(0, -n), c = Math.max(0, n + i - f),
                            u = Math.max(0, i - (n + i - f)), d = Math.max(0, -n + f - i),
                            p = 1 - 2 * (f - n) / (f + i), g = 1;
                        if (i < f ? g = 1 - (l || c) / i : s <= f ? g = s / f : u <= f && (g = u / f), "opacity" !== this.options.type && "scale-opacity" !== this.options.type && "scroll-opacity" !== this.options.type || (o.transform = "translate3d(0,0,0)", o.opacity = g), "scale" === this.options.type || "scale-opacity" === this.options.type) {
                            var m = 1;
                            this.options.speed < 0 ? m -= this.options.speed * g : m += this.options.speed * (1 - g), o.transform = "scale(" + m + ") translate3d(0,0,0)"
                        }
                        if ("scroll" === this.options.type || "scroll-opacity" === this.options.type) {
                            var v = this.parallaxScrollDistance * p;
                            "absolute" === this.image.position && (v -= n), o.transform = "translate3d(0," + v + "px,0)"
                        }
                        this.css(this.image.$item, o), this.options.onScroll && this.options.onScroll.call(this, {
                            section: t,
                            beforeTop: a,
                            beforeTopEnd: s,
                            afterTop: l,
                            beforeBottom: c,
                            beforeBottomEnd: u,
                            afterBottom: d,
                            visiblePercent: g,
                            fromViewportCenter: p
                        })
                    }
                }
            }, {
                key: "onResize", value: function () {
                    this.coverImage(), this.clipContainer()
                }
            }]), e
        }(), S = function (e) {
            ("object" === ("undefined" == typeof HTMLElement ? "undefined" : r(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
            for (var t = arguments[1], n = Array.prototype.slice.call(arguments, 2), i = e.length, o = 0, a = void 0; o < i; o++) if ("object" === (void 0 === t ? "undefined" : r(t)) || void 0 === t ? e[o].jarallax || (e[o].jarallax = new C(e[o], t)) : e[o].jarallax && (a = e[o].jarallax[t].apply(e[o].jarallax, n)), void 0 !== a) return a;
            return e
        };
        S.constructor = C, t.default = S
    }).call(this, n(5))
}, function (e, t, n) {
    "use strict";
    var i = n(4),
        o = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || function (e) {
            var t = +new Date, n = Math.max(0, 16 - (t - r)), i = setTimeout(e, n);
            return r = t, i
        }, r = +new Date;
    var a = i.cancelAnimationFrame || i.webkitCancelAnimationFrame || i.mozCancelAnimationFrame || clearTimeout;
    Function.prototype.bind && (o = o.bind(i), a = a.bind(i)), (e.exports = o).cancel = a
}]), function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
            return e[t]
        }.bind(null, o));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 6)
}([, , function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, , function (e, t, n) {
    "use strict";
    (function (t) {
        var n;
        n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = n
    }).call(this, n(5))
}, function (e, t, n) {
    "use strict";
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    i = function () {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
    }
    e.exports = i
}, function (e, t, n) {
    e.exports = n(7)
}, function (e, t, n) {
    "use strict";
    var i = s(n(8)), o = s(n(4)), r = s(n(2)), a = s(n(10));

    function s(e) {
        return e && e.__esModule ? e : {default: e}
    }

    o.default.VideoWorker = o.default.VideoWorker || i.default, (0, a.default)(), (0, r.default)(function () {
        "undefined" != typeof jarallax && jarallax(document.querySelectorAll("[data-jarallax-video]"))
    })
}, function (e, t, n) {
    "use strict";
    e.exports = n(9)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();

    function r() {
        this._done = [], this._fail = []
    }

    r.prototype = {
        execute: function (e, t) {
            var n = e.length;
            for (t = Array.prototype.slice.call(t); n--;) e[n].apply(null, t)
        }, resolve: function () {
            this.execute(this._done, arguments)
        }, reject: function () {
            this.execute(this._fail, arguments)
        }, done: function (e) {
            this._done.push(e)
        }, fail: function (e) {
            this._fail.push(e)
        }
    };
    var a = 0, s = 0, l = 0, c = 0, u = 0, d = new r, h = new r, f = function () {
        function e(t, n) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            this.url = t, this.options_default = {
                autoplay: !1,
                loop: !1,
                mute: !1,
                volume: 100,
                showContols: !0,
                startTime: 0,
                endTime: 0
            }, this.options = this.extend({}, this.options_default, n), this.videoID = this.parseURL(t), this.videoID && (this.ID = a++, this.loadAPI(), this.init())
        }

        return o(e, [{
            key: "extend", value: function (e) {
                var t = arguments;
                return e = e || {}, Object.keys(arguments).forEach(function (n) {
                    t[n] && Object.keys(t[n]).forEach(function (i) {
                        e[i] = t[n][i]
                    })
                }), e
            }
        }, {
            key: "parseURL", value: function (e) {
                var t, n, i,
                    o = !(!(t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== t[1].length) && t[1],
                    r = function (e) {
                        var t = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
                        return !(!t || !t[3]) && t[3]
                    }(e), a = (n = {}, i = 0, e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/).forEach(function (e) {
                        var t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                        t && t[1] && t[2] && (n["ogv" === t[1] ? "ogg" : t[1]] = t[2], i = 1)
                    }), !!i && n);
                return o ? (this.type = "youtube", o) : r ? (this.type = "vimeo", r) : !!a && (this.type = "local", a)
            }
        }, {
            key: "isValid", value: function () {
                return !!this.videoID
            }
        }, {
            key: "on", value: function (e, t) {
                this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
            }
        }, {
            key: "off", value: function (e, t) {
                var n = this;
                this.userEventsList && this.userEventsList[e] && (t ? this.userEventsList[e].forEach(function (i, o) {
                    i === t && (n.userEventsList[e][o] = !1)
                }) : delete this.userEventsList[e])
            }
        }, {
            key: "fire", value: function (e) {
                var t = this, n = [].slice.call(arguments, 1);
                this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach(function (e) {
                    e && e.apply(t, n)
                })
            }
        }, {
            key: "play", value: function (e) {
                var t = this;
                t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(function (e) {
                    e && t.player.play()
                })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.paused && t.player.play()))
            }
        }, {
            key: "pause", value: function () {
                var e = this;
                e.player && ("youtube" === e.type && e.player.pauseVideo && YT.PlayerState.PLAYING === e.player.getPlayerState() && e.player.pauseVideo(), "vimeo" === e.type && e.player.getPaused().then(function (t) {
                    t || e.player.pause()
                }), "local" === e.type && (e.player.paused || e.player.pause()))
            }
        }, {
            key: "mute", value: function () {
                this.player && ("youtube" === this.type && this.player.mute && this.player.mute(), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(0), "local" === this.type && (this.$video.muted = !0))
            }
        }, {
            key: "unmute", value: function () {
                this.player && ("youtube" === this.type && this.player.mute && this.player.unMute(), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(this.options.volume), "local" === this.type && (this.$video.muted = !1))
            }
        }, {
            key: "setVolume", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.player && e && ("youtube" === this.type && this.player.setVolume && this.player.setVolume(e), "vimeo" === this.type && this.player.setVolume && this.player.setVolume(e), "local" === this.type && (this.$video.volume = e / 100))
            }
        }, {
            key: "getVolume", value: function (e) {
                this.player ? ("youtube" === this.type && this.player.getVolume && e(this.player.getVolume()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(function (t) {
                    e(t)
                }), "local" === this.type && e(100 * this.$video.volume)) : e(!1)
            }
        }, {
            key: "getMuted", value: function (e) {
                this.player ? ("youtube" === this.type && this.player.isMuted && e(this.player.isMuted()), "vimeo" === this.type && this.player.getVolume && this.player.getVolume().then(function (t) {
                    e(!!t)
                }), "local" === this.type && e(this.$video.muted)) : e(null)
            }
        }, {
            key: "getImageURL", value: function (e) {
                var t = this;
                if (t.videoImage) e(t.videoImage); else {
                    if ("youtube" === t.type) {
                        var n = ["maxresdefault", "sddefault", "hqdefault", "0"], i = 0, o = new Image;
                        o.onload = function () {
                            120 !== (this.naturalWidth || this.width) || i === n.length - 1 ? (t.videoImage = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg", e(t.videoImage)) : (i++, this.src = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg")
                        }, o.src = "https://img.youtube.com/vi/" + t.videoID + "/" + n[i] + ".jpg"
                    }
                    if ("vimeo" === t.type) {
                        var r = new XMLHttpRequest;
                        r.open("GET", "https://vimeo.com/api/v2/video/" + t.videoID + ".json", !0), r.onreadystatechange = function () {
                            if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                                var n = JSON.parse(this.responseText);
                                t.videoImage = n[0].thumbnail_large, e(t.videoImage)
                            }
                        }, r.send(), r = null
                    }
                }
            }
        }, {
            key: "getIframe", value: function (e) {
                this.getVideo(e)
            }
        }, {
            key: "getVideo", value: function (e) {
                var t = this;
                t.$video ? e(t.$video) : t.onAPIready(function () {
                    var n = void 0;
                    if (t.$video || ((n = document.createElement("div")).style.display = "none"), "youtube" === t.type) {
                        t.playerOptions = {}, t.playerOptions.videoId = t.videoID, t.playerOptions.playerVars = {
                            autohide: 1,
                            rel: 0,
                            autoplay: 0,
                            playsinline: 1
                        }, t.options.showContols || (t.playerOptions.playerVars.iv_load_policy = 3, t.playerOptions.playerVars.modestbranding = 1, t.playerOptions.playerVars.controls = 0, t.playerOptions.playerVars.showinfo = 0, t.playerOptions.playerVars.disablekb = 1);
                        var i = void 0, o = void 0;
                        t.playerOptions.events = {
                            onReady: function (e) {
                                t.options.mute ? e.target.mute() : t.options.volume && e.target.setVolume(t.options.volume), t.options.autoplay && t.play(t.options.startTime), t.fire("ready", e), setInterval(function () {
                                    t.getVolume(function (n) {
                                        t.options.volume !== n && (t.options.volume = n, t.fire("volumechange", e))
                                    })
                                }, 150)
                            }, onStateChange: function (e) {
                                t.options.loop && e.data === YT.PlayerState.ENDED && t.play(t.options.startTime), i || e.data !== YT.PlayerState.PLAYING || (i = 1, t.fire("started", e)), e.data === YT.PlayerState.PLAYING && t.fire("play", e), e.data === YT.PlayerState.PAUSED && t.fire("pause", e), e.data === YT.PlayerState.ENDED && t.fire("ended", e), e.data === YT.PlayerState.PLAYING ? o = setInterval(function () {
                                    t.fire("timeupdate", e), t.options.endTime && t.player.getCurrentTime() >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                                }, 150) : clearInterval(o)
                            }
                        };
                        var r = !t.$video;
                        if (r) {
                            var a = document.createElement("div");
                            a.setAttribute("id", t.playerID), n.appendChild(a), document.body.appendChild(n)
                        }
                        t.player = t.player || new window.YT.Player(t.playerID, t.playerOptions), r && (t.$video = document.getElementById(t.playerID), t.videoWidth = parseInt(t.$video.getAttribute("width"), 10) || 1280, t.videoHeight = parseInt(t.$video.getAttribute("height"), 10) || 720)
                    }
                    if ("vimeo" === t.type) {
                        t.playerOptions = "", t.playerOptions += "player_id=" + t.playerID, t.playerOptions += "&autopause=0", t.playerOptions += "&transparent=0", t.options.showContols || (t.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), t.playerOptions += "&autoplay=" + (t.options.autoplay ? "1" : "0"), t.playerOptions += "&loop=" + (t.options.loop ? 1 : 0), t.$video || (t.$video = document.createElement("iframe"), t.$video.setAttribute("id", t.playerID), t.$video.setAttribute("src", "https://player.vimeo.com/video/" + t.videoID + "?" + t.playerOptions), t.$video.setAttribute("frameborder", "0"), n.appendChild(t.$video), document.body.appendChild(n)), t.player = t.player || new Vimeo.Player(t.$video), t.player.getVideoWidth().then(function (e) {
                            t.videoWidth = e || 1280
                        }), t.player.getVideoHeight().then(function (e) {
                            t.videoHeight = e || 720
                        }), t.options.startTime && t.options.autoplay && t.player.setCurrentTime(t.options.startTime), t.options.mute ? t.player.setVolume(0) : t.options.volume && t.player.setVolume(t.options.volume);
                        var s = void 0;
                        t.player.on("timeupdate", function (e) {
                            s || (t.fire("started", e), s = 1), t.fire("timeupdate", e), t.options.endTime && t.options.endTime && e.seconds >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                        }), t.player.on("play", function (e) {
                            t.fire("play", e), t.options.startTime && 0 === e.seconds && t.play(t.options.startTime)
                        }), t.player.on("pause", function (e) {
                            t.fire("pause", e)
                        }), t.player.on("ended", function (e) {
                            t.fire("ended", e)
                        }), t.player.on("loaded", function (e) {
                            t.fire("ready", e)
                        }), t.player.on("volumechange", function (e) {
                            t.fire("volumechange", e)
                        })
                    }
                    if ("local" === t.type) {
                        t.$video || (t.$video = document.createElement("video"), t.options.showContols && (t.$video.controls = !0), t.options.mute ? t.$video.muted = !0 : t.$video.volume && (t.$video.volume = t.options.volume / 100), t.options.loop && (t.$video.loop = !0), t.$video.setAttribute("playsinline", ""), t.$video.setAttribute("webkit-playsinline", ""), t.$video.setAttribute("id", t.playerID), n.appendChild(t.$video), document.body.appendChild(n), Object.keys(t.videoID).forEach(function (e) {
                            var n, i, o, r;
                            n = t.$video, i = t.videoID[e], o = "video/" + e, (r = document.createElement("source")).src = i, r.type = o, n.appendChild(r)
                        })), t.player = t.player || t.$video;
                        var l = void 0;
                        t.player.addEventListener("playing", function (e) {
                            l || t.fire("started", e), l = 1
                        }), t.player.addEventListener("timeupdate", function (e) {
                            t.fire("timeupdate", e), t.options.endTime && t.options.endTime && this.currentTime >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                        }), t.player.addEventListener("play", function (e) {
                            t.fire("play", e)
                        }), t.player.addEventListener("pause", function (e) {
                            t.fire("pause", e)
                        }), t.player.addEventListener("ended", function (e) {
                            t.fire("ended", e)
                        }), t.player.addEventListener("loadedmetadata", function () {
                            t.videoWidth = this.videoWidth || 1280, t.videoHeight = this.videoHeight || 720, t.fire("ready"), t.options.autoplay && t.play(t.options.startTime)
                        }), t.player.addEventListener("volumechange", function (e) {
                            t.getVolume(function (e) {
                                t.options.volume = e
                            }), t.fire("volumechange", e)
                        })
                    }
                    e(t.$video)
                })
            }
        }, {
            key: "init", value: function () {
                this.playerID = "VideoWorker-" + this.ID
            }
        }, {
            key: "loadAPI", value: function () {
                if (!s || !l) {
                    var e = "";
                    if ("youtube" !== this.type || s || (s = 1, e = "https://www.youtube.com/iframe_api"), "vimeo" !== this.type || l || (l = 1, e = "https://player.vimeo.com/api/player.js"), e) {
                        var t = document.createElement("script"), n = document.getElementsByTagName("head")[0];
                        t.src = e, n.appendChild(t), n = null, t = null
                    }
                }
            }
        }, {
            key: "onAPIready", value: function (e) {
                if ("youtube" === this.type && ("undefined" != typeof YT && 0 !== YT.loaded || c ? "object" === ("undefined" == typeof YT ? "undefined" : i(YT)) && 1 === YT.loaded ? e() : d.done(function () {
                    e()
                }) : (c = 1, window.onYouTubeIframeAPIReady = function () {
                    window.onYouTubeIframeAPIReady = null, d.resolve("done"), e()
                })), "vimeo" === this.type) if ("undefined" != typeof Vimeo || u) "undefined" != typeof Vimeo ? e() : h.done(function () {
                    e()
                }); else {
                    u = 1;
                    var t = setInterval(function () {
                        "undefined" != typeof Vimeo && (clearInterval(t), h.resolve("done"), e())
                    }, 20)
                }
                "local" === this.type && e()
            }
        }]), e
    }();
    t.default = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.default.jarallax;
        if (void 0 === e) return;
        var t = e.constructor, n = t.prototype.init;
        t.prototype.init = function () {
            var e = this;
            n.apply(e), e.video && !e.options.disableVideo() && e.video.getVideo(function (t) {
                var n = t.parentNode;
                e.css(t, {
                    position: e.image.position,
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    maxWidth: "none",
                    maxHeight: "none",
                    margin: 0,
                    zIndex: -1
                }), e.$video = t, e.image.$container.appendChild(t), n.parentNode.removeChild(n)
            })
        };
        var r = t.prototype.coverImage;
        t.prototype.coverImage = function () {
            var e = r.apply(this), t = !!this.image.$item && this.image.$item.nodeName;
            if (e && this.video && t && ("IFRAME" === t || "VIDEO" === t)) {
                var n = e.image.height, i = n * this.image.width / this.image.height, o = (e.container.width - i) / 2,
                    a = e.image.marginTop;
                e.container.width > i && (i = e.container.width, n = i * this.image.height / this.image.width, o = 0, a += (e.image.height - n) / 2), "IFRAME" === t && (n += 400, a -= 200), this.css(this.$video, {
                    width: i + "px",
                    marginLeft: o + "px",
                    height: n + "px",
                    marginTop: a + "px"
                })
            }
            return e
        };
        var a = t.prototype.initImg;
        t.prototype.initImg = function () {
            var e = a.apply(this);
            return this.options.videoSrc || (this.options.videoSrc = this.$item.getAttribute("data-jarallax-video") || null), this.options.videoSrc ? (this.defaultInitImgResult = e, !0) : e
        };
        var s = t.prototype.canInitParallax;
        t.prototype.canInitParallax = function () {
            var e = this, t = s.apply(e);
            if (!e.options.videoSrc) return t;
            var n = new i.default(e.options.videoSrc, {
                autoplay: !0,
                loop: !0,
                showContols: !1,
                startTime: e.options.videoStartTime || 0,
                endTime: e.options.videoEndTime || 0,
                mute: e.options.videoVolume ? 0 : 1,
                volume: e.options.videoVolume || 0
            });
            if (n.isValid()) if (t) {
                if (n.on("ready", function () {
                    if (e.options.videoPlayOnlyVisible) {
                        var t = e.onScroll;
                        e.onScroll = function () {
                            t.apply(e), e.isVisible() ? n.play() : n.pause()
                        }
                    } else n.play()
                }), n.on("started", function () {
                    e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.video.videoWidth || 1280, e.image.height = e.video.videoHeight || 720, e.options.imgWidth = e.image.width, e.options.imgHeight = e.image.height, e.coverImage(), e.clipContainer(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
                }), e.video = n, !e.defaultInitImgResult) return "local" !== n.type ? (n.getImageURL(function (t) {
                    e.image.src = t, e.init()
                }), !1) : (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0)
            } else e.defaultInitImgResult || n.getImageURL(function (t) {
                var n = e.$item.getAttribute("style");
                n && e.$item.setAttribute("data-jarallax-original-styles", n), e.css(e.$item, {
                    "background-image": 'url("' + t + '")',
                    "background-position": "center",
                    "background-size": "cover"
                })
            });
            return t
        };
        var l = t.prototype.destroy;
        t.prototype.destroy = function () {
            this.image.$default_item && (this.image.$item = this.image.$default_item, delete this.image.$default_item), l.apply(this)
        }
    };
    var i = r(n(8)), o = r(n(4));

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }
}]), function (e) {
    var t = {}, n = "", i = "", o = "#ced4da", r = "1px solid #4285f4", a = "1px solid #ced4da",
        s = "0 1px 0 0 #4285f4", l = "", c = function () {
            function c(u, d) {
                _classCallCheck(this, c), this.defaults = {
                    data: t,
                    dataColor: n,
                    xColor: i,
                    xBlurColor: o,
                    inputFocus: r,
                    inputBlur: a,
                    inputFocusShadow: s,
                    inputBlurShadow: l
                }, this.$input = u, this.options = this.assignOptions(d), this.$clearButton = e(".mdb-autocomplete-clear"), this.$autocompleteWrap = e('<ul class="mdb-autocomplete-wrap"></ul>'), this.init()
            }

            return _createClass(c, [{
                key: "init", value: function () {
                    this.setData(), this.inputFocus(), this.inputBlur(), this.inputKeyupData(), this.inputLiClick(), this.clearAutocomplete()
                }
            }, {
                key: "assignOptions", value: function (t) {
                    return e.extend({}, this.defaults, t)
                }
            }, {
                key: "setData", value: function () {
                    Object.keys(this.options.data).length && this.$autocompleteWrap.insertAfter(this.$input)
                }
            }, {
                key: "inputFocus", value: function () {
                    var e = this;
                    this.$input.on("focus", function () {
                        e.$input.css("border-bottom", e.options.inputFocus), e.$input.css("box-shadow", e.options.inputFocusShadow)
                    })
                }
            }, {
                key: "inputBlur", value: function () {
                    var e = this;
                    this.$input.on("blur", function () {
                        e.$input.css("border-bottom", e.options.inputBlur), e.$input.css("box-shadow", e.options.inputBlurShadow)
                    })
                }
            }, {
                key: "inputKeyupData", value: function () {
                    var t = this;
                    this.$input.on("keyup", function (n) {
                        var i = t.$input.val();
                        if (t.$autocompleteWrap.empty(), i.length) for (var o in t.options.data) if (-1 !== t.options.data[o].toLowerCase().indexOf(i.toLowerCase())) {
                            var r = e("<li>".concat(t.options.data[o], "</li>"));
                            t.$autocompleteWrap.append(r)
                        }
                        13 === n.which && (t.$autocompleteWrap.children(":first").trigger("click"), t.$autocompleteWrap.empty()), 0 === i.length ? t.$input.parent().find(".mdb-autocomplete-clear").css("visibility", "hidden") : t.$input.parent().find(".mdb-autocomplete-clear").css("visibility", "visible"), t.$autocompleteWrap.children().css("color", t.options.dataColor)
                    })
                }
            }, {
                key: "inputLiClick", value: function () {
                    var t = this;
                    this.$autocompleteWrap.on("click", "li", function (n) {
                        n.preventDefault(), t.$input.val(e(n.target).text()), t.$autocompleteWrap.empty()
                    })
                }
            }, {
                key: "clearAutocomplete", value: function () {
                    var t = this;
                    this.$clearButton.on("click", function (n) {
                        n.preventDefault();
                        var i = e(n.currentTarget);
                        i.parent().find(".mdb-autocomplete").val(""), i.css("visibility", "hidden"), t.$autocompleteWrap.empty(), i.parent().find("label").removeClass("active")
                    })
                }
            }, {
                key: "changeSVGcolors", value: function () {
                    this.$input.hasClass("mdb-autocomplete") && (this.$input.on("click keyup", function (t) {
                        t.preventDefault(), e(t.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", xColor)
                    }), this.$input.on("blur", function (t) {
                        t.preventDefault(), e(t.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", xBlurColor)
                    }))
                }
            }]), c
        }();
    e.fn.mdbAutocomplete = function (t) {
        return this.each(function () {
            new c(e(this), t)
        })
    }, e.fn.mdb_autocomplete = e.fn.mdbAutocomplete
}(jQuery), function (e) {
    e("body").on("shown.bs.modal", ".modal", function () {
        e(".modal-backdrop").length || ($modal_dialog = e(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (e(this).addClass("modal-scrolling"), e("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (e(this).addClass("modal-content-clickable"), e("body").addClass("scrollable")))
    }), e("body").on("hidden.bs.modal", ".modal", function () {
        e("body").removeClass("scrollable")
    })
}(jQuery);
var i, toggler = document.getElementsByClassName("rotate");
for (i = 0; i < toggler.length; i++) toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active"), this.classList.toggle("down")
});
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).bsCustomFileInput = t()
}(this, function () {
    "use strict";
    var e = {
        CUSTOMFILE: '.custom-file input[type="file"]',
        CUSTOMFILELABEL: ".custom-file-label",
        FORM: "form",
        INPUT: "input"
    }, t = function (t) {
        var n = "", i = t.parentNode.querySelector(e.CUSTOMFILELABEL);
        return i && (n = i.innerHTML), n
    }, n = function (e) {
        if (e.childNodes.length > 0) for (var t = [].slice.call(e.childNodes), n = 0; n < t.length; n++) {
            var i = t[n];
            if (3 !== i.nodeType) return i
        }
        return e
    }, i = function (t) {
        var i = t.bsCustomFileInput.defaultText, o = t.parentNode.querySelector(e.CUSTOMFILELABEL);
        o && (n(o).innerHTML = i)
    }, o = !!window.File, r = function (e) {
        if (e.hasAttribute("multiple") && o) return [].slice.call(e.files).map(function (e) {
            return e.name
        }).join(", ");
        if (-1 !== e.value.indexOf("fakepath")) {
            var t = e.value.split("\\");
            return t[t.length - 1]
        }
        return e.value
    };

    function a() {
        var t = this.parentNode.querySelector(e.CUSTOMFILELABEL);
        if (t) {
            var o = n(t), a = r(this);
            a.length ? o.innerHTML = a : i(this)
        }
    }

    function s() {
        for (var t = [].slice.call(this.querySelectorAll(e.INPUT)).filter(function (e) {
            return !!e.bsCustomFileInput
        }), n = 0, o = t.length; n < o; n++) i(t[n])
    }

    var l = "reset", c = "change";
    return {
        init: function (n, i) {
            void 0 === n && (n = e.CUSTOMFILE), void 0 === i && (i = e.FORM);
            for (var o = [].slice.call(document.querySelectorAll(n)), r = [].slice.call(document.querySelectorAll(i)), u = 0, d = o.length; u < d; u++) {
                var h = o[u];
                Object.defineProperty(h, "bsCustomFileInput", {
                    value: {defaultText: t(h)},
                    writable: !0
                }), a.call(h), h.addEventListener(c, a)
            }
            for (var f = 0, p = r.length; f < p; f++) r[f].addEventListener(l, s), Object.defineProperty(r[f], "bsCustomFileInput", {
                value: !0,
                writable: !0
            })
        }, destroy: function () {
            for (var t = [].slice.call(document.querySelectorAll(e.FORM)).filter(function (e) {
                return !!e.bsCustomFileInput
            }), n = [].slice.call(document.querySelectorAll(e.INPUT)).filter(function (e) {
                return !!e.bsCustomFileInput
            }), o = 0, r = n.length; o < r; o++) {
                var u = n[o];
                i(u), u.bsCustomFileInput = void 0, u.removeEventListener(c, a)
            }
            for (var d = 0, h = t.length; d < h; d++) t[d].removeEventListener(l, s), t[d].bsCustomFileInput = void 0
        }
    }
}), document.addEventListener("DOMContentLoaded", function () {
    bsCustomFileInput.init()
});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
        var e = /\blang(?:uage)?-([\w-]+)\b/i, t = 0, n = _self.Prism = {
            manual: _self.Prism && _self.Prism.manual,
            disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
            util: {
                encode: function (e) {
                    return e instanceof i ? new i(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                }, type: function (e) {
                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                }, objId: function (e) {
                    return e.__id || Object.defineProperty(e, "__id", {value: ++t}), e.__id
                }, clone: function (e, t) {
                    var i = n.util.type(e);
                    switch (t = t || {}, i) {
                        case"Object":
                            if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                            var o = {};
                            for (var r in t[n.util.objId(e)] = o, e) e.hasOwnProperty(r) && (o[r] = n.util.clone(e[r], t));
                            return o;
                        case"Array":
                            if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                            o = [];
                            return t[n.util.objId(e)] = o, e.forEach(function (e, i) {
                                o[i] = n.util.clone(e, t)
                            }), o
                    }
                    return e
                }
            },
            languages: {
                extend: function (e, t) {
                    var i = n.util.clone(n.languages[e]);
                    for (var o in t) i[o] = t[o];
                    return i
                }, insertBefore: function (e, t, i, o) {
                    var r = (o = o || n.languages)[e];
                    if (2 == arguments.length) {
                        for (var a in i = arguments[1]) i.hasOwnProperty(a) && (r[a] = i[a]);
                        return r
                    }
                    var s = {};
                    for (var l in r) if (r.hasOwnProperty(l)) {
                        if (l == t) for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
                        s[l] = r[l]
                    }
                    return n.languages.DFS(n.languages, function (t, n) {
                        n === o[e] && t != e && (this[t] = s)
                    }), o[e] = s
                }, DFS: function (e, t, i, o) {
                    for (var r in o = o || {}, e) e.hasOwnProperty(r) && (t.call(e, r, e[r], i || r), "Object" !== n.util.type(e[r]) || o[n.util.objId(e[r])] ? "Array" !== n.util.type(e[r]) || o[n.util.objId(e[r])] || (o[n.util.objId(e[r])] = !0, n.languages.DFS(e[r], t, r, o)) : (o[n.util.objId(e[r])] = !0, n.languages.DFS(e[r], t, null, o)))
                }
            },
            plugins: {},
            highlightAll: function (e, t) {
                n.highlightAllUnder(document, e, t)
            },
            highlightAllUnder: function (e, t, i) {
                var o = {
                    callback: i,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                n.hooks.run("before-highlightall", o);
                for (var r, a = o.elements || e.querySelectorAll(o.selector), s = 0; r = a[s++];) n.highlightElement(r, !0 === t, o.callback)
            },
            highlightElement: function (t, i, o) {
                for (var r, a, s = t; s && !e.test(s.className);) s = s.parentNode;
                s && (r = (s.className.match(e) || [, ""])[1].toLowerCase(), a = n.languages[r]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r, t.parentNode && (s = t.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r));
                var l = {element: t, language: r, grammar: a, code: t.textContent};
                if (n.hooks.run("before-sanity-check", l), !l.code || !l.grammar) return l.code && (n.hooks.run("before-highlight", l), l.element.textContent = l.code, n.hooks.run("after-highlight", l)), void n.hooks.run("complete", l);
                if (n.hooks.run("before-highlight", l), i && _self.Worker) {
                    var c = new Worker(n.filename);
                    c.onmessage = function (e) {
                        l.highlightedCode = e.data, n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, o && o.call(l.element), n.hooks.run("after-highlight", l), n.hooks.run("complete", l)
                    }, c.postMessage(JSON.stringify({language: l.language, code: l.code, immediateClose: !0}))
                } else l.highlightedCode = n.highlight(l.code, l.grammar, l.language), n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, o && o.call(t), n.hooks.run("after-highlight", l), n.hooks.run("complete", l)
            },
            highlight: function (e, t, o) {
                var r = {code: e, grammar: t, language: o};
                return n.hooks.run("before-tokenize", r), r.tokens = n.tokenize(r.code, r.grammar), n.hooks.run("after-tokenize", r), i.stringify(n.util.encode(r.tokens), r.language)
            },
            matchGrammar: function (e, t, i, o, r, a, s) {
                var l = n.Token;
                for (var c in i) if (i.hasOwnProperty(c) && i[c]) {
                    if (c == s) return;
                    var u = i[c];
                    u = "Array" === n.util.type(u) ? u : [u];
                    for (var d = 0; d < u.length; ++d) {
                        var h = u[d], f = h.inside, p = !!h.lookbehind, g = !!h.greedy, m = 0, v = h.alias;
                        if (g && !h.pattern.global) {
                            var y = h.pattern.toString().match(/[imuy]*$/)[0];
                            h.pattern = RegExp(h.pattern.source, y + "g")
                        }
                        h = h.pattern || h;
                        for (var b = o, x = r; b < t.length; x += t[b].length, ++b) {
                            var w = t[b];
                            if (t.length > e.length) return;
                            if (!(w instanceof l)) {
                                if (g && b != t.length - 1) {
                                    if (h.lastIndex = x, !(E = h.exec(e))) break;
                                    for (var k = E.index + (p ? E[1].length : 0), C = E.index + E[0].length, S = b, _ = x, T = t.length; S < T && (_ < C || !t[S].type && !t[S - 1].greedy); ++S) k >= (_ += t[S].length) && (++b, x = _);
                                    if (t[b] instanceof l) continue;
                                    A = S - b, w = e.slice(x, _), E.index -= x
                                } else {
                                    h.lastIndex = 0;
                                    var E = h.exec(w), A = 1
                                }
                                if (E) {
                                    p && (m = E[1] ? E[1].length : 0);
                                    C = (k = E.index + m) + (E = E[0].slice(m)).length;
                                    var D = w.slice(0, k), I = w.slice(C), P = [b, A];
                                    D && (++b, x += D.length, P.push(D));
                                    var M = new l(c, f ? n.tokenize(E, f) : E, v, E, g);
                                    if (P.push(M), I && P.push(I), Array.prototype.splice.apply(t, P), 1 != A && n.matchGrammar(e, t, i, b, x, !0, c), a) break
                                } else if (a) break
                            }
                        }
                    }
                }
            },
            tokenize: function (e, t, i) {
                var o = [e], r = t.rest;
                if (r) {
                    for (var a in r) t[a] = r[a];
                    delete t.rest
                }
                return n.matchGrammar(e, o, t, 0, 0, !1), o
            },
            hooks: {
                all: {}, add: function (e, t) {
                    var i = n.hooks.all;
                    i[e] = i[e] || [], i[e].push(t)
                }, run: function (e, t) {
                    var i = n.hooks.all[e];
                    if (i && i.length) for (var o, r = 0; o = i[r++];) o(t)
                }
            }
        }, i = n.Token = function (e, t, n, i, o) {
            this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length, this.greedy = !!o
        };
        if (i.stringify = function (e, t, o) {
            if ("string" == typeof e) return e;
            if ("Array" === n.util.type(e)) return e.map(function (n) {
                return i.stringify(n, t, e)
            }).join("");
            var r = {
                type: e.type,
                content: i.stringify(e.content, t, o),
                tag: "span",
                classes: ["token", e.type],
                attributes: {},
                language: t,
                parent: o
            };
            if (e.alias) {
                var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(r.classes, a)
            }
            n.hooks.run("wrap", r);
            var s = Object.keys(r.attributes).map(function (e) {
                return e + '="' + (r.attributes[e] || "").replace(/"/g, "&quot;") + '"'
            }).join(" ");
            return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + r.content + "</" + r.tag + ">"
        }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", function (e) {
            var t = JSON.parse(e.data), i = t.language, o = t.code, r = t.immediateClose;
            _self.postMessage(n.highlight(o, n.languages[i], i)), r && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return o && (n.filename = o.src, n.manual || o.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism
    }();

function get_social_counts() {
    var e = window.location.protocol + "//" + window.location.host + window.location.pathname;
    $.ajax({
        type: "GET",
        url: "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/inc/get_social_counts.php?thisurl=" + e,
        dataType: "json",
        success: function (e) {
            var t = 1 * document.getElementById("dom-target-fb").textContent.valueOf() + e.facebook;
            t > 0 ? $("#facebook-span").text(t) : $("#facebook-span").hide()
        }
    })
}

function loadTemplatesBy(e, t) {
    $.post(ajax_object.ajaxurl, {action: "ajax_action", category: e}, function (t) {
        console.log(e), $("#products").html(t)
    })
}

"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        greedy: !0,
        inside: {
            tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
            "attr-value": {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                inside: {punctuation: [/^=/, {pattern: /(^|[^\\])["']/, lookbehind: !0}]}
            },
            punctuation: /\/?>/,
            "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
    url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^{}\s][^{};]*?(?=\s*\{)/,
    string: {pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css",
        greedy: !0
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
            "attr-name": {pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside},
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {pattern: /.+/i, inside: Prism.languages.css}
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
    string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {punctuation: /[.\\]/}
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
        alias: "function"
    },
    constant: /\b[A-Z][A-Z\d_]*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\${[^}]+}/,
                inside: {"interpolation-punctuation": {pattern: /^\${|}$/, alias: "punctuation"}, rest: null}
            }, string: /[\s\S]+/
        }
    }
}), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript",
        greedy: !0
    }
}), Prism.languages.js = Prism.languages.javascript, Prism.languages["markup-templating"] = {}, Object.defineProperties(Prism.languages["markup-templating"], {
    buildPlaceholders: {
        value: function (e, t, n, i) {
            e.language === t && (e.tokenStack = [], e.code = e.code.replace(n, function (n) {
                if ("function" == typeof i && !i(n)) return n;
                for (var o = e.tokenStack.length; -1 !== e.code.indexOf("___" + t.toUpperCase() + o + "___");) ++o;
                return e.tokenStack[o] = n, "___" + t.toUpperCase() + o + "___"
            }), e.grammar = Prism.languages.markup)
        }
    }, tokenizePlaceholders: {
        value: function (e, t) {
            if (e.language === t && e.tokenStack) {
                e.grammar = Prism.languages[t];
                var n = 0, i = Object.keys(e.tokenStack), o = function (r) {
                    if (!(n >= i.length)) for (var a = 0; a < r.length; a++) {
                        var s = r[a];
                        if ("string" == typeof s || s.content && "string" == typeof s.content) {
                            var l = i[n], c = e.tokenStack[l], u = "string" == typeof s ? s : s.content,
                                d = u.indexOf("___" + t.toUpperCase() + l + "___");
                            if (d > -1) {
                                ++n;
                                var h, f = u.substring(0, d),
                                    p = new Prism.Token(t, Prism.tokenize(c, e.grammar, t), "language-" + t, c),
                                    g = u.substring(d + ("___" + t.toUpperCase() + l + "___").length);
                                if (f || g ? (h = [f, p, g].filter(function (e) {
                                    return !!e
                                }), o(h)) : h = p, "string" == typeof s ? Array.prototype.splice.apply(r, [a, 1].concat(h)) : s.content = h, n >= i.length) break
                            }
                        } else s.content && "string" != typeof s.content && o(s.content)
                    }
                };
                o(e.tokens)
            }
        }
    }
}), Prism.languages.json = {
    property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
    string: {pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0},
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    punctuation: /[{}[\]);,]/,
    operator: /:/g,
    boolean: /\b(?:true|false)\b/i,
    null: /\bnull\b/i
}, Prism.languages.jsonp = Prism.languages.json, function (e) {
    e.languages.php = e.languages.extend("clike", {
        keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
        constant: /\b[A-Z0-9_]{2,}\b/,
        comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0}
    }), e.languages.insertBefore("php", "string", {
        "shell-comment": {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0,
            alias: "comment"
        }
    }), e.languages.insertBefore("php", "keyword", {
        delimiter: {pattern: /\?>|<\?(?:php|=)?/i, alias: "important"},
        variable: /\$+(?:\w+\b|(?={))/i,
        package: {pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: {punctuation: /\\/}}
    }), e.languages.insertBefore("php", "operator", {
        property: {
            pattern: /(->)[\w]+/,
            lookbehind: !0
        }
    }), e.languages.insertBefore("php", "string", {
        "nowdoc-string": {
            pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
            greedy: !0,
            alias: "string",
            inside: {
                delimiter: {
                    pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {punctuation: /^<<<'?|[';]$/}
                }
            }
        },
        "heredoc-string": {
            pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
            greedy: !0,
            alias: "string",
            inside: {
                delimiter: {
                    pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {punctuation: /^<<<"?|[";]$/}
                }, interpolation: null
            }
        },
        "single-quoted-string": {pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: "string"},
        "double-quoted-string": {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            greedy: !0,
            alias: "string",
            inside: {interpolation: null}
        }
    }), delete e.languages.php.string;
    var t = {
        pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
        lookbehind: !0,
        inside: {rest: e.languages.php}
    };
    e.languages.php["heredoc-string"].inside.interpolation = t, e.languages.php["double-quoted-string"].inside.interpolation = t, e.hooks.add("before-tokenize", function (t) {
        if (/(?:<\?php|<\?)/gi.test(t.code)) {
            e.languages["markup-templating"].buildPlaceholders(t, "php", /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)
        }
    }), e.hooks.add("after-tokenize", function (t) {
        e.languages["markup-templating"].tokenizePlaceholders(t, "php")
    })
}(Prism), Prism.languages.typescript = Prism.languages.extend("javascript", {
    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/
}), Prism.languages.ts = Prism.languages.typescript, Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0
    },
    atrule: {pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: {rule: /@[\w-]+/}},
    url: /(?:[-a-z]+-)*url(?=\()/i,
    selector: {
        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
        inside: {parent: {pattern: /&/, alias: "important"}, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/}
    }
}), Prism.languages.insertBefore("scss", "atrule", {
    keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: !0
    }]
}), Prism.languages.scss.property = {
    pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
    inside: {variable: /\$[-\w]+|#\{\$[-\w]+\}/}
}, Prism.languages.insertBefore("scss", "important", {variable: /\$[-\w]+|#\{\$[-\w]+\}/}), Prism.languages.insertBefore("scss", "function", {
    placeholder: {
        pattern: /%[-\w]+/,
        alias: "selector"
    },
    statement: {pattern: /\B!(?:default|optional)\b/i, alias: "keyword"},
    boolean: /\b(?:true|false)\b/,
    null: /\bnull\b/,
    operator: {pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0}
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss, function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var e = /\n(?!$)/g, t = function (t) {
            var i = n(t)["white-space"];
            if ("pre-wrap" === i || "pre-line" === i) {
                var o = t.querySelector("code"), r = t.querySelector(".line-numbers-rows"),
                    a = t.querySelector(".line-numbers-sizer"), s = o.textContent.split(e);
                a || ((a = document.createElement("span")).className = "line-numbers-sizer", o.appendChild(a)), a.style.display = "block", s.forEach(function (e, t) {
                    a.textContent = e || "\n";
                    var n = a.getBoundingClientRect().height;
                    r.children[t].style.height = n + "px"
                }), a.textContent = "", a.style.display = "none"
            }
        }, n = function (e) {
            return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
        };
        window.addEventListener("resize", function () {
            Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"), t)
        }), Prism.hooks.add("complete", function (n) {
            if (n.code) {
                var i = n.element.parentNode, o = /\s*\bline-numbers\b\s*/;
                if (i && /pre/i.test(i.nodeName) && (o.test(i.className) || o.test(n.element.className)) && !n.element.querySelector(".line-numbers-rows")) {
                    o.test(n.element.className) && (n.element.className = n.element.className.replace(o, " ")), o.test(i.className) || (i.className += " line-numbers");
                    var r, a = n.code.match(e), s = a ? a.length + 1 : 1, l = new Array(s + 1);
                    l = l.join("<span></span>"), (r = document.createElement("span")).setAttribute("aria-hidden", "true"), r.className = "line-numbers-rows", r.innerHTML = l, i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)), n.element.appendChild(r), t(i), Prism.hooks.run("line-numbers", n)
                }
            }
        }), Prism.hooks.add("line-numbers", function (e) {
            e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
        }), Prism.plugins.lineNumbers = {
            getLine: function (e, t) {
                if ("PRE" === e.tagName && e.classList.contains("line-numbers")) {
                    var n = e.querySelector(".line-numbers-rows"), i = parseInt(e.getAttribute("data-start"), 10) || 1,
                        o = i + (n.children.length - 1);
                    t < i && (t = i), t > o && (t = o);
                    var r = t - i;
                    return n.children[r]
                }
            }
        }
    }
}(), function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var e = [], t = {}, n = function () {
        };
        Prism.plugins.toolbar = {};
        var i = Prism.plugins.toolbar.registerButton = function (n, i) {
            var o;
            o = "function" == typeof i ? i : function (e) {
                var t;
                return "function" == typeof i.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function () {
                    i.onClick.call(this, e)
                })) : "string" == typeof i.url ? (t = document.createElement("a")).href = i.url : t = document.createElement("span"), t.textContent = i.text, t
            }, e.push(t[n] = o)
        }, o = Prism.plugins.toolbar.hook = function (i) {
            var o = i.element.parentNode;
            if (o && /pre/i.test(o.nodeName) && !o.parentNode.classList.contains("code-toolbar")) {
                var r = document.createElement("div");
                r.classList.add("code-toolbar"), o.parentNode.insertBefore(r, o), r.appendChild(o);
                var a = document.createElement("div");
                a.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (e = document.body.getAttribute("data-toolbar-order").split(",").map(function (e) {
                    return t[e] || n
                })), e.forEach(function (e) {
                    var t = e(i);
                    if (t) {
                        var n = document.createElement("div");
                        n.classList.add("toolbar-item"), n.appendChild(t), a.appendChild(n)
                    }
                }), r.appendChild(a)
            }
        };
        i("label", function (e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                var n, i, o = t.getAttribute("data-label");
                try {
                    i = document.querySelector("template#" + o)
                } catch (e) {
                }
                return i ? n = i.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = o), n
            }
        }), Prism.hooks.add("complete", o)
    }
}(), function () {
    if (("undefined" == typeof self || self.Prism) && self.document && Function.prototype.bind) {
        var e, t, n = {
                gradient: {
                    create: (e = {}, t = function (t) {
                        if (e[t]) return e[t];
                        var n = t.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/), i = n && n[1],
                            o = n && n[2],
                            r = t.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g, "").split(/\s*,\s*/);
                        return o.indexOf("linear") >= 0 ? e[t] = function (e, t, n) {
                            var i = "180deg";
                            return /^(?:-?\d*\.?\d+(?:deg|rad)|to\b|top|right|bottom|left)/.test(n[0]) && (i = n.shift()).indexOf("to ") < 0 && (i.indexOf("top") >= 0 ? i = i.indexOf("left") >= 0 ? "to bottom right" : i.indexOf("right") >= 0 ? "to bottom left" : "to bottom" : i.indexOf("bottom") >= 0 ? i = i.indexOf("left") >= 0 ? "to top right" : i.indexOf("right") >= 0 ? "to top left" : "to top" : i.indexOf("left") >= 0 ? i = "to right" : i.indexOf("right") >= 0 ? i = "to left" : e && (i.indexOf("deg") >= 0 ? i = 90 - parseFloat(i) + "deg" : i.indexOf("rad") >= 0 && (i = Math.PI / 2 - parseFloat(i) + "rad"))), t + "(" + i + "," + n.join(",") + ")"
                        }(i, o, r) : o.indexOf("radial") >= 0 ? e[t] = function (e, t, n) {
                            if (n[0].indexOf("at") < 0) {
                                var i = "center", o = "ellipse", r = "farthest-corner";
                                if (/\bcenter|top|right|bottom|left\b|^\d+/.test(n[0]) && (i = n.shift().replace(/\s*-?\d+(?:rad|deg)\s*/, "")), /\bcircle|ellipse|closest|farthest|contain|cover\b/.test(n[0])) {
                                    var a = n.shift().split(/\s+/);
                                    !a[0] || "circle" !== a[0] && "ellipse" !== a[0] || (o = a.shift()), a[0] && (r = a.shift()), "cover" === r ? r = "farthest-corner" : "contain" === r && (r = "clothest-side")
                                }
                                return t + "(" + o + " " + r + " at " + i + "," + n.join(",") + ")"
                            }
                            return t + "(" + n.join(",") + ")"
                        }(0, o, r) : e[t] = o + "(" + r.join(",") + ")"
                    }, function () {
                        new Prism.plugins.Previewer("gradient", function (e) {
                            return this.firstChild.style.backgroundImage = "", this.firstChild.style.backgroundImage = t(e), !!this.firstChild.style.backgroundImage
                        }, "*", function () {
                            this._elt.innerHTML = "<div></div>"
                        })
                    }),
                    tokens: {
                        gradient: {
                            pattern: /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,
                            inside: {function: /[\w-]+(?=\()/, punctuation: /[(),]/}
                        }
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        sass: [{
                            lang: "sass",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }, {
                            lang: "sass",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                }, angle: {
                    create: function () {
                        new Prism.plugins.Previewer("angle", function (e) {
                            var t, n, i = parseFloat(e), o = e.match(/[a-z]+$/i);
                            if (!i || !o) return !1;
                            switch (o = o[0]) {
                                case"deg":
                                    t = 360;
                                    break;
                                case"grad":
                                    t = 400;
                                    break;
                                case"rad":
                                    t = 2 * Math.PI;
                                    break;
                                case"turn":
                                    t = 1
                            }
                            return n = 100 * i / t, n %= 100, this[(i < 0 ? "set" : "remove") + "Attribute"]("data-negative", ""), this.querySelector("circle").style.strokeDasharray = Math.abs(n) + ",500", !0
                        }, "*", function () {
                            this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                        })
                    },
                    tokens: {angle: /(?:\b|\B-|(?=\B\.))\d*\.?\d+(?:deg|g?rad|turn)\b/i},
                    languages: {
                        css: !0,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                        },
                        sass: [{
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }, {
                            lang: "sass",
                            before: "operator",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "func",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                }, color: {
                    create: function () {
                        new Prism.plugins.Previewer("color", function (e) {
                            return this.style.backgroundColor = "", this.style.backgroundColor = e, !!this.style.backgroundColor
                        })
                    },
                    tokens: {
                        color: {
                            pattern: /\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                            inside: {function: /[\w-]+(?=\()/, punctuation: /[(),]/}
                        }
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                        },
                        sass: [{
                            lang: "sass",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }, {
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                }, easing: {
                    create: function () {
                        new Prism.plugins.Previewer("easing", function (e) {
                            var t = (e = {
                                linear: "0,0,1,1",
                                ease: ".25,.1,.25,1",
                                "ease-in": ".42,0,1,1",
                                "ease-out": "0,0,.58,1",
                                "ease-in-out": ".42,0,.58,1"
                            }[e] || e).match(/-?\d*\.?\d+/g);
                            if (4 === t.length) {
                                t = t.map(function (e, t) {
                                    return 100 * (t % 2 ? 1 - e : e)
                                }), this.querySelector("path").setAttribute("d", "M0,100 C" + t[0] + "," + t[1] + ", " + t[2] + "," + t[3] + ", 100,0");
                                var n = this.querySelectorAll("line");
                                return n[0].setAttribute("x2", t[0]), n[0].setAttribute("y2", t[1]), n[1].setAttribute("x2", t[2]), n[1].setAttribute("y2", t[3]), !0
                            }
                            return !1
                        }, "*", function () {
                            this._elt.innerHTML = '<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /></svg>'
                        })
                    },
                    tokens: {
                        easing: {
                            pattern: /\bcubic-bezier\((?:-?\d*\.?\d+,\s*){3}-?\d*\.?\d+\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i,
                            inside: {function: /[\w-]+(?=\()/, punctuation: /[(),]/}
                        }
                    },
                    languages: {
                        css: !0,
                        less: !0,
                        sass: [{
                            lang: "sass",
                            inside: "inside",
                            before: "punctuation",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }, {
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                }, time: {
                    create: function () {
                        new Prism.plugins.Previewer("time", function (e) {
                            var t = parseFloat(e), n = e.match(/[a-z]+$/i);
                            return !(!t || !n) && (n = n[0], this.querySelector("circle").style.animationDuration = 2 * t + n, !0)
                        }, "*", function () {
                            this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                        })
                    },
                    tokens: {time: /(?:\b|\B-|(?=\B\.))\d*\.?\d+m?s\b/i},
                    languages: {
                        css: !0,
                        less: !0,
                        markup: {
                            lang: "markup",
                            before: "punctuation",
                            inside: "inside",
                            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                        },
                        sass: [{
                            lang: "sass",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["property-line"]
                        }, {
                            lang: "sass",
                            before: "operator",
                            inside: "inside",
                            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                        }],
                        scss: !0,
                        stylus: [{
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                        }, {
                            lang: "stylus",
                            before: "hexcode",
                            inside: "rest",
                            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                        }]
                    }
                }
            }, i = /(?:^|\s)token(?=$|\s)/, o = /(?:^|\s)active(?=$|\s)/g, r = /(?:^|\s)flipped(?=$|\s)/g,
            a = function (e, t, n, i) {
                this._elt = null, this._type = e, this._clsRegexp = RegExp("(?:^|\\s)" + e + "(?=$|\\s)"), this._token = null, this.updater = t, this._mouseout = this.mouseout.bind(this), this.initializer = i;
                var o = this;
                n || (n = ["*"]), "Array" !== Prism.util.type(n) && (n = [n]), n.forEach(function (e) {
                    "string" != typeof e && (e = e.lang), a.byLanguages[e] || (a.byLanguages[e] = []), a.byLanguages[e].indexOf(o) < 0 && a.byLanguages[e].push(o)
                }), a.byType[e] = this
            };
        for (var s in a.prototype.init = function () {
            this._elt || (this._elt = document.createElement("div"), this._elt.className = "prism-previewer prism-previewer-" + this._type, document.body.appendChild(this._elt), this.initializer && this.initializer())
        }, a.prototype.isDisabled = function (e) {
            do {
                if (e.hasAttribute && e.hasAttribute("data-previewers")) return -1 === (e.getAttribute("data-previewers") || "").split(/\s+/).indexOf(this._type)
            } while (e = e.parentNode);
            return !1
        }, a.prototype.check = function (e) {
            if (!i.test(e.className) || !this.isDisabled(e)) {
                do {
                    if (i.test(e.className) && this._clsRegexp.test(e.className)) break
                } while (e = e.parentNode);
                e && e !== this._token && (this._token = e, this.show())
            }
        }, a.prototype.mouseout = function () {
            this._token.removeEventListener("mouseout", this._mouseout, !1), this._token = null, this.hide()
        }, a.prototype.show = function () {
            if (this._elt || this.init(), this._token) if (this.updater.call(this._elt, this._token.textContent)) {
                this._token.addEventListener("mouseout", this._mouseout, !1);
                var e = function (e) {
                    var t = 0, n = 0, i = e;
                    if (i.parentNode) {
                        do {
                            t += i.offsetLeft, n += i.offsetTop
                        } while ((i = i.offsetParent) && i.nodeType < 9);
                        i = e;
                        do {
                            t -= i.scrollLeft, n -= i.scrollTop
                        } while ((i = i.parentNode) && !/body/i.test(i.nodeName))
                    }
                    return {
                        top: n,
                        right: innerWidth - t - e.offsetWidth,
                        bottom: innerHeight - n - e.offsetHeight,
                        left: t
                    }
                }(this._token);
                this._elt.className += " active", e.top - this._elt.offsetHeight > 0 ? (this._elt.className = this._elt.className.replace(r, ""), this._elt.style.top = e.top + "px", this._elt.style.bottom = "") : (this._elt.className += " flipped", this._elt.style.bottom = e.bottom + "px", this._elt.style.top = ""), this._elt.style.left = e.left + Math.min(200, this._token.offsetWidth / 2) + "px"
            } else this.hide()
        }, a.prototype.hide = function () {
            this._elt.className = this._elt.className.replace(o, "")
        }, a.byLanguages = {}, a.byType = {}, a.initEvents = function (e, t) {
            var n = [];
            a.byLanguages[t] && (n = n.concat(a.byLanguages[t])), a.byLanguages["*"] && (n = n.concat(a.byLanguages["*"])), e.addEventListener("mouseover", function (e) {
                var t = e.target;
                n.forEach(function (e) {
                    e.check(t)
                })
            }, !1)
        }, Prism.plugins.Previewer = a, Prism.hooks.add("before-highlight", function (e) {
            for (var t in n) {
                var i = n[t].languages;
                if (e.language && i[e.language] && !i[e.language].initialized) {
                    var o = i[e.language];
                    "Array" !== Prism.util.type(o) && (o = [o]), o.forEach(function (o) {
                        var r, a, s, l;
                        !0 === o ? (r = "important", a = e.language, o = e.language) : (r = o.before || "important", a = o.inside || o.lang, s = o.root || Prism.languages, l = o.skip, o = e.language), !l && Prism.languages[o] && (Prism.languages.insertBefore(a, r, n[t].tokens, s), e.grammar = Prism.languages[o], i[e.language] = {initialized: !0})
                    })
                }
            }
        }), Prism.hooks.add("after-highlight", function (e) {
            (a.byLanguages["*"] || a.byLanguages[e.language]) && a.initEvents(e.element, e.language)
        }), n) n[s].create()
    }
}(), function () {
    var e = Object.assign || function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    };

    function t(t) {
        this.defaults = e({}, t)
    }

    function n(e) {
        for (var t = 0, n = 0; n < e.length; ++n) e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
        return e.length + t
    }

    t.prototype = {
        setDefaults: function (t) {
            this.defaults = e(this.defaults, t)
        }, normalize: function (t, n) {
            for (var i in n = e(this.defaults, n)) {
                var o = i.replace(/-(\w)/g, function (e, t) {
                    return t.toUpperCase()
                });
                "normalize" !== i && "setDefaults" !== o && n[i] && this[o] && (t = this[o].call(this, t, n[i]))
            }
            return t
        }, leftTrim: function (e) {
            return e.replace(/^\s+/, "")
        }, rightTrim: function (e) {
            return e.replace(/\s+$/, "")
        }, tabsToSpaces: function (e, t) {
            return t = 0 | t || 4, e.replace(/\t/g, new Array(++t).join(" "))
        }, spacesToTabs: function (e, t) {
            return t = 0 | t || 4, e.replace(new RegExp(" {" + t + "}", "g"), "\t")
        }, removeTrailing: function (e) {
            return e.replace(/\s*?$/gm, "")
        }, removeInitialLineFeed: function (e) {
            return e.replace(/^(?:\r?\n|\r)/, "")
        }, removeIndent: function (e) {
            var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
            return t && t[0].length ? (t.sort(function (e, t) {
                return e.length - t.length
            }), t[0].length ? e.replace(new RegExp("^" + t[0], "gm"), "") : e) : e
        }, indent: function (e, t) {
            return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&")
        }, breakLines: function (e, t) {
            t = !0 === t ? 80 : 0 | t || 80;
            for (var i = e.split("\n"), o = 0; o < i.length; ++o) if (!(n(i[o]) <= t)) {
                for (var r = i[o].split(/(\s+)/g), a = 0, s = 0; s < r.length; ++s) {
                    var l = n(r[s]);
                    (a += l) > t && (r[s] = "\n" + r[s], a = l)
                }
                i[o] = r.join("")
            }
            return i.join("\n")
        }
    }, "undefined" != typeof module && module.exports && (module.exports = t), void 0 !== Prism && (Prism.plugins.NormalizeWhitespace = new t({
        "remove-trailing": !0,
        "remove-indent": !0,
        "left-trim": !0,
        "right-trim": !0
    }), Prism.hooks.add("before-sanity-check", function (e) {
        var t = Prism.plugins.NormalizeWhitespace;
        if (!e.settings || !1 !== e.settings["whitespace-normalization"]) if (e.element && e.element.parentNode || !e.code) {
            var n = e.element.parentNode, i = /\bno-whitespace-normalization\b/;
            if (e.code && n && "pre" === n.nodeName.toLowerCase() && !i.test(n.className) && !i.test(e.element.className)) {
                for (var o = n.childNodes, r = "", a = "", s = !1, l = 0; l < o.length; ++l) {
                    var c = o[l];
                    c == e.element ? s = !0 : "#text" === c.nodeName && (s ? a += c.nodeValue : r += c.nodeValue, n.removeChild(c), --l)
                }
                if (e.element.children.length && Prism.plugins.KeepMarkup) {
                    var u = r + e.element.innerHTML + a;
                    e.element.innerHTML = t.normalize(u, e.settings), e.code = e.element.textContent
                } else e.code = r + e.code + a, e.code = t.normalize(e.code, e.settings)
            }
        } else e.code = t.normalize(e.code, e.settings)
    }))
}(), function () {
    if ("undefined" != typeof self && self.Prism && self.document) if (Prism.plugins.toolbar) {
        var e = window.ClipboardJS || void 0;
        e || "function" != typeof require || (e = require("clipboard"));
        var t = [];
        if (!e) {
            var n = document.createElement("script"), i = document.querySelector("head");
            n.onload = function () {
                if (e = window.ClipboardJS) for (; t.length;) t.pop()()
            }, n.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", i.appendChild(n)
        }
        Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (n) {
            var i = document.createElement("button");
            return i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code', i.classList = "btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect", e ? o() : t.push(o), i;

            function o() {
                var t = new e(i, {
                    text: function () {
                        return n.code
                    }
                });
                t.on("success", function () {
                    i.textContent = "Copied!", r()
                }), t.on("error", function () {
                    i.textContent = "Press Ctrl+C to copy", r()
                })
            }

            function r() {
                setTimeout(function () {
                    i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code'
                }, 5e3)
            }
        })
    } else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")
}(), $(function (e) {
    e('.documentation a[href="#"]').click(function (e) {
        e.preventDefault()
    })
}), function () {
    var e = window.location.host;
}(), jQuery(document).ready(function (e) {
    e("form#signup").on("submit", function (t) {
        t.preventDefault(), e.ajax({
            type: "POST",
            dataType: "json",
            url: mdw_search_object.ajaxurl,
            data: {
                action: "ajaxregister",
                name: e("#regname").val(),
                username: e("#regusername").val(),
                password: e("#regpassword").val(),
                email: e("#regemail").val(),
                security: e("#regsecurity").val()
            },
            success: function (t) {
                e("#ajax-response").text(t.message), 1 == t.loggedin && (document.location.href = "https://mdbootstrap.com/registration-completed/")
            },
            error: function (e) {
                console.log(e)
            }
        })
    })
});