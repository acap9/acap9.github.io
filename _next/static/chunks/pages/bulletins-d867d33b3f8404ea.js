(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3689],{11057:function(e,t,o){"use strict";o.d(t,{Z:function(){return C}});var n=o(63366),a=o(87462),r=o(67294),i=o(86010),l=o(47925),s=o(27192),c=o(41796),d=o(11496),u=o(33616),p=o(47739),m=o(98216),f=o(28979);function h(e){return(0,f.Z)("MuiButton",e)}var g=(0,o(76087).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v=o(98363),x=o(85893);const b=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,m.Z)(o.color)}`],t[`size${(0,m.Z)(o.size)}`],t[`${o.variant}Size${(0,m.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,a.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${g.focusVisible}`]:(0,a.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${g.disabled}`]:(0,a.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}})),S=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(o.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e)))),w=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(o.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))));var C=r.forwardRef((function(e,t){const o=r.useContext(v.Z),c=(0,l.Z)(o,e),d=(0,u.Z)({props:c,name:"MuiButton"}),{children:p,color:f="primary",component:g="button",className:y,disabled:C=!1,disableElevation:z=!1,disableFocusRipple:R=!1,endIcon:j,focusVisibleClassName:I,fullWidth:M=!1,size:k="medium",startIcon:P,type:A,variant:N="text"}=d,L=(0,n.Z)(d,b),_=(0,a.Z)({},d,{color:f,component:g,disabled:C,disableElevation:z,disableFocusRipple:R,fullWidth:M,size:k,type:A,variant:N}),E=(e=>{const{color:t,disableElevation:o,fullWidth:n,size:r,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,m.Z)(t)}`,`size${(0,m.Z)(r)}`,`${i}Size${(0,m.Z)(r)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(r)}`]},d=(0,s.Z)(c,h,l);return(0,a.Z)({},l,d)})(_),$=P&&(0,x.jsx)(S,{className:E.startIcon,ownerState:_,children:P}),F=j&&(0,x.jsx)(w,{className:E.endIcon,ownerState:_,children:j});return(0,x.jsxs)(Z,(0,a.Z)({ownerState:_,className:(0,i.Z)(y,o.className),component:g,disabled:C,focusRipple:!R,focusVisibleClassName:(0,i.Z)(E.focusVisible,I),ref:t,type:A},L,{classes:E,children:[$,p,F]}))}))},98363:function(e,t,o){"use strict";const n=o(67294).createContext({});t.Z=n},66242:function(e,t,o){"use strict";o.d(t,{Z:function(){return g}});var n=o(87462),a=o(63366),r=o(67294),i=o(86010),l=o(27192),s=o(11496),c=o(33616),d=o(55113),u=o(28979);function p(e){return(0,u.Z)("MuiCard",e)}(0,o(76087).Z)("MuiCard",["root"]);var m=o(85893);const f=["className","raised"],h=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var g=r.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiCard"}),{className:r,raised:s=!1}=o,d=(0,a.Z)(o,f),u=(0,n.Z)({},o,{raised:s}),g=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},p,t)})(u);return(0,m.jsx)(h,(0,n.Z)({className:(0,i.Z)(g.root,r),elevation:s?8:void 0,ref:t,ownerState:u},d))}))},44267:function(e,t,o){"use strict";o.d(t,{Z:function(){return h}});var n=o(87462),a=o(63366),r=o(67294),i=o(86010),l=o(27192),s=o(11496),c=o(33616),d=o(28979);function u(e){return(0,d.Z)("MuiCardContent",e)}(0,o(76087).Z)("MuiCardContent",["root"]);var p=o(85893);const m=["className","component"],f=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var h=r.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:r,component:s="div"}=o,d=(0,a.Z)(o,m),h=(0,n.Z)({},o,{component:s}),g=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},u,t)})(h);return(0,p.jsx)(f,(0,n.Z)({as:s,className:(0,i.Z)(g.root,r),ownerState:h,ref:t},d))}))},11413:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bulletins",function(){return o(22406)}])},43370:function(e,t,o){"use strict";var n=o(85893),a=o(9008),r=o(47426);t.Z=function(e){var t=e.title,o=e.ogImageURL,i=void 0===o?"https://firebasestorage.googleapis.com/v0/b/acap-r9.appspot.com/o/da-rfo5-logo.png?alt=media&token=db301a09-8ce8-470a-8e4b-d7ff1104b340":o,l=e.ogImgAlt,s=void 0===l?"Picture":l,c=e.ogSiteName,d=void 0===c?"ACAP-".concat(r.Gt.toUpperCase()):c,u=e.ogURL;return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("meta",{name:"description",content:"Agro-Climatic Advisory Portal-Zampen (ACAP-Zampen) serves as a centralized hub for the development of Climate Information Services (CIS) in Zamboanga Peninsula Region. It contains relevant weather and climate information which can be used in developing tailored advisories and crop recommendations."}),(0,n.jsx)("meta",{name:"og:description",content:"Agro-Climatic Advisory Portal-Zampen (ACAP-Zampen) serves as a centralized hub for the development of Climate Information Services (CIS) in Zamboanga Peninsula Region. It contains relevant weather and climate information which can be used in developing tailored advisories and crop recommendations."}),(0,n.jsx)("meta",{property:"og:title",content:t}),(0,n.jsx)("meta",{property:"og:site_name",content:d}),(0,n.jsx)("meta",{property:"og:image",content:i}),(0,n.jsx)("meta",{property:"og:image:width",content:"600"}),(0,n.jsx)("meta",{property:"og:image:height",content:"315"}),(0,n.jsx)("meta",{property:"og:image:alt",content:s}),(0,n.jsx)("meta",{property:"og:url",content:u}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:t}),(0,n.jsx)("meta",{name:"twitter:image",content:i}),(0,n.jsx)("title",{children:t})]})}},48418:function(e,t,o){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,a,r=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(r.push(n.value),!t||r.length!==t);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==o.return||o.return()}finally{if(l)throw a}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var r,i=(r=o(67294))&&r.__esModule?r:{default:r},l=o(76273),s=o(90387),c=o(57190);var d={};function u(e,t,o,n){if(e&&l.isLocalURL(t)){e.prefetch(t,o,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;d[t+"%"+o+(a?"%"+a:"")]=!0}}var p=function(e){var t,o=!1!==e.prefetch,n=s.useRouter(),r=i.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),o=t[0],r=t[1];return{href:o,as:e.as?l.resolveHref(n,e.as):r||o}}),[n,e.href,e.as]),p=r.href,m=r.as,f=e.children,h=e.replace,g=e.shallow,v=e.scroll,x=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var b=(t=i.default.Children.only(f))&&"object"===typeof t&&t.ref,y=a(c.useIntersection({rootMargin:"200px"}),2),Z=y[0],S=y[1],w=i.default.useCallback((function(e){Z(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,Z]);i.default.useEffect((function(){var e=S&&o&&l.isLocalURL(p),t="undefined"!==typeof x?x:n&&n.locale,a=d[p+"%"+m+(t?"%"+t:"")];e&&!a&&u(n,p,m,{locale:t})}),[m,p,S,x,o,n]);var C={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,o,n,a,r,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(o))&&(e.preventDefault(),t[a?"replace":"push"](o,n,{shallow:r,locale:s,scroll:i}))}(e,n,p,m,h,g,v,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(p)&&u(n,p,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var z="undefined"!==typeof x?x:n&&n.locale,R=n&&n.isLocaleDomain&&l.getDomainLocale(m,z,n&&n.locales,n&&n.domainLocales);C.href=R||l.addBasePath(l.addLocale(m,z,n&&n.defaultLocale))}return i.default.cloneElement(t,C)};t.default=p},22406:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return _},default:function(){return E}});var n=o(85893),a=o(41664),r=o(87357),i=o(66242),l=o(63366),s=o(87462),c=o(67294),d=o(86010),u=o(27192),p=o(11496),m=o(33616),f=o(28979),h=o(76087);function g(e){return(0,f.Z)("MuiCardActions",e)}(0,h.Z)("MuiCardActions",["root","spacing"]);const v=["disableSpacing","className"],x=(0,p.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,s.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var b=c.forwardRef((function(e,t){const o=(0,m.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:a=!1,className:r}=o,i=(0,l.Z)(o,v),c=(0,s.Z)({},o,{disableSpacing:a}),p=(e=>{const{classes:t,disableSpacing:o}=e,n={root:["root",!o&&"spacing"]};return(0,u.Z)(n,g,t)})(c);return(0,n.jsx)(x,(0,s.Z)({className:(0,d.Z)(p.root,r),ownerState:c,ref:t},i))})),y=o(44267);function Z(e){return(0,f.Z)("MuiCardMedia",e)}(0,h.Z)("MuiCardMedia",["root","media","img"]);const S=["children","className","component","image","src","style"],w=(0,p.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{isMediaComponent:n,isImageComponent:a}=o;return[t.root,n&&t.media,a&&t.img]}})((({ownerState:e})=>(0,s.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),C=["video","audio","picture","iframe","img"],z=["picture","img"];var R=c.forwardRef((function(e,t){const o=(0,m.Z)({props:e,name:"MuiCardMedia"}),{children:a,className:r,component:i="div",image:c,src:p,style:f}=o,h=(0,l.Z)(o,S),g=-1!==C.indexOf(i),v=!g&&c?(0,s.Z)({backgroundImage:`url("${c}")`},f):f,x=(0,s.Z)({},o,{component:i,isMediaComponent:g,isImageComponent:-1!==z.indexOf(i)}),b=(e=>{const{classes:t,isMediaComponent:o,isImageComponent:n}=e,a={root:["root",o&&"media",n&&"img"]};return(0,u.Z)(a,Z,t)})(x);return(0,n.jsx)(w,(0,s.Z)({className:(0,d.Z)(b.root,r),as:i,role:!g&&c?"img":void 0,ref:t,style:v,ownerState:x,src:g?c||p:void 0},h,{children:a}))})),j=o(11057),I=o(86886),M=o(15861),k=[{title:"10-Day Farm Weather Outlook",img:"th_clouds",description:"View and download the 10-Day Farm Weather Outlook and Advisory Recommendations PDF Bulletins here.",href:"/bulletins/weather"},{title:"Seasonal Outlook",img:"th_seasonal",description:"View and download Regional Seasonal Climate Outlook and Advisory Crop Recommendations PDF Bulletins here.",href:"/bulletins/seasonal-outlook"},{title:"Special Weather Forecast",img:"th_typhoon_03",description:"View the Special Weather Forecast PDF bulletins here.",href:"/bulletins/special-weather-forecast"}],P={container:{marginTop:function(e){return e.spacing(8)}},card:{height:"100%",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important","& a":{color:function(e){return e.palette.primary.main},textDecoration:"none"},alignItems:"baseline"}};var A=function(e){var t=e.media;return(0,n.jsx)(r.Z,{sx:P.container,children:(0,n.jsx)(I.ZP,{container:!0,maxWidth:"lg",spacing:3,children:k.map((function(e,o){return(0,n.jsx)(I.ZP,{item:!0,xs:12,md:4,children:(0,n.jsxs)(i.Z,{sx:P.card,children:[(0,n.jsx)(R,{placeholder:"/images/thumbnails/".concat(e.img,".png"),component:"img",height:"225",srcSet:void 0!==t[o]?t[o]:"/images/thumbnails/".concat(e.img,".png"),alt:e.title}),(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(M.Z,{gutterBottom:!0,variant:"h5",component:"div",children:e.title}),(0,n.jsx)(M.Z,{variant:"body2",color:"text.secondary",children:e.description})]}),(0,n.jsx)(b,{children:(0,n.jsx)(j.Z,{size:"small",children:(0,n.jsx)(a.default,{href:e.href,passHref:!0,children:(0,n.jsx)("a",{children:"View"})})})})]})},o)}))})})},N=o(43370),L=o(47426);var _=!0,E=function(e){var t=e.media,o=e.info;return(0,n.jsxs)("div",{id:"acap-bulletins",children:[(0,n.jsx)(N.Z,{title:"Agro-Climatic Advisory Portal - ".concat(L.Gt," (ACAP-").concat(L.Gt.toUpperCase(),") Bulletins"),ogDescription:o.description,ogImageURL:o.url,ogURL:o.path}),(0,n.jsx)(M.Z,{variant:"h4",children:"Bulletins"}),(0,n.jsx)(M.Z,{variant:"label",children:"Welcome to the Bulletins PDF downloads page. You can preview and download Bulletins integrated with the Seasonal and 10-Day Weather Forecasts here."}),(0,n.jsx)(A,{media:t})]})}},41664:function(e,t,o){e.exports=o(48418)}},function(e){e.O(0,[5778,9774,2888,179],(function(){return t=11413,e(e.s=t);var t}));var t=e.O();_N_E=t}]);