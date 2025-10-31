(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405,1163],{58951:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(63366),o=n(87462),i=n(67294),a=n(27192),s=n(90948),c=n(33616),l=n(15861),u=n(28979);function d(e){return(0,u.Z)("MuiDialogContentText",e)}(0,n(76087).Z)("MuiDialogContentText",["root"]);var p=n(85893);const f=["children"],m=(0,s.ZP)(l.Z,{shouldForwardProp:e=>(0,s.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({});var g=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiDialogContentText"}),i=(0,r.Z)(n,f),s=(e=>{const{classes:t}=e,n=(0,a.Z)({root:["root"]},d,t);return(0,o.Z)({},t,n)})(i);return(0,p.jsx)(m,(0,o.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:i},n,{classes:s}))}))},78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(26116)}])},43370:function(e,t,n){"use strict";var r=n(85893),o=n(9008),i=n(47426);t.Z=function(e){var t=e.title,n=e.ogDescription,a=e.ogImageURL,s=e.ogImgAlt,c=void 0===s?"Picture":s,l=e.ogSiteName,u=void 0===l?"ACAP-".concat(i.Gt.toUpperCase()):l,d=e.ogURL,p=e.canonicalURL,f=void 0===p?"http://localhost":p;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{rel:"canonical",href:f}),(0,r.jsx)("meta",{name:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"og:site_name",content:u}),(0,r.jsx)("meta",{property:"og:image",content:a}),(0,r.jsx)("meta",{property:"og:image:width",content:"600"}),(0,r.jsx)("meta",{property:"og:image:height",content:"315"}),(0,r.jsx)("meta",{property:"og:image:alt",content:c}),(0,r.jsx)("meta",{property:"og:url",content:d}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"twitter:image",content:a}),(0,r.jsx)("title",{children:t})]})}},26116:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Ce},default:function(){return Ne}});var r=n(85893),o=n(9473),i=n(5152),a=n(67294),s=n(58951),c=n(43370),l=n(47426),u=n(34051),d=n.n(u),p=n(11146),f=n(82935),m=n(9669),g=n.n(m);let v={data:""},h=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||v,b=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,y=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,w=(e,t)=>{let n="",r="",o="";for(let i in e){let a=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+a+";":r+="f"==i[1]?w(a,i):i+"{"+w(a,"k"==i[1]?"":t)+"}":"object"==typeof a?r+=w(a,t?t.replace(/([^,])+/g,(e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=w.p?w.p(i,a):i+":"+a+";")}return n+(t&&o?t+"{"+o+"}":o)+r},k={},j=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+j(e[n]);return t}return e},E=(e,t,n,r,o)=>{let i=j(e),a=k[i]||(k[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!k[a]){let t=i!==e?e:(e=>{let t,n,r=[{}];for(;t=b.exec(e.replace(y,""));)t[4]?r.shift():t[3]?(n=t[3].replace(x," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(x," ").trim();return r[0]})(e);k[a]=w(o?{["@keyframes "+a]:t}:t,n?"":"."+a)}let s=n&&k.g?k.g:null;return n&&(k.g=k[a]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(k[a],t,r,s),a},C=(e,t,n)=>e.reduce(((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":w(e,""):!1===e?"":e}return e+r+(null==i?"":i)}),"");function N(e){let t=this||{},n=e.call?e(t.p):e;return E(n.unshift?n.raw?C(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,h(t.target),t.g,t.o,t.k)}N.bind({g:1});let P,A,_,D=N.bind({k:1});function O(e,t){let n=this||{};return function(){let r=arguments;function o(i,a){let s=Object.assign({},i),c=s.className||o.className;n.p=Object.assign({theme:A&&A()},s),n.o=/ *go\d+/.test(c),s.className=N.apply(n,r)+(c?" "+c:""),t&&(s.ref=a);let l=e;return e[0]&&(l=s.as||e,delete s.as),_&&l[0]&&_(s),P(l,s)}return t?t(o):o}}var $=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,T=(()=>{let e=0;return()=>(++e).toString()})(),R=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return S(e,{type:e.toasts.find((e=>e.id===n.id))?1:0,toast:n});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+o})))}}},Z=[],I={toasts:[],pausedAt:void 0},z=e=>{I=S(I,e),Z.forEach((e=>{e(I)}))},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=e=>(t,n)=>{let r=((e,t="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||T()}))(t,e,n);return z({type:2,toast:r}),r.id},U=(e,t)=>M("blank")(e,t);U.error=M("error"),U.success=M("success"),U.loading=M("loading"),U.custom=M("custom"),U.dismiss=e=>{z({type:3,toastId:e})},U.remove=e=>z({type:4,toastId:e}),U.promise=(e,t,n)=>{let r=U.loading(t.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then((e=>{let o=t.success?$(t.success,e):void 0;return o?U.success(o,{id:r,...n,...null==n?void 0:n.success}):U.dismiss(r),e})).catch((e=>{let o=t.error?$(t.error,e):void 0;o?U.error(o,{id:r,...n,...null==n?void 0:n.error}):U.dismiss(r)})),e};var G=(e,t)=>{z({type:1,toast:{id:e,height:t}})},L=()=>{z({type:5,time:Date.now()})},H=new Map,q=e=>{let{toasts:t,pausedAt:n}=((e={})=>{let[t,n]=(0,a.useState)(I),r=(0,a.useRef)(I);(0,a.useEffect)((()=>(r.current!==I&&n(I),Z.push(n),()=>{let e=Z.indexOf(n);e>-1&&Z.splice(e,1)})),[]);let o=t.toasts.map((t=>{var n,r,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(n=e[t.type])?void 0:n.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}}));return{...t,toasts:o}})(e);(0,a.useEffect)((()=>{if(n)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>U.dismiss(t.id)),n);t.visible&&U.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let r=(0,a.useCallback)((()=>{n&&z({type:6,time:Date.now()})}),[n]),o=(0,a.useCallback)(((e,n)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=n||{},a=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),s=a.findIndex((t=>t.id===e.id)),c=a.filter(((e,t)=>t<s&&e.visible)).length;return a.filter((e=>e.visible)).slice(...r?[c+1]:[0,c]).reduce(((e,t)=>e+(t.height||0)+o),0)}),[t]);return(0,a.useEffect)((()=>{t.forEach((e=>{if(e.dismissed)((e,t=1e3)=>{if(H.has(e))return;let n=setTimeout((()=>{H.delete(e),z({type:4,toastId:e})}),t);H.set(e,n)})(e.id,e.removeDelay);else{let t=H.get(e.id);t&&(clearTimeout(t),H.delete(e.id))}}))}),[t]),{toasts:t,handlers:{updateHeight:G,startPause:L,endPause:r,calculateOffset:o}}},W=D`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,X=D`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B=D`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,V=O("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${X} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Y=D`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,J=O("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Y} 1s linear infinite;
`,K=D`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Q=D`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ee=O("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Q} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,te=O("div")`
  position: absolute;
`,ne=O("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,re=D`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,oe=O("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${re} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ie=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return void 0!==t?"string"==typeof t?a.createElement(oe,null,t):t:"blank"===n?null:a.createElement(ne,null,a.createElement(J,{...r}),"loading"!==n&&a.createElement(te,null,"error"===n?a.createElement(V,{...r}):a.createElement(ee,{...r})))},ae=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,se=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,ce=O("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,le=O("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ue=a.memo((({toast:e,position:t,style:n,children:r})=>{let o=e.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,o]=R()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ae(n),se(n)];return{animation:t?`${D(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${D(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=a.createElement(ie,{toast:e}),s=a.createElement(le,{...e.ariaProps},$(e.message,e));return a.createElement(ce,{className:e.className,style:{...o,...n,...e.style}},"function"==typeof r?r({icon:i,message:s}):a.createElement(a.Fragment,null,i,s))}));!function(e,t,n,r){w.p=t,P=e,A=n,_=r}(a.createElement);var de=({id:e,className:t,style:n,onHeightUpdate:r,children:o})=>{let i=a.useCallback((t=>{if(t){let n=()=>{let n=t.getBoundingClientRect().height;r(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,r]);return a.createElement("div",{ref:i,className:t,style:n},o)},pe=N`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,fe=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:o,containerStyle:i,containerClassName:s})=>{let{toasts:c,handlers:l}=q(n);return a.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},c.map((n=>{let i=n.position||t,s=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:R()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...o}})(i,l.calculateOffset(n,{reverseOrder:e,gutter:r,defaultPosition:t}));return a.createElement(de,{id:n.id,key:n.id,onHeightUpdate:l.updateHeight,className:n.visible?pe:"",style:s},"custom"===n.type?$(n.message,n):o?o(n):a.createElement(ue,{toast:n,position:i}))})))},me=U,ge=n(11163);function ve(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,o)}function he(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){ve(i,r,o,a,s,"next",e)}function s(e){ve(i,r,o,a,s,"throw",e)}a(void 0)}))}}function be(){return ye.apply(this,arguments)}function ye(){return(ye=he(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Notification"in window){e.next=3;break}return console.info("This browser does not support desktop notification"),e.abrupt("return",null);case 3:if("granted"!==Notification.permission){e.next=21;break}return e.prev=4,e.t0=g(),e.t1="".concat("https://notification-api-server.onrender.com","/pwa-save-t"),e.next=9,(0,f.EC)();case 9:return e.t2=e.sent,e.t3={token:e.t2},e.next=13,e.t0.post.call(e.t0,e.t1,e.t3);case 13:e.sent,e.next=18;break;case 16:e.prev=16,e.t4=e.catch(4);case 18:return e.next=20,(0,f.EC)();case 20:return e.abrupt("return",e.sent);case 21:if("denied"===Notification.permission){e.next=29;break}return e.next=24,Notification.requestPermission();case 24:if("granted"!==e.sent){e.next=29;break}return e.next=28,(0,f.EC)();case 28:return e.abrupt("return",e.sent);case 29:return console.log("Notification permission not granted."),e.abrupt("return",null);case 31:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}var xe=function(){var e=(0,ge.useRouter)(),t=(0,a.useState)(null),n=t[0],r=t[1],o=(0,a.useState)(null),i=o[0],s=o[1],c=(0,a.useRef)(0),l=(0,a.useRef)(!1),u=function(){var e=he(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.current){e.next=2;break}return e.abrupt("return");case 2:return l.current=!0,e.next=5,be();case 5:if(t=e.sent,"denied"!==Notification.permission){e.next=11;break}return r("denied"),console.info("%cPush Notifications issue - permission denied","color: green; background: #c7c7c7; padding: 8px; font-size: 20px"),l.current=!1,e.abrupt("return");case 11:if(t){e.next=23;break}if(!(c.current>=3)){e.next=17;break}return alert("Unable to load token, refresh the browser"),console.info("%cPush Notifications issue - unable to load token after 3 retries","color: green; background: #c7c7c7; padding: 8px; font-size: 20px"),l.current=!1,e.abrupt("return");case 17:return c.current+=1,console.error("An error occurred while retrieving token. Retrying..."),l.current=!1,e.next=22,u();case 22:return e.abrupt("return");case 23:r(Notification.permission),s(t),l.current=!1;case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){"Notification"in window&&u()}),[]),(0,a.useEffect)((function(){var t=function(){var t=he(d().mark((function t(){var n,r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,(0,f.Fw)();case 4:if(n=t.sent){t.next=7;break}return t.abrupt("return");case 7:return r=(0,p.ps)(n,(function(t){var n,r,o,i,a,s;if("granted"===Notification.permission){var c,l,u,d;if(console.log("Foreground push notification received:",t),(null===t||void 0===t||null===(n=t.fcmOptions)||void 0===n?void 0:n.link)||(null===(r=t.data)||void 0===r?void 0:r.link))me.success("".concat(null===(c=t.notification)||void 0===c?void 0:c.title,": ").concat(null===(l=t.notification)||void 0===l?void 0:l.body),{action:{label:"Visit",onClick:function(){var n,r,o=(null===(n=t.fcmOptions)||void 0===n?void 0:n.link)||(null===(r=t.data)||void 0===r?void 0:r.link);o&&e.push(o)}}});else me.success("".concat(null===(u=t.notification)||void 0===u?void 0:u.title,": ").concat(null===(d=t.notification)||void 0===d?void 0:d.body));new Notification((null===(o=t.notification)||void 0===o?void 0:o.title)||"New message",{body:(null===(i=t.notification)||void 0===i?void 0:i.body)||"This is a new message",data:(null===(a=t.fcmOptions)||void 0===a?void 0:a.link)||(null===(s=t.data)||void 0===s?void 0:s.link)}).onclick=function(t){var n,r;t.preventDefault(),console.log("event",t);var o=null===(n=t)||void 0===n||null===(r=n.target)||void 0===r?void 0:r.data;console.log("link",o),o?e.push(o):console.log("No link found in the notification payload")}}})),t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=null;return t().then((function(e){e&&(n=e)})),function(){return null===n||void 0===n?void 0:n()}}),[i]),{token:i,notificationPermissionStatus:n}},we=(0,i.default)((function(){return Promise.all([n.e(3365),n.e(8845),n.e(509),n.e(4232),n.e(2961),n.e(5778),n.e(3593),n.e(9964),n.e(1757),n.e(6223),n.e(7067),n.e(8465),n.e(4978),n.e(6465)]).then(n.bind(n,36465))}),{loadableGenerated:{webpack:function(){return[36465]}},ssr:!1}),ke=(0,i.default)((function(){return Promise.all([n.e(2196),n.e(9269),n.e(5778),n.e(3593),n.e(9964),n.e(1757),n.e(6223),n.e(6572),n.e(1362),n.e(900),n.e(5563),n.e(2590)]).then(n.bind(n,42590))}),{loadableGenerated:{webpack:function(){return[42590]}},ssr:!1}),je=(0,i.default)((function(){return Promise.all([n.e(5778),n.e(3593),n.e(9964),n.e(7944),n.e(8737)]).then(n.bind(n,28737))}),{loadableGenerated:{webpack:function(){return[28737]}},ssr:!1});function Ee(e){var t=e.villages,n=e.provincesMunicipalities,i=e.media,u={villages:t,provincesMunicipalities:n},d=(0,a.useState)(!1),p=d[0],f=d[1],m=(0,o.v9)((function(e){return e.dashboard.showWelcome}));(0,a.useEffect)((function(){m&&f(m)}),[m]);xe().notificationPermissionStatus;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{title:"Agro-Climatic Advisory Portal - ".concat(l.Gt," (ACAP-").concat(l.Gt.toUpperCase(),")"),ogDescription:i.description,ogImageURL:i.url,ogURL:i.path,canonicalURL:i.path}),(0,r.jsx)(fe,{}),(0,r.jsx)(we,{}),(0,r.jsx)(ke,{data:u}),(0,r.jsxs)(je,{title:"Welcome to the Agro-Climatic Advisory Portal-".concat(l.Gt," (ACAP-").concat(l.Gt.toUpperCase(),")!"),isOpen:p,children:[(0,r.jsxs)(s.Z,{variant:"body1",children:["This website serves as a centralized hub for the development of Climate Information Services (CIS) in the ",l.Gt," Region. It contains relevant weather and climate information which can be used in developing tailored advisories and crop recommendations."]}),(0,r.jsxs)(s.Z,{variant:"body1",sx:{marginTop:"16px"},children:["The ACAP-",l.Gt," is a work-in-progress and we welcome any feedbacks and suggestions. For any concerns regarding this website, you may send an e-mail at"," ",(0,r.jsx)("span",{style:{color:"#438364"},children:"region9amia@gmail.com"}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{children:"Please enable notifications and install our application on your device to receive the latest news and updates anytime."}),(0,r.jsx)(r.Fragment,{})]})]})]})}Ee.customLayout=!0;var Ce=!0,Ne=Ee},11163:function(e,t,n){e.exports=n(90387)}},function(e){e.O(0,[9774,2888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);