(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7970],{40108:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/seasonal/create",function(){return t(60261)}])},60261:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return me}});var r=t(34051),o=t.n(r),i=t(85893),a=t(67294),l=t(9473),s=t(16327),c=t(30560),u=t(87006),d=t(87682),p=t(53063),f=t(12671),m=t(61690),v=t(59111),g=t(87784),h=t(52955),b=t(59390),x=t(38885),y=t(22856),j=t(27941),S=t(22228),_=t(47426),w={forecast:"",label:"",value:0};var O=t(15497),Z=t(16449),k=t(901),P=t(27392),E=t(95243),C=t(11163),I=t(45697),R=t.n(I),T=t(21023),A=t(93946),L=t(41664),B=t(76295),D=t(87357),F=t(98456),z=t(11057),N=t(56863),M=t(87918),U=t(67720),G=t(86886),W=t(61903),V=t(15861),q=t(88409),H=t(40044),X=t(11829),$=t(19227),J=t(22094),K=t(24478),Q=t(79316),Y=t(22757);function ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ee(e,n,t[n])}))}return e}function te(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function re(e){var n,t=function(e){var n=e.children,t=e.value,r=e.index,o=te(e,["children","value","index"]);return(0,i.jsx)("div",ne({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},o,{children:t===r&&(0,i.jsx)(D.Z,{sx:{p:3},children:n})}))},r=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},o=(0,a.useState)(!1),s=o[0],c=o[1],u=(0,a.useRef)(!0),d=(0,C.useRouter)(),p=(0,l.I0)(),m=(0,a.useState)(0),v=m[0],g=m[1],h=e.sel_options,b=e.recommendations,x=e.recommendationsImpacts,y=e.climateRisk,j=e.optsprovinces,S=e.optsactivities,w=e.optscrops,O=e.optscropstages,Z=e.monthForecast,k=e.open,P=e.isTagalog,E=e.loading,I=e.isloadingreport,ee=e.message,re=e.smstext,oe=e.pdfPreview,ie=e.handleSave,ae=e.handlePreview,le=e.togglePrompt,se=e.toggleViewerOpen,ce=e.toggleGlobalLanguage,ue=e.onSelectItemChange,de=e.resetSelections;(0,a.useEffect)((function(){return u.current=!0,function(){u.current=!1}}),[]),(0,a.useEffect)((function(){null===h.sel_month&&!0===s&&c(!1)}),[h.sel_month,s]);var pe=function(){p((0,f.s_)()),d.push("/admin/bulletins/crops/report/view/?docId=".concat(ee.docId))},fe=function(){var e="Loading...";return j.length>0&&(e=null===h.sel_province?"Select a province":"Province"),e};return t.propTypes={children:R().node,index:R().number.isRequired,value:R().number.isRequired},(0,i.jsxs)("div",{children:[(0,i.jsx)($.Z,{isOpen:ee.isOpen,maxWidth:"xs",openButtonText:null,title:ee.title,contentText:ee.msg,loading:ee.loading,modalCancelHandlerCB:function(){ee.savesuccess?pe():le()},modalConfirmHandlerCB:function(){ee.savesuccess?pe():ie()}}),(0,i.jsx)(J.Z,{open:k,pdfPreview:oe,error:h.error,loading:h.loading,toggleViewerOpen:se}),(0,i.jsxs)(G.ZP,{container:!0,sx:Y.Z.container,children:[(0,i.jsxs)(D.Z,{sx:Y.Z.headerText,children:[(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(V.Z,{variant:"h5",children:"Regional Seasonal Climate Outlook and Advisory Crop Recommendations Bulletin"}),(0,i.jsxs)("p",{children:["Create ",(0,i.jsx)("strong",{children:"Seasonal"})," crop recommendations bulletins. Finalized bulletins will be automatically uploaded to the site for public download."]})]}),(0,i.jsx)(D.Z,{children:(0,i.jsx)(A.Z,{"aria-label":"exit",size:"medium",children:(0,i.jsx)(L.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,i.jsx)(T.Z,{fontSize:"inherit"})})})})]}),(0,i.jsxs)(G.ZP,{item:!0,sx:Y.Z.item,xs:12,lg:4,children:[(0,i.jsx)(V.Z,{variant:"h6",children:"Selection Options"}),(0,i.jsx)(B.Z,{disablePortal:!0,id:"province",size:"small",value:h.sel_province,disabled:0===j.length||E,options:j,sx:Y.Z.autocomplete,PaperComponent:X.Z,renderInput:function(e){return(0,i.jsx)(W.Z,ne({},e,{label:fe()}))},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return ue(e,ne({},n,{from:"province"}))}}),(0,i.jsx)(B.Z,{disablePortal:!0,id:"crop",size:"small",value:h.sel_crop,disabled:0===w.length||null===h.sel_municipality||E,options:w,sx:Y.Z.autocomplete,PaperComponent:X.Z,renderInput:function(e){return(0,i.jsx)(W.Z,ne({},e,{label:null===h.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,n){return e.label===n},getOptionDisabled:function(e){return e.disabled},onChange:function(e,n){return ue(e,ne({},n,{from:"crop"}))}}),null!==h.sel_crop&&(0,i.jsxs)("div",{style:{marginTop:"16px",float:"left",textAlign:"center",border:"1px solid #DCEDC8",padding:"5px 10px",borderRadius:"5px"},children:[(0,i.jsx)(V.Z,{variant:"subtitle1",children:(0,i.jsx)("strong",{children:"Climate Risk:"})}),y]}),(0,i.jsxs)(N.Z,{disableElevation:!0,size:"small","aria-label":"outlined button controls group",disabled:I||null===h.sel_crop||null===h.sel_month,sx:{marginTop:"16px",float:"right"},children:[(0,i.jsx)(z.Z,{variant:"outlined",disabled:E||I,onClick:de,children:"Reset"}),(0,i.jsx)(z.Z,{variant:"contained",onClick:function(){return c((function(e){return!e}))},disabled:E||null===h.sel_month||s||null===b,children:"Generate"})]})]}),(0,i.jsx)(G.ZP,{item:!0,sx:Y.Z.item,xs:12,lg:8,children:(0,i.jsx)(Q.Z,{climateRisk:y,selecteditems:h,cropstages:null===O||void 0===O?void 0:O.map((function(e){return e.label})).toString().split(",").join(", "),farmoperations:S.map((function(e){return e.label})).toString().split(",").join(", "),loading:E})})]}),(0,i.jsxs)(G.ZP,{container:!0,sx:Y.Z.container,gap:3,style:{marginTop:"24px",padding:E?"16px":"24px"},children:[(0,i.jsxs)(G.ZP,{item:!0,sx:Y.Z.item,xs:12,lg:12,children:[(0,i.jsx)(D.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,i.jsx)(F.Z,{size:16,color:"primary",sx:{display:E?"block":"none"}})}),null!==h.sel_crop&&null!==h.sel_month&&s&&(0,i.jsx)(D.Z,{children:Z.forecast!==_.DD&&(0,i.jsxs)(D.Z,{sx:{width:"100%",marginTop:{xs:"85px",lg:"0px"},"& hr":{marginBottom:"32px"}},children:[(0,i.jsx)(D.Z,{sx:{borderBottom:1,borderColor:"divider","& hr":{color:"red"}},children:(0,i.jsxs)(q.Z,{value:v,onChange:function(e,n){g(n)},"aria-label":"basic tabs example",children:[(0,i.jsx)(H.Z,ne({label:"PDF FORM"},r(0))),(0,i.jsx)(H.Z,ne({label:"SMS FORM"},r(1)))]})}),(0,i.jsxs)(t,{value:v,index:0,children:[(0,i.jsxs)(D.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},children:[(0,i.jsx)(V.Z,{variant:"h4",children:"Impact Outlooks"}),(0,i.jsx)(M.Z,{size:"medium",variant:"outlined",label:P?"English":"Tagalog",onClick:function(){return ce()},sx:{width:"90px"}})]}),(0,i.jsx)(D.Z,{sx:Y.Z.recSeasonal,children:(0,i.jsx)(K.Z,{impactOutlookOnly:!0,isShowImpactOutlookSubtitle:!1,recommendations:x,impactOutlookEng:"impact",impactOutlookTag:"impact_tagalog",title:h.sel_crop,isTagalog:P,isShowTitle:!1})}),(0,i.jsx)("hr",{}),(0,i.jsx)(V.Z,{variant:"h4",children:"Recommendations"}),b&&O?null===(n=Object.keys(b))||void 0===n?void 0:n.map((function(e,n){return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(V.Z,{variant:"h5",sx:Y.Z.recSeasonalStage,children:e}),Object.keys(b[e]).map((function(n,t){return(0,i.jsxs)(D.Z,{sx:ne({},Y.Z.recSeasonal,{marginBottom:"24px","& h6":{color:"rgba(0, 0, 0, 0.67)"}}),children:[(0,i.jsx)(V.Z,{variant:"h6",children:n}),(0,i.jsx)(K.Z,{recommendations:b[e][n],isTagalog:P,isShowTitle:!1})]},"rec-".concat(t))}))]},n)})):(0,i.jsx)(K.Z,{recommendations:b,isTagalog:P,isShowTitle:!1})]}),(0,i.jsx)(t,{value:v,index:1,children:re})]})})]}),(0,i.jsxs)(D.Z,{sx:{marginBottom:"16px",width:"100%",display:s?"block":"none"},children:[(0,i.jsx)("br",{}),(0,i.jsx)(U.Z,{}),(0,i.jsx)("br",{}),""!==h.error&&(0,i.jsxs)(V.Z,{variant:"caption",sx:{color:"red"},children:["Error: ",h.error]}),(0,i.jsxs)(N.Z,{size:"large","aria-label":"large button group",disabled:I||Z.forecast===_.DD,sx:{display:"flex",justifyContent:"flex-end",marginTop:"8px"},children:[(0,i.jsx)(L.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,i.jsx)(z.Z,{disabled:h.loading,children:"Cancel"})}),(0,i.jsxs)(z.Z,{disabled:h.loading,onClick:ae,children:[(0,i.jsx)("span",{style:{display:I?"none":"block"},children:"Preview"})," ","\xa0",(0,i.jsx)(F.Z,{size:24,color:"secondary",sx:{display:I?"block":"none"}})]}),(0,i.jsx)(z.Z,{variant:"contained",onClick:le,disableElevation:!0,disabled:h.loading,children:"Save"})]})]})]})]})}re.propTypes={optsprovinces:R().array,optscrops:R().array,optsmonths:R().array,optsactivities:R().array,sel_options:R().object,monthForecast:R().object,recommendationsImpacts:R().array,loading:R().bool,isloadingreport:R().bool,open:R().bool,isTagalog:R().bool,message:R().object,smstext:R().string,pdfPreview:R().object,onSelectItemChange:R().func,handlePreview:R().func,handleSave:R().func,toggleViewerOpen:R().func,toggleGlobalLanguage:R().func,resetSelections:R().func,togglePrompt:R().func};var oe=re,ie=t(66383);function ae(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function le(e,n,t,r,o,i,a){try{var l=e[i](a),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,o)}function se(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){le(i,r,o,a,l,"next",e)}function l(e){le(i,r,o,a,l,"throw",e)}a(void 0)}))}}function ce(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ce(e,n,t[n])}))}return e}function de(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return ae(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ae(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var pe={sel_province:null,sel_crop:null,sel_stage:null,sel_activity:[],sel_month:null,sel_condition:{id:0,from:"weather_condition",label:_.MW.WAY_BELOW_NORMAL.label},loading:!1,error:"",success:""},fe={url:"",filename:""};var me=(0,E.Z)((function(e){var n=e.user,t=e.onBtnLogoutClick,r=e.loading,E=(0,a.useState)(pe),C=E[0],I=E[1],R=(0,a.useState)({}),T=R[0],A=R[1],L=(0,a.useState)({}),B=L[0],D=L[1],F=(0,a.useState)([]),z=F[0],N=F[1],M=(0,a.useState)([]),U=M[0],G=M[1],W=(0,a.useState)([]),V=W[0],q=W[1],H=(0,a.useState)([]),X=H[0],$=H[1],J=(0,a.useState)(null),K=J[0],Q=J[1],Y=(0,a.useState)(!0),ee=Y[0],ne=Y[1],te=(0,a.useState)(!1),re=te[0],ae=te[1],le=(0,a.useRef)(!1),ce=(0,d.m$)(c.M.WEATHER_FORECASTS,"zampen",c.M.SUB_SEASONAL,"name"),me=ce.documents,ve=ce.loading,ge=function(e,n){var t=(0,a.useState)(w),r=t[0],o=t[1];return(0,a.useEffect)((function(){if(void 0!==e.months&&n){var t,r,i,a,l,s=e.months.find((function(e){return e.mo===n.id})),c=Object.values(_.MW).find((function(e){return null!==(t=e.label===(null===s||void 0===s?void 0:s.con))&&void 0!==t?t:""}));o({forecast:null!==(r=null===s||void 0===s?void 0:s.con)&&void 0!==r?r:"",value:null!==(i=null===s||void 0===s?void 0:s.val)&&void 0!==i?i:0,label:null!==(a=null===c||void 0===c?void 0:c.sync)&&void 0!==a?a:"-",code:null!==(l=null===c||void 0===c?void 0:c.label)&&void 0!==l?l:"-"})}}),[e,n]),{forecast:r}}(B,C.sel_month),he=ge.forecast,be=(0,b.Z)("seasonal",C.sel_province,C.sel_crop),xe=be.cropcalendar,ye=be.cropStages,je=be.loading,Se=(0,j.Z)(C.sel_crop,T.code,"seasonal_sms"),_e=Se.recommendationsSMS,we=Se.loading;(0,a.useEffect)((function(){var e;0!==(null===_e||void 0===_e?void 0:_e.length)&&qe(_e[0].sms.replace("{{seasonal_range_identifier}}",null===C||void 0===C||null===(e=C.sel_month)||void 0===e?void 0:e.label))}),[_e,C.sel_month]),(0,a.useEffect)((function(){if(0!==xe.length&&!ee&&0!==z.length&&C.sel_crop===xe.data1[0].crop){var e=[];z.forEach((function(n){var t,r;if(0!==xe.length){var o=null===(t=xe.data1[0][n.id])||void 0===t?void 0:t.split(",");o&&2===(null===o||void 0===o?void 0:o.length)&&("none"===o[0]||e.includes(o[0])||e.push(o[0]),"none"===o[1]||e.includes(o[1])||e.push(o[1]));var i=null===(r=xe.data2[0][n.id])||void 0===r?void 0:r.split(",");i&&2===(null===i||void 0===i?void 0:i.length)&&("none"===i[0]||e.includes(i[0])||e.push(i[0]),"none"===i[1]||e.includes(i[1])||e.push(i[1]))}}));var n=e.map((function(e,n){return{id:n,label:ye[e].label,code:e}}));Q(n)}}),[xe,ee,C.sel_crop,z,ye]);var Oe=(0,x.Z)().cropList.map((function(e,n){return{disabled:!1,label:e,id:n}})),Ze=(0,y.Z)(T.code,K,C.sel_crop,"seasonal",!0),ke=Ze.recommendations,Pe=Ze.farmoperations,Ee=Ze.loading,Ce=(0,O.Z)(ke,ye,K).group,Ie=(0,S.Z)(ke,Pe).group,Re=(0,Z.Z)(void 0,void 0),Te=Re.services,Ae=Re.loading,Le=(0,a.useState)(fe),Be=Le[0],De=Le[1],Fe=(0,a.useState)(!1),ze=Fe[0],Ne=Fe[1],Me=(0,a.useState)(P.BF),Ue=Me[0],Ge=Me[1],We=(0,a.useState)(""),Ve=We[0],qe=We[1],He=(0,l.v9)((function(e){return e.dashboard.reportType})),Xe=(0,l.I0)(),$e=(0,l.v9)((function(e){return e.reports})),Je=$e.report,Ke=$e.status;(0,a.useEffect)((function(){var e;if((null===B||void 0===B||null===(e=B.months)||void 0===e?void 0:e.length)>0&&null!==C.sel_crop){A((0,h.Z)(B.months,"seasonal"));var n="".concat(_.re[B.mos[0].toUpperCase()].format," - ").concat(_.re[B.mos[5].toUpperCase()].format);I((function(e){return ue({},e,{sel_month:{label:n}})}))}}),[B,C.sel_crop]),(0,a.useEffect)((function(){le.current=!0;var e=function(){var e=se(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.$m)();case 3:n=e.sent,le&&$(n.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){le.current=!1}}),[]),(0,a.useEffect)((function(){Xe((0,f.s_)())}),[Xe]),(0,a.useEffect)((function(){X.length>0&&!ve&&!r&&(q((0,v.m)(X)),N(me[0].mos.reduce((function(e,n){return de(e).concat([{id:_.re[n.toUpperCase()].code,label:_.re[n.toUpperCase()].format,disabled:!1}])}),[])))}),[X,me,ve,r]),(0,a.useEffect)((function(){ne(r||ve||Ee||je||we||Ae)}),[r,ve,Ee,je,we,Ae]),(0,a.useEffect)((function(){Ke===k.G.FULLFILLED&&null!==Je&&le.current&&Ge((function(e){return ue({},e,{msg:"Success! Bulletin report created.",loading:!1,savesuccess:!0,docId:Je.id})}))}),[Ke,Je]);var Qe=function(){var e=se(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ge(ue({},Ue,{loading:!0,msg:"Saving report..."}));try{t={region:"zampen",province:C.sel_province,crop:C.sel_crop,climateRisk:T,cropping_calendar:xe,stages:K,activities:Pe.map((function(e){return e.label})),recommendations:ke,services:Te.map((function(e){return e.data})),operation:"create",language:re?"tag":"en",isFull:!0},Xe((0,m.Br)(t)).unwrap().then((function(){He!==P.Ry.SEASONAL&&(Xe((0,p.uq)(P.Ry.SEASONAL)),Xe((0,m.RC)({uid:n.uid,type:P.Ry.SEASONAL})))})).catch((function(e){le.current&&Ge((function(n){return ue({},n,{msg:e.message,loading:!1,savesuccess:!1,docId:null})}))}))}catch(i){r="",void 0!==i.response&&(r=void 0!==i.response.data&&"[object Blob]"===((o=i.response.data)&&"undefined"!==typeof Symbol&&o.constructor===Symbol?"symbol":typeof o)?i.response.data:""),""===r&&(r=i.message)}case 2:case"end":return e.stop()}var o}),e)})));return function(){return e.apply(this,arguments)}}(),Ye=function(){var e=se(o().mark((function e(){var n,t,r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===Be.url){e.next=3;break}return Ne(!0),e.abrupt("return");case 3:return I((function(e){return ue({},e,{loading:!0,error:"",success:""})})),e.prev=4,n={region:"zampen",province:C.sel_province,crop:C.sel_crop,operation:"preview",climateRisk:T,cropping_calendar:xe,stages:null!==K&&void 0!==K?K:[],activities:Pe.map((function(e){return e.label})),recommendations:ke,services:Te.map((function(e){return e.data})),language:re?"tag":"en",isFull:!0},Ne(!0),I((function(e){return ue({},e,{loading:!0,error:""})})),e.next=10,(0,u.pl)(n);case 10:t=e.sent,r=new Blob([t],{type:"application/pdf"}),(i={}).href=URL.createObjectURL(r),i.download="".concat(C.sel_province,"-").concat(C.sel_crop,".pdf"),De((function(e){return ue({},e,{url:i.href,filename:i.download})})),I((function(e){return ue({},e,{loading:!1,success:"Bulletin preview created."})})),e.next=25;break;case 19:return e.prev=19,e.t0=e.catch(4),e.next=23,(0,g.fu)(e.t0);case 23:a=e.sent,I((function(e){return ue({},e,{loading:!1,error:a})}));case 25:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(ie.Z,{loading:r,user:n,onBtnLogoutClick:t,accLevel:_.DW.ADMIN,children:(0,i.jsx)(oe,{climateRisk:T.label,optsprovinces:V,optscrops:Oe,optsmonths:z,optscropstages:K,optsactivities:Pe,sel_options:C,monthForecast:he,recommendations:Ce,recommendationsImpacts:Ie,loading:ee,isloadingreport:Ke===k.G.PENDING,open:ze,isTagalog:re,message:Ue,smstext:Ve,pdfPreview:Be,onSelectItemChange:function(e,n){var t=n.from,r=n.label;if(De(fe),U.length>0&&G([]),Object.keys(n).includes("id"))switch(t){case"province":Q(null),D(me.find((function(e){return e.name===r}))),I(ue({},pe,{sel_province:r}));break;case"crop":I(ue({},C,{sel_crop:r,sel_month:null,sel_stage:null,sel_activity:null})),Q(null),G([])}else"province"===t?(I(pe),Q(null)):"crop"===t?(I(ue({},C,{sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null})),Q(null)):"month"===t&&(I(ue({},C,{sel_month:null,sel_stage:null,sel_activity:null})),Q(null))},handlePreview:Ye,handleSave:Qe,toggleViewerOpen:function(){Ne((function(e){return!e}))},toggleGlobalLanguage:function(){ae((function(e){return!e})),De(fe)},resetSelections:function(){I(pe),Q(null),G([])},togglePrompt:function(){Ge((function(e){return ue({},P.BF,{isOpen:!e.isOpen})}))}})})}))},87682:function(e,n,t){"use strict";t.d(n,{ky:function(){return m},Kx:function(){return v},m$:function(){return g},tl:function(){return h}});var r=t(34051),o=t.n(r),i=t(67294),a=t(25321),l=t(96772);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e,n,t,r,o,i,a){try{var l=e[i](a),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,o)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){c(i,r,o,a,l,"next",e)}function l(e){c(i,r,o,a,l,"throw",e)}a(void 0)}))}}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}function f(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){var t=(0,i.useState)(null),r=t[0],s=t[1],c=(0,i.useState)(!0),d=c[0],p=c[1],f=(0,i.useState)(""),m=f[0],v=f[1],g=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var t=function(){var t=u(o().mark((function t(){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=(0,a.JU)(l.db,e,n),t.next=4,(0,a.QT)(r);case 4:i=t.sent,g.current&&(i.exists()&&s(i.data()),p(!1)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),v(t.t0.message),p(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return g.current=!1}}),[e,n]),[r,d,m]}function v(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=(0,i.useState)([]),c=s[0],d=s[1],m=(0,i.useState)(!0),v=m[0],g=m[1],h=(0,i.useState)(""),b=h[0],x=h[1],y=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var i=function(){var i=u(o().mark((function i(){var s,c,u,m;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,s=[(0,a.Xo)(n,"asc")],r>0&&s.push((0,a.b9)(r)),c=(0,a.hJ)(l.db,e),u=t||a.IO.apply(void 0,[c].concat(f(s))),o.next=7,(0,a.PL)(u);case 7:m=o.sent,y.current&&(d(m.docs.map((function(e){return p({},e.data())}))),g(!1)),o.next=15;break;case 11:o.prev=11,o.t0=o.catch(0),x(o.t0.message),g(!1);case 15:case"end":return o.stop()}}),i,null,[[0,11]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return y.current=!1}}),[e,n,t,r]),{documents:c,loading:v,error:b}}function g(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=(0,i.useState)([]),c=s[0],d=s[1],f=(0,i.useState)(!0),m=f[0],v=f[1],g=(0,i.useState)(""),h=g[0],b=g[1],x=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var i=function(){var i=u(o().mark((function i(){var s,c;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,s=(0,a.IO)((0,a.hJ)(l.db,e,n,t),(0,a.Xo)(r)),o.next=4,(0,a.PL)(s);case 4:c=o.sent,x.current&&(d(c.docs.map((function(e){return p({},e.data())}))),v(!1)),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(0),b(o.t0.message),v(!1);case 12:case"end":return o.stop()}}),i,null,[[0,8]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return x.current=!1}}),[e,n,t,r]),{documents:c,loading:m,error:h}}function h(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4?arguments[4]:void 0,c=(0,i.useState)([]),d=c[0],f=c[1],m=(0,i.useState)(!0),v=m[0],g=m[1],h=(0,i.useState)(""),b=h[0],x=h[1],y=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var i=function(){var i=u(o().mark((function i(){var c,u;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,c=(0,a.hJ)(l.db,e,n,t),""!==r&&(c=(0,a.IO)(c,(0,a.Xo)(r))),s&&(c=(0,a.IO)(c,(0,a.b9)(s))),o.next=6,(0,a.PL)(c);case 6:u=o.sent,y.current&&(f(u.docs.map((function(e){return p({},e.data())}))),g(!1)),o.next=14;break;case 10:o.prev=10,o.t0=o.catch(0),x(o.t0.message),g(!1);case 14:case"end":return o.stop()}}),i,null,[[0,10]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return y.current=!1}}),[e,n,t,r,s]),{documents:d,loading:v,error:b}}}},function(e){e.O(0,[5778,3593,9964,8858,1903,6279,542,7944,6295,6572,1050,2044,6619,1855,3622,9774,2888,179],(function(){return n=40108,e(e.s=n);var n}));var n=e.O();_N_E=n}]);