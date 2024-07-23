(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8943],{17903:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin/login",function(){return t(28188)}])},84846:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(34051),o=t.n(r),i=t(85893),a=t(67294),c=t(11163),s=t(63835),u=t(47426),l=t(11057),p=t(87357),d=t(61903),m=t(20719),f=t(15861),g=t(94229),v={container:{width:"100%",display:"grid",minHeight:"50vh",placeItems:"center"},loginContainer:{width:{xs:"100%",sm:"400px"},display:"flex",flexDirection:"column",textAlign:"center",padding:function(e){return e.spacing(1)},"& .MuiTextField-root, button":{marginTop:function(e){return e.spacing(2)}},"& h5":{marginBottom:function(e){return e.spacing(2)}},"& svg":{fontSize:"45px",margin:"auto",marginBottom:"8px"}},btnContainer:{display:"flex",gap:3,"& button":{flexGrow:1}}};var h=function(e){var n=e.loading,t=e.hasUser,r=e.state,o=e.loginTitle,a=e.onInputChange,c=e.onInputClick,s=e.onBtnClick;return(0,i.jsxs)("div",{children:[n&&(0,i.jsx)(m.Z,{}),!n&&!t&&(0,i.jsx)(p.Z,{sx:v.container,id:"bacap-login",children:(0,i.jsxs)(p.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:v.loginContainer,children:["Superadmin"===o&&(0,i.jsx)(g.Z,{color:"primary",size:"large"}),(0,i.jsxs)(f.Z,{variant:"h5",children:["ACAP ",(0,i.jsx)("br",{}),o||"Admin"," Login"]}),(0,i.jsx)(d.Z,{error:""!==r.error,id:"email",label:"Enter email",variant:"outlined",value:r.email,onChange:a,onClick:c}),(0,i.jsx)(d.Z,{error:""!==r.error,id:"password",label:"Enter password",type:"password",variant:"outlined",value:r.password,onChange:a,onClick:c,helperText:r.error}),(0,i.jsx)(l.Z,{variant:"contained",size:"large",onClick:s,children:"Log in"})]})})]})};function x(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function b(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){x(i,r,o,a,c,"next",e)}function c(e){x(i,r,o,a,c,"throw",e)}a(void 0)}))}}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){j(e,n,t[n])}))}return e}var y={email:"",password:"",error:""};var C=function(e){var n=e.accLevel,t=void 0===n?2:n,r=e.loginTitle,l=void 0===r?"":r,p=(0,a.useState)(y),d=p[0],m=p[1],f=(0,s.aC)(),g=(0,c.useRouter)();(0,a.useEffect)((function(){if(f.user&&!f.loading&&""===f.error){var e=t===u.DW.ADMIN?"/admin":"/superadmin";f.user.accountlevel===t?g.push(e):(f.logOut(),m((function(e){return w({},e,{error:"Unauthorized account level."})})))}}),[f,t,g]),(0,a.useEffect)((function(){""!==f.error&&m((function(e){return w({},e,{error:f.error})}))}),[f.error]);var v=function(){var e=b(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.signIn({email:d.email,password:d.password});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),m((function(n){return w({},n,{error:(0,s.Z)(e.t0.message)})}));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=b(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.logOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(h,{loading:f.loading,hasUser:f.user,state:d,loginTitle:l,onInputChange:function(e){var n=e.target,t=n.id,r=n.value;m((function(e){return w({},e,j({},t,r))})),""!==d.error&&m(w({},d,{error:""}))},onInputClick:function(e){m((function(n){var t;return w({},n,(j(t={},e.target.id,""),j(t,"error",""),t))}))},onBtnClick:v,onBtnLogoutClick:x})}},43370:function(e,n,t){"use strict";var r=t(85893),o=t(9008),i=t(47426);n.Z=function(e){var n=e.title,t=e.ogImageURL,a=void 0===t?"https://firebasestorage.googleapis.com/v0/b/acap-r9.appspot.com/o/da-rfo5-logo.png?alt=media&token=db301a09-8ce8-470a-8e4b-d7ff1104b340":t,c=e.ogImgAlt,s=void 0===c?"Picture":c,u=e.ogSiteName,l=void 0===u?"ACAP-".concat(i.Gt.toUpperCase()):u,p=e.ogURL;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"description",content:"Agro-Climatic Advisory Portal-Zampen (ACAP-Zampen) serves as a centralized hub for the development of Climate Information Services (CIS) in Zamboanga Peninsula Region. It contains relevant weather and climate information which can be used in developing tailored advisories and crop recommendations."}),(0,r.jsx)("meta",{name:"og:description",content:"Agro-Climatic Advisory Portal-Zampen (ACAP-Zampen) serves as a centralized hub for the development of Climate Information Services (CIS) in Zamboanga Peninsula Region. It contains relevant weather and climate information which can be used in developing tailored advisories and crop recommendations."}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:site_name",content:l}),(0,r.jsx)("meta",{property:"og:image",content:a}),(0,r.jsx)("meta",{property:"og:image:width",content:"600"}),(0,r.jsx)("meta",{property:"og:image:height",content:"315"}),(0,r.jsx)("meta",{property:"og:image:alt",content:s}),(0,r.jsx)("meta",{property:"og:url",content:p}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:a}),(0,r.jsx)("title",{children:n})]})}},20719:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(85893),o=t(87357),i=t(98456),a=t(15861),c={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}var l=function(e){var n=e.sx;return(0,r.jsx)(o.Z,{sx:u({},c.container,n&&u({},n)),children:(0,r.jsxs)(o.Z,{sx:c.loading,children:[(0,r.jsx)(a.Z,{variant:"subtitle1",children:"Loading..."}),(0,r.jsx)(i.Z,{size:"32px"})]})})}},28188:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c}});var r=t(85893),o=t(47426),i=t(84846),a=t(43370);var c=!0;n.default=function(e){var n=e.media;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:"Agro-Climatic Advisory Portal - ".concat(o.Gt," (ACAP-").concat(o.Gt.toUpperCase(),") Superadmin Login"),ogDescription:n.description,ogImageURL:n.url,ogURL:n.path}),(0,r.jsx)(i.Z,{loginTitle:"Superadmin",accLevel:o.DW.SUPERADMIN})]})}}},function(e){e.O(0,[5778,3593,9964,8858,1903,9476,9774,2888,179],(function(){return n=17903,e(e.s=n);var n}));var n=e.O();_N_E=n}]);