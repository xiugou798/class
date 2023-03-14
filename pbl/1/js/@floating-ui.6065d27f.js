function t(t){return t.split("-")[0]}function e(t){return t.split("-")[1]}function n(e){return["top","bottom"].includes(t(e))?"x":"y"}function o(t){return"y"===t?"height":"width"}function i(i,r,l){let{reference:c,floating:s}=i;const f=c.x+c.width/2-s.width/2,a=c.y+c.height/2-s.height/2,u=n(r),d=o(u),h=c[d]/2-s[d]/2,g="x"===u;let m;switch(t(r)){case"top":m={x:f,y:c.y-s.height};break;case"bottom":m={x:f,y:c.y+c.height};break;case"right":m={x:c.x+c.width,y:a};break;case"left":m={x:c.x-s.width,y:a};break;default:m={x:c.x,y:c.y}}switch(e(r)){case"start":m[u]-=h*(l&&g?-1:1);break;case"end":m[u]+=h*(l&&g?-1:1)}return m}function r(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}const l=Math.min,c=Math.max;const s=t=>({name:"arrow",options:t,async fn(i){const{element:r,padding:s=0}=null!=t?t:{},{x:f,y:a,placement:u,rects:d,platform:h}=i;if(null==r)return{};const g=function(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}(s),m={x:f,y:a},p=n(u),y=e(u),w=o(p),x=await h.getDimensions(r),b="y"===p?"top":"left",v="y"===p?"bottom":"right",L=d.reference[w]+d.reference[p]-m[p]-d.floating[w],R=m[p]-d.reference[p],T=await(null==h.getOffsetParent?void 0:h.getOffsetParent(r));let W=T?"y"===p?T.clientHeight||0:T.clientWidth||0:0;0===W&&(W=d.floating[w]);const A=L/2-R/2,H=g[b],C=W-x[w]-g[v],D=W/2-x[w]/2+A,E=c(H,l(D,C));const S=("start"===y?g[b]:g[v])>0&&D!==E&&d.reference[w]<=d.floating[w];return{[p]:m[p]-(S?D<H?H-D:C-D:0),data:{[p]:E,centerOffset:D-E}}}});const f=function(o){return void 0===o&&(o=0),{name:"offset",options:o,async fn(i){const{x:r,y:l}=i,c=await async function(o,i){const{placement:r,platform:l,elements:c}=o,s=await(null==l.isRTL?void 0:l.isRTL(c.floating)),f=t(r),a=e(r),u="x"===n(r),d=["left","top"].includes(f)?-1:1,h=s&&u?-1:1,g="function"==typeof i?i(o):i;let{mainAxis:m,crossAxis:p,alignmentAxis:y}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return a&&"number"==typeof y&&(p="end"===a?-1*y:y),u?{x:p*h,y:m*d}:{x:m*d,y:p*h}}(i,o);return{x:r+c.x,y:l+c.y,data:c}}}};function a(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function u(t){if(null==t)return window;if(!a(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function d(t){return u(t).getComputedStyle(t)}function h(t){return a(t)?"":t?(t.nodeName||"").toLowerCase():""}function g(){const t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function m(t){return t instanceof u(t).HTMLElement}function p(t){return t instanceof u(t).Element}function y(t){if("undefined"==typeof ShadowRoot)return!1;return t instanceof u(t).ShadowRoot||t instanceof ShadowRoot}function w(t){const{overflow:e,overflowX:n,overflowY:o}=d(t);return/auto|scroll|overlay|hidden/.test(e+o+n)}function x(t){return["table","td","th"].includes(h(t))}function b(t){const e=/firefox/i.test(g()),n=d(t);return"none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||["transform","perspective"].includes(n.willChange)||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter}function v(){return!/^((?!chrome|android).)*safari/i.test(g())}const L=Math.min,R=Math.max,T=Math.round;function W(t,e,n){var o,i,r,l;void 0===e&&(e=!1),void 0===n&&(n=!1);const c=t.getBoundingClientRect();let s=1,f=1;e&&m(t)&&(s=t.offsetWidth>0&&T(c.width)/t.offsetWidth||1,f=t.offsetHeight>0&&T(c.height)/t.offsetHeight||1);const a=p(t)?u(t):window,d=!v()&&n,h=(c.left+(d&&null!=(o=null==(i=a.visualViewport)?void 0:i.offsetLeft)?o:0))/s,g=(c.top+(d&&null!=(r=null==(l=a.visualViewport)?void 0:l.offsetTop)?r:0))/f,y=c.width/s,w=c.height/f;return{width:y,height:w,top:g,right:h+y,bottom:g+w,left:h,x:h,y:g}}function A(t){return(e=t,(e instanceof u(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function H(t){return p(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function C(t){return W(A(t)).left+H(t).scrollLeft}function D(t,e,n){const o=m(e),i=A(e),r=W(t,o&&function(t){const e=W(t);return T(e.width)!==t.offsetWidth||T(e.height)!==t.offsetHeight}(e),"fixed"===n);let l={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==h(e)||w(i))&&(l=H(e)),m(e)){const t=W(e,!0);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=C(i));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function E(t){return"html"===h(t)?t:t.assignedSlot||t.parentNode||(y(t)?t.host:null)||A(t)}function S(t){return m(t)&&"fixed"!==getComputedStyle(t).position?t.offsetParent:null}function N(t){const e=u(t);let n=S(t);for(;n&&x(n)&&"static"===getComputedStyle(n).position;)n=S(n);return n&&("html"===h(n)||"body"===h(n)&&"static"===getComputedStyle(n).position&&!b(n))?e:n||function(t){let e=E(t);for(y(e)&&(e=e.host);m(e)&&!["html","body"].includes(h(e));){if(b(e))return e;e=e.parentNode}return null}(t)||e}function O(t){if(m(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=W(t);return{width:e.width,height:e.height}}function P(t){const e=E(t);return["html","body","#document"].includes(h(e))?t.ownerDocument.body:m(e)&&w(e)?e:P(e)}function M(t,e){var n;void 0===e&&(e=[]);const o=P(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=u(o),l=i?[r].concat(r.visualViewport||[],w(o)?o:[]):o,c=e.concat(l);return i?c:c.concat(M(l))}function V(t,e,n){return"viewport"===e?r(function(t,e){const n=u(t),o=A(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){r=i.width,l=i.height;const t=v();(t||!t&&"fixed"===e)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:c,y:s}}(t,n)):p(e)?function(t,e){const n=W(t,!1,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft;return{top:o,left:i,x:i,y:o,right:i+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):r(function(t){var e;const n=A(t),o=H(t),i=null==(e=t.ownerDocument)?void 0:e.body,r=R(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=R(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let c=-o.scrollLeft+C(t);const s=-o.scrollTop;return"rtl"===d(i||n).direction&&(c+=R(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:l,x:c,y:s}}(A(t)))}function k(t){const e=M(t),n=["absolute","fixed"].includes(d(t).position)&&m(t)?N(t):t;return p(n)?e.filter((t=>p(t)&&function(t,e){const n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&y(n)){let n=e;do{if(n&&t===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(t,n)&&"body"!==h(t))):[]}const j={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?k(e):[].concat(n),o],l=r[0],c=r.reduce(((t,n)=>{const o=V(e,n,i);return t.top=R(o.top,t.top),t.right=L(o.right,t.right),t.bottom=L(o.bottom,t.bottom),t.left=R(o.left,t.left),t}),V(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=m(n),r=A(n);if(n===r)return e;let l={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==h(n)||w(r))&&(l=H(n)),m(n))){const t=W(n,!0);c.x=t.x+n.clientLeft,c.y=t.y+n.clientTop}return{...e,x:e.x-l.scrollLeft+c.x,y:e.y-l.scrollTop+c.y}},isElement:p,getDimensions:O,getOffsetParent:N,getDocumentElement:A,getElementRects:t=>{let{reference:e,floating:n,strategy:o}=t;return{reference:D(e,N(n),o),floating:{...O(n),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===d(t).direction},B=(t,e,n)=>(async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:l=[],platform:c}=n,s=await(null==c.isRTL?void 0:c.isRTL(e));let f=await c.getElementRects({reference:t,floating:e,strategy:r}),{x:a,y:u}=i(f,o,s),d=o,h={},g=0;for(let m=0;m<l.length;m++){const{name:n,fn:p}=l[m],{x:y,y:w,data:x,reset:b}=await p({x:a,y:u,initialPlacement:o,placement:d,strategy:r,middlewareData:h,rects:f,platform:c,elements:{reference:t,floating:e}});a=null!=y?y:a,u=null!=w?w:u,h={...h,[n]:{...h[n],...x}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(d=b.placement),b.rects&&(f=!0===b.rects?await c.getElementRects({reference:t,floating:e,strategy:r}):b.rects),({x:a,y:u}=i(f,d,s))),m=-1)}return{x:a,y:u,placement:d,strategy:r,middlewareData:h}})(t,e,{platform:j,...n});export{s as a,B as c,f as o};