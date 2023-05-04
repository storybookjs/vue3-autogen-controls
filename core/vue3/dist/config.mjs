import { __commonJS, __toESM } from './chunk-VO4KG7P2.mjs';
export { decorateStory as applyDecorators, render, renderToCanvas } from './chunk-VO4KG7P2.mjs';
import { enhanceArgTypes, SNIPPET_RENDERED, extractComponentDescription, hasDocgen, extractComponentProps, SourceType } from '@storybook/docs-tools';
import { addons, useEffect } from '@storybook/preview-api';

// ../../node_modules/prettier/parser-html.js
var require_parser_html = __commonJS({
  "../../node_modules/prettier/parser-html.js"(exports, module) {
    (function(e) {
      if (typeof exports == "object" && typeof module == "object")
        module.exports = e();
      else if (typeof define == "function" && define.amd)
        define(e);
      else {
        var i = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
        i.prettierPlugins = i.prettierPlugins || {}, i.prettierPlugins.html = e();
      }
    })(function() {
      var y = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
      var G = y((uc, Hr) => {
        var be = function(e) {
          return e && e.Math == Math && e;
        };
        Hr.exports = be(typeof globalThis == "object" && globalThis) || be(typeof window == "object" && window) || be(typeof self == "object" && self) || be(typeof global == "object" && global) || function() {
          return this;
        }() || Function("return this")();
      });
      var se = y((tc, zr) => {
        zr.exports = function(e) {
          try {
            return !!e();
          } catch {
            return true;
          }
        };
      });
      var oe = y((nc, Wr) => {
        var As = se();
        Wr.exports = !As(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      });
      var we = y((sc, Yr) => {
        var vs = se();
        Yr.exports = !vs(function() {
          var e = function() {
          }.bind();
          return typeof e != "function" || e.hasOwnProperty("prototype");
        });
      });
      var De = y((ic, Qr) => {
        var _s = we(), Ne = Function.prototype.call;
        Qr.exports = _s ? Ne.bind(Ne) : function() {
          return Ne.apply(Ne, arguments);
        };
      });
      var eu = y((Zr) => {
        var Kr = {}.propertyIsEnumerable, Jr = Object.getOwnPropertyDescriptor, Ss = Jr && !Kr.call({ 1: 2 }, 1);
        Zr.f = Ss ? function(r) {
          var u = Jr(this, r);
          return !!u && u.enumerable;
        } : Kr;
      });
      var Oe = y((oc, ru) => {
        ru.exports = function(e, r) {
          return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: r };
        };
      });
      var Q = y((Dc, nu) => {
        var uu = we(), tu = Function.prototype, ys = tu.bind, Ze = tu.call, Ts = uu && ys.bind(Ze, Ze);
        nu.exports = uu ? function(e) {
          return e && Ts(e);
        } : function(e) {
          return e && function() {
            return Ze.apply(e, arguments);
          };
        };
      });
      var qe = y((lc, iu) => {
        var su = Q(), Bs = su({}.toString), bs = su("".slice);
        iu.exports = function(e) {
          return bs(Bs(e), 8, -1);
        };
      });
      var ou = y((cc, au) => {
        var ws = G(), Ns = Q(), Os = se(), qs = qe(), er = ws.Object, Is = Ns("".split);
        au.exports = Os(function() {
          return !er("z").propertyIsEnumerable(0);
        }) ? function(e) {
          return qs(e) == "String" ? Is(e, "") : er(e);
        } : er;
      });
      var rr = y((hc, Du) => {
        var Rs = G(), xs = Rs.TypeError;
        Du.exports = function(e) {
          if (e == null)
            throw xs("Can't call method on " + e);
          return e;
        };
      });
      var Ie = y((pc, lu) => {
        var Ps = ou(), ks = rr();
        lu.exports = function(e) {
          return Ps(ks(e));
        };
      });
      var K = y((fc, cu) => {
        cu.exports = function(e) {
          return typeof e == "function";
        };
      });
      var le = y((dc, hu) => {
        var Ls = K();
        hu.exports = function(e) {
          return typeof e == "object" ? e !== null : Ls(e);
        };
      });
      var me = y((Ec, pu) => {
        var ur = G(), $s = K(), Ms = function(e) {
          return $s(e) ? e : void 0;
        };
        pu.exports = function(e, r) {
          return arguments.length < 2 ? Ms(ur[e]) : ur[e] && ur[e][r];
        };
      });
      var tr = y((Cc, fu) => {
        var js = Q();
        fu.exports = js({}.isPrototypeOf);
      });
      var Eu = y((mc, du) => {
        var Us = me();
        du.exports = Us("navigator", "userAgent") || "";
      });
      var _u = y((gc, vu) => {
        var Au = G(), nr = Eu(), Cu = Au.process, mu = Au.Deno, gu = Cu && Cu.versions || mu && mu.version, Fu = gu && gu.v8, ue, Re;
        Fu && (ue = Fu.split("."), Re = ue[0] > 0 && ue[0] < 4 ? 1 : +(ue[0] + ue[1]));
        !Re && nr && (ue = nr.match(/Edge\/(\d+)/), (!ue || ue[1] >= 74) && (ue = nr.match(/Chrome\/(\d+)/), ue && (Re = +ue[1])));
        vu.exports = Re;
      });
      var sr = y((Fc, yu) => {
        var Su = _u(), Gs = se();
        yu.exports = !!Object.getOwnPropertySymbols && !Gs(function() {
          var e = Symbol();
          return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Su && Su < 41;
        });
      });
      var ir = y((Ac, Tu) => {
        var Vs = sr();
        Tu.exports = Vs && !Symbol.sham && typeof Symbol.iterator == "symbol";
      });
      var ar = y((vc, Bu) => {
        var Xs = G(), Hs = me(), zs = K(), Ws = tr(), Ys = ir(), Qs = Xs.Object;
        Bu.exports = Ys ? function(e) {
          return typeof e == "symbol";
        } : function(e) {
          var r = Hs("Symbol");
          return zs(r) && Ws(r.prototype, Qs(e));
        };
      });
      var xe = y((_c, bu) => {
        var Ks = G(), Js = Ks.String;
        bu.exports = function(e) {
          try {
            return Js(e);
          } catch {
            return "Object";
          }
        };
      });
      var ge = y((Sc, wu) => {
        var Zs = G(), ei = K(), ri = xe(), ui = Zs.TypeError;
        wu.exports = function(e) {
          if (ei(e))
            return e;
          throw ui(ri(e) + " is not a function");
        };
      });
      var Pe = y((yc, Nu) => {
        var ti = ge();
        Nu.exports = function(e, r) {
          var u = e[r];
          return u == null ? void 0 : ti(u);
        };
      });
      var qu = y((Tc, Ou) => {
        var ni = G(), or = De(), Dr = K(), lr = le(), si = ni.TypeError;
        Ou.exports = function(e, r) {
          var u, s;
          if (r === "string" && Dr(u = e.toString) && !lr(s = or(u, e)) || Dr(u = e.valueOf) && !lr(s = or(u, e)) || r !== "string" && Dr(u = e.toString) && !lr(s = or(u, e)))
            return s;
          throw si("Can't convert object to primitive value");
        };
      });
      var Ru = y((Bc, Iu) => {
        Iu.exports = false;
      });
      var ke = y((bc, Pu) => {
        var xu = G(), ii = Object.defineProperty;
        Pu.exports = function(e, r) {
          try {
            ii(xu, e, { value: r, configurable: true, writable: true });
          } catch {
            xu[e] = r;
          }
          return r;
        };
      });
      var Le = y((wc, Lu) => {
        var ai = G(), oi = ke(), ku = "__core-js_shared__", Di = ai[ku] || oi(ku, {});
        Lu.exports = Di;
      });
      var cr = y((Nc, Mu) => {
        var li = Ru(), $u = Le();
        (Mu.exports = function(e, r) {
          return $u[e] || ($u[e] = r !== void 0 ? r : {});
        })("versions", []).push({ version: "3.22.2", mode: li ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE", source: "https://github.com/zloirock/core-js" });
      });
      var hr = y((Oc, ju) => {
        var ci = G(), hi = rr(), pi = ci.Object;
        ju.exports = function(e) {
          return pi(hi(e));
        };
      });
      var ie = y((qc, Uu) => {
        var fi = Q(), di = hr(), Ei = fi({}.hasOwnProperty);
        Uu.exports = Object.hasOwn || function(r, u) {
          return Ei(di(r), u);
        };
      });
      var pr = y((Ic, Gu) => {
        var Ci = Q(), mi = 0, gi = Math.random(), Fi = Ci(1 .toString);
        Gu.exports = function(e) {
          return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Fi(++mi + gi, 36);
        };
      });
      var he = y((Rc, Wu) => {
        var Ai = G(), vi = cr(), Vu = ie(), _i = pr(), Xu = sr(), zu = ir(), fe = vi("wks"), ce = Ai.Symbol, Hu = ce && ce.for, Si = zu ? ce : ce && ce.withoutSetter || _i;
        Wu.exports = function(e) {
          if (!Vu(fe, e) || !(Xu || typeof fe[e] == "string")) {
            var r = "Symbol." + e;
            Xu && Vu(ce, e) ? fe[e] = ce[e] : zu && Hu ? fe[e] = Hu(r) : fe[e] = Si(r);
          }
          return fe[e];
        };
      });
      var Ju = y((xc, Ku) => {
        var yi = G(), Ti = De(), Yu = le(), Qu = ar(), Bi = Pe(), bi = qu(), wi = he(), Ni = yi.TypeError, Oi = wi("toPrimitive");
        Ku.exports = function(e, r) {
          if (!Yu(e) || Qu(e))
            return e;
          var u = Bi(e, Oi), s;
          if (u) {
            if (r === void 0 && (r = "default"), s = Ti(u, e, r), !Yu(s) || Qu(s))
              return s;
            throw Ni("Can't convert object to primitive value");
          }
          return r === void 0 && (r = "number"), bi(e, r);
        };
      });
      var $e = y((Pc, Zu) => {
        var qi = Ju(), Ii = ar();
        Zu.exports = function(e) {
          var r = qi(e, "string");
          return Ii(r) ? r : r + "";
        };
      });
      var ut = y((kc, rt) => {
        var Ri = G(), et = le(), fr = Ri.document, xi = et(fr) && et(fr.createElement);
        rt.exports = function(e) {
          return xi ? fr.createElement(e) : {};
        };
      });
      var dr = y((Lc, tt) => {
        var Pi = oe(), ki = se(), Li = ut();
        tt.exports = !Pi && !ki(function() {
          return Object.defineProperty(Li("div"), "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      });
      var Er = y((st) => {
        var $i = oe(), Mi = De(), ji = eu(), Ui = Oe(), Gi = Ie(), Vi = $e(), Xi = ie(), Hi = dr(), nt = Object.getOwnPropertyDescriptor;
        st.f = $i ? nt : function(r, u) {
          if (r = Gi(r), u = Vi(u), Hi)
            try {
              return nt(r, u);
            } catch {
            }
          if (Xi(r, u))
            return Ui(!Mi(ji.f, r, u), r[u]);
        };
      });
      var at = y((Mc, it) => {
        var zi = oe(), Wi = se();
        it.exports = zi && Wi(function() {
          return Object.defineProperty(function() {
          }, "prototype", { value: 42, writable: false }).prototype != 42;
        });
      });
      var de = y((jc, Dt) => {
        var ot = G(), Yi = le(), Qi = ot.String, Ki = ot.TypeError;
        Dt.exports = function(e) {
          if (Yi(e))
            return e;
          throw Ki(Qi(e) + " is not an object");
        };
      });
      var je = y((ct) => {
        var Ji = G(), Zi = oe(), ea = dr(), ra = at(), Me = de(), lt = $e(), ua = Ji.TypeError, Cr = Object.defineProperty, ta = Object.getOwnPropertyDescriptor, mr = "enumerable", gr = "configurable", Fr = "writable";
        ct.f = Zi ? ra ? function(r, u, s) {
          if (Me(r), u = lt(u), Me(s), typeof r == "function" && u === "prototype" && "value" in s && Fr in s && !s[Fr]) {
            var D = ta(r, u);
            D && D[Fr] && (r[u] = s.value, s = { configurable: gr in s ? s[gr] : D[gr], enumerable: mr in s ? s[mr] : D[mr], writable: false });
          }
          return Cr(r, u, s);
        } : Cr : function(r, u, s) {
          if (Me(r), u = lt(u), Me(s), ea)
            try {
              return Cr(r, u, s);
            } catch {
            }
          if ("get" in s || "set" in s)
            throw ua("Accessors not supported");
          return "value" in s && (r[u] = s.value), r;
        };
      });
      var Ue = y((Gc, ht) => {
        var na = oe(), sa = je(), ia = Oe();
        ht.exports = na ? function(e, r, u) {
          return sa.f(e, r, ia(1, u));
        } : function(e, r, u) {
          return e[r] = u, e;
        };
      });
      var Ge = y((Vc, pt) => {
        var aa = Q(), oa = K(), Ar = Le(), Da = aa(Function.toString);
        oa(Ar.inspectSource) || (Ar.inspectSource = function(e) {
          return Da(e);
        });
        pt.exports = Ar.inspectSource;
      });
      var Et = y((Xc, dt) => {
        var la = G(), ca = K(), ha = Ge(), ft = la.WeakMap;
        dt.exports = ca(ft) && /native code/.test(ha(ft));
      });
      var gt = y((Hc, mt) => {
        var pa = cr(), fa = pr(), Ct = pa("keys");
        mt.exports = function(e) {
          return Ct[e] || (Ct[e] = fa(e));
        };
      });
      var vr = y((zc, Ft) => {
        Ft.exports = {};
      });
      var Tt = y((Wc, yt) => {
        var da = Et(), St = G(), _r = Q(), Ea = le(), Ca = Ue(), Sr = ie(), yr = Le(), ma = gt(), ga = vr(), At = "Object already initialized", Br = St.TypeError, Fa = St.WeakMap, Ve, Fe, Xe, Aa = function(e) {
          return Xe(e) ? Fe(e) : Ve(e, {});
        }, va = function(e) {
          return function(r) {
            var u;
            if (!Ea(r) || (u = Fe(r)).type !== e)
              throw Br("Incompatible receiver, " + e + " required");
            return u;
          };
        };
        da || yr.state ? (ae = yr.state || (yr.state = new Fa()), vt = _r(ae.get), Tr = _r(ae.has), _t = _r(ae.set), Ve = function(e, r) {
          if (Tr(ae, e))
            throw new Br(At);
          return r.facade = e, _t(ae, e, r), r;
        }, Fe = function(e) {
          return vt(ae, e) || {};
        }, Xe = function(e) {
          return Tr(ae, e);
        }) : (pe = ma("state"), ga[pe] = true, Ve = function(e, r) {
          if (Sr(e, pe))
            throw new Br(At);
          return r.facade = e, Ca(e, pe, r), r;
        }, Fe = function(e) {
          return Sr(e, pe) ? e[pe] : {};
        }, Xe = function(e) {
          return Sr(e, pe);
        });
        var ae, vt, Tr, _t, pe;
        yt.exports = { set: Ve, get: Fe, has: Xe, enforce: Aa, getterFor: va };
      });
      var wt = y((Yc, bt) => {
        var br = oe(), _a = ie(), Bt = Function.prototype, Sa = br && Object.getOwnPropertyDescriptor, wr = _a(Bt, "name"), ya = wr && function() {
        }.name === "something", Ta = wr && (!br || br && Sa(Bt, "name").configurable);
        bt.exports = { EXISTS: wr, PROPER: ya, CONFIGURABLE: Ta };
      });
      var Rt = y((Qc, It) => {
        var Ba = G(), Nt = K(), ba = ie(), Ot = Ue(), wa = ke(), Na = Ge(), qt = Tt(), Oa = wt().CONFIGURABLE, qa = qt.get, Ia = qt.enforce, Ra = String(String).split("String");
        (It.exports = function(e, r, u, s) {
          var D = s ? !!s.unsafe : false, n = s ? !!s.enumerable : false, i = s ? !!s.noTargetGet : false, p = s && s.name !== void 0 ? s.name : r, l;
          if (Nt(u) && (String(p).slice(0, 7) === "Symbol(" && (p = "[" + String(p).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!ba(u, "name") || Oa && u.name !== p) && Ot(u, "name", p), l = Ia(u), l.source || (l.source = Ra.join(typeof p == "string" ? p : ""))), e === Ba) {
            n ? e[r] = u : wa(r, u);
            return;
          } else
            D ? !i && e[r] && (n = true) : delete e[r];
          n ? e[r] = u : Ot(e, r, u);
        })(Function.prototype, "toString", function() {
          return Nt(this) && qa(this).source || Na(this);
        });
      });
      var Nr = y((Kc, xt) => {
        var xa = Math.ceil, Pa = Math.floor;
        xt.exports = function(e) {
          var r = +e;
          return r !== r || r === 0 ? 0 : (r > 0 ? Pa : xa)(r);
        };
      });
      var kt = y((Jc, Pt) => {
        var ka = Nr(), La = Math.max, $a = Math.min;
        Pt.exports = function(e, r) {
          var u = ka(e);
          return u < 0 ? La(u + r, 0) : $a(u, r);
        };
      });
      var $t = y((Zc, Lt) => {
        var Ma = Nr(), ja = Math.min;
        Lt.exports = function(e) {
          return e > 0 ? ja(Ma(e), 9007199254740991) : 0;
        };
      });
      var Ae = y((e2, Mt) => {
        var Ua = $t();
        Mt.exports = function(e) {
          return Ua(e.length);
        };
      });
      var Gt = y((r2, Ut) => {
        var Ga = Ie(), Va = kt(), Xa = Ae(), jt = function(e) {
          return function(r, u, s) {
            var D = Ga(r), n = Xa(D), i = Va(s, n), p;
            if (e && u != u) {
              for (; n > i; )
                if (p = D[i++], p != p)
                  return true;
            } else
              for (; n > i; i++)
                if ((e || i in D) && D[i] === u)
                  return e || i || 0;
            return !e && -1;
          };
        };
        Ut.exports = { includes: jt(true), indexOf: jt(false) };
      });
      var Ht = y((u2, Xt) => {
        var Ha = Q(), Or = ie(), za = Ie(), Wa = Gt().indexOf, Ya = vr(), Vt = Ha([].push);
        Xt.exports = function(e, r) {
          var u = za(e), s = 0, D = [], n;
          for (n in u)
            !Or(Ya, n) && Or(u, n) && Vt(D, n);
          for (; r.length > s; )
            Or(u, n = r[s++]) && (~Wa(D, n) || Vt(D, n));
          return D;
        };
      });
      var Wt = y((t2, zt) => {
        zt.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      });
      var Qt = y((Yt) => {
        var Qa = Ht(), Ka = Wt(), Ja = Ka.concat("length", "prototype");
        Yt.f = Object.getOwnPropertyNames || function(r) {
          return Qa(r, Ja);
        };
      });
      var Jt = y((Kt) => {
        Kt.f = Object.getOwnPropertySymbols;
      });
      var en = y((i2, Zt) => {
        var Za = me(), eo = Q(), ro = Qt(), uo = Jt(), to = de(), no = eo([].concat);
        Zt.exports = Za("Reflect", "ownKeys") || function(r) {
          var u = ro.f(to(r)), s = uo.f;
          return s ? no(u, s(r)) : u;
        };
      });
      var tn = y((a2, un) => {
        var rn = ie(), so = en(), io = Er(), ao = je();
        un.exports = function(e, r, u) {
          for (var s = so(r), D = ao.f, n = io.f, i = 0; i < s.length; i++) {
            var p = s[i];
            !rn(e, p) && !(u && rn(u, p)) && D(e, p, n(r, p));
          }
        };
      });
      var sn = y((o2, nn) => {
        var oo = se(), Do = K(), lo = /#|\.prototype\./, ve = function(e, r) {
          var u = ho[co(e)];
          return u == fo ? true : u == po ? false : Do(r) ? oo(r) : !!r;
        }, co = ve.normalize = function(e) {
          return String(e).replace(lo, ".").toLowerCase();
        }, ho = ve.data = {}, po = ve.NATIVE = "N", fo = ve.POLYFILL = "P";
        nn.exports = ve;
      });
      var He = y((D2, an) => {
        var qr = G(), Eo = Er().f, Co = Ue(), mo = Rt(), go = ke(), Fo = tn(), Ao = sn();
        an.exports = function(e, r) {
          var u = e.target, s = e.global, D = e.stat, n, i, p, l, g, a;
          if (s ? i = qr : D ? i = qr[u] || go(u, {}) : i = (qr[u] || {}).prototype, i)
            for (p in r) {
              if (g = r[p], e.noTargetGet ? (a = Eo(i, p), l = a && a.value) : l = i[p], n = Ao(s ? p : u + (D ? "." : "#") + p, e.forced), !n && l !== void 0) {
                if (typeof g == typeof l)
                  continue;
                Fo(g, l);
              }
              (e.sham || l && l.sham) && Co(g, "sham", true), mo(i, p, g, e);
            }
        };
      });
      var on = y(() => {
        var vo = He(), _o = G();
        vo({ global: true }, { globalThis: _o });
      });
      var Dn = y(() => {
        on();
      });
      var Ir = y((f2, ln) => {
        var So = qe();
        ln.exports = Array.isArray || function(r) {
          return So(r) == "Array";
        };
      });
      var Rr = y((d2, hn) => {
        var cn = Q(), yo = ge(), To = we(), Bo = cn(cn.bind);
        hn.exports = function(e, r) {
          return yo(e), r === void 0 ? e : To ? Bo(e, r) : function() {
            return e.apply(r, arguments);
          };
        };
      });
      var dn = y((E2, fn) => {
        var bo = G(), wo = Ir(), No = Ae(), Oo = Rr(), qo = bo.TypeError, pn = function(e, r, u, s, D, n, i, p) {
          for (var l = D, g = 0, a = i ? Oo(i, p) : false, c, h; g < s; ) {
            if (g in u) {
              if (c = a ? a(u[g], g, r) : u[g], n > 0 && wo(c))
                h = No(c), l = pn(e, r, c, h, l, n - 1) - 1;
              else {
                if (l >= 9007199254740991)
                  throw qo("Exceed the acceptable array length");
                e[l] = c;
              }
              l++;
            }
            g++;
          }
          return l;
        };
        fn.exports = pn;
      });
      var mn = y((C2, Cn) => {
        var Io = he(), Ro = Io("toStringTag"), En = {};
        En[Ro] = "z";
        Cn.exports = String(En) === "[object z]";
      });
      var xr = y((m2, gn) => {
        var xo = G(), Po = mn(), ko = K(), ze = qe(), Lo = he(), $o = Lo("toStringTag"), Mo = xo.Object, jo = ze(function() {
          return arguments;
        }()) == "Arguments", Uo = function(e, r) {
          try {
            return e[r];
          } catch {
          }
        };
        gn.exports = Po ? ze : function(e) {
          var r, u, s;
          return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (u = Uo(r = Mo(e), $o)) == "string" ? u : jo ? ze(r) : (s = ze(r)) == "Object" && ko(r.callee) ? "Arguments" : s;
        };
      });
      var yn = y((g2, Sn) => {
        var Go = Q(), Vo = se(), Fn = K(), Xo = xr(), Ho = me(), zo = Ge(), An = function() {
        }, Wo = [], vn = Ho("Reflect", "construct"), Pr = /^\s*(?:class|function)\b/, Yo = Go(Pr.exec), Qo = !Pr.exec(An), _e = function(r) {
          if (!Fn(r))
            return false;
          try {
            return vn(An, Wo, r), true;
          } catch {
            return false;
          }
        }, _n = function(r) {
          if (!Fn(r))
            return false;
          switch (Xo(r)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return false;
          }
          try {
            return Qo || !!Yo(Pr, zo(r));
          } catch {
            return true;
          }
        };
        _n.sham = true;
        Sn.exports = !vn || Vo(function() {
          var e;
          return _e(_e.call) || !_e(Object) || !_e(function() {
            e = true;
          }) || e;
        }) ? _n : _e;
      });
      var wn = y((F2, bn) => {
        var Ko = G(), Tn = Ir(), Jo = yn(), Zo = le(), eD = he(), rD = eD("species"), Bn = Ko.Array;
        bn.exports = function(e) {
          var r;
          return Tn(e) && (r = e.constructor, Jo(r) && (r === Bn || Tn(r.prototype)) ? r = void 0 : Zo(r) && (r = r[rD], r === null && (r = void 0))), r === void 0 ? Bn : r;
        };
      });
      var On = y((A2, Nn) => {
        var uD = wn();
        Nn.exports = function(e, r) {
          return new (uD(e))(r === 0 ? 0 : r);
        };
      });
      var qn = y(() => {
        var tD = He(), nD = dn(), sD = ge(), iD = hr(), aD = Ae(), oD = On();
        tD({ target: "Array", proto: true }, { flatMap: function(r) {
          var u = iD(this), s = aD(u), D;
          return sD(r), D = oD(u, 0), D.length = nD(D, u, u, s, 0, 1, r, arguments.length > 1 ? arguments[1] : void 0), D;
        } });
      });
      var kr = y((S2, In) => {
        In.exports = {};
      });
      var xn = y((y2, Rn) => {
        var DD = he(), lD = kr(), cD = DD("iterator"), hD = Array.prototype;
        Rn.exports = function(e) {
          return e !== void 0 && (lD.Array === e || hD[cD] === e);
        };
      });
      var Lr = y((T2, kn) => {
        var pD = xr(), Pn = Pe(), fD = kr(), dD = he(), ED = dD("iterator");
        kn.exports = function(e) {
          if (e != null)
            return Pn(e, ED) || Pn(e, "@@iterator") || fD[pD(e)];
        };
      });
      var $n = y((B2, Ln) => {
        var CD = G(), mD = De(), gD = ge(), FD = de(), AD = xe(), vD = Lr(), _D = CD.TypeError;
        Ln.exports = function(e, r) {
          var u = arguments.length < 2 ? vD(e) : r;
          if (gD(u))
            return FD(mD(u, e));
          throw _D(AD(e) + " is not iterable");
        };
      });
      var Un = y((b2, jn) => {
        var SD = De(), Mn = de(), yD = Pe();
        jn.exports = function(e, r, u) {
          var s, D;
          Mn(e);
          try {
            if (s = yD(e, "return"), !s) {
              if (r === "throw")
                throw u;
              return u;
            }
            s = SD(s, e);
          } catch (n) {
            D = true, s = n;
          }
          if (r === "throw")
            throw u;
          if (D)
            throw s;
          return Mn(s), u;
        };
      });
      var zn = y((w2, Hn) => {
        var TD = G(), BD = Rr(), bD = De(), wD = de(), ND = xe(), OD = xn(), qD = Ae(), Gn = tr(), ID = $n(), RD = Lr(), Vn = Un(), xD = TD.TypeError, We = function(e, r) {
          this.stopped = e, this.result = r;
        }, Xn = We.prototype;
        Hn.exports = function(e, r, u) {
          var s = u && u.that, D = !!(u && u.AS_ENTRIES), n = !!(u && u.IS_ITERATOR), i = !!(u && u.INTERRUPTED), p = BD(r, s), l, g, a, c, h, C, d, m = function(B) {
            return l && Vn(l, "normal", B), new We(true, B);
          }, T = function(B) {
            return D ? (wD(B), i ? p(B[0], B[1], m) : p(B[0], B[1])) : i ? p(B, m) : p(B);
          };
          if (n)
            l = e;
          else {
            if (g = RD(e), !g)
              throw xD(ND(e) + " is not iterable");
            if (OD(g)) {
              for (a = 0, c = qD(e); c > a; a++)
                if (h = T(e[a]), h && Gn(Xn, h))
                  return h;
              return new We(false);
            }
            l = ID(e, g);
          }
          for (C = l.next; !(d = bD(C, l)).done; ) {
            try {
              h = T(d.value);
            } catch (B) {
              Vn(l, "throw", B);
            }
            if (typeof h == "object" && h && Gn(Xn, h))
              return h;
          }
          return new We(false);
        };
      });
      var Yn = y((N2, Wn) => {
        var PD = $e(), kD = je(), LD = Oe();
        Wn.exports = function(e, r, u) {
          var s = PD(r);
          s in e ? kD.f(e, s, LD(0, u)) : e[s] = u;
        };
      });
      var Qn = y(() => {
        var $D = He(), MD = zn(), jD = Yn();
        $D({ target: "Object", stat: true }, { fromEntries: function(r) {
          var u = {};
          return MD(r, function(s, D) {
            jD(u, s, D);
          }, { AS_ENTRIES: true }), u;
        } });
      });
      var ec = y((I2, Fs) => {
        var UD = ["cliName", "cliCategory", "cliDescription"];
        function GD(e, r) {
          if (e == null)
            return {};
          var u = VD(e, r), s, D;
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            for (D = 0; D < n.length; D++)
              s = n[D], !(r.indexOf(s) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, s) || (u[s] = e[s]));
          }
          return u;
        }
        function VD(e, r) {
          if (e == null)
            return {};
          var u = {}, s = Object.keys(e), D, n;
          for (n = 0; n < s.length; n++)
            D = s[n], !(r.indexOf(D) >= 0) && (u[D] = e[D]);
          return u;
        }
        Dn();
        qn();
        Qn();
        var XD = Object.create, Ke = Object.defineProperty, HD = Object.getOwnPropertyDescriptor, Mr = Object.getOwnPropertyNames, zD = Object.getPrototypeOf, WD = Object.prototype.hasOwnProperty, Ee = (e, r) => function() {
          return e && (r = (0, e[Mr(e)[0]])(e = 0)), r;
        }, I = (e, r) => function() {
          return r || (0, e[Mr(e)[0]])((r = { exports: {} }).exports, r), r.exports;
        }, us = (e, r) => {
          for (var u in r)
            Ke(e, u, { get: r[u], enumerable: true });
        }, ts = (e, r, u, s) => {
          if (r && typeof r == "object" || typeof r == "function")
            for (let D of Mr(r))
              !WD.call(e, D) && D !== u && Ke(e, D, { get: () => r[D], enumerable: !(s = HD(r, D)) || s.enumerable });
          return e;
        }, YD = (e, r, u) => (u = e != null ? XD(zD(e)) : {}, ts(r || !e || !e.__esModule ? Ke(u, "default", { value: e, enumerable: true }) : u, e)), ns = (e) => ts(Ke({}, "__esModule", { value: true }), e), Kn, Jn, Se, q = Ee({ "<define:process>"() {
          Kn = {}, Jn = [], Se = { env: Kn, argv: Jn };
        } }), ss = I({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
          function r(p) {
            return p >= e.$TAB && p <= e.$SPACE || p == e.$NBSP;
          }
          e.isWhitespace = r;
          function u(p) {
            return e.$0 <= p && p <= e.$9;
          }
          e.isDigit = u;
          function s(p) {
            return p >= e.$a && p <= e.$z || p >= e.$A && p <= e.$Z;
          }
          e.isAsciiLetter = s;
          function D(p) {
            return p >= e.$a && p <= e.$f || p >= e.$A && p <= e.$F || u(p);
          }
          e.isAsciiHexDigit = D;
          function n(p) {
            return p === e.$LF || p === e.$CR;
          }
          e.isNewLine = n;
          function i(p) {
            return e.$0 <= p && p <= e.$7;
          }
          e.isOctalDigit = i;
        } }), QD = I({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = class {
            constructor(s, D, n) {
              this.filePath = s, this.name = D, this.members = n;
            }
            assertNoMembers() {
              if (this.members.length)
                throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
            }
          };
          e.StaticSymbol = r;
          var u = class {
            constructor() {
              this.cache = /* @__PURE__ */ new Map();
            }
            get(s, D, n) {
              n = n || [];
              let i = n.length ? `.${n.join(".")}` : "", p = `"${s}".${D}${i}`, l = this.cache.get(p);
              return l || (l = new r(s, D, n), this.cache.set(p, l)), l;
            }
          };
          e.StaticSymbolCache = u;
        } }), KD = I({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = /-+([a-z0-9])/g;
          function u(o) {
            return o.replace(r, function() {
              for (var E = arguments.length, f = new Array(E), F = 0; F < E; F++)
                f[F] = arguments[F];
              return f[1].toUpperCase();
            });
          }
          e.dashCaseToCamelCase = u;
          function s(o, E) {
            return n(o, ":", E);
          }
          e.splitAtColon = s;
          function D(o, E) {
            return n(o, ".", E);
          }
          e.splitAtPeriod = D;
          function n(o, E, f) {
            let F = o.indexOf(E);
            return F == -1 ? f : [o.slice(0, F).trim(), o.slice(F + 1).trim()];
          }
          function i(o, E, f) {
            return Array.isArray(o) ? E.visitArray(o, f) : A(o) ? E.visitStringMap(o, f) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? E.visitPrimitive(o, f) : E.visitOther(o, f);
          }
          e.visitValue = i;
          function p(o) {
            return o != null;
          }
          e.isDefined = p;
          function l(o) {
            return o === void 0 ? null : o;
          }
          e.noUndefined = l;
          var g = class {
            visitArray(o, E) {
              return o.map((f) => i(f, this, E));
            }
            visitStringMap(o, E) {
              let f = {};
              return Object.keys(o).forEach((F) => {
                f[F] = i(o[F], this, E);
              }), f;
            }
            visitPrimitive(o, E) {
              return o;
            }
            visitOther(o, E) {
              return o;
            }
          };
          e.ValueTransformer = g, e.SyncAsync = { assertSync: (o) => {
            if (_(o))
              throw new Error("Illegal state: value cannot be a promise");
            return o;
          }, then: (o, E) => _(o) ? o.then(E) : E(o), all: (o) => o.some(_) ? Promise.all(o) : o };
          function a(o) {
            throw new Error(`Internal Error: ${o}`);
          }
          e.error = a;
          function c(o, E) {
            let f = Error(o);
            return f[h] = true, E && (f[C] = E), f;
          }
          e.syntaxError = c;
          var h = "ngSyntaxError", C = "ngParseErrors";
          function d(o) {
            return o[h];
          }
          e.isSyntaxError = d;
          function m(o) {
            return o[C] || [];
          }
          e.getParseErrors = m;
          function T(o) {
            return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
          }
          e.escapeRegExp = T;
          var B = Object.getPrototypeOf({});
          function A(o) {
            return typeof o == "object" && o !== null && Object.getPrototypeOf(o) === B;
          }
          function N(o) {
            let E = "";
            for (let f = 0; f < o.length; f++) {
              let F = o.charCodeAt(f);
              if (F >= 55296 && F <= 56319 && o.length > f + 1) {
                let P = o.charCodeAt(f + 1);
                P >= 56320 && P <= 57343 && (f++, F = (F - 55296 << 10) + P - 56320 + 65536);
              }
              F <= 127 ? E += String.fromCharCode(F) : F <= 2047 ? E += String.fromCharCode(F >> 6 & 31 | 192, F & 63 | 128) : F <= 65535 ? E += String.fromCharCode(F >> 12 | 224, F >> 6 & 63 | 128, F & 63 | 128) : F <= 2097151 && (E += String.fromCharCode(F >> 18 & 7 | 240, F >> 12 & 63 | 128, F >> 6 & 63 | 128, F & 63 | 128));
            }
            return E;
          }
          e.utf8Encode = N;
          function R(o) {
            if (typeof o == "string")
              return o;
            if (o instanceof Array)
              return "[" + o.map(R).join(", ") + "]";
            if (o == null)
              return "" + o;
            if (o.overriddenName)
              return `${o.overriddenName}`;
            if (o.name)
              return `${o.name}`;
            if (!o.toString)
              return "object";
            let E = o.toString();
            if (E == null)
              return "" + E;
            let f = E.indexOf(`
`);
            return f === -1 ? E : E.substring(0, f);
          }
          e.stringify = R;
          function j(o) {
            return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o;
          }
          e.resolveForwardRef = j;
          function _(o) {
            return !!o && typeof o.then == "function";
          }
          e.isPromise = _;
          var O = class {
            constructor(o) {
              this.full = o;
              let E = o.split(".");
              this.major = E[0], this.minor = E[1], this.patch = E.slice(2).join(".");
            }
          };
          e.Version = O;
          var x = typeof window < "u" && window, k = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, $ = typeof globalThis < "u" && globalThis, t = $ || x || k;
          e.global = t;
        } }), JD = I({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = QD(), u = KD(), s = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
          function D(f) {
            return f.replace(/\W/g, "_");
          }
          e.sanitizeIdentifier = D;
          var n = 0;
          function i(f) {
            if (!f || !f.reference)
              return null;
            let F = f.reference;
            if (F instanceof r.StaticSymbol)
              return F.name;
            if (F.__anonymousType)
              return F.__anonymousType;
            let P = u.stringify(F);
            return P.indexOf("(") >= 0 ? (P = `anonymous_${n++}`, F.__anonymousType = P) : P = D(P), P;
          }
          e.identifierName = i;
          function p(f) {
            let F = f.reference;
            return F instanceof r.StaticSymbol ? F.filePath : `./${u.stringify(F)}`;
          }
          e.identifierModuleUrl = p;
          function l(f, F) {
            return `View_${i({ reference: f })}_${F}`;
          }
          e.viewClassName = l;
          function g(f) {
            return `RenderType_${i({ reference: f })}`;
          }
          e.rendererTypeName = g;
          function a(f) {
            return `HostView_${i({ reference: f })}`;
          }
          e.hostViewClassName = a;
          function c(f) {
            return `${i({ reference: f })}NgFactory`;
          }
          e.componentFactoryName = c;
          var h;
          (function(f) {
            f[f.Pipe = 0] = "Pipe", f[f.Directive = 1] = "Directive", f[f.NgModule = 2] = "NgModule", f[f.Injectable = 3] = "Injectable";
          })(h = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
          function C(f) {
            return f.value != null ? D(f.value) : i(f.identifier);
          }
          e.tokenName = C;
          function d(f) {
            return f.identifier != null ? f.identifier.reference : f.value;
          }
          e.tokenReference = d;
          var m = class {
            constructor() {
              let { moduleUrl: f, styles: F, styleUrls: P } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              this.moduleUrl = f || null, this.styles = _(F), this.styleUrls = _(P);
            }
          };
          e.CompileStylesheetMetadata = m;
          var T = class {
            constructor(f) {
              let { encapsulation: F, template: P, templateUrl: M, htmlAst: W, styles: X, styleUrls: H, externalStylesheets: z, animations: J, ngContentSelectors: Z, interpolation: ee, isInline: v, preserveWhitespaces: S } = f;
              if (this.encapsulation = F, this.template = P, this.templateUrl = M, this.htmlAst = W, this.styles = _(X), this.styleUrls = _(H), this.externalStylesheets = _(z), this.animations = J ? x(J) : [], this.ngContentSelectors = Z || [], ee && ee.length != 2)
                throw new Error("'interpolation' should have a start and an end symbol.");
              this.interpolation = ee, this.isInline = v, this.preserveWhitespaces = S;
            }
            toSummary() {
              return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
            }
          };
          e.CompileTemplateMetadata = T;
          var B = class {
            static create(f) {
              let { isHost: F, type: P, isComponent: M, selector: W, exportAs: X, changeDetection: H, inputs: z, outputs: J, host: Z, providers: ee, viewProviders: v, queries: S, guards: b, viewQueries: w, entryComponents: L, template: U, componentViewType: V, rendererType: Y, componentFactory: te } = f, Te = {}, Be = {}, Gr = {};
              Z != null && Object.keys(Z).forEach((re) => {
                let ne = Z[re], Ce = re.match(s);
                Ce === null ? Gr[re] = ne : Ce[1] != null ? Be[Ce[1]] = ne : Ce[2] != null && (Te[Ce[2]] = ne);
              });
              let Vr = {};
              z != null && z.forEach((re) => {
                let ne = u.splitAtColon(re, [re, re]);
                Vr[ne[0]] = ne[1];
              });
              let Xr = {};
              return J != null && J.forEach((re) => {
                let ne = u.splitAtColon(re, [re, re]);
                Xr[ne[0]] = ne[1];
              }), new B({ isHost: F, type: P, isComponent: !!M, selector: W, exportAs: X, changeDetection: H, inputs: Vr, outputs: Xr, hostListeners: Te, hostProperties: Be, hostAttributes: Gr, providers: ee, viewProviders: v, queries: S, guards: b, viewQueries: w, entryComponents: L, template: U, componentViewType: V, rendererType: Y, componentFactory: te });
            }
            constructor(f) {
              let { isHost: F, type: P, isComponent: M, selector: W, exportAs: X, changeDetection: H, inputs: z, outputs: J, hostListeners: Z, hostProperties: ee, hostAttributes: v, providers: S, viewProviders: b, queries: w, guards: L, viewQueries: U, entryComponents: V, template: Y, componentViewType: te, rendererType: Te, componentFactory: Be } = f;
              this.isHost = !!F, this.type = P, this.isComponent = M, this.selector = W, this.exportAs = X, this.changeDetection = H, this.inputs = z, this.outputs = J, this.hostListeners = Z, this.hostProperties = ee, this.hostAttributes = v, this.providers = _(S), this.viewProviders = _(b), this.queries = _(w), this.guards = L, this.viewQueries = _(U), this.entryComponents = _(V), this.template = Y, this.componentViewType = te, this.rendererType = Te, this.componentFactory = Be;
            }
            toSummary() {
              return { summaryKind: h.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
            }
          };
          e.CompileDirectiveMetadata = B;
          var A = class {
            constructor(f) {
              let { type: F, name: P, pure: M } = f;
              this.type = F, this.name = P, this.pure = !!M;
            }
            toSummary() {
              return { summaryKind: h.Pipe, type: this.type, name: this.name, pure: this.pure };
            }
          };
          e.CompilePipeMetadata = A;
          var N = class {
          };
          e.CompileShallowModuleMetadata = N;
          var R = class {
            constructor(f) {
              let { type: F, providers: P, declaredDirectives: M, exportedDirectives: W, declaredPipes: X, exportedPipes: H, entryComponents: z, bootstrapComponents: J, importedModules: Z, exportedModules: ee, schemas: v, transitiveModule: S, id: b } = f;
              this.type = F || null, this.declaredDirectives = _(M), this.exportedDirectives = _(W), this.declaredPipes = _(X), this.exportedPipes = _(H), this.providers = _(P), this.entryComponents = _(z), this.bootstrapComponents = _(J), this.importedModules = _(Z), this.exportedModules = _(ee), this.schemas = _(v), this.id = b || null, this.transitiveModule = S || null;
            }
            toSummary() {
              let f = this.transitiveModule;
              return { summaryKind: h.NgModule, type: this.type, entryComponents: f.entryComponents, providers: f.providers, modules: f.modules, exportedDirectives: f.exportedDirectives, exportedPipes: f.exportedPipes };
            }
          };
          e.CompileNgModuleMetadata = R;
          var j = class {
            constructor() {
              this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
            }
            addProvider(f, F) {
              this.providers.push({ provider: f, module: F });
            }
            addDirective(f) {
              this.directivesSet.has(f.reference) || (this.directivesSet.add(f.reference), this.directives.push(f));
            }
            addExportedDirective(f) {
              this.exportedDirectivesSet.has(f.reference) || (this.exportedDirectivesSet.add(f.reference), this.exportedDirectives.push(f));
            }
            addPipe(f) {
              this.pipesSet.has(f.reference) || (this.pipesSet.add(f.reference), this.pipes.push(f));
            }
            addExportedPipe(f) {
              this.exportedPipesSet.has(f.reference) || (this.exportedPipesSet.add(f.reference), this.exportedPipes.push(f));
            }
            addModule(f) {
              this.modulesSet.has(f.reference) || (this.modulesSet.add(f.reference), this.modules.push(f));
            }
            addEntryComponent(f) {
              this.entryComponentsSet.has(f.componentType) || (this.entryComponentsSet.add(f.componentType), this.entryComponents.push(f));
            }
          };
          e.TransitiveCompileNgModuleMetadata = j;
          function _(f) {
            return f || [];
          }
          var O = class {
            constructor(f, F) {
              let { useClass: P, useValue: M, useExisting: W, useFactory: X, deps: H, multi: z } = F;
              this.token = f, this.useClass = P || null, this.useValue = M, this.useExisting = W, this.useFactory = X || null, this.dependencies = H || null, this.multi = !!z;
            }
          };
          e.ProviderMeta = O;
          function x(f) {
            return f.reduce((F, P) => {
              let M = Array.isArray(P) ? x(P) : P;
              return F.concat(M);
            }, []);
          }
          e.flatten = x;
          function k(f) {
            return f.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
          }
          function $(f, F, P) {
            let M;
            return P.isInline ? F.type.reference instanceof r.StaticSymbol ? M = `${F.type.reference.filePath}.${F.type.reference.name}.html` : M = `${i(f)}/${i(F.type)}.html` : M = P.templateUrl, F.type.reference instanceof r.StaticSymbol ? M : k(M);
          }
          e.templateSourceUrl = $;
          function t(f, F) {
            let P = f.moduleUrl.split(/\/\\/g), M = P[P.length - 1];
            return k(`css/${F}${M}.ngstyle.js`);
          }
          e.sharedStylesheetJitUrl = t;
          function o(f) {
            return k(`${i(f.type)}/module.ngfactory.js`);
          }
          e.ngModuleJitUrl = o;
          function E(f, F) {
            return k(`${i(f)}/${i(F.type)}.ngfactory.js`);
          }
          e.templateJitUrl = E;
        } }), ye = I({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = ss(), u = JD(), s = class {
            constructor(a, c, h, C) {
              this.file = a, this.offset = c, this.line = h, this.col = C;
            }
            toString() {
              return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
            }
            moveBy(a) {
              let c = this.file.content, h = c.length, C = this.offset, d = this.line, m = this.col;
              for (; C > 0 && a < 0; )
                if (C--, a++, c.charCodeAt(C) == r.$LF) {
                  d--;
                  let B = c.substr(0, C - 1).lastIndexOf(String.fromCharCode(r.$LF));
                  m = B > 0 ? C - B : C;
                } else
                  m--;
              for (; C < h && a > 0; ) {
                let T = c.charCodeAt(C);
                C++, a--, T == r.$LF ? (d++, m = 0) : m++;
              }
              return new s(this.file, C, d, m);
            }
            getContext(a, c) {
              let h = this.file.content, C = this.offset;
              if (C != null) {
                C > h.length - 1 && (C = h.length - 1);
                let d = C, m = 0, T = 0;
                for (; m < a && C > 0 && (C--, m++, !(h[C] == `
` && ++T == c)); )
                  ;
                for (m = 0, T = 0; m < a && d < h.length - 1 && (d++, m++, !(h[d] == `
` && ++T == c)); )
                  ;
                return { before: h.substring(C, this.offset), after: h.substring(this.offset, d + 1) };
              }
              return null;
            }
          };
          e.ParseLocation = s;
          var D = class {
            constructor(a, c) {
              this.content = a, this.url = c;
            }
          };
          e.ParseSourceFile = D;
          var n = class {
            constructor(a, c) {
              let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
              this.start = a, this.end = c, this.details = h;
            }
            toString() {
              return this.start.file.content.substring(this.start.offset, this.end.offset);
            }
          };
          e.ParseSourceSpan = n, e.EMPTY_PARSE_LOCATION = new s(new D("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new n(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
          var i;
          (function(a) {
            a[a.WARNING = 0] = "WARNING", a[a.ERROR = 1] = "ERROR";
          })(i = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
          var p = class {
            constructor(a, c) {
              let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : i.ERROR;
              this.span = a, this.msg = c, this.level = h;
            }
            contextualMessage() {
              let a = this.span.start.getContext(100, 3);
              return a ? `${this.msg} ("${a.before}[${i[this.level]} ->]${a.after}")` : this.msg;
            }
            toString() {
              let a = this.span.details ? `, ${this.span.details}` : "";
              return `${this.contextualMessage()}: ${this.span.start}${a}`;
            }
          };
          e.ParseError = p;
          function l(a, c) {
            let h = u.identifierModuleUrl(c), C = h != null ? `in ${a} ${u.identifierName(c)} in ${h}` : `in ${a} ${u.identifierName(c)}`, d = new D("", C);
            return new n(new s(d, -1, -1, -1), new s(d, -1, -1, -1));
          }
          e.typeSourceSpan = l;
          function g(a, c, h) {
            let C = `in ${a} ${c} in ${h}`, d = new D("", C);
            return new n(new s(d, -1, -1, -1), new s(d, -1, -1, -1));
          }
          e.r3JitTypeSourceSpan = g;
        } }), ZD = I({ "src/utils/front-matter/parse.js"(e, r) {
          q();
          var u = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
          function s(D) {
            let n = D.match(u);
            if (!n)
              return { content: D };
            let { startDelimiter: i, language: p, value: l = "", endDelimiter: g } = n.groups, a = p.trim() || "yaml";
            if (i === "+++" && (a = "toml"), a !== "yaml" && i !== g)
              return { content: D };
            let [c] = n;
            return { frontMatter: { type: "front-matter", lang: a, value: l, startDelimiter: i, endDelimiter: g, raw: c.replace(/\n$/, "") }, content: c.replace(/[^\n]/g, " ") + D.slice(c.length) };
          }
          r.exports = s;
        } }), is = I({ "src/utils/get-last.js"(e, r) {
          q();
          var u = (s) => s[s.length - 1];
          r.exports = u;
        } }), el = I({ "src/common/parser-create-error.js"(e, r) {
          q();
          function u(s, D) {
            let n = new SyntaxError(s + " (" + D.start.line + ":" + D.start.column + ")");
            return n.loc = D, n;
          }
          r.exports = u;
        } }), as = {};
        us(as, { default: () => rl });
        function rl(e) {
          if (typeof e != "string")
            throw new TypeError("Expected a string");
          return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
        }
        var ul = Ee({ "node_modules/escape-string-regexp/index.js"() {
          q();
        } }), os = I({ "node_modules/semver/internal/debug.js"(e, r) {
          q();
          var u = typeof Se == "object" && Se.env && Se.env.NODE_DEBUG && /\bsemver\b/i.test(Se.env.NODE_DEBUG) ? function() {
            for (var s = arguments.length, D = new Array(s), n = 0; n < s; n++)
              D[n] = arguments[n];
            return console.error("SEMVER", ...D);
          } : () => {
          };
          r.exports = u;
        } }), Ds = I({ "node_modules/semver/internal/constants.js"(e, r) {
          q();
          var u = "2.0.0", s = 256, D = Number.MAX_SAFE_INTEGER || 9007199254740991, n = 16;
          r.exports = { SEMVER_SPEC_VERSION: u, MAX_LENGTH: s, MAX_SAFE_INTEGER: D, MAX_SAFE_COMPONENT_LENGTH: n };
        } }), tl = I({ "node_modules/semver/internal/re.js"(e, r) {
          q();
          var { MAX_SAFE_COMPONENT_LENGTH: u } = Ds(), s = os();
          e = r.exports = {};
          var D = e.re = [], n = e.src = [], i = e.t = {}, p = 0, l = (g, a, c) => {
            let h = p++;
            s(g, h, a), i[g] = h, n[h] = a, D[h] = new RegExp(a, c ? "g" : void 0);
          };
          l("NUMERICIDENTIFIER", "0|[1-9]\\d*"), l("NUMERICIDENTIFIERLOOSE", "[0-9]+"), l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), l("MAINVERSION", `(${n[i.NUMERICIDENTIFIER]})\\.(${n[i.NUMERICIDENTIFIER]})\\.(${n[i.NUMERICIDENTIFIER]})`), l("MAINVERSIONLOOSE", `(${n[i.NUMERICIDENTIFIERLOOSE]})\\.(${n[i.NUMERICIDENTIFIERLOOSE]})\\.(${n[i.NUMERICIDENTIFIERLOOSE]})`), l("PRERELEASEIDENTIFIER", `(?:${n[i.NUMERICIDENTIFIER]}|${n[i.NONNUMERICIDENTIFIER]})`), l("PRERELEASEIDENTIFIERLOOSE", `(?:${n[i.NUMERICIDENTIFIERLOOSE]}|${n[i.NONNUMERICIDENTIFIER]})`), l("PRERELEASE", `(?:-(${n[i.PRERELEASEIDENTIFIER]}(?:\\.${n[i.PRERELEASEIDENTIFIER]})*))`), l("PRERELEASELOOSE", `(?:-?(${n[i.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${n[i.PRERELEASEIDENTIFIERLOOSE]})*))`), l("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), l("BUILD", `(?:\\+(${n[i.BUILDIDENTIFIER]}(?:\\.${n[i.BUILDIDENTIFIER]})*))`), l("FULLPLAIN", `v?${n[i.MAINVERSION]}${n[i.PRERELEASE]}?${n[i.BUILD]}?`), l("FULL", `^${n[i.FULLPLAIN]}$`), l("LOOSEPLAIN", `[v=\\s]*${n[i.MAINVERSIONLOOSE]}${n[i.PRERELEASELOOSE]}?${n[i.BUILD]}?`), l("LOOSE", `^${n[i.LOOSEPLAIN]}$`), l("GTLT", "((?:<|>)?=?)"), l("XRANGEIDENTIFIERLOOSE", `${n[i.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), l("XRANGEIDENTIFIER", `${n[i.NUMERICIDENTIFIER]}|x|X|\\*`), l("XRANGEPLAIN", `[v=\\s]*(${n[i.XRANGEIDENTIFIER]})(?:\\.(${n[i.XRANGEIDENTIFIER]})(?:\\.(${n[i.XRANGEIDENTIFIER]})(?:${n[i.PRERELEASE]})?${n[i.BUILD]}?)?)?`), l("XRANGEPLAINLOOSE", `[v=\\s]*(${n[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[i.XRANGEIDENTIFIERLOOSE]})(?:${n[i.PRERELEASELOOSE]})?${n[i.BUILD]}?)?)?`), l("XRANGE", `^${n[i.GTLT]}\\s*${n[i.XRANGEPLAIN]}$`), l("XRANGELOOSE", `^${n[i.GTLT]}\\s*${n[i.XRANGEPLAINLOOSE]}$`), l("COERCE", `(^|[^\\d])(\\d{1,${u}})(?:\\.(\\d{1,${u}}))?(?:\\.(\\d{1,${u}}))?(?:$|[^\\d])`), l("COERCERTL", n[i.COERCE], true), l("LONETILDE", "(?:~>?)"), l("TILDETRIM", `(\\s*)${n[i.LONETILDE]}\\s+`, true), e.tildeTrimReplace = "$1~", l("TILDE", `^${n[i.LONETILDE]}${n[i.XRANGEPLAIN]}$`), l("TILDELOOSE", `^${n[i.LONETILDE]}${n[i.XRANGEPLAINLOOSE]}$`), l("LONECARET", "(?:\\^)"), l("CARETTRIM", `(\\s*)${n[i.LONECARET]}\\s+`, true), e.caretTrimReplace = "$1^", l("CARET", `^${n[i.LONECARET]}${n[i.XRANGEPLAIN]}$`), l("CARETLOOSE", `^${n[i.LONECARET]}${n[i.XRANGEPLAINLOOSE]}$`), l("COMPARATORLOOSE", `^${n[i.GTLT]}\\s*(${n[i.LOOSEPLAIN]})$|^$`), l("COMPARATOR", `^${n[i.GTLT]}\\s*(${n[i.FULLPLAIN]})$|^$`), l("COMPARATORTRIM", `(\\s*)${n[i.GTLT]}\\s*(${n[i.LOOSEPLAIN]}|${n[i.XRANGEPLAIN]})`, true), e.comparatorTrimReplace = "$1$2$3", l("HYPHENRANGE", `^\\s*(${n[i.XRANGEPLAIN]})\\s+-\\s+(${n[i.XRANGEPLAIN]})\\s*$`), l("HYPHENRANGELOOSE", `^\\s*(${n[i.XRANGEPLAINLOOSE]})\\s+-\\s+(${n[i.XRANGEPLAINLOOSE]})\\s*$`), l("STAR", "(<|>)?=?\\s*\\*"), l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
        } }), nl = I({ "node_modules/semver/internal/parse-options.js"(e, r) {
          q();
          var u = ["includePrerelease", "loose", "rtl"], s = (D) => D ? typeof D != "object" ? { loose: true } : u.filter((n) => D[n]).reduce((n, i) => (n[i] = true, n), {}) : {};
          r.exports = s;
        } }), sl = I({ "node_modules/semver/internal/identifiers.js"(e, r) {
          q();
          var u = /^[0-9]+$/, s = (n, i) => {
            let p = u.test(n), l = u.test(i);
            return p && l && (n = +n, i = +i), n === i ? 0 : p && !l ? -1 : l && !p ? 1 : n < i ? -1 : 1;
          }, D = (n, i) => s(i, n);
          r.exports = { compareIdentifiers: s, rcompareIdentifiers: D };
        } }), il = I({ "node_modules/semver/classes/semver.js"(e, r) {
          q();
          var u = os(), { MAX_LENGTH: s, MAX_SAFE_INTEGER: D } = Ds(), { re: n, t: i } = tl(), p = nl(), { compareIdentifiers: l } = sl(), g = class {
            constructor(a, c) {
              if (c = p(c), a instanceof g) {
                if (a.loose === !!c.loose && a.includePrerelease === !!c.includePrerelease)
                  return a;
                a = a.version;
              } else if (typeof a != "string")
                throw new TypeError(`Invalid Version: ${a}`);
              if (a.length > s)
                throw new TypeError(`version is longer than ${s} characters`);
              u("SemVer", a, c), this.options = c, this.loose = !!c.loose, this.includePrerelease = !!c.includePrerelease;
              let h = a.trim().match(c.loose ? n[i.LOOSE] : n[i.FULL]);
              if (!h)
                throw new TypeError(`Invalid Version: ${a}`);
              if (this.raw = a, this.major = +h[1], this.minor = +h[2], this.patch = +h[3], this.major > D || this.major < 0)
                throw new TypeError("Invalid major version");
              if (this.minor > D || this.minor < 0)
                throw new TypeError("Invalid minor version");
              if (this.patch > D || this.patch < 0)
                throw new TypeError("Invalid patch version");
              h[4] ? this.prerelease = h[4].split(".").map((C) => {
                if (/^[0-9]+$/.test(C)) {
                  let d = +C;
                  if (d >= 0 && d < D)
                    return d;
                }
                return C;
              }) : this.prerelease = [], this.build = h[5] ? h[5].split(".") : [], this.format();
            }
            format() {
              return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
            }
            toString() {
              return this.version;
            }
            compare(a) {
              if (u("SemVer.compare", this.version, this.options, a), !(a instanceof g)) {
                if (typeof a == "string" && a === this.version)
                  return 0;
                a = new g(a, this.options);
              }
              return a.version === this.version ? 0 : this.compareMain(a) || this.comparePre(a);
            }
            compareMain(a) {
              return a instanceof g || (a = new g(a, this.options)), l(this.major, a.major) || l(this.minor, a.minor) || l(this.patch, a.patch);
            }
            comparePre(a) {
              if (a instanceof g || (a = new g(a, this.options)), this.prerelease.length && !a.prerelease.length)
                return -1;
              if (!this.prerelease.length && a.prerelease.length)
                return 1;
              if (!this.prerelease.length && !a.prerelease.length)
                return 0;
              let c = 0;
              do {
                let h = this.prerelease[c], C = a.prerelease[c];
                if (u("prerelease compare", c, h, C), h === void 0 && C === void 0)
                  return 0;
                if (C === void 0)
                  return 1;
                if (h === void 0)
                  return -1;
                if (h === C)
                  continue;
                return l(h, C);
              } while (++c);
            }
            compareBuild(a) {
              a instanceof g || (a = new g(a, this.options));
              let c = 0;
              do {
                let h = this.build[c], C = a.build[c];
                if (u("prerelease compare", c, h, C), h === void 0 && C === void 0)
                  return 0;
                if (C === void 0)
                  return 1;
                if (h === void 0)
                  return -1;
                if (h === C)
                  continue;
                return l(h, C);
              } while (++c);
            }
            inc(a, c) {
              switch (a) {
                case "premajor":
                  this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", c);
                  break;
                case "preminor":
                  this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", c);
                  break;
                case "prepatch":
                  this.prerelease.length = 0, this.inc("patch", c), this.inc("pre", c);
                  break;
                case "prerelease":
                  this.prerelease.length === 0 && this.inc("patch", c), this.inc("pre", c);
                  break;
                case "major":
                  (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                  break;
                case "minor":
                  (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                  break;
                case "patch":
                  this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                  break;
                case "pre":
                  if (this.prerelease.length === 0)
                    this.prerelease = [0];
                  else {
                    let h = this.prerelease.length;
                    for (; --h >= 0; )
                      typeof this.prerelease[h] == "number" && (this.prerelease[h]++, h = -2);
                    h === -1 && this.prerelease.push(0);
                  }
                  c && (l(this.prerelease[0], c) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [c, 0]) : this.prerelease = [c, 0]);
                  break;
                default:
                  throw new Error(`invalid increment argument: ${a}`);
              }
              return this.format(), this.raw = this.version, this;
            }
          };
          r.exports = g;
        } }), jr = I({ "node_modules/semver/functions/compare.js"(e, r) {
          q();
          var u = il(), s = (D, n, i) => new u(D, i).compare(new u(n, i));
          r.exports = s;
        } }), al = I({ "node_modules/semver/functions/lt.js"(e, r) {
          q();
          var u = jr(), s = (D, n, i) => u(D, n, i) < 0;
          r.exports = s;
        } }), ol = I({ "node_modules/semver/functions/gte.js"(e, r) {
          q();
          var u = jr(), s = (D, n, i) => u(D, n, i) >= 0;
          r.exports = s;
        } }), Dl = I({ "src/utils/arrayify.js"(e, r) {
          q(), r.exports = (u, s) => Object.entries(u).map((D) => {
            let [n, i] = D;
            return Object.assign({ [s]: n }, i);
          });
        } }), ll = I({ "package.json"(e, r) {
          r.exports = { version: "2.8.0" };
        } }), cl = I({ "node_modules/outdent/lib/index.js"(e, r) {
          q(), Object.defineProperty(e, "__esModule", { value: true }), e.outdent = void 0;
          function u() {
            for (var A = [], N = 0; N < arguments.length; N++)
              A[N] = arguments[N];
          }
          function s() {
            return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : D();
          }
          function D() {
            return { add: u, delete: u, get: u, set: u, has: function(A) {
              return false;
            } };
          }
          var n = Object.prototype.hasOwnProperty, i = function(A, N) {
            return n.call(A, N);
          };
          function p(A, N) {
            for (var R in N)
              i(N, R) && (A[R] = N[R]);
            return A;
          }
          var l = /^[ \t]*(?:\r\n|\r|\n)/, g = /(?:\r\n|\r|\n)[ \t]*$/, a = /^(?:[\r\n]|$)/, c = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, h = /^[ \t]*[\r\n][ \t\r\n]*$/;
          function C(A, N, R) {
            var j = 0, _ = A[0].match(c);
            _ && (j = _[1].length);
            var O = "(\\r\\n|\\r|\\n).{0," + j + "}", x = new RegExp(O, "g");
            N && (A = A.slice(1));
            var k = R.newline, $ = R.trimLeadingNewline, t = R.trimTrailingNewline, o = typeof k == "string", E = A.length, f = A.map(function(F, P) {
              return F = F.replace(x, "$1"), P === 0 && $ && (F = F.replace(l, "")), P === E - 1 && t && (F = F.replace(g, "")), o && (F = F.replace(/\r\n|\n|\r/g, function(M) {
                return k;
              })), F;
            });
            return f;
          }
          function d(A, N) {
            for (var R = "", j = 0, _ = A.length; j < _; j++)
              R += A[j], j < _ - 1 && (R += N[j]);
            return R;
          }
          function m(A) {
            return i(A, "raw") && i(A, "length");
          }
          function T(A) {
            var N = s(), R = s();
            function j(O) {
              for (var x = [], k = 1; k < arguments.length; k++)
                x[k - 1] = arguments[k];
              if (m(O)) {
                var $ = O, t = (x[0] === j || x[0] === B) && h.test($[0]) && a.test($[1]), o = t ? R : N, E = o.get($);
                if (E || (E = C($, t, A), o.set($, E)), x.length === 0)
                  return E[0];
                var f = d(E, t ? x.slice(1) : x);
                return f;
              } else
                return T(p(p({}, A), O || {}));
            }
            var _ = p(j, { string: function(O) {
              return C([O], false, A)[0];
            } });
            return _;
          }
          var B = T({ trimLeadingNewline: true, trimTrailingNewline: true });
          if (e.outdent = B, e.default = B, typeof r < "u")
            try {
              r.exports = B, Object.defineProperty(B, "__esModule", { value: true }), B.default = B, B.outdent = B;
            } catch {
            }
        } }), hl = I({ "src/main/core-options.js"(e, r) {
          q();
          var { outdent: u } = cl(), s = "Config", D = "Editor", n = "Format", i = "Other", p = "Output", l = "Global", g = "Special", a = { cursorOffset: { since: "1.4.0", category: g, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: D }, endOfLine: { since: "1.15.0", category: l, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: u`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: g, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: i, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: g, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: i }, parser: { since: "0.0.10", category: l, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (c) => typeof c == "string" || typeof c == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: l, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (c) => typeof c == "string" || typeof c == "object", cliName: "plugin", cliCategory: s }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: l, description: u`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (c) => typeof c == "string" || typeof c == "object", cliName: "plugin-search-dir", cliCategory: s }, printWidth: { since: "0.0.0", category: l, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: g, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: D }, rangeStart: { since: "1.4.0", category: g, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: D }, requirePragma: { since: "1.7.0", category: g, type: "boolean", default: false, description: u`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: i }, tabWidth: { type: "int", category: l, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: l, type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: l, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
          r.exports = { CATEGORY_CONFIG: s, CATEGORY_EDITOR: D, CATEGORY_FORMAT: n, CATEGORY_OTHER: i, CATEGORY_OUTPUT: p, CATEGORY_GLOBAL: l, CATEGORY_SPECIAL: g, options: a };
        } }), pl = I({ "src/main/support.js"(e, r) {
          q();
          var u = { compare: jr(), lt: al(), gte: ol() }, s = Dl(), D = ll().version, n = hl().options;
          function i() {
            let { plugins: l = [], showUnreleased: g = false, showDeprecated: a = false, showInternal: c = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = D.split("-", 1)[0], C = l.flatMap((A) => A.languages || []).filter(m), d = s(Object.assign({}, ...l.map((A) => {
              let { options: N } = A;
              return N;
            }), n), "name").filter((A) => m(A) && T(A)).sort((A, N) => A.name === N.name ? 0 : A.name < N.name ? -1 : 1).map(B).map((A) => {
              A = Object.assign({}, A), Array.isArray(A.default) && (A.default = A.default.length === 1 ? A.default[0].value : A.default.filter(m).sort((R, j) => u.compare(j.since, R.since))[0].value), Array.isArray(A.choices) && (A.choices = A.choices.filter((R) => m(R) && T(R)), A.name === "parser" && p(A, C, l));
              let N = Object.fromEntries(l.filter((R) => R.defaultOptions && R.defaultOptions[A.name] !== void 0).map((R) => [R.name, R.defaultOptions[A.name]]));
              return Object.assign(Object.assign({}, A), {}, { pluginDefaults: N });
            });
            return { languages: C, options: d };
            function m(A) {
              return g || !("since" in A) || A.since && u.gte(h, A.since);
            }
            function T(A) {
              return a || !("deprecated" in A) || A.deprecated && u.lt(h, A.deprecated);
            }
            function B(A) {
              if (c)
                return A;
              return GD(A, UD);
            }
          }
          function p(l, g, a) {
            let c = new Set(l.choices.map((h) => h.value));
            for (let h of g)
              if (h.parsers) {
                for (let C of h.parsers)
                  if (!c.has(C)) {
                    c.add(C);
                    let d = a.find((T) => T.parsers && T.parsers[C]), m = h.name;
                    d && d.name && (m += ` (plugin: ${d.name})`), l.choices.push({ value: C, description: m });
                  }
              }
          }
          r.exports = { getSupportInfo: i };
        } }), fl = I({ "src/utils/is-non-empty-array.js"(e, r) {
          q();
          function u(s) {
            return Array.isArray(s) && s.length > 0;
          }
          r.exports = u;
        } });
        function dl() {
          let { onlyFirst: e = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
          return new RegExp(r, e ? void 0 : "g");
        }
        var El = Ee({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
          q();
        } });
        function Cl(e) {
          if (typeof e != "string")
            throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
          return e.replace(dl(), "");
        }
        var ml = Ee({ "node_modules/strip-ansi/index.js"() {
          q(), El();
        } });
        function gl(e) {
          return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : false;
        }
        var Fl = Ee({ "node_modules/is-fullwidth-code-point/index.js"() {
          q();
        } }), Al = I({ "node_modules/emoji-regex/index.js"(e, r) {
          q(), r.exports = function() {
            return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
          };
        } }), ls = {};
        us(ls, { default: () => vl });
        function vl(e) {
          if (typeof e != "string" || e.length === 0 || (e = Cl(e), e.length === 0))
            return 0;
          e = e.replace((0, cs.default)(), "  ");
          let r = 0;
          for (let u = 0; u < e.length; u++) {
            let s = e.codePointAt(u);
            s <= 31 || s >= 127 && s <= 159 || s >= 768 && s <= 879 || (s > 65535 && u++, r += gl(s) ? 2 : 1);
          }
          return r;
        }
        var cs, _l = Ee({ "node_modules/string-width/index.js"() {
          q(), ml(), Fl(), cs = YD(Al());
        } }), Sl = I({ "src/utils/get-string-width.js"(e, r) {
          q();
          var u = (_l(), ns(ls)).default, s = /[^\x20-\x7F]/;
          function D(n) {
            return n ? s.test(n) ? u(n) : n.length : 0;
          }
          r.exports = D;
        } }), Ur = I({ "src/utils/text/skip.js"(e, r) {
          q();
          function u(p) {
            return (l, g, a) => {
              let c = a && a.backwards;
              if (g === false)
                return false;
              let { length: h } = l, C = g;
              for (; C >= 0 && C < h; ) {
                let d = l.charAt(C);
                if (p instanceof RegExp) {
                  if (!p.test(d))
                    return C;
                } else if (!p.includes(d))
                  return C;
                c ? C-- : C++;
              }
              return C === -1 || C === h ? C : false;
            };
          }
          var s = u(/\s/), D = u(" 	"), n = u(",; 	"), i = u(/[^\n\r]/);
          r.exports = { skipWhitespace: s, skipSpaces: D, skipToLineEnd: n, skipEverythingButNewLine: i };
        } }), hs = I({ "src/utils/text/skip-inline-comment.js"(e, r) {
          q();
          function u(s, D) {
            if (D === false)
              return false;
            if (s.charAt(D) === "/" && s.charAt(D + 1) === "*") {
              for (let n = D + 2; n < s.length; ++n)
                if (s.charAt(n) === "*" && s.charAt(n + 1) === "/")
                  return n + 2;
            }
            return D;
          }
          r.exports = u;
        } }), ps = I({ "src/utils/text/skip-trailing-comment.js"(e, r) {
          q();
          var { skipEverythingButNewLine: u } = Ur();
          function s(D, n) {
            return n === false ? false : D.charAt(n) === "/" && D.charAt(n + 1) === "/" ? u(D, n) : n;
          }
          r.exports = s;
        } }), fs = I({ "src/utils/text/skip-newline.js"(e, r) {
          q();
          function u(s, D, n) {
            let i = n && n.backwards;
            if (D === false)
              return false;
            let p = s.charAt(D);
            if (i) {
              if (s.charAt(D - 1) === "\r" && p === `
`)
                return D - 2;
              if (p === `
` || p === "\r" || p === "\u2028" || p === "\u2029")
                return D - 1;
            } else {
              if (p === "\r" && s.charAt(D + 1) === `
`)
                return D + 2;
              if (p === `
` || p === "\r" || p === "\u2028" || p === "\u2029")
                return D + 1;
            }
            return D;
          }
          r.exports = u;
        } }), yl = I({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, r) {
          q();
          var u = hs(), s = fs(), D = ps(), { skipSpaces: n } = Ur();
          function i(p, l) {
            let g = null, a = l;
            for (; a !== g; )
              g = a, a = n(p, a), a = u(p, a), a = D(p, a), a = s(p, a);
            return a;
          }
          r.exports = i;
        } }), Tl = I({ "src/common/util.js"(e, r) {
          q();
          var { default: u } = (ul(), ns(as)), s = is(), { getSupportInfo: D } = pl(), n = fl(), i = Sl(), { skipWhitespace: p, skipSpaces: l, skipToLineEnd: g, skipEverythingButNewLine: a } = Ur(), c = hs(), h = ps(), C = fs(), d = yl(), m = (v) => v[v.length - 2];
          function T(v) {
            return (S, b, w) => {
              let L = w && w.backwards;
              if (b === false)
                return false;
              let { length: U } = S, V = b;
              for (; V >= 0 && V < U; ) {
                let Y = S.charAt(V);
                if (v instanceof RegExp) {
                  if (!v.test(Y))
                    return V;
                } else if (!v.includes(Y))
                  return V;
                L ? V-- : V++;
              }
              return V === -1 || V === U ? V : false;
            };
          }
          function B(v, S) {
            let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, w = l(v, b.backwards ? S - 1 : S, b), L = C(v, w, b);
            return w !== L;
          }
          function A(v, S, b) {
            for (let w = S; w < b; ++w)
              if (v.charAt(w) === `
`)
                return true;
            return false;
          }
          function N(v, S, b) {
            let w = b(S) - 1;
            w = l(v, w, { backwards: true }), w = C(v, w, { backwards: true }), w = l(v, w, { backwards: true });
            let L = C(v, w, { backwards: true });
            return w !== L;
          }
          function R(v, S) {
            let b = null, w = S;
            for (; w !== b; )
              b = w, w = g(v, w), w = c(v, w), w = l(v, w);
            return w = h(v, w), w = C(v, w), w !== false && B(v, w);
          }
          function j(v, S, b) {
            return R(v, b(S));
          }
          function _(v, S, b) {
            return d(v, b(S));
          }
          function O(v, S, b) {
            return v.charAt(_(v, S, b));
          }
          function x(v, S) {
            let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return l(v, b.backwards ? S - 1 : S, b) !== S;
          }
          function k(v, S) {
            let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, w = 0;
            for (let L = b; L < v.length; ++L)
              v[L] === "	" ? w = w + S - w % S : w++;
            return w;
          }
          function $(v, S) {
            let b = v.lastIndexOf(`
`);
            return b === -1 ? 0 : k(v.slice(b + 1).match(/^[\t ]*/)[0], S);
          }
          function t(v, S) {
            let b = { quote: '"', regex: /"/g, escaped: "&quot;" }, w = { quote: "'", regex: /'/g, escaped: "&apos;" }, L = S === "'" ? w : b, U = L === w ? b : w, V = L;
            if (v.includes(L.quote) || v.includes(U.quote)) {
              let Y = (v.match(L.regex) || []).length, te = (v.match(U.regex) || []).length;
              V = Y > te ? U : L;
            }
            return V;
          }
          function o(v, S) {
            let b = v.slice(1, -1), w = S.parser === "json" || S.parser === "json5" && S.quoteProps === "preserve" && !S.singleQuote ? '"' : S.__isInHtmlAttribute ? "'" : t(b, S.singleQuote ? "'" : '"').quote;
            return E(b, w, !(S.parser === "css" || S.parser === "less" || S.parser === "scss" || S.__embeddedInHtml));
          }
          function E(v, S, b) {
            let w = S === '"' ? "'" : '"', L = /\\(.)|(["'])/gs, U = v.replace(L, (V, Y, te) => Y === w ? Y : te === S ? "\\" + te : te || (b && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(Y) ? Y : "\\" + Y));
            return S + U + S;
          }
          function f(v) {
            return v.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
          }
          function F(v, S) {
            let b = v.match(new RegExp(`(${u(S)})+`, "g"));
            return b === null ? 0 : b.reduce((w, L) => Math.max(w, L.length / S.length), 0);
          }
          function P(v, S) {
            let b = v.match(new RegExp(`(${u(S)})+`, "g"));
            if (b === null)
              return 0;
            let w = /* @__PURE__ */ new Map(), L = 0;
            for (let U of b) {
              let V = U.length / S.length;
              w.set(V, true), V > L && (L = V);
            }
            for (let U = 1; U < L; U++)
              if (!w.get(U))
                return U;
            return L + 1;
          }
          function M(v, S) {
            (v.comments || (v.comments = [])).push(S), S.printed = false, S.nodeDescription = ee(v);
          }
          function W(v, S) {
            S.leading = true, S.trailing = false, M(v, S);
          }
          function X(v, S, b) {
            S.leading = false, S.trailing = false, b && (S.marker = b), M(v, S);
          }
          function H(v, S) {
            S.leading = false, S.trailing = true, M(v, S);
          }
          function z(v, S) {
            let { languages: b } = D({ plugins: S.plugins }), w = b.find((L) => {
              let { name: U } = L;
              return U.toLowerCase() === v;
            }) || b.find((L) => {
              let { aliases: U } = L;
              return Array.isArray(U) && U.includes(v);
            }) || b.find((L) => {
              let { extensions: U } = L;
              return Array.isArray(U) && U.includes(`.${v}`);
            });
            return w && w.parsers[0];
          }
          function J(v) {
            return v && v.type === "front-matter";
          }
          function Z(v) {
            let S = /* @__PURE__ */ new WeakMap();
            return function(b) {
              return S.has(b) || S.set(b, Symbol(v)), S.get(b);
            };
          }
          function ee(v) {
            let S = v.type || v.kind || "(unknown type)", b = String(v.name || v.id && (typeof v.id == "object" ? v.id.name : v.id) || v.key && (typeof v.key == "object" ? v.key.name : v.key) || v.value && (typeof v.value == "object" ? "" : String(v.value)) || v.operator || "");
            return b.length > 20 && (b = b.slice(0, 19) + "\u2026"), S + (b ? " " + b : "");
          }
          r.exports = { inferParserByLanguage: z, getStringWidth: i, getMaxContinuousCount: F, getMinNotPresentContinuousCount: P, getPenultimate: m, getLast: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: d, getNextNonSpaceNonCommentCharacterIndex: _, getNextNonSpaceNonCommentCharacter: O, skip: T, skipWhitespace: p, skipSpaces: l, skipToLineEnd: g, skipEverythingButNewLine: a, skipInlineComment: c, skipTrailingComment: h, skipNewline: C, isNextLineEmptyAfterIndex: R, isNextLineEmpty: j, isPreviousLineEmpty: N, hasNewline: B, hasNewlineInRange: A, hasSpaces: x, getAlignmentSize: k, getIndentSize: $, getPreferredQuote: t, printString: o, printNumber: f, makeString: E, addLeadingComment: W, addDanglingComment: X, addTrailingComment: H, isFrontMatterNode: J, isNonEmptyArray: n, createGroupIdMapper: Z };
        } }), Bl = I({ "vendors/html-tag-names.json"(e, r) {
          r.exports = { htmlTagNames: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"] };
        } }), ds = I({ "src/language-html/utils/array-to-map.js"(e, r) {
          q();
          function u(s) {
            let D = /* @__PURE__ */ Object.create(null);
            for (let n of s)
              D[n] = true;
            return D;
          }
          r.exports = u;
        } }), bl = I({ "src/language-html/utils/html-tag-names.js"(e, r) {
          q();
          var { htmlTagNames: u } = Bl(), s = ds(), D = s(u);
          r.exports = D;
        } }), wl = I({ "vendors/html-element-attributes.json"(e, r) {
          r.exports = { htmlElementAttributes: { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["for", "form"], legend: ["align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "media", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"], select: ["autocomplete", "disabled", "form", "multiple", "name", "required", "size"], slot: ["name"], source: ["height", "media", "sizes", "src", "srcset", "type", "width"], style: ["media", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] } };
        } }), Nl = I({ "src/language-html/utils/map-object.js"(e, r) {
          q();
          function u(s, D) {
            let n = /* @__PURE__ */ Object.create(null);
            for (let [i, p] of Object.entries(s))
              n[i] = D(p, i);
            return n;
          }
          r.exports = u;
        } }), Ol = I({ "src/language-html/utils/html-elements-attributes.js"(e, r) {
          q();
          var { htmlElementAttributes: u } = wl(), s = Nl(), D = ds(), n = s(u, D);
          r.exports = n;
        } }), ql = I({ "src/language-html/utils/is-unknown-namespace.js"(e, r) {
          q();
          function u(s) {
            return s.type === "element" && !s.hasExplicitNamespace && !["html", "svg"].includes(s.namespace);
          }
          r.exports = u;
        } }), Il = I({ "src/language-html/pragma.js"(e, r) {
          q();
          function u(D) {
            return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(D);
          }
          function s(D) {
            return `<!-- @format -->

` + D.replace(/^\s*\n/, "");
          }
          r.exports = { hasPragma: u, insertPragma: s };
        } }), Rl = I({ "src/language-html/ast.js"(e, r) {
          q();
          var u = { attrs: true, children: true }, s = /* @__PURE__ */ new Set(["parent"]), D = class {
            constructor() {
              let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              for (let p of /* @__PURE__ */ new Set([...s, ...Object.keys(i)]))
                this.setProperty(p, i[p]);
            }
            setProperty(i, p) {
              if (this[i] !== p) {
                if (i in u && (p = p.map((l) => this.createChild(l))), !s.has(i)) {
                  this[i] = p;
                  return;
                }
                Object.defineProperty(this, i, { value: p, enumerable: false, configurable: true });
              }
            }
            map(i) {
              let p;
              for (let l in u) {
                let g = this[l];
                if (g) {
                  let a = n(g, (c) => c.map(i));
                  p !== g && (p || (p = new D({ parent: this.parent })), p.setProperty(l, a));
                }
              }
              if (p)
                for (let l in this)
                  l in u || (p[l] = this[l]);
              return i(p || this);
            }
            walk(i) {
              for (let p in u) {
                let l = this[p];
                if (l)
                  for (let g = 0; g < l.length; g++)
                    l[g].walk(i);
              }
              i(this);
            }
            createChild(i) {
              let p = i instanceof D ? i.clone() : new D(i);
              return p.setProperty("parent", this), p;
            }
            insertChildBefore(i, p) {
              this.children.splice(this.children.indexOf(i), 0, this.createChild(p));
            }
            removeChild(i) {
              this.children.splice(this.children.indexOf(i), 1);
            }
            replaceChild(i, p) {
              this.children[this.children.indexOf(i)] = this.createChild(p);
            }
            clone() {
              return new D(this);
            }
            get firstChild() {
              var i;
              return (i = this.children) === null || i === void 0 ? void 0 : i[0];
            }
            get lastChild() {
              var i;
              return (i = this.children) === null || i === void 0 ? void 0 : i[this.children.length - 1];
            }
            get prev() {
              var i;
              return (i = this.parent) === null || i === void 0 ? void 0 : i.children[this.parent.children.indexOf(this) - 1];
            }
            get next() {
              var i;
              return (i = this.parent) === null || i === void 0 ? void 0 : i.children[this.parent.children.indexOf(this) + 1];
            }
            get rawName() {
              return this.hasExplicitNamespace ? this.fullName : this.name;
            }
            get fullName() {
              return this.namespace ? this.namespace + ":" + this.name : this.name;
            }
            get attrMap() {
              return Object.fromEntries(this.attrs.map((i) => [i.fullName, i.value]));
            }
          };
          function n(i, p) {
            let l = i.map(p);
            return l.some((g, a) => g !== i[a]) ? l : i;
          }
          r.exports = { Node: D };
        } }), xl = I({ "src/language-html/conditional-comment.js"(e, r) {
          q();
          var { ParseSourceSpan: u } = ye(), s = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: n }, { regex: /^\[if([^\]]*)]><!$/, parse: i }, { regex: /^<!\s*\[endif]$/, parse: p }];
          function D(l, g) {
            if (l.value)
              for (let { regex: a, parse: c } of s) {
                let h = l.value.match(a);
                if (h)
                  return c(l, g, h);
              }
            return null;
          }
          function n(l, g, a) {
            let [, c, h, C] = a, d = 4 + c.length, m = l.sourceSpan.start.moveBy(d), T = m.moveBy(C.length), [B, A] = (() => {
              try {
                return [true, g(C, m).children];
              } catch {
                let N = { type: "text", value: C, sourceSpan: new u(m, T) };
                return [false, [N]];
              }
            })();
            return { type: "ieConditionalComment", complete: B, children: A, condition: h.trim().replace(/\s+/g, " "), sourceSpan: l.sourceSpan, startSourceSpan: new u(l.sourceSpan.start, m), endSourceSpan: new u(T, l.sourceSpan.end) };
          }
          function i(l, g, a) {
            let [, c] = a;
            return { type: "ieConditionalStartComment", condition: c.trim().replace(/\s+/g, " "), sourceSpan: l.sourceSpan };
          }
          function p(l) {
            return { type: "ieConditionalEndComment", sourceSpan: l.sourceSpan };
          }
          r.exports = { parseIeConditionalComment: D };
        } }), Pl = I({ "src/language-html/loc.js"(e, r) {
          q();
          function u(D) {
            return D.sourceSpan.start.offset;
          }
          function s(D) {
            return D.sourceSpan.end.offset;
          }
          r.exports = { locStart: u, locEnd: s };
        } }), Je = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/tags.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          (function(l) {
            l[l.RAW_TEXT = 0] = "RAW_TEXT", l[l.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", l[l.PARSABLE_DATA = 2] = "PARSABLE_DATA";
          })(e.TagContentType || (e.TagContentType = {}));
          function u(l) {
            if (l[0] != ":")
              return [null, l];
            let g = l.indexOf(":", 1);
            if (g == -1)
              throw new Error(`Unsupported format "${l}" expecting ":namespace:name"`);
            return [l.slice(1, g), l.slice(g + 1)];
          }
          e.splitNsName = u;
          function s(l) {
            return u(l)[1] === "ng-container";
          }
          e.isNgContainer = s;
          function D(l) {
            return u(l)[1] === "ng-content";
          }
          e.isNgContent = D;
          function n(l) {
            return u(l)[1] === "ng-template";
          }
          e.isNgTemplate = n;
          function i(l) {
            return l === null ? null : u(l)[0];
          }
          e.getNsPrefix = i;
          function p(l, g) {
            return l ? `:${l}:${g}` : g;
          }
          e.mergeNsAndName = p, e.NAMED_ENTITIES = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", AMP: "&", amp: "&", And: "\u2A53", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", ap: "\u2248", apacir: "\u2A6F", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", Barwed: "\u2306", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", Because: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxDL: "\u2557", boxDl: "\u2556", boxdL: "\u2555", boxdl: "\u2510", boxDR: "\u2554", boxDr: "\u2553", boxdR: "\u2552", boxdr: "\u250C", boxH: "\u2550", boxh: "\u2500", boxHD: "\u2566", boxHd: "\u2564", boxhD: "\u2565", boxhd: "\u252C", boxHU: "\u2569", boxHu: "\u2567", boxhU: "\u2568", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxUL: "\u255D", boxUl: "\u255C", boxuL: "\u255B", boxul: "\u2518", boxUR: "\u255A", boxUr: "\u2559", boxuR: "\u2558", boxur: "\u2514", boxV: "\u2551", boxv: "\u2502", boxVH: "\u256C", boxVh: "\u256B", boxvH: "\u256A", boxvh: "\u253C", boxVL: "\u2563", boxVl: "\u2562", boxvL: "\u2561", boxvl: "\u2524", boxVR: "\u2560", boxVr: "\u255F", boxvR: "\u255E", boxvr: "\u251C", bprime: "\u2035", Breve: "\u02D8", breve: "\u02D8", brvbar: "\xA6", Bscr: "\u212C", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", Cap: "\u22D2", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", CenterDot: "\xB7", centerdot: "\xB7", Cfr: "\u212D", cfr: "\u{1D520}", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", cir: "\u25CB", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", Colon: "\u2237", colon: ":", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", Conint: "\u222F", conint: "\u222E", ContourIntegral: "\u222E", Copf: "\u2102", copf: "\u{1D554}", coprod: "\u2210", Coproduct: "\u2210", COPY: "\xA9", copy: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", Cross: "\u2A2F", cross: "\u2717", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", Cup: "\u22D3", cup: "\u222A", cupbrcap: "\u2A48", CupCap: "\u224D", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", Dagger: "\u2021", dagger: "\u2020", daleth: "\u2138", Darr: "\u21A1", dArr: "\u21D3", darr: "\u2193", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", DD: "\u2145", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", Diamond: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", Downarrow: "\u21D3", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", ecir: "\u2256", Ecirc: "\xCA", ecirc: "\xEA", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", eDot: "\u2251", edot: "\u0117", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp: "\u2003", emsp13: "\u2004", emsp14: "\u2005", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", Escr: "\u2130", escr: "\u212F", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", ExponentialE: "\u2147", exponentiale: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", ForAll: "\u2200", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", Fscr: "\u2131", fscr: "\u{1D4BB}", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", gE: "\u2267", ge: "\u2265", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", Gg: "\u22D9", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gl: "\u2277", gla: "\u2AA5", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gnE: "\u2269", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", GT: ">", Gt: "\u226B", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", hArr: "\u21D4", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", Hfr: "\u210C", hfr: "\u{1D525}", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", Hopf: "\u210D", hopf: "\u{1D559}", horbar: "\u2015", HorizontalLine: "\u2500", Hscr: "\u210B", hscr: "\u{1D4BD}", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", Ifr: "\u2111", ifr: "\u{1D526}", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Im: "\u2111", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", Int: "\u222C", int: "\u222B", intcal: "\u22BA", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", Iscr: "\u2110", iscr: "\u{1D4BE}", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", Lang: "\u27EA", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", Larr: "\u219E", lArr: "\u21D0", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", lAtail: "\u291B", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lBarr: "\u290E", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", lE: "\u2266", le: "\u2264", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", Leftarrow: "\u21D0", leftarrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", Ll: "\u22D8", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lnE: "\u2268", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftarrow: "\u27F5", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", Lscr: "\u2112", lscr: "\u{1D4C1}", Lsh: "\u21B0", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", LT: "<", Lt: "\u226A", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", Mscr: "\u2133", mscr: "\u{1D4C2}", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", nearhk: "\u2924", neArr: "\u21D7", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: `
`, nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlArr: "\u21CD", nlarr: "\u219A", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nLeftarrow: "\u21CD", nleftarrow: "\u219A", nLeftrightarrow: "\u21CE", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", nopf: "\u{1D55F}", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nRightarrow: "\u21CF", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nVDash: "\u22AF", nVdash: "\u22AE", nvDash: "\u22AD", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwArr: "\u21D6", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", ocir: "\u229A", Ocirc: "\xD4", ocirc: "\xF4", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", Or: "\u2A54", or: "\u2228", orarr: "\u21BB", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", Otimes: "\u2A37", otimes: "\u2297", otimesas: "\u2A36", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", par: "\u2225", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", Popf: "\u2119", popf: "\u{1D561}", pound: "\xA3", Pr: "\u2ABB", pr: "\u227A", prap: "\u2AB7", prcue: "\u227C", prE: "\u2AB3", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", Prime: "\u2033", prime: "\u2032", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportion: "\u2237", Proportional: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", Qopf: "\u211A", qopf: "\u{1D562}", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", QUOT: '"', quot: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", Rang: "\u27EB", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", Rarr: "\u21A0", rArr: "\u21D2", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", rAtail: "\u291C", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", RBarr: "\u2910", rBarr: "\u290F", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", Re: "\u211C", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", REG: "\xAE", reg: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", Rfr: "\u211C", rfr: "\u{1D52F}", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", Rightarrow: "\u21D2", rightarrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", Ropf: "\u211D", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", Rscr: "\u211B", rscr: "\u{1D4C7}", Rsh: "\u21B1", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", Sc: "\u2ABC", sc: "\u227B", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", sccue: "\u227D", scE: "\u2AB4", sce: "\u2AB0", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", searhk: "\u2925", seArr: "\u21D8", searr: "\u2198", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", Square: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", Sub: "\u22D0", sub: "\u2282", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", Subset: "\u22D0", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", Sum: "\u2211", sum: "\u2211", sung: "\u266A", Sup: "\u22D1", sup: "\u2283", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", Supset: "\u22D1", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swArr: "\u21D9", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", Therefore: "\u2234", therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", thinsp: "\u2009", ThinSpace: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", Tilde: "\u223C", tilde: "\u02DC", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", TRADE: "\u2122", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", Uarr: "\u219F", uArr: "\u21D1", uarr: "\u2191", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrow: "\u2191", Uparrow: "\u21D1", uparrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", Updownarrow: "\u21D5", updownarrow: "\u2195", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", upsi: "\u03C5", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTee: "\u22A5", UpTeeArrow: "\u21A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", vArr: "\u21D5", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", Vbar: "\u2AEB", vBar: "\u2AE8", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", VDash: "\u22AB", Vdash: "\u22A9", vDash: "\u22A8", vdash: "\u22A2", Vdashl: "\u2AE6", Vee: "\u22C1", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", Verbar: "\u2016", verbar: "|", Vert: "\u2016", vert: "|", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", Wedge: "\u22C0", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", Xi: "\u039E", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", Yuml: "\u0178", yuml: "\xFF", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", Zfr: "\u2128", zfr: "\u{1D537}", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", Zopf: "\u2124", zopf: "\u{1D56B}", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" }, e.NGSP_UNICODE = "\uE500", e.NAMED_ENTITIES.ngsp = e.NGSP_UNICODE;
        } }), Es = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_tags.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Je(), u = class {
            constructor() {
              let { closedByChildren: i, implicitNamespacePrefix: p, contentType: l = r.TagContentType.PARSABLE_DATA, closedByParent: g = false, isVoid: a = false, ignoreFirstLf: c = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              this.closedByChildren = {}, this.closedByParent = false, this.canSelfClose = false, i && i.length > 0 && i.forEach((h) => this.closedByChildren[h] = true), this.isVoid = a, this.closedByParent = g || a, this.implicitNamespacePrefix = p || null, this.contentType = l, this.ignoreFirstLf = c;
            }
            isClosedByChild(i) {
              return this.isVoid || i.toLowerCase() in this.closedByChildren;
            }
          };
          e.HtmlTagDefinition = u;
          var s, D;
          function n(i) {
            return D || (s = new u(), D = { base: new u({ isVoid: true }), meta: new u({ isVoid: true }), area: new u({ isVoid: true }), embed: new u({ isVoid: true }), link: new u({ isVoid: true }), img: new u({ isVoid: true }), input: new u({ isVoid: true }), param: new u({ isVoid: true }), hr: new u({ isVoid: true }), br: new u({ isVoid: true }), source: new u({ isVoid: true }), track: new u({ isVoid: true }), wbr: new u({ isVoid: true }), p: new u({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new u({ closedByChildren: ["tbody", "tfoot"] }), tbody: new u({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new u({ closedByChildren: ["tbody"], closedByParent: true }), tr: new u({ closedByChildren: ["tr"], closedByParent: true }), td: new u({ closedByChildren: ["td", "th"], closedByParent: true }), th: new u({ closedByChildren: ["td", "th"], closedByParent: true }), col: new u({ isVoid: true }), svg: new u({ implicitNamespacePrefix: "svg" }), math: new u({ implicitNamespacePrefix: "math" }), li: new u({ closedByChildren: ["li"], closedByParent: true }), dt: new u({ closedByChildren: ["dt", "dd"] }), dd: new u({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new u({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new u({ closedByChildren: ["optgroup"], closedByParent: true }), option: new u({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new u({ ignoreFirstLf: true }), listing: new u({ ignoreFirstLf: true }), style: new u({ contentType: r.TagContentType.RAW_TEXT }), script: new u({ contentType: r.TagContentType.RAW_TEXT }), title: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT }), textarea: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), D[i] || s;
          }
          e.getHtmlTagDefinition = n;
        } }), kl = I({ "node_modules/angular-html-parser/lib/compiler/src/ast_path.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = class {
            constructor(u) {
              let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
              this.path = u, this.position = s;
            }
            get empty() {
              return !this.path || !this.path.length;
            }
            get head() {
              return this.path[0];
            }
            get tail() {
              return this.path[this.path.length - 1];
            }
            parentOf(u) {
              return u && this.path[this.path.indexOf(u) - 1];
            }
            childOf(u) {
              return this.path[this.path.indexOf(u) + 1];
            }
            first(u) {
              for (let s = this.path.length - 1; s >= 0; s--) {
                let D = this.path[s];
                if (D instanceof u)
                  return D;
              }
            }
            push(u) {
              this.path.push(u);
            }
            pop() {
              return this.path.pop();
            }
          };
          e.AstPath = r;
        } }), Cs = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/ast.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = kl(), u = class {
            constructor(d, m, T) {
              this.value = d, this.sourceSpan = m, this.i18n = T, this.type = "text";
            }
            visit(d, m) {
              return d.visitText(this, m);
            }
          };
          e.Text = u;
          var s = class {
            constructor(d, m) {
              this.value = d, this.sourceSpan = m, this.type = "cdata";
            }
            visit(d, m) {
              return d.visitCdata(this, m);
            }
          };
          e.CDATA = s;
          var D = class {
            constructor(d, m, T, B, A, N) {
              this.switchValue = d, this.type = m, this.cases = T, this.sourceSpan = B, this.switchValueSourceSpan = A, this.i18n = N;
            }
            visit(d, m) {
              return d.visitExpansion(this, m);
            }
          };
          e.Expansion = D;
          var n = class {
            constructor(d, m, T, B, A) {
              this.value = d, this.expression = m, this.sourceSpan = T, this.valueSourceSpan = B, this.expSourceSpan = A;
            }
            visit(d, m) {
              return d.visitExpansionCase(this, m);
            }
          };
          e.ExpansionCase = n;
          var i = class {
            constructor(d, m, T) {
              let B = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, A = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, N = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
              this.name = d, this.value = m, this.sourceSpan = T, this.valueSpan = B, this.nameSpan = A, this.i18n = N, this.type = "attribute";
            }
            visit(d, m) {
              return d.visitAttribute(this, m);
            }
          };
          e.Attribute = i;
          var p = class {
            constructor(d, m, T, B) {
              let A = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, N = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, R = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, j = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
              this.name = d, this.attrs = m, this.children = T, this.sourceSpan = B, this.startSourceSpan = A, this.endSourceSpan = N, this.nameSpan = R, this.i18n = j, this.type = "element";
            }
            visit(d, m) {
              return d.visitElement(this, m);
            }
          };
          e.Element = p;
          var l = class {
            constructor(d, m) {
              this.value = d, this.sourceSpan = m, this.type = "comment";
            }
            visit(d, m) {
              return d.visitComment(this, m);
            }
          };
          e.Comment = l;
          var g = class {
            constructor(d, m) {
              this.value = d, this.sourceSpan = m, this.type = "docType";
            }
            visit(d, m) {
              return d.visitDocType(this, m);
            }
          };
          e.DocType = g;
          function a(d, m) {
            let T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, B = [], A = d.visit ? (N) => d.visit(N, T) || N.visit(d, T) : (N) => N.visit(d, T);
            return m.forEach((N) => {
              let R = A(N);
              R && B.push(R);
            }), B;
          }
          e.visitAll = a;
          var c = class {
            constructor() {
            }
            visitElement(d, m) {
              this.visitChildren(m, (T) => {
                T(d.attrs), T(d.children);
              });
            }
            visitAttribute(d, m) {
            }
            visitText(d, m) {
            }
            visitCdata(d, m) {
            }
            visitComment(d, m) {
            }
            visitDocType(d, m) {
            }
            visitExpansion(d, m) {
              return this.visitChildren(m, (T) => {
                T(d.cases);
              });
            }
            visitExpansionCase(d, m) {
            }
            visitChildren(d, m) {
              let T = [], B = this;
              function A(N) {
                N && T.push(a(B, N, d));
              }
              return m(A), Array.prototype.concat.apply([], T);
            }
          };
          e.RecursiveVisitor = c;
          function h(d) {
            let m = d.sourceSpan.start.offset, T = d.sourceSpan.end.offset;
            return d instanceof p && (d.endSourceSpan ? T = d.endSourceSpan.end.offset : d.children && d.children.length && (T = h(d.children[d.children.length - 1]).end)), { start: m, end: T };
          }
          function C(d, m) {
            let T = [], B = new class extends c {
              visit(A, N) {
                let R = h(A);
                if (R.start <= m && m < R.end)
                  T.push(A);
                else
                  return true;
              }
            }();
            return a(B, d), new r.AstPath(T, m);
          }
          e.findNode = C;
        } }), Ll = I({ "node_modules/angular-html-parser/lib/compiler/src/assertions.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          function r(D, n) {
            if (n != null) {
              if (!Array.isArray(n))
                throw new Error(`Expected '${D}' to be an array of strings.`);
              for (let i = 0; i < n.length; i += 1)
                if (typeof n[i] != "string")
                  throw new Error(`Expected '${D}' to be an array of strings.`);
            }
          }
          e.assertArrayOfStrings = r;
          var u = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
          function s(D, n) {
            if (n != null && !(Array.isArray(n) && n.length == 2))
              throw new Error(`Expected '${D}' to be an array, [start, end].`);
            if (n != null) {
              let i = n[0], p = n[1];
              u.forEach((l) => {
                if (l.test(i) || l.test(p))
                  throw new Error(`['${i}', '${p}'] contains unusable interpolation symbol.`);
              });
            }
          }
          e.assertInterpolationSymbols = s;
        } }), $l = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/interpolation_config.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Ll(), u = class {
            constructor(s, D) {
              this.start = s, this.end = D;
            }
            static fromArray(s) {
              return s ? (r.assertInterpolationSymbols("interpolation", s), new u(s[0], s[1])) : e.DEFAULT_INTERPOLATION_CONFIG;
            }
          };
          e.InterpolationConfig = u, e.DEFAULT_INTERPOLATION_CONFIG = new u("{{", "}}");
        } }), Ml = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/lexer.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = ss(), u = ye(), s = $l(), D = Je(), n;
          (function(t) {
            t[t.TAG_OPEN_START = 0] = "TAG_OPEN_START", t[t.TAG_OPEN_END = 1] = "TAG_OPEN_END", t[t.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", t[t.TAG_CLOSE = 3] = "TAG_CLOSE", t[t.TEXT = 4] = "TEXT", t[t.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", t[t.RAW_TEXT = 6] = "RAW_TEXT", t[t.COMMENT_START = 7] = "COMMENT_START", t[t.COMMENT_END = 8] = "COMMENT_END", t[t.CDATA_START = 9] = "CDATA_START", t[t.CDATA_END = 10] = "CDATA_END", t[t.ATTR_NAME = 11] = "ATTR_NAME", t[t.ATTR_QUOTE = 12] = "ATTR_QUOTE", t[t.ATTR_VALUE = 13] = "ATTR_VALUE", t[t.DOC_TYPE_START = 14] = "DOC_TYPE_START", t[t.DOC_TYPE_END = 15] = "DOC_TYPE_END", t[t.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START", t[t.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE", t[t.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START", t[t.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END", t[t.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END", t[t.EOF = 21] = "EOF";
          })(n = e.TokenType || (e.TokenType = {}));
          var i = class {
            constructor(t, o, E) {
              this.type = t, this.parts = o, this.sourceSpan = E;
            }
          };
          e.Token = i;
          var p = class extends u.ParseError {
            constructor(t, o, E) {
              super(E, t), this.tokenType = o;
            }
          };
          e.TokenError = p;
          var l = class {
            constructor(t, o) {
              this.tokens = t, this.errors = o;
            }
          };
          e.TokenizeResult = l;
          function g(t, o, E) {
            let f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            return new d(new u.ParseSourceFile(t, o), E, f).tokenize();
          }
          e.tokenize = g;
          var a = /\r\n?/g;
          function c(t) {
            return `Unexpected character "${t === r.$EOF ? "EOF" : String.fromCharCode(t)}"`;
          }
          function h(t) {
            return `Unknown entity "${t}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
          }
          var C = class {
            constructor(t) {
              this.error = t;
            }
          }, d = class {
            constructor(t, o, E) {
              this._getTagContentType = o, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this._tokenizeIcu = E.tokenizeExpansionForms || false, this._interpolationConfig = E.interpolationConfig || s.DEFAULT_INTERPOLATION_CONFIG, this._leadingTriviaCodePoints = E.leadingTriviaChars && E.leadingTriviaChars.map((F) => F.codePointAt(0) || 0), this._canSelfClose = E.canSelfClose || false, this._allowHtmComponentClosingTags = E.allowHtmComponentClosingTags || false;
              let f = E.range || { endPos: t.content.length, startPos: 0, startLine: 0, startCol: 0 };
              this._cursor = E.escapedString ? new k(t, f) : new x(t, f);
              try {
                this._cursor.init();
              } catch (F) {
                this.handleError(F);
              }
            }
            _processCarriageReturns(t) {
              return t.replace(a, `
`);
            }
            tokenize() {
              for (; this._cursor.peek() !== r.$EOF; ) {
                let t = this._cursor.clone();
                try {
                  if (this._attemptCharCode(r.$LT))
                    if (this._attemptCharCode(r.$BANG))
                      this._attemptStr("[CDATA[") ? this._consumeCdata(t) : this._attemptStr("--") ? this._consumeComment(t) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(t) : this._consumeBogusComment(t);
                    else if (this._attemptCharCode(r.$SLASH))
                      this._consumeTagClose(t);
                    else {
                      let o = this._cursor.clone();
                      this._attemptCharCode(r.$QUESTION) ? (this._cursor = o, this._consumeBogusComment(t)) : this._consumeTagOpen(t);
                    }
                  else
                    this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText();
                } catch (o) {
                  this.handleError(o);
                }
              }
              return this._beginToken(n.EOF), this._endToken([]), new l(O(this.tokens), this.errors);
            }
            _tokenizeExpansionForm() {
              if (this.isExpansionFormStart())
                return this._consumeExpansionFormStart(), true;
              if (R(this._cursor.peek()) && this._isInExpansionForm())
                return this._consumeExpansionCaseStart(), true;
              if (this._cursor.peek() === r.$RBRACE) {
                if (this._isInExpansionCase())
                  return this._consumeExpansionCaseEnd(), true;
                if (this._isInExpansionForm())
                  return this._consumeExpansionFormEnd(), true;
              }
              return false;
            }
            _beginToken(t) {
              let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
              this._currentTokenStart = o, this._currentTokenType = t;
            }
            _endToken(t) {
              let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
              if (this._currentTokenStart === null)
                throw new p("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(o));
              if (this._currentTokenType === null)
                throw new p("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
              let E = new i(this._currentTokenType, t, this._cursor.getSpan(this._currentTokenStart, this._leadingTriviaCodePoints));
              return this.tokens.push(E), this._currentTokenStart = null, this._currentTokenType = null, E;
            }
            _createError(t, o) {
              this._isInExpansionForm() && (t += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
              let E = new p(t, this._currentTokenType, o);
              return this._currentTokenStart = null, this._currentTokenType = null, new C(E);
            }
            handleError(t) {
              if (t instanceof $ && (t = this._createError(t.msg, this._cursor.getSpan(t.cursor))), t instanceof C)
                this.errors.push(t.error);
              else
                throw t;
            }
            _attemptCharCode(t) {
              return this._cursor.peek() === t ? (this._cursor.advance(), true) : false;
            }
            _attemptCharCodeCaseInsensitive(t) {
              return j(this._cursor.peek(), t) ? (this._cursor.advance(), true) : false;
            }
            _requireCharCode(t) {
              let o = this._cursor.clone();
              if (!this._attemptCharCode(t))
                throw this._createError(c(this._cursor.peek()), this._cursor.getSpan(o));
            }
            _attemptStr(t) {
              let o = t.length;
              if (this._cursor.charsLeft() < o)
                return false;
              let E = this._cursor.clone();
              for (let f = 0; f < o; f++)
                if (!this._attemptCharCode(t.charCodeAt(f)))
                  return this._cursor = E, false;
              return true;
            }
            _attemptStrCaseInsensitive(t) {
              for (let o = 0; o < t.length; o++)
                if (!this._attemptCharCodeCaseInsensitive(t.charCodeAt(o)))
                  return false;
              return true;
            }
            _requireStr(t) {
              let o = this._cursor.clone();
              if (!this._attemptStr(t))
                throw this._createError(c(this._cursor.peek()), this._cursor.getSpan(o));
            }
            _requireStrCaseInsensitive(t) {
              let o = this._cursor.clone();
              if (!this._attemptStrCaseInsensitive(t))
                throw this._createError(c(this._cursor.peek()), this._cursor.getSpan(o));
            }
            _attemptCharCodeUntilFn(t) {
              for (; !t(this._cursor.peek()); )
                this._cursor.advance();
            }
            _requireCharCodeUntilFn(t, o) {
              let E = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(t), this._cursor.clone().diff(E) < o)
                throw this._createError(c(this._cursor.peek()), this._cursor.getSpan(E));
            }
            _attemptUntilChar(t) {
              for (; this._cursor.peek() !== t; )
                this._cursor.advance();
            }
            _readChar(t) {
              if (t && this._cursor.peek() === r.$AMPERSAND)
                return this._decodeEntity();
              {
                let o = String.fromCodePoint(this._cursor.peek());
                return this._cursor.advance(), o;
              }
            }
            _decodeEntity() {
              let t = this._cursor.clone();
              if (this._cursor.advance(), this._attemptCharCode(r.$HASH)) {
                let o = this._attemptCharCode(r.$x) || this._attemptCharCode(r.$X), E = this._cursor.clone();
                if (this._attemptCharCodeUntilFn(A), this._cursor.peek() != r.$SEMICOLON)
                  throw this._createError(c(this._cursor.peek()), this._cursor.getSpan());
                let f = this._cursor.getChars(E);
                this._cursor.advance();
                try {
                  let F = parseInt(f, o ? 16 : 10);
                  return String.fromCharCode(F);
                } catch {
                  throw this._createError(h(this._cursor.getChars(t)), this._cursor.getSpan());
                }
              } else {
                let o = this._cursor.clone();
                if (this._attemptCharCodeUntilFn(N), this._cursor.peek() != r.$SEMICOLON)
                  return this._cursor = o, "&";
                let E = this._cursor.getChars(o);
                this._cursor.advance();
                let f = D.NAMED_ENTITIES[E];
                if (!f)
                  throw this._createError(h(E), this._cursor.getSpan(t));
                return f;
              }
            }
            _consumeRawText(t, o) {
              this._beginToken(t ? n.ESCAPABLE_RAW_TEXT : n.RAW_TEXT);
              let E = [];
              for (; ; ) {
                let f = this._cursor.clone(), F = o();
                if (this._cursor = f, F)
                  break;
                E.push(this._readChar(t));
              }
              return this._endToken([this._processCarriageReturns(E.join(""))]);
            }
            _consumeComment(t) {
              this._beginToken(n.COMMENT_START, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(n.COMMENT_END), this._requireStr("-->"), this._endToken([]);
            }
            _consumeBogusComment(t) {
              this._beginToken(n.COMMENT_START, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(n.COMMENT_END), this._cursor.advance(), this._endToken([]);
            }
            _consumeCdata(t) {
              this._beginToken(n.CDATA_START, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(n.CDATA_END), this._requireStr("]]>"), this._endToken([]);
            }
            _consumeDocType(t) {
              this._beginToken(n.DOC_TYPE_START, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(n.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
            }
            _consumePrefixAndName() {
              let t = this._cursor.clone(), o = "";
              for (; this._cursor.peek() !== r.$COLON && !B(this._cursor.peek()); )
                this._cursor.advance();
              let E;
              this._cursor.peek() === r.$COLON ? (o = this._cursor.getChars(t), this._cursor.advance(), E = this._cursor.clone()) : E = t, this._requireCharCodeUntilFn(T, o === "" ? 0 : 1);
              let f = this._cursor.getChars(E);
              return [o, f];
            }
            _consumeTagOpen(t) {
              let o, E, f, F = this.tokens.length, P = this._cursor.clone(), M = [];
              try {
                if (!r.isAsciiLetter(this._cursor.peek()))
                  throw this._createError(c(this._cursor.peek()), this._cursor.getSpan(t));
                for (f = this._consumeTagOpenStart(t), E = f.parts[0], o = f.parts[1], this._attemptCharCodeUntilFn(m); this._cursor.peek() !== r.$SLASH && this._cursor.peek() !== r.$GT; ) {
                  let [X, H] = this._consumeAttributeName();
                  if (this._attemptCharCodeUntilFn(m), this._attemptCharCode(r.$EQ)) {
                    this._attemptCharCodeUntilFn(m);
                    let z = this._consumeAttributeValue();
                    M.push({ prefix: X, name: H, value: z });
                  } else
                    M.push({ prefix: X, name: H });
                  this._attemptCharCodeUntilFn(m);
                }
                this._consumeTagOpenEnd();
              } catch (X) {
                if (X instanceof C) {
                  this._cursor = P, f && (this.tokens.length = F), this._beginToken(n.TEXT, t), this._endToken(["<"]);
                  return;
                }
                throw X;
              }
              if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === n.TAG_OPEN_END_VOID)
                return;
              let W = this._getTagContentType(o, E, this._fullNameStack.length > 0, M);
              this._handleFullNameStackForTagOpen(E, o), W === D.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(E, o, false) : W === D.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(E, o, true);
            }
            _consumeRawTextWithTagClose(t, o, E) {
              this._consumeRawText(E, () => !this._attemptCharCode(r.$LT) || !this._attemptCharCode(r.$SLASH) || (this._attemptCharCodeUntilFn(m), !this._attemptStrCaseInsensitive(t ? `${t}:${o}` : o)) ? false : (this._attemptCharCodeUntilFn(m), this._attemptCharCode(r.$GT)));
              this._beginToken(n.TAG_CLOSE), this._requireCharCodeUntilFn((F) => F === r.$GT, 3), this._cursor.advance(), this._endToken([t, o]), this._handleFullNameStackForTagClose(t, o);
            }
            _consumeTagOpenStart(t) {
              this._beginToken(n.TAG_OPEN_START, t);
              let o = this._consumePrefixAndName();
              return this._endToken(o);
            }
            _consumeAttributeName() {
              let t = this._cursor.peek();
              if (t === r.$SQ || t === r.$DQ)
                throw this._createError(c(t), this._cursor.getSpan());
              this._beginToken(n.ATTR_NAME);
              let o = this._consumePrefixAndName();
              return this._endToken(o), o;
            }
            _consumeAttributeValue() {
              let t;
              if (this._cursor.peek() === r.$SQ || this._cursor.peek() === r.$DQ) {
                this._beginToken(n.ATTR_QUOTE);
                let o = this._cursor.peek();
                this._cursor.advance(), this._endToken([String.fromCodePoint(o)]), this._beginToken(n.ATTR_VALUE);
                let E = [];
                for (; this._cursor.peek() !== o; )
                  E.push(this._readChar(true));
                t = this._processCarriageReturns(E.join("")), this._endToken([t]), this._beginToken(n.ATTR_QUOTE), this._cursor.advance(), this._endToken([String.fromCodePoint(o)]);
              } else {
                this._beginToken(n.ATTR_VALUE);
                let o = this._cursor.clone();
                this._requireCharCodeUntilFn(T, 1), t = this._processCarriageReturns(this._cursor.getChars(o)), this._endToken([t]);
              }
              return t;
            }
            _consumeTagOpenEnd() {
              let t = this._attemptCharCode(r.$SLASH) ? n.TAG_OPEN_END_VOID : n.TAG_OPEN_END;
              this._beginToken(t), this._requireCharCode(r.$GT), this._endToken([]);
            }
            _consumeTagClose(t) {
              if (this._beginToken(n.TAG_CLOSE, t), this._attemptCharCodeUntilFn(m), this._allowHtmComponentClosingTags && this._attemptCharCode(r.$SLASH))
                this._attemptCharCodeUntilFn(m), this._requireCharCode(r.$GT), this._endToken([]);
              else {
                let [o, E] = this._consumePrefixAndName();
                this._attemptCharCodeUntilFn(m), this._requireCharCode(r.$GT), this._endToken([o, E]), this._handleFullNameStackForTagClose(o, E);
              }
            }
            _consumeExpansionFormStart() {
              this._beginToken(n.EXPANSION_FORM_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._expansionCaseStack.push(n.EXPANSION_FORM_START), this._beginToken(n.RAW_TEXT);
              let t = this._readUntil(r.$COMMA);
              this._endToken([t]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(m), this._beginToken(n.RAW_TEXT);
              let o = this._readUntil(r.$COMMA);
              this._endToken([o]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(m);
            }
            _consumeExpansionCaseStart() {
              this._beginToken(n.EXPANSION_CASE_VALUE);
              let t = this._readUntil(r.$LBRACE).trim();
              this._endToken([t]), this._attemptCharCodeUntilFn(m), this._beginToken(n.EXPANSION_CASE_EXP_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._attemptCharCodeUntilFn(m), this._expansionCaseStack.push(n.EXPANSION_CASE_EXP_START);
            }
            _consumeExpansionCaseEnd() {
              this._beginToken(n.EXPANSION_CASE_EXP_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._attemptCharCodeUntilFn(m), this._expansionCaseStack.pop();
            }
            _consumeExpansionFormEnd() {
              this._beginToken(n.EXPANSION_FORM_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._expansionCaseStack.pop();
            }
            _consumeText() {
              let t = this._cursor.clone();
              this._beginToken(n.TEXT, t);
              let o = [];
              do
                this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (o.push(this._interpolationConfig.start), this._inInterpolation = true) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (o.push(this._interpolationConfig.end), this._inInterpolation = false) : o.push(this._readChar(true));
              while (!this._isTextEnd());
              this._endToken([this._processCarriageReturns(o.join(""))]);
            }
            _isTextEnd() {
              return !!(this._cursor.peek() === r.$LT || this._cursor.peek() === r.$EOF || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === r.$RBRACE && this._isInExpansionCase()));
            }
            _readUntil(t) {
              let o = this._cursor.clone();
              return this._attemptUntilChar(t), this._cursor.getChars(o);
            }
            _isInExpansionCase() {
              return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === n.EXPANSION_CASE_EXP_START;
            }
            _isInExpansionForm() {
              return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === n.EXPANSION_FORM_START;
            }
            isExpansionFormStart() {
              if (this._cursor.peek() !== r.$LBRACE)
                return false;
              if (this._interpolationConfig) {
                let t = this._cursor.clone(), o = this._attemptStr(this._interpolationConfig.start);
                return this._cursor = t, !o;
              }
              return true;
            }
            _handleFullNameStackForTagOpen(t, o) {
              let E = D.mergeNsAndName(t, o);
              (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === E) && this._fullNameStack.push(E);
            }
            _handleFullNameStackForTagClose(t, o) {
              let E = D.mergeNsAndName(t, o);
              this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === E && this._fullNameStack.pop();
            }
          };
          function m(t) {
            return !r.isWhitespace(t) || t === r.$EOF;
          }
          function T(t) {
            return r.isWhitespace(t) || t === r.$GT || t === r.$SLASH || t === r.$SQ || t === r.$DQ || t === r.$EQ;
          }
          function B(t) {
            return (t < r.$a || r.$z < t) && (t < r.$A || r.$Z < t) && (t < r.$0 || t > r.$9);
          }
          function A(t) {
            return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiHexDigit(t);
          }
          function N(t) {
            return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiLetter(t);
          }
          function R(t) {
            return t === r.$EQ || r.isAsciiLetter(t) || r.isDigit(t);
          }
          function j(t, o) {
            return _(t) == _(o);
          }
          function _(t) {
            return t >= r.$a && t <= r.$z ? t - r.$a + r.$A : t;
          }
          function O(t) {
            let o = [], E;
            for (let f = 0; f < t.length; f++) {
              let F = t[f];
              E && E.type == n.TEXT && F.type == n.TEXT ? (E.parts[0] += F.parts[0], E.sourceSpan.end = F.sourceSpan.end) : (E = F, o.push(E));
            }
            return o;
          }
          var x = class {
            constructor(t, o) {
              if (t instanceof x)
                this.file = t.file, this.input = t.input, this.end = t.end, this.state = Object.assign({}, t.state);
              else {
                if (!o)
                  throw new Error("Programming error: the range argument must be provided with a file argument.");
                this.file = t, this.input = t.content, this.end = o.endPos, this.state = { peek: -1, offset: o.startPos, line: o.startLine, column: o.startCol };
              }
            }
            clone() {
              return new x(this);
            }
            peek() {
              return this.state.peek;
            }
            charsLeft() {
              return this.end - this.state.offset;
            }
            diff(t) {
              return this.state.offset - t.state.offset;
            }
            advance() {
              this.advanceState(this.state);
            }
            init() {
              this.updatePeek(this.state);
            }
            getSpan(t, o) {
              if (t = t || this, o)
                for (t = t.clone(); this.diff(t) > 0 && o.indexOf(t.peek()) !== -1; )
                  t.advance();
              return new u.ParseSourceSpan(new u.ParseLocation(t.file, t.state.offset, t.state.line, t.state.column), new u.ParseLocation(this.file, this.state.offset, this.state.line, this.state.column));
            }
            getChars(t) {
              return this.input.substring(t.state.offset, this.state.offset);
            }
            charAt(t) {
              return this.input.charCodeAt(t);
            }
            advanceState(t) {
              if (t.offset >= this.end)
                throw this.state = t, new $('Unexpected character "EOF"', this);
              let o = this.charAt(t.offset);
              o === r.$LF ? (t.line++, t.column = 0) : r.isNewLine(o) || t.column++, t.offset++, this.updatePeek(t);
            }
            updatePeek(t) {
              t.peek = t.offset >= this.end ? r.$EOF : this.charAt(t.offset);
            }
          }, k = class extends x {
            constructor(t, o) {
              t instanceof k ? (super(t), this.internalState = Object.assign({}, t.internalState)) : (super(t, o), this.internalState = this.state);
            }
            advance() {
              this.state = this.internalState, super.advance(), this.processEscapeSequence();
            }
            init() {
              super.init(), this.processEscapeSequence();
            }
            clone() {
              return new k(this);
            }
            getChars(t) {
              let o = t.clone(), E = "";
              for (; o.internalState.offset < this.internalState.offset; )
                E += String.fromCodePoint(o.peek()), o.advance();
              return E;
            }
            processEscapeSequence() {
              let t = () => this.internalState.peek;
              if (t() === r.$BACKSLASH)
                if (this.internalState = Object.assign({}, this.state), this.advanceState(this.internalState), t() === r.$n)
                  this.state.peek = r.$LF;
                else if (t() === r.$r)
                  this.state.peek = r.$CR;
                else if (t() === r.$v)
                  this.state.peek = r.$VTAB;
                else if (t() === r.$t)
                  this.state.peek = r.$TAB;
                else if (t() === r.$b)
                  this.state.peek = r.$BSPACE;
                else if (t() === r.$f)
                  this.state.peek = r.$FF;
                else if (t() === r.$u)
                  if (this.advanceState(this.internalState), t() === r.$LBRACE) {
                    this.advanceState(this.internalState);
                    let o = this.clone(), E = 0;
                    for (; t() !== r.$RBRACE; )
                      this.advanceState(this.internalState), E++;
                    this.state.peek = this.decodeHexDigits(o, E);
                  } else {
                    let o = this.clone();
                    this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 4);
                  }
                else if (t() === r.$x) {
                  this.advanceState(this.internalState);
                  let o = this.clone();
                  this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 2);
                } else if (r.isOctalDigit(t())) {
                  let o = "", E = 0, f = this.clone();
                  for (; r.isOctalDigit(t()) && E < 3; )
                    f = this.clone(), o += String.fromCodePoint(t()), this.advanceState(this.internalState), E++;
                  this.state.peek = parseInt(o, 8), this.internalState = f.internalState;
                } else
                  r.isNewLine(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
            }
            decodeHexDigits(t, o) {
              let E = this.input.substr(t.internalState.offset, o), f = parseInt(E, 16);
              if (isNaN(f))
                throw t.state = t.internalState, new $("Invalid hexadecimal escape sequence", t);
              return f;
            }
          }, $ = class {
            constructor(t, o) {
              this.msg = t, this.cursor = o;
            }
          };
          e.CursorError = $;
        } }), Zn = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/parser.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = ye(), u = Cs(), s = Ml(), D = Je(), n = class extends r.ParseError {
            constructor(a, c, h) {
              super(c, h), this.elementName = a;
            }
            static create(a, c, h) {
              return new n(a, c, h);
            }
          };
          e.TreeError = n;
          var i = class {
            constructor(a, c) {
              this.rootNodes = a, this.errors = c;
            }
          };
          e.ParseTreeResult = i;
          var p = class {
            constructor(a) {
              this.getTagDefinition = a;
            }
            parse(a, c, h) {
              let C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, d = arguments.length > 4 ? arguments[4] : void 0, m = (x) => function(k) {
                for (var $ = arguments.length, t = new Array($ > 1 ? $ - 1 : 0), o = 1; o < $; o++)
                  t[o - 1] = arguments[o];
                return x(k.toLowerCase(), ...t);
              }, T = C ? this.getTagDefinition : m(this.getTagDefinition), B = (x) => T(x).contentType, A = C ? d : m(d), N = d ? (x, k, $, t) => {
                let o = A(x, k, $, t);
                return o !== void 0 ? o : B(x);
              } : B, R = s.tokenize(a, c, N, h), j = h && h.canSelfClose || false, _ = h && h.allowHtmComponentClosingTags || false, O = new l(R.tokens, T, j, _, C).build();
              return new i(O.rootNodes, R.errors.concat(O.errors));
            }
          };
          e.Parser = p;
          var l = class {
            constructor(a, c, h, C, d) {
              this.tokens = a, this.getTagDefinition = c, this.canSelfClose = h, this.allowHtmComponentClosingTags = C, this.isTagNameCaseSensitive = d, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance();
            }
            build() {
              for (; this._peek.type !== s.TokenType.EOF; )
                this._peek.type === s.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === s.TokenType.TAG_CLOSE ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === s.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === s.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === s.TokenType.TEXT || this._peek.type === s.TokenType.RAW_TEXT || this._peek.type === s.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === s.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === s.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance();
              return new i(this._rootNodes, this._errors);
            }
            _advance() {
              let a = this._peek;
              return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], a;
            }
            _advanceIf(a) {
              return this._peek.type === a ? this._advance() : null;
            }
            _consumeCdata(a) {
              let c = this._advance(), h = this._getText(c), C = this._advanceIf(s.TokenType.CDATA_END);
              this._addToParent(new u.CDATA(h, new r.ParseSourceSpan(a.sourceSpan.start, (C || c).sourceSpan.end)));
            }
            _consumeComment(a) {
              let c = this._advanceIf(s.TokenType.RAW_TEXT), h = this._advanceIf(s.TokenType.COMMENT_END), C = c != null ? c.parts[0].trim() : null, d = new r.ParseSourceSpan(a.sourceSpan.start, (h || c || a).sourceSpan.end);
              this._addToParent(new u.Comment(C, d));
            }
            _consumeDocType(a) {
              let c = this._advanceIf(s.TokenType.RAW_TEXT), h = this._advanceIf(s.TokenType.DOC_TYPE_END), C = c != null ? c.parts[0].trim() : null, d = new r.ParseSourceSpan(a.sourceSpan.start, (h || c || a).sourceSpan.end);
              this._addToParent(new u.DocType(C, d));
            }
            _consumeExpansion(a) {
              let c = this._advance(), h = this._advance(), C = [];
              for (; this._peek.type === s.TokenType.EXPANSION_CASE_VALUE; ) {
                let m = this._parseExpansionCase();
                if (!m)
                  return;
                C.push(m);
              }
              if (this._peek.type !== s.TokenType.EXPANSION_FORM_END) {
                this._errors.push(n.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
                return;
              }
              let d = new r.ParseSourceSpan(a.sourceSpan.start, this._peek.sourceSpan.end);
              this._addToParent(new u.Expansion(c.parts[0], h.parts[0], C, d, c.sourceSpan)), this._advance();
            }
            _parseExpansionCase() {
              let a = this._advance();
              if (this._peek.type !== s.TokenType.EXPANSION_CASE_EXP_START)
                return this._errors.push(n.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
              let c = this._advance(), h = this._collectExpansionExpTokens(c);
              if (!h)
                return null;
              let C = this._advance();
              h.push(new s.Token(s.TokenType.EOF, [], C.sourceSpan));
              let d = new l(h, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build();
              if (d.errors.length > 0)
                return this._errors = this._errors.concat(d.errors), null;
              let m = new r.ParseSourceSpan(a.sourceSpan.start, C.sourceSpan.end), T = new r.ParseSourceSpan(c.sourceSpan.start, C.sourceSpan.end);
              return new u.ExpansionCase(a.parts[0], d.rootNodes, m, a.sourceSpan, T);
            }
            _collectExpansionExpTokens(a) {
              let c = [], h = [s.TokenType.EXPANSION_CASE_EXP_START];
              for (; ; ) {
                if ((this._peek.type === s.TokenType.EXPANSION_FORM_START || this._peek.type === s.TokenType.EXPANSION_CASE_EXP_START) && h.push(this._peek.type), this._peek.type === s.TokenType.EXPANSION_CASE_EXP_END)
                  if (g(h, s.TokenType.EXPANSION_CASE_EXP_START)) {
                    if (h.pop(), h.length == 0)
                      return c;
                  } else
                    return this._errors.push(n.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                if (this._peek.type === s.TokenType.EXPANSION_FORM_END)
                  if (g(h, s.TokenType.EXPANSION_FORM_START))
                    h.pop();
                  else
                    return this._errors.push(n.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                if (this._peek.type === s.TokenType.EOF)
                  return this._errors.push(n.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                c.push(this._advance());
              }
            }
            _getText(a) {
              let c = a.parts[0];
              if (c.length > 0 && c[0] == `
`) {
                let h = this._getParentElement();
                h != null && h.children.length == 0 && this.getTagDefinition(h.name).ignoreFirstLf && (c = c.substring(1));
              }
              return c;
            }
            _consumeText(a) {
              let c = this._getText(a);
              c.length > 0 && this._addToParent(new u.Text(c, a.sourceSpan));
            }
            _closeVoidElement() {
              let a = this._getParentElement();
              a && this.getTagDefinition(a.name).isVoid && this._elementStack.pop();
            }
            _consumeStartTag(a) {
              let c = a.parts[0], h = a.parts[1], C = [];
              for (; this._peek.type === s.TokenType.ATTR_NAME; )
                C.push(this._consumeAttr(this._advance()));
              let d = this._getElementFullName(c, h, this._getParentElement()), m = false;
              if (this._peek.type === s.TokenType.TAG_OPEN_END_VOID) {
                this._advance(), m = true;
                let R = this.getTagDefinition(d);
                this.canSelfClose || R.canSelfClose || D.getNsPrefix(d) !== null || R.isVoid || this._errors.push(n.create(d, a.sourceSpan, `Only void and foreign elements can be self closed "${a.parts[1]}"`));
              } else
                this._peek.type === s.TokenType.TAG_OPEN_END && (this._advance(), m = false);
              let T = this._peek.sourceSpan.start, B = new r.ParseSourceSpan(a.sourceSpan.start, T), A = new r.ParseSourceSpan(a.sourceSpan.start.moveBy(1), a.sourceSpan.end), N = new u.Element(d, C, [], B, B, void 0, A);
              this._pushElement(N), m && (this._popElement(d), N.endSourceSpan = B);
            }
            _pushElement(a) {
              let c = this._getParentElement();
              c && this.getTagDefinition(c.name).isClosedByChild(a.name) && this._elementStack.pop(), this._addToParent(a), this._elementStack.push(a);
            }
            _consumeEndTag(a) {
              let c = this.allowHtmComponentClosingTags && a.parts.length === 0 ? null : this._getElementFullName(a.parts[0], a.parts[1], this._getParentElement());
              if (this._getParentElement() && (this._getParentElement().endSourceSpan = a.sourceSpan), c && this.getTagDefinition(c).isVoid)
                this._errors.push(n.create(c, a.sourceSpan, `Void elements do not have end tags "${a.parts[1]}"`));
              else if (!this._popElement(c)) {
                let h = `Unexpected closing tag "${c}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
                this._errors.push(n.create(c, a.sourceSpan, h));
              }
            }
            _popElement(a) {
              for (let c = this._elementStack.length - 1; c >= 0; c--) {
                let h = this._elementStack[c];
                if (!a || (D.getNsPrefix(h.name) ? h.name == a : h.name.toLowerCase() == a.toLowerCase()))
                  return this._elementStack.splice(c, this._elementStack.length - c), true;
                if (!this.getTagDefinition(h.name).closedByParent)
                  return false;
              }
              return false;
            }
            _consumeAttr(a) {
              let c = D.mergeNsAndName(a.parts[0], a.parts[1]), h = a.sourceSpan.end, C = "", d, m;
              if (this._peek.type === s.TokenType.ATTR_QUOTE && (m = this._advance().sourceSpan.start), this._peek.type === s.TokenType.ATTR_VALUE) {
                let T = this._advance();
                C = T.parts[0], h = T.sourceSpan.end, d = T.sourceSpan;
              }
              return this._peek.type === s.TokenType.ATTR_QUOTE && (h = this._advance().sourceSpan.end, d = new r.ParseSourceSpan(m, h)), new u.Attribute(c, C, new r.ParseSourceSpan(a.sourceSpan.start, h), d, a.sourceSpan);
            }
            _getParentElement() {
              return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
            }
            _getParentElementSkippingContainers() {
              let a = null;
              for (let c = this._elementStack.length - 1; c >= 0; c--) {
                if (!D.isNgContainer(this._elementStack[c].name))
                  return { parent: this._elementStack[c], container: a };
                a = this._elementStack[c];
              }
              return { parent: null, container: a };
            }
            _addToParent(a) {
              let c = this._getParentElement();
              c != null ? c.children.push(a) : this._rootNodes.push(a);
            }
            _insertBeforeContainer(a, c, h) {
              if (!c)
                this._addToParent(h), this._elementStack.push(h);
              else {
                if (a) {
                  let C = a.children.indexOf(c);
                  a.children[C] = h;
                } else
                  this._rootNodes.push(h);
                h.children.push(c), this._elementStack.splice(this._elementStack.indexOf(c), 0, h);
              }
            }
            _getElementFullName(a, c, h) {
              return a === "" && (a = this.getTagDefinition(c).implicitNamespacePrefix || "", a === "" && h != null && (a = D.getNsPrefix(h.name))), D.mergeNsAndName(a, c);
            }
          };
          function g(a, c) {
            return a.length > 0 && a[a.length - 1] === c;
          }
        } }), jl = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_parser.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = Es(), u = Zn(), s = Zn();
          e.ParseTreeResult = s.ParseTreeResult, e.TreeError = s.TreeError;
          var D = class extends u.Parser {
            constructor() {
              super(r.getHtmlTagDefinition);
            }
            parse(n, i, p) {
              let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, g = arguments.length > 4 ? arguments[4] : void 0;
              return super.parse(n, i, p, l, g);
            }
          };
          e.HtmlParser = D;
        } }), ms = I({ "node_modules/angular-html-parser/lib/angular-html-parser/src/index.js"(e) {
          q(), Object.defineProperty(e, "__esModule", { value: true });
          var r = jl(), u = Je();
          e.TagContentType = u.TagContentType;
          var s = null, D = () => (s || (s = new r.HtmlParser()), s);
          function n(i) {
            let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { canSelfClose: l = false, allowHtmComponentClosingTags: g = false, isTagNameCaseSensitive: a = false, getTagContentType: c } = p;
            return D().parse(i, "angular-html-parser", { tokenizeExpansionForms: false, interpolationConfig: void 0, canSelfClose: l, allowHtmComponentClosingTags: g }, a, c);
          }
          e.parse = n;
        } });
        q();
        var { ParseSourceSpan: Ye, ParseLocation: es, ParseSourceFile: Ul } = ye(), Gl = ZD(), Vl = is(), Xl = el(), { inferParserByLanguage: Hl } = Tl(), zl = bl(), $r = Ol(), rs = ql(), { hasPragma: Wl } = Il(), { Node: Yl } = Rl(), { parseIeConditionalComment: Ql } = xl(), { locStart: Kl, locEnd: Jl } = Pl();
        function Zl(e, r, u) {
          let { recognizeSelfClosing: s, normalizeTagName: D, normalizeAttributeName: n, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: p, getTagContentType: l } = r, g = ms(), { RecursiveVisitor: a, visitAll: c } = Cs(), { ParseSourceSpan: h } = ye(), { getHtmlTagDefinition: C } = Es(), { rootNodes: d, errors: m } = g.parse(e, { canSelfClose: s, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: p, getTagContentType: l });
          if (u.parser === "vue")
            if (d.some((O) => O.type === "docType" && O.value === "html" || O.type === "element" && O.name.toLowerCase() === "html")) {
              s = true, D = true, n = true, i = true, p = false;
              let O = g.parse(e, { canSelfClose: s, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: p });
              d = O.rootNodes, m = O.errors;
            } else {
              let O = (x) => {
                if (!x || x.type !== "element" || x.name !== "template")
                  return false;
                let k = x.attrs.find((t) => t.name === "lang"), $ = k && k.value;
                return !$ || Hl($, u) === "html";
              };
              if (d.some(O)) {
                let x, k = () => g.parse(e, { canSelfClose: s, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: p }), $ = () => x || (x = k()), t = (o) => $().rootNodes.find((E) => {
                  let { startSourceSpan: f } = E;
                  return f && f.start.offset === o.startSourceSpan.start.offset;
                });
                for (let o = 0; o < d.length; o++) {
                  let E = d[o], { endSourceSpan: f, startSourceSpan: F } = E;
                  if (f === null)
                    m = $().errors, d[o] = t(E) || E;
                  else if (O(E)) {
                    let M = $(), W = F.end.offset, X = f.start.offset;
                    for (let H of M.errors) {
                      let { offset: z } = H.span.start;
                      if (W < z && z < X) {
                        m = [H];
                        break;
                      }
                    }
                    d[o] = t(E) || E;
                  }
                }
              }
            }
          if (m.length > 0) {
            let { msg: _, span: { start: O, end: x } } = m[0];
            throw Xl(_, { start: { line: O.line + 1, column: O.col + 1 }, end: { line: x.line + 1, column: x.col + 1 } });
          }
          let T = (_) => {
            let O = _.name.startsWith(":") ? _.name.slice(1).split(":")[0] : null, x = _.nameSpan.toString(), k = O !== null && x.startsWith(`${O}:`), $ = k ? x.slice(O.length + 1) : x;
            _.name = $, _.namespace = O, _.hasExplicitNamespace = k;
          }, B = (_) => {
            switch (_.type) {
              case "element":
                T(_);
                for (let O of _.attrs)
                  T(O), O.valueSpan ? (O.value = O.valueSpan.toString(), /["']/.test(O.value[0]) && (O.value = O.value.slice(1, -1))) : O.value = null;
                break;
              case "comment":
                _.value = _.sourceSpan.toString().slice(4, -3);
                break;
              case "text":
                _.value = _.sourceSpan.toString();
                break;
            }
          }, A = (_, O) => {
            let x = _.toLowerCase();
            return O(x) ? x : _;
          }, N = (_) => {
            if (_.type === "element" && (D && (!_.namespace || _.namespace === _.tagDefinition.implicitNamespacePrefix || rs(_)) && (_.name = A(_.name, (O) => O in zl)), n)) {
              let O = $r[_.name] || /* @__PURE__ */ Object.create(null);
              for (let x of _.attrs)
                x.namespace || (x.name = A(x.name, (k) => _.name in $r && (k in $r["*"] || k in O)));
            }
          }, R = (_) => {
            _.sourceSpan && _.endSourceSpan && (_.sourceSpan = new h(_.sourceSpan.start, _.endSourceSpan.end));
          }, j = (_) => {
            if (_.type === "element") {
              let O = C(p ? _.name : _.name.toLowerCase());
              !_.namespace || _.namespace === O.implicitNamespacePrefix || rs(_) ? _.tagDefinition = O : _.tagDefinition = C("");
            }
          };
          return c(new class extends a {
            visit(_) {
              B(_), j(_), N(_), R(_);
            }
          }(), d), d;
        }
        function gs(e, r, u) {
          let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, { frontMatter: D, content: n } = s ? Gl(e) : { frontMatter: null, content: e }, i = new Ul(e, r.filepath), p = new es(i, 0, 0, 0), l = p.moveBy(e.length), g = { type: "root", sourceSpan: new Ye(p, l), children: Zl(n, u, r) };
          if (D) {
            let h = new es(i, 0, 0, 0), C = h.moveBy(D.raw.length);
            D.sourceSpan = new Ye(h, C), g.children.unshift(D);
          }
          let a = new Yl(g), c = (h, C) => {
            let { offset: d } = C, m = e.slice(0, d).replace(/[^\n\r]/g, " "), B = gs(m + h, r, u, false);
            B.sourceSpan = new Ye(C, Vl(B.children).sourceSpan.end);
            let A = B.children[0];
            return A.length === d ? B.children.shift() : (A.sourceSpan = new Ye(A.sourceSpan.start.moveBy(d), A.sourceSpan.end), A.value = A.value.slice(d)), B;
          };
          return a.walk((h) => {
            if (h.type === "comment") {
              let C = Ql(h, c);
              C && h.parent.replaceChild(h, C);
            }
          }), a;
        }
        function Qe() {
          let { name: e, recognizeSelfClosing: r = false, normalizeTagName: u = false, normalizeAttributeName: s = false, allowHtmComponentClosingTags: D = false, isTagNameCaseSensitive: n = false, getTagContentType: i } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return { parse: (p, l, g) => gs(p, Object.assign({ parser: e }, g), { recognizeSelfClosing: r, normalizeTagName: u, normalizeAttributeName: s, allowHtmComponentClosingTags: D, isTagNameCaseSensitive: n, getTagContentType: i }), hasPragma: Wl, astFormat: "html", locStart: Kl, locEnd: Jl };
        }
        Fs.exports = { parsers: { html: Qe({ name: "html", recognizeSelfClosing: true, normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true }), angular: Qe({ name: "angular" }), vue: Qe({ name: "vue", recognizeSelfClosing: true, isTagNameCaseSensitive: true, getTagContentType: (e, r, u, s) => {
          if (e.toLowerCase() !== "html" && !u && (e !== "template" || s.some((D) => {
            let { name: n, value: i } = D;
            return n === "lang" && i !== "html" && i !== "" && i !== void 0;
          })))
            return ms().TagContentType.RAW_TEXT;
        } }), lwc: Qe({ name: "lwc" }) } };
      });
      return ec();
    });
  }
});
var SECTIONS = ["props", "events", "slots", "methods"];
var extractArgTypes = (component) => {
  if (!hasDocgen(component)) {
    return null;
  }
  const results = {};
  SECTIONS.forEach((section) => {
    const props = extractComponentProps(component, section);
    props.forEach(({ propDef, docgenInfo, jsDocTags }) => {
      const {
        name,
        type,
        global: global2,
        description,
        default: defaultSummary,
        required,
        tags = []
      } = docgenInfo;
      if (global2)
        return;
      console.log("docgenInfo = ", docgenInfo);
      const sbType = section === "props" ? convert(docgenInfo) : { name: "void" };
      const nestedTypes = sbType.name === "object" && section === "props" ? nestedInfo(sbType) : "";
      const definedTypes = `${typeof type === "string" ? type.replace(" | undefined", "") : type}`;
      const descriptions = `${description} 
      ${nestedTypes} 
    ${tags.map((tag) => `@${tag.name}: ${tag.text}`).join(`
    `)}`;
      results[name] = {
        name,
        description: descriptions,
        defaultValue: { summary: defaultSummary },
        type: { required, ...sbType },
        table: {
          type: { summary: definedTypes },
          jsDocTags: tags,
          defaultValue: { summary: defaultSummary },
          category: section
        }
      };
    });
  });
  return results;
};
var convert = ({ schema: schemaType }) => {
  if (typeof schemaType !== "object") {
    return { name: schemaType };
  }
  if (typeof schemaType === "object" && schemaType.kind === "enum" && Array.isArray(schemaType.schema)) {
    const values = schemaType.schema.filter((item) => item !== "undefined" && item !== null).map((item) => {
      if (typeof item === "string") {
        return item.replaceAll('"', "");
      }
      return item;
    });
    const sbType = { name: "enum", value: values };
    if (values.find((item) => item === "string"))
      return { ...sbType, name: "string", value: void 0 };
    if (values.find((item) => item === "number"))
      return { ...sbType, name: "number", value: void 0 };
    if (values.find((item) => item === "boolean"))
      return { ...sbType, name: "boolean", value: void 0 };
    const hasObject = values.find((item) => typeof item === "object");
    return {
      ...sbType,
      name: hasObject ? "array" : "enum",
      value: hasObject ? void 0 : values
    };
  }
  if (typeof schemaType === "object" && schemaType.kind === "object" && typeof schemaType.schema === "object") {
    const schemaObject = schemaType.schema;
    const props = Object.fromEntries(
      Object.entries(schemaObject).map(([key, value]) => {
        return [key, value];
      })
    );
    return {
      name: "object",
      value: props
    };
  }
  return { name: schemaType };
};
function nestedInfo(sbType) {
  return Object.keys(sbType.value).map((key) => {
    const value = sbType.value[key];
    return `
    \u2022${key}: ${value.type} ${value.description}
      `;
  }).join("\n");
}

// src/docs/sourceDecorator.ts
var import_parser_html = __toESM(require_parser_html());
var isArray = Array.isArray;

// src/docs/sourceDecorator.ts
var skipSourceRender = (context) => {
  const sourceParams = context?.parameters.docs?.source;
  const isArgsStory = context?.parameters.__isArgsStory;
  if (sourceParams?.type === SourceType.DYNAMIC) {
    return false;
  }
  return !isArgsStory || sourceParams?.code || sourceParams?.type === SourceType.CODE;
};
function getComponentNameAndChildren(component) {
  return {
    name: component?.name || component?.__name || component?.__docgenInfo?.__name || null,
    children: component?.children || null,
    attributes: component?.attributes || component?.attrs || null
  };
}
function generateAttributesSource(_args, argTypes, byRef) {
  const args = { ..._args };
  const argsKeys = Object.keys(args).filter(
    (key) => ["children", "slots"].indexOf(argTypes[key]?.table?.category) === -1 || !argTypes[key]
    // remove slots and children
  ).map((key) => {
    const akey = argTypes[key]?.table?.category !== "events" ? key.replace(/([A-Z])/g, "-$1").replace(/^on-/, "v-on:").replace(/^:/, "").toLowerCase() : `v-on:${key}`;
    args[akey] = args[key];
    return akey;
  }).filter((key, index, self2) => self2.indexOf(key) === index);
  const camelCase = (str) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  const source = argsKeys.map(
    (key) => generateAttributeSource(
      byRef && !key.includes(":") ? `:${key}` : key,
      byRef && !key.includes(":") ? camelCase(key) : args[key],
      argTypes[key]
    )
  ).join(" ");
  return source;
}
function generateAttributeSource(key, value, argType) {
  if (!value) {
    return "";
  }
  if (value === true) {
    return key;
  }
  if (key.startsWith("v-on:")) {
    return `${key}='() => {}'`;
  }
  if (typeof value === "string") {
    return `${key}='${value}'`;
  }
  return `:${key}='${JSON.stringify(value)}'`;
}
function generateScriptSetup(args, argTypes, components) {
  const scriptLines = Object.keys(args).map(
    (key) => `const ${key} = ${typeof args[key] === "function" ? `()=>{}` : `ref(${JSON.stringify(args[key])});`}`
  );
  scriptLines.unshift(`import { ref } from "vue";`);
  return `<script lang='ts' setup>${scriptLines.join("\n")}<\/script>`;
}
function getTemplates(renderFn) {
  try {
    const ast = import_parser_html.default.parsers.vue.parse(renderFn.toString());
    let components = ast.children?.filter(
      ({ name: _name = "", type: _type = "" }) => _name && !["template", "script", "style", "slot"].includes(_name) && _type === "element"
    );
    if (!isArray(components)) {
      return [];
    }
    components = components.map(
      ({ attrs: attributes = [], name: Name = "", children: Children = [] }) => {
        return {
          name: Name,
          attrs: attributes,
          children: Children
        };
      }
    );
    return components;
  } catch (e) {
  }
  return [];
}
function generateSource(compOrComps, args, argTypes, byRef) {
  if (!compOrComps)
    return null;
  const generateComponentSource = (component) => {
    const { name, children, attributes } = getComponentNameAndChildren(component);
    if (!name) {
      return "";
    }
    const argsIn = attributes ? getArgsInAttrs(args, attributes) : args;
    const props = generateAttributesSource(argsIn, argTypes, byRef);
    const slotArgs = Object.entries(argsIn).filter(
      ([arg]) => argTypes[arg]?.table?.category === "slots"
    );
    const slotProps = Object.entries(argTypes).filter(
      ([arg]) => argTypes[arg]?.table?.category === "slots"
    );
    if (slotArgs && slotArgs.length > 0) {
      const namedSlotContents = createNamedSlots(slotArgs, slotProps, byRef);
      return `<${name} ${props}>
${namedSlotContents}
</${name}>`;
    }
    if (children && children.length > 0) {
      const childrenSource = children.map((child) => {
        return generateSource(
          typeof child.value === "string" ? getTemplates(child.value) : child.value,
          args,
          argTypes,
          byRef
        );
      });
      if (childrenSource.join("").trim() === "")
        return `<${name} ${props}/>`;
      const isNativeTag = name.includes("template") || name.match(/^[a-z]/) || name === "Fragment" && !name.includes("-");
      return `<${name} ${isNativeTag ? "" : props}>
${childrenSource}
</${name}>`;
    }
    return `<${name} ${props}/>`;
  };
  const components = isArray(compOrComps) ? compOrComps : [compOrComps];
  const source = Object.keys(components).map((key) => `${generateComponentSource(components[key])}`).join(`
`);
  return source;
}
function createNamedSlots(slotArgs, slotProps, byRef) {
  if (!slotArgs)
    return "";
  const many = slotProps.length > 1;
  return slotArgs.map(([key, value]) => {
    const content = !byRef ? JSON.stringify(value) : `{{ ${key} }}`;
    return many ? `  <template #${key}>${content}</template>` : `  ${content}`;
  }).join("\n");
}
function getArgsInAttrs(args, attributes) {
  return Object.keys(args).reduce((acc, prop) => {
    if (attributes?.find((attr) => attr.name === "v-bind")) {
      acc[prop] = args[prop];
    }
    const attribute = attributes?.find(
      (attr) => attr.name === prop || attr.name === `:${prop}`
    );
    if (attribute) {
      acc[prop] = attribute.name === `:${prop}` ? args[prop] : attribute.value;
    }
    if (Object.keys(acc).length === 0) {
      attributes?.forEach((attr) => {
        acc[attr.name] = JSON.parse(JSON.stringify(attr.value));
      });
    }
    return acc;
  }, {});
}
var sourceDecorator = (storyFn, context) => {
  const channel = addons.getChannel();
  const skip = skipSourceRender(context);
  const story = storyFn();
  let source;
  useEffect(() => {
    if (!skip && source) {
      const { id, unmappedArgs } = context;
      channel.emit(SNIPPET_RENDERED, { id, args: unmappedArgs, source, format: "vue" });
    }
  });
  if (skip) {
    return story;
  }
  const { args = {}, component: ctxtComponent, argTypes = {} } = context || {};
  const components = getTemplates(context?.originalStoryFn);
  const storyComponent = components.length ? components : ctxtComponent;
  const withScript = context?.parameters?.docs?.source?.withScriptSetup || false;
  const generatedScript = withScript ? generateScriptSetup(args) : "";
  const generatedTemplate = generateSource(storyComponent, args, argTypes, withScript);
  if (generatedTemplate) {
    source = `${generatedScript}
 <template>
 ${generatedTemplate} 
</template>`;
  }
  return story;
};

// src/docs/config.ts
var parameters = {
  docs: {
    story: { inline: true },
    extractArgTypes,
    extractComponentDescription
  }
};
var decorators = [sourceDecorator];
var argTypesEnhancers = [enhanceArgTypes];

// src/config.ts
var parameters2 = { renderer: "vue3", ...parameters };

export { argTypesEnhancers, decorators, parameters2 as parameters };
