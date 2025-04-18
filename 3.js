/*!
 * VERSION: 0.2.0
 * DATE: 2017-07-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit https://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var e, t = _gsScope.document, p = t.defaultView ? t.defaultView.getComputedStyle : function() {}
    , g = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, _ = -1 !== ((_gsScope.navigator || {}).userAgent || "").indexOf("Edge"), C = "DrawSVGPlugin", S = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), m = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47), w = function(e) {
        for (var t = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), r = [S, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), String.fromCharCode(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], o = r.length; -1 < --o; )
            if (-1 !== e.indexOf(r[o]))
                return !0;
        return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + C + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)),
        t
    }(window ? window.location.host : "");
    function l(e, t, r, o, i, s) {
        return r = (parseFloat(r || 0) - parseFloat(e || 0)) * i,
        o = (parseFloat(o || 0) - parseFloat(t || 0)) * s,
        Math.sqrt(r * r + o * o)
    }
    function c(e) {
        return "string" != typeof e && e.nodeType || (e = _gsScope.TweenLite.selector(e)).length && (e = e[0]),
        e
    }
    function y(e) {
        if (!e)
            return 0;
        var t, r, o, i, s, n, a, h = (e = c(e)).tagName.toLowerCase(), f = 1, d = 1;
        "non-scaling-stroke" === e.getAttribute("vector-effect") && (d = e.getScreenCTM(),
        f = Math.sqrt(d.a * d.a + d.b * d.b),
        d = Math.sqrt(d.d * d.d + d.c * d.c));
        try {
            r = e.getBBox()
        } catch (e) {}
        if (r && (r.width || r.height) || "rect" !== h && "circle" !== h && "ellipse" !== h || (r = {
            width: parseFloat(e.getAttribute("rect" === h ? "width" : "circle" === h ? "r" : "rx")),
            height: parseFloat(e.getAttribute("rect" === h ? "height" : "circle" === h ? "r" : "ry"))
        },
        "rect" !== h && (r.width *= 2,
        r.height *= 2)),
        "path" === h)
            i = e.style.strokeDasharray,
            e.style.strokeDasharray = "none",
            t = e.getTotalLength() || 0,
            f !== d && console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),
            t *= (f + d) / 2,
            e.style.strokeDasharray = i;
        else if ("rect" === h)
            t = 2 * r.width * f + 2 * r.height * d;
        else if ("line" === h)
            t = l(r.x, r.y, r.x + r.width, r.y + r.height, f, d);
        else if ("polyline" === h || "polygon" === h)
            for (o = e.getAttribute("points").match(g) || [],
            "polygon" === h && o.push(o[0], o[1]),
            t = 0,
            s = 2; s < o.length; s += 2)
                t += l(o[s - 2], o[s - 1], o[s], o[s + 1], f, d) || 0;
        else
            "circle" !== h && "ellipse" !== h || (n = r.width / 2 * f,
            a = r.height / 2 * d,
            t = Math.PI * (3 * (n + a) - Math.sqrt((3 * n + a) * (n + 3 * a))));
        return t || 0
    }
    function x(e, t) {
        if (!e)
            return [0, 0];
        e = c(e),
        t = t || y(e) + 1;
        var r = p(e)
          , o = r.strokeDasharray || ""
          , i = parseFloat(r.strokeDashoffset)
          , s = o.indexOf(",");
        return s < 0 && (s = o.indexOf(" ")),
        t < (o = s < 0 ? t : parseFloat(o.substr(0, s)) || 1e-5) && (o = t),
        [Math.max(0, -i), Math.max(0, o - i)]
    }
    (e = _gsScope._gsDefine.plugin({
        propName: "drawSVG",
        API: 2,
        version: "0.2.0",
        global: !0,
        overwriteProps: ["drawSVG"],
        init: function(e, t, r, o) {
            if (!e.getBBox)
                return !1;
            if (!w)
                return window.location.href = "http://" + S + m + "?plugin=" + C + "&source=codepen",
                !1;
            var i, s, n, a, h, f, d, g, l, c, u = y(e) + 1;
            return this._style = e.style,
            this._target = e,
            "function" == typeof t && (t = t(o, e)),
            !0 === t || "true" === t ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0",
            i = x(e, u),
            h = t,
            f = u,
            d = i[0],
            -1 === (c = h.indexOf(" ")) ? (g = void 0 !== d ? d + "" : h,
            l = h) : (g = h.substr(0, c),
            l = h.substr(c + 1)),
            g = -1 !== g.indexOf("%") ? parseFloat(g) / 100 * f : parseFloat(g),
            s = (l = -1 !== l.indexOf("%") ? parseFloat(l) / 100 * f : parseFloat(l)) < g ? [l, g] : [g, l],
            this._length = u + 10,
            0 === i[0] && 0 === s[0] ? (n = Math.max(1e-5, s[1] - u),
            this._dash = u + n,
            this._offset = u - i[1] + n,
            this._offsetPT = this._addTween(this, "_offset", this._offset, u - s[1] + n, "drawSVG")) : (this._dash = i[1] - i[0] || 1e-6,
            this._offset = -i[0],
            this._dashPT = this._addTween(this, "_dash", this._dash, s[1] - s[0] || 1e-5, "drawSVG"),
            this._offsetPT = this._addTween(this, "_offset", this._offset, -s[0], "drawSVG")),
            _ && (a = p(e)).strokeLinecap !== a.strokeLinejoin && (s = parseFloat(a.strokeMiterlimit),
            this._addTween(e.style, "strokeMiterlimit", s, s + 1e-4, "strokeMiterlimit")),
            this._isNonScaling = "non-scaling-stroke" === e.getAttribute("vector-effect"),
            !0
        },
        set: function(e) {
            if (this._firstPT) {
                if (this._isNonScaling) {
                    var t, r = y(this._target) + 11;
                    r !== this._length && (t = r / this._length,
                    this._length = r,
                    this._offsetPT.s *= t,
                    this._offsetPT.c *= t,
                    this._dashPT ? (this._dashPT.s *= t,
                    this._dashPT.c *= t) : this._dash *= t)
                }
                this._super.setRatio.call(this, e),
                this._style.strokeDashoffset = this._offset,
                this._style.strokeDasharray = 1 === e || 0 === e ? this._offset < .001 && this._length - this._dash <= 10 ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px" : this._dash + "px," + this._length + "px"
            }
        }
    })).getLength = y,
    e.getPosition = x
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(e) {
    "use strict";
    var t = function() {
        return (_gsScope.GreenSockGlobals || _gsScope).DrawSVGPlugin
    };
    "undefined" != typeof module && module.exports ? (require("../TweenLite.js"),
    module.exports = t()) : "function" == typeof define && define.amd && define(["TweenLite"], t)
}();
