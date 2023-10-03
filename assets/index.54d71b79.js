import{n as $,_ as k,r as O,o as S,c as w,a as y,q as C,v as N,s as L,p as D,e as j,t as M,u as J,x as b,y as E,z as F,A as P,B as A,F as B,b as T,C as V}from"./entry.d98fd7e0.js";function z(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var q=function(o){var r={};function t(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return o[n].call(e.exports,e,e.exports,t),e.l=!0,e.exports}return t.m=o,t.c=r,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e||4&e&&typeof n=="object"&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&typeof n!="string")for(var s in n)t.d(c,s,(function(f){return n[f]}).bind(null,s));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(o,r,t){t.d(r,"b",function(){return e}),t.d(r,"d",function(){return c}),t.d(r,"c",function(){return s}),t.d(r,"a",function(){return f});var n=function(l){return l!=null},e=function(l,u){try{var i=l.getItem(u);if(n(i)){var a=JSON.parse(i);if(n(a)){var g=new Date().getTime(),v=a.created,m=6e4;a.unit&&a.unit==="s"?m=1e3:a.unit&&a.unit==="m"?m=6e4:a.unit&&a.unit==="h"?m=36e5:a.unit&&a.unit==="d"&&(m=864e5);var _=parseInt(a.expiry,10)*m;if(parseInt(v,10)+_>g)return a.value;console.warn("storage is expired")}}}catch{console.warn("failed parse JSON")}return null},c=function(l,u){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:5,g=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"m";try{var v=l,m={created:new Date().getTime(),value:i,expiry:a,unit:g};return v.setItem(u,JSON.stringify(m)),m}catch{}return null},s=function(l,u){try{l.removeItem(u)}catch{}},f=function(l){try{l.clear()}catch{}}},function(o,r,t){t.r(r),t.d(r,"getData",function(){return c}),t.d(r,"setData",function(){return s}),t.d(r,"removeItem",function(){return f}),t.d(r,"clear",function(){return l});var n=t(0);function e(){return"localStorage"in window&&window.localStorage?window.localStorage:null}var c=function(u){try{var i=e();return Object(n.b)(i,u)}catch{}return null},s=function(u){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"m";try{var v=e();return Object(n.d)(v,u,i,a,g)}catch{}return null},f=function(u){try{var i=e();Object(n.c)(i,u)}catch{}},l=function(){try{var u=e();Object(n.a)(u)}catch{}}},function(o,r,t){t.r(r),(function(n){t.d(r,"getData",function(){return s}),t.d(r,"setData",function(){return f}),t.d(r,"removeItem",function(){return l}),t.d(r,"clear",function(){return u});var e=t(0);function c(){return"sessionStorage"in window&&window.sessionStorage?window.sessionStorage:null}var s=function(i){if(n.client)try{var a=c();return Object(e.b)(a,i)}catch{}return null},f=function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"m";if(n.client)try{var m=c();return Object(e.d)(m,i,a,g,v)}catch{}return null},l=function(i){try{var a=c();Object(e.c)(a,i)}catch{}},u=function(){try{var i=c();Object(e.a)(i)}catch{}}}).call(this,t(3))},function(o,r){var t,n,e=o.exports={};function c(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function f(d){if(t===setTimeout)return setTimeout(d,0);if((t===c||!t)&&setTimeout)return t=setTimeout,setTimeout(d,0);try{return t(d,0)}catch{try{return t.call(null,d,0)}catch{return t.call(this,d,0)}}}(function(){try{t=typeof setTimeout=="function"?setTimeout:c}catch{t=c}try{n=typeof clearTimeout=="function"?clearTimeout:s}catch{n=s}})();var l,u=[],i=!1,a=-1;function g(){i&&l&&(i=!1,l.length?u=l.concat(u):a=-1,u.length&&v())}function v(){if(!i){var d=f(g);i=!0;for(var h=u.length;h;){for(l=u,u=[];++a<h;)l&&l[a].run();a=-1,h=u.length}l=null,i=!1,function(p){if(n===clearTimeout)return clearTimeout(p);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(p);try{n(p)}catch{try{return n.call(null,p)}catch{return n.call(this,p)}}}(d)}}function m(d,h){this.fun=d,this.array=h}function _(){}e.nextTick=function(d){var h=new Array(arguments.length-1);if(arguments.length>1)for(var p=1;p<arguments.length;p++)h[p-1]=arguments[p];u.push(new m(d,h)),u.length!==1||i||f(v)},m.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=_,e.addListener=_,e.once=_,e.off=_,e.removeListener=_,e.removeAllListeners=_,e.emit=_,e.prependListener=_,e.prependOnceListener=_,e.listeners=function(d){return[]},e.binding=function(d){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(d){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},function(o,r,t){t.r(r);var n=t(1),e=t(2);r.default={localStorage:{getData:n.getData,setData:n.setData,removeItem:n.removeItem,clear:n.clear},sessionStorage:{getData:e.getData,setData:e.setData,removeItem:e.removeItem,clear:e.clear}}}]);const x=z(q),I=$("ticketList",{state:()=>({ticketList:[],id:0}),actions:{addTicket(o){let r=this.ticketList.length+1;const t={item:o,id:r,completed:!1};this.ticketList.push(t),x.localStorage.setData(t.id,JSON.stringify(t))},deleteTicket(o){this.ticketList=this.ticketList.filter(r=>r.id!==o),x.localStorage.removeItem(o)},toggleCompleted(o){x.localStorage.removeItem(o);const r=this.ticketList.find(t=>t.id===o);r&&(r.completed=!r.completed,x.localStorage.setData(o,JSON.stringify(r)))},initFromLS(){if(this.ticketList.length>0)return;const o=window.localStorage.length;for(let r=0;r<o;r++){let t=JSON.parse(window.localStorage.getItem(localStorage.key(r))).value;t&&this.ticketList.push(JSON.parse(t))}}}});const R=o=>(D("data-v-1f539871"),o=o(),j(),o),U={class:"form-wrapper"},G=R(()=>y("button",null,"Add",-1)),H={__name:"Form",setup(o){const r=O(""),t=I();function n(e){e.length!==0&&(t.addTicket(e),r.value="")}return(e,c)=>(S(),w("div",U,[y("form",{onSubmit:c[1]||(c[1]=L(s=>n(r.value),["prevent"]))},[C(y("input",{"onUpdate:modelValue":c[0]||(c[0]=s=>r.value=s),type:"text"},null,512),[[N,r.value]]),G],32)]))}},K=k(H,[["__scopeId","data-v-1f539871"]]);const Q={key:0},W={__name:"Item",props:{ticket:Object,require:!0},setup(o){const r=I(),{toggleCompleted:t,deleteTicket:n}=r,e=O(!1);return(c,s)=>(S(),w("div",{class:"content",onClick:s[2]||(s[2]=f=>e.value=!b(e))},[y("span",{class:J({completed:o.ticket.completed})},M(o.ticket.item),3),b(e)?(S(),w("div",Q,[y("span",{onClick:s[0]||(s[0]=L(f=>b(t)(o.ticket.id),["stop"]))},"✔"),y("span",{onClick:s[1]||(s[1]=f=>b(n)(o.ticket.id)),class:"x"},"❌")])):E("",!0)]))}},X=k(W,[["__scopeId","data-v-a201192e"]]);const Y={__name:"List",setup(o){const r=I(),{ticketList:t}=F(r),{initFromLS:n}=r;return P(()=>{n()}),(e,c)=>{const s=X;return S(!0),w(B,null,A(b(t),f=>(S(),w("div",{key:f.id,class:"item"},[T(s,{ticket:f},null,8,["ticket"])]))),128)}}},Z=k(Y,[["__scopeId","data-v-d12a81fe"]]);const tt={},et=o=>(D("data-v-6b77f99d"),o=o(),j(),o),nt={class:"todo-app"},rt=et(()=>y("h1",null,"To Do List",-1));function ot(o,r){const t=K,n=Z;return S(),w("div",nt,[rt,T(t),T(n)])}const at=k(tt,[["render",ot],["__scopeId","data-v-6b77f99d"]]);const it={};function ct(o,r){const t=at;return S(),V(t)}const dt=k(it,[["render",ct]]);export{dt as default};