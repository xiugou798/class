import{s as e,u as t,j as n,a0 as r,n as o,z as a,I as s,ag as c,y as i,e as l,f as u,D as f,a6 as p,b3 as h}from"./@vue.40d2997d.js";
/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const d="undefined"!=typeof window;const m=Object.assign;function g(e,t){const n={};for(const r in t){const o=t[r];n[r]=y(o)?o.map(e):e(o)}return n}const v=()=>{},y=Array.isArray,b=/\/$/;function w(e,t,n="/"){let r,o={},a="",s="";const c=t.indexOf("#");let i=t.indexOf("?");return c<i&&c>=0&&(i=-1),i>-1&&(r=t.slice(0,i),a=t.slice(i+1,c>-1?c:t.length),o=e(a)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,s=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],"."!==a){if(".."!==a)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:s}}function E(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function R(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function O(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return y(e)?P(e,t):y(t)?P(t,e):e===t}function P(e,t){return y(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var x,C,$,S;function j(e){if(!e)if(d){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(b,"")}(C=x||(x={})).pop="pop",C.push="push",(S=$||($={})).back="back",S.forward="forward",S.unknown="";const A=/^[^#]+#/;function q(e,t){return e.replace(A,"#")+t}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function M(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function B(e,t){return(history.state?history.state.position-t:-1)+e}const G=new Map;function _(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),E(n,"")}return E(n,e)+r+o}function I(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?L():null}}function D(e){const{history:t,location:n}=window,r={value:_(e,n)},o={value:t.state};function a(r,a,s){const c=e.indexOf("#"),i=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+r:location.protocol+"//"+location.host+e+r;try{t[s?"replaceState":"pushState"](a,"",i),o.value=a}catch(l){n[s?"replace":"assign"](i)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const s=m({},o.value,t.state,{forward:e,scroll:L()});a(s.current,s,!0),a(e,m({},I(r.value,e,null),{position:s.position+1},n),!1),r.value=e},replace:function(e,n){a(e,m({},t.state,I(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}function U(e){const t=D(e=j(e)),n=function(e,t,n,r){let o=[],a=[],s=null;const c=({state:a})=>{const c=_(e,location),i=n.value,l=t.value;let u=0;if(a){if(n.value=c,t.value=a,s&&s===i)return void(s=null);u=l?a.position-l.position:0}else r(c);o.forEach((e=>{e(n.value,i,{delta:u,type:x.pop,direction:u?u>0?$.forward:$.back:$.unknown})}))};function i(){const{history:e}=window;e.state&&e.replaceState(m({},e.state,{scroll:L()}),"")}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",i),{pauseListeners:function(){s=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",i)}}}(e,t.state,t.location,t.replace);const r=m({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:q.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function F(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),U(e)}function T(e){return"string"==typeof e||"symbol"==typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var V,K;function H(e,t){return m(new Error,{type:e,[z]:!0},t)}function Q(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}(K=V||(V={}))[K.aborted=4]="aborted",K[K.cancelled=8]="cancelled",K[K.duplicated=16]="duplicated";const X="[^/]+?",Y={sensitive:!1,strict:!1,start:!0,end:!0},N=/[.+*?^${}()[\]/\\]/g;function Z(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function J(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=Z(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(ee(r))return 1;if(ee(o))return-1}return o.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e,t,n){const r=function(e,t){const n=m({},Y,t),r=[];let o=n.start?"^":"";const a=[];for(const i of e){const e=i.length?[]:[90];n.strict&&!i.length&&(o+="/");for(let t=0;t<i.length;t++){const r=i[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(N,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;a.push({name:e,repeatable:n,optional:l});const f=u||X;if(f!==X){s+=10;try{new RegExp(`(${f})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+c.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=l&&i.length<2?`(?:/${p})`:"/"+p),l&&(p+="?"),o+=p,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===f&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");return{re:s,score:r,keys:a,parse:function(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:s,optional:c}=e,i=a in t?t[a]:"";if(y(i)&&!s)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=y(i)?i.join("/"):i;if(!l){if(!c)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let c,i=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;i<e.length;)if(c=e[i++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(l&&f(),s()):":"===c?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===c?n=2:ne.test(c)?p():(f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&i--);break;case 2:")"===c?"\\"==u[u.length-1]?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&i--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),s(),o}(e.path),n),o=m(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function oe(e,t){const n=[],r=new Map;function o(e,n,r){const c=!r,i=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);i.aliasOf=r&&r.record;const l=ie(t,e),u=[i];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(m({},i,{components:r?r.record.components:i.components,path:e,aliasOf:r?r.record:i}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=re(t,n,l),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),c&&e.name&&!se(f)&&a(e.name)),i.children){const e=i.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,s(f)}return p?()=>{a(p)}:v}function a(e){if(T(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(e){let t=0;for(;t<n.length&&J(e,n[t])>=0&&(e.record.path!==n[t].record.path||!le(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!se(e)&&r.set(e.record.name,e)}return t=ie({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw H(1,{location:e});s=o.record.name,c=m(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),a=o.stringify(c)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(c=o.parse(a),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw H(1,{location:e,currentLocation:t});s=o.record.name,c=m({},t.params,e.params),a=o.stringify(c)}const i=[];let l=o;for(;l;)i.unshift(l.record),l=l.parent;return{name:s,path:a,params:c,matched:i,meta:ce(i)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function se(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ce(e){return e.reduce(((e,t)=>m(e,t.meta)),{})}function ie(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function le(e,t){return t.children.some((t=>t===e||le(e,t)))}const ue=/#/g,fe=/&/g,pe=/\//g,he=/=/g,de=/\?/g,me=/\+/g,ge=/%5B/g,ve=/%5D/g,ye=/%5E/g,be=/%60/g,we=/%7B/g,Ee=/%7C/g,Re=/%7D/g,Oe=/%20/g;function ke(e){return encodeURI(""+e).replace(Ee,"|").replace(ge,"[").replace(ve,"]")}function Pe(e){return ke(e).replace(me,"%2B").replace(Oe,"+").replace(ue,"%23").replace(fe,"%26").replace(be,"`").replace(we,"{").replace(Re,"}").replace(ye,"^")}function xe(e){return null==e?"":function(e){return ke(e).replace(ue,"%23").replace(de,"%3F")}(e).replace(pe,"%2F")}function Ce(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function $e(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(me," "),o=e.indexOf("="),a=Ce(o<0?e:e.slice(0,o)),s=o<0?null:Ce(e.slice(o+1));if(a in t){let e=t[a];y(e)||(e=t[a]=[e]),e.push(s)}else t[a]=s}return t}function Se(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n).replace(he,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(y(r)?r.map((e=>e&&Pe(e))):[r&&Pe(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=y(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Ae=Symbol(""),qe=Symbol(""),Le=Symbol(""),Me=Symbol(""),Be=Symbol("");function Ge(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function _e(e){const t=a(Ae,{}).value;t&&function(e,t,n){const r=()=>{e[t].delete(n)};f(r),p(r),h((()=>{e[t].add(n)})),e[t].add(n)}(t,"updateGuards",e)}function Ie(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,c)=>{const i=e=>{var i;!1===e?c(H(4,{from:n,to:t})):e instanceof Error?c(e):"string"==typeof(i=e)||i&&"object"==typeof i?c(H(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),s())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>c(e)))}))}function De(e,t,n,r){const o=[];for(const s of e)for(const e in s.components){let c=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(a=c)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(c.__vccOpts||c)[t];a&&o.push(Ie(a,n,r,s,e))}else{let a=c();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=(c=o).__esModule||"Module"===c[Symbol.toStringTag]?o.default:o;var c;s.components[e]=a;const i=(a.__vccOpts||a)[t];return i&&Ie(i,n,r,s,e)()}))))}}var a;return o}function Ue(e){const r=a(Le),o=a(Me),s=n((()=>r.resolve(t(e.to)))),c=n((()=>{const{matched:e}=s.value,{length:t}=e,n=e[t-1],r=o.matched;if(!n||!r.length)return-1;const a=r.findIndex(R.bind(null,n));if(a>-1)return a;const c=Te(e[t-2]);return t>1&&Te(n)===c&&r[r.length-1].path!==c?r.findIndex(R.bind(null,e[t-2])):a})),i=n((()=>c.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!y(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(o.params,s.value.params))),l=n((()=>c.value>-1&&c.value===o.matched.length-1&&O(o.params,s.value.params)));return{route:s,href:n((()=>s.value.href)),isActive:i,isExactActive:l,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?r[t(e.replace)?"replace":"push"](t(e.to)).catch(v):Promise.resolve()}}}const Fe=s({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ue,setup(e,{slots:t}){const o=r(Ue(e)),{options:s}=a(Le),i=n((()=>({[We(e.activeClass,s.linkActiveClass,"router-link-active")]:o.isActive,[We(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive})));return()=>{const n=t.default&&t.default(o);return e.custom?n:c("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:i.value},n)}}});function Te(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const We=(e,t,n)=>null!=e?e:null!=t?t:n;function ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ve=s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:r,slots:o}){const s=a(Be),f=n((()=>e.route||s.value)),p=a(qe,0),h=n((()=>{let e=t(p);const{matched:n}=f.value;let r;for(;(r=n[e])&&!r.components;)e++;return e})),d=n((()=>f.value.matched[h.value]));i(qe,n((()=>h.value+1))),i(Ae,d),i(Be,f);const g=l();return u((()=>[g.value,d.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&R(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const t=f.value,n=e.name,a=d.value,s=a&&a.components[n];if(!s)return ze(o.default,{Component:s,route:t});const i=a.props[n],l=i?!0===i?t.params:"function"==typeof i?i(t):i:null,u=c(s,m({},l,r,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[n]=null)},ref:g}));return ze(o.default,{Component:u,route:t})||u}}});function Ke(a){const s=oe(a.routes,a),c=a.parseQuery||$e,i=a.stringifyQuery||Se,l=a.history,u=Ge(),f=Ge(),p=Ge(),h=e(W);let b=W;d&&a.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=g.bind(null,(e=>""+e)),k=g.bind(null,xe),P=g.bind(null,Ce);function C(e,t){if(t=m({},t||h.value),"string"==typeof e){const n=w(c,e,t.path),r=s.resolve({path:n.path},t),o=l.createHref(n.fullPath);return m(n,r,{params:P(r.params),hash:Ce(n.hash),redirectedFrom:void 0,href:o})}let n;if("path"in e)n=m({},e,{path:w(c,e.path,t.path).path});else{const r=m({},e.params);for(const e in r)null==r[e]&&delete r[e];n=m({},e,{params:k(e.params)}),t.params=k(t.params)}const r=s.resolve(n,t),o=e.hash||"";r.params=E(P(r.params));const a=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,m({},e,{hash:(u=o,ke(u).replace(we,"{").replace(Re,"}").replace(ye,"^")),path:r.path}));var u;const f=l.createHref(a);return m({fullPath:a,hash:o,query:i===Se?je(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function $(e){return"string"==typeof e?w(c,e,h.value.path):m({},e)}function S(e,t){if(b!==e)return H(8,{from:t,to:e})}function j(e){return q(e)}function A(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=$(r):{path:r},r.params={}),m({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function q(e,t){const n=b=C(e),r=h.value,o=e.state,a=e.force,s=!0===e.replace,c=A(n);if(c)return q(m($(c),{state:o,force:a,replace:s}),t||n);const l=n;let u;return l.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&R(t.matched[r],n.matched[o])&&O(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,r,n)&&(u=H(16,{to:l,from:r}),Z(r,r,!0,!1)),(u?Promise.resolve(u):I(l,r)).catch((e=>Q(e)?Q(e,2)?e:N(e):Y(e,l,r))).then((e=>{if(e){if(Q(e,2))return q(m({replace:s},$(e.to),{state:o,force:a}),t||l)}else e=U(l,r,!0,s,o);return D(l,r,e),e}))}function _(e,t){const n=S(e,t);return n?Promise.reject(n):Promise.resolve()}function I(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s];a&&(e.matched.find((e=>R(e,a)))?r.push(a):n.push(a));const c=e.matched[s];c&&(t.matched.find((e=>R(e,c)))||o.push(c))}return[n,r,o]}(e,t);n=De(r.reverse(),"beforeRouteLeave",e,t);for(const c of r)c.leaveGuards.forEach((r=>{n.push(Ie(r,e,t))}));const s=_.bind(null,e,t);return n.push(s),He(n).then((()=>{n=[];for(const r of u.list())n.push(Ie(r,e,t));return n.push(s),He(n)})).then((()=>{n=De(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Ie(r,e,t))}));return n.push(s),He(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(y(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ie(o,e,t));else n.push(Ie(r.beforeEnter,e,t));return n.push(s),He(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=De(a,"beforeRouteEnter",e,t),n.push(s),He(n)))).then((()=>{n=[];for(const r of f.list())n.push(Ie(r,e,t));return n.push(s),He(n)})).catch((e=>Q(e,8)?e:Promise.reject(e)))}function D(e,t,n){for(const r of p.list())r(e,t,n)}function U(e,t,n,r,o){const a=S(e,t);if(a)return a;const s=t===W,c=d?history.state:{};n&&(r||s?l.replace(e.fullPath,m({scroll:s&&c&&c.scroll},o)):l.push(e.fullPath,o)),h.value=e,Z(e,t,n,s),N()}let F;function z(){F||(F=l.listen(((e,t,n)=>{if(!ne.listening)return;const r=C(e),o=A(r);if(o)return void q(m(o,{replace:!0}),r).catch(v);b=r;const a=h.value;var s,c;d&&(s=B(a.fullPath,n.delta),c=L(),G.set(s,c)),I(r,a).catch((e=>Q(e,12)?e:Q(e,2)?(q(e.to,r).then((e=>{Q(e,20)&&!n.delta&&n.type===x.pop&&l.go(-1,!1)})).catch(v),Promise.reject()):(n.delta&&l.go(-n.delta,!1),Y(e,r,a)))).then((e=>{(e=e||U(r,a,!1))&&(n.delta&&!Q(e,8)?l.go(-n.delta,!1):n.type===x.pop&&Q(e,20)&&l.go(-1,!1)),D(r,a,e)})).catch(v)})))}let V,K=Ge(),X=Ge();function Y(e,t,n){N(e);const r=X.list();return r.length&&r.forEach((r=>r(e,t,n))),Promise.reject(e)}function N(e){return V||(V=!e,z(),K.list().forEach((([t,n])=>e?n(e):t())),K.reset()),e}function Z(e,t,n,r){const{scrollBehavior:s}=a;if(!d||!s)return Promise.resolve();const c=!n&&function(e){const t=G.get(e);return G.delete(e),t}(B(e.fullPath,0))||(r||!n)&&history.state&&history.state.scroll||null;return o().then((()=>s(e,t,c))).then((e=>e&&M(e))).catch((n=>Y(n,e,t)))}const J=e=>l.go(e);let ee;const te=new Set,ne={currentRoute:h,listening:!0,addRoute:function(e,t){let n,r;return T(e)?(n=s.getRecordMatcher(e),r=t):r=e,s.addRoute(r,n)},removeRoute:function(e){const t=s.getRecordMatcher(e);t&&s.removeRoute(t)},hasRoute:function(e){return!!s.getRecordMatcher(e)},getRoutes:function(){return s.getRoutes().map((e=>e.record))},resolve:C,options:a,push:j,replace:function(e){return j(m($(e),{replace:!0}))},go:J,back:()=>J(-1),forward:()=>J(1),beforeEach:u.add,beforeResolve:f.add,afterEach:p.add,onError:X.add,isReady:function(){return V&&h.value!==W?Promise.resolve():new Promise(((e,t)=>{K.add([e,t])}))},install(e){e.component("RouterLink",Fe),e.component("RouterView",Ve),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t(h)}),d&&!ee&&h.value===W&&(ee=!0,j(l.location).catch((e=>{})));const o={};for(const t in W)o[t]=n((()=>h.value[t]));e.provide(Le,this),e.provide(Me,r(o)),e.provide(Be,h);const a=e.unmount;te.add(e),e.unmount=function(){te.delete(e),te.size<1&&(b=W,F&&F(),F=null,h.value=W,ee=!1,V=!1),a()}}};return ne}function He(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function Qe(){return a(Le)}function Xe(){return a(Me)}export{Xe as a,F as b,Ke as c,_e as o,Qe as u};