import{S as N,i as U,s as G,k as _,l as v,m as $,h,n as m,b as B,g as A,v as J,f as K,d as w,W as Q,q as V,a as k,y as R,r as W,c as x,z as Y,C as f,A as j,u as O,B as q,F as X}from"../chunks/index.07d369e4.js";import{S as Z}from"../chunks/Seo.4dfef72d.js";import{A as ee}from"../chunks/arrow-up-right.489e7456.js";import{f as M}from"../chunks/utils.7d7f714d.js";function H(o,t,l){const s=o.slice();return s[1]=t[l],s}function L(o){let t,l,s,e=o[1].title+"",p,r,n,a,i,c=M("%B %-d, %Y",o[1].date)+"",b,P,y,I=o[1].summary+"",E,T,S,g;return n=new ee({props:{size:18,class:"inline text-neutral-400"}}),{c(){t=_("a"),l=_("div"),s=_("div"),p=V(e),r=k(),R(n.$$.fragment),a=k(),i=_("div"),b=V(c),P=k(),y=_("div"),E=V(I),T=k(),this.h()},l(d){t=v(d,"A",{href:!0,class:!0,target:!0,rel:!0});var u=$(t);l=v(u,"DIV",{class:!0});var D=$(l);s=v(D,"DIV",{class:!0});var C=$(s);p=W(C,e),r=x(C),Y(n.$$.fragment,C),C.forEach(h),a=x(D),i=v(D,"DIV",{class:!0});var z=$(i);b=W(z,c),z.forEach(h),D.forEach(h),P=x(u),y=v(u,"DIV",{class:!0});var F=$(y);E=W(F,I),F.forEach(h),T=x(u),u.forEach(h),this.h()},h(){m(s,"class","text-lg text-black"),m(i,"class","sm:ml-auto mb-0.5 text-neutral-500"),m(l,"class","flex flex-col sm:flex-row sm:items-end mb-1.5"),m(y,"class","text-lg leading-snug font-serif italic"),m(t,"href",S=o[1].link),m(t,"class","block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"),m(t,"target","_blank"),m(t,"rel","noreferrer")},m(d,u){B(d,t,u),f(t,l),f(l,s),f(s,p),f(s,r),j(n,s,null),f(l,a),f(l,i),f(i,b),f(t,P),f(t,y),f(y,E),f(t,T),g=!0},p(d,u){(!g||u&1)&&e!==(e=d[1].title+"")&&O(p,e),(!g||u&1)&&c!==(c=M("%B %-d, %Y",d[1].date)+"")&&O(b,c),(!g||u&1)&&I!==(I=d[1].summary+"")&&O(E,I),(!g||u&1&&S!==(S=d[1].link))&&m(t,"href",S)},i(d){g||(A(n.$$.fragment,d),g=!0)},o(d){w(n.$$.fragment,d),g=!1},d(d){d&&h(t),q(n)}}}function te(o){let t,l,s=o[0],e=[];for(let r=0;r<s.length;r+=1)e[r]=L(H(o,s,r));const p=r=>w(e[r],1,1,()=>{e[r]=null});return{c(){t=_("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=v(r,"DIV",{class:!0});var n=$(t);for(let a=0;a<e.length;a+=1)e[a].l(n);n.forEach(h),this.h()},h(){m(t,"class","grid gap-y-4")},m(r,n){B(r,t,n);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(t,null);l=!0},p(r,[n]){if(n&1){s=r[0];let a;for(a=0;a<s.length;a+=1){const i=H(r,s,a);e[a]?(e[a].p(i,n),A(e[a],1)):(e[a]=L(i),e[a].c(),A(e[a],1),e[a].m(t,null))}for(J(),a=s.length;a<e.length;a+=1)p(a);K()}},i(r){if(!l){for(let n=0;n<s.length;n+=1)A(e[n]);l=!0}},o(r){e=e.filter(Boolean);for(let n=0;n<e.length;n+=1)w(e[n]);l=!1},d(r){r&&h(t),Q(e,r)}}}function ae(o,t,l){let{data:s}=t;return o.$$set=e=>{"data"in e&&l(0,s=e.data)},[s]}class se extends N{constructor(t){super(),U(this,t,ae,te,G,{data:0})}}var re={papers:[{title:"Model Optimisation and Comparison for Improved Change Detection in Autonomous Systems",date:"2024-07",summary:`This thesis enhances change detection in indoor mobile robots by directly applying the CYWS-3D model to camera data, eliminating the reconstruction step. This approach addresses issues with occluded objects and search area definitions, serving as an indicator for objects missed by existing pipelines, thus improving unsupervised home assistance applications.
`,link:"/assets/pdf/BA.pdf"},{title:"Is unregulated AI research a good idea?",date:"2024-05",summary:`Evaluation on the evolution of unregulated AI research and its risks.
`,link:"/assets/pdf/AI_research.pdf"},{title:"Overview of navigation based on camera",date:"2023-04",summary:`Summary on the state of autonomous navigation based on camera.
`,link:"/assets/pdf/MV_Pfleiderer.pdf"}]};function ne(o){let t,l,s,e,p,r,n,a;return t=new Z({props:{title:"Florian Pfleiderer – Writing",description:"Past writing: academic papers, presentations, notes, tutorials, and technical blog posts."}}),n=new se({props:{data:re.papers}}),{c(){R(t.$$.fragment),l=k(),s=_("section"),e=_("h2"),p=V("Academic Writing and Reports"),r=k(),R(n.$$.fragment),this.h()},l(i){Y(t.$$.fragment,i),l=x(i),s=v(i,"SECTION",{class:!0});var c=$(s);e=v(c,"H2",{class:!0});var b=$(e);p=W(b,"Academic Writing and Reports"),b.forEach(h),r=x(c),Y(n.$$.fragment,c),c.forEach(h),this.h()},h(){m(e,"class","heading2"),m(s,"class","layout-md py-12")},m(i,c){j(t,i,c),B(i,l,c),B(i,s,c),f(s,e),f(e,p),f(s,r),j(n,s,null),a=!0},p:X,i(i){a||(A(t.$$.fragment,i),A(n.$$.fragment,i),a=!0)},o(i){w(t.$$.fragment,i),w(n.$$.fragment,i),a=!1},d(i){q(t,i),i&&h(l),i&&h(s),q(n)}}}class de extends N{constructor(t){super(),U(this,t,null,ne,G,{})}}export{de as default};