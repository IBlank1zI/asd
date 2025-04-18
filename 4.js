/*!
 * VERSION: 0.9.1
 * DATE: 2019-02-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    function A(e) {
        _gsScope.console && console.log(e)
    }
    function R(e) {
        function t(e, t, r, o) {
            g = (r - e) / 3,
            p = (o - t) / 3,
            s.push(e + g, t + p, r - g, o - p, r, o)
        }
        var r, o, n, i, a, h, s, l, f, g, p, c, u, d = (e + "").replace(q, function(e) {
            var t = +e;
            return t < 1e-4 && -1e-4 < t ? 0 : t
        }).match(V) || [], m = [], _ = 0, C = 0, y = d.length, S = 0, v = "ERROR: malformed path: " + e;
        if (!e || !isNaN(d[0]) || isNaN(d[1]))
            return A(v),
            m;
        for (r = 0; r < y; r++)
            if (u = a,
            isNaN(d[r]) ? h = (a = d[r].toUpperCase()) !== d[r] : r--,
            n = +d[r + 1],
            i = +d[r + 2],
            h && (n += _,
            i += C),
            r || (l = n,
            f = i),
            "M" === a)
                s && (s.length < 8 ? --m.length : S += s.length),
                _ = l = n,
                C = f = i,
                s = [n, i],
                m.push(s),
                r += 2,
                a = "L";
            else if ("C" === a)
                h || (_ = C = 0),
                (s = s || [0, 0]).push(n, i, _ + +d[r + 3], C + +d[r + 4], _ += +d[r + 5], C += +d[r + 6]),
                r += 6;
            else if ("S" === a)
                g = _,
                p = C,
                "C" !== u && "S" !== u || (g += _ - s[s.length - 4],
                p += C - s[s.length - 3]),
                h || (_ = C = 0),
                s.push(g, p, n, i, _ += +d[r + 3], C += +d[r + 4]),
                r += 4;
            else if ("Q" === a)
                g = _ + 2 / 3 * (n - _),
                p = C + 2 / 3 * (i - C),
                h || (_ = C = 0),
                _ += +d[r + 3],
                C += +d[r + 4],
                s.push(g, p, _ + 2 / 3 * (n - _), C + 2 / 3 * (i - C), _, C),
                r += 4;
            else if ("T" === a)
                g = _ - s[s.length - 4],
                p = C - s[s.length - 3],
                s.push(_ + g, C + p, n + 2 / 3 * (_ + 1.5 * g - n), i + 2 / 3 * (C + 1.5 * p - i), _ = n, C = i),
                r += 2;
            else if ("H" === a)
                t(_, C, _ = n, C),
                r += 1;
            else if ("V" === a)
                t(_, C, _, C = n + (h ? C - _ : 0)),
                r += 1;
            else if ("L" === a || "Z" === a)
                "Z" === a && (n = l,
                i = f,
                s.closed = !0),
                ("L" === a || .5 < Math.abs(_ - n) || .5 < Math.abs(C - i)) && (t(_, C, n, i),
                "L" === a && (r += 2)),
                _ = n,
                C = i;
            else if ("A" === a) {
                if (c = function(e, t, r, o, n, i, a, h, s) {
                    if (e !== h || t !== s) {
                        r = Math.abs(r),
                        o = Math.abs(o);
                        var l = n % 360 * U
                          , f = Q(l)
                          , g = E(l)
                          , p = (e - h) / 2
                          , c = (t - s) / 2
                          , u = f * p + g * c
                          , d = -g * p + f * c
                          , m = u * u
                          , _ = d * d
                          , C = m / (r * r) + _ / (o * o);
                        1 < C && (r = W(C) * r,
                        o = W(C) * o);
                        var y = r * r
                          , S = o * o
                          , v = (y * S - y * _ - S * m) / (y * _ + S * m);
                        v < 0 && (v = 0);
                        var x = (i === a ? -1 : 1) * W(v)
                          , w = r * d / o * x
                          , b = -o * u / r * x
                          , M = f * w - g * b + (e + h) / 2
                          , T = g * w + f * b + (t + s) / 2
                          , N = (u - w) / r
                          , P = (d - b) / o
                          , z = (-u - w) / r
                          , A = (-d - b) / o
                          , R = N * N + P * P
                          , O = (P < 0 ? -1 : 1) * Math.acos(N / W(R))
                          , L = (N * A - P * z < 0 ? -1 : 1) * Math.acos((N * z + P * A) / W(R * (z * z + A * A)));
                        isNaN(L) && (L = H),
                        !a && 0 < L ? L -= Z : a && L < 0 && (L += Z),
                        O %= Z,
                        L %= Z;
                        for (var G = Math.ceil(Math.abs(L) / (Z / 4)), I = [], F = L / G, Y = 4 / 3 * E(F / 2) / (1 + Q(F / 2)), j = f * r, B = g * r, V = g * -o, X = f * o, D = 0; D < G; D++)
                            u = Q(n = O + D * F),
                            d = E(n),
                            N = Q(n += F),
                            P = E(n),
                            I.push(u - Y * d, d + Y * u, N + Y * P, P - Y * N, N, P);
                        for (D = 0; D < I.length; D += 2)
                            u = I[D],
                            d = I[D + 1],
                            I[D] = u * j + d * V + M,
                            I[D + 1] = u * B + d * X + T;
                        return I[D - 2] = h,
                        I[D - 1] = s,
                        I
                    }
                }(_, C, +d[r + 1], +d[r + 2], +d[r + 3], +d[r + 4], +d[r + 5], (h ? _ : 0) + +d[r + 6], (h ? C : 0) + +d[r + 7]))
                    for (o = 0; o < c.length; o++)
                        s.push(c[o]);
                _ = s[s.length - 2],
                C = s[s.length - 1],
                r += 7
            } else
                A(v);
        return (r = s.length) < 6 ? (m.pop(),
        r = 0) : s[0] === s[r - 2] && s[1] === s[r - 1] && (s.closed = !0),
        m.totalPoints = S + r,
        m
    }
    function x(e, t) {
        for (var r, o, n, i, a, h, s, l, f, g, p, c, u, d = 0, m = e.length, _ = t / ((m - 2) / 6), C = 2; C < m; C += 6)
            for (d += _; .999999 < d; )
                r = e[C - 2],
                o = e[C - 1],
                n = e[C],
                i = e[C + 1],
                a = e[C + 2],
                h = e[C + 3],
                s = e[C + 4],
                l = e[C + 5],
                f = r + (n - r) * (u = 1 / ((Math.floor(d) || 1) + 1)),
                f += ((p = n + (a - n) * u) - f) * u,
                p += (a + (s - a) * u - p) * u,
                g = o + (i - o) * u,
                g += ((c = i + (h - i) * u) - g) * u,
                c += (h + (l - h) * u - c) * u,
                e.splice(C, 4, r + (n - r) * u, o + (i - o) * u, f, g, f + (p - f) * u, g + (c - g) * u, p, c, a + (s - a) * u, h + (l - h) * u),
                C += 6,
                m += 6,
                d--;
        return e
    }
    function O(e, t) {
        for (var r, o, n = "", i = e.length, a = Math.pow(10, t || 2), h = 0; h < e.length; h++) {
            for (i = (o = e[h]).length,
            n += "M" + (o[0] * a | 0) / a + " " + (o[1] * a | 0) / a + " C",
            r = 2; r < i; r++)
                n += (o[r] * a | 0) / a + " ";
            o.closed && (n += "z")
        }
        return n
    }
    function w(e) {
        for (var t = [], r = e.length - 1, o = 0; -1 < --r; )
            t[o++] = e[r],
            t[o++] = e[r + 1],
            r--;
        for (r = 0; r < o; r++)
            e[r] = t[r];
        e.reversed = !e.reversed
    }
    function b(e) {
        for (var t = e.length, r = 0, o = 0, n = 0; n < t; n++)
            r += e[n++],
            o += e[n];
        return [r / (t / 2), o / (t / 2)]
    }
    function M(e) {
        for (var t, r, o = e.length, n = e[0], i = n, a = e[1], h = a, s = 6; s < o; s += 6)
            n < (t = e[s]) ? n = t : t < i && (i = t),
            a < (r = e[s + 1]) ? a = r : r < h && (h = r);
        return e.centerX = (n + i) / 2,
        e.centerY = (a + h) / 2,
        e.size = (n - i) * (a - h)
    }
    function L(e, t) {
        t = t || 3;
        for (var r, o, n, i, a, h, s, l, f, g, p, c, u, d, m, _, C = e.length, y = e[0][0], S = y, v = e[0][1], x = v, w = 1 / t; -1 < --C; )
            for (r = (a = e[C]).length,
            i = 6; i < r; i += 6)
                for (f = a[i],
                g = a[i + 1],
                p = a[i + 2] - f,
                d = a[i + 3] - g,
                c = a[i + 4] - f,
                m = a[i + 5] - g,
                u = a[i + 6] - f,
                _ = a[i + 7] - g,
                h = t; -1 < --h; )
                    y < (o = ((s = w * h) * s * u + 3 * (l = 1 - s) * (s * c + l * p)) * s + f) ? y = o : o < S && (S = o),
                    v < (n = (s * s * _ + 3 * l * (s * m + l * d)) * s + g) ? v = n : n < x && (x = n);
        return e.centerX = (y + S) / 2,
        e.centerY = (v + x) / 2,
        e.left = S,
        e.width = y - S,
        e.top = x,
        e.height = v - x,
        e.size = (y - S) * (v - x)
    }
    function T(e, t) {
        return t.length - e.length
    }
    function N(e, t) {
        var r = e.size || M(e)
          , o = t.size || M(t);
        return Math.abs(o - r) < (r + o) / 20 ? t.centerX - e.centerX || t.centerY - e.centerY : o - r
    }
    function P(e, t) {
        var r, o, n = e.slice(0), i = e.length, a = i - 2;
        for (t |= 0,
        r = 0; r < i; r++)
            o = (r + t) % a,
            e[r++] = n[o],
            e[r] = n[1 + o]
    }
    function z(e, t, r, o, n) {
        var i, a, h, s, l = e.length, f = 0, g = l - 2;
        for (r *= 6,
        a = 0; a < l; a += 6)
            s = e[i = (a + r) % g] - (t[a] - o),
            h = e[1 + i] - (t[a + 1] - n),
            f += W(h * h + s * s);
        return f
    }
    function G(e, t, r, o, n) {
        var i, a, h, s, l, f, g, p = t.length - e.length, c = 0 < p ? t : e, u = 0 < p ? e : t, d = 0, m = "complexity" === o ? T : N, _ = "position" === o ? 0 : "number" == typeof o ? o : .8, C = u.length, y = "object" == typeof r && r.push ? r.slice(0) : [r], S = "reverse" === y[0] || y[0] < 0, v = "log" === r;
        if (u[0]) {
            if (1 < c.length && (e.sort(m),
            t.sort(m),
            c.size || L(c),
            u.size || L(u),
            f = c.centerX - u.centerX,
            g = c.centerY - u.centerY,
            m === N))
                for (C = 0; C < u.length; C++)
                    c.splice(C, 0, function(e, t, r, o, n, i) {
                        for (var a, h, s, l = t.length, f = 0, g = Math.min(e.size || M(e), t[r].size || M(t[r])) * o, p = 1e20, c = e.centerX + n, u = e.centerY + i, d = r; d < l && !((t[d].size || M(t[d])) < g); d++)
                            a = t[d].centerX - c,
                            h = t[d].centerY - u,
                            (s = W(a * a + h * h)) < p && (f = d,
                            p = s);
                        return s = t[f],
                        t.splice(f, 1),
                        s
                    }(u[C], c, C, _, f, g));
            if (p)
                for (p < 0 && (p = -p),
                c[0].length > u[0].length && x(u[0], (c[0].length - u[0].length) / 6 | 0),
                C = u.length; d < p; )
                    c[C].size || M(c[C]),
                    s = (h = function(e, t, r) {
                        for (var o, n, i, a, h, s, l = e.length, f = 1e20, g = 0, p = 0; -1 < --l; )
                            for (s = (o = e[l]).length,
                            h = 0; h < s; h += 6)
                                n = o[h] - t,
                                i = o[h + 1] - r,
                                (a = W(n * n + i * i)) < f && (f = a,
                                g = o[h],
                                p = o[h + 1]);
                        return [g, p]
                    }(u, c[C].centerX, c[C].centerY))[0],
                    l = h[1],
                    u[C++] = [s, l, s, l, s, l, s, l],
                    u.totalPoints += 8,
                    d++;
            for (C = 0; C < e.length; C++)
                i = t[C],
                a = e[C],
                (p = i.length - a.length) < 0 ? x(i, -p / 6 | 0) : 0 < p && x(a, p / 6 | 0),
                S && !1 !== n && !a.reversed && w(a),
                (r = y[C] || 0 === y[C] ? y[C] : "auto") && (a.closed || Math.abs(a[0] - a[a.length - 2]) < .5 && Math.abs(a[1] - a[a.length - 1]) < .5 ? "auto" === r || "log" === r ? (y[C] = r = function(e, t, r) {
                    for (var o, n, i = e.length, a = b(e), h = b(t), s = h[0] - a[0], l = h[1] - a[1], f = z(e, t, 0, s, l), g = 0, p = 6; p < i; p += 6)
                        (n = z(e, t, p / 6, s, l)) < f && (f = n,
                        g = p);
                    if (r)
                        for (o = e.slice(0),
                        w(o),
                        p = 6; p < i; p += 6)
                            (n = z(o, t, p / 6, s, l)) < f && (f = n,
                            g = -p);
                    return g / 6
                }(a, i, !C || !1 === n),
                r < 0 && (S = !0,
                w(a),
                r = -r),
                P(a, 6 * r)) : "reverse" !== r && (C && r < 0 && w(a),
                P(a, 6 * (r < 0 ? -r : r))) : !S && ("auto" === r && Math.abs(i[0] - a[0]) + Math.abs(i[1] - a[1]) + Math.abs(i[i.length - 2] - a[a.length - 2]) + Math.abs(i[i.length - 1] - a[a.length - 1]) > Math.abs(i[0] - a[a.length - 2]) + Math.abs(i[1] - a[a.length - 1]) + Math.abs(i[i.length - 2] - a[0]) + Math.abs(i[i.length - 1] - a[1]) || r % 2) ? (w(a),
                y[C] = -1,
                S = !0) : "auto" === r ? y[C] = 0 : "reverse" === r && (y[C] = -1),
                a.closed !== i.closed && (a.closed = i.closed = !1));
            return v && A("shapeIndex:[" + y.join(",") + "]"),
            e.shapeIndex = y
        }
    }
    function n(e, t) {
        for (var r, o, n, i, a = 0, h = parseFloat(e[0]), s = parseFloat(e[1]), l = h + "," + s + " ", f = e.length, g = .5 * t / (.5 * f - 1), p = 0; p < f - 2; p += 2) {
            if (a += g,
            n = parseFloat(e[p + 2]),
            i = parseFloat(e[p + 3]),
            .999999 < a)
                for (o = 1 / (Math.floor(a) + 1),
                r = 1; .999999 < a; )
                    l += (h + (n - h) * o * r).toFixed(2) + "," + (s + (i - s) * o * r).toFixed(2) + " ",
                    a--,
                    r++;
            l += n + "," + i + " ",
            h = n,
            s = i
        }
        return l
    }
    function r(e) {
        var t = e[0].match(X) || []
          , r = e[1].match(X) || []
          , o = r.length - t.length;
        0 < o ? e[0] = n(t, o) : e[1] = n(r, -o)
    }
    function I(t) {
        return isNaN(t) ? r : function(e) {
            r(e),
            e[1] = function(e, t) {
                if (!t)
                    return e;
                for (var r, o = e.match(X) || [], n = o.length, i = "", a = "reverse" === t ? (r = n - 1,
                -2) : (r = (2 * (parseInt(t, 10) || 0) + 1 + 100 * n) % n,
                2), h = 0; h < n; h += 2)
                    i += o[r - 1] + "," + o[r] + " ",
                    r = (r + a) % n;
                return i
            }(e[1], parseInt(t, 10))
        }
    }
    function a(e, t) {
        var r, o, n, i, a, h, s, l, f, g, p, c, u, d, m, _, C, y, S, v, x, w, b = e.tagName.toLowerCase(), M = .552284749831;
        return "path" !== b && e.getBBox ? (h = function(e, t) {
            var r, o = _gsScope.document.createElementNS("http://www.w3.org/2000/svg", "path"), n = Array.prototype.slice.call(e.attributes), i = n.length;
            for (t = "," + t + ","; -1 < --i; )
                r = n[i].nodeName.toLowerCase(),
                -1 === t.indexOf("," + r + ",") && o.setAttributeNS(null, r, n[i].nodeValue);
            return o
        }(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),
        w = function(e, t) {
            for (var r = t ? t.split(",") : [], o = {}, n = r.length; -1 < --n; )
                o[r[n]] = +e.getAttribute(r[n]) || 0;
            return o
        }(e, ee[b]),
        "rect" === b ? (i = w.rx,
        a = w.ry,
        o = w.x,
        n = w.y,
        g = w.width - 2 * i,
        p = w.height - 2 * a,
        r = i || a ? "M" + (_ = (d = (u = o + i) + g) + i) + "," + (y = n + a) + " V" + (S = y + p) + " C" + [_, v = S + a * M, m = d + i * M, x = S + a, d, x, d - (d - u) / 3, x, u + (d - u) / 3, x, u, x, c = o + i * (1 - M), x, o, v, o, S, o, S - (S - y) / 3, o, y + (S - y) / 3, o, y, o, C = n + a * (1 - M), c, n, u, n, u + (d - u) / 3, n, d - (d - u) / 3, n, d, n, m, n, _, C, _, y].join(",") + "z" : "M" + (o + g) + "," + n + " v" + p + " h" + -g + " v" + -p + " h" + g + "z") : "circle" === b || "ellipse" === b ? (l = "circle" === b ? (i = a = w.r) * M : (i = w.rx,
        (a = w.ry) * M),
        r = "M" + ((o = w.cx) + i) + "," + (n = w.cy) + " C" + [o + i, n + l, o + (s = i * M), n + a, o, n + a, o - s, n + a, o - i, n + l, o - i, n, o - i, n - l, o - s, n - a, o, n - a, o + s, n - a, o + i, n - l, o + i, n].join(",") + "z") : "line" === b ? r = "M" + w.x1 + "," + w.y1 + " L" + w.x2 + "," + w.y2 : "polyline" !== b && "polygon" !== b || (r = "M" + (o = (f = (e.getAttribute("points") + "").match(X) || []).shift()) + "," + (n = f.shift()) + " L" + f.join(","),
        "polygon" === b && (r += "," + o + "," + n + "z")),
        h.setAttribute("d", O(h._gsRawPath = R(r))),
        t && e.parentNode && (e.parentNode.insertBefore(h, e),
        e.parentNode.removeChild(e)),
        h) : e
    }
    function F(e, t, r) {
        var o, n, i = "string" == typeof e;
        return (!i || h.test(e) || (e.match(X) || []).length < 3) && ((o = i ? p.selector(e) : e && e[0] ? e : [e]) && o[0] ? (n = ((o = o[0]).nodeName + "").toUpperCase(),
        t && "PATH" !== n && (o = a(o, !1),
        n = "PATH"),
        e = o.getAttribute("PATH" === n ? "d" : "points") || "",
        o === r && (e = o.getAttributeNS(null, "data-original") || e)) : (A("WARNING: invalid morph to: " + e),
        e = !1)),
        e
    }
    function Y(e, t) {
        for (var r, o, n, i, a, h, s, l, f, g, p, c, u = e.length, d = .2 * (t || 1); -1 < --u; ) {
            for (p = (o = e[u]).isSmooth = o.isSmooth || [0, 0, 0, 0],
            c = o.smoothData = o.smoothData || [0, 0, 0, 0],
            p.length = 4,
            l = o.length - 2,
            s = 6; s < l; s += 6)
                n = o[s] - o[s - 2],
                i = o[s + 1] - o[s - 1],
                a = o[s + 2] - o[s],
                h = o[s + 3] - o[s + 1],
                f = y(i, n),
                g = y(h, a),
                (r = Math.abs(f - g) < d) && (c[s - 2] = f,
                c[s + 2] = g,
                c[s - 1] = W(n * n + i * i),
                c[s + 3] = W(a * a + h * h)),
                p.push(r, r, 0, 0, r, r);
            o[l] === o[0] && o[1 + l] === o[1] && (n = o[0] - o[l - 2],
            i = o[1] - o[l - 1],
            a = o[2] - o[0],
            h = o[3] - o[1],
            f = y(i, n),
            g = y(h, a),
            Math.abs(f - g) < d && (c[l - 2] = f,
            c[2] = g,
            c[l - 1] = W(n * n + i * i),
            c[3] = W(a * a + h * h),
            p[l - 2] = p[l - 1] = !0))
        }
        return e
    }
    function j(e) {
        var t = e.trim().split(" ");
        return {
            x: (0 <= e.indexOf("left") ? 0 : 0 <= e.indexOf("right") ? 100 : isNaN(parseFloat(t[0])) ? 50 : parseFloat(t[0])) / 100,
            y: (0 <= e.indexOf("top") ? 0 : 0 <= e.indexOf("bottom") ? 100 : isNaN(parseFloat(t[1])) ? 50 : parseFloat(t[1])) / 100
        }
    }
    var B, H = Math.PI, U = H / 180, V = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, X = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, h = /(^[#\.][a-z]|[a-y][a-z])/gi, D = /[achlmqstvz]/gi, q = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, y = Math.atan2, Q = Math.cos, E = Math.sin, W = Math.sqrt, Z = 2 * H, c = .3 * H, u = .7 * H, p = _gsScope._gsDefine.globals.TweenLite, k = "MorphSVGPlugin", J = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), K = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47), $ = function(e) {
        for (var t = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), r = [J, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), String.fromCharCode(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), String.fromCharCode(112, 101, 110, 115, 46, 105, 111), String.fromCharCode(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), String.fromCharCode(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 105, 101, 114, 46, 105, 111), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], o = r.length; -1 < --o; )
            if (-1 !== e.indexOf(r[o]))
                return !0;
        return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + k + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)),
        t
    }(window ? window.location.host : ""), ee = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    }, te = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.", re = _gsScope._gsDefine.plugin({
        propName: "morphSVG",
        API: 2,
        global: !0,
        version: "0.9.2",
        overwriteProps: ["morphSVG"],
        init: function(e, t, r, o) {
            var n, i, a, h, s, l, f, g, p, c, u, d, m, _, C, y, S, v, x, w, b, M, T = e.nodeType ? window.getComputedStyle(e) : {}, N = T.fill + "", P = !("none" === N || "0" === (N.match(X) || [])[3] || "evenodd" === T.fillRule), z = (t.origin || "50 50").split(",");
            if ("function" == typeof t && (t = t(o, e)),
            !$)
                return window.location.href = "http://" + J + K + "?plugin=" + k + "&source=codepen",
                !1;
            if (s = "POLYLINE" === (n = (e.nodeName + "").toUpperCase()) || "POLYGON" === n,
            "PATH" !== n && !s && !t.prop)
                return A("WARNING: cannot morph a <" + n + "> element. " + te),
                !1;
            if (i = "PATH" === n ? "d" : "points",
            ("string" == typeof t || t.getBBox || t[0]) && (t = {
                shape: t
            }),
            !t.prop && "function" != typeof e.setAttribute)
                return !1;
            if (h = F(t.shape || t.d || t.points || "", "d" == i, e),
            s && D.test(h))
                return A("WARNING: a <" + n + "> cannot accept path data. " + te),
                !1;
            if (l = t.shapeIndex || 0 === t.shapeIndex ? t.shapeIndex : "auto",
            f = t.map || re.defaultMap,
            this._prop = t.prop,
            this._render = t.render || re.defaultRender,
            this._apply = "updateTarget"in t ? t.updateTarget : re.defaultUpdateTarget,
            this._rnd = Math.pow(10, isNaN(t.precision) ? 2 : +t.precision),
            this._tween = r,
            h) {
                if (this._target = e,
                S = "object" == typeof t.precompile,
                c = this._prop ? e[this._prop] : e.getAttribute(i),
                this._prop || e.getAttributeNS(null, "data-original") || e.setAttributeNS(null, "data-original", c),
                "d" == i || this._prop) {
                    if (c = R(S ? t.precompile[0] : c),
                    u = R(S ? t.precompile[1] : h),
                    !S && !G(c, u, l, f, P))
                        return !1;
                    for ("log" !== t.precompile && !0 !== t.precompile || A('precompile:["' + O(c) + '","' + O(u) + '"]'),
                    (b = "linear" !== (t.type || re.defaultType)) && (c = Y(c, t.smoothTolerance),
                    u = Y(u, t.smoothTolerance),
                    c.size || L(c),
                    u.size || L(u),
                    w = j(z[0]),
                    this._origin = c.origin = {
                        x: c.left + w.x * c.width,
                        y: c.top + w.y * c.height
                    },
                    z[1] && (w = j(z[1])),
                    this._eOrigin = {
                        x: u.left + w.x * u.width,
                        y: u.top + w.y * u.height
                    }),
                    m = (this._rawPath = e._gsRawPath = c).length; -1 < --m; )
                        for (C = c[m],
                        y = u[m],
                        g = C.isSmooth || [],
                        p = y.isSmooth || [],
                        _ = C.length,
                        d = B = 0; d < _; d += 2)
                            y[d] === C[d] && y[d + 1] === C[d + 1] || (b ? g[d] && p[d] ? (v = C.smoothData,
                            x = y.smoothData,
                            M = d + (d === _ - 4 ? 7 - _ : 5),
                            this._controlPT = {
                                _next: this._controlPT,
                                i: d,
                                j: m,
                                l1s: v[d + 1],
                                l1c: x[d + 1] - v[d + 1],
                                l2s: v[M],
                                l2c: x[M] - v[M]
                            },
                            a = this._tweenRotation(C, y, d + 2),
                            this._tweenRotation(C, y, d, a),
                            this._tweenRotation(C, y, M - 1, a),
                            d += 4) : this._tweenRotation(C, y, d) : (a = this._addTween(C, d, C[d], y[d]),
                            a = this._addTween(C, d + 1, C[d + 1], y[d + 1]) || a))
                } else
                    a = this._addTween(e, "setAttribute", e.getAttribute(i) + "", h + "", "morphSVG", !1, i, I(l));
                b && (this._addTween(this._origin, "x", this._origin.x, this._eOrigin.x),
                a = this._addTween(this._origin, "y", this._origin.y, this._eOrigin.y)),
                a && (this._overwriteProps.push("morphSVG"),
                a.end = h,
                a.endProp = i)
            }
            return $
        },
        set: function(e) {
            var t, r, o, n, i, a, h, s, l, f, g, p, c, u = this._rawPath, d = this._controlPT, m = this._anchorPT, _ = this._rnd, C = this._target;
            if (this._super.setRatio.call(this, e),
            1 === e && this._apply)
                for (o = this._firstPT; o; )
                    o.end && (this._prop ? C[this._prop] = o.end : C.setAttribute(o.endProp, o.end)),
                    o = o._next;
            else if (u) {
                for (; m; )
                    a = m.sa + e * m.ca,
                    i = m.sl + e * m.cl,
                    m.t[m.i] = this._origin.x + Q(a) * i,
                    m.t[m.i + 1] = this._origin.y + E(a) * i,
                    m = m._next;
                for (r = e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1; d; )
                    c = (h = d.i) + (h === (n = u[d.j]).length - 4 ? 7 - n.length : 5),
                    a = y(n[c] - n[h + 1], n[c - 1] - n[h]),
                    g = E(a),
                    p = Q(a),
                    l = n[h + 2],
                    f = n[h + 3],
                    i = d.l1s + r * d.l1c,
                    n[h] = l - p * i,
                    n[h + 1] = f - g * i,
                    i = d.l2s + r * d.l2c,
                    n[c - 1] = l + p * i,
                    n[c] = f + g * i,
                    d = d._next;
                if (C._gsRawPath = u,
                this._apply) {
                    for (t = "",
                    s = 0; s < u.length; s++)
                        for (i = (n = u[s]).length,
                        t += "M" + (n[0] * _ | 0) / _ + " " + (n[1] * _ | 0) / _ + " C",
                        h = 2; h < i; h++)
                            t += (n[h] * _ | 0) / _ + " ";
                    this._prop ? C[this._prop] = t : C.setAttribute("d", t)
                }
            }
            this._render && u && this._render.call(this._tween, u, C)
        }
    });
    re.prototype._tweenRotation = function(e, t, r, o) {
        var n, i = this._origin, a = this._eOrigin, h = e[r] - i.x, s = e[r + 1] - i.y, l = W(h * h + s * s), f = y(s, h), h = t[r] - a.x, s = t[r + 1] - a.y, g = y(s, h) - f, p = (n = g) !== n % H ? n + (n < 0 ? Z : -Z) : n;
        return !o && B && Math.abs(p + B.ca) < c && (o = B),
        this._anchorPT = B = {
            _next: this._anchorPT,
            t: e,
            sa: f,
            ca: o && p * o.ca < 0 && Math.abs(p) > u ? g : p,
            sl: l,
            cl: W(h * h + s * s) - l,
            i: r
        }
    }
    ,
    re.pathFilter = function(e, t, r, o, n) {
        var i = R(e[0])
          , a = R(e[1]);
        G(i, a, t || 0 === t ? t : "auto", r, n) && (e[0] = O(i),
        e[1] = O(a),
        "log" !== o && !0 !== o || A('precompile:["' + e[0] + '","' + e[1] + '"]'))
    }
    ,
    re.pointsFilter = r,
    re.getTotalSize = L,
    re.subdivideRawBezier = re.subdivideSegment = x,
    re.rawPathToString = O,
    re.defaultType = "linear",
    re.defaultUpdateTarget = !0,
    re.defaultMap = "size",
    re.stringToRawPath = re.pathDataToRawBezier = function(e) {
        return R(F(e, !0))
    }
    ,
    re.equalizeSegmentQuantity = G,
    re.convertToPath = function(e, t) {
        "string" == typeof e && (e = p.selector(e));
        for (var r = e && 0 !== e.length ? e.length && e[0] && e[0].nodeType ? Array.prototype.slice.call(e, 0) : [e] : [], o = r.length; -1 < --o; )
            r[o] = a(r[o], !1 !== t);
        return r
    }
    ,
    re.pathDataToBezier = function(e, t) {
        var r, o, n, i, a = R(F(e, !0))[0] || [], h = 0, s = (t = t || {}).align || t.relative, l = t.matrix || [1, 0, 0, 1, 0, 0], f = t.offsetX || 0, g = t.offsetY || 0;
        if ("relative" === s || !0 === s ? (f -= a[0] * l[0] + a[1] * l[2],
        g -= a[0] * l[1] + a[1] * l[3],
        h = "+=") : (f += l[4],
        g += l[5],
        (s = s && ("string" == typeof s ? p.selector(s) : s && s[0] ? s : [s])) && s[0] && (f -= (i = s[0].getBBox() || {
            x: 0,
            y: 0
        }).x,
        g -= i.y)),
        r = [],
        n = a.length,
        l && "1,0,0,1,0,0" !== l.join(","))
            for (o = 0; o < n; o += 2)
                r.push({
                    x: h + (a[o] * l[0] + a[o + 1] * l[2] + f),
                    y: h + (a[o] * l[1] + a[o + 1] * l[3] + g)
                });
        else
            for (o = 0; o < n; o += 2)
                r.push({
                    x: h + (a[o] + f),
                    y: h + (a[o + 1] + g)
                });
        return r
    }
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function() {
    "use strict";
    function e() {
        return (_gsScope.GreenSockGlobals || _gsScope).MorphSVGPlugin
    }
    "undefined" != typeof module && module.exports ? (require("../TweenLite.js"),
    module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
}();
