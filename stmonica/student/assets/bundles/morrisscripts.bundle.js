!(function (a) {
  var b,
    c,
    d = "hasOwnProperty",
    e = /[\.\/]/,
    f = function () {},
    g = function (a, b) {
      return a - b
    },
    h = { n: {} },
    i = function (a, d) {
      a = String(a)
      var e,
        f = c,
        h = Array.prototype.slice.call(arguments, 2),
        j = i.listeners(a),
        k = 0,
        l = [],
        m = {},
        n = [],
        o = b
      ;(b = a), (c = 0)
      for (var p = 0, q = j.length; p < q; p++)
        "zIndex" in j[p] &&
          (l.push(j[p].zIndex), j[p].zIndex < 0 && (m[j[p].zIndex] = j[p]))
      for (l.sort(g); l[k] < 0; )
        if (((e = m[l[k++]]), n.push(e.apply(d, h)), c)) return (c = f), n
      for (p = 0; p < q; p++)
        if ("zIndex" in (e = j[p]))
          if (e.zIndex == l[k]) {
            if ((n.push(e.apply(d, h)), c)) break
            do {
              if ((k++, (e = m[l[k]]), e && n.push(e.apply(d, h)), c)) break
            } while (e)
          } else m[e.zIndex] = e
        else if ((n.push(e.apply(d, h)), c)) break
      return (c = f), (b = o), n.length ? n : null
    }
  ;(i._events = h),
    (i.listeners = function (a) {
      var b,
        c,
        d,
        f,
        g,
        i,
        j,
        k,
        l = a.split(e),
        m = h,
        n = [m],
        o = []
      for (f = 0, g = l.length; f < g; f++) {
        for (k = [], i = 0, j = n.length; i < j; i++)
          for (m = n[i].n, c = [m[l[f]], m["*"]], d = 2; d--; )
            (b = c[d]) && (k.push(b), (o = o.concat(b.f || [])))
        n = k
      }
      return o
    }),
    (i.on = function (a, b) {
      if (((a = String(a)), "function" != typeof b)) return function () {}
      for (var c = a.split(e), d = h, g = 0, i = c.length; g < i; g++)
        (d = d.n),
          (d = (d.hasOwnProperty(c[g]) && d[c[g]]) || (d[c[g]] = { n: {} }))
      for (d.f = d.f || [], g = 0, i = d.f.length; g < i; g++)
        if (d.f[g] == b) return f
      return (
        d.f.push(b),
        function (a) {
          ;+a == +a && (b.zIndex = +a)
        }
      )
    }),
    (i.f = function (a) {
      var b = [].slice.call(arguments, 1)
      return function () {
        i.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
      }
    }),
    (i.stop = function () {
      c = 1
    }),
    (i.nt = function (a) {
      return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }),
    (i.nts = function () {
      return b.split(e)
    }),
    (i.off = i.unbind =
      function (a, b) {
        if (!a) return void (i._events = h = { n: {} })
        var c,
          f,
          g,
          j,
          k,
          l,
          m,
          n = a.split(e),
          o = [h]
        for (j = 0, k = n.length; j < k; j++)
          for (l = 0; l < o.length; l += g.length - 2) {
            if (((g = [l, 1]), (c = o[l].n), "*" != n[j]))
              c[n[j]] && g.push(c[n[j]])
            else for (f in c) c[d](f) && g.push(c[f])
            o.splice.apply(o, g)
          }
        for (j = 0, k = o.length; j < k; j++)
          for (c = o[j]; c.n; ) {
            if (b) {
              if (c.f) {
                for (l = 0, m = c.f.length; l < m; l++)
                  if (c.f[l] == b) {
                    c.f.splice(l, 1)
                    break
                  }
                !c.f.length && delete c.f
              }
              for (f in c.n)
                if (c.n[d](f) && c.n[f].f) {
                  var p = c.n[f].f
                  for (l = 0, m = p.length; l < m; l++)
                    if (p[l] == b) {
                      p.splice(l, 1)
                      break
                    }
                  !p.length && delete c.n[f].f
                }
            } else {
              delete c.f
              for (f in c.n) c.n[d](f) && c.n[f].f && delete c.n[f].f
            }
            c = c.n
          }
      }),
    (i.once = function (a, b) {
      var c = function () {
        return i.unbind(a, c), b.apply(this, arguments)
      }
      return i.on(a, c)
    }),
    (i.version = "0.4.2"),
    (i.toString = function () {
      return "You are running Eve 0.4.2"
    }),
    "undefined" != typeof module && module.exports
      ? (module.exports = i)
      : "undefined" != typeof define
      ? define("eve", [], function () {
          return i
        })
      : (a.eve = i)
})(window || this),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["eve"], function (c) {
          return b(a, c)
        })
      : b(a, a.eve || ("function" == typeof require && require("eve")))
  })(this, function (a, b) {
    function c(a) {
      if (c.is(a, "function")) return u ? a() : b.on("raphael.DOMload", a)
      if (c.is(a, U))
        return c._engine.create[D](c, a.splice(0, 3 + c.is(a[0], T))).add(a)
      var d = Array.prototype.slice.call(arguments, 0)
      if (c.is(d[d.length - 1], "function")) {
        var e = d.pop()
        return u
          ? e.call(c._engine.create[D](c, d))
          : b.on("raphael.DOMload", function () {
              e.call(c._engine.create[D](c, d))
            })
      }
      return c._engine.create[D](c, arguments)
    }
    function d(a) {
      if ("function" == typeof a || Object(a) !== a) return a
      var b = new a.constructor()
      for (var c in a) a[z](c) && (b[c] = d(a[c]))
      return b
    }
    function e(a, b) {
      for (var c = 0, d = a.length; c < d; c++)
        if (a[c] === b) return a.push(a.splice(c, 1)[0])
    }
    function f(a, b, c) {
      function d() {
        var f = Array.prototype.slice.call(arguments, 0),
          g = f.join("␀"),
          h = (d.cache = d.cache || {}),
          i = (d.count = d.count || [])
        return h[z](g)
          ? (e(i, g), c ? c(h[g]) : h[g])
          : (i.length >= 1e3 && delete h[i.shift()],
            i.push(g),
            (h[g] = a[D](b, f)),
            c ? c(h[g]) : h[g])
      }
      return d
    }
    function g() {
      return this.hex
    }
    function h(a, b) {
      for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
        var f = [
          { x: +a[d - 2], y: +a[d - 1] },
          { x: +a[d], y: +a[d + 1] },
          { x: +a[d + 2], y: +a[d + 3] },
          { x: +a[d + 4], y: +a[d + 5] },
        ]
        b
          ? d
            ? e - 4 == d
              ? (f[3] = { x: +a[0], y: +a[1] })
              : e - 2 == d &&
                ((f[2] = { x: +a[0], y: +a[1] }),
                (f[3] = { x: +a[2], y: +a[3] }))
            : (f[0] = { x: +a[e - 2], y: +a[e - 1] })
          : e - 4 == d
          ? (f[3] = f[2])
          : d || (f[0] = { x: +a[d], y: +a[d + 1] }),
          c.push([
            "C",
            (-f[0].x + 6 * f[1].x + f[2].x) / 6,
            (-f[0].y + 6 * f[1].y + f[2].y) / 6,
            (f[1].x + 6 * f[2].x - f[3].x) / 6,
            (f[1].y + 6 * f[2].y - f[3].y) / 6,
            f[2].x,
            f[2].y,
          ])
      }
      return c
    }
    function i(a, b, c, d, e) {
      return (
        a * (a * (-3 * b + 9 * c - 9 * d + 3 * e) + 6 * b - 12 * c + 6 * d) -
        3 * b +
        3 * c
      )
    }
    function j(a, b, c, d, e, f, g, h, j) {
      null == j && (j = 1), (j = j > 1 ? 1 : j < 0 ? 0 : j)
      for (
        var k = j / 2,
          l = [
            -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699,
            -0.9041, 0.9041, -0.9816, 0.9816,
          ],
          m = [
            0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601,
            0.1069, 0.1069, 0.0472, 0.0472,
          ],
          n = 0,
          o = 0;
        o < 12;
        o++
      ) {
        var p = k * l[o] + k,
          q = i(p, a, c, e, g),
          r = i(p, b, d, f, h),
          s = q * q + r * r
        n += m[o] * N.sqrt(s)
      }
      return k * n
    }
    function k(a, b, c, d, e, f, g, h, i) {
      if (!(i < 0 || j(a, b, c, d, e, f, g, h) < i)) {
        var k,
          l = 0.5,
          m = 1 - l
        for (k = j(a, b, c, d, e, f, g, h, m); Q(k - i) > 0.01; )
          (l /= 2),
            (m += (k < i ? 1 : -1) * l),
            (k = j(a, b, c, d, e, f, g, h, m))
        return m
      }
    }
    function l(a, b, c, d, e, f, g, h) {
      if (
        !(
          O(a, c) < P(e, g) ||
          P(a, c) > O(e, g) ||
          O(b, d) < P(f, h) ||
          P(b, d) > O(f, h)
        )
      ) {
        var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
          j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
          k = (a - c) * (f - h) - (b - d) * (e - g)
        if (k) {
          var l = i / k,
            m = j / k,
            n = +l.toFixed(2),
            o = +m.toFixed(2)
          if (
            !(
              n < +P(a, c).toFixed(2) ||
              n > +O(a, c).toFixed(2) ||
              n < +P(e, g).toFixed(2) ||
              n > +O(e, g).toFixed(2) ||
              o < +P(b, d).toFixed(2) ||
              o > +O(b, d).toFixed(2) ||
              o < +P(f, h).toFixed(2) ||
              o > +O(f, h).toFixed(2)
            )
          )
            return { x: l, y: m }
        }
      }
    }
    function m(a, b, d) {
      var e = c.bezierBBox(a),
        f = c.bezierBBox(b)
      if (!c.isBBoxIntersect(e, f)) return d ? 0 : []
      for (
        var g = j.apply(0, a),
          h = j.apply(0, b),
          i = O(~~(g / 5), 1),
          k = O(~~(h / 5), 1),
          m = [],
          n = [],
          o = {},
          p = d ? 0 : [],
          q = 0;
        q < i + 1;
        q++
      ) {
        var r = c.findDotsAtSegment.apply(c, a.concat(q / i))
        m.push({ x: r.x, y: r.y, t: q / i })
      }
      for (q = 0; q < k + 1; q++)
        (r = c.findDotsAtSegment.apply(c, b.concat(q / k))),
          n.push({ x: r.x, y: r.y, t: q / k })
      for (q = 0; q < i; q++)
        for (var s = 0; s < k; s++) {
          var t = m[q],
            u = m[q + 1],
            v = n[s],
            w = n[s + 1],
            x = Q(u.x - t.x) < 0.001 ? "y" : "x",
            y = Q(w.x - v.x) < 0.001 ? "y" : "x",
            z = l(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y)
          if (z) {
            if (o[z.x.toFixed(4)] == z.y.toFixed(4)) continue
            o[z.x.toFixed(4)] = z.y.toFixed(4)
            var A = t.t + Q((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t),
              B = v.t + Q((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t)
            A >= 0 &&
              A <= 1.001 &&
              B >= 0 &&
              B <= 1.001 &&
              (d ? p++ : p.push({ x: z.x, y: z.y, t1: P(A, 1), t2: P(B, 1) }))
          }
        }
      return p
    }
    function n(a, b, d) {
      ;(a = c._path2curve(a)), (b = c._path2curve(b))
      for (
        var e, f, g, h, i, j, k, l, n, o, p = d ? 0 : [], q = 0, r = a.length;
        q < r;
        q++
      ) {
        var s = a[q]
        if ("M" == s[0]) (e = i = s[1]), (f = j = s[2])
        else {
          "C" == s[0]
            ? ((n = [e, f].concat(s.slice(1))), (e = n[6]), (f = n[7]))
            : ((n = [e, f, e, f, i, j, i, j]), (e = i), (f = j))
          for (var t = 0, u = b.length; t < u; t++) {
            var v = b[t]
            if ("M" == v[0]) (g = k = v[1]), (h = l = v[2])
            else {
              "C" == v[0]
                ? ((o = [g, h].concat(v.slice(1))), (g = o[6]), (h = o[7]))
                : ((o = [g, h, g, h, k, l, k, l]), (g = k), (h = l))
              var w = m(n, o, d)
              if (d) p += w
              else {
                for (var x = 0, y = w.length; x < y; x++)
                  (w[x].segment1 = q),
                    (w[x].segment2 = t),
                    (w[x].bez1 = n),
                    (w[x].bez2 = o)
                p = p.concat(w)
              }
            }
          }
        }
      }
      return p
    }
    function o(a, b, c, d, e, f) {
      null != a
        ? ((this.a = +a),
          (this.b = +b),
          (this.c = +c),
          (this.d = +d),
          (this.e = +e),
          (this.f = +f))
        : ((this.a = 1),
          (this.b = 0),
          (this.c = 0),
          (this.d = 1),
          (this.e = 0),
          (this.f = 0))
    }
    function p() {
      return this.x + H + this.y + H + this.width + " × " + this.height
    }
    function q(a, b, c, d, e, f) {
      function g(a) {
        return ((k * a + j) * a + i) * a
      }
      function h(a, b) {
        var c, d, e, f, h, l
        for (e = a, l = 0; l < 8; l++) {
          if (((f = g(e) - a), Q(f) < b)) return e
          if (((h = (3 * k * e + 2 * j) * e + i), Q(h) < 1e-6)) break
          e -= f / h
        }
        if (((c = 0), (d = 1), (e = a) < c)) return c
        if (e > d) return d
        for (; c < d; ) {
          if (((f = g(e)), Q(f - a) < b)) return e
          a > f ? (c = e) : (d = e), (e = (d - c) / 2 + c)
        }
        return e
      }
      var i = 3 * b,
        j = 3 * (d - b) - i,
        k = 1 - i - j,
        l = 3 * c,
        m = 3 * (e - c) - l,
        n = 1 - l - m
      return (function (a, b) {
        var c = h(a, b)
        return ((n * c + m) * c + l) * c
      })(a, 1 / (200 * f))
    }
    function r(a, b) {
      var c = [],
        d = {}
      if (((this.ms = b), (this.times = 1), a)) {
        for (var e in a) a[z](e) && ((d[$(e)] = a[e]), c.push($(e)))
        c.sort(ka)
      }
      ;(this.anim = d), (this.top = c[c.length - 1]), (this.percents = c)
    }
    function s(a, d, e, f, g, h) {
      e = $(e)
      var i,
        j,
        k,
        l,
        m,
        n,
        p = a.ms,
        r = {},
        s = {},
        t = {}
      if (f)
        for (v = 0, x = hb.length; v < x; v++) {
          var u = hb[v]
          if (u.el.id == d.id && u.anim == a) {
            u.percent != e ? (hb.splice(v, 1), (k = 1)) : (j = u),
              d.attr(u.totalOrigin)
            break
          }
        }
      else f = +s
      for (var v = 0, x = a.percents.length; v < x; v++) {
        if (a.percents[v] == e || a.percents[v] > f * a.top) {
          ;(e = a.percents[v]),
            (m = a.percents[v - 1] || 0),
            (p = (p / a.top) * (e - m)),
            (l = a.percents[v + 1]),
            (i = a.anim[e])
          break
        }
        f && d.attr(a.anim[a.percents[v]])
      }
      if (i) {
        if (j) (j.initstatus = f), (j.start = new Date() - j.ms * f)
        else {
          for (var y in i)
            if (i[z](y) && (ca[z](y) || d.paper.customAttributes[z](y)))
              switch (
                ((r[y] = d.attr(y)),
                null == r[y] && (r[y] = ba[y]),
                (s[y] = i[y]),
                ca[y])
              ) {
                case T:
                  t[y] = (s[y] - r[y]) / p
                  break
                case "colour":
                  r[y] = c.getRGB(r[y])
                  var A = c.getRGB(s[y])
                  t[y] = {
                    r: (A.r - r[y].r) / p,
                    g: (A.g - r[y].g) / p,
                    b: (A.b - r[y].b) / p,
                  }
                  break
                case "path":
                  var B = Ja(r[y], s[y]),
                    C = B[1]
                  for (
                    r[y] = B[0], t[y] = [], v = 0, x = r[y].length;
                    v < x;
                    v++
                  ) {
                    t[y][v] = [0]
                    for (var D = 1, F = r[y][v].length; D < F; D++)
                      t[y][v][D] = (C[v][D] - r[y][v][D]) / p
                  }
                  break
                case "transform":
                  var G = d._,
                    H = Oa(G[y], s[y])
                  if (H)
                    for (
                      r[y] = H.from,
                        s[y] = H.to,
                        t[y] = [],
                        t[y].real = !0,
                        v = 0,
                        x = r[y].length;
                      v < x;
                      v++
                    )
                      for (
                        t[y][v] = [r[y][v][0]], D = 1, F = r[y][v].length;
                        D < F;
                        D++
                      )
                        t[y][v][D] = (s[y][v][D] - r[y][v][D]) / p
                  else {
                    var K = d.matrix || new o(),
                      L = {
                        _: { transform: G.transform },
                        getBBox: function () {
                          return d.getBBox(1)
                        },
                      }
                    ;(r[y] = [K.a, K.b, K.c, K.d, K.e, K.f]),
                      Ma(L, s[y]),
                      (s[y] = L._.transform),
                      (t[y] = [
                        (L.matrix.a - K.a) / p,
                        (L.matrix.b - K.b) / p,
                        (L.matrix.c - K.c) / p,
                        (L.matrix.d - K.d) / p,
                        (L.matrix.e - K.e) / p,
                        (L.matrix.f - K.f) / p,
                      ])
                  }
                  break
                case "csv":
                  var M = I(i[y])[J](w),
                    N = I(r[y])[J](w)
                  if ("clip-rect" == y)
                    for (r[y] = N, t[y] = [], v = N.length; v--; )
                      t[y][v] = (M[v] - r[y][v]) / p
                  s[y] = M
                  break
                default:
                  for (
                    M = [][E](i[y]),
                      N = [][E](r[y]),
                      t[y] = [],
                      v = d.paper.customAttributes[y].length;
                    v--;

                  )
                    t[y][v] = ((M[v] || 0) - (N[v] || 0)) / p
              }
          var O = i.easing,
            P = c.easing_formulas[O]
          if (!P)
            if ((P = I(O).match(Y)) && 5 == P.length) {
              var Q = P
              P = function (a) {
                return q(a, +Q[1], +Q[2], +Q[3], +Q[4], p)
              }
            } else P = ma
          if (
            ((n = i.start || a.start || +new Date()),
            (u = {
              anim: a,
              percent: e,
              timestamp: n,
              start: n + (a.del || 0),
              status: 0,
              initstatus: f || 0,
              stop: !1,
              ms: p,
              easing: P,
              from: r,
              diff: t,
              to: s,
              el: d,
              callback: i.callback,
              prev: m,
              next: l,
              repeat: h || a.times,
              origin: d.attr(),
              totalOrigin: g,
            }),
            hb.push(u),
            f &&
              !j &&
              !k &&
              ((u.stop = !0), (u.start = new Date() - p * f), 1 == hb.length))
          )
            return jb()
          k && (u.start = new Date() - u.ms * f), 1 == hb.length && ib(jb)
        }
        b("raphael.anim.start." + d.id, d, a)
      }
    }
    function t(a) {
      for (var b = 0; b < hb.length; b++)
        hb[b].el.paper == a && hb.splice(b--, 1)
    }
    ;(c.version = "2.1.2"), (c.eve = b)
    var u,
      v,
      w = /[, ]+/,
      x = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
      y = /\{(\d+)\}/g,
      z = "hasOwnProperty",
      A = { doc: document, win: a },
      B = {
        was: Object.prototype[z].call(A.win, "Raphael"),
        is: A.win.Raphael,
      },
      C = function () {
        this.ca = this.customAttributes = {}
      },
      D = "apply",
      E = "concat",
      F =
        "ontouchstart" in A.win ||
        (A.win.DocumentTouch && A.doc instanceof DocumentTouch),
      G = "",
      H = " ",
      I = String,
      J = "split",
      K =
        "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[
          J
        ](H),
      L = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend",
      },
      M = I.prototype.toLowerCase,
      N = Math,
      O = N.max,
      P = N.min,
      Q = N.abs,
      R = N.pow,
      S = N.PI,
      T = "number",
      U = "array",
      V = Object.prototype.toString,
      W =
        ((c._ISURL = /^url\(['"]?(.+?)['"]?\)$/i),
        /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
      X = { NaN: 1, Infinity: 1, "-Infinity": 1 },
      Y = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
      Z = N.round,
      $ = parseFloat,
      _ = parseInt,
      aa = I.prototype.toUpperCase,
      ba = (c._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0,
      }),
      ca = (c._availableAnimAttrs = {
        blur: T,
        "clip-rect": "csv",
        cx: T,
        cy: T,
        fill: "colour",
        "fill-opacity": T,
        "font-size": T,
        height: T,
        opacity: T,
        path: "path",
        r: T,
        rx: T,
        ry: T,
        stroke: "colour",
        "stroke-opacity": T,
        "stroke-width": T,
        transform: "transform",
        width: T,
        x: T,
        y: T,
      }),
      da =
        /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
      ea = { hs: 1, rg: 1 },
      fa = /,?([achlmqrstvxz]),?/gi,
      ga =
        /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
      ha =
        /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
      ia =
        /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
      ja =
        ((c._radial_gradient =
          /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/),
        {}),
      ka = function (a, b) {
        return $(a) - $(b)
      },
      la = function () {},
      ma = function (a) {
        return a
      },
      na = (c._rectPath = function (a, b, c, d, e) {
        return e
          ? [
              ["M", a + e, b],
              ["l", c - 2 * e, 0],
              ["a", e, e, 0, 0, 1, e, e],
              ["l", 0, d - 2 * e],
              ["a", e, e, 0, 0, 1, -e, e],
              ["l", 2 * e - c, 0],
              ["a", e, e, 0, 0, 1, -e, -e],
              ["l", 0, 2 * e - d],
              ["a", e, e, 0, 0, 1, e, -e],
              ["z"],
            ]
          : [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]]
      }),
      oa = function (a, b, c, d) {
        return (
          null == d && (d = c),
          [
            ["M", a, b],
            ["m", 0, -d],
            ["a", c, d, 0, 1, 1, 0, 2 * d],
            ["a", c, d, 0, 1, 1, 0, -2 * d],
            ["z"],
          ]
        )
      },
      pa = (c._getPath = {
        path: function (a) {
          return a.attr("path")
        },
        circle: function (a) {
          var b = a.attrs
          return oa(b.cx, b.cy, b.r)
        },
        ellipse: function (a) {
          var b = a.attrs
          return oa(b.cx, b.cy, b.rx, b.ry)
        },
        rect: function (a) {
          var b = a.attrs
          return na(b.x, b.y, b.width, b.height, b.r)
        },
        image: function (a) {
          var b = a.attrs
          return na(b.x, b.y, b.width, b.height)
        },
        text: function (a) {
          var b = a._getBBox()
          return na(b.x, b.y, b.width, b.height)
        },
        set: function (a) {
          var b = a._getBBox()
          return na(b.x, b.y, b.width, b.height)
        },
      }),
      qa = (c.mapPath = function (a, b) {
        if (!b) return a
        var c, d, e, f, g, h, i
        for (a = Ja(a), e = 0, g = a.length; e < g; e++)
          for (i = a[e], f = 1, h = i.length; f < h; f += 2)
            (c = b.x(i[f], i[f + 1])),
              (d = b.y(i[f], i[f + 1])),
              (i[f] = c),
              (i[f + 1] = d)
        return a
      })
    if (
      ((c._g = A),
      (c.type =
        A.win.SVGAngle ||
        A.doc.implementation.hasFeature(
          "http://www.w3.org/TR/SVG11/feature#BasicStructure",
          "1.1"
        )
          ? "SVG"
          : "VML"),
      "VML" == c.type)
    ) {
      var ra,
        sa = A.doc.createElement("div")
      if (
        ((sa.innerHTML = '<v:shape adj="1"/>'),
        (ra = sa.firstChild),
        (ra.style.behavior = "url(#default#VML)"),
        !ra || "object" != typeof ra.adj)
      )
        return (c.type = G)
      sa = null
    }
    ;(c.svg = !(c.vml = "VML" == c.type)),
      (c._Paper = C),
      (c.fn = v = C.prototype = c.prototype),
      (c._id = 0),
      (c._oid = 0),
      (c.is = function (a, b) {
        return (
          (b = M.call(b)),
          "finite" == b
            ? !X[z](+a)
            : "array" == b
            ? a instanceof Array
            : ("null" == b && null === a) ||
              (b == typeof a && null !== a) ||
              ("object" == b && a === Object(a)) ||
              ("array" == b && Array.isArray && Array.isArray(a)) ||
              V.call(a).slice(8, -1).toLowerCase() == b
        )
      }),
      (c.angle = function (a, b, d, e, f, g) {
        if (null == f) {
          var h = a - d,
            i = b - e
          return h || i ? (180 + (180 * N.atan2(-i, -h)) / S + 360) % 360 : 0
        }
        return c.angle(a, b, f, g) - c.angle(d, e, f, g)
      }),
      (c.rad = function (a) {
        return ((a % 360) * S) / 180
      }),
      (c.deg = function (a) {
        return Math.round((((180 * a) / S) % 360) * 1e3) / 1e3
      }),
      (c.snapTo = function (a, b, d) {
        if (((d = c.is(d, "finite") ? d : 10), c.is(a, U))) {
          for (var e = a.length; e--; ) if (Q(a[e] - b) <= d) return a[e]
        } else {
          a = +a
          var f = b % a
          if (f < d) return b - f
          if (f > a - d) return b - f + a
        }
        return b
      })
    c.createUUID = (function (a, b) {
      return function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
          .replace(a, b)
          .toUpperCase()
      }
    })(/[xy]/g, function (a) {
      var b = (16 * N.random()) | 0
      return ("x" == a ? b : (3 & b) | 8).toString(16)
    })
    c.setWindow = function (a) {
      b("raphael.setWindow", c, A.win, a),
        (A.win = a),
        (A.doc = A.win.document),
        c._engine.initWin && c._engine.initWin(A.win)
    }
    var ta = function (a) {
        if (c.vml) {
          var b,
            d = /^\s+|\s+$/g
          try {
            var e = new ActiveXObject("htmlfile")
            e.write("<body>"), e.close(), (b = e.body)
          } catch (a) {
            b = createPopup().document.body
          }
          var g = b.createTextRange()
          ta = f(function (a) {
            try {
              b.style.color = I(a).replace(d, G)
              var c = g.queryCommandValue("ForeColor")
              return (
                (c = ((255 & c) << 16) | (65280 & c) | ((16711680 & c) >>> 16)),
                "#" + ("000000" + c.toString(16)).slice(-6)
              )
            } catch (a) {
              return "none"
            }
          })
        } else {
          var h = A.doc.createElement("i")
          ;(h.title = "Raphaël Colour Picker"),
            (h.style.display = "none"),
            A.doc.body.appendChild(h),
            (ta = f(function (a) {
              return (
                (h.style.color = a),
                A.doc.defaultView
                  .getComputedStyle(h, G)
                  .getPropertyValue("color")
              )
            }))
        }
        return ta(a)
      },
      ua = function () {
        return "hsb(" + [this.h, this.s, this.b] + ")"
      },
      va = function () {
        return "hsl(" + [this.h, this.s, this.l] + ")"
      },
      wa = function () {
        return this.hex
      },
      xa = function (a, b, d) {
        if (
          (null == b &&
            c.is(a, "object") &&
            "r" in a &&
            "g" in a &&
            "b" in a &&
            ((d = a.b), (b = a.g), (a = a.r)),
          null == b && c.is(a, "string"))
        ) {
          var e = c.getRGB(a)
          ;(a = e.r), (b = e.g), (d = e.b)
        }
        return (
          (a > 1 || b > 1 || d > 1) && ((a /= 255), (b /= 255), (d /= 255)),
          [a, b, d]
        )
      },
      ya = function (a, b, d, e) {
        ;(a *= 255), (b *= 255), (d *= 255)
        var f = { r: a, g: b, b: d, hex: c.rgb(a, b, d), toString: wa }
        return c.is(e, "finite") && (f.opacity = e), f
      }
    ;(c.color = function (a) {
      var b
      return (
        c.is(a, "object") && "h" in a && "s" in a && "b" in a
          ? ((b = c.hsb2rgb(a)),
            (a.r = b.r),
            (a.g = b.g),
            (a.b = b.b),
            (a.hex = b.hex))
          : c.is(a, "object") && "h" in a && "s" in a && "l" in a
          ? ((b = c.hsl2rgb(a)),
            (a.r = b.r),
            (a.g = b.g),
            (a.b = b.b),
            (a.hex = b.hex))
          : (c.is(a, "string") && (a = c.getRGB(a)),
            c.is(a, "object") && "r" in a && "g" in a && "b" in a
              ? ((b = c.rgb2hsl(a)),
                (a.h = b.h),
                (a.s = b.s),
                (a.l = b.l),
                (b = c.rgb2hsb(a)),
                (a.v = b.b))
              : ((a = { hex: "none" }),
                (a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1))),
        (a.toString = wa),
        a
      )
    }),
      (c.hsb2rgb = function (a, b, c, d) {
        this.is(a, "object") &&
          "h" in a &&
          "s" in a &&
          "b" in a &&
          ((c = a.b), (b = a.s), (d = a.o), (a = a.h)),
          (a *= 360)
        var e, f, g, h, i
        return (
          (a = (a % 360) / 60),
          (i = c * b),
          (h = i * (1 - Q((a % 2) - 1))),
          (e = f = g = c - i),
          (a = ~~a),
          (e += [i, h, 0, 0, h, i][a]),
          (f += [h, i, i, h, 0, 0][a]),
          (g += [0, 0, h, i, i, h][a]),
          ya(e, f, g, d)
        )
      }),
      (c.hsl2rgb = function (a, b, c, d) {
        this.is(a, "object") &&
          "h" in a &&
          "s" in a &&
          "l" in a &&
          ((c = a.l), (b = a.s), (a = a.h)),
          (a > 1 || b > 1 || c > 1) && ((a /= 360), (b /= 100), (c /= 100)),
          (a *= 360)
        var e, f, g, h, i
        return (
          (a = (a % 360) / 60),
          (i = 2 * b * (c < 0.5 ? c : 1 - c)),
          (h = i * (1 - Q((a % 2) - 1))),
          (e = f = g = c - i / 2),
          (a = ~~a),
          (e += [i, h, 0, 0, h, i][a]),
          (f += [h, i, i, h, 0, 0][a]),
          (g += [0, 0, h, i, i, h][a]),
          ya(e, f, g, d)
        )
      }),
      (c.rgb2hsb = function (a, b, c) {
        ;(c = xa(a, b, c)), (a = c[0]), (b = c[1]), (c = c[2])
        var d, e, f, g
        return (
          (f = O(a, b, c)),
          (g = f - P(a, b, c)),
          (d =
            0 == g
              ? null
              : f == a
              ? (b - c) / g
              : f == b
              ? (c - a) / g + 2
              : (a - b) / g + 4),
          (d = (((d + 360) % 6) * 60) / 360),
          (e = 0 == g ? 0 : g / f),
          { h: d, s: e, b: f, toString: ua }
        )
      }),
      (c.rgb2hsl = function (a, b, c) {
        ;(c = xa(a, b, c)), (a = c[0]), (b = c[1]), (c = c[2])
        var d, e, f, g, h, i
        return (
          (g = O(a, b, c)),
          (h = P(a, b, c)),
          (i = g - h),
          (d =
            0 == i
              ? null
              : g == a
              ? (b - c) / i
              : g == b
              ? (c - a) / i + 2
              : (a - b) / i + 4),
          (d = (((d + 360) % 6) * 60) / 360),
          (f = (g + h) / 2),
          (e = 0 == i ? 0 : f < 0.5 ? i / (2 * f) : i / (2 - 2 * f)),
          { h: d, s: e, l: f, toString: va }
        )
      }),
      (c._path2ndring = function () {
        return this.join(",").replace(fa, "$1")
      })
    c._preload = function (a, b) {
      var c = A.doc.createElement("img")
      ;(c.style.cssText = "position:absolute;left:-9999em;top:-9999em"),
        (c.onload = function () {
          b.call(this), (this.onload = null), A.doc.body.removeChild(this)
        }),
        (c.onerror = function () {
          A.doc.body.removeChild(this)
        }),
        A.doc.body.appendChild(c),
        (c.src = a)
    }
    ;(c.getRGB = f(function (a) {
      if (!a || (a = I(a)).indexOf("-") + 1)
        return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: g }
      if ("none" == a) return { r: -1, g: -1, b: -1, hex: "none", toString: g }
      !(ea[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) &&
        (a = ta(a))
      var b,
        d,
        e,
        f,
        h,
        i,
        j = a.match(W)
      return j
        ? (j[2] &&
            ((e = _(j[2].substring(5), 16)),
            (d = _(j[2].substring(3, 5), 16)),
            (b = _(j[2].substring(1, 3), 16))),
          j[3] &&
            ((e = _((h = j[3].charAt(3)) + h, 16)),
            (d = _((h = j[3].charAt(2)) + h, 16)),
            (b = _((h = j[3].charAt(1)) + h, 16))),
          j[4] &&
            ((i = j[4][J](da)),
            (b = $(i[0])),
            "%" == i[0].slice(-1) && (b *= 2.55),
            (d = $(i[1])),
            "%" == i[1].slice(-1) && (d *= 2.55),
            (e = $(i[2])),
            "%" == i[2].slice(-1) && (e *= 2.55),
            "rgba" == j[1].toLowerCase().slice(0, 4) && (f = $(i[3])),
            i[3] && "%" == i[3].slice(-1) && (f /= 100)),
          j[5]
            ? ((i = j[5][J](da)),
              (b = $(i[0])),
              "%" == i[0].slice(-1) && (b *= 2.55),
              (d = $(i[1])),
              "%" == i[1].slice(-1) && (d *= 2.55),
              (e = $(i[2])),
              "%" == i[2].slice(-1) && (e *= 2.55),
              ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360),
              "hsba" == j[1].toLowerCase().slice(0, 4) && (f = $(i[3])),
              i[3] && "%" == i[3].slice(-1) && (f /= 100),
              c.hsb2rgb(b, d, e, f))
            : j[6]
            ? ((i = j[6][J](da)),
              (b = $(i[0])),
              "%" == i[0].slice(-1) && (b *= 2.55),
              (d = $(i[1])),
              "%" == i[1].slice(-1) && (d *= 2.55),
              (e = $(i[2])),
              "%" == i[2].slice(-1) && (e *= 2.55),
              ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360),
              "hsla" == j[1].toLowerCase().slice(0, 4) && (f = $(i[3])),
              i[3] && "%" == i[3].slice(-1) && (f /= 100),
              c.hsl2rgb(b, d, e, f))
            : ((j = { r: b, g: d, b: e, toString: g }),
              (j.hex =
                "#" +
                (16777216 | e | (d << 8) | (b << 16)).toString(16).slice(1)),
              c.is(f, "finite") && (j.opacity = f),
              j))
        : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: g }
    }, c)),
      (c.hsb = f(function (a, b, d) {
        return c.hsb2rgb(a, b, d).hex
      })),
      (c.hsl = f(function (a, b, d) {
        return c.hsl2rgb(a, b, d).hex
      })),
      (c.rgb = f(function (a, b, c) {
        return "#" + (16777216 | c | (b << 8) | (a << 16)).toString(16).slice(1)
      })),
      (c.getColor = function (a) {
        var b = (this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: a || 0.75,
          }),
          c = this.hsb2rgb(b.h, b.s, b.b)
        return (
          (b.h += 0.075),
          b.h > 1 &&
            ((b.h = 0),
            (b.s -= 0.2),
            b.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: b.b })),
          c.hex
        )
      }),
      (c.getColor.reset = function () {
        delete this.start
      }),
      (c.parsePathString = function (a) {
        if (!a) return null
        var b = za(a)
        if (b.arr) return Ba(b.arr)
        var d = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0,
          },
          e = []
        return (
          c.is(a, U) && c.is(a[0], U) && (e = Ba(a)),
          e.length ||
            I(a).replace(ga, function (a, b, c) {
              var f = [],
                g = b.toLowerCase()
              if (
                (c.replace(ia, function (a, b) {
                  b && f.push(+b)
                }),
                "m" == g &&
                  f.length > 2 &&
                  (e.push([b][E](f.splice(0, 2))),
                  (g = "l"),
                  (b = "m" == b ? "l" : "L")),
                "r" == g)
              )
                e.push([b][E](f))
              else
                for (
                  ;
                  f.length >= d[g] && (e.push([b][E](f.splice(0, d[g]))), d[g]);

                );
            }),
          (e.toString = c._path2ndring),
          (b.arr = Ba(e)),
          e
        )
      }),
      (c.parseTransformString = f(function (a) {
        if (!a) return null
        var b = []
        return (
          c.is(a, U) && c.is(a[0], U) && (b = Ba(a)),
          b.length ||
            I(a).replace(ha, function (a, c, d) {
              var e = []
              M.call(c)
              d.replace(ia, function (a, b) {
                b && e.push(+b)
              }),
                b.push([c][E](e))
            }),
          (b.toString = c._path2ndring),
          b
        )
      }))
    var za = function (a) {
      var b = (za.ps = za.ps || {})
      return (
        b[a] ? (b[a].sleep = 100) : (b[a] = { sleep: 100 }),
        setTimeout(function () {
          for (var c in b) b[z](c) && c != a && !--b[c].sleep && delete b[c]
        }),
        b[a]
      )
    }
    ;(c.findDotsAtSegment = function (a, b, c, d, e, f, g, h, i) {
      var j = 1 - i,
        k = R(j, 3),
        l = R(j, 2),
        m = i * i,
        n = m * i,
        o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
        p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
        q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
        r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
        s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
        t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
        u = j * a + i * c,
        v = j * b + i * d,
        w = j * e + i * g,
        x = j * f + i * h,
        y = 90 - (180 * N.atan2(q - s, r - t)) / S
      return (
        (q > s || r < t) && (y += 180),
        {
          x: o,
          y: p,
          m: { x: q, y: r },
          n: { x: s, y: t },
          start: { x: u, y: v },
          end: { x: w, y: x },
          alpha: y,
        }
      )
    }),
      (c.bezierBBox = function (a, b, d, e, f, g, h, i) {
        c.is(a, "array") || (a = [a, b, d, e, f, g, h, i])
        var j = Ia.apply(null, a)
        return {
          x: j.min.x,
          y: j.min.y,
          x2: j.max.x,
          y2: j.max.y,
          width: j.max.x - j.min.x,
          height: j.max.y - j.min.y,
        }
      }),
      (c.isPointInsideBBox = function (a, b, c) {
        return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
      }),
      (c.isBBoxIntersect = function (a, b) {
        var d = c.isPointInsideBBox
        return (
          d(b, a.x, a.y) ||
          d(b, a.x2, a.y) ||
          d(b, a.x, a.y2) ||
          d(b, a.x2, a.y2) ||
          d(a, b.x, b.y) ||
          d(a, b.x2, b.y) ||
          d(a, b.x, b.y2) ||
          d(a, b.x2, b.y2) ||
          (((a.x < b.x2 && a.x > b.x) || (b.x < a.x2 && b.x > a.x)) &&
            ((a.y < b.y2 && a.y > b.y) || (b.y < a.y2 && b.y > a.y)))
        )
      }),
      (c.pathIntersection = function (a, b) {
        return n(a, b)
      }),
      (c.pathIntersectionNumber = function (a, b) {
        return n(a, b, 1)
      }),
      (c.isPointInsidePath = function (a, b, d) {
        var e = c.pathBBox(a)
        return (
          c.isPointInsideBBox(e, b, d) &&
          n(
            a,
            [
              ["M", b, d],
              ["H", e.x2 + 10],
            ],
            1
          ) %
            2 ==
            1
        )
      }),
      (c._removedFactory = function (a) {
        return function () {
          b(
            "raphael.log",
            null,
            "Raphaël: you are calling to method “" + a + "” of removed object",
            a
          )
        }
      })
    var Aa = (c.pathBBox = function (a) {
        var b = za(a)
        if (b.bbox) return d(b.bbox)
        if (!a) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 }
        a = Ja(a)
        for (
          var c, e = 0, f = 0, g = [], h = [], i = 0, j = a.length;
          i < j;
          i++
        )
          if (((c = a[i]), "M" == c[0]))
            (e = c[1]), (f = c[2]), g.push(e), h.push(f)
          else {
            var k = Ia(e, f, c[1], c[2], c[3], c[4], c[5], c[6])
            ;(g = g[E](k.min.x, k.max.x)),
              (h = h[E](k.min.y, k.max.y)),
              (e = c[5]),
              (f = c[6])
          }
        var l = P[D](0, g),
          m = P[D](0, h),
          n = O[D](0, g),
          o = O[D](0, h),
          p = n - l,
          q = o - m,
          r = {
            x: l,
            y: m,
            x2: n,
            y2: o,
            width: p,
            height: q,
            cx: l + p / 2,
            cy: m + q / 2,
          }
        return (b.bbox = d(r)), r
      }),
      Ba = function (a) {
        var b = d(a)
        return (b.toString = c._path2ndring), b
      },
      Ca = (c._pathToRelative = function (a) {
        var b = za(a)
        if (b.rel) return Ba(b.rel)
        ;(c.is(a, U) && c.is(a && a[0], U)) || (a = c.parsePathString(a))
        var d = [],
          e = 0,
          f = 0,
          g = 0,
          h = 0,
          i = 0
        "M" == a[0][0] &&
          ((e = a[0][1]),
          (f = a[0][2]),
          (g = e),
          (h = f),
          i++,
          d.push(["M", e, f]))
        for (var j = i, k = a.length; j < k; j++) {
          var l = (d[j] = []),
            m = a[j]
          if (m[0] != M.call(m[0]))
            switch (((l[0] = M.call(m[0])), l[0])) {
              case "a":
                ;(l[1] = m[1]),
                  (l[2] = m[2]),
                  (l[3] = m[3]),
                  (l[4] = m[4]),
                  (l[5] = m[5]),
                  (l[6] = +(m[6] - e).toFixed(3)),
                  (l[7] = +(m[7] - f).toFixed(3))
                break
              case "v":
                l[1] = +(m[1] - f).toFixed(3)
                break
              case "m":
                ;(g = m[1]), (h = m[2])
              default:
                for (var n = 1, o = m.length; n < o; n++)
                  l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3)
            }
          else {
            ;(l = d[j] = []), "m" == m[0] && ((g = m[1] + e), (h = m[2] + f))
            for (var p = 0, q = m.length; p < q; p++) d[j][p] = m[p]
          }
          var r = d[j].length
          switch (d[j][0]) {
            case "z":
              ;(e = g), (f = h)
              break
            case "h":
              e += +d[j][r - 1]
              break
            case "v":
              f += +d[j][r - 1]
              break
            default:
              ;(e += +d[j][r - 2]), (f += +d[j][r - 1])
          }
        }
        return (d.toString = c._path2ndring), (b.rel = Ba(d)), d
      }),
      Da = (c._pathToAbsolute = function (a) {
        var b = za(a)
        if (b.abs) return Ba(b.abs)
        if (
          ((c.is(a, U) && c.is(a && a[0], U)) || (a = c.parsePathString(a)),
          !a || !a.length)
        )
          return [["M", 0, 0]]
        var d = [],
          e = 0,
          f = 0,
          g = 0,
          i = 0,
          j = 0
        "M" == a[0][0] &&
          ((e = +a[0][1]),
          (f = +a[0][2]),
          (g = e),
          (i = f),
          j++,
          (d[0] = ["M", e, f]))
        for (
          var k,
            l,
            m =
              3 == a.length &&
              "M" == a[0][0] &&
              "R" == a[1][0].toUpperCase() &&
              "Z" == a[2][0].toUpperCase(),
            n = j,
            o = a.length;
          n < o;
          n++
        ) {
          if ((d.push((k = [])), (l = a[n]), l[0] != aa.call(l[0])))
            switch (((k[0] = aa.call(l[0])), k[0])) {
              case "A":
                ;(k[1] = l[1]),
                  (k[2] = l[2]),
                  (k[3] = l[3]),
                  (k[4] = l[4]),
                  (k[5] = l[5]),
                  (k[6] = +(l[6] + e)),
                  (k[7] = +(l[7] + f))
                break
              case "V":
                k[1] = +l[1] + f
                break
              case "H":
                k[1] = +l[1] + e
                break
              case "R":
                for (
                  var p = [e, f][E](l.slice(1)), q = 2, r = p.length;
                  q < r;
                  q++
                )
                  (p[q] = +p[q] + e), (p[++q] = +p[q] + f)
                d.pop(), (d = d[E](h(p, m)))
                break
              case "M":
                ;(g = +l[1] + e), (i = +l[2] + f)
              default:
                for (q = 1, r = l.length; q < r; q++)
                  k[q] = +l[q] + (q % 2 ? e : f)
            }
          else if ("R" == l[0])
            (p = [e, f][E](l.slice(1))),
              d.pop(),
              (d = d[E](h(p, m))),
              (k = ["R"][E](l.slice(-2)))
          else for (var s = 0, t = l.length; s < t; s++) k[s] = l[s]
          switch (k[0]) {
            case "Z":
              ;(e = g), (f = i)
              break
            case "H":
              e = k[1]
              break
            case "V":
              f = k[1]
              break
            case "M":
              ;(g = k[k.length - 2]), (i = k[k.length - 1])
            default:
              ;(e = k[k.length - 2]), (f = k[k.length - 1])
          }
        }
        return (d.toString = c._path2ndring), (b.abs = Ba(d)), d
      }),
      Ea = function (a, b, c, d) {
        return [a, b, c, d, c, d]
      },
      Fa = function (a, b, c, d, e, f) {
        return [
          (1 / 3) * a + (2 / 3) * c,
          (1 / 3) * b + (2 / 3) * d,
          (1 / 3) * e + (2 / 3) * c,
          (1 / 3) * f + (2 / 3) * d,
          e,
          f,
        ]
      },
      Ga = function (a, b, c, d, e, g, h, i, j, k) {
        var l,
          m = (120 * S) / 180,
          n = (S / 180) * (+e || 0),
          o = [],
          p = f(function (a, b, c) {
            return {
              x: a * N.cos(c) - b * N.sin(c),
              y: a * N.sin(c) + b * N.cos(c),
            }
          })
        if (k) (y = k[0]), (z = k[1]), (w = k[2]), (x = k[3])
        else {
          ;(l = p(a, b, -n)),
            (a = l.x),
            (b = l.y),
            (l = p(i, j, -n)),
            (i = l.x),
            (j = l.y)
          var q = (N.cos((S / 180) * e), N.sin((S / 180) * e), (a - i) / 2),
            r = (b - j) / 2,
            s = (q * q) / (c * c) + (r * r) / (d * d)
          s > 1 && ((s = N.sqrt(s)), (c *= s), (d *= s))
          var t = c * c,
            u = d * d,
            v =
              (g == h ? -1 : 1) *
              N.sqrt(
                Q((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))
              ),
            w = (v * c * r) / d + (a + i) / 2,
            x = (v * -d * q) / c + (b + j) / 2,
            y = N.asin(((b - x) / d).toFixed(9)),
            z = N.asin(((j - x) / d).toFixed(9))
          ;(y = a < w ? S - y : y),
            (z = i < w ? S - z : z),
            y < 0 && (y = 2 * S + y),
            z < 0 && (z = 2 * S + z),
            h && y > z && (y -= 2 * S),
            !h && z > y && (z -= 2 * S)
        }
        var A = z - y
        if (Q(A) > m) {
          var B = z,
            C = i,
            D = j
          ;(z = y + m * (h && z > y ? 1 : -1)),
            (i = w + c * N.cos(z)),
            (j = x + d * N.sin(z)),
            (o = Ga(i, j, c, d, e, 0, h, C, D, [z, B, w, x]))
        }
        A = z - y
        var F = N.cos(y),
          G = N.sin(y),
          H = N.cos(z),
          I = N.sin(z),
          K = N.tan(A / 4),
          L = (4 / 3) * c * K,
          M = (4 / 3) * d * K,
          O = [a, b],
          P = [a + L * G, b - M * F],
          R = [i + L * I, j - M * H],
          T = [i, j]
        if (((P[0] = 2 * O[0] - P[0]), (P[1] = 2 * O[1] - P[1]), k))
          return [P, R, T][E](o)
        o = [P, R, T][E](o).join()[J](",")
        for (var U = [], V = 0, W = o.length; V < W; V++)
          U[V] = V % 2 ? p(o[V - 1], o[V], n).y : p(o[V], o[V + 1], n).x
        return U
      },
      Ha = function (a, b, c, d, e, f, g, h, i) {
        var j = 1 - i
        return {
          x:
            R(j, 3) * a + 3 * R(j, 2) * i * c + 3 * j * i * i * e + R(i, 3) * g,
          y:
            R(j, 3) * b + 3 * R(j, 2) * i * d + 3 * j * i * i * f + R(i, 3) * h,
        }
      },
      Ia = f(function (a, b, c, d, e, f, g, h) {
        var i,
          j = e - 2 * c + a - (g - 2 * e + c),
          k = 2 * (c - a) - 2 * (e - c),
          l = a - c,
          m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j,
          n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j,
          o = [b, h],
          p = [a, g]
        return (
          Q(m) > "1e12" && (m = 0.5),
          Q(n) > "1e12" && (n = 0.5),
          m > 0 &&
            m < 1 &&
            ((i = Ha(a, b, c, d, e, f, g, h, m)), p.push(i.x), o.push(i.y)),
          n > 0 &&
            n < 1 &&
            ((i = Ha(a, b, c, d, e, f, g, h, n)), p.push(i.x), o.push(i.y)),
          (j = f - 2 * d + b - (h - 2 * f + d)),
          (k = 2 * (d - b) - 2 * (f - d)),
          (l = b - d),
          (m = (-k + N.sqrt(k * k - 4 * j * l)) / 2 / j),
          (n = (-k - N.sqrt(k * k - 4 * j * l)) / 2 / j),
          Q(m) > "1e12" && (m = 0.5),
          Q(n) > "1e12" && (n = 0.5),
          m > 0 &&
            m < 1 &&
            ((i = Ha(a, b, c, d, e, f, g, h, m)), p.push(i.x), o.push(i.y)),
          n > 0 &&
            n < 1 &&
            ((i = Ha(a, b, c, d, e, f, g, h, n)), p.push(i.x), o.push(i.y)),
          {
            min: { x: P[D](0, p), y: P[D](0, o) },
            max: { x: O[D](0, p), y: O[D](0, o) },
          }
        )
      }),
      Ja = (c._path2curve = f(
        function (a, b) {
          var c = !b && za(a)
          if (!b && c.curve) return Ba(c.curve)
          for (
            var d = Da(a),
              e = b && Da(b),
              f = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
              g = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
              h = function (a, b, c) {
                var d,
                  e,
                  f = { T: 1, Q: 1 }
                if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y]
                switch ((!(a[0] in f) && (b.qx = b.qy = null), a[0])) {
                  case "M":
                    ;(b.X = a[1]), (b.Y = a[2])
                    break
                  case "A":
                    a = ["C"][E](Ga[D](0, [b.x, b.y][E](a.slice(1))))
                    break
                  case "S":
                    "C" == c || "S" == c
                      ? ((d = 2 * b.x - b.bx), (e = 2 * b.y - b.by))
                      : ((d = b.x), (e = b.y)),
                      (a = ["C", d, e][E](a.slice(1)))
                    break
                  case "T":
                    "Q" == c || "T" == c
                      ? ((b.qx = 2 * b.x - b.qx), (b.qy = 2 * b.y - b.qy))
                      : ((b.qx = b.x), (b.qy = b.y)),
                      (a = ["C"][E](Fa(b.x, b.y, b.qx, b.qy, a[1], a[2])))
                    break
                  case "Q":
                    ;(b.qx = a[1]),
                      (b.qy = a[2]),
                      (a = ["C"][E](Fa(b.x, b.y, a[1], a[2], a[3], a[4])))
                    break
                  case "L":
                    a = ["C"][E](Ea(b.x, b.y, a[1], a[2]))
                    break
                  case "H":
                    a = ["C"][E](Ea(b.x, b.y, a[1], b.y))
                    break
                  case "V":
                    a = ["C"][E](Ea(b.x, b.y, b.x, a[1]))
                    break
                  case "Z":
                    a = ["C"][E](Ea(b.x, b.y, b.X, b.Y))
                }
                return a
              },
              i = function (a, b) {
                if (a[b].length > 7) {
                  a[b].shift()
                  for (var c = a[b]; c.length; )
                    (k[b] = "A"),
                      e && (l[b] = "A"),
                      a.splice(b++, 0, ["C"][E](c.splice(0, 6)))
                  a.splice(b, 1), (p = O(d.length, (e && e.length) || 0))
                }
              },
              j = function (a, b, c, f, g) {
                a &&
                  b &&
                  "M" == a[g][0] &&
                  "M" != b[g][0] &&
                  (b.splice(g, 0, ["M", f.x, f.y]),
                  (c.bx = 0),
                  (c.by = 0),
                  (c.x = a[g][1]),
                  (c.y = a[g][2]),
                  (p = O(d.length, (e && e.length) || 0)))
              },
              k = [],
              l = [],
              m = "",
              n = "",
              o = 0,
              p = O(d.length, (e && e.length) || 0);
            o < p;
            o++
          ) {
            d[o] && (m = d[o][0]),
              "C" != m && ((k[o] = m), o && (n = k[o - 1])),
              (d[o] = h(d[o], f, n)),
              "A" != k[o] && "C" == m && (k[o] = "C"),
              i(d, o),
              e &&
                (e[o] && (m = e[o][0]),
                "C" != m && ((l[o] = m), o && (n = l[o - 1])),
                (e[o] = h(e[o], g, n)),
                "A" != l[o] && "C" == m && (l[o] = "C"),
                i(e, o)),
              j(d, e, f, g, o),
              j(e, d, g, f, o)
            var q = d[o],
              r = e && e[o],
              s = q.length,
              t = e && r.length
            ;(f.x = q[s - 2]),
              (f.y = q[s - 1]),
              (f.bx = $(q[s - 4]) || f.x),
              (f.by = $(q[s - 3]) || f.y),
              (g.bx = e && ($(r[t - 4]) || g.x)),
              (g.by = e && ($(r[t - 3]) || g.y)),
              (g.x = e && r[t - 2]),
              (g.y = e && r[t - 1])
          }
          return e || (c.curve = Ba(d)), e ? [d, e] : d
        },
        null,
        Ba
      )),
      Ka =
        ((c._parseDots = f(function (a) {
          for (var b = [], d = 0, e = a.length; d < e; d++) {
            var f = {},
              g = a[d].match(/^([^:]*):?([\d\.]*)/)
            if (((f.color = c.getRGB(g[1])), f.color.error)) return null
            ;(f.color = f.color.hex), g[2] && (f.offset = g[2] + "%"), b.push(f)
          }
          for (d = 1, e = b.length - 1; d < e; d++)
            if (!b[d].offset) {
              for (
                var h = $(b[d - 1].offset || 0), i = 0, j = d + 1;
                j < e;
                j++
              )
                if (b[j].offset) {
                  i = b[j].offset
                  break
                }
              i || ((i = 100), (j = e)), (i = $(i))
              for (var k = (i - h) / (j - d + 1); d < j; d++)
                (h += k), (b[d].offset = h + "%")
            }
          return b
        })),
        (c._tear = function (a, b) {
          a == b.top && (b.top = a.prev),
            a == b.bottom && (b.bottom = a.next),
            a.next && (a.next.prev = a.prev),
            a.prev && (a.prev.next = a.next)
        })),
      La =
        ((c._tofront = function (a, b) {
          b.top !== a &&
            (Ka(a, b),
            (a.next = null),
            (a.prev = b.top),
            (b.top.next = a),
            (b.top = a))
        }),
        (c._toback = function (a, b) {
          b.bottom !== a &&
            (Ka(a, b),
            (a.next = b.bottom),
            (a.prev = null),
            (b.bottom.prev = a),
            (b.bottom = a))
        }),
        (c._insertafter = function (a, b, c) {
          Ka(a, c),
            b == c.top && (c.top = a),
            b.next && (b.next.prev = a),
            (a.next = b.next),
            (a.prev = b),
            (b.next = a)
        }),
        (c._insertbefore = function (a, b, c) {
          Ka(a, c),
            b == c.bottom && (c.bottom = a),
            b.prev && (b.prev.next = a),
            (a.prev = b.prev),
            (b.prev = a),
            (a.next = b)
        }),
        (c.toMatrix = function (a, b) {
          var c = Aa(a),
            d = {
              _: { transform: G },
              getBBox: function () {
                return c
              },
            }
          return Ma(d, b), d.matrix
        })),
      Ma =
        ((c.transformPath = function (a, b) {
          return qa(a, La(a, b))
        }),
        (c._extractTransform = function (a, b) {
          if (null == b) return a._.transform
          b = I(b).replace(/\.{3}|\u2026/g, a._.transform || G)
          var d = c.parseTransformString(b),
            e = 0,
            f = 0,
            g = 0,
            h = 1,
            i = 1,
            j = a._,
            k = new o()
          if (((j.transform = d || []), d))
            for (var l = 0, m = d.length; l < m; l++) {
              var n,
                p,
                q,
                r,
                s,
                t = d[l],
                u = t.length,
                v = I(t[0]).toLowerCase(),
                w = t[0] != v,
                x = w ? k.invert() : 0
              "t" == v && 3 == u
                ? w
                  ? ((n = x.x(0, 0)),
                    (p = x.y(0, 0)),
                    (q = x.x(t[1], t[2])),
                    (r = x.y(t[1], t[2])),
                    k.translate(q - n, r - p))
                  : k.translate(t[1], t[2])
                : "r" == v
                ? 2 == u
                  ? ((s = s || a.getBBox(1)),
                    k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2),
                    (e += t[1]))
                  : 4 == u &&
                    (w
                      ? ((q = x.x(t[2], t[3])),
                        (r = x.y(t[2], t[3])),
                        k.rotate(t[1], q, r))
                      : k.rotate(t[1], t[2], t[3]),
                    (e += t[1]))
                : "s" == v
                ? 2 == u || 3 == u
                  ? ((s = s || a.getBBox(1)),
                    k.scale(
                      t[1],
                      t[u - 1],
                      s.x + s.width / 2,
                      s.y + s.height / 2
                    ),
                    (h *= t[1]),
                    (i *= t[u - 1]))
                  : 5 == u &&
                    (w
                      ? ((q = x.x(t[3], t[4])),
                        (r = x.y(t[3], t[4])),
                        k.scale(t[1], t[2], q, r))
                      : k.scale(t[1], t[2], t[3], t[4]),
                    (h *= t[1]),
                    (i *= t[2]))
                : "m" == v &&
                  7 == u &&
                  k.add(t[1], t[2], t[3], t[4], t[5], t[6]),
                (j.dirtyT = 1),
                (a.matrix = k)
            }
          ;(a.matrix = k),
            (j.sx = h),
            (j.sy = i),
            (j.deg = e),
            (j.dx = f = k.e),
            (j.dy = g = k.f),
            1 == h && 1 == i && !e && j.bbox
              ? ((j.bbox.x += +f), (j.bbox.y += +g))
              : (j.dirtyT = 1)
        })),
      Na = function (a) {
        var b = a[0]
        switch (b.toLowerCase()) {
          case "t":
            return [b, 0, 0]
          case "m":
            return [b, 1, 0, 0, 1, 0, 0]
          case "r":
            return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0]
          case "s":
            return 5 == a.length
              ? [b, 1, 1, a[3], a[4]]
              : 3 == a.length
              ? [b, 1, 1]
              : [b, 1]
        }
      },
      Oa = (c._equaliseTransform = function (a, b) {
        ;(b = I(b).replace(/\.{3}|\u2026/g, a)),
          (a = c.parseTransformString(a) || []),
          (b = c.parseTransformString(b) || [])
        for (
          var d, e, f, g, h = O(a.length, b.length), i = [], j = [], k = 0;
          k < h;
          k++
        ) {
          if (
            ((f = a[k] || Na(b[k])),
            (g = b[k] || Na(f)),
            f[0] != g[0] ||
              ("r" == f[0].toLowerCase() && (f[2] != g[2] || f[3] != g[3])) ||
              ("s" == f[0].toLowerCase() && (f[3] != g[3] || f[4] != g[4])))
          )
            return
          for (
            i[k] = [], j[k] = [], d = 0, e = O(f.length, g.length);
            d < e;
            d++
          )
            d in f && (i[k][d] = f[d]), d in g && (j[k][d] = g[d])
        }
        return { from: i, to: j }
      })
    ;(c._getContainer = function (a, b, d, e) {
      var f
      if (
        null !=
        (f = null != e || c.is(a, "object") ? a : A.doc.getElementById(a))
      )
        return f.tagName
          ? null == b
            ? {
                container: f,
                width: f.style.pixelWidth || f.offsetWidth,
                height: f.style.pixelHeight || f.offsetHeight,
              }
            : { container: f, width: b, height: d }
          : { container: 1, x: a, y: b, width: d, height: e }
    }),
      (c.pathToRelative = Ca),
      (c._engine = {}),
      (c.path2curve = Ja),
      (c.matrix = function (a, b, c, d, e, f) {
        return new o(a, b, c, d, e, f)
      }),
      (function (a) {
        function b(a) {
          return a[0] * a[0] + a[1] * a[1]
        }
        function d(a) {
          var c = N.sqrt(b(a))
          a[0] && (a[0] /= c), a[1] && (a[1] /= c)
        }
        ;(a.add = function (a, b, c, d, e, f) {
          var g,
            h,
            i,
            j,
            k = [[], [], []],
            l = [
              [this.a, this.c, this.e],
              [this.b, this.d, this.f],
              [0, 0, 1],
            ],
            m = [
              [a, c, e],
              [b, d, f],
              [0, 0, 1],
            ]
          for (
            a &&
              a instanceof o &&
              (m = [
                [a.a, a.c, a.e],
                [a.b, a.d, a.f],
                [0, 0, 1],
              ]),
              g = 0;
            g < 3;
            g++
          )
            for (h = 0; h < 3; h++) {
              for (j = 0, i = 0; i < 3; i++) j += l[g][i] * m[i][h]
              k[g][h] = j
            }
          ;(this.a = k[0][0]),
            (this.b = k[1][0]),
            (this.c = k[0][1]),
            (this.d = k[1][1]),
            (this.e = k[0][2]),
            (this.f = k[1][2])
        }),
          (a.invert = function () {
            var a = this,
              b = a.a * a.d - a.b * a.c
            return new o(
              a.d / b,
              -a.b / b,
              -a.c / b,
              a.a / b,
              (a.c * a.f - a.d * a.e) / b,
              (a.b * a.e - a.a * a.f) / b
            )
          }),
          (a.clone = function () {
            return new o(this.a, this.b, this.c, this.d, this.e, this.f)
          }),
          (a.translate = function (a, b) {
            this.add(1, 0, 0, 1, a, b)
          }),
          (a.scale = function (a, b, c, d) {
            null == b && (b = a),
              (c || d) && this.add(1, 0, 0, 1, c, d),
              this.add(a, 0, 0, b, 0, 0),
              (c || d) && this.add(1, 0, 0, 1, -c, -d)
          }),
          (a.rotate = function (a, b, d) {
            ;(a = c.rad(a)), (b = b || 0), (d = d || 0)
            var e = +N.cos(a).toFixed(9),
              f = +N.sin(a).toFixed(9)
            this.add(e, f, -f, e, b, d), this.add(1, 0, 0, 1, -b, -d)
          }),
          (a.x = function (a, b) {
            return a * this.a + b * this.c + this.e
          }),
          (a.y = function (a, b) {
            return a * this.b + b * this.d + this.f
          }),
          (a.get = function (a) {
            return +this[I.fromCharCode(97 + a)].toFixed(4)
          }),
          (a.toString = function () {
            return c.svg
              ? "matrix(" +
                  [
                    this.get(0),
                    this.get(1),
                    this.get(2),
                    this.get(3),
                    this.get(4),
                    this.get(5),
                  ].join() +
                  ")"
              : [
                  this.get(0),
                  this.get(2),
                  this.get(1),
                  this.get(3),
                  0,
                  0,
                ].join()
          }),
          (a.toFilter = function () {
            return (
              "progid:DXImageTransform.Microsoft.Matrix(M11=" +
              this.get(0) +
              ", M12=" +
              this.get(2) +
              ", M21=" +
              this.get(1) +
              ", M22=" +
              this.get(3) +
              ", Dx=" +
              this.get(4) +
              ", Dy=" +
              this.get(5) +
              ", sizingmethod='auto expand')"
            )
          }),
          (a.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)]
          }),
          (a.split = function () {
            var a = {}
            ;(a.dx = this.e), (a.dy = this.f)
            var e = [
              [this.a, this.c],
              [this.b, this.d],
            ]
            ;(a.scalex = N.sqrt(b(e[0]))),
              d(e[0]),
              (a.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1]),
              (e[1] = [
                e[1][0] - e[0][0] * a.shear,
                e[1][1] - e[0][1] * a.shear,
              ]),
              (a.scaley = N.sqrt(b(e[1]))),
              d(e[1]),
              (a.shear /= a.scaley)
            var f = -e[0][1],
              g = e[1][1]
            return (
              g < 0
                ? ((a.rotate = c.deg(N.acos(g))),
                  f < 0 && (a.rotate = 360 - a.rotate))
                : (a.rotate = c.deg(N.asin(f))),
              (a.isSimple = !(
                +a.shear.toFixed(9) ||
                (a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate)
              )),
              (a.isSuperSimple =
                !+a.shear.toFixed(9) &&
                a.scalex.toFixed(9) == a.scaley.toFixed(9) &&
                !a.rotate),
              (a.noRotation = !+a.shear.toFixed(9) && !a.rotate),
              a
            )
          }),
          (a.toTransformString = function (a) {
            var b = a || this[J]()
            return b.isSimple
              ? ((b.scalex = +b.scalex.toFixed(4)),
                (b.scaley = +b.scaley.toFixed(4)),
                (b.rotate = +b.rotate.toFixed(4)),
                (b.dx || b.dy ? "t" + [b.dx, b.dy] : G) +
                  (1 != b.scalex || 1 != b.scaley
                    ? "s" + [b.scalex, b.scaley, 0, 0]
                    : G) +
                  (b.rotate ? "r" + [b.rotate, 0, 0] : G))
              : "m" +
                  [
                    this.get(0),
                    this.get(1),
                    this.get(2),
                    this.get(3),
                    this.get(4),
                    this.get(5),
                  ]
          })
      })(o.prototype)
    var Pa =
      navigator.userAgent.match(/Version\/(.*?)\s/) ||
      navigator.userAgent.match(/Chrome\/(\d+)/)
    ;("Apple Computer, Inc." == navigator.vendor &&
      ((Pa && Pa[1] < 4) || "iP" == navigator.platform.slice(0, 2))) ||
    ("Google Inc." == navigator.vendor && Pa && Pa[1] < 8)
      ? (v.safari = function () {
          var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none",
          })
          setTimeout(function () {
            a.remove()
          })
        })
      : (v.safari = la)
    for (
      var Qa = function () {
          this.returnValue = !1
        },
        Ra = function () {
          return this.originalEvent.preventDefault()
        },
        Sa = function () {
          this.cancelBubble = !0
        },
        Ta = function () {
          return this.originalEvent.stopPropagation()
        },
        Ua = function (a) {
          var b = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
            c = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft
          return { x: a.clientX + c, y: a.clientY + b }
        },
        Va = (function () {
          return A.doc.addEventListener
            ? function (a, b, c, d) {
                var e = function (a) {
                  var b = Ua(a)
                  return c.call(d, a, b.x, b.y)
                }
                if ((a.addEventListener(b, e, !1), F && L[b])) {
                  var f = function (b) {
                    for (
                      var e = Ua(b),
                        f = b,
                        g = 0,
                        h = b.targetTouches && b.targetTouches.length;
                      g < h;
                      g++
                    )
                      if (b.targetTouches[g].target == a) {
                        ;(b = b.targetTouches[g]),
                          (b.originalEvent = f),
                          (b.preventDefault = Ra),
                          (b.stopPropagation = Ta)
                        break
                      }
                    return c.call(d, b, e.x, e.y)
                  }
                  a.addEventListener(L[b], f, !1)
                }
                return function () {
                  return (
                    a.removeEventListener(b, e, !1),
                    F && L[b] && a.removeEventListener(L[b], f, !1),
                    !0
                  )
                }
              }
            : A.doc.attachEvent
            ? function (a, b, c, d) {
                var e = function (a) {
                  a = a || A.win.event
                  var b =
                      A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
                    e =
                      A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft,
                    f = a.clientX + e,
                    g = a.clientY + b
                  return (
                    (a.preventDefault = a.preventDefault || Qa),
                    (a.stopPropagation = a.stopPropagation || Sa),
                    c.call(d, a, f, g)
                  )
                }
                return (
                  a.attachEvent("on" + b, e),
                  function () {
                    return a.detachEvent("on" + b, e), !0
                  }
                )
              }
            : void 0
        })(),
        Wa = [],
        Xa = function (a) {
          for (
            var c,
              d = a.clientX,
              e = a.clientY,
              f = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
              g = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft,
              h = Wa.length;
            h--;

          ) {
            if (((c = Wa[h]), F && a.touches)) {
              for (var i, j = a.touches.length; j--; )
                if (((i = a.touches[j]), i.identifier == c.el._drag.id)) {
                  ;(d = i.clientX),
                    (e = i.clientY),
                    (a.originalEvent ? a.originalEvent : a).preventDefault()
                  break
                }
            } else a.preventDefault()
            var k,
              l = c.el.node,
              m = l.nextSibling,
              n = l.parentNode,
              o = l.style.display
            A.win.opera && n.removeChild(l),
              (l.style.display = "none"),
              (k = c.el.paper.getElementByPoint(d, e)),
              (l.style.display = o),
              A.win.opera && (m ? n.insertBefore(l, m) : n.appendChild(l)),
              k && b("raphael.drag.over." + c.el.id, c.el, k),
              (d += g),
              (e += f),
              b(
                "raphael.drag.move." + c.el.id,
                c.move_scope || c.el,
                d - c.el._drag.x,
                e - c.el._drag.y,
                d,
                e,
                a
              )
          }
        },
        Ya = function (a) {
          c.unmousemove(Xa).unmouseup(Ya)
          for (var d, e = Wa.length; e--; )
            (d = Wa[e]),
              (d.el._drag = {}),
              b(
                "raphael.drag.end." + d.el.id,
                d.end_scope || d.start_scope || d.move_scope || d.el,
                a
              )
          Wa = []
        },
        Za = (c.el = {}),
        $a = K.length;
      $a--;

    )
      !(function (a) {
        ;(c[a] = Za[a] =
          function (b, d) {
            return (
              c.is(b, "function") &&
                ((this.events = this.events || []),
                this.events.push({
                  name: a,
                  f: b,
                  unbind: Va(this.shape || this.node || A.doc, a, b, d || this),
                })),
              this
            )
          }),
          (c["un" + a] = Za["un" + a] =
            function (b) {
              for (var d = this.events || [], e = d.length; e--; )
                d[e].name != a ||
                  (!c.is(b, "undefined") && d[e].f != b) ||
                  (d[e].unbind(),
                  d.splice(e, 1),
                  !d.length && delete this.events)
              return this
            })
      })(K[$a])
    ;(Za.data = function (a, d) {
      var e = (ja[this.id] = ja[this.id] || {})
      if (0 == arguments.length) return e
      if (1 == arguments.length) {
        if (c.is(a, "object")) {
          for (var f in a) a[z](f) && this.data(f, a[f])
          return this
        }
        return b("raphael.data.get." + this.id, this, e[a], a), e[a]
      }
      return (e[a] = d), b("raphael.data.set." + this.id, this, d, a), this
    }),
      (Za.removeData = function (a) {
        return (
          null == a ? (ja[this.id] = {}) : ja[this.id] && delete ja[this.id][a],
          this
        )
      }),
      (Za.getData = function () {
        return d(ja[this.id] || {})
      }),
      (Za.hover = function (a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
      }),
      (Za.unhover = function (a, b) {
        return this.unmouseover(a).unmouseout(b)
      })
    var _a = []
    ;(Za.drag = function (a, d, e, f, g, h) {
      function i(i) {
        ;(i.originalEvent || i).preventDefault()
        var j = i.clientX,
          k = i.clientY,
          l = A.doc.documentElement.scrollTop || A.doc.body.scrollTop,
          m = A.doc.documentElement.scrollLeft || A.doc.body.scrollLeft
        if (((this._drag.id = i.identifier), F && i.touches))
          for (var n, o = i.touches.length; o--; )
            if (
              ((n = i.touches[o]),
              (this._drag.id = n.identifier),
              n.identifier == this._drag.id)
            ) {
              ;(j = n.clientX), (k = n.clientY)
              break
            }
        ;(this._drag.x = j + m),
          (this._drag.y = k + l),
          !Wa.length && c.mousemove(Xa).mouseup(Ya),
          Wa.push({ el: this, move_scope: f, start_scope: g, end_scope: h }),
          d && b.on("raphael.drag.start." + this.id, d),
          a && b.on("raphael.drag.move." + this.id, a),
          e && b.on("raphael.drag.end." + this.id, e),
          b(
            "raphael.drag.start." + this.id,
            g || f || this,
            i.clientX + m,
            i.clientY + l,
            i
          )
      }
      return (
        (this._drag = {}),
        _a.push({ el: this, start: i }),
        this.mousedown(i),
        this
      )
    }),
      (Za.onDragOver = function (a) {
        a
          ? b.on("raphael.drag.over." + this.id, a)
          : b.unbind("raphael.drag.over." + this.id)
      }),
      (Za.undrag = function () {
        for (var a = _a.length; a--; )
          _a[a].el == this &&
            (this.unmousedown(_a[a].start),
            _a.splice(a, 1),
            b.unbind("raphael.drag.*." + this.id))
        !_a.length && c.unmousemove(Xa).unmouseup(Ya), (Wa = [])
      }),
      (v.circle = function (a, b, d) {
        var e = c._engine.circle(this, a || 0, b || 0, d || 0)
        return this.__set__ && this.__set__.push(e), e
      }),
      (v.rect = function (a, b, d, e, f) {
        var g = c._engine.rect(this, a || 0, b || 0, d || 0, e || 0, f || 0)
        return this.__set__ && this.__set__.push(g), g
      }),
      (v.ellipse = function (a, b, d, e) {
        var f = c._engine.ellipse(this, a || 0, b || 0, d || 0, e || 0)
        return this.__set__ && this.__set__.push(f), f
      }),
      (v.path = function (a) {
        a && !c.is(a, "string") && !c.is(a[0], U) && (a += G)
        var b = c._engine.path(c.format[D](c, arguments), this)
        return this.__set__ && this.__set__.push(b), b
      }),
      (v.image = function (a, b, d, e, f) {
        var g = c._engine.image(
          this,
          a || "about:blank",
          b || 0,
          d || 0,
          e || 0,
          f || 0
        )
        return this.__set__ && this.__set__.push(g), g
      }),
      (v.text = function (a, b, d) {
        var e = c._engine.text(this, a || 0, b || 0, I(d))
        return this.__set__ && this.__set__.push(e), e
      }),
      (v.set = function (a) {
        !c.is(a, "array") &&
          (a = Array.prototype.splice.call(arguments, 0, arguments.length))
        var b = new lb(a)
        return (
          this.__set__ && this.__set__.push(b),
          (b.paper = this),
          (b.type = "set"),
          b
        )
      }),
      (v.setStart = function (a) {
        this.__set__ = a || this.set()
      }),
      (v.setFinish = function (a) {
        var b = this.__set__
        return delete this.__set__, b
      }),
      (v.getSize = function () {
        var a = this.canvas.parentNode
        return { width: a.offsetWidth, height: a.offsetHeight }
      }),
      (v.setSize = function (a, b) {
        return c._engine.setSize.call(this, a, b)
      }),
      (v.setViewBox = function (a, b, d, e, f) {
        return c._engine.setViewBox.call(this, a, b, d, e, f)
      }),
      (v.top = v.bottom = null),
      (v.raphael = c)
    var ab = function (a) {
      var b = a.getBoundingClientRect(),
        c = a.ownerDocument,
        d = c.body,
        e = c.documentElement,
        f = e.clientTop || d.clientTop || 0,
        g = e.clientLeft || d.clientLeft || 0
      return {
        y: b.top + (A.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
        x: b.left + (A.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g,
      }
    }
    ;(v.getElementByPoint = function (a, b) {
      var c = this,
        d = c.canvas,
        e = A.doc.elementFromPoint(a, b)
      if (A.win.opera && "svg" == e.tagName) {
        var f = ab(d),
          g = d.createSVGRect()
        ;(g.x = a - f.x), (g.y = b - f.y), (g.width = g.height = 1)
        var h = d.getIntersectionList(g, null)
        h.length && (e = h[h.length - 1])
      }
      if (!e) return null
      for (; e.parentNode && e != d.parentNode && !e.raphael; ) e = e.parentNode
      return (
        e == c.canvas.parentNode && (e = d),
        (e = e && e.raphael ? c.getById(e.raphaelid) : null)
      )
    }),
      (v.getElementsByBBox = function (a) {
        var b = this.set()
        return (
          this.forEach(function (d) {
            c.isBBoxIntersect(d.getBBox(), a) && b.push(d)
          }),
          b
        )
      }),
      (v.getById = function (a) {
        for (var b = this.bottom; b; ) {
          if (b.id == a) return b
          b = b.next
        }
        return null
      }),
      (v.forEach = function (a, b) {
        for (var c = this.bottom; c; ) {
          if (!1 === a.call(b, c)) return this
          c = c.next
        }
        return this
      }),
      (v.getElementsByPoint = function (a, b) {
        var c = this.set()
        return (
          this.forEach(function (d) {
            d.isPointInside(a, b) && c.push(d)
          }),
          c
        )
      }),
      (Za.isPointInside = function (a, b) {
        var d = (this.realPath = pa[this.type](this))
        return (
          this.attr("transform") &&
            this.attr("transform").length &&
            (d = c.transformPath(d, this.attr("transform"))),
          c.isPointInsidePath(d, a, b)
        )
      }),
      (Za.getBBox = function (a) {
        if (this.removed) return {}
        var b = this._
        return a
          ? ((!b.dirty && b.bboxwt) ||
              ((this.realPath = pa[this.type](this)),
              (b.bboxwt = Aa(this.realPath)),
              (b.bboxwt.toString = p),
              (b.dirty = 0)),
            b.bboxwt)
          : ((b.dirty || b.dirtyT || !b.bbox) &&
              ((!b.dirty && this.realPath) ||
                ((b.bboxwt = 0), (this.realPath = pa[this.type](this))),
              (b.bbox = Aa(qa(this.realPath, this.matrix))),
              (b.bbox.toString = p),
              (b.dirty = b.dirtyT = 0)),
            b.bbox)
      }),
      (Za.clone = function () {
        if (this.removed) return null
        var a = this.paper[this.type]().attr(this.attr())
        return this.__set__ && this.__set__.push(a), a
      }),
      (Za.glow = function (a) {
        if ("text" == this.type) return null
        a = a || {}
        var b = {
            width: (a.width || 10) + (+this.attr("stroke-width") || 1),
            fill: a.fill || !1,
            opacity: a.opacity || 0.5,
            offsetx: a.offsetx || 0,
            offsety: a.offsety || 0,
            color: a.color || "#000",
          },
          c = b.width / 2,
          d = this.paper,
          e = d.set(),
          f = this.realPath || pa[this.type](this)
        f = this.matrix ? qa(f, this.matrix) : f
        for (var g = 1; g < c + 1; g++)
          e.push(
            d
              .path(f)
              .attr({
                stroke: b.color,
                fill: b.fill ? b.color : "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": +((b.width / c) * g).toFixed(3),
                opacity: +(b.opacity / c).toFixed(3),
              })
          )
        return e.insertBefore(this).translate(b.offsetx, b.offsety)
      })
    var bb = function (a, b, d, e, f, g, h, i, l) {
        return null == l
          ? j(a, b, d, e, f, g, h, i)
          : c.findDotsAtSegment(
              a,
              b,
              d,
              e,
              f,
              g,
              h,
              i,
              k(a, b, d, e, f, g, h, i, l)
            )
      },
      cb = function (a, b) {
        return function (d, e, f) {
          d = Ja(d)
          for (
            var g, h, i, j, k, l = "", m = {}, n = 0, o = 0, p = d.length;
            o < p;
            o++
          ) {
            if (((i = d[o]), "M" == i[0])) (g = +i[1]), (h = +i[2])
            else {
              if (
                ((j = bb(g, h, i[1], i[2], i[3], i[4], i[5], i[6])), n + j > e)
              ) {
                if (b && !m.start) {
                  if (
                    ((k = bb(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n)),
                    (l += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y]),
                    f)
                  )
                    return l
                  ;(m.start = l),
                    (l = [
                      "M" + k.x,
                      k.y + "C" + k.n.x,
                      k.n.y,
                      k.end.x,
                      k.end.y,
                      i[5],
                      i[6],
                    ].join()),
                    (n += j),
                    (g = +i[5]),
                    (h = +i[6])
                  continue
                }
                if (!a && !b)
                  return (
                    (k = bb(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n)),
                    { x: k.x, y: k.y, alpha: k.alpha }
                  )
              }
              ;(n += j), (g = +i[5]), (h = +i[6])
            }
            l += i.shift() + i
          }
          return (
            (m.end = l),
            (k = a
              ? n
              : b
              ? m
              : c.findDotsAtSegment(
                  g,
                  h,
                  i[0],
                  i[1],
                  i[2],
                  i[3],
                  i[4],
                  i[5],
                  1
                )),
            k.alpha && (k = { x: k.x, y: k.y, alpha: k.alpha }),
            k
          )
        }
      },
      db = cb(1),
      eb = cb(),
      fb = cb(0, 1)
    ;(c.getTotalLength = db),
      (c.getPointAtLength = eb),
      (c.getSubpath = function (a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6) return fb(a, b).end
        var d = fb(a, c, 1)
        return b ? fb(d, b).end : d
      }),
      (Za.getTotalLength = function () {
        var a = this.getPath()
        if (a)
          return this.node.getTotalLength ? this.node.getTotalLength() : db(a)
      }),
      (Za.getPointAtLength = function (a) {
        var b = this.getPath()
        if (b) return eb(b, a)
      }),
      (Za.getPath = function () {
        var a,
          b = c._getPath[this.type]
        if ("text" != this.type && "set" != this.type)
          return b && (a = b(this)), a
      }),
      (Za.getSubpath = function (a, b) {
        var d = this.getPath()
        if (d) return c.getSubpath(d, a, b)
      })
    var gb = (c.easing_formulas = {
      linear: function (a) {
        return a
      },
      "<": function (a) {
        return R(a, 1.7)
      },
      ">": function (a) {
        return R(a, 0.48)
      },
      "<>": function (a) {
        var b = 0.48 - a / 1.04,
          c = N.sqrt(0.1734 + b * b),
          d = c - b,
          e = R(Q(d), 1 / 3) * (d < 0 ? -1 : 1),
          f = -c - b,
          g = R(Q(f), 1 / 3) * (f < 0 ? -1 : 1),
          h = e + g + 0.5
        return 3 * (1 - h) * h * h + h * h * h
      },
      backIn: function (a) {
        var b = 1.70158
        return a * a * ((b + 1) * a - b)
      },
      backOut: function (a) {
        a -= 1
        var b = 1.70158
        return a * a * ((b + 1) * a + b) + 1
      },
      elastic: function (a) {
        return a == !!a
          ? a
          : R(2, -10 * a) * N.sin((2 * S * (a - 0.075)) / 0.3) + 1
      },
      bounce: function (a) {
        var b,
          c = 7.5625,
          d = 2.75
        return (
          a < 1 / d
            ? (b = c * a * a)
            : a < 2 / d
            ? ((a -= 1.5 / d), (b = c * a * a + 0.75))
            : a < 2.5 / d
            ? ((a -= 2.25 / d), (b = c * a * a + 0.9375))
            : ((a -= 2.625 / d), (b = c * a * a + 0.984375)),
          b
        )
      },
    })
    ;(gb.easeIn = gb["ease-in"] = gb["<"]),
      (gb.easeOut = gb["ease-out"] = gb[">"]),
      (gb.easeInOut = gb["ease-in-out"] = gb["<>"]),
      (gb["back-in"] = gb.backIn),
      (gb["back-out"] = gb.backOut)
    var hb = [],
      ib =
        a.requestAnimationFrame ||
        a.webkitRequestAnimationFrame ||
        a.mozRequestAnimationFrame ||
        a.oRequestAnimationFrame ||
        a.msRequestAnimationFrame ||
        function (a) {
          setTimeout(a, 16)
        },
      jb = function () {
        for (var a = +new Date(), d = 0; d < hb.length; d++) {
          var e = hb[d]
          if (!e.el.removed && !e.paused) {
            var f,
              g,
              h = a - e.start,
              i = e.ms,
              j = e.easing,
              k = e.from,
              l = e.diff,
              m = e.to,
              n = (e.t, e.el),
              o = {},
              p = {}
            if (
              (e.initstatus
                ? ((h =
                    ((e.initstatus * e.anim.top - e.prev) /
                      (e.percent - e.prev)) *
                    i),
                  (e.status = e.initstatus),
                  delete e.initstatus,
                  e.stop && hb.splice(d--, 1))
                : (e.status =
                    (e.prev + (e.percent - e.prev) * (h / i)) / e.anim.top),
              !(h < 0))
            )
              if (h < i) {
                var q = j(h / i)
                for (var r in k)
                  if (k[z](r)) {
                    switch (ca[r]) {
                      case T:
                        f = +k[r] + q * i * l[r]
                        break
                      case "colour":
                        f =
                          "rgb(" +
                          [
                            kb(Z(k[r].r + q * i * l[r].r)),
                            kb(Z(k[r].g + q * i * l[r].g)),
                            kb(Z(k[r].b + q * i * l[r].b)),
                          ].join(",") +
                          ")"
                        break
                      case "path":
                        f = []
                        for (var t = 0, u = k[r].length; t < u; t++) {
                          f[t] = [k[r][t][0]]
                          for (var v = 1, w = k[r][t].length; v < w; v++)
                            f[t][v] = +k[r][t][v] + q * i * l[r][t][v]
                          f[t] = f[t].join(H)
                        }
                        f = f.join(H)
                        break
                      case "transform":
                        if (l[r].real)
                          for (f = [], t = 0, u = k[r].length; t < u; t++)
                            for (
                              f[t] = [k[r][t][0]], v = 1, w = k[r][t].length;
                              v < w;
                              v++
                            )
                              f[t][v] = k[r][t][v] + q * i * l[r][t][v]
                        else {
                          var x = function (a) {
                            return +k[r][a] + q * i * l[r][a]
                          }
                          f = [["m", x(0), x(1), x(2), x(3), x(4), x(5)]]
                        }
                        break
                      case "csv":
                        if ("clip-rect" == r)
                          for (f = [], t = 4; t--; )
                            f[t] = +k[r][t] + q * i * l[r][t]
                        break
                      default:
                        var y = [][E](k[r])
                        for (
                          f = [], t = n.paper.customAttributes[r].length;
                          t--;

                        )
                          f[t] = +y[t] + q * i * l[r][t]
                    }
                    o[r] = f
                  }
                n.attr(o),
                  (function (a, c, d) {
                    setTimeout(function () {
                      b("raphael.anim.frame." + a, c, d)
                    })
                  })(n.id, n, e.anim)
              } else {
                if (
                  ((function (a, d, e) {
                    setTimeout(function () {
                      b("raphael.anim.frame." + d.id, d, e),
                        b("raphael.anim.finish." + d.id, d, e),
                        c.is(a, "function") && a.call(d)
                    })
                  })(e.callback, n, e.anim),
                  n.attr(m),
                  hb.splice(d--, 1),
                  e.repeat > 1 && !e.next)
                ) {
                  for (g in m) m[z](g) && (p[g] = e.totalOrigin[g])
                  e.el.attr(p),
                    s(
                      e.anim,
                      e.el,
                      e.anim.percents[0],
                      null,
                      e.totalOrigin,
                      e.repeat - 1
                    )
                }
                e.next &&
                  !e.stop &&
                  s(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat)
              }
          }
        }
        c.svg && n && n.paper && n.paper.safari(), hb.length && ib(jb)
      },
      kb = function (a) {
        return a > 255 ? 255 : a < 0 ? 0 : a
      }
    ;(Za.animateWith = function (a, b, d, e, f, g) {
      var h = this
      if (h.removed) return g && g.call(h), h
      var i = d instanceof r ? d : c.animation(d, e, f, g)
      s(i, h, i.percents[0], null, h.attr())
      for (var j = 0, k = hb.length; j < k; j++)
        if (hb[j].anim == b && hb[j].el == a) {
          hb[k - 1].start = hb[j].start
          break
        }
      return h
    }),
      (Za.onAnimation = function (a) {
        return (
          a
            ? b.on("raphael.anim.frame." + this.id, a)
            : b.unbind("raphael.anim.frame." + this.id),
          this
        )
      }),
      (r.prototype.delay = function (a) {
        var b = new r(this.anim, this.ms)
        return (b.times = this.times), (b.del = +a || 0), b
      }),
      (r.prototype.repeat = function (a) {
        var b = new r(this.anim, this.ms)
        return (b.del = this.del), (b.times = N.floor(O(a, 0)) || 1), b
      }),
      (c.animation = function (a, b, d, e) {
        if (a instanceof r) return a
        ;(!c.is(d, "function") && d) || ((e = e || d || null), (d = null)),
          (a = Object(a)),
          (b = +b || 0)
        var f,
          g,
          h = {}
        for (g in a)
          a[z](g) && $(g) != g && $(g) + "%" != g && ((f = !0), (h[g] = a[g]))
        if (f)
          return (
            d && (h.easing = d), e && (h.callback = e), new r({ 100: h }, b)
          )
        if (e) {
          var i = 0
          for (var j in a) {
            var k = _(j)
            a[z](j) && k > i && (i = k)
          }
          ;(i += "%"), !a[i].callback && (a[i].callback = e)
        }
        return new r(a, b)
      }),
      (Za.animate = function (a, b, d, e) {
        var f = this
        if (f.removed) return e && e.call(f), f
        var g = a instanceof r ? a : c.animation(a, b, d, e)
        return s(g, f, g.percents[0], null, f.attr()), f
      }),
      (Za.setTime = function (a, b) {
        return a && null != b && this.status(a, P(b, a.ms) / a.ms), this
      }),
      (Za.status = function (a, b) {
        var c,
          d,
          e = [],
          f = 0
        if (null != b) return s(a, this, -1, P(b, 1)), this
        for (c = hb.length; f < c; f++)
          if (((d = hb[f]), d.el.id == this.id && (!a || d.anim == a))) {
            if (a) return d.status
            e.push({ anim: d.anim, status: d.status })
          }
        return a ? 0 : e
      }),
      (Za.pause = function (a) {
        for (var c = 0; c < hb.length; c++)
          hb[c].el.id != this.id ||
            (a && hb[c].anim != a) ||
            (!1 !== b("raphael.anim.pause." + this.id, this, hb[c].anim) &&
              (hb[c].paused = !0))
        return this
      }),
      (Za.resume = function (a) {
        for (var c = 0; c < hb.length; c++)
          if (hb[c].el.id == this.id && (!a || hb[c].anim == a)) {
            var d = hb[c]
            !1 !== b("raphael.anim.resume." + this.id, this, d.anim) &&
              (delete d.paused, this.status(d.anim, d.status))
          }
        return this
      }),
      (Za.stop = function (a) {
        for (var c = 0; c < hb.length; c++)
          hb[c].el.id != this.id ||
            (a && hb[c].anim != a) ||
            (!1 !== b("raphael.anim.stop." + this.id, this, hb[c].anim) &&
              hb.splice(c--, 1))
        return this
      }),
      b.on("raphael.remove", t),
      b.on("raphael.clear", t),
      (Za.toString = function () {
        return "Raphaël’s object"
      })
    var lb = function (a) {
        if (((this.items = []), (this.length = 0), (this.type = "set"), a))
          for (var b = 0, c = a.length; b < c; b++)
            !a[b] ||
              (a[b].constructor != Za.constructor && a[b].constructor != lb) ||
              ((this[this.items.length] = this.items[this.items.length] = a[b]),
              this.length++)
      },
      mb = lb.prototype
    ;(mb.push = function () {
      for (var a, b, c = 0, d = arguments.length; c < d; c++)
        !(a = arguments[c]) ||
          (a.constructor != Za.constructor && a.constructor != lb) ||
          ((b = this.items.length),
          (this[b] = this.items[b] = a),
          this.length++)
      return this
    }),
      (mb.pop = function () {
        return this.length && delete this[this.length--], this.items.pop()
      }),
      (mb.forEach = function (a, b) {
        for (var c = 0, d = this.items.length; c < d; c++)
          if (!1 === a.call(b, this.items[c], c)) return this
        return this
      })
    for (var nb in Za)
      Za[z](nb) &&
        (mb[nb] = (function (a) {
          return function () {
            var b = arguments
            return this.forEach(function (c) {
              c[a][D](c, b)
            })
          }
        })(nb))
    return (
      (mb.attr = function (a, b) {
        if (a && c.is(a, U) && c.is(a[0], "object"))
          for (var d = 0, e = a.length; d < e; d++) this.items[d].attr(a[d])
        else
          for (var f = 0, g = this.items.length; f < g; f++)
            this.items[f].attr(a, b)
        return this
      }),
      (mb.clear = function () {
        for (; this.length; ) this.pop()
      }),
      (mb.splice = function (a, b, c) {
        ;(a = a < 0 ? O(this.length + a, 0) : a),
          (b = O(0, P(this.length - a, b)))
        var d,
          e = [],
          f = [],
          g = []
        for (d = 2; d < arguments.length; d++) g.push(arguments[d])
        for (d = 0; d < b; d++) f.push(this[a + d])
        for (; d < this.length - a; d++) e.push(this[a + d])
        var h = g.length
        for (d = 0; d < h + e.length; d++)
          this.items[a + d] = this[a + d] = d < h ? g[d] : e[d - h]
        for (d = this.items.length = this.length -= b - h; this[d]; )
          delete this[d++]
        return new lb(f)
      }),
      (mb.exclude = function (a) {
        for (var b = 0, c = this.length; b < c; b++)
          if (this[b] == a) return this.splice(b, 1), !0
      }),
      (mb.animate = function (a, b, d, e) {
        ;(c.is(d, "function") || !d) && (e = d || null)
        var f,
          g,
          h = this.items.length,
          i = h,
          j = this
        if (!h) return this
        e &&
          (g = function () {
            !--h && e.call(j)
          }),
          (d = c.is(d, "string") ? d : g)
        var k = c.animation(a, b, d, g)
        for (f = this.items[--i].animate(k); i--; )
          this.items[i] &&
            !this.items[i].removed &&
            this.items[i].animateWith(f, k, k),
            (this.items[i] && !this.items[i].removed) || h--
        return this
      }),
      (mb.insertAfter = function (a) {
        for (var b = this.items.length; b--; ) this.items[b].insertAfter(a)
        return this
      }),
      (mb.getBBox = function () {
        for (var a = [], b = [], c = [], d = [], e = this.items.length; e--; )
          if (!this.items[e].removed) {
            var f = this.items[e].getBBox()
            a.push(f.x),
              b.push(f.y),
              c.push(f.x + f.width),
              d.push(f.y + f.height)
          }
        return (
          (a = P[D](0, a)),
          (b = P[D](0, b)),
          (c = O[D](0, c)),
          (d = O[D](0, d)),
          { x: a, y: b, x2: c, y2: d, width: c - a, height: d - b }
        )
      }),
      (mb.clone = function (a) {
        a = this.paper.set()
        for (var b = 0, c = this.items.length; b < c; b++)
          a.push(this.items[b].clone())
        return a
      }),
      (mb.toString = function () {
        return "Raphaël‘s set"
      }),
      (mb.glow = function (a) {
        var b = this.paper.set()
        return (
          this.forEach(function (c, d) {
            var e = c.glow(a)
            null != e &&
              e.forEach(function (a, c) {
                b.push(a)
              })
          }),
          b
        )
      }),
      (mb.isPointInside = function (a, b) {
        var c = !1
        return (
          this.forEach(function (d) {
            if (d.isPointInside(a, b)) return (c = !0), !1
          }),
          c
        )
      }),
      (c.registerFont = function (a) {
        if (!a.face) return a
        this.fonts = this.fonts || {}
        var b = { w: a.w, face: {}, glyphs: {} },
          c = a.face["font-family"]
        for (var d in a.face) a.face[z](d) && (b.face[d] = a.face[d])
        if (
          (this.fonts[c] ? this.fonts[c].push(b) : (this.fonts[c] = [b]),
          !a.svg)
        ) {
          b.face["units-per-em"] = _(a.face["units-per-em"], 10)
          for (var e in a.glyphs)
            if (a.glyphs[z](e)) {
              var f = a.glyphs[e]
              if (
                ((b.glyphs[e] = {
                  w: f.w,
                  k: {},
                  d:
                    f.d &&
                    "M" +
                      f.d.replace(/[mlcxtrv]/g, function (a) {
                        return (
                          { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[
                            a
                          ] || "M"
                        )
                      }) +
                      "z",
                }),
                f.k)
              )
                for (var g in f.k) f[z](g) && (b.glyphs[e].k[g] = f.k[g])
            }
        }
        return a
      }),
      (v.getFont = function (a, b, d, e) {
        if (
          ((e = e || "normal"),
          (d = d || "normal"),
          (b =
            +b ||
            { normal: 400, bold: 700, lighter: 300, bolder: 800 }[b] ||
            400),
          c.fonts)
        ) {
          var f = c.fonts[a]
          if (!f) {
            var g = new RegExp(
              "(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, G) + "(\\s|$)",
              "i"
            )
            for (var h in c.fonts)
              if (c.fonts[z](h) && g.test(h)) {
                f = c.fonts[h]
                break
              }
          }
          var i
          if (f)
            for (
              var j = 0, k = f.length;
              j < k &&
              ((i = f[j]),
              i.face["font-weight"] != b ||
                (i.face["font-style"] != d && i.face["font-style"]) ||
                i.face["font-stretch"] != e);
              j++
            );
          return i
        }
      }),
      (v.print = function (a, b, d, e, f, g, h, i) {
        ;(g = g || "middle"),
          (h = O(P(h || 0, 1), -1)),
          (i = O(P(i || 1, 3), 1))
        var j,
          k = I(d)[J](G),
          l = 0,
          m = 0,
          n = G
        if ((c.is(e, "string") && (e = this.getFont(e)), e)) {
          j = (f || 16) / e.face["units-per-em"]
          for (
            var o = e.face.bbox[J](w),
              p = +o[0],
              q = o[3] - o[1],
              r = 0,
              s = +o[1] + ("baseline" == g ? q + +e.face.descent : q / 2),
              t = 0,
              u = k.length;
            t < u;
            t++
          ) {
            if ("\n" == k[t]) (l = 0), (x = 0), (m = 0), (r += q * i)
            else {
              var v = (m && e.glyphs[k[t - 1]]) || {},
                x = e.glyphs[k[t]]
              ;(l += m
                ? (v.w || e.w) + ((v.k && v.k[k[t]]) || 0) + e.w * h
                : 0),
                (m = 1)
            }
            x &&
              x.d &&
              (n += c.transformPath(x.d, [
                "t",
                l * j,
                r * j,
                "s",
                j,
                j,
                p,
                s,
                "t",
                (a - p) / j,
                (b - s) / j,
              ]))
          }
        }
        return this.path(n).attr({ fill: "#000", stroke: "none" })
      }),
      (v.add = function (a) {
        if (c.is(a, "array"))
          for (var b, d = this.set(), e = 0, f = a.length; e < f; e++)
            (b = a[e] || {}), x[z](b.type) && d.push(this[b.type]().attr(b))
        return d
      }),
      (c.format = function (a, b) {
        var d = c.is(b, U) ? [0][E](b) : arguments
        return (
          a &&
            c.is(a, "string") &&
            d.length - 1 &&
            (a = a.replace(y, function (a, b) {
              return null == d[++b] ? G : d[b]
            })),
          a || G
        )
      }),
      (c.fullfill = (function () {
        var a = /\{([^\}]+)\}/g,
          b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
          c = function (a, c, d) {
            var e = d
            return (
              c.replace(b, function (a, b, c, d, f) {
                ;(b = b || d),
                  e &&
                    (b in e && (e = e[b]),
                    "function" == typeof e && f && (e = e()))
              }),
              (e = (null == e || e == d ? a : e) + "")
            )
          }
        return function (b, d) {
          return String(b).replace(a, function (a, b) {
            return c(a, b, d)
          })
        }
      })()),
      (c.ninja = function () {
        return B.was ? (A.win.Raphael = B.is) : delete Raphael, c
      }),
      (c.st = mb),
      b.on("raphael.DOMload", function () {
        u = !0
      }),
      (function (a, b, d) {
        function e() {
          ;/in/.test(a.readyState) ? setTimeout(e, 9) : c.eve("raphael.DOMload")
        }
        null == a.readyState &&
          a.addEventListener &&
          (a.addEventListener(
            "DOMContentLoaded",
            (d = function () {
              a.removeEventListener("DOMContentLoaded", d, !1),
                (a.readyState = "complete")
            }),
            !1
          ),
          (a.readyState = "loading")),
          e()
      })(document),
      (function () {
        if (c.svg) {
          var a = "hasOwnProperty",
            b = String,
            d = parseFloat,
            e = parseInt,
            f = Math,
            g = f.max,
            h = f.abs,
            i = f.pow,
            j = /[, ]+/,
            k = c.eve,
            l = "",
            m = " ",
            n = "http://www.w3.org/1999/xlink",
            o = {
              block: "M5,0 0,2.5 5,5z",
              classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
              diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
              open: "M6,1 1,3.5 6,6",
              oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z",
            },
            p = {}
          c.toString = function () {
            return (
              "Your browser supports SVG.\nYou are running Raphaël " +
              this.version
            )
          }
          var q = function (d, e) {
              if (e) {
                "string" == typeof d && (d = q(d))
                for (var f in e)
                  e[a](f) &&
                    ("xlink:" == f.substring(0, 6)
                      ? d.setAttributeNS(n, f.substring(6), b(e[f]))
                      : d.setAttribute(f, b(e[f])))
              } else
                (d = c._g.doc.createElementNS("http://www.w3.org/2000/svg", d)),
                  d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)")
              return d
            },
            r = function (a, e) {
              var j = "linear",
                k = a.id + e,
                m = 0.5,
                n = 0.5,
                o = a.node,
                p = a.paper,
                r = o.style,
                s = c._g.doc.getElementById(k)
              if (!s) {
                if (
                  ((e = b(e).replace(c._radial_gradient, function (a, b, c) {
                    if (((j = "radial"), b && c)) {
                      ;(m = d(b)), (n = d(c))
                      var e = 2 * (n > 0.5) - 1
                      i(m - 0.5, 2) + i(n - 0.5, 2) > 0.25 &&
                        (n = f.sqrt(0.25 - i(m - 0.5, 2)) * e + 0.5) &&
                        0.5 != n &&
                        (n = n.toFixed(5) - 1e-5 * e)
                    }
                    return l
                  })),
                  (e = e.split(/\s*\-\s*/)),
                  "linear" == j)
                ) {
                  var t = e.shift()
                  if (((t = -d(t)), isNaN(t))) return null
                  var u = [0, 0, f.cos(c.rad(t)), f.sin(c.rad(t))],
                    v = 1 / (g(h(u[2]), h(u[3])) || 1)
                  ;(u[2] *= v),
                    (u[3] *= v),
                    u[2] < 0 && ((u[0] = -u[2]), (u[2] = 0)),
                    u[3] < 0 && ((u[1] = -u[3]), (u[3] = 0))
                }
                var w = c._parseDots(e)
                if (!w) return null
                if (
                  ((k = k.replace(/[\(\)\s,\xb0#]/g, "_")),
                  a.gradient &&
                    k != a.gradient.id &&
                    (p.defs.removeChild(a.gradient), delete a.gradient),
                  !a.gradient)
                ) {
                  ;(s = q(j + "Gradient", { id: k })),
                    (a.gradient = s),
                    q(
                      s,
                      "radial" == j
                        ? { fx: m, fy: n }
                        : {
                            x1: u[0],
                            y1: u[1],
                            x2: u[2],
                            y2: u[3],
                            gradientTransform: a.matrix.invert(),
                          }
                    ),
                    p.defs.appendChild(s)
                  for (var x = 0, y = w.length; x < y; x++)
                    s.appendChild(
                      q("stop", {
                        offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
                        "stop-color": w[x].color || "#fff",
                      })
                    )
                }
              }
              return (
                q(o, {
                  fill: "url('" + document.location + "#" + k + "')",
                  opacity: 1,
                  "fill-opacity": 1,
                }),
                (r.fill = l),
                (r.opacity = 1),
                (r.fillOpacity = 1),
                1
              )
            },
            s = function (a) {
              var b = a.getBBox(1)
              q(a.pattern, {
                patternTransform:
                  a.matrix.invert() + " translate(" + b.x + "," + b.y + ")",
              })
            },
            t = function (d, e, f) {
              if ("path" == d.type) {
                for (
                  var g,
                    h,
                    i,
                    j,
                    k,
                    m = b(e).toLowerCase().split("-"),
                    n = d.paper,
                    r = f ? "end" : "start",
                    s = d.node,
                    t = d.attrs,
                    u = t["stroke-width"],
                    v = m.length,
                    w = "classic",
                    x = 3,
                    y = 3,
                    z = 5;
                  v--;

                )
                  switch (m[v]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                      w = m[v]
                      break
                    case "wide":
                      y = 5
                      break
                    case "narrow":
                      y = 2
                      break
                    case "long":
                      x = 5
                      break
                    case "short":
                      x = 2
                  }
                if (
                  ("open" == w
                    ? ((x += 2),
                      (y += 2),
                      (z += 2),
                      (i = 1),
                      (j = f ? 4 : 1),
                      (k = { fill: "none", stroke: t.stroke }))
                    : ((j = i = x / 2),
                      (k = { fill: t.stroke, stroke: "none" })),
                  d._.arrows
                    ? f
                      ? (d._.arrows.endPath && p[d._.arrows.endPath]--,
                        d._.arrows.endMarker && p[d._.arrows.endMarker]--)
                      : (d._.arrows.startPath && p[d._.arrows.startPath]--,
                        d._.arrows.startMarker && p[d._.arrows.startMarker]--)
                    : (d._.arrows = {}),
                  "none" != w)
                ) {
                  var A = "raphael-marker-" + w,
                    B = "raphael-marker-" + r + w + x + y + "-obj" + d.id
                  c._g.doc.getElementById(A)
                    ? p[A]++
                    : (n.defs.appendChild(
                        q(q("path"), {
                          "stroke-linecap": "round",
                          d: o[w],
                          id: A,
                        })
                      ),
                      (p[A] = 1))
                  var C,
                    D = c._g.doc.getElementById(B)
                  D
                    ? (p[B]++, (C = D.getElementsByTagName("use")[0]))
                    : ((D = q(q("marker"), {
                        id: B,
                        markerHeight: y,
                        markerWidth: x,
                        orient: "auto",
                        refX: j,
                        refY: y / 2,
                      })),
                      (C = q(q("use"), {
                        "xlink:href": "#" + A,
                        transform:
                          (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) +
                          "scale(" +
                          x / z +
                          "," +
                          y / z +
                          ")",
                        "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4),
                      })),
                      D.appendChild(C),
                      n.defs.appendChild(D),
                      (p[B] = 1)),
                    q(C, k)
                  var E = i * ("diamond" != w && "oval" != w)
                  f
                    ? ((g = d._.arrows.startdx * u || 0),
                      (h = c.getTotalLength(t.path) - E * u))
                    : ((g = E * u),
                      (h =
                        c.getTotalLength(t.path) -
                        (d._.arrows.enddx * u || 0))),
                    (k = {}),
                    (k["marker-" + r] = "url(#" + B + ")"),
                    (h || g) && (k.d = c.getSubpath(t.path, g, h)),
                    q(s, k),
                    (d._.arrows[r + "Path"] = A),
                    (d._.arrows[r + "Marker"] = B),
                    (d._.arrows[r + "dx"] = E),
                    (d._.arrows[r + "Type"] = w),
                    (d._.arrows[r + "String"] = e)
                } else
                  f
                    ? ((g = d._.arrows.startdx * u || 0),
                      (h = c.getTotalLength(t.path) - g))
                    : ((g = 0),
                      (h =
                        c.getTotalLength(t.path) -
                        (d._.arrows.enddx * u || 0))),
                    d._.arrows[r + "Path"] &&
                      q(s, { d: c.getSubpath(t.path, g, h) }),
                    delete d._.arrows[r + "Path"],
                    delete d._.arrows[r + "Marker"],
                    delete d._.arrows[r + "dx"],
                    delete d._.arrows[r + "Type"],
                    delete d._.arrows[r + "String"]
                for (k in p)
                  if (p[a](k) && !p[k]) {
                    var F = c._g.doc.getElementById(k)
                    F && F.parentNode.removeChild(F)
                  }
              }
            },
            u = {
              "": [0],
              none: [0],
              "-": [3, 1],
              ".": [1, 1],
              "-.": [3, 1, 1, 1],
              "-..": [3, 1, 1, 1, 1, 1],
              ". ": [1, 3],
              "- ": [4, 3],
              "--": [8, 3],
              "- .": [4, 3, 1, 3],
              "--.": [8, 3, 1, 3],
              "--..": [8, 3, 1, 3, 1, 3],
            },
            v = function (a, c, d) {
              if ((c = u[b(c).toLowerCase()])) {
                for (
                  var e = a.attrs["stroke-width"] || "1",
                    f =
                      { round: e, square: e, butt: 0 }[
                        a.attrs["stroke-linecap"] || d["stroke-linecap"]
                      ] || 0,
                    g = [],
                    h = c.length;
                  h--;

                )
                  g[h] = c[h] * e + (h % 2 ? 1 : -1) * f
                q(a.node, { "stroke-dasharray": g.join(",") })
              }
            },
            w = function (d, f) {
              var i = d.node,
                k = d.attrs,
                m = i.style.visibility
              i.style.visibility = "hidden"
              for (var o in f)
                if (f[a](o)) {
                  if (!c._availableAttrs[a](o)) continue
                  var p = f[o]
                  switch (((k[o] = p), o)) {
                    case "blur":
                      d.blur(p)
                      break
                    case "title":
                      var u = i.getElementsByTagName("title")
                      if (u.length && (u = u[0])) u.firstChild.nodeValue = p
                      else {
                        u = q("title")
                        var w = c._g.doc.createTextNode(p)
                        u.appendChild(w), i.appendChild(u)
                      }
                      break
                    case "href":
                    case "target":
                      var y = i.parentNode
                      if ("a" != y.tagName.toLowerCase()) {
                        var z = q("a")
                        y.insertBefore(z, i), z.appendChild(i), (y = z)
                      }
                      "target" == o
                        ? y.setAttributeNS(n, "show", "blank" == p ? "new" : p)
                        : y.setAttributeNS(n, o, p)
                      break
                    case "cursor":
                      i.style.cursor = p
                      break
                    case "transform":
                      d.transform(p)
                      break
                    case "arrow-start":
                      t(d, p)
                      break
                    case "arrow-end":
                      t(d, p, 1)
                      break
                    case "clip-rect":
                      var A = b(p).split(j)
                      if (4 == A.length) {
                        d.clip &&
                          d.clip.parentNode.parentNode.removeChild(
                            d.clip.parentNode
                          )
                        var B = q("clipPath"),
                          C = q("rect")
                        ;(B.id = c.createUUID()),
                          q(C, { x: A[0], y: A[1], width: A[2], height: A[3] }),
                          B.appendChild(C),
                          d.paper.defs.appendChild(B),
                          q(i, { "clip-path": "url(#" + B.id + ")" }),
                          (d.clip = C)
                      }
                      if (!p) {
                        var D = i.getAttribute("clip-path")
                        if (D) {
                          var E = c._g.doc.getElementById(
                            D.replace(/(^url\(#|\)$)/g, l)
                          )
                          E && E.parentNode.removeChild(E),
                            q(i, { "clip-path": l }),
                            delete d.clip
                        }
                      }
                      break
                    case "path":
                      "path" == d.type &&
                        (q(i, {
                          d: p ? (k.path = c._pathToAbsolute(p)) : "M0,0",
                        }),
                        (d._.dirty = 1),
                        d._.arrows &&
                          ("startString" in d._.arrows &&
                            t(d, d._.arrows.startString),
                          "endString" in d._.arrows &&
                            t(d, d._.arrows.endString, 1)))
                      break
                    case "width":
                      if ((i.setAttribute(o, p), (d._.dirty = 1), !k.fx)) break
                      ;(o = "x"), (p = k.x)
                    case "x":
                      k.fx && (p = -k.x - (k.width || 0))
                    case "rx":
                      if ("rx" == o && "rect" == d.type) break
                    case "cx":
                      i.setAttribute(o, p), d.pattern && s(d), (d._.dirty = 1)
                      break
                    case "height":
                      if ((i.setAttribute(o, p), (d._.dirty = 1), !k.fy)) break
                      ;(o = "y"), (p = k.y)
                    case "y":
                      k.fy && (p = -k.y - (k.height || 0))
                    case "ry":
                      if ("ry" == o && "rect" == d.type) break
                    case "cy":
                      i.setAttribute(o, p), d.pattern && s(d), (d._.dirty = 1)
                      break
                    case "r":
                      "rect" == d.type
                        ? q(i, { rx: p, ry: p })
                        : i.setAttribute(o, p),
                        (d._.dirty = 1)
                      break
                    case "src":
                      "image" == d.type && i.setAttributeNS(n, "href", p)
                      break
                    case "stroke-width":
                      ;(1 == d._.sx && 1 == d._.sy) ||
                        (p /= g(h(d._.sx), h(d._.sy)) || 1),
                        i.setAttribute(o, p),
                        k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f),
                        d._.arrows &&
                          ("startString" in d._.arrows &&
                            t(d, d._.arrows.startString),
                          "endString" in d._.arrows &&
                            t(d, d._.arrows.endString, 1))
                      break
                    case "stroke-dasharray":
                      v(d, p, f)
                      break
                    case "fill":
                      var F = b(p).match(c._ISURL)
                      if (F) {
                        B = q("pattern")
                        var G = q("image")
                        ;(B.id = c.createUUID()),
                          q(B, {
                            x: 0,
                            y: 0,
                            patternUnits: "userSpaceOnUse",
                            height: 1,
                            width: 1,
                          }),
                          q(G, { x: 0, y: 0, "xlink:href": F[1] }),
                          B.appendChild(G),
                          (function (a) {
                            c._preload(F[1], function () {
                              var b = this.offsetWidth,
                                c = this.offsetHeight
                              q(a, { width: b, height: c }),
                                q(G, { width: b, height: c }),
                                d.paper.safari()
                            })
                          })(B),
                          d.paper.defs.appendChild(B),
                          q(i, { fill: "url(#" + B.id + ")" }),
                          (d.pattern = B),
                          d.pattern && s(d)
                        break
                      }
                      var H = c.getRGB(p)
                      if (H.error) {
                        if (
                          ("circle" == d.type ||
                            "ellipse" == d.type ||
                            "r" != b(p).charAt()) &&
                          r(d, p)
                        ) {
                          if ("opacity" in k || "fill-opacity" in k) {
                            var I = c._g.doc.getElementById(
                              i.getAttribute("fill").replace(/^url\(#|\)$/g, l)
                            )
                            if (I) {
                              var J = I.getElementsByTagName("stop")
                              q(J[J.length - 1], {
                                "stop-opacity":
                                  ("opacity" in k ? k.opacity : 1) *
                                  ("fill-opacity" in k ? k["fill-opacity"] : 1),
                              })
                            }
                          }
                          ;(k.gradient = p), (k.fill = "none")
                          break
                        }
                      } else
                        delete f.gradient,
                          delete k.gradient,
                          !c.is(k.opacity, "undefined") &&
                            c.is(f.opacity, "undefined") &&
                            q(i, { opacity: k.opacity }),
                          !c.is(k["fill-opacity"], "undefined") &&
                            c.is(f["fill-opacity"], "undefined") &&
                            q(i, { "fill-opacity": k["fill-opacity"] })
                      H[a]("opacity") &&
                        q(i, {
                          "fill-opacity":
                            H.opacity > 1 ? H.opacity / 100 : H.opacity,
                        })
                    case "stroke":
                      ;(H = c.getRGB(p)),
                        i.setAttribute(o, H.hex),
                        "stroke" == o &&
                          H[a]("opacity") &&
                          q(i, {
                            "stroke-opacity":
                              H.opacity > 1 ? H.opacity / 100 : H.opacity,
                          }),
                        "stroke" == o &&
                          d._.arrows &&
                          ("startString" in d._.arrows &&
                            t(d, d._.arrows.startString),
                          "endString" in d._.arrows &&
                            t(d, d._.arrows.endString, 1))
                      break
                    case "gradient":
                      ;("circle" == d.type ||
                        "ellipse" == d.type ||
                        "r" != b(p).charAt()) &&
                        r(d, p)
                      break
                    case "opacity":
                      k.gradient &&
                        !k[a]("stroke-opacity") &&
                        q(i, { "stroke-opacity": p > 1 ? p / 100 : p })
                    case "fill-opacity":
                      if (k.gradient) {
                        ;(I = c._g.doc.getElementById(
                          i.getAttribute("fill").replace(/^url\(#|\)$/g, l)
                        )),
                          I &&
                            ((J = I.getElementsByTagName("stop")),
                            q(J[J.length - 1], { "stop-opacity": p }))
                        break
                      }
                    default:
                      "font-size" == o && (p = e(p, 10) + "px")
                      var K = o.replace(/(\-.)/g, function (a) {
                        return a.substring(1).toUpperCase()
                      })
                      ;(i.style[K] = p), (d._.dirty = 1), i.setAttribute(o, p)
                  }
                }
              x(d, f), (i.style.visibility = m)
            },
            x = function (d, f) {
              if (
                "text" == d.type &&
                (f[a]("text") ||
                  f[a]("font") ||
                  f[a]("font-size") ||
                  f[a]("x") ||
                  f[a]("y"))
              ) {
                var g = d.attrs,
                  h = d.node,
                  i = h.firstChild
                    ? e(
                        c._g.doc.defaultView
                          .getComputedStyle(h.firstChild, l)
                          .getPropertyValue("font-size"),
                        10
                      )
                    : 10
                if (f[a]("text")) {
                  for (g.text = f.text; h.firstChild; )
                    h.removeChild(h.firstChild)
                  for (
                    var j,
                      k = b(f.text).split("\n"),
                      m = [],
                      n = 0,
                      o = k.length;
                    n < o;
                    n++
                  )
                    (j = q("tspan")),
                      n && q(j, { dy: 1.2 * i, x: g.x }),
                      j.appendChild(c._g.doc.createTextNode(k[n])),
                      h.appendChild(j),
                      (m[n] = j)
                } else
                  for (
                    m = h.getElementsByTagName("tspan"), n = 0, o = m.length;
                    n < o;
                    n++
                  )
                    n ? q(m[n], { dy: 1.2 * i, x: g.x }) : q(m[0], { dy: 0 })
                q(h, { x: g.x, y: g.y }), (d._.dirty = 1)
                var p = d._getBBox(),
                  r = g.y - (p.y + p.height / 2)
                r && c.is(r, "finite") && q(m[0], { dy: r })
              }
            },
            y = function (a) {
              return a.parentNode && "a" === a.parentNode.tagName.toLowerCase()
                ? a.parentNode
                : a
            },
            z = function (a, b) {
              ;(this[0] = this.node = a),
                (a.raphael = !0),
                (this.id = c._oid++),
                (a.raphaelid = this.id),
                (this.matrix = c.matrix()),
                (this.realPath = null),
                (this.paper = b),
                (this.attrs = this.attrs || {}),
                (this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  deg: 0,
                  dx: 0,
                  dy: 0,
                  dirty: 1,
                }),
                !b.bottom && (b.bottom = this),
                (this.prev = b.top),
                b.top && (b.top.next = this),
                (b.top = this),
                (this.next = null)
            },
            A = c.el
          ;(z.prototype = A),
            (A.constructor = z),
            (c._engine.path = function (a, b) {
              var c = q("path")
              b.canvas && b.canvas.appendChild(c)
              var d = new z(c, b)
              return (
                (d.type = "path"),
                w(d, { fill: "none", stroke: "#000", path: a }),
                d
              )
            }),
            (A.rotate = function (a, c, e) {
              if (this.removed) return this
              if (
                ((a = b(a).split(j)),
                a.length - 1 && ((c = d(a[1])), (e = d(a[2]))),
                (a = d(a[0])),
                null == e && (c = e),
                null == c || null == e)
              ) {
                var f = this.getBBox(1)
                ;(c = f.x + f.width / 2), (e = f.y + f.height / 2)
              }
              return (
                this.transform(this._.transform.concat([["r", a, c, e]])), this
              )
            }),
            (A.scale = function (a, c, e, f) {
              if (this.removed) return this
              if (
                ((a = b(a).split(j)),
                a.length - 1 && ((c = d(a[1])), (e = d(a[2])), (f = d(a[3]))),
                (a = d(a[0])),
                null == c && (c = a),
                null == f && (e = f),
                null == e || null == f)
              )
                var g = this.getBBox(1)
              return (
                (e = null == e ? g.x + g.width / 2 : e),
                (f = null == f ? g.y + g.height / 2 : f),
                this.transform(this._.transform.concat([["s", a, c, e, f]])),
                this
              )
            }),
            (A.translate = function (a, c) {
              return this.removed
                ? this
                : ((a = b(a).split(j)),
                  a.length - 1 && (c = d(a[1])),
                  (a = d(a[0]) || 0),
                  (c = +c || 0),
                  this.transform(this._.transform.concat([["t", a, c]])),
                  this)
            }),
            (A.transform = function (b) {
              var d = this._
              if (null == b) return d.transform
              if (
                (c._extractTransform(this, b),
                this.clip && q(this.clip, { transform: this.matrix.invert() }),
                this.pattern && s(this),
                this.node && q(this.node, { transform: this.matrix }),
                1 != d.sx || 1 != d.sy)
              ) {
                var e = this.attrs[a]("stroke-width")
                  ? this.attrs["stroke-width"]
                  : 1
                this.attr({ "stroke-width": e })
              }
              return this
            }),
            (A.hide = function () {
              return (
                !this.removed &&
                  this.paper.safari((this.node.style.display = "none")),
                this
              )
            }),
            (A.show = function () {
              return (
                !this.removed &&
                  this.paper.safari((this.node.style.display = "")),
                this
              )
            }),
            (A.remove = function () {
              var a = y(this.node)
              if (!this.removed && a.parentNode) {
                var b = this.paper
                b.__set__ && b.__set__.exclude(this),
                  k.unbind("raphael.*.*." + this.id),
                  this.gradient && b.defs.removeChild(this.gradient),
                  c._tear(this, b),
                  a.parentNode.removeChild(a),
                  this.removeData()
                for (var d in this)
                  this[d] =
                    "function" == typeof this[d] ? c._removedFactory(d) : null
                this.removed = !0
              }
            }),
            (A._getBBox = function () {
              if ("none" == this.node.style.display) {
                this.show()
                var a = !0
              }
              var b,
                c = !1
              this.paper.canvas.parentElement
                ? (b = this.paper.canvas.parentElement.style)
                : this.paper.canvas.parentNode &&
                  (b = this.paper.canvas.parentNode.style),
                b && "none" == b.display && ((c = !0), (b.display = ""))
              var d = {}
              try {
                d = this.node.getBBox()
              } catch (a) {
                d = {
                  x: this.node.clientLeft,
                  y: this.node.clientTop,
                  width: this.node.clientWidth,
                  height: this.node.clientHeight,
                }
              } finally {
                ;(d = d || {}), c && (b.display = "none")
              }
              return a && this.hide(), d
            }),
            (A.attr = function (b, d) {
              if (this.removed) return this
              if (null == b) {
                var e = {}
                for (var f in this.attrs)
                  this.attrs[a](f) && (e[f] = this.attrs[f])
                return (
                  e.gradient &&
                    "none" == e.fill &&
                    (e.fill = e.gradient) &&
                    delete e.gradient,
                  (e.transform = this._.transform),
                  e
                )
              }
              if (null == d && c.is(b, "string")) {
                if (
                  "fill" == b &&
                  "none" == this.attrs.fill &&
                  this.attrs.gradient
                )
                  return this.attrs.gradient
                if ("transform" == b) return this._.transform
                for (
                  var g = b.split(j), h = {}, i = 0, l = g.length;
                  i < l;
                  i++
                )
                  (b = g[i]),
                    b in this.attrs
                      ? (h[b] = this.attrs[b])
                      : c.is(this.paper.customAttributes[b], "function")
                      ? (h[b] = this.paper.customAttributes[b].def)
                      : (h[b] = c._availableAttrs[b])
                return l - 1 ? h : h[g[0]]
              }
              if (null == d && c.is(b, "array")) {
                for (h = {}, i = 0, l = b.length; i < l; i++)
                  h[b[i]] = this.attr(b[i])
                return h
              }
              if (null != d) {
                var m = {}
                m[b] = d
              } else null != b && c.is(b, "object") && (m = b)
              for (var n in m)
                k("raphael.attr." + n + "." + this.id, this, m[n])
              for (n in this.paper.customAttributes)
                if (
                  this.paper.customAttributes[a](n) &&
                  m[a](n) &&
                  c.is(this.paper.customAttributes[n], "function")
                ) {
                  var o = this.paper.customAttributes[n].apply(
                    this,
                    [].concat(m[n])
                  )
                  this.attrs[n] = m[n]
                  for (var p in o) o[a](p) && (m[p] = o[p])
                }
              return w(this, m), this
            }),
            (A.toFront = function () {
              if (this.removed) return this
              var a = y(this.node)
              a.parentNode.appendChild(a)
              var b = this.paper
              return b.top != this && c._tofront(this, b), this
            }),
            (A.toBack = function () {
              if (this.removed) return this
              var a = y(this.node),
                b = a.parentNode
              b.insertBefore(a, b.firstChild), c._toback(this, this.paper)
              this.paper
              return this
            }),
            (A.insertAfter = function (a) {
              if (this.removed || !a) return this
              var b = y(this.node),
                d = y(a.node || a[a.length - 1].node)
              return (
                d.nextSibling
                  ? d.parentNode.insertBefore(b, d.nextSibling)
                  : d.parentNode.appendChild(b),
                c._insertafter(this, a, this.paper),
                this
              )
            }),
            (A.insertBefore = function (a) {
              if (this.removed || !a) return this
              var b = y(this.node),
                d = y(a.node || a[0].node)
              return (
                d.parentNode.insertBefore(b, d),
                c._insertbefore(this, a, this.paper),
                this
              )
            }),
            (A.blur = function (a) {
              var b = this
              if (0 != +a) {
                var d = q("filter"),
                  e = q("feGaussianBlur")
                ;(b.attrs.blur = a),
                  (d.id = c.createUUID()),
                  q(e, { stdDeviation: +a || 1.5 }),
                  d.appendChild(e),
                  b.paper.defs.appendChild(d),
                  (b._blur = d),
                  q(b.node, { filter: "url(#" + d.id + ")" })
              } else
                b._blur &&
                  (b._blur.parentNode.removeChild(b._blur),
                  delete b._blur,
                  delete b.attrs.blur),
                  b.node.removeAttribute("filter")
              return b
            }),
            (c._engine.circle = function (a, b, c, d) {
              var e = q("circle")
              a.canvas && a.canvas.appendChild(e)
              var f = new z(e, a)
              return (
                (f.attrs = {
                  cx: b,
                  cy: c,
                  r: d,
                  fill: "none",
                  stroke: "#000",
                }),
                (f.type = "circle"),
                q(e, f.attrs),
                f
              )
            }),
            (c._engine.rect = function (a, b, c, d, e, f) {
              var g = q("rect")
              a.canvas && a.canvas.appendChild(g)
              var h = new z(g, a)
              return (
                (h.attrs = {
                  x: b,
                  y: c,
                  width: d,
                  height: e,
                  rx: f || 0,
                  ry: f || 0,
                  fill: "none",
                  stroke: "#000",
                }),
                (h.type = "rect"),
                q(g, h.attrs),
                h
              )
            }),
            (c._engine.ellipse = function (a, b, c, d, e) {
              var f = q("ellipse")
              a.canvas && a.canvas.appendChild(f)
              var g = new z(f, a)
              return (
                (g.attrs = {
                  cx: b,
                  cy: c,
                  rx: d,
                  ry: e,
                  fill: "none",
                  stroke: "#000",
                }),
                (g.type = "ellipse"),
                q(f, g.attrs),
                g
              )
            }),
            (c._engine.image = function (a, b, c, d, e, f) {
              var g = q("image")
              q(g, {
                x: c,
                y: d,
                width: e,
                height: f,
                preserveAspectRatio: "none",
              }),
                g.setAttributeNS(n, "href", b),
                a.canvas && a.canvas.appendChild(g)
              var h = new z(g, a)
              return (
                (h.attrs = { x: c, y: d, width: e, height: f, src: b }),
                (h.type = "image"),
                h
              )
            }),
            (c._engine.text = function (a, b, d, e) {
              var f = q("text")
              a.canvas && a.canvas.appendChild(f)
              var g = new z(f, a)
              return (
                (g.attrs = {
                  x: b,
                  y: d,
                  "text-anchor": "middle",
                  text: e,
                  "font-family": c._availableAttrs["font-family"],
                  "font-size": c._availableAttrs["font-size"],
                  stroke: "none",
                  fill: "#000",
                }),
                (g.type = "text"),
                w(g, g.attrs),
                g
              )
            }),
            (c._engine.setSize = function (a, b) {
              return (
                (this.width = a || this.width),
                (this.height = b || this.height),
                this.canvas.setAttribute("width", this.width),
                this.canvas.setAttribute("height", this.height),
                this._viewBox && this.setViewBox.apply(this, this._viewBox),
                this
              )
            }),
            (c._engine.create = function () {
              var a = c._getContainer.apply(0, arguments),
                b = a && a.container,
                d = a.x,
                e = a.y,
                f = a.width,
                g = a.height
              if (!b) throw new Error("SVG container not found.")
              var h,
                i = q("svg"),
                j = "overflow:hidden;"
              return (
                (d = d || 0),
                (e = e || 0),
                (f = f || 512),
                (g = g || 342),
                q(i, {
                  height: g,
                  version: 1.1,
                  width: f,
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                }),
                1 == b
                  ? ((i.style.cssText =
                      j + "position:absolute;left:" + d + "px;top:" + e + "px"),
                    c._g.doc.body.appendChild(i),
                    (h = 1))
                  : ((i.style.cssText = j + "position:relative"),
                    b.firstChild
                      ? b.insertBefore(i, b.firstChild)
                      : b.appendChild(i)),
                (b = new c._Paper()),
                (b.width = f),
                (b.height = g),
                (b.canvas = i),
                b.clear(),
                (b._left = b._top = 0),
                h && (b.renderfix = function () {}),
                b.renderfix(),
                b
              )
            }),
            (c._engine.setViewBox = function (a, b, c, d, e) {
              k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e])
              var f,
                h,
                i = this.getSize(),
                j = g(c / i.width, d / i.height),
                l = this.top,
                n = e ? "xMidYMid meet" : "xMinYMin"
              for (
                null == a
                  ? (this._vbSize && (j = 1),
                    delete this._vbSize,
                    (f = "0 0 " + this.width + m + this.height))
                  : ((this._vbSize = j), (f = a + m + b + m + c + m + d)),
                  q(this.canvas, { viewBox: f, preserveAspectRatio: n });
                j && l;

              )
                (h = "stroke-width" in l.attrs ? l.attrs["stroke-width"] : 1),
                  l.attr({ "stroke-width": h }),
                  (l._.dirty = 1),
                  (l._.dirtyT = 1),
                  (l = l.prev)
              return (this._viewBox = [a, b, c, d, !!e]), this
            }),
            (c.prototype.renderfix = function () {
              var a,
                b = this.canvas,
                c = b.style
              try {
                a = b.getScreenCTM() || b.createSVGMatrix()
              } catch (c) {
                a = b.createSVGMatrix()
              }
              var d = -a.e % 1,
                e = -a.f % 1
              ;(d || e) &&
                (d &&
                  ((this._left = (this._left + d) % 1),
                  (c.left = this._left + "px")),
                e &&
                  ((this._top = (this._top + e) % 1),
                  (c.top = this._top + "px")))
            }),
            (c.prototype.clear = function () {
              c.eve("raphael.clear", this)
              for (var a = this.canvas; a.firstChild; )
                a.removeChild(a.firstChild)
              ;(this.bottom = this.top = null),
                (this.desc = q("desc")).appendChild(
                  c._g.doc.createTextNode("Created with Raphaël " + c.version)
                ),
                a.appendChild(this.desc),
                a.appendChild((this.defs = q("defs")))
            }),
            (c.prototype.remove = function () {
              k("raphael.remove", this),
                this.canvas.parentNode &&
                  this.canvas.parentNode.removeChild(this.canvas)
              for (var a in this)
                this[a] =
                  "function" == typeof this[a] ? c._removedFactory(a) : null
            })
          var B = c.st
          for (var C in A)
            A[a](C) &&
              !B[a](C) &&
              (B[C] = (function (a) {
                return function () {
                  var b = arguments
                  return this.forEach(function (c) {
                    c[a].apply(c, b)
                  })
                }
              })(C))
        }
      })(),
      (function () {
        if (c.vml) {
          var a = "hasOwnProperty",
            b = String,
            d = parseFloat,
            e = Math,
            f = e.round,
            g = e.max,
            h = e.min,
            i = e.abs,
            j = /[, ]+/,
            k = c.eve,
            l = " ",
            m = "",
            n = {
              M: "m",
              L: "l",
              C: "c",
              Z: "x",
              m: "t",
              l: "r",
              c: "v",
              z: "x",
            },
            o = /([clmz]),?([^clmz]*)/gi,
            p = / progid:\S+Blur\([^\)]+\)/g,
            q = /-?[^,\s-]+/g,
            r =
              "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
            s = 21600,
            t = { path: 1, rect: 1, image: 1 },
            u = { circle: 1, ellipse: 1 },
            v = function (a) {
              var d = /[ahqstv]/gi,
                e = c._pathToAbsolute
              if (
                (b(a).match(d) && (e = c._path2curve),
                (d = /[clmz]/g),
                e == c._pathToAbsolute && !b(a).match(d))
              ) {
                var g = b(a).replace(o, function (a, b, c) {
                  var d = [],
                    e = "m" == b.toLowerCase(),
                    g = n[b]
                  return (
                    c.replace(q, function (a) {
                      e &&
                        2 == d.length &&
                        ((g += d + n["m" == b ? "l" : "L"]), (d = [])),
                        d.push(f(a * s))
                    }),
                    g + d
                  )
                })
                return g
              }
              var h,
                i,
                j = e(a)
              g = []
              for (var k = 0, p = j.length; k < p; k++) {
                ;(h = j[k]), (i = j[k][0].toLowerCase()), "z" == i && (i = "x")
                for (var r = 1, t = h.length; r < t; r++)
                  i += f(h[r] * s) + (r != t - 1 ? "," : m)
                g.push(i)
              }
              return g.join(l)
            },
            w = function (a, b, d) {
              var e = c.matrix()
              return e.rotate(-a, 0.5, 0.5), { dx: e.x(b, d), dy: e.y(b, d) }
            },
            x = function (a, b, c, d, e, f) {
              var g = a._,
                h = a.matrix,
                j = g.fillpos,
                k = a.node,
                m = k.style,
                n = 1,
                o = "",
                p = s / b,
                q = s / c
              if (((m.visibility = "hidden"), b && c)) {
                if (
                  ((k.coordsize = i(p) + l + i(q)),
                  (m.rotation = f * (b * c < 0 ? -1 : 1)),
                  f)
                ) {
                  var r = w(f, d, e)
                  ;(d = r.dx), (e = r.dy)
                }
                if (
                  (b < 0 && (o += "x"),
                  c < 0 && (o += " y") && (n = -1),
                  (m.flip = o),
                  (k.coordorigin = d * -p + l + e * -q),
                  j || g.fillsize)
                ) {
                  var t = k.getElementsByTagName("fill")
                  ;(t = t && t[0]),
                    k.removeChild(t),
                    j &&
                      ((r = w(f, h.x(j[0], j[1]), h.y(j[0], j[1]))),
                      (t.position = r.dx * n + l + r.dy * n)),
                    g.fillsize &&
                      (t.size =
                        g.fillsize[0] * i(b) + l + g.fillsize[1] * i(c)),
                    k.appendChild(t)
                }
                m.visibility = "visible"
              }
            }
          c.toString = function () {
            return (
              "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " +
              this.version
            )
          }
          var y = function (a, c, d) {
              for (
                var e = b(c).toLowerCase().split("-"),
                  f = d ? "end" : "start",
                  g = e.length,
                  h = "classic",
                  i = "medium",
                  j = "medium";
                g--;

              )
                switch (e[g]) {
                  case "block":
                  case "classic":
                  case "oval":
                  case "diamond":
                  case "open":
                  case "none":
                    h = e[g]
                    break
                  case "wide":
                  case "narrow":
                    j = e[g]
                    break
                  case "long":
                  case "short":
                    i = e[g]
                }
              var k = a.node.getElementsByTagName("stroke")[0]
              ;(k[f + "arrow"] = h),
                (k[f + "arrowlength"] = i),
                (k[f + "arrowwidth"] = j)
            },
            z = function (e, i) {
              e.attrs = e.attrs || {}
              var k = e.node,
                n = e.attrs,
                o = k.style,
                p =
                  t[e.type] &&
                  (i.x != n.x ||
                    i.y != n.y ||
                    i.width != n.width ||
                    i.height != n.height ||
                    i.cx != n.cx ||
                    i.cy != n.cy ||
                    i.rx != n.rx ||
                    i.ry != n.ry ||
                    i.r != n.r),
                q =
                  u[e.type] &&
                  (n.cx != i.cx ||
                    n.cy != i.cy ||
                    n.r != i.r ||
                    n.rx != i.rx ||
                    n.ry != i.ry),
                r = e
              for (var w in i) i[a](w) && (n[w] = i[w])
              if (
                (p && ((n.path = c._getPath[e.type](e)), (e._.dirty = 1)),
                i.href && (k.href = i.href),
                i.title && (k.title = i.title),
                i.target && (k.target = i.target),
                i.cursor && (o.cursor = i.cursor),
                "blur" in i && e.blur(i.blur),
                ((i.path && "path" == e.type) || p) &&
                  ((k.path = v(
                    ~b(n.path).toLowerCase().indexOf("r")
                      ? c._pathToAbsolute(n.path)
                      : n.path
                  )),
                  (e._.dirty = 1),
                  "image" == e.type &&
                    ((e._.fillpos = [n.x, n.y]),
                    (e._.fillsize = [n.width, n.height]),
                    x(e, 1, 1, 0, 0, 0))),
                "transform" in i && e.transform(i.transform),
                q)
              ) {
                var z = +n.cx,
                  B = +n.cy,
                  C = +n.rx || +n.r || 0,
                  E = +n.ry || +n.r || 0
                ;(k.path = c.format(
                  "ar{0},{1},{2},{3},{4},{1},{4},{1}x",
                  f((z - C) * s),
                  f((B - E) * s),
                  f((z + C) * s),
                  f((B + E) * s),
                  f(z * s)
                )),
                  (e._.dirty = 1)
              }
              if ("clip-rect" in i) {
                var F = b(i["clip-rect"]).split(j)
                if (4 == F.length) {
                  ;(F[2] = +F[2] + +F[0]), (F[3] = +F[3] + +F[1])
                  var G = k.clipRect || c._g.doc.createElement("div"),
                    H = G.style
                  ;(H.clip = c.format("rect({1}px {2}px {3}px {0}px)", F)),
                    k.clipRect ||
                      ((H.position = "absolute"),
                      (H.top = 0),
                      (H.left = 0),
                      (H.width = e.paper.width + "px"),
                      (H.height = e.paper.height + "px"),
                      k.parentNode.insertBefore(G, k),
                      G.appendChild(k),
                      (k.clipRect = G))
                }
                i["clip-rect"] ||
                  (k.clipRect && (k.clipRect.style.clip = "auto"))
              }
              if (e.textpath) {
                var I = e.textpath.style
                i.font && (I.font = i.font),
                  i["font-family"] &&
                    (I.fontFamily =
                      '"' +
                      i["font-family"]
                        .split(",")[0]
                        .replace(/^['"]+|['"]+$/g, m) +
                      '"'),
                  i["font-size"] && (I.fontSize = i["font-size"]),
                  i["font-weight"] && (I.fontWeight = i["font-weight"]),
                  i["font-style"] && (I.fontStyle = i["font-style"])
              }
              if (
                ("arrow-start" in i && y(r, i["arrow-start"]),
                "arrow-end" in i && y(r, i["arrow-end"], 1),
                null != i.opacity ||
                  null != i["stroke-width"] ||
                  null != i.fill ||
                  null != i.src ||
                  null != i.stroke ||
                  null != i["stroke-width"] ||
                  null != i["stroke-opacity"] ||
                  null != i["fill-opacity"] ||
                  null != i["stroke-dasharray"] ||
                  null != i["stroke-miterlimit"] ||
                  null != i["stroke-linejoin"] ||
                  null != i["stroke-linecap"])
              ) {
                var J = k.getElementsByTagName("fill")
                if (
                  ((J = J && J[0]),
                  !J && (J = D("fill")),
                  "image" == e.type && i.src && (J.src = i.src),
                  i.fill && (J.on = !0),
                  (null != J.on && "none" != i.fill && null !== i.fill) ||
                    (J.on = !1),
                  J.on && i.fill)
                ) {
                  var K = b(i.fill).match(c._ISURL)
                  if (K) {
                    J.parentNode == k && k.removeChild(J),
                      (J.rotate = !0),
                      (J.src = K[1]),
                      (J.type = "tile")
                    var L = e.getBBox(1)
                    ;(J.position = L.x + l + L.y),
                      (e._.fillpos = [L.x, L.y]),
                      c._preload(K[1], function () {
                        e._.fillsize = [this.offsetWidth, this.offsetHeight]
                      })
                  } else
                    (J.color = c.getRGB(i.fill).hex),
                      (J.src = m),
                      (J.type = "solid"),
                      c.getRGB(i.fill).error &&
                        (r.type in { circle: 1, ellipse: 1 } ||
                          "r" != b(i.fill).charAt()) &&
                        A(r, i.fill, J) &&
                        ((n.fill = "none"),
                        (n.gradient = i.fill),
                        (J.rotate = !1))
                }
                if ("fill-opacity" in i || "opacity" in i) {
                  var M =
                    ((+n["fill-opacity"] + 1 || 2) - 1) *
                    ((+n.opacity + 1 || 2) - 1) *
                    ((+c.getRGB(i.fill).o + 1 || 2) - 1)
                  ;(M = h(g(M, 0), 1)),
                    (J.opacity = M),
                    J.src && (J.color = "none")
                }
                k.appendChild(J)
                var N =
                    k.getElementsByTagName("stroke") &&
                    k.getElementsByTagName("stroke")[0],
                  O = !1
                !N && (O = N = D("stroke")),
                  ((i.stroke && "none" != i.stroke) ||
                    i["stroke-width"] ||
                    null != i["stroke-opacity"] ||
                    i["stroke-dasharray"] ||
                    i["stroke-miterlimit"] ||
                    i["stroke-linejoin"] ||
                    i["stroke-linecap"]) &&
                    (N.on = !0),
                  ("none" == i.stroke ||
                    null === i.stroke ||
                    null == N.on ||
                    0 == i.stroke ||
                    0 == i["stroke-width"]) &&
                    (N.on = !1)
                var P = c.getRGB(i.stroke)
                N.on && i.stroke && (N.color = P.hex),
                  (M =
                    ((+n["stroke-opacity"] + 1 || 2) - 1) *
                    ((+n.opacity + 1 || 2) - 1) *
                    ((+P.o + 1 || 2) - 1))
                var Q = 0.75 * (d(i["stroke-width"]) || 1)
                if (
                  ((M = h(g(M, 0), 1)),
                  null == i["stroke-width"] && (Q = n["stroke-width"]),
                  i["stroke-width"] && (N.weight = Q),
                  Q && Q < 1 && (M *= Q) && (N.weight = 1),
                  (N.opacity = M),
                  i["stroke-linejoin"] &&
                    (N.joinstyle = i["stroke-linejoin"] || "miter"),
                  (N.miterlimit = i["stroke-miterlimit"] || 8),
                  i["stroke-linecap"] &&
                    (N.endcap =
                      "butt" == i["stroke-linecap"]
                        ? "flat"
                        : "square" == i["stroke-linecap"]
                        ? "square"
                        : "round"),
                  "stroke-dasharray" in i)
                ) {
                  var R = {
                    "-": "shortdash",
                    ".": "shortdot",
                    "-.": "shortdashdot",
                    "-..": "shortdashdotdot",
                    ". ": "dot",
                    "- ": "dash",
                    "--": "longdash",
                    "- .": "dashdot",
                    "--.": "longdashdot",
                    "--..": "longdashdotdot",
                  }
                  N.dashstyle = R[a](i["stroke-dasharray"])
                    ? R[i["stroke-dasharray"]]
                    : m
                }
                O && k.appendChild(N)
              }
              if ("text" == r.type) {
                r.paper.canvas.style.display = m
                var S = r.paper.span,
                  T = n.font && n.font.match(/\d+(?:\.\d*)?(?=px)/)
                ;(o = S.style),
                  n.font && (o.font = n.font),
                  n["font-family"] && (o.fontFamily = n["font-family"]),
                  n["font-weight"] && (o.fontWeight = n["font-weight"]),
                  n["font-style"] && (o.fontStyle = n["font-style"]),
                  (T = d(n["font-size"] || (T && T[0])) || 10),
                  (o.fontSize = 100 * T + "px"),
                  r.textpath.string &&
                    (S.innerHTML = b(r.textpath.string)
                      .replace(/</g, "&#60;")
                      .replace(/&/g, "&#38;")
                      .replace(/\n/g, "<br>"))
                var U = S.getBoundingClientRect()
                ;(r.W = n.w = (U.right - U.left) / 100),
                  (r.H = n.h = (U.bottom - U.top) / 100),
                  (r.X = n.x),
                  (r.Y = n.y + r.H / 2),
                  ("x" in i || "y" in i) &&
                    (r.path.v = c.format(
                      "m{0},{1}l{2},{1}",
                      f(n.x * s),
                      f(n.y * s),
                      f(n.x * s) + 1
                    ))
                for (
                  var V = [
                      "x",
                      "y",
                      "text",
                      "font",
                      "font-family",
                      "font-weight",
                      "font-style",
                      "font-size",
                    ],
                    W = 0,
                    X = V.length;
                  W < X;
                  W++
                )
                  if (V[W] in i) {
                    r._.dirty = 1
                    break
                  }
                switch (n["text-anchor"]) {
                  case "start":
                    ;(r.textpath.style["v-text-align"] = "left"),
                      (r.bbx = r.W / 2)
                    break
                  case "end":
                    ;(r.textpath.style["v-text-align"] = "right"),
                      (r.bbx = -r.W / 2)
                    break
                  default:
                    ;(r.textpath.style["v-text-align"] = "center"), (r.bbx = 0)
                }
                r.textpath.style["v-text-kern"] = !0
              }
            },
            A = function (a, f, g) {
              a.attrs = a.attrs || {}
              var h = (a.attrs, Math.pow),
                i = "linear",
                j = ".5 .5"
              if (
                ((a.attrs.gradient = f),
                (f = b(f).replace(c._radial_gradient, function (a, b, c) {
                  return (
                    (i = "radial"),
                    b &&
                      c &&
                      ((b = d(b)),
                      (c = d(c)),
                      h(b - 0.5, 2) + h(c - 0.5, 2) > 0.25 &&
                        (c =
                          e.sqrt(0.25 - h(b - 0.5, 2)) * (2 * (c > 0.5) - 1) +
                          0.5),
                      (j = b + l + c)),
                    m
                  )
                })),
                (f = f.split(/\s*\-\s*/)),
                "linear" == i)
              ) {
                var k = f.shift()
                if (((k = -d(k)), isNaN(k))) return null
              }
              var n = c._parseDots(f)
              if (!n) return null
              if (((a = a.shape || a.node), n.length)) {
                a.removeChild(g),
                  (g.on = !0),
                  (g.method = "none"),
                  (g.color = n[0].color),
                  (g.color2 = n[n.length - 1].color)
                for (var o = [], p = 0, q = n.length; p < q; p++)
                  n[p].offset && o.push(n[p].offset + l + n[p].color)
                ;(g.colors = o.length ? o.join() : "0% " + g.color),
                  "radial" == i
                    ? ((g.type = "gradientTitle"),
                      (g.focus = "100%"),
                      (g.focussize = "0 0"),
                      (g.focusposition = j),
                      (g.angle = 0))
                    : ((g.type = "gradient"), (g.angle = (270 - k) % 360)),
                  a.appendChild(g)
              }
              return 1
            },
            B = function (a, b) {
              ;(this[0] = this.node = a),
                (a.raphael = !0),
                (this.id = c._oid++),
                (a.raphaelid = this.id),
                (this.X = 0),
                (this.Y = 0),
                (this.attrs = {}),
                (this.paper = b),
                (this.matrix = c.matrix()),
                (this._ = {
                  transform: [],
                  sx: 1,
                  sy: 1,
                  dx: 0,
                  dy: 0,
                  deg: 0,
                  dirty: 1,
                  dirtyT: 1,
                }),
                !b.bottom && (b.bottom = this),
                (this.prev = b.top),
                b.top && (b.top.next = this),
                (b.top = this),
                (this.next = null)
            },
            C = c.el
          ;(B.prototype = C),
            (C.constructor = B),
            (C.transform = function (a) {
              if (null == a) return this._.transform
              var d,
                e = this.paper._viewBoxShift,
                f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : m
              e &&
                (d = a = b(a).replace(/\.{3}|\u2026/g, this._.transform || m)),
                c._extractTransform(this, f + a)
              var g,
                h = this.matrix.clone(),
                i = this.skew,
                j = this.node,
                k = ~b(this.attrs.fill).indexOf("-"),
                n = !b(this.attrs.fill).indexOf("url(")
              if ((h.translate(1, 1), n || k || "image" == this.type))
                if (
                  ((i.matrix = "1 0 0 1"),
                  (i.offset = "0 0"),
                  (g = h.split()),
                  (k && g.noRotation) || !g.isSimple)
                ) {
                  j.style.filter = h.toFilter()
                  var o = this.getBBox(),
                    p = this.getBBox(1),
                    q = o.x - p.x,
                    r = o.y - p.y
                  ;(j.coordorigin = q * -s + l + r * -s), x(this, 1, 1, q, r, 0)
                } else
                  (j.style.filter = m),
                    x(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate)
              else
                (j.style.filter = m), (i.matrix = b(h)), (i.offset = h.offset())
              return (
                null !== d &&
                  ((this._.transform = d), c._extractTransform(this, d)),
                this
              )
            }),
            (C.rotate = function (a, c, e) {
              if (this.removed) return this
              if (null != a) {
                if (
                  ((a = b(a).split(j)),
                  a.length - 1 && ((c = d(a[1])), (e = d(a[2]))),
                  (a = d(a[0])),
                  null == e && (c = e),
                  null == c || null == e)
                ) {
                  var f = this.getBBox(1)
                  ;(c = f.x + f.width / 2), (e = f.y + f.height / 2)
                }
                return (
                  (this._.dirtyT = 1),
                  this.transform(this._.transform.concat([["r", a, c, e]])),
                  this
                )
              }
            }),
            (C.translate = function (a, c) {
              return this.removed
                ? this
                : ((a = b(a).split(j)),
                  a.length - 1 && (c = d(a[1])),
                  (a = d(a[0]) || 0),
                  (c = +c || 0),
                  this._.bbox && ((this._.bbox.x += a), (this._.bbox.y += c)),
                  this.transform(this._.transform.concat([["t", a, c]])),
                  this)
            }),
            (C.scale = function (a, c, e, f) {
              if (this.removed) return this
              if (
                ((a = b(a).split(j)),
                a.length - 1 &&
                  ((c = d(a[1])),
                  (e = d(a[2])),
                  (f = d(a[3])),
                  isNaN(e) && (e = null),
                  isNaN(f) && (f = null)),
                (a = d(a[0])),
                null == c && (c = a),
                null == f && (e = f),
                null == e || null == f)
              )
                var g = this.getBBox(1)
              return (
                (e = null == e ? g.x + g.width / 2 : e),
                (f = null == f ? g.y + g.height / 2 : f),
                this.transform(this._.transform.concat([["s", a, c, e, f]])),
                (this._.dirtyT = 1),
                this
              )
            }),
            (C.hide = function () {
              return !this.removed && (this.node.style.display = "none"), this
            }),
            (C.show = function () {
              return !this.removed && (this.node.style.display = m), this
            }),
            (C.auxGetBBox = c.el.getBBox),
            (C.getBBox = function () {
              var a = this.auxGetBBox()
              if (this.paper && this.paper._viewBoxShift) {
                var b = {},
                  c = 1 / this.paper._viewBoxShift.scale
                return (
                  (b.x = a.x - this.paper._viewBoxShift.dx),
                  (b.x *= c),
                  (b.y = a.y - this.paper._viewBoxShift.dy),
                  (b.y *= c),
                  (b.width = a.width * c),
                  (b.height = a.height * c),
                  (b.x2 = b.x + b.width),
                  (b.y2 = b.y + b.height),
                  b
                )
              }
              return a
            }),
            (C._getBBox = function () {
              return this.removed
                ? {}
                : {
                    x: this.X + (this.bbx || 0) - this.W / 2,
                    y: this.Y - this.H,
                    width: this.W,
                    height: this.H,
                  }
            }),
            (C.remove = function () {
              if (!this.removed && this.node.parentNode) {
                this.paper.__set__ && this.paper.__set__.exclude(this),
                  c.eve.unbind("raphael.*.*." + this.id),
                  c._tear(this, this.paper),
                  this.node.parentNode.removeChild(this.node),
                  this.shape && this.shape.parentNode.removeChild(this.shape)
                for (var a in this)
                  this[a] =
                    "function" == typeof this[a] ? c._removedFactory(a) : null
                this.removed = !0
              }
            }),
            (C.attr = function (b, d) {
              if (this.removed) return this
              if (null == b) {
                var e = {}
                for (var f in this.attrs)
                  this.attrs[a](f) && (e[f] = this.attrs[f])
                return (
                  e.gradient &&
                    "none" == e.fill &&
                    (e.fill = e.gradient) &&
                    delete e.gradient,
                  (e.transform = this._.transform),
                  e
                )
              }
              if (null == d && c.is(b, "string")) {
                if (
                  "fill" == b &&
                  "none" == this.attrs.fill &&
                  this.attrs.gradient
                )
                  return this.attrs.gradient
                for (
                  var g = b.split(j), h = {}, i = 0, l = g.length;
                  i < l;
                  i++
                )
                  (b = g[i]),
                    b in this.attrs
                      ? (h[b] = this.attrs[b])
                      : c.is(this.paper.customAttributes[b], "function")
                      ? (h[b] = this.paper.customAttributes[b].def)
                      : (h[b] = c._availableAttrs[b])
                return l - 1 ? h : h[g[0]]
              }
              if (this.attrs && null == d && c.is(b, "array")) {
                for (h = {}, i = 0, l = b.length; i < l; i++)
                  h[b[i]] = this.attr(b[i])
                return h
              }
              var m
              null != d && ((m = {}), (m[b] = d)),
                null == d && c.is(b, "object") && (m = b)
              for (var n in m)
                k("raphael.attr." + n + "." + this.id, this, m[n])
              if (m) {
                for (n in this.paper.customAttributes)
                  if (
                    this.paper.customAttributes[a](n) &&
                    m[a](n) &&
                    c.is(this.paper.customAttributes[n], "function")
                  ) {
                    var o = this.paper.customAttributes[n].apply(
                      this,
                      [].concat(m[n])
                    )
                    this.attrs[n] = m[n]
                    for (var p in o) o[a](p) && (m[p] = o[p])
                  }
                m.text &&
                  "text" == this.type &&
                  (this.textpath.string = m.text),
                  z(this, m)
              }
              return this
            }),
            (C.toFront = function () {
              return (
                !this.removed && this.node.parentNode.appendChild(this.node),
                this.paper &&
                  this.paper.top != this &&
                  c._tofront(this, this.paper),
                this
              )
            }),
            (C.toBack = function () {
              return this.removed
                ? this
                : (this.node.parentNode.firstChild != this.node &&
                    (this.node.parentNode.insertBefore(
                      this.node,
                      this.node.parentNode.firstChild
                    ),
                    c._toback(this, this.paper)),
                  this)
            }),
            (C.insertAfter = function (a) {
              return this.removed
                ? this
                : (a.constructor == c.st.constructor && (a = a[a.length - 1]),
                  a.node.nextSibling
                    ? a.node.parentNode.insertBefore(
                        this.node,
                        a.node.nextSibling
                      )
                    : a.node.parentNode.appendChild(this.node),
                  c._insertafter(this, a, this.paper),
                  this)
            }),
            (C.insertBefore = function (a) {
              return this.removed
                ? this
                : (a.constructor == c.st.constructor && (a = a[0]),
                  a.node.parentNode.insertBefore(this.node, a.node),
                  c._insertbefore(this, a, this.paper),
                  this)
            }),
            (C.blur = function (a) {
              var b = this.node.runtimeStyle,
                d = b.filter
              return (
                (d = d.replace(p, m)),
                0 != +a
                  ? ((this.attrs.blur = a),
                    (b.filter =
                      d +
                      l +
                      " progid:DXImageTransform.Microsoft.Blur(pixelradius=" +
                      (+a || 1.5) +
                      ")"),
                    (b.margin = c.format("-{0}px 0 0 -{0}px", f(+a || 1.5))))
                  : ((b.filter = d), (b.margin = 0), delete this.attrs.blur),
                this
              )
            }),
            (c._engine.path = function (a, b) {
              var c = D("shape")
              ;(c.style.cssText = r),
                (c.coordsize = s + l + s),
                (c.coordorigin = b.coordorigin)
              var d = new B(c, b),
                e = { fill: "none", stroke: "#000" }
              a && (e.path = a),
                (d.type = "path"),
                (d.path = []),
                (d.Path = m),
                z(d, e),
                b.canvas.appendChild(c)
              var f = D("skew")
              return (
                (f.on = !0), c.appendChild(f), (d.skew = f), d.transform(m), d
              )
            }),
            (c._engine.rect = function (a, b, d, e, f, g) {
              var h = c._rectPath(b, d, e, f, g),
                i = a.path(h),
                j = i.attrs
              return (
                (i.X = j.x = b),
                (i.Y = j.y = d),
                (i.W = j.width = e),
                (i.H = j.height = f),
                (j.r = g),
                (j.path = h),
                (i.type = "rect"),
                i
              )
            }),
            (c._engine.ellipse = function (a, b, c, d, e) {
              var f = a.path()
              f.attrs
              return (
                (f.X = b - d),
                (f.Y = c - e),
                (f.W = 2 * d),
                (f.H = 2 * e),
                (f.type = "ellipse"),
                z(f, { cx: b, cy: c, rx: d, ry: e }),
                f
              )
            }),
            (c._engine.circle = function (a, b, c, d) {
              var e = a.path()
              e.attrs
              return (
                (e.X = b - d),
                (e.Y = c - d),
                (e.W = e.H = 2 * d),
                (e.type = "circle"),
                z(e, { cx: b, cy: c, r: d }),
                e
              )
            }),
            (c._engine.image = function (a, b, d, e, f, g) {
              var h = c._rectPath(d, e, f, g),
                i = a.path(h).attr({ stroke: "none" }),
                j = i.attrs,
                k = i.node,
                l = k.getElementsByTagName("fill")[0]
              return (
                (j.src = b),
                (i.X = j.x = d),
                (i.Y = j.y = e),
                (i.W = j.width = f),
                (i.H = j.height = g),
                (j.path = h),
                (i.type = "image"),
                l.parentNode == k && k.removeChild(l),
                (l.rotate = !0),
                (l.src = b),
                (l.type = "tile"),
                (i._.fillpos = [d, e]),
                (i._.fillsize = [f, g]),
                k.appendChild(l),
                x(i, 1, 1, 0, 0, 0),
                i
              )
            }),
            (c._engine.text = function (a, d, e, g) {
              var h = D("shape"),
                i = D("path"),
                j = D("textpath")
              ;(d = d || 0),
                (e = e || 0),
                (g = g || ""),
                (i.v = c.format(
                  "m{0},{1}l{2},{1}",
                  f(d * s),
                  f(e * s),
                  f(d * s) + 1
                )),
                (i.textpathok = !0),
                (j.string = b(g)),
                (j.on = !0),
                (h.style.cssText = r),
                (h.coordsize = s + l + s),
                (h.coordorigin = "0 0")
              var k = new B(h, a),
                n = {
                  fill: "#000",
                  stroke: "none",
                  font: c._availableAttrs.font,
                  text: g,
                }
              ;(k.shape = h),
                (k.path = i),
                (k.textpath = j),
                (k.type = "text"),
                (k.attrs.text = b(g)),
                (k.attrs.x = d),
                (k.attrs.y = e),
                (k.attrs.w = 1),
                (k.attrs.h = 1),
                z(k, n),
                h.appendChild(j),
                h.appendChild(i),
                a.canvas.appendChild(h)
              var o = D("skew")
              return (
                (o.on = !0), h.appendChild(o), (k.skew = o), k.transform(m), k
              )
            }),
            (c._engine.setSize = function (a, b) {
              var d = this.canvas.style
              return (
                (this.width = a),
                (this.height = b),
                a == +a && (a += "px"),
                b == +b && (b += "px"),
                (d.width = a),
                (d.height = b),
                (d.clip = "rect(0 " + a + " " + b + " 0)"),
                this._viewBox &&
                  c._engine.setViewBox.apply(this, this._viewBox),
                this
              )
            }),
            (c._engine.setViewBox = function (a, b, d, e, f) {
              c.eve("raphael.setViewBox", this, this._viewBox, [a, b, d, e, f])
              var g,
                h,
                i = this.getSize(),
                j = i.width,
                k = i.height
              return (
                f &&
                  ((g = k / e),
                  (h = j / d),
                  d * g < j && (a -= (j - d * g) / 2 / g),
                  e * h < k && (b -= (k - e * h) / 2 / h)),
                (this._viewBox = [a, b, d, e, !!f]),
                (this._viewBoxShift = { dx: -a, dy: -b, scale: i }),
                this.forEach(function (a) {
                  a.transform("...")
                }),
                this
              )
            })
          var D
          ;(c._engine.initWin = function (a) {
            var b = a.document
            b.styleSheets.length < 31
              ? b
                  .createStyleSheet()
                  .addRule(".rvml", "behavior:url(#default#VML)")
              : b.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)")
            try {
              !b.namespaces.rvml &&
                b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                (D = function (a) {
                  return b.createElement("<rvml:" + a + ' class="rvml">')
                })
            } catch (a) {
              D = function (a) {
                return b.createElement(
                  "<" +
                    a +
                    ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'
                )
              }
            }
          }),
            c._engine.initWin(c._g.win),
            (c._engine.create = function () {
              var a = c._getContainer.apply(0, arguments),
                b = a.container,
                d = a.height,
                e = a.width,
                f = a.x,
                g = a.y
              if (!b) throw new Error("VML container not found.")
              var h = new c._Paper(),
                i = (h.canvas = c._g.doc.createElement("div")),
                j = i.style
              return (
                (f = f || 0),
                (g = g || 0),
                (e = e || 512),
                (d = d || 342),
                (h.width = e),
                (h.height = d),
                e == +e && (e += "px"),
                d == +d && (d += "px"),
                (h.coordsize = 216e5 + l + 216e5),
                (h.coordorigin = "0 0"),
                (h.span = c._g.doc.createElement("span")),
                (h.span.style.cssText =
                  "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;"),
                i.appendChild(h.span),
                (j.cssText = c.format(
                  "top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",
                  e,
                  d
                )),
                1 == b
                  ? (c._g.doc.body.appendChild(i),
                    (j.left = f + "px"),
                    (j.top = g + "px"),
                    (j.position = "absolute"))
                  : b.firstChild
                  ? b.insertBefore(i, b.firstChild)
                  : b.appendChild(i),
                (h.renderfix = function () {}),
                h
              )
            }),
            (c.prototype.clear = function () {
              c.eve("raphael.clear", this),
                (this.canvas.innerHTML = m),
                (this.span = c._g.doc.createElement("span")),
                (this.span.style.cssText =
                  "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"),
                this.canvas.appendChild(this.span),
                (this.bottom = this.top = null)
            }),
            (c.prototype.remove = function () {
              c.eve("raphael.remove", this),
                this.canvas.parentNode.removeChild(this.canvas)
              for (var a in this)
                this[a] =
                  "function" == typeof this[a] ? c._removedFactory(a) : null
              return !0
            })
          var E = c.st
          for (var F in C)
            C[a](F) &&
              !E[a](F) &&
              (E[F] = (function (a) {
                return function () {
                  var b = arguments
                  return this.forEach(function (c) {
                    c[a].apply(c, b)
                  })
                }
              })(F))
        }
      })(),
      B.was ? (A.win.Raphael = c) : (Raphael = c),
      "object" == typeof exports && (module.exports = c),
      c
    )
  }),
  function () {
    var a,
      b,
      c,
      d,
      e = [].slice,
      f = function (a, b) {
        return function () {
          return a.apply(b, arguments)
        }
      },
      g = {}.hasOwnProperty,
      h = function (a, b) {
        function c() {
          this.constructor = a
        }
        for (var d in b) g.call(b, d) && (a[d] = b[d])
        return (
          (c.prototype = b.prototype),
          (a.prototype = new c()),
          (a.__super__ = b.prototype),
          a
        )
      },
      i =
        [].indexOf ||
        function (a) {
          for (var b = 0, c = this.length; b < c; b++)
            if (b in this && this[b] === a) return b
          return -1
        }
    ;(b = window.Morris = {}),
      (a = jQuery),
      (b.EventEmitter = (function () {
        function a() {}
        return (
          (a.prototype.on = function (a, b) {
            return (
              null == this.handlers && (this.handlers = {}),
              null == this.handlers[a] && (this.handlers[a] = []),
              this.handlers[a].push(b),
              this
            )
          }),
          (a.prototype.fire = function () {
            var a, b, c, d, f, g, h
            if (
              ((c = arguments[0]),
              (a = 2 <= arguments.length ? e.call(arguments, 1) : []),
              null != this.handlers && null != this.handlers[c])
            ) {
              for (
                g = this.handlers[c], h = [], d = 0, f = g.length;
                d < f;
                d++
              )
                (b = g[d]), h.push(b.apply(null, a))
              return h
            }
          }),
          a
        )
      })()),
      (b.commas = function (a) {
        var b, c, d, e
        return null != a
          ? ((d = a < 0 ? "-" : ""),
            (b = Math.abs(a)),
            (c = Math.floor(b).toFixed(0)),
            (d += c.replace(/(?=(?:\d{3})+$)(?!^)/g, ",")),
            (e = b.toString()),
            e.length > c.length && (d += e.slice(c.length)),
            d)
          : "-"
      }),
      (b.pad2 = function (a) {
        return (a < 10 ? "0" : "") + a
      }),
      (b.Grid = (function (c) {
        function d(b) {
          ;(this.hasToShow = f(this.hasToShow, this)),
            (this.resizeHandler = f(this.resizeHandler, this))
          var c = this
          if (
            ("string" == typeof b.element
              ? (this.el = a(document.getElementById(b.element)))
              : (this.el = a(b.element)),
            null == this.el || 0 === this.el.length)
          )
            throw new Error("Graph container element not found")
          "static" === this.el.css("position") &&
            this.el.css("position", "relative"),
            (this.options = a.extend(
              {},
              this.gridDefaults,
              this.defaults || {},
              b
            )),
            "string" == typeof this.options.units &&
              (this.options.postUnits = b.units),
            (this.raphael = new Raphael(this.el[0])),
            (this.elementWidth = null),
            (this.elementHeight = null),
            (this.dirty = !1),
            (this.selectFrom = null),
            this.init && this.init(),
            this.setData(this.options.data),
            this.el.bind("mousemove", function (a) {
              var b, d, e, f, g
              return (
                (d = c.el.offset()),
                (g = a.pageX - d.left),
                c.selectFrom
                  ? ((b = c.data[c.hitTest(Math.min(g, c.selectFrom))]._x),
                    (e = c.data[c.hitTest(Math.max(g, c.selectFrom))]._x),
                    (f = e - b),
                    c.selectionRect.attr({ x: b, width: f }))
                  : c.fire("hovermove", g, a.pageY - d.top)
              )
            }),
            this.el.bind("mouseleave", function (a) {
              return (
                c.selectFrom && (c.selectionRect.hide(), (c.selectFrom = null)),
                c.fire("hoverout")
              )
            }),
            this.el.bind("touchstart touchmove touchend", function (a) {
              var b, d
              return (
                (d =
                  a.originalEvent.touches[0] ||
                  a.originalEvent.changedTouches[0]),
                (b = c.el.offset()),
                c.fire("hovermove", d.pageX - b.left, d.pageY - b.top)
              )
            }),
            this.el.bind("click", function (a) {
              var b
              return (
                (b = c.el.offset()),
                c.fire("gridclick", a.pageX - b.left, a.pageY - b.top)
              )
            }),
            this.options.rangeSelect &&
              ((this.selectionRect = this.raphael
                .rect(0, 0, 0, this.el.innerHeight())
                .attr({ fill: this.options.rangeSelectColor, stroke: !1 })
                .toBack()
                .hide()),
              this.el.bind("mousedown", function (a) {
                var b
                return (b = c.el.offset()), c.startRange(a.pageX - b.left)
              }),
              this.el.bind("mouseup", function (a) {
                var b
                return (
                  (b = c.el.offset()),
                  c.endRange(a.pageX - b.left),
                  c.fire("hovermove", a.pageX - b.left, a.pageY - b.top)
                )
              })),
            this.options.resize &&
              a(window).bind("resize", function (a) {
                return (
                  null != c.timeoutId && window.clearTimeout(c.timeoutId),
                  (c.timeoutId = window.setTimeout(c.resizeHandler, 100))
                )
              }),
            this.el.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"),
            this.postInit && this.postInit()
        }
        return (
          h(d, c),
          (d.prototype.gridDefaults = {
            dateFormat: null,
            axes: !0,
            grid: !0,
            gridLineColor: "#aaa",
            gridStrokeWidth: 0.5,
            gridTextColor: "#888",
            gridTextSize: 12,
            gridTextFamily: "sans-serif",
            gridTextWeight: "normal",
            hideHover: !1,
            yLabelFormat: null,
            xLabelAngle: 0,
            numLines: 5,
            padding: 25,
            parseTime: !0,
            postUnits: "",
            preUnits: "",
            ymax: "auto",
            ymin: "auto 0",
            goals: [],
            goalStrokeWidth: 1,
            goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
            events: [],
            eventStrokeWidth: 1,
            eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"],
            rangeSelect: null,
            rangeSelectColor: "#eef",
            resize: !1,
          }),
          (d.prototype.setData = function (c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y
            if (
              (null == d && (d = !0),
              (this.options.data = c),
              null == c || 0 === c.length)
            )
              return (
                (this.data = []),
                this.raphael.clear(),
                void (null != this.hover && this.hover.hide())
              )
            if (
              ((s = this.cumulative ? 0 : null),
              (t = this.cumulative ? 0 : null),
              this.options.goals.length > 0 &&
                ((k = Math.min.apply(Math, this.options.goals)),
                (j = Math.max.apply(Math, this.options.goals)),
                (t = null != t ? Math.min(t, k) : k),
                (s = null != s ? Math.max(s, j) : j)),
              (this.data = function () {
                var a, d, e
                for (e = [], i = a = 0, d = c.length; a < d; i = ++a)
                  (m = c[i]),
                    (l = { src: m }),
                    (l.label = m[this.options.xkey]),
                    this.options.parseTime
                      ? ((l.x = b.parseDate(l.label)),
                        this.options.dateFormat
                          ? (l.label = this.options.dateFormat(l.x))
                          : "number" == typeof l.label &&
                            (l.label = new Date(l.label).toString()))
                      : ((l.x = i),
                        this.options.xLabelFormat &&
                          (l.label = this.options.xLabelFormat(l))),
                    (p = 0),
                    (l.y = function () {
                      var a, b, c, d
                      for (
                        c = this.options.ykeys, d = [], h = a = 0, b = c.length;
                        a < b;
                        h = ++a
                      )
                        (r = c[h]),
                          (u = m[r]),
                          "string" == typeof u && (u = parseFloat(u)),
                          null != u && "number" != typeof u && (u = null),
                          null != u &&
                            this.hasToShow(h) &&
                            (this.cumulative
                              ? (p += u)
                              : null != s
                              ? ((s = Math.max(u, s)), (t = Math.min(u, t)))
                              : (s = t = u)),
                          this.cumulative &&
                            null != p &&
                            ((s = Math.max(p, s)), (t = Math.min(p, t))),
                          d.push(u)
                      return d
                    }.call(this)),
                    e.push(l)
                return e
              }.call(this)),
              this.options.parseTime &&
                (this.data = this.data.sort(function (a, b) {
                  return (a.x > b.x) - (b.x > a.x)
                })),
              (this.xmin = this.data[0].x),
              (this.xmax = this.data[this.data.length - 1].x),
              (this.events = []),
              this.options.events.length > 0)
            ) {
              if (this.options.parseTime)
                for (x = this.options.events, v = 0, w = x.length; v < w; v++)
                  (e = x[v]),
                    e instanceof Array
                      ? ((g = e[0]),
                        (o = e[1]),
                        this.events.push([b.parseDate(g), b.parseDate(o)]))
                      : this.events.push(b.parseDate(e))
              else this.events = this.options.events
              ;(f = a.map(this.events, function (a) {
                return a
              })),
                (this.xmax = Math.max(this.xmax, Math.max.apply(Math, f))),
                (this.xmin = Math.min(this.xmin, Math.min.apply(Math, f)))
            }
            return (
              this.xmin === this.xmax && ((this.xmin -= 1), (this.xmax += 1)),
              (this.ymin = this.yboundary("min", t)),
              (this.ymax = this.yboundary("max", s)),
              this.ymin === this.ymax &&
                (t && (this.ymin -= 1), (this.ymax += 1)),
              (!0 !== (y = this.options.axes) &&
                "both" !== y &&
                "y" !== y &&
                !0 !== this.options.grid) ||
                (this.options.ymax === this.gridDefaults.ymax &&
                this.options.ymin === this.gridDefaults.ymin
                  ? ((this.grid = this.autoGridLines(
                      this.ymin,
                      this.ymax,
                      this.options.numLines
                    )),
                    (this.ymin = Math.min(this.ymin, this.grid[0])),
                    (this.ymax = Math.max(
                      this.ymax,
                      this.grid[this.grid.length - 1]
                    )))
                  : ((n =
                      (this.ymax - this.ymin) / (this.options.numLines - 1)),
                    (this.grid = function () {
                      var a, b, c
                      for (
                        c = [], q = a = this.ymin, b = this.ymax;
                        n > 0 ? a <= b : a >= b;
                        q = a += n
                      )
                        c.push(q)
                      return c
                    }.call(this)))),
              (this.dirty = !0),
              d ? this.redraw() : void 0
            )
          }),
          (d.prototype.yboundary = function (a, b) {
            var c, d
            return (
              (c = this.options["y" + a]),
              "string" == typeof c
                ? "auto" === c.slice(0, 4)
                  ? c.length > 5
                    ? ((d = parseInt(c.slice(5), 10)),
                      null == b ? d : Math[a](b, d))
                    : null != b
                    ? b
                    : 0
                  : parseInt(c, 10)
                : c
            )
          }),
          (d.prototype.autoGridLines = function (a, b, c) {
            var d, e, f, g, h, i, j, k, l
            return (
              (h = b - a),
              (l = Math.floor(Math.log(h) / Math.log(10))),
              (j = Math.pow(10, l)),
              (e = Math.floor(a / j) * j),
              (d = Math.ceil(b / j) * j),
              (i = (d - e) / (c - 1)),
              1 === j &&
                i > 1 &&
                Math.ceil(i) !== i &&
                ((i = Math.ceil(i)), (d = e + i * (c - 1))),
              e < 0 &&
                d > 0 &&
                ((e = Math.floor(a / i) * i), (d = Math.ceil(b / i) * i)),
              i < 1
                ? ((g = Math.floor(Math.log(i) / Math.log(10))),
                  (f = (function () {
                    var a, b
                    for (b = [], k = a = e; i > 0 ? a <= d : a >= d; k = a += i)
                      b.push(parseFloat(k.toFixed(1 - g)))
                    return b
                  })()))
                : (f = (function () {
                    var a, b
                    for (b = [], k = a = e; i > 0 ? a <= d : a >= d; k = a += i)
                      b.push(k)
                    return b
                  })()),
              f
            )
          }),
          (d.prototype._calc = function () {
            var a, b, c, d, e, f, g, h, i
            if (
              ((f = this.el.width()),
              (d = this.el.height()),
              (this.elementWidth !== f ||
                this.elementHeight !== d ||
                this.dirty) &&
                ((this.elementWidth = f),
                (this.elementHeight = d),
                (this.dirty = !1),
                (this.left = this.options.padding),
                (this.right = this.elementWidth - this.options.padding),
                (this.top = this.options.padding),
                (this.bottom = this.elementHeight - this.options.padding),
                (!0 !== (h = this.options.axes) && "both" !== h && "y" !== h) ||
                  ((g = function () {
                    var a, b, d, e
                    for (d = this.grid, e = [], a = 0, b = d.length; a < b; a++)
                      (c = d[a]),
                        e.push(this.measureText(this.yAxisFormat(c)).width)
                    return e
                  }.call(this)),
                  this.options.horizontal
                    ? (this.bottom -= Math.max.apply(Math, g))
                    : (this.left += Math.max.apply(Math, g))),
                (!0 !== (i = this.options.axes) && "both" !== i && "x" !== i) ||
                  ((a = this.options.horizontal
                    ? -90
                    : -this.options.xLabelAngle),
                  (b = function () {
                    var b, c, d
                    for (
                      d = [], e = b = 0, c = this.data.length;
                      0 <= c ? b < c : b > c;
                      e = 0 <= c ? ++b : --b
                    )
                      d.push(this.measureText(this.data[e].label, a).height)
                    return d
                  }.call(this)),
                  this.options.horizontal
                    ? (this.left += Math.max.apply(Math, b))
                    : (this.bottom -= Math.max.apply(Math, b))),
                (this.width = Math.max(1, this.right - this.left)),
                (this.height = Math.max(1, this.bottom - this.top)),
                this.options.horizontal
                  ? ((this.dx = this.height / (this.xmax - this.xmin)),
                    (this.dy = this.width / (this.ymax - this.ymin)),
                    (this.yStart = this.left),
                    (this.yEnd = this.right),
                    (this.xStart = this.top),
                    (this.xEnd = this.bottom),
                    (this.xSize = this.height),
                    (this.ySize = this.width))
                  : ((this.dx = this.width / (this.xmax - this.xmin)),
                    (this.dy = this.height / (this.ymax - this.ymin)),
                    (this.yStart = this.bottom),
                    (this.yEnd = this.top),
                    (this.xStart = this.left),
                    (this.xEnd = this.right),
                    (this.xSize = this.width),
                    (this.ySize = this.height)),
                this.calc))
            )
              return this.calc()
          }),
          (d.prototype.transY = function (a) {
            return this.options.horizontal
              ? this.left + (a - this.ymin) * this.dy
              : this.bottom - (a - this.ymin) * this.dy
          }),
          (d.prototype.transX = function (a) {
            return 1 === this.data.length
              ? (this.xStart + this.xEnd) / 2
              : this.xStart + (a - this.xmin) * this.dx
          }),
          (d.prototype.redraw = function () {
            if (
              (this.raphael.clear(),
              this._calc(),
              this.drawGrid(),
              this.drawGoals(),
              this.drawEvents(),
              this.draw)
            )
              return this.draw()
          }),
          (d.prototype.measureText = function (a, b) {
            var c, d
            return (
              null == b && (b = 0),
              (d = this.raphael
                .text(100, 100, a)
                .attr("font-size", this.options.gridTextSize)
                .attr("font-family", this.options.gridTextFamily)
                .attr("font-weight", this.options.gridTextWeight)
                .rotate(b)),
              (c = d.getBBox()),
              d.remove(),
              c
            )
          }),
          (d.prototype.yAxisFormat = function (a) {
            return this.yLabelFormat(a, 0)
          }),
          (d.prototype.yLabelFormat = function (a, c) {
            return "function" == typeof this.options.yLabelFormat
              ? this.options.yLabelFormat(a, c)
              : "" +
                  this.options.preUnits +
                  b.commas(a) +
                  this.options.postUnits
          }),
          (d.prototype.getYAxisLabelX = function () {
            return this.left - this.options.padding / 2
          }),
          (d.prototype.drawGrid = function () {
            var a, b, c, d, e, f, g, h, i
            if (
              !1 !== this.options.grid ||
              !0 === (f = this.options.axes) ||
              "both" === f ||
              "y" === f
            ) {
              for (
                a = this.options.horizontal
                  ? this.getXAxisLabelY()
                  : this.getYAxisLabelX(),
                  g = this.grid,
                  i = [],
                  d = 0,
                  e = g.length;
                d < e;
                d++
              )
                (b = g[d]),
                  (c = this.transY(b)),
                  (!0 !== (h = this.options.axes) &&
                    "both" !== h &&
                    "y" !== h) ||
                    (this.options.horizontal
                      ? this.drawXAxisLabel(c, a, this.yAxisFormat(b))
                      : this.drawYAxisLabel(a, c, this.yAxisFormat(b))),
                  this.options.grid
                    ? ((c = Math.floor(c) + 0.5),
                      this.options.horizontal
                        ? i.push(
                            this.drawGridLine(
                              "M" + c + "," + this.xStart + "V" + this.xEnd
                            )
                          )
                        : i.push(
                            this.drawGridLine(
                              "M" + this.xStart + "," + c + "H" + this.xEnd
                            )
                          ))
                    : i.push(void 0)
              return i
            }
          }),
          (d.prototype.drawGoals = function () {
            var a, b, c, d, e, f, g
            for (
              f = this.options.goals, g = [], c = d = 0, e = f.length;
              d < e;
              c = ++d
            )
              (b = f[c]),
                (a =
                  this.options.goalLineColors[
                    c % this.options.goalLineColors.length
                  ]),
                g.push(this.drawGoal(b, a))
            return g
          }),
          (d.prototype.drawEvents = function () {
            var a, b, c, d, e, f, g
            for (
              f = this.events, g = [], c = d = 0, e = f.length;
              d < e;
              c = ++d
            )
              (b = f[c]),
                (a =
                  this.options.eventLineColors[
                    c % this.options.eventLineColors.length
                  ]),
                g.push(this.drawEvent(b, a))
            return g
          }),
          (d.prototype.drawGoal = function (a, b) {
            var c, d
            return (
              (d = Math.floor(this.transY(a)) + 0.5),
              (c = this.options.horizontal
                ? "M" + d + "," + this.xStart + "V" + this.xEnd
                : "M" + this.xStart + "," + d + "H" + this.xEnd),
              this.raphael
                .path(c)
                .attr("stroke", b)
                .attr("stroke-width", this.options.goalStrokeWidth)
            )
          }),
          (d.prototype.drawEvent = function (a, b) {
            var c, d, e, f
            return a instanceof Array
              ? ((c = a[0]),
                (e = a[1]),
                (c = Math.floor(this.transX(c)) + 0.5),
                (e = Math.floor(this.transX(e)) + 0.5),
                this.options.horizontal
                  ? this.raphael
                      .rect(this.yStart, c, this.yEnd - this.yStart, e - c)
                      .attr({ fill: b, stroke: !1 })
                      .toBack()
                  : this.raphael
                      .rect(c, this.yEnd, e - c, this.yStart - this.yEnd)
                      .attr({ fill: b, stroke: !1 })
                      .toBack())
              : ((f = Math.floor(this.transX(a)) + 0.5),
                (d = this.options.horizontal
                  ? "M" + this.yStart + "," + f + "H" + this.yEnd
                  : "M" + f + "," + this.yStart + "V" + this.yEnd),
                this.raphael
                  .path(d)
                  .attr("stroke", b)
                  .attr("stroke-width", this.options.eventStrokeWidth))
          }),
          (d.prototype.drawYAxisLabel = function (a, b, c) {
            return this.raphael
              .text(a, b, c)
              .attr("font-size", this.options.gridTextSize)
              .attr("font-family", this.options.gridTextFamily)
              .attr("font-weight", this.options.gridTextWeight)
              .attr("fill", this.options.gridTextColor)
              .attr("text-anchor", "end")
          }),
          (d.prototype.drawGridLine = function (a) {
            return this.raphael
              .path(a)
              .attr("stroke", this.options.gridLineColor)
              .attr("stroke-width", this.options.gridStrokeWidth)
          }),
          (d.prototype.startRange = function (a) {
            return (
              this.hover.hide(),
              (this.selectFrom = a),
              this.selectionRect.attr({ x: a, width: 0 }).show()
            )
          }),
          (d.prototype.endRange = function (a) {
            var b, c
            if (this.selectFrom)
              return (
                (c = Math.min(this.selectFrom, a)),
                (b = Math.max(this.selectFrom, a)),
                this.options.rangeSelect.call(this.el, {
                  start: this.data[this.hitTest(c)].x,
                  end: this.data[this.hitTest(b)].x,
                }),
                (this.selectFrom = null)
              )
          }),
          (d.prototype.resizeHandler = function () {
            return (
              (this.timeoutId = null),
              this.raphael.setSize(this.el.width(), this.el.height()),
              this.redraw()
            )
          }),
          (d.prototype.hasToShow = function (a) {
            return !0 === this.options.shown || !0 === this.options.shown[a]
          }),
          d
        )
      })(b.EventEmitter)),
      (b.parseDate = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l
        return "number" == typeof a
          ? a
          : ((c = a.match(/^(\d+) Q(\d)$/)),
            (e = a.match(/^(\d+)-(\d+)$/)),
            (f = a.match(/^(\d+)-(\d+)-(\d+)$/)),
            (h = a.match(/^(\d+) W(\d+)$/)),
            (i = a.match(
              /^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/
            )),
            (j = a.match(
              /^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/
            )),
            c
              ? new Date(
                  parseInt(c[1], 10),
                  3 * parseInt(c[2], 10) - 1,
                  1
                ).getTime()
              : e
              ? new Date(
                  parseInt(e[1], 10),
                  parseInt(e[2], 10) - 1,
                  1
                ).getTime()
              : f
              ? new Date(
                  parseInt(f[1], 10),
                  parseInt(f[2], 10) - 1,
                  parseInt(f[3], 10)
                ).getTime()
              : h
              ? ((k = new Date(parseInt(h[1], 10), 0, 1)),
                4 !== k.getDay() &&
                  k.setMonth(0, 1 + ((4 - k.getDay() + 7) % 7)),
                k.getTime() + 6048e5 * parseInt(h[2], 10))
              : i
              ? i[6]
                ? ((g = 0),
                  "Z" !== i[6] &&
                    ((g = 60 * parseInt(i[8], 10) + parseInt(i[9], 10)),
                    "+" === i[7] && (g = 0 - g)),
                  Date.UTC(
                    parseInt(i[1], 10),
                    parseInt(i[2], 10) - 1,
                    parseInt(i[3], 10),
                    parseInt(i[4], 10),
                    parseInt(i[5], 10) + g
                  ))
                : new Date(
                    parseInt(i[1], 10),
                    parseInt(i[2], 10) - 1,
                    parseInt(i[3], 10),
                    parseInt(i[4], 10),
                    parseInt(i[5], 10)
                  ).getTime()
              : j
              ? ((l = parseFloat(j[6])),
                (b = Math.floor(l)),
                (d = Math.round(1e3 * (l - b))),
                j[8]
                  ? ((g = 0),
                    "Z" !== j[8] &&
                      ((g = 60 * parseInt(j[10], 10) + parseInt(j[11], 10)),
                      "+" === j[9] && (g = 0 - g)),
                    Date.UTC(
                      parseInt(j[1], 10),
                      parseInt(j[2], 10) - 1,
                      parseInt(j[3], 10),
                      parseInt(j[4], 10),
                      parseInt(j[5], 10) + g,
                      b,
                      d
                    ))
                  : new Date(
                      parseInt(j[1], 10),
                      parseInt(j[2], 10) - 1,
                      parseInt(j[3], 10),
                      parseInt(j[4], 10),
                      parseInt(j[5], 10),
                      b,
                      d
                    ).getTime())
              : new Date(parseInt(a, 10), 0, 1).getTime())
      }),
      (b.Hover = (function () {
        function c(c) {
          null == c && (c = {}),
            (this.options = a.extend({}, b.Hover.defaults, c)),
            (this.el = a("<div class='" + this.options.class + "'></div>")),
            this.el.hide(),
            this.options.parent.append(this.el)
        }
        return (
          (c.defaults = { class: "morris-hover morris-default-style" }),
          (c.prototype.update = function (a, b, c, d) {
            return a
              ? (this.html(a), this.show(), this.moveTo(b, c, d))
              : this.hide()
          }),
          (c.prototype.html = function (a) {
            return this.el.html(a)
          }),
          (c.prototype.moveTo = function (a, b, c) {
            var d, e, f, g, h, i
            return (
              (h = this.options.parent.innerWidth()),
              (g = this.options.parent.innerHeight()),
              (e = this.el.outerWidth()),
              (d = this.el.outerHeight()),
              (f = Math.min(Math.max(0, a - e / 2), h - e)),
              null != b
                ? !0 === c
                  ? (i = b - d / 2) < 0 && (i = 0)
                  : (i = b - d - 10) < 0 &&
                    (i = b + 10) + d > g &&
                    (i = g / 2 - d / 2)
                : (i = g / 2 - d / 2),
              this.el.css({ left: f + "px", top: parseInt(i) + "px" })
            )
          }),
          (c.prototype.show = function () {
            return this.el.show()
          }),
          (c.prototype.hide = function () {
            return this.el.hide()
          }),
          c
        )
      })()),
      (b.Line = (function (c) {
        function d(a) {
          if (
            ((this.hilight = f(this.hilight, this)),
            (this.onHoverOut = f(this.onHoverOut, this)),
            (this.onHoverMove = f(this.onHoverMove, this)),
            (this.onGridClick = f(this.onGridClick, this)),
            !(this instanceof b.Line))
          )
            return new b.Line(a)
          d.__super__.constructor.call(this, a)
        }
        return (
          h(d, c),
          (d.prototype.init = function () {
            if ("always" !== this.options.hideHover)
              return (
                (this.hover = new b.Hover({ parent: this.el })),
                this.on("hovermove", this.onHoverMove),
                this.on("hoverout", this.onHoverOut),
                this.on("gridclick", this.onGridClick)
              )
          }),
          (d.prototype.defaults = {
            lineWidth: 3,
            pointSize: 4,
            lineColors: [
              "#0b62a4",
              "#7A92A3",
              "#4da74d",
              "#afd8f8",
              "#edc240",
              "#cb4b4b",
              "#9440ed",
            ],
            pointStrokeWidths: [1],
            pointStrokeColors: ["#ffffff"],
            pointFillColors: [],
            smooth: !0,
            shown: !0,
            xLabels: "auto",
            xLabelFormat: null,
            xLabelMargin: 24,
            hideHover: !1,
            trendLine: !1,
            trendLineWidth: 2,
            trendLineColors: ["#689bc3", "#a2b3bf", "#64b764"],
          }),
          (d.prototype.calc = function () {
            return this.calcPoints(), this.generatePaths()
          }),
          (d.prototype.calcPoints = function () {
            var a, b, c, d, e, f
            for (e = this.data, f = [], c = 0, d = e.length; c < d; c++)
              (a = e[c]),
                (a._x = this.transX(a.x)),
                (a._y = function () {
                  var c, d, e, f
                  for (e = a.y, f = [], c = 0, d = e.length; c < d; c++)
                    (b = e[c]), null != b ? f.push(this.transY(b)) : f.push(b)
                  return f
                }.call(this)),
                f.push(
                  (a._ymax = Math.min.apply(
                    Math,
                    [this.bottom].concat(
                      (function () {
                        var c, d, e, f
                        for (e = a._y, f = [], c = 0, d = e.length; c < d; c++)
                          null != (b = e[c]) && f.push(b)
                        return f
                      })()
                    )
                  ))
                )
            return f
          }),
          (d.prototype.hitTest = function (a) {
            var b, c, d, e, f
            if (0 === this.data.length) return null
            for (
              f = this.data.slice(1), b = d = 0, e = f.length;
              d < e && ((c = f[b]), !(a < (c._x + this.data[b]._x) / 2));
              b = ++d
            );
            return b
          }),
          (d.prototype.onGridClick = function (a, b) {
            var c
            return (
              (c = this.hitTest(a)),
              this.fire("click", c, this.data[c].src, a, b)
            )
          }),
          (d.prototype.onHoverMove = function (a, b) {
            var c
            return (c = this.hitTest(a)), this.displayHoverForRow(c)
          }),
          (d.prototype.onHoverOut = function () {
            if (!1 !== this.options.hideHover)
              return this.displayHoverForRow(null)
          }),
          (d.prototype.displayHoverForRow = function (a) {
            var b
            return null != a
              ? ((b = this.hover).update.apply(b, this.hoverContentForRow(a)),
                this.hilight(a))
              : (this.hover.hide(), this.hilight())
          }),
          (d.prototype.hoverContentForRow = function (b) {
            var c, d, e, f, g, h, i
            for (
              e = this.data[b],
                c = a("<div class='morris-hover-row-label'>").text(e.label),
                c = c.prop("outerHTML"),
                i = e.y,
                d = g = 0,
                h = i.length;
              g < h;
              d = ++g
            )
              (f = i[d]),
                !1 !== this.options.labels[d] &&
                  (c +=
                    "<div class='morris-hover-point' style='color: " +
                    this.colorFor(e, d, "label") +
                    "'>\n  " +
                    this.options.labels[d] +
                    ":\n  " +
                    this.yLabelFormat(f, d) +
                    "\n</div>")
            return (
              "function" == typeof this.options.hoverCallback &&
                (c = this.options.hoverCallback(b, this.options, c, e.src)),
              [c, e._x, e._ymax]
            )
          }),
          (d.prototype.generatePaths = function () {
            var a, c, d, e
            return (this.paths = function () {
              var f, g, h, j
              for (
                j = [], c = f = 0, g = this.options.ykeys.length;
                0 <= g ? f < g : f > g;
                c = 0 <= g ? ++f : --f
              )
                (e =
                  "boolean" == typeof this.options.smooth
                    ? this.options.smooth
                    : ((h = this.options.ykeys[c]),
                      i.call(this.options.smooth, h) >= 0)),
                  (a = function () {
                    var a, b, e, f
                    for (e = this.data, f = [], a = 0, b = e.length; a < b; a++)
                      (d = e[a]),
                        void 0 !== d._y[c] && f.push({ x: d._x, y: d._y[c] })
                    return f
                  }.call(this)),
                  a.length > 1
                    ? j.push(b.Line.createPath(a, e, this.bottom))
                    : j.push(null)
              return j
            }.call(this))
          }),
          (d.prototype.draw = function () {
            var a
            if (
              ((!0 !== (a = this.options.axes) && "both" !== a && "x" !== a) ||
                this.drawXAxis(),
              this.drawSeries(),
              !1 === this.options.hideHover)
            )
              return this.displayHoverForRow(this.data.length - 1)
          }),
          (d.prototype.drawXAxis = function () {
            var a,
              c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l = this
            for (
              h = this.bottom + this.options.padding / 2,
                f = null,
                e = null,
                a = function (a, b) {
                  var c, d, g, i, j
                  return (
                    (c = l.drawXAxisLabel(l.transX(b), h, a)),
                    (j = c.getBBox()),
                    c.transform("r" + -l.options.xLabelAngle),
                    (d = c.getBBox()),
                    c.transform("t0," + d.height / 2 + "..."),
                    0 !== l.options.xLabelAngle &&
                      ((i =
                        -0.5 *
                        j.width *
                        Math.cos((l.options.xLabelAngle * Math.PI) / 180)),
                      c.transform("t" + i + ",0...")),
                    (d = c.getBBox()),
                    (null == f ||
                      f >= d.x + d.width ||
                      (null != e && e >= d.x)) &&
                    d.x >= 0 &&
                    d.x + d.width < l.el.width()
                      ? (0 !== l.options.xLabelAngle &&
                          ((g =
                            (1.25 * l.options.gridTextSize) /
                            Math.sin((l.options.xLabelAngle * Math.PI) / 180)),
                          (e = d.x - g)),
                        (f = d.x - l.options.xLabelMargin))
                      : c.remove()
                  )
                },
                d = this.options.parseTime
                  ? 1 === this.data.length && "auto" === this.options.xLabels
                    ? [[this.data[0].label, this.data[0].x]]
                    : b.labelSeries(
                        this.xmin,
                        this.xmax,
                        this.width,
                        this.options.xLabels,
                        this.options.xLabelFormat
                      )
                  : function () {
                      var a, b, c, d
                      for (
                        c = this.data, d = [], a = 0, b = c.length;
                        a < b;
                        a++
                      )
                        (g = c[a]), d.push([g.label, g.x])
                      return d
                    }.call(this),
                d.reverse(),
                k = [],
                i = 0,
                j = d.length;
              i < j;
              i++
            )
              (c = d[i]), k.push(a(c[0], c[1]))
            return k
          }),
          (d.prototype.drawSeries = function () {
            var a, b, c, d, e, f
            for (
              this.seriesPoints = [], a = b = d = this.options.ykeys.length - 1;
              d <= 0 ? b <= 0 : b >= 0;
              a = d <= 0 ? ++b : --b
            )
              this.hasToShow(a) &&
                (((!1 !== this.options.trendLine &&
                  !0 === this.options.trendLine) ||
                  !0 === this.options.trendLine[a]) &&
                  this._drawTrendLine(a),
                this._drawLineFor(a))
            for (
              f = [], a = c = e = this.options.ykeys.length - 1;
              e <= 0 ? c <= 0 : c >= 0;
              a = e <= 0 ? ++c : --c
            )
              this.hasToShow(a) ? f.push(this._drawPointFor(a)) : f.push(void 0)
            return f
          }),
          (d.prototype._drawPointFor = function (a) {
            var b, c, d, e, f, g
            for (
              this.seriesPoints[a] = [],
                f = this.data,
                g = [],
                d = 0,
                e = f.length;
              d < e;
              d++
            )
              (c = f[d]),
                (b = null),
                null != c._y[a] &&
                  (b = this.drawLinePoint(
                    c._x,
                    c._y[a],
                    this.colorFor(c, a, "point"),
                    a
                  )),
                g.push(this.seriesPoints[a].push(b))
            return g
          }),
          (d.prototype._drawLineFor = function (a) {
            var b
            if (null !== (b = this.paths[a]))
              return this.drawLinePath(b, this.colorFor(null, a, "line"), a)
          }),
          (d.prototype._drawTrendLine = function (a) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q
            for (
              h = 0,
                k = 0,
                i = 0,
                j = 0,
                f = 0,
                q = this.data,
                o = 0,
                p = q.length;
              o < p;
              o++
            )
              (l = q[o]),
                (m = l.x),
                void 0 !== (n = l.y[a]) &&
                  ((f += 1), (h += m), (k += n), (i += m * m), (j += m * n))
            return (
              (c = (f * j - h * k) / (f * i - h * h)),
              (d = k / f - (c * h) / f),
              (e = [{}, {}]),
              (e[0].x = this.transX(this.data[0].x)),
              (e[0].y = this.transY(this.data[0].x * c + d)),
              (e[1].x = this.transX(this.data[this.data.length - 1].x)),
              (e[1].y = this.transY(this.data[this.data.length - 1].x * c + d)),
              (g = b.Line.createPath(e, !1, this.bottom)),
              (g = this.raphael
                .path(g)
                .attr("stroke", this.colorFor(null, a, "trendLine"))
                .attr("stroke-width", this.options.trendLineWidth))
            )
          }),
          (d.createPath = function (a, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r
            for (
              k = "",
                c && (g = b.Line.gradients(a)),
                l = { y: null },
                h = q = 0,
                r = a.length;
              q < r;
              h = ++q
            )
              (e = a[h]),
                null != e.y &&
                  (null != l.y
                    ? c
                      ? ((f = g[h]),
                        (j = g[h - 1]),
                        (i = (e.x - l.x) / 4),
                        (m = l.x + i),
                        (o = Math.min(d, l.y + i * j)),
                        (n = e.x - i),
                        (p = Math.min(d, e.y - i * f)),
                        (k +=
                          "C" +
                          m +
                          "," +
                          o +
                          "," +
                          n +
                          "," +
                          p +
                          "," +
                          e.x +
                          "," +
                          e.y))
                      : (k += "L" + e.x + "," + e.y)
                    : (c && null == g[h]) || (k += "M" + e.x + "," + e.y)),
                (l = e)
            return k
          }),
          (d.gradients = function (a) {
            var b, c, d, e, f, g, h, i
            for (
              c = function (a, b) {
                return (a.y - b.y) / (a.x - b.x)
              },
                i = [],
                d = g = 0,
                h = a.length;
              g < h;
              d = ++g
            )
              (b = a[d]),
                null != b.y
                  ? ((e = a[d + 1] || { y: null }),
                    (f = a[d - 1] || { y: null }),
                    null != f.y && null != e.y
                      ? i.push(c(f, e))
                      : null != f.y
                      ? i.push(c(f, b))
                      : null != e.y
                      ? i.push(c(b, e))
                      : i.push(null))
                  : i.push(null)
            return i
          }),
          (d.prototype.hilight = function (a) {
            var b, c, d, e, f
            if (null !== this.prevHilight && this.prevHilight !== a)
              for (
                b = c = 0, e = this.seriesPoints.length - 1;
                0 <= e ? c <= e : c >= e;
                b = 0 <= e ? ++c : --c
              )
                this.seriesPoints[b][this.prevHilight] &&
                  this.seriesPoints[b][this.prevHilight].animate(
                    this.pointShrinkSeries(b)
                  )
            if (null !== a && this.prevHilight !== a)
              for (
                b = d = 0, f = this.seriesPoints.length - 1;
                0 <= f ? d <= f : d >= f;
                b = 0 <= f ? ++d : --d
              )
                this.seriesPoints[b][a] &&
                  this.seriesPoints[b][a].animate(this.pointGrowSeries(b))
            return (this.prevHilight = a)
          }),
          (d.prototype.colorFor = function (a, b, c) {
            return "function" == typeof this.options.lineColors
              ? this.options.lineColors.call(this, a, b, c)
              : "point" === c
              ? this.options.pointFillColors[
                  b % this.options.pointFillColors.length
                ] || this.options.lineColors[b % this.options.lineColors.length]
              : "line" === c
              ? this.options.lineColors[b % this.options.lineColors.length]
              : this.options.trendLineColors[
                  b % this.options.trendLineColors.length
                ]
          }),
          (d.prototype.drawXAxisLabel = function (a, b, c) {
            return this.raphael
              .text(a, b, c)
              .attr("font-size", this.options.gridTextSize)
              .attr("font-family", this.options.gridTextFamily)
              .attr("font-weight", this.options.gridTextWeight)
              .attr("fill", this.options.gridTextColor)
          }),
          (d.prototype.drawLinePath = function (a, b, c) {
            return this.raphael
              .path(a)
              .attr("stroke", b)
              .attr("stroke-width", this.lineWidthForSeries(c))
          }),
          (d.prototype.drawLinePoint = function (a, b, c, d) {
            return this.raphael
              .circle(a, b, this.pointSizeForSeries(d))
              .attr("fill", c)
              .attr("stroke-width", this.pointStrokeWidthForSeries(d))
              .attr("stroke", this.pointStrokeColorForSeries(d))
          }),
          (d.prototype.pointStrokeWidthForSeries = function (a) {
            return this.options.pointStrokeWidths[
              a % this.options.pointStrokeWidths.length
            ]
          }),
          (d.prototype.pointStrokeColorForSeries = function (a) {
            return this.options.pointStrokeColors[
              a % this.options.pointStrokeColors.length
            ]
          }),
          (d.prototype.lineWidthForSeries = function (a) {
            return this.options.lineWidth instanceof Array
              ? this.options.lineWidth[a % this.options.lineWidth.length]
              : this.options.lineWidth
          }),
          (d.prototype.pointSizeForSeries = function (a) {
            return this.options.pointSize instanceof Array
              ? this.options.pointSize[a % this.options.pointSize.length]
              : this.options.pointSize
          }),
          (d.prototype.pointGrowSeries = function (a) {
            if (0 !== this.pointSizeForSeries(a))
              return Raphael.animation(
                { r: this.pointSizeForSeries(a) + 3 },
                25,
                "linear"
              )
          }),
          (d.prototype.pointShrinkSeries = function (a) {
            return Raphael.animation(
              { r: this.pointSizeForSeries(a) },
              25,
              "linear"
            )
          }),
          d
        )
      })(b.Grid)),
      (b.labelSeries = function (c, d, e, f, g) {
        var h, i, j, k, l, m, n, o, p, q, r
        if (
          ((j = (200 * (d - c)) / e),
          (i = new Date(c)),
          void 0 === (n = b.LABEL_SPECS[f]))
        )
          for (r = b.AUTO_LABEL_ORDER, p = 0, q = r.length; p < q; p++)
            if (((k = r[p]), (m = b.LABEL_SPECS[k]), j >= m.span)) {
              n = m
              break
            }
        for (
          void 0 === n && (n = b.LABEL_SPECS.second),
            g && (n = a.extend({}, n, { fmt: g })),
            h = n.start(i),
            l = [];
          (o = h.getTime()) <= d;

        )
          o >= c && l.push([n.fmt(h), o]), n.incr(h)
        return l
      }),
      (c = function (a) {
        return {
          span: 60 * a * 1e3,
          start: function (a) {
            return new Date(
              a.getFullYear(),
              a.getMonth(),
              a.getDate(),
              a.getHours()
            )
          },
          fmt: function (a) {
            return b.pad2(a.getHours()) + ":" + b.pad2(a.getMinutes())
          },
          incr: function (b) {
            return b.setUTCMinutes(b.getUTCMinutes() + a)
          },
        }
      }),
      (d = function (a) {
        return {
          span: 1e3 * a,
          start: function (a) {
            return new Date(
              a.getFullYear(),
              a.getMonth(),
              a.getDate(),
              a.getHours(),
              a.getMinutes()
            )
          },
          fmt: function (a) {
            return (
              b.pad2(a.getHours()) +
              ":" +
              b.pad2(a.getMinutes()) +
              ":" +
              b.pad2(a.getSeconds())
            )
          },
          incr: function (b) {
            return b.setUTCSeconds(b.getUTCSeconds() + a)
          },
        }
      }),
      (b.LABEL_SPECS = {
        decade: {
          span: 1728e8,
          start: function (a) {
            return new Date(a.getFullYear() - (a.getFullYear() % 10), 0, 1)
          },
          fmt: function (a) {
            return "" + a.getFullYear()
          },
          incr: function (a) {
            return a.setFullYear(a.getFullYear() + 10)
          },
        },
        year: {
          span: 1728e7,
          start: function (a) {
            return new Date(a.getFullYear(), 0, 1)
          },
          fmt: function (a) {
            return "" + a.getFullYear()
          },
          incr: function (a) {
            return a.setFullYear(a.getFullYear() + 1)
          },
        },
        month: {
          span: 24192e5,
          start: function (a) {
            return new Date(a.getFullYear(), a.getMonth(), 1)
          },
          fmt: function (a) {
            return a.getFullYear() + "-" + b.pad2(a.getMonth() + 1)
          },
          incr: function (a) {
            return a.setMonth(a.getMonth() + 1)
          },
        },
        week: {
          span: 6048e5,
          start: function (a) {
            return new Date(a.getFullYear(), a.getMonth(), a.getDate())
          },
          fmt: function (a) {
            return (
              a.getFullYear() +
              "-" +
              b.pad2(a.getMonth() + 1) +
              "-" +
              b.pad2(a.getDate())
            )
          },
          incr: function (a) {
            return a.setDate(a.getDate() + 7)
          },
        },
        day: {
          span: 864e5,
          start: function (a) {
            return new Date(a.getFullYear(), a.getMonth(), a.getDate())
          },
          fmt: function (a) {
            return (
              a.getFullYear() +
              "-" +
              b.pad2(a.getMonth() + 1) +
              "-" +
              b.pad2(a.getDate())
            )
          },
          incr: function (a) {
            return a.setDate(a.getDate() + 1)
          },
        },
        hour: c(60),
        "30min": c(30),
        "15min": c(15),
        "10min": c(10),
        "5min": c(5),
        minute: c(1),
        "30sec": d(30),
        "15sec": d(15),
        "10sec": d(10),
        "5sec": d(5),
        second: d(1),
      }),
      (b.AUTO_LABEL_ORDER = [
        "decade",
        "year",
        "month",
        "week",
        "day",
        "hour",
        "30min",
        "15min",
        "10min",
        "5min",
        "minute",
        "30sec",
        "15sec",
        "10sec",
        "5sec",
        "second",
      ]),
      (b.Area = (function (c) {
        function d(c) {
          var f
          if (!(this instanceof b.Area)) return new b.Area(c)
          ;(f = a.extend({}, e, c)),
            (this.cumulative = !f.behaveLikeLine),
            "auto" === f.fillOpacity &&
              (f.fillOpacity = f.behaveLikeLine ? 0.8 : 1),
            d.__super__.constructor.call(this, f)
        }
        var e
        return (
          h(d, c),
          (e = { fillOpacity: "auto", behaveLikeLine: !1 }),
          (d.prototype.calcPoints = function () {
            var a, b, c, d, e, f, g
            for (f = this.data, g = [], d = 0, e = f.length; d < e; d++)
              (a = f[d]),
                (a._x = this.transX(a.x)),
                (b = 0),
                (a._y = function () {
                  var d, e, f, g
                  for (f = a.y, g = [], d = 0, e = f.length; d < e; d++)
                    (c = f[d]),
                      this.options.behaveLikeLine
                        ? g.push(this.transY(c))
                        : ((b += c || 0), g.push(this.transY(b)))
                  return g
                }.call(this)),
                g.push((a._ymax = Math.max.apply(Math, a._y)))
            return g
          }),
          (d.prototype.drawSeries = function () {
            var a, b, c, d, e, f, g, h
            for (
              this.seriesPoints = [],
                b = this.options.behaveLikeLine
                  ? function () {
                      f = []
                      for (
                        var a = 0, b = this.options.ykeys.length - 1;
                        0 <= b ? a <= b : a >= b;
                        0 <= b ? a++ : a--
                      )
                        f.push(a)
                      return f
                    }.apply(this)
                  : function () {
                      g = []
                      for (
                        var a = (e = this.options.ykeys.length - 1);
                        e <= 0 ? a <= 0 : a >= 0;
                        e <= 0 ? a++ : a--
                      )
                        g.push(a)
                      return g
                    }.apply(this),
                h = [],
                c = 0,
                d = b.length;
              c < d;
              c++
            )
              (a = b[c]),
                this._drawFillFor(a),
                this._drawLineFor(a),
                h.push(this._drawPointFor(a))
            return h
          }),
          (d.prototype._drawFillFor = function (a) {
            var b
            if (null !== (b = this.paths[a]))
              return (
                (b =
                  b +
                  "L" +
                  this.transX(this.xmax) +
                  "," +
                  this.bottom +
                  "L" +
                  this.transX(this.xmin) +
                  "," +
                  this.bottom +
                  "Z"),
                this.drawFilledPath(b, this.fillForSeries(a))
              )
          }),
          (d.prototype.fillForSeries = function (a) {
            var b
            return (
              (b = Raphael.rgb2hsl(this.colorFor(this.data[a], a, "line"))),
              Raphael.hsl(
                b.h,
                this.options.behaveLikeLine ? 0.9 * b.s : 0.75 * b.s,
                Math.min(
                  0.98,
                  this.options.behaveLikeLine ? 1.2 * b.l : 1.25 * b.l
                )
              )
            )
          }),
          (d.prototype.drawFilledPath = function (a, b) {
            return this.raphael
              .path(a)
              .attr("fill", b)
              .attr("fill-opacity", this.options.fillOpacity)
              .attr("stroke", "none")
          }),
          d
        )
      })(b.Line)),
      (b.Bar = (function (c) {
        function d(c) {
          if (
            ((this.onHoverOut = f(this.onHoverOut, this)),
            (this.onHoverMove = f(this.onHoverMove, this)),
            (this.onGridClick = f(this.onGridClick, this)),
            !(this instanceof b.Bar))
          )
            return new b.Bar(c)
          d.__super__.constructor.call(this, a.extend({}, c, { parseTime: !1 }))
        }
        return (
          h(d, c),
          (d.prototype.init = function () {
            if (
              ((this.cumulative = this.options.stacked),
              "always" !== this.options.hideHover)
            )
              return (
                (this.hover = new b.Hover({ parent: this.el })),
                this.on("hovermove", this.onHoverMove),
                this.on("hoverout", this.onHoverOut),
                this.on("gridclick", this.onGridClick)
              )
          }),
          (d.prototype.defaults = {
            barSizeRatio: 0.75,
            barGap: 3,
            barColors: [
              "#0b62a4",
              "#7a92a3",
              "#4da74d",
              "#afd8f8",
              "#edc240",
              "#cb4b4b",
              "#9440ed",
            ],
            barOpacity: 1,
            barRadius: [0, 0, 0, 0],
            xLabelMargin: 50,
            horizontal: !1,
            shown: !0,
          }),
          (d.prototype.calc = function () {
            var a
            if ((this.calcBars(), !1 === this.options.hideHover))
              return (a = this.hover).update.apply(
                a,
                this.hoverContentForRow(this.data.length - 1)
              )
          }),
          (d.prototype.calcBars = function () {
            var a, b, c, d, e, f, g
            for (f = this.data, g = [], a = d = 0, e = f.length; d < e; a = ++d)
              (b = f[a]),
                (b._x =
                  this.xStart + (this.xSize * (a + 0.5)) / this.data.length),
                g.push(
                  (b._y = function () {
                    var a, d, e, f
                    for (e = b.y, f = [], a = 0, d = e.length; a < d; a++)
                      (c = e[a]),
                        null != c ? f.push(this.transY(c)) : f.push(null)
                    return f
                  }.call(this))
                )
            return g
          }),
          (d.prototype.draw = function () {
            var a
            return (
              (!0 !== (a = this.options.axes) && "both" !== a && "x" !== a) ||
                this.drawXAxis(),
              this.drawSeries()
            )
          }),
          (d.prototype.drawXAxis = function () {
            var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q
            for (
              b = this.options.horizontal
                ? this.getYAxisLabelX()
                : this.getXAxisLabelY(),
                j = null,
                i = null,
                q = [],
                c = o = 0,
                p = this.data.length;
              0 <= p ? o < p : o > p;
              c = 0 <= p ? ++o : --o
            )
              (k = this.data[this.data.length - 1 - c]),
                (d = this.options.horizontal
                  ? this.drawYAxisLabel(
                      b,
                      k._x - 0.5 * this.options.gridTextSize,
                      k.label
                    )
                  : this.drawXAxisLabel(k._x, b, k.label)),
                (a = this.options.horizontal ? 0 : this.options.xLabelAngle),
                (n = d.getBBox()),
                d.transform("r" + -a),
                (e = d.getBBox()),
                d.transform("t0," + e.height / 2 + "..."),
                0 !== a &&
                  ((h = -0.5 * n.width * Math.cos((a * Math.PI) / 180)),
                  d.transform("t" + h + ",0...")),
                this.options.horizontal
                  ? ((m = e.y), (l = e.height), (g = this.el.height()))
                  : ((m = e.x), (l = e.width), (g = this.el.width())),
                (null == j || j >= m + l || (null != i && i >= m)) &&
                m >= 0 &&
                m + l < g
                  ? (0 !== a &&
                      ((f =
                        (1.25 * this.options.gridTextSize) /
                        Math.sin((a * Math.PI) / 180)),
                      (i = m - f)),
                    this.options.horizontal
                      ? q.push((j = m))
                      : q.push((j = m - this.options.xLabelMargin)))
                  : q.push(d.remove())
            return q
          }),
          (d.prototype.getXAxisLabelY = function () {
            return (
              this.bottom +
              (this.options.xAxisLabelTopPadding || this.options.padding / 2)
            )
          }),
          (d.prototype.drawSeries = function () {
            var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r
            if (
              ((c = this.xSize / this.options.data.length),
              this.options.stacked)
            )
              i = 1
            else
              for (
                i = 0, d = q = 0, r = this.options.ykeys.length - 1;
                0 <= r ? q <= r : q >= r;
                d = 0 <= r ? ++q : --q
              )
                this.hasToShow(d) && (i += 1)
            return (
              (a =
                (c * this.options.barSizeRatio -
                  this.options.barGap * (i - 1)) /
                i),
              this.options.barSize && (a = Math.min(a, this.options.barSize)),
              (m = c - a * i - this.options.barGap * (i - 1)),
              (h = m / 2),
              (p = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null),
              (this.bars = function () {
                var d, i, m, q
                for (
                  m = this.data, q = [], e = d = 0, i = m.length;
                  d < i;
                  e = ++d
                )
                  (j = m[e]),
                    (f = 0),
                    q.push(
                      function () {
                        var d, i, m, q
                        for (
                          m = j._y, q = [], k = d = 0, i = m.length;
                          d < i;
                          k = ++d
                        )
                          (o = m[k]),
                            this.hasToShow(k) &&
                              (null !== o
                                ? (p
                                    ? ((n = Math.min(o, p)),
                                      (b = Math.max(o, p)))
                                    : ((n = o), (b = this.bottom)),
                                  (g = this.xStart + e * c + h),
                                  this.options.stacked ||
                                    (g += k * (a + this.options.barGap)),
                                  (l = b - n),
                                  this.options.verticalGridCondition &&
                                    this.options.verticalGridCondition(j.x) &&
                                    (this.options.horizontal
                                      ? this.drawBar(
                                          this.yStart,
                                          this.xStart + e * c,
                                          this.ySize,
                                          c,
                                          this.options.verticalGridColor,
                                          this.options.verticalGridOpacity,
                                          this.options.barRadius
                                        )
                                      : this.drawBar(
                                          this.xStart + e * c,
                                          this.yEnd,
                                          c,
                                          this.ySize,
                                          this.options.verticalGridColor,
                                          this.options.verticalGridOpacity,
                                          this.options.barRadius
                                        )),
                                  this.options.stacked && (n -= f),
                                  this.options.horizontal
                                    ? (this.drawBar(
                                        n,
                                        g,
                                        l,
                                        a,
                                        this.colorFor(j, k, "bar"),
                                        this.options.barOpacity,
                                        this.options.barRadius
                                      ),
                                      q.push((f -= l)))
                                    : (this.drawBar(
                                        g,
                                        n,
                                        a,
                                        l,
                                        this.colorFor(j, k, "bar"),
                                        this.options.barOpacity,
                                        this.options.barRadius
                                      ),
                                      q.push((f += l))))
                                : q.push(null))
                        return q
                      }.call(this)
                    )
                return q
              }.call(this))
            )
          }),
          (d.prototype.colorFor = function (a, b, c) {
            var d, e
            return "function" == typeof this.options.barColors
              ? ((d = { x: a.x, y: a.y[b], label: a.label }),
                (e = {
                  index: b,
                  key: this.options.ykeys[b],
                  label: this.options.labels[b],
                }),
                this.options.barColors.call(this, d, e, c))
              : this.options.barColors[b % this.options.barColors.length]
          }),
          (d.prototype.hitTest = function (a, b) {
            var c
            return 0 === this.data.length
              ? null
              : ((c = this.options.horizontal ? b : a),
                (c = Math.max(Math.min(c, this.xEnd), this.xStart)),
                Math.min(
                  this.data.length - 1,
                  Math.floor(
                    (c - this.xStart) / (this.xSize / this.data.length)
                  )
                ))
          }),
          (d.prototype.onGridClick = function (a, b) {
            var c
            return (
              (c = this.hitTest(a, b)),
              this.fire("click", c, this.data[c].src, a, b)
            )
          }),
          (d.prototype.onHoverMove = function (a, b) {
            var c, d
            return (
              (c = this.hitTest(a, b)),
              (d = this.hover).update.apply(d, this.hoverContentForRow(c))
            )
          }),
          (d.prototype.onHoverOut = function () {
            if (!1 !== this.options.hideHover) return this.hover.hide()
          }),
          (d.prototype.hoverContentForRow = function (b) {
            var c, d, e, f, g, h, i, j
            for (
              e = this.data[b],
                c = a("<div class='morris-hover-row-label'>").text(e.label),
                c = c.prop("outerHTML"),
                j = e.y,
                d = h = 0,
                i = j.length;
              h < i;
              d = ++h
            )
              (g = j[d]),
                !1 !== this.options.labels[d] &&
                  (c +=
                    "<div class='morris-hover-point' style='color: " +
                    this.colorFor(e, d, "label") +
                    "'>\n  " +
                    this.options.labels[d] +
                    ":\n  " +
                    this.yLabelFormat(g, d) +
                    "\n</div>")
            return (
              "function" == typeof this.options.hoverCallback &&
                (c = this.options.hoverCallback(b, this.options, c, e.src)),
              this.options.horizontal
                ? ((f = this.left + 0.5 * this.width),
                  (g = this.top + ((b + 0.5) * this.height) / this.data.length),
                  [c, f, g, !0])
                : ((f =
                    this.left + ((b + 0.5) * this.width) / this.data.length),
                  [c, f])
            )
          }),
          (d.prototype.drawXAxisLabel = function (a, b, c) {
            return this.raphael
              .text(a, b, c)
              .attr("font-size", this.options.gridTextSize)
              .attr("font-family", this.options.gridTextFamily)
              .attr("font-weight", this.options.gridTextWeight)
              .attr("fill", this.options.gridTextColor)
          }),
          (d.prototype.drawBar = function (a, b, c, d, e, f, g) {
            var h, i
            return (
              (h = Math.max.apply(Math, g)),
              (i =
                0 === h || h > d
                  ? this.raphael.rect(a, b, c, d)
                  : this.raphael.path(this.roundedRect(a, b, c, d, g))),
              i.attr("fill", e).attr("fill-opacity", f).attr("stroke", "none")
            )
          }),
          (d.prototype.roundedRect = function (a, b, c, d, e) {
            return (
              null == e && (e = [0, 0, 0, 0]),
              [
                "M",
                a,
                e[0] + b,
                "Q",
                a,
                b,
                a + e[0],
                b,
                "L",
                a + c - e[1],
                b,
                "Q",
                a + c,
                b,
                a + c,
                b + e[1],
                "L",
                a + c,
                b + d - e[2],
                "Q",
                a + c,
                b + d,
                a + c - e[2],
                b + d,
                "L",
                a + e[3],
                b + d,
                "Q",
                a,
                b + d,
                a,
                b + d - e[3],
                "Z",
              ]
            )
          }),
          d
        )
      })(b.Grid)),
      (b.Donut = (function (c) {
        function d(c) {
          ;(this.resizeHandler = f(this.resizeHandler, this)),
            (this.select = f(this.select, this)),
            (this.click = f(this.click, this))
          var d = this
          if (!(this instanceof b.Donut)) return new b.Donut(c)
          if (
            ((this.options = a.extend({}, this.defaults, c)),
            "string" == typeof c.element
              ? (this.el = a(document.getElementById(c.element)))
              : (this.el = a(c.element)),
            null === this.el || 0 === this.el.length)
          )
            throw new Error("Graph placeholder not found.")
          void 0 !== c.data &&
            0 !== c.data.length &&
            ((this.raphael = new Raphael(this.el[0])),
            this.options.resize &&
              a(window).bind("resize", function (a) {
                return (
                  null != d.timeoutId && window.clearTimeout(d.timeoutId),
                  (d.timeoutId = window.setTimeout(d.resizeHandler, 100))
                )
              }),
            this.setData(c.data))
        }
        return (
          h(d, c),
          (d.prototype.defaults = {
            colors: [
              "#0B62A4",
              "#3980B5",
              "#679DC6",
              "#95BBD7",
              "#B0CCE1",
              "#095791",
              "#095085",
              "#083E67",
              "#052C48",
              "#042135",
            ],
            backgroundColor: "#FFFFFF",
            labelColor: "#000000",
            formatter: b.commas,
            resize: !1,
          }),
          (d.prototype.redraw = function () {
            var a,
              c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v,
              w,
              x
            for (
              this.raphael.clear(),
                c = this.el.width() / 2,
                d = this.el.height() / 2,
                n = (Math.min(c, d) - 10) / 3,
                l = 0,
                u = this.values,
                o = 0,
                r = u.length;
              o < r;
              o++
            )
              (m = u[o]), (l += m)
            for (
              i = 5 / (2 * n),
                a = 1.9999 * Math.PI - i * this.data.length,
                g = 0,
                f = 0,
                this.segments = [],
                v = this.values,
                e = p = 0,
                s = v.length;
              p < s;
              e = ++p
            )
              (m = v[e]),
                (j = g + i + a * (m / l)),
                (k = new b.DonutSegment(
                  c,
                  d,
                  2 * n,
                  n,
                  g,
                  j,
                  this.data[e].color ||
                    this.options.colors[f % this.options.colors.length],
                  this.options.backgroundColor,
                  f,
                  this.raphael
                )),
                k.render(),
                this.segments.push(k),
                k.on("hover", this.select),
                k.on("click", this.click),
                (g = j),
                (f += 1)
            for (
              this.text1 = this.drawEmptyDonutLabel(
                c,
                d - 10,
                this.options.labelColor,
                15,
                800
              ),
                this.text2 = this.drawEmptyDonutLabel(
                  c,
                  d + 10,
                  this.options.labelColor,
                  14
                ),
                h = Math.max.apply(Math, this.values),
                f = 0,
                w = this.values,
                x = [],
                q = 0,
                t = w.length;
              q < t;
              q++
            ) {
              if ((m = w[q]) === h) {
                this.select(f)
                break
              }
              x.push((f += 1))
            }
            return x
          }),
          (d.prototype.setData = function (a) {
            var b
            return (
              (this.data = a),
              (this.values = function () {
                var a, c, d, e
                for (d = this.data, e = [], a = 0, c = d.length; a < c; a++)
                  (b = d[a]), e.push(parseFloat(b.value))
                return e
              }.call(this)),
              this.redraw()
            )
          }),
          (d.prototype.click = function (a) {
            return this.fire("click", a, this.data[a])
          }),
          (d.prototype.select = function (a) {
            var b, c, d, e, f, g
            for (g = this.segments, e = 0, f = g.length; e < f; e++)
              (c = g[e]), c.deselect()
            return (
              (d = this.segments[a]),
              d.select(),
              (b = this.data[a]),
              this.setLabels(b.label, this.options.formatter(b.value, b))
            )
          }),
          (d.prototype.setLabels = function (a, b) {
            var c, d, e, f, g, h, i, j
            return (
              (c =
                (2 *
                  (Math.min(this.el.width() / 2, this.el.height() / 2) - 10)) /
                3),
              (f = 1.8 * c),
              (e = c / 2),
              (d = c / 3),
              this.text1.attr({ text: a, transform: "" }),
              (g = this.text1.getBBox()),
              (h = Math.min(f / g.width, e / g.height)),
              this.text1.attr({
                transform:
                  "S" +
                  h +
                  "," +
                  h +
                  "," +
                  (g.x + g.width / 2) +
                  "," +
                  (g.y + g.height),
              }),
              this.text2.attr({ text: b, transform: "" }),
              (i = this.text2.getBBox()),
              (j = Math.min(f / i.width, d / i.height)),
              this.text2.attr({
                transform:
                  "S" + j + "," + j + "," + (i.x + i.width / 2) + "," + i.y,
              })
            )
          }),
          (d.prototype.drawEmptyDonutLabel = function (a, b, c, d, e) {
            var f
            return (
              (f = this.raphael
                .text(a, b, "")
                .attr("font-size", d)
                .attr("fill", c)),
              null != e && f.attr("font-weight", e),
              f
            )
          }),
          (d.prototype.resizeHandler = function () {
            return (
              (this.timeoutId = null),
              this.raphael.setSize(this.el.width(), this.el.height()),
              this.redraw()
            )
          }),
          d
        )
      })(b.EventEmitter)),
      (b.DonutSegment = (function (a) {
        function b(a, b, c, d, e, g, h, i, j, k) {
          ;(this.cx = a),
            (this.cy = b),
            (this.inner = c),
            (this.outer = d),
            (this.color = h),
            (this.backgroundColor = i),
            (this.index = j),
            (this.raphael = k),
            (this.deselect = f(this.deselect, this)),
            (this.select = f(this.select, this)),
            (this.sin_p0 = Math.sin(e)),
            (this.cos_p0 = Math.cos(e)),
            (this.sin_p1 = Math.sin(g)),
            (this.cos_p1 = Math.cos(g)),
            (this.is_long = g - e > Math.PI ? 1 : 0),
            (this.path = this.calcSegment(
              this.inner + 3,
              this.inner + this.outer - 5
            )),
            (this.selectedPath = this.calcSegment(
              this.inner + 3,
              this.inner + this.outer
            )),
            (this.hilight = this.calcArc(this.inner))
        }
        return (
          h(b, a),
          (b.prototype.calcArcPoints = function (a) {
            return [
              this.cx + a * this.sin_p0,
              this.cy + a * this.cos_p0,
              this.cx + a * this.sin_p1,
              this.cy + a * this.cos_p1,
            ]
          }),
          (b.prototype.calcSegment = function (a, b) {
            var c, d, e, f, g, h, i, j, k, l
            return (
              (k = this.calcArcPoints(a)),
              (c = k[0]),
              (e = k[1]),
              (d = k[2]),
              (f = k[3]),
              (l = this.calcArcPoints(b)),
              (g = l[0]),
              (i = l[1]),
              (h = l[2]),
              (j = l[3]),
              "M" +
                c +
                "," +
                e +
                "A" +
                a +
                "," +
                a +
                ",0," +
                this.is_long +
                ",0," +
                d +
                "," +
                f +
                "L" +
                h +
                "," +
                j +
                "A" +
                b +
                "," +
                b +
                ",0," +
                this.is_long +
                ",1," +
                g +
                "," +
                i +
                "Z"
            )
          }),
          (b.prototype.calcArc = function (a) {
            var b, c, d, e, f
            return (
              (f = this.calcArcPoints(a)),
              (b = f[0]),
              (d = f[1]),
              (c = f[2]),
              (e = f[3]),
              "M" +
                b +
                "," +
                d +
                "A" +
                a +
                "," +
                a +
                ",0," +
                this.is_long +
                ",0," +
                c +
                "," +
                e
            )
          }),
          (b.prototype.render = function () {
            var a = this
            return (
              (this.arc = this.drawDonutArc(this.hilight, this.color)),
              (this.seg = this.drawDonutSegment(
                this.path,
                this.color,
                this.backgroundColor,
                function () {
                  return a.fire("hover", a.index)
                },
                function () {
                  return a.fire("click", a.index)
                }
              ))
            )
          }),
          (b.prototype.drawDonutArc = function (a, b) {
            return this.raphael
              .path(a)
              .attr({ stroke: b, "stroke-width": 2, opacity: 0 })
          }),
          (b.prototype.drawDonutSegment = function (a, b, c, d, e) {
            return this.raphael
              .path(a)
              .attr({ fill: b, stroke: c, "stroke-width": 3 })
              .hover(d)
              .click(e)
          }),
          (b.prototype.select = function () {
            if (!this.selected)
              return (
                this.seg.animate({ path: this.selectedPath }, 150, "<>"),
                this.arc.animate({ opacity: 1 }, 150, "<>"),
                (this.selected = !0)
              )
          }),
          (b.prototype.deselect = function () {
            if (this.selected)
              return (
                this.seg.animate({ path: this.path }, 150, "<>"),
                this.arc.animate({ opacity: 0 }, 150, "<>"),
                (this.selected = !1)
              )
          }),
          b
        )
      })(b.EventEmitter))
  }.call(this)
