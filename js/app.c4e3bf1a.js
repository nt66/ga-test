(function(){"use strict";var e={1202:function(e,t,n){var r=n(8081),o=n(1882);function u(e,t,n,r,u,a){const i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(i)}var a={name:"App"},i=n(1220);const c=(0,i.A)(a,[["render",u]]);var s=c,f=n(9418);const l=e=>((0,o.Qi)("data-v-f2ba14f8"),e=e(),(0,o.jt)(),e),d=l((()=>(0,o.Lk)("div",{class:"home"},[(0,o.Lk)("h1",null,"This is Home page!")],-1))),p={class:"links"};function v(e,t,n,r,u,a){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[d,(0,o.Lk)("div",p,[(0,o.bF)(i,{to:u.home,class:"link"},{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1},8,["to"]),(0,o.bF)(i,{to:u.user,class:"link"},{default:(0,o.k6)((()=>[(0,o.eW)("User")])),_:1},8,["to"]),(0,o.bF)(i,{to:u.about,class:"link"},{default:(0,o.k6)((()=>[(0,o.eW)("About")])),_:1},8,["to"])])],64)}var h={name:"MyHome",data(){return{home:"/",user:"/user",about:"/about"}}};const m=(0,i.A)(h,[["render",v],["__scopeId","data-v-f2ba14f8"]]);var b=m;const g=e=>((0,o.Qi)("data-v-c0a9ad0a"),e=e(),(0,o.jt)(),e),y={class:"about"},k=g((()=>(0,o.Lk)("h1",null,"This is about page!",-1))),A=[k];function w(e,t,n,r,u,a){return(0,o.uX)(),(0,o.CE)("div",y,A)}var C={name:"MyAbout",props:{msg:String}};const E=(0,i.A)(C,[["render",w],["__scopeId","data-v-c0a9ad0a"]]);var _=E;const O=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:_},{path:"/user",name:"User",component:()=>n.e(464).then(n.bind(n,2464))}],j=(0,f.aE)({history:(0,f.LA)("/ga-test/"),routes:O});var L=j;const S=(0,r.Ef)(s);S.use(L),S.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,u){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],u=e[f][2];for(var i=!0,c=0;c<r.length;c++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,u<a&&(a=u));if(i){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[r,o,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".ed182e9f.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".39e65c1c.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ga-test:";n.l=function(r,o,u,a){if(e[r])e[r].push(o);else{var i,c;if(void 0!==u)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+u){i=l;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+u),i.src=r),e[r]=[o];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/ga-test/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,u){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&n.type,i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+i+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=i,a.parentNode&&a.parentNode.removeChild(a),u(c)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],u=o.getAttribute("data-href");if(u===e||u===t)return o}},r=function(r){return new Promise((function(o,u){var a=n.miniCssF(r),i=n.p+a;if(t(a,i))return o();e(r,i,null,o,u)}))},o={524:0};n.f.miniCss=function(e,t){var n={464:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=u);var a=n.p+n.u(t),i=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,o[1](i)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,a=r[0],i=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var f=c(n)}for(t&&t(r);s<a.length;s++)u=a[s],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(f)},r=self["webpackChunkga_test"]=self["webpackChunkga_test"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1202)}));r=n.O(r)})();
//# sourceMappingURL=app.c4e3bf1a.js.map