import{S as W,i as X,s as O,k as m,q as $,a as b,l as v,m as k,r as I,h as u,c as y,n as p,b as w,C as c,D as ve,E as ke,F as U,G as ge,u as be,H as le,e as G,y as se,I as ye,z as re,A as ne,g as D,d as M,B as oe,J as Ee,v as we,f as Ae,K as _e,L as he,M as pe,N as me,O as $e,P as Ie,Q as Pe}from"../chunks/index.07d369e4.js";import{f as ie}from"../chunks/index.5c6b51cf.js";import{p as He}from"../chunks/stores.125739ff.js";function ce(f,e,a){const n=f.slice();return n[3]=e[a],n}function fe(f){let e,a,n,l,s;return{c(){e=m("span"),a=m("span"),n=$("—"),l=b(),s=$(f[1]),this.h()},l(t){e=v(t,"SPAN",{class:!0});var r=k(e);a=v(r,"SPAN",{class:!0});var i=k(a);n=I(i,"—"),i.forEach(u),l=y(r),s=I(r,f[1]),r.forEach(u),this.h()},h(){p(a,"class","text-neutral-400 svelte-bgdsr9"),p(e,"class","page-title svelte-bgdsr9")},m(t,r){w(t,e,r),c(e,a),c(a,n),c(e,l),c(e,s)},p(t,r){r&2&&be(s,t[1])},d(t){t&&u(e)}}}function ue(f,e){let a,n=e[3].name+"",l,s;return{key:f,first:null,c(){a=m("a"),l=$(n),s=b(),this.h()},l(t){a=v(t,"A",{href:!0,class:!0});var r=k(a);l=I(r,n),s=y(r),r.forEach(u),this.h()},h(){p(a,"href",e[3].href),p(a,"class","hover:text-black transition-colors svelte-bgdsr9"),le(a,"text-black",e[0].url.pathname===e[3].href),this.first=a},m(t,r){w(t,a,r),c(a,l),c(a,s)},p(t,r){e=t,r&5&&le(a,"text-black",e[0].url.pathname===e[3].href)},d(t){t&&u(a)}}}function Le(f){let e,a,n,l,s,t,r,i=[],A=new Map,_=f[1]&&fe(f),g=f[2];const E=h=>h[3];for(let h=0;h<g.length;h+=1){let o=ce(f,g,h),d=E(o);A.set(d,i[h]=ue(d,o))}return{c(){e=m("header"),a=m("h1"),n=m("a"),l=$("Florian Pfleiderer"),s=b(),_&&_.c(),t=b(),r=m("nav");for(let h=0;h<i.length;h+=1)i[h].c();this.h()},l(h){e=v(h,"HEADER",{class:!0,"data-sveltekit-noscroll":!0,"data-sveltekit-preload-code":!0});var o=k(e);a=v(o,"H1",{class:!0});var d=k(a);n=v(d,"A",{href:!0});var R=k(n);l=I(R,"Florian Pfleiderer"),R.forEach(u),s=y(d),_&&_.l(d),d.forEach(u),t=y(o),r=v(o,"NAV",{class:!0});var P=k(r);for(let N=0;N<i.length;N+=1)i[N].l(P);P.forEach(u),o.forEach(u),this.h()},h(){p(n,"href","/"),p(a,"class","font-bold text-black text-2xl mb-6"),p(r,"class","svelte-bgdsr9"),p(e,"class","layout-md flex justify-between items-start"),p(e,"data-sveltekit-noscroll",""),p(e,"data-sveltekit-preload-code","eager")},m(h,o){w(h,e,o),c(e,a),c(a,n),c(n,l),c(a,s),_&&_.m(a,null),c(e,t),c(e,r);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(r,null)},p(h,[o]){h[1]?_?_.p(h,o):(_=fe(h),_.c(),_.m(a,null)):_&&(_.d(1),_=null),o&5&&(g=h[2],i=ve(i,o,E,1,h,g,A,r,ke,ue,null,ce))},i:U,o:U,d(h){h&&u(e),_&&_.d();for(let o=0;o<i.length;o+=1)i[o].d()}}}function Ne(f,e,a){let n;ge(f,He,t=>a(0,n=t));const l=[{name:"projects",href:"/projects"},{name:"writing",href:"/writing"},{name:"resume",href:"/resume"}];let s=null;return f.$$.update=()=>{if(f.$$.dirty&1){const t=l.find(({href:r})=>r===n.url.pathname);t?a(1,s=t.name.charAt(0).toUpperCase()+t.name.slice(1)):a(1,s=null)}},[n,s,l]}class Se extends W{constructor(e){super(),X(this,e,Ne,Le,O,{})}}function De(f){let e,a,n,l,s,t,r,i,A,_,g,E,h,o,d,R,P,N,z,H,j,B,J,q,K,S,Q;return{c(){e=m("footer"),a=m("div"),n=m("span"),l=$("GitHub"),s=b(),t=m("hr"),r=b(),i=m("a"),A=$("florianpfleiderer"),_=b(),g=m("div"),E=m("span"),h=$("LinkedIn"),o=b(),d=m("hr"),R=b(),P=m("a"),N=$("fpfleiderer"),z=b(),H=m("div"),j=m("span"),B=$("Email"),J=b(),q=m("hr"),K=b(),S=m("a"),Q=$("florian@pfleiderer.at"),this.h()},l(V){e=v(V,"FOOTER",{class:!0});var L=k(e);a=v(L,"DIV",{class:!0});var F=k(a);n=v(F,"SPAN",{class:!0});var Y=k(n);l=I(Y,"GitHub"),Y.forEach(u),s=y(F),t=v(F,"HR",{class:!0}),r=y(F),i=v(F,"A",{class:!0,href:!0});var Z=k(i);A=I(Z,"florianpfleiderer"),Z.forEach(u),F.forEach(u),_=y(L),g=v(L,"DIV",{class:!0});var C=k(g);E=v(C,"SPAN",{class:!0});var x=k(E);h=I(x,"LinkedIn"),x.forEach(u),o=y(C),d=v(C,"HR",{class:!0}),R=y(C),P=v(C,"A",{class:!0,href:!0});var ee=k(P);N=I(ee,"fpfleiderer"),ee.forEach(u),C.forEach(u),z=y(L),H=v(L,"DIV",{class:!0});var T=k(H);j=v(T,"SPAN",{class:!0});var te=k(j);B=I(te,"Email"),te.forEach(u),J=y(T),q=v(T,"HR",{class:!0}),K=y(T),S=v(T,"A",{class:!0,href:!0});var ae=k(S);Q=I(ae,"florian@pfleiderer.at"),ae.forEach(u),T.forEach(u),L.forEach(u),this.h()},h(){p(n,"class","svelte-1t3hv3r"),p(t,"class","svelte-1t3hv3r"),p(i,"class","link svelte-1t3hv3r"),p(i,"href","https://github.com/florianpfleiderer"),p(a,"class","row svelte-1t3hv3r"),p(E,"class","svelte-1t3hv3r"),p(d,"class","svelte-1t3hv3r"),p(P,"class","link svelte-1t3hv3r"),p(P,"href","https://www.linkedin.com/in/fpfleiderer/"),p(g,"class","row svelte-1t3hv3r"),p(j,"class","svelte-1t3hv3r"),p(q,"class","svelte-1t3hv3r"),p(S,"class","link svelte-1t3hv3r"),p(S,"href","mailto:florian@pfleiderer.at"),p(H,"class","row svelte-1t3hv3r"),p(e,"class","layout-md mt-20 text-lg flex flex-col")},m(V,L){w(V,e,L),c(e,a),c(a,n),c(n,l),c(a,s),c(a,t),c(a,r),c(a,i),c(i,A),c(e,_),c(e,g),c(g,E),c(E,h),c(g,o),c(g,d),c(g,R),c(g,P),c(P,N),c(e,z),c(e,H),c(H,j),c(j,B),c(H,J),c(H,q),c(H,K),c(H,S),c(S,Q)},p:U,i:U,o:U,d(V){V&&u(e)}}}class Me extends W{constructor(e){super(),X(this,e,null,De,O,{})}}function Re(f){let e,a,n,l,s;return{c(){e=m("script"),n=b(),l=m("script"),s=$(`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-156644599-1");`),this.h()},l(t){e=v(t,"SCRIPT",{src:!0});var r=k(e);r.forEach(u),n=y(t),l=v(t,"SCRIPT",{});var i=k(l);s=I(i,`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-156644599-1");`),i.forEach(u),this.h()},h(){e.async=!0,Ee(e.src,a="https://www.googletagmanager.com/gtag/js?id=UA-156644599-1")||p(e,"src",a)},m(t,r){w(t,e,r),w(t,n,r),w(t,l,r),c(l,s)},d(t){t&&u(e),t&&u(n),t&&u(l)}}}function je(f){let e=f[0].pathname,a,n,l=de(f);return{c(){l.c(),a=G()},l(s){l.l(s),a=G()},m(s,t){l.m(s,t),w(s,a,t),n=!0},p(s,t){t&1&&O(e,e=s[0].pathname)?(we(),M(l,1,1,U),Ae(),l=de(s),l.c(),D(l,1),l.m(a.parentNode,a)):l.p(s,t)},i(s){n||(D(l),n=!0)},o(s){M(l),n=!1},d(s){s&&u(a),l.d(s)}}}function Fe(f){let e,a;const n=f[4].default,l=_e(n,f,f[3],null);return{c(){e=m("main"),l&&l.c()},l(s){e=v(s,"MAIN",{});var t=k(e);l&&l.l(t),t.forEach(u)},m(s,t){w(s,e,t),l&&l.m(e,null),a=!0},p(s,t){l&&l.p&&(!a||t&8)&&he(l,n,s,s[3],a?me(n,s[3],t,null):pe(s[3]),null)},i(s){a||(D(l,s),a=!0)},o(s){M(l,s),a=!1},d(s){s&&u(e),l&&l.d(s)}}}function de(f){let e,a,n,l;const s=f[4].default,t=_e(s,f,f[3],null);return{c(){e=m("main"),t&&t.c()},l(r){e=v(r,"MAIN",{});var i=k(e);t&&t.l(i),i.forEach(u)},m(r,i){w(r,e,i),t&&t.m(e,null),l=!0},p(r,i){t&&t.p&&(!l||i&8)&&he(t,s,r,r[3],l?me(s,r[3],i,null):pe(r[3]),null)},i(r){l||(D(t,r),$e(()=>{l&&(n&&n.end(1),a=Ie(e,ie,{x:-10,duration:350,delay:350}),a.start())}),l=!0)},o(r){M(t,r),a&&a.invalidate(),n=Pe(e,ie,{y:5,duration:350}),l=!1},d(r){r&&u(e),t&&t.d(r),r&&n&&n.end()}}}function Ce(f){let e,a,n,l,s,t,r,i,A,_=Re();n=new Se({});const g=[Fe,je],E=[];function h(o,d){return o[1]||o[2]?0:1}return s=h(f),t=E[s]=g[s](f),i=new Me({}),{c(){_&&_.c(),e=G(),a=b(),se(n.$$.fragment),l=b(),t.c(),r=b(),se(i.$$.fragment)},l(o){const d=ye("svelte-1xw0bo2",document.head);_&&_.l(d),e=G(),d.forEach(u),a=y(o),re(n.$$.fragment,o),l=y(o),t.l(o),r=y(o),re(i.$$.fragment,o)},m(o,d){_&&_.m(document.head,null),c(document.head,e),w(o,a,d),ne(n,o,d),w(o,l,d),E[s].m(o,d),w(o,r,d),ne(i,o,d),A=!0},p(o,[d]){t.p(o,d)},i(o){A||(D(n.$$.fragment,o),D(t),D(i.$$.fragment,o),A=!0)},o(o){M(n.$$.fragment,o),M(t),M(i.$$.fragment,o),A=!1},d(o){_&&_.d(o),u(e),o&&u(a),oe(n,o),o&&u(l),E[s].d(o),o&&u(r),oe(i,o)}}}function Te(f,e,a){let{$$slots:n={},$$scope:l}=e,{data:s}=e;const t=/Android|iPhone/i.test(navigator.userAgent),r=matchMedia("(prefers-reduced-motion: reduce)").matches;return f.$$set=i=>{"data"in i&&a(0,s=i.data),"$$scope"in i&&a(3,l=i.$$scope)},[s,t,r,l,n]}class Ge extends W{constructor(e){super(),X(this,e,Te,Ce,O,{data:0})}}export{Ge as default};