function v() {}
const ct = (t) => t;
function ut(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function K(t) {
  return t();
}
function W() {
  return Object.create(null);
}
function E(t) {
  t.forEach(K);
}
function H(t) {
  return typeof t == "function";
}
function Bt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let j;
function Ht(t, e) {
  return j || (j = document.createElement("a")), (j.href = e), t === j.href;
}
function lt(t) {
  return Object.keys(t).length === 0;
}
function ft(t, ...e) {
  if (t == null) return v;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Lt(t, e, n) {
  t.$$.on_destroy.push(ft(e, n));
}
function Ft(t, e, n, i) {
  if (t) {
    const r = Q(t, e, n, i);
    return t[0](r);
  }
}
function Q(t, e, n, i) {
  return t[1] && i ? ut(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Wt(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0) return r;
    if (typeof r == "object") {
      const u = [],
        o = Math.max(e.dirty.length, r.length);
      for (let s = 0; s < o; s += 1) u[s] = e.dirty[s] | r[s];
      return u;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Gt(t, e, n, i, r, u) {
  if (r) {
    const o = Q(e, n, i, u);
    t.p(o, r);
  }
}
function It(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function Jt(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function Kt(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
const U = typeof window < "u";
let at = U ? () => window.performance.now() : () => Date.now(),
  L = U ? (t) => requestAnimationFrame(t) : v;
const b = new Set();
function V(t) {
  b.forEach((e) => {
    e.c(t) || (b.delete(e), e.f());
  }),
    b.size !== 0 && L(V);
}
function _t(t) {
  let e;
  return (
    b.size === 0 && L(V),
    {
      promise: new Promise((n) => {
        b.add((e = { c: t, f: n }));
      }),
      abort() {
        b.delete(e);
      },
    }
  );
}
let T = !1;
function dt() {
  T = !0;
}
function ht() {
  T = !1;
}
function mt(t, e, n, i) {
  for (; t < e; ) {
    const r = t + ((e - t) >> 1);
    n(r) <= i ? (t = r + 1) : (e = r);
  }
  return t;
}
function pt(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const c = [];
    for (let l = 0; l < e.length; l++) {
      const _ = e[l];
      _.claim_order !== void 0 && c.push(_);
    }
    e = c;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let r = 0;
  for (let c = 0; c < e.length; c++) {
    const l = e[c].claim_order,
      _ =
        (r > 0 && e[n[r]].claim_order <= l
          ? r + 1
          : mt(1, r, (h) => e[n[h]].claim_order, l)) - 1;
    i[c] = n[_] + 1;
    const f = _ + 1;
    (n[f] = c), (r = Math.max(f, r));
  }
  const u = [],
    o = [];
  let s = e.length - 1;
  for (let c = n[r] + 1; c != 0; c = i[c - 1]) {
    for (u.push(e[c - 1]); s >= c; s--) o.push(e[s]);
    s--;
  }
  for (; s >= 0; s--) o.push(e[s]);
  u.reverse(), o.sort((c, l) => c.claim_order - l.claim_order);
  for (let c = 0, l = 0; c < o.length; c++) {
    for (; l < u.length && o[c].claim_order >= u[l].claim_order; ) l++;
    const _ = l < u.length ? u[l] : null;
    t.insertBefore(o[c], _);
  }
}
function yt(t, e) {
  t.appendChild(e);
}
function X(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function gt(t) {
  const e = Z("style");
  return xt(X(t), e), e.sheet;
}
function xt(t, e) {
  return yt(t.head || t, e), e.sheet;
}
function $t(t, e) {
  if (T) {
    for (
      pt(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Qt(t, e, n) {
  T && !n
    ? $t(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function Y(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ut(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function Z(t) {
  return document.createElement(t);
}
function bt(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function F(t) {
  return document.createTextNode(t);
}
function Vt() {
  return F(" ");
}
function Xt() {
  return F("");
}
function Yt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function wt(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Zt(t, e) {
  for (const n in e) wt(t, n, e[n]);
}
function vt(t) {
  return Array.from(t.childNodes);
}
function Et(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function tt(t, e, n, i, r = !1) {
  Et(t);
  const u = (() => {
    for (let o = t.claim_info.last_index; o < t.length; o++) {
      const s = t[o];
      if (e(s)) {
        const c = n(s);
        return (
          c === void 0 ? t.splice(o, 1) : (t[o] = c),
          r || (t.claim_info.last_index = o),
          s
        );
      }
    }
    for (let o = t.claim_info.last_index - 1; o >= 0; o--) {
      const s = t[o];
      if (e(s)) {
        const c = n(s);
        return (
          c === void 0 ? t.splice(o, 1) : (t[o] = c),
          r
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = o),
          s
        );
      }
    }
    return i();
  })();
  return (
    (u.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    u
  );
}
function et(t, e, n, i) {
  return tt(
    t,
    (r) => r.nodeName === e,
    (r) => {
      const u = [];
      for (let o = 0; o < r.attributes.length; o++) {
        const s = r.attributes[o];
        n[s.name] || u.push(s.name);
      }
      u.forEach((o) => r.removeAttribute(o));
    },
    () => i(e)
  );
}
function te(t, e, n) {
  return et(t, e, n, Z);
}
function ee(t, e, n) {
  return et(t, e, n, bt);
}
function Nt(t, e) {
  return tt(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => F(e),
    !0
  );
}
function ne(t) {
  return Nt(t, " ");
}
function ie(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function re(t, e, n, i) {
  n == null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
function kt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, i, e), r;
}
function se(t, e) {
  const n = [];
  let i = 0;
  for (const r of e.childNodes)
    if (r.nodeType === 8) {
      const u = r.textContent.trim();
      u === `HEAD_${t}_END`
        ? ((i -= 1), n.push(r))
        : u === `HEAD_${t}_START` && ((i += 1), n.push(r));
    } else i > 0 && n.push(r);
  return n;
}
function oe(t, e) {
  return new t(e);
}
const D = new Map();
let M = 0;
function At(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function St(t, e) {
  const n = { stylesheet: gt(e), rules: {} };
  return D.set(t, n), n;
}
function G(t, e, n, i, r, u, o, s = 0) {
  const c = 16.666 / i;
  let l = `{
`;
  for (let y = 0; y <= 1; y += c) {
    const g = e + (n - e) * u(y);
    l +=
      y * 100 +
      `%{${o(g, 1 - g)}}
`;
  }
  const _ =
      l +
      `100% {${o(n, 1 - n)}}
}`,
    f = `__svelte_${At(_)}_${s}`,
    h = X(t),
    { stylesheet: a, rules: d } = D.get(h) || St(h, t);
  d[f] ||
    ((d[f] = !0), a.insertRule(`@keyframes ${f} ${_}`, a.cssRules.length));
  const m = t.style.animation || "";
  return (
    (t.style.animation = `${
      m ? `${m}, ` : ""
    }${f} ${i}ms linear ${r}ms 1 both`),
    (M += 1),
    f
  );
}
function jt(t, e) {
  const n = (t.style.animation || "").split(", "),
    i = n.filter(
      e ? (u) => u.indexOf(e) < 0 : (u) => u.indexOf("__svelte") === -1
    ),
    r = n.length - i.length;
  r && ((t.style.animation = i.join(", ")), (M -= r), M || Ct());
}
function Ct() {
  L(() => {
    M ||
      (D.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && Y(e);
      }),
      D.clear());
  });
}
let A;
function k(t) {
  A = t;
}
function nt() {
  if (!A) throw new Error("Function called outside component initialization");
  return A;
}
function ce(t) {
  nt().$$.on_mount.push(t);
}
function ue(t) {
  nt().$$.after_update.push(t);
}
const $ = [],
  I = [];
let w = [];
const J = [],
  it = Promise.resolve();
let B = !1;
function rt() {
  B || ((B = !0), it.then(st));
}
function le() {
  return rt(), it;
}
function O(t) {
  w.push(t);
}
const q = new Set();
let x = 0;
function st() {
  if (x !== 0) return;
  const t = A;
  do {
    try {
      for (; x < $.length; ) {
        const e = $[x];
        x++, k(e), Dt(e.$$);
      }
    } catch (e) {
      throw (($.length = 0), (x = 0), e);
    }
    for (k(null), $.length = 0, x = 0; I.length; ) I.pop()();
    for (let e = 0; e < w.length; e += 1) {
      const n = w[e];
      q.has(n) || (q.add(n), n());
    }
    w.length = 0;
  } while ($.length);
  for (; J.length; ) J.pop()();
  (B = !1), q.clear(), k(t);
}
function Dt(t) {
  if (t.fragment !== null) {
    t.update(), E(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(O);
  }
}
function Mt(t) {
  const e = [],
    n = [];
  w.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (w = e);
}
let N;
function Ot() {
  return (
    N ||
      ((N = Promise.resolve()),
      N.then(() => {
        N = null;
      })),
    N
  );
}
function z(t, e, n) {
  t.dispatchEvent(kt(`${e ? "intro" : "outro"}${n}`));
}
const C = new Set();
let p;
function fe() {
  p = { r: 0, c: [], p };
}
function ae() {
  p.r || E(p.c), (p = p.p);
}
function Tt(t, e) {
  t && t.i && (C.delete(t), t.i(e));
}
function _e(t, e, n, i) {
  if (t && t.o) {
    if (C.has(t)) return;
    C.add(t),
      p.c.push(() => {
        C.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  } else i && i();
}
const Pt = { duration: 0 };
function de(t, e, n, i) {
  const r = { direction: "both" };
  let u = e(t, n, r),
    o = i ? 0 : 1,
    s = null,
    c = null,
    l = null;
  function _() {
    l && jt(t, l);
  }
  function f(a, d) {
    const m = a.b - o;
    return (
      (d *= Math.abs(m)),
      {
        a: o,
        b: a.b,
        d: m,
        duration: d,
        start: a.start,
        end: a.start + d,
        group: a.group,
      }
    );
  }
  function h(a) {
    const {
        delay: d = 0,
        duration: m = 300,
        easing: y = ct,
        tick: g = v,
        css: P,
      } = u || Pt,
      R = { start: at() + d, b: a };
    a || ((R.group = p), (p.r += 1)),
      s || c
        ? (c = R)
        : (P && (_(), (l = G(t, o, a, m, d, y, P))),
          a && g(0, 1),
          (s = f(R, m)),
          O(() => z(t, a, "start")),
          _t((S) => {
            if (
              (c &&
                S > c.start &&
                ((s = f(c, m)),
                (c = null),
                z(t, s.b, "start"),
                P && (_(), (l = G(t, o, s.b, s.duration, 0, y, u.css)))),
              s)
            ) {
              if (S >= s.end)
                g((o = s.b), 1 - o),
                  z(t, s.b, "end"),
                  c || (s.b ? _() : --s.group.r || E(s.group.c)),
                  (s = null);
              else if (S >= s.start) {
                const ot = S - s.start;
                (o = s.a + s.d * y(ot / s.duration)), g(o, 1 - o);
              }
            }
            return !!(s || c);
          }));
  }
  return {
    run(a) {
      H(u)
        ? Ot().then(() => {
            (u = u(r)), h(a);
          })
        : h(a);
    },
    end() {
      _(), (s = c = null);
    },
  };
}
function he(t, e) {
  const n = {},
    i = {},
    r = { $$scope: 1 };
  let u = t.length;
  for (; u--; ) {
    const o = t[u],
      s = e[u];
    if (s) {
      for (const c in o) c in s || (i[c] = 1);
      for (const c in s) r[c] || ((n[c] = s[c]), (r[c] = 1));
      t[u] = s;
    } else for (const c in o) r[c] = 1;
  }
  for (const o in i) o in n || (n[o] = void 0);
  return n;
}
function me(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function pe(t) {
  t && t.c();
}
function ye(t, e) {
  t && t.l(e);
}
function Rt(t, e, n, i) {
  const { fragment: r, after_update: u } = t.$$;
  r && r.m(e, n),
    i ||
      O(() => {
        const o = t.$$.on_mount.map(K).filter(H);
        t.$$.on_destroy ? t.$$.on_destroy.push(...o) : E(o),
          (t.$$.on_mount = []);
      }),
    u.forEach(O);
}
function qt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (Mt(n.after_update),
    E(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function zt(t, e) {
  t.$$.dirty[0] === -1 && ($.push(t), rt(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ge(t, e, n, i, r, u, o, s = [-1]) {
  const c = A;
  k(t);
  const l = (t.$$ = {
    fragment: null,
    ctx: [],
    props: u,
    update: v,
    not_equal: r,
    bound: W(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: W(),
    dirty: s,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  o && o(l.root);
  let _ = !1;
  if (
    ((l.ctx = n
      ? n(t, e.props || {}, (f, h, ...a) => {
          const d = a.length ? a[0] : h;
          return (
            l.ctx &&
              r(l.ctx[f], (l.ctx[f] = d)) &&
              (!l.skip_bound && l.bound[f] && l.bound[f](d), _ && zt(t, f)),
            h
          );
        })
      : []),
    l.update(),
    (_ = !0),
    E(l.before_update),
    (l.fragment = i ? i(l.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      dt();
      const f = vt(e.target);
      l.fragment && l.fragment.l(f), f.forEach(Y);
    } else l.fragment && l.fragment.c();
    e.intro && Tt(t.$$.fragment),
      Rt(t, e.target, e.anchor, e.customElement),
      ht(),
      st();
  }
  k(c);
}
class xe {
  $destroy() {
    qt(this, 1), (this.$destroy = v);
  }
  $on(e, n) {
    if (!H(n)) return v;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const r = i.indexOf(n);
        r !== -1 && i.splice(r, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !lt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  Rt as A,
  qt as B,
  ut as C,
  he as D,
  me as E,
  Jt as F,
  Ft as G,
  Gt as H,
  It as I,
  Wt as J,
  Yt as K,
  Ht as L,
  $t as M,
  Lt as N,
  O,
  de as P,
  Ut as Q,
  v as R,
  xe as S,
  se as T,
  H as U,
  E as V,
  ct as W,
  bt as X,
  ee as Y,
  Zt as Z,
  Kt as _,
  Vt as a,
  Qt as b,
  ne as c,
  _e as d,
  Xt as e,
  ae as f,
  Tt as g,
  Y as h,
  ge as i,
  ue as j,
  Z as k,
  te as l,
  vt as m,
  wt as n,
  ce as o,
  re as p,
  F as q,
  Nt as r,
  Bt as s,
  le as t,
  ie as u,
  fe as v,
  I as w,
  oe as x,
  pe as y,
  ye as z,
};
