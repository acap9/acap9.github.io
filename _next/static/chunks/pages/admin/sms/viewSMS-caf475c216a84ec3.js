(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8226],{5835:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sms/viewSMS",function(){return t(64114)}])},38554:function(e,n){"use strict";n.Z={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"48px"}},container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},tabsContainer:{marginTop:function(e){return e.spacing(8)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"800px",borderRadius:"8px",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},customizedButtonLink:{cursor:"pointer",color:"#8BC24A",textDecoration:"underline",fontWeight:600}}},64114:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return pe}});var r=t(34051),o=t.n(r),i=t(85893),c=t(67294),a=t(11163),u=t(95243),s=t(87006),l=t(40558),f=t(66383),d=t(47426),p=t(77715),h=t(87357),m=t(15861),b=t(56863),v=t(11057),y=t(67720),x=t(86886),g=t(27948),j=t(82280),O=t(38895),w=t(22797),S=t(23508),k=t(36872),C=t(50480),T=t(94054),P=t(68061),E=t(98396),_=t(9669),R=t.n(_),Z=t(99431);function N(e,n,t,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,o)}function B(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function D(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}function z(e,n){return!n||"object"!==M(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function I(e,n){return I=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},I(e,n)}var M=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function q(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=A(e);if(n){var o=A(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return z(this,t)}}var W={BASE_API_URL:"https://amia-cis-9aoz.onrender.com/api",SEND_SMS_RECOMMENDATIONS:"".concat("https://amia-cis-9aoz.onrender.com/api","/send")},X=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&I(e,n)}(c,e);var n,t,r,i=q(c);function c(){return B(this,c),i.apply(this,arguments)}return n=c,t=[{key:"sendSMS",value:function(e){var n,t=this;return(n=o().mark((function n(){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({body:e});case 2:return r=n.sent,n.next=5,R()(L({},r,{url:W.SEND_SMS_RECOMMENDATIONS,method:"POST"}));case 5:return i=n.sent,n.abrupt("return",i.data);case 7:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function c(e){N(i,r,o,c,a,"next",e)}function a(e){N(i,r,o,c,a,"throw",e)}c(void 0)}))})()}}],t&&D(n.prototype,t),r&&D(n,r),c}(Z.Z),G=new X,H=G.sendSMS.bind(G),K=t(16759),U=t(37634),V=t(19227),Q=t(27392),Y=t(38199),J=t(38554),$=t(77841),ee=t(69437),ne=t(15799),te=t(71927);function re(e,n,t,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,o)}function oe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){oe(e,n,t[n])}))}return e}var ce=(0,ne.Z)();ce.typography.h5=oe({fontSize:"1.2rem","@media (min-width:600px)":{fontSize:"1.5rem"}},ce.breakpoints.up("md"),{fontSize:"2rem"});var ae=function(e){var n=e.contacts,t=e.contactsState,r=e.onBackBtnClick,u=e.report,s=e.setReport,l=e.loading,f=(0,c.useState)(null),d=f[0],p=f[1],_=(0,c.useState)(null),R=_[0],Z=_[1],N=(0,c.useState)([]),B=N[0],D=N[1],F=(0,a.useRouter)(),A=(0,ee.Z)(u,[Y.X3.REGION,Y.X3.TYPE,Y.X3.UID,Y.X3.ID]).fieldValues;(0,c.useEffect)((function(){0!==n.length&&z(n.filter((function(e){return e.subscribed_crops.includes(u.crop)})))}),[n,u.crop,z]);var L,z=(0,c.useCallback)((function(e){var n=e.reduce((function(e,n){return e[n.province]||(e[n.province]={}),e[n.province][n.municipality]||(e[n.province][n.municipality]=[]),n.subscribed_crops.includes(u.crop)&&e[n.province][n.municipality].push(n),e}),{});Z(n)}),[u.crop,Z]),I=(0,E.Z)(ce.breakpoints.between("xs","md")),M=function(){var e,t=(e=o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==u.info){e.next=17;break}return s(ie({},u,{sending:!0})),t=[],r=[],B.map((function(e){var o=n.find((function(n){return n.cellnumber===e}));o?(t.push(o.cellnumber),r.push(""===o.name?o.cellnumber:o.name)):t.push(e)})),e.prev=5,e.next=8,H({docId:u.id,recipientsNumber:t.toString(),message:u.smsRecommendations,currentSmsLogs:(null===u||void 0===u?void 0:u.logs)?u.logs:[],recipientsWithName:r.toString()});case 8:s((function(e){return ie({},e,{sending:!1,info:"Crop Recommendation sent."})})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),F.push({pathname:"/admin/sms/",query:{isSent:!1}},"/admin/sms/"),console.error(e.t0.message);case 15:e.next=18;break;case 17:F.push({pathname:"/admin/sms/"});case 18:case"end":return e.stop()}}),e,null,[[5,11]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){re(i,r,o,c,a,"next",e)}function a(e){re(i,r,o,c,a,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}(),q=function(){F.push({pathname:"/admin/sms/",query:{toAddContact:!0}},"/admin/sms/")};return(0,i.jsx)("div",{children:l||u.loading?(0,i.jsx)(K.Z,{}):void 0!==u.stages?(0,i.jsxs)(h.Z,{container:!0,sx:J.Z.container,children:[(0,i.jsxs)(h.Z,{sx:{marginBottom:"32px",display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)(te.Z,{theme:ce,children:(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(m.Z,{variant:"h5",children:"Send Text-Form Crop Recommendation"}),(0,i.jsx)(m.Z,{variant:"h6",children:Q.eT[u.type]})]})}),(0,i.jsxs)(b.Z,{orientation:I?"vertical":"horizontal",children:[(0,i.jsx)(v.Z,{disableElevation:!0,variant:"outlined",color:"primary",sx:ie({},J.Z.button,{color:function(e){return e.palette.primary.main},borderTopRightRadius:0,borderBottomRightRadius:0}),onClick:r,children:"Back"}),(0,i.jsx)(V.Z,{isDisabled:0===B.length||void 0===(null===u||void 0===u?void 0:u.smsRecommendations),isOpen:!1,maxWidth:"sm",openButtonText:"Send",title:"Send Crop Recommendation",contentText:""!==u.info?u.info:"Sending this allows your contacts to receive the Text-Form Crop Recommendation on their cellphone numbers as text.",confirmBtnText:""!==u.info?"Ok":"Send",modalConfirmHandlerCB:M,loading:u.sending,modalButtonStyles:{borderTopLeftRadius:0,borderBottomLeftRadius:0,width:"80px"}})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)(h.Z,{sx:$.Z.details,children:[A.map((function(e){return(0,i.jsx)("div",{children:(0,i.jsxs)(m.Z,{variant:"body2",children:[(0,i.jsxs)("strong",{children:[null===e||void 0===e?void 0:e.label,": "]})," ",null!==(L=null===e||void 0===e?void 0:e.value)&&void 0!==L?L:"-"]})},e.id)})),(0,i.jsxs)(m.Z,{variant:"caption",children:[(0,i.jsx)("strong",{children:"ID:"})," ",u.id]})]}),(0,i.jsx)(y.Z,{sx:{marginTop:"32px"}})]}),(0,i.jsxs)(x.ZP,{container:!0,style:{paddingTop:"10px"},children:[(0,i.jsxs)(x.ZP,{item:!0,xs:12,md:5,children:[(0,i.jsx)(m.Z,{variant:"h6",children:"Text-Form Crop Recommendation"}),(0,i.jsx)(g.Z,{children:(null===u||void 0===u?void 0:u.smsRecommendations)||(0,i.jsx)("span",{style:{color:"#ff1744"},children:"No SMS Recommendations available."})})]}),(0,i.jsxs)(x.ZP,{item:!0,xs:12,md:7,children:[(0,i.jsx)(m.Z,{variant:"h6",children:"List of Contacts"}),t.loading?(0,i.jsx)("div",{children:"Loading phonebook..."}):""!==t.error?(0,i.jsx)("div",{children:t.error}):n.length>0?(0,i.jsxs)("div",{children:[(0,i.jsx)(h.Z,{children:(0,i.jsxs)(m.Z,{variant:"body2",children:["These are your contacts that you can send the recommendation thru SMS.",(0,i.jsx)("br",{}),"Need to change some of your contacts? Click"," ",(0,i.jsx)("span",{onClick:q,style:J.Z.customizedButtonLink,children:"here"}),"."]})}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{children:R&&Object.keys(R).sort().map((function(e,n){return(0,i.jsxs)(j.Z,{children:[(0,i.jsx)(O.Z,{expandIcon:(0,i.jsx)(S.Z,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e}),(0,i.jsx)(w.Z,{children:Object.keys(R[e]).sort().map((function(n){return(0,i.jsx)(T.Z,{children:(0,i.jsx)(P.Z,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",value:d,onChange:function(e){return p(e.target.value)},children:(0,i.jsx)(C.Z,{onClick:function(t){return function(e,n,t){var r=e.target.checked?t:null;if(r){p(r);var o=R[n][t].map((function(e){return e.cellnumber}));D(o)}}(t,e,n)},control:(0,i.jsx)(k.Z,{}),label:n,value:n})})},n)}))})]},n)}))})]}):(0,i.jsx)("div",{children:(0,i.jsxs)(m.Z,{variant:"subtitle1",children:["No contacts yet. Please add contacts first in your Phonebook\xa0",(0,i.jsx)("span",{onClick:q,style:J.Z.customizedButtonLink,children:"here"}),"."]})})]})]})]}):(0,i.jsx)(U.Z,{})})};function ue(e,n,t,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,o)}function se(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){ue(i,r,o,c,a,"next",e)}function a(e){ue(i,r,o,c,a,"throw",e)}c(void 0)}))}}function le(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){le(e,n,t[n])}))}return e}var de={loading:!0,error:"",info:"",sending:!1};var pe=(0,u.Z)((function(e){var n=(0,c.useState)(de),t=n[0],r=n[1],u=(0,c.useState)(de),h=u[0],m=u[1],b=(0,c.useState)([]),v=b[0],y=b[1],x=(0,a.useRouter)();return(0,c.useEffect)((function(){if(t.loading&&Object.keys(x.query).length>0&&null!==e.user){var n=function(){var e=se(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.QL)(x.query.docId);case 3:n=e.sent,t=n.date_created.toDate(),n.date_created="".concat(t.toDateString()," ").concat(t.toLocaleTimeString("it-IT",p.W6)),r((function(e){return fe({},e,{loading:!1},n)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r(fe({},de,{loading:!1,error:e.t0.message}));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=se(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(fe({},de,{loading:!0})),e.next=4,(0,l.K2)();case 4:n=e.sent,y((function(e){return n})),m((function(e){return fe({},e,{loading:!1})})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),r((function(n){return fe({},de,{loading:!1,error:e.t0.message})})),m((function(n){return fe({},de,{loading:!1,error:e.t0.message})}));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();n(),i()}}),[x,t.loading,e.user]),(0,i.jsx)(f.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:d.DW.ADMIN,children:(0,i.jsx)(ae,{setReport:r,report:t,loading:e.loading,contacts:v,contactsState:h,onBackBtnClick:function(){x.push("/admin/sms/")}})})}))},40558:function(e,n,t){"use strict";t.d(n,{rE:function(){return O},GK:function(){return w},mP:function(){return S},K2:function(){return k}});var r=t(34051),o=t.n(r),i=t(9669),c=t.n(i),a=t(99431);function u(e,n,t,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){u(i,r,o,c,a,"next",e)}function a(e){u(i,r,o,c,a,"throw",e)}c(void 0)}))}}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}function m(e,n){return!n||"object"!==v(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function b(e,n){return b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},b(e,n)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function y(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return m(this,t)}}var x={BASE_API_URL:"https://amia-cis-9aoz.onrender.com/api",CREATE_CONTACT:"".concat("https://amia-cis-9aoz.onrender.com/api","/contact"),DELETE_CONTACT:"".concat("https://amia-cis-9aoz.onrender.com/api","/contact"),EDIT_CONTACT:"".concat("https://amia-cis-9aoz.onrender.com/api","/contact"),GET_CONTACTS:"".concat("https://amia-cis-9aoz.onrender.com/api","/contacts"),PHONEBOOK:"phonebook"},g=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(a,e);var n,t,r,i=y(a);function a(){return l(this,a),i.apply(this,arguments)}return n=a,(t=[{key:"createContact",value:function(e){var n=this;return s(o().mark((function t(){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,c()(h({},r,{url:x.CREATE_CONTACT,method:"POST"}));case 5:return i=t.sent,t.abrupt("return",i.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"deleteContact",value:function(e){var n=this;return s(o().mark((function t(){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,c()(h({},r,{url:x.DELETE_CONTACT,method:"DELETE"}));case 5:return i=t.sent,t.abrupt("return",i.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"editContact",value:function(e){var n=this;return s(o().mark((function t(){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,c()(h({},r,{url:x.EDIT_CONTACT,method:"PATCH"}));case 5:return i=t.sent,t.abrupt("return",i.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"getContacts",value:function(){var e=this;return s(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.createRequestObject({});case 2:return t=n.sent,n.next=5,c()(h({},t,{url:x.GET_CONTACTS,method:"GET"}));case 5:return r=n.sent,n.abrupt("return",r.data.contacts);case 7:case"end":return n.stop()}}),n)})))()}}])&&f(n.prototype,t),r&&f(n,r),a}(a.Z),j=new g,O=j.createContact.bind(j),w=j.deleteContact.bind(j),S=j.editContact.bind(j),k=j.getContacts.bind(j)}},function(e){e.O(0,[5778,3593,9964,8858,6279,542,7944,2719,3074,4379,1050,2774,9774,2888,179],(function(){return n=5835,e(e.s=n);var n}));var n=e.O();_N_E=n}]);