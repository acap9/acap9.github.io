(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1798],{19859:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/weather-services",function(){return t(32136)}])},43370:function(e,n,t){"use strict";var a=t(85893),r=t(9008),i=t(47426);n.Z=function(e){var n=e.title,t=e.ogImageURL,o=void 0===t?"https://firebasestorage.googleapis.com/v0/b/acap-r9.appspot.com/o/da-rfo5-logo.png?alt=media&token=db301a09-8ce8-470a-8e4b-d7ff1104b340":t,s=e.ogImgAlt,c=void 0===s?"Picture":s,l=e.ogSiteName,d=void 0===l?"ACAP-".concat(i.Gt.toUpperCase()):l,u=e.ogURL,p=e.canonicalURL,x=void 0===p?"http://localhost":p;return(0,a.jsxs)(r.default,{children:[(0,a.jsx)("meta",{name:"description",content:"Agro-Climatic Advisory Portal-Zampen (ACAP-Zampen) serves as a centralized hub for the development of Climate Information Services (CIS) in Zamboanga Peninsula Region. It contains relevant weather and climate information which can be used in developing tailored advisories and crop recommendations."}),(0,a.jsx)("meta",{name:"og:description",content:"Agro-Climatic Advisory Portal-Zampen (ACAP-Zampen) serves as a centralized hub for the development of Climate Information Services (CIS) in Zamboanga Peninsula Region. It contains relevant weather and climate information which can be used in developing tailored advisories and crop recommendations."}),(0,a.jsx)("meta",{property:"og:title",content:n}),(0,a.jsx)("meta",{rel:"canonical",href:x}),(0,a.jsx)("meta",{property:"og:site_name",content:d}),(0,a.jsx)("meta",{property:"og:image",content:o}),(0,a.jsx)("meta",{property:"og:image:width",content:"600"}),(0,a.jsx)("meta",{property:"og:image:height",content:"315"}),(0,a.jsx)("meta",{property:"og:image:alt",content:c}),(0,a.jsx)("meta",{property:"og:url",content:u}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:n}),(0,a.jsx)("meta",{name:"twitter:image",content:o}),(0,a.jsx)("title",{children:n})]})}},27840:function(e,n,t){"use strict";var a=t(85893),r=t(15861);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=(0,t(11496).ZP)((function(e){return(0,a.jsx)(r.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({component:"p",variant:"caption"},e))}))((function(e){var n=e.theme;return{color:n.palette.text.secondary,"& a":{color:n.palette.green.dark,textDecoration:"none"},"& a:visited":{color:n.palette.green.dark},"& a:hover, span:hover":{textDecoration:"underline"}}}));n.Z=o},6629:function(e,n,t){"use strict";t.d(n,{e:function(){return a}});var a=["Akbar","Al-Barka","Hadji Mohammad Ajul","Lantawan","Maluso","Sumisip","Tipo-Tipo","Tuburan","Ungkaya Pukan","Lamitan City"]},1902:function(e,n,t){"use strict";t.d(n,{J4:function(){return a},Y1:function(){return r},Sx:function(){return i}});var a=[{icon:"cc_sunny_49.svg",label:"No rain",nowrap:!0},{icon:"rainfall_light_rain_49.svg",label:"Light rain"},{icon:"rainfall_moderate_rain_49.svg",label:"Moderate rain"},{icon:"rainfall_heavy_rain_49.svg",label:"Heavy rain"},{icon:"blank_weather.png",label:"Heavy rain",hidden:!0}],r=[{icon:"cc_sunny_49.svg",label:"Sunny"},{icon:"cc_mostly_sunny_49.svg",label:"Mostly sunny"},{icon:"cc_partly_cloudy_49.svg",label:"Partly cloudy"},{icon:"cc_mostly_cloudy_49.svg",label:"Mostly cloudy"},{icon:"cc_cloudy_49.svg",label:"Cloudy"}],i={rainfall:{"NO RAIN":"cc_sunny_49.svg","LIGHT RAINS":"rainfall_light_rain_49.svg","MODERATE RAINS":"rainfall_moderate_rain_49.svg","HEAVY RAINS":"rainfall_heavy_rain_49.svg"},cloudCover:{SUNNY:"cc_sunny_49.svg","MOSTLY SUNNY":"cc_mostly_sunny_49.svg","PARTLY CLOUDY":"cc_partly_cloudy_49.svg","MOSTLY CLOUDY":"cc_mostly_cloudy_49.svg",CLOUDY:"cc_cloudy_49.svg"}}},32136:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return Ae},default:function(){return Ce}});var a=t(85893),r=t(67294),i=t(9473),o=t(4936),s=t(15861),c=t(34051),l=t.n(c),d=t(901),u=t(76295),p=t(87357),x=t(66242),h=t(98456),f=t(86886),m=t(61903),g=t(25675),y=t(26660),b=t(63365),j=t(48038),v=t(1902),w={daily:{width:"104px",minWidth:"104px",minHeight:"104px",backgroundColor:"#78b8c2",display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"2px",marginBottom:"10px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-day":{margin:"4px 0 4px 0"},"& .temp-label":{height:"12px",display:"flex",justifyContent:"space-between",fontSize:"12px",margin:"4px"},"& .temp-weather-icons":{backgroundColor:"#fff",paddingTop:"8px"}}},S=t(77715);function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Z=function(e){var n,t=e.dailyweather,r=function(e){return e[0]+e.substring(1).toLowerCase()},i=function(e){return Math.round(100*(e+Number.EPSILON))/100},o=void 0!==v.Sx.rainfall[t.rainfall]?"images/icons/weather/".concat(v.Sx.rainfall[t.rainfall]):"images/icons/weather/blank_weather.png",s=void 0!==v.Sx.cloudCover[t.cover]?"images/icons/weather/".concat(v.Sx.cloudCover[t.cover]):"images/icons/weather/blank_weather.png",c="#0F2027",l="-webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027)",d="linear-gradient(to bottom, #2C5364, #203A43, #0F2027)";return(0,a.jsxs)(p.Z,{sx:w.daily,style:{backgroundColor:(0,S.fq)()==t.day?"#18606b":"",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.1)",color:(0,S.fq)()==t.day?"floralwhite":"",display:"flex"},children:[(0,a.jsxs)(p.Z,{sx:{padding:0},children:[(0,a.jsxs)("div",{className:"temp-day",children:[t.day," "]}),(0,a.jsxs)("div",{className:"temp-weather-icons",style:(n={background:(0,S.fq)()==t.day?c:""},_(n,"background",(0,S.fq)()==t.day?l:""),_(n,"background",(0,S.fq)()==t.day?d:""),n),children:[(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,a.jsxs)("span",{style:{fontSize:"9px",color:(0,S.fq)()==t.day?"floralwhite":""},children:[" ",r(t.rainfall)]}),(0,a.jsx)(g.default,{unoptimized:!0,src:(0,y.assetPrefixer)(o),height:45,width:45,loader:y.imageLoader,alt:t.day})]}),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,a.jsx)(g.default,{unoptimized:!0,src:(0,y.assetPrefixer)(s),height:45,width:45,loader:y.imageLoader,alt:t.day}),(0,a.jsxs)("span",{style:{fontSize:"9px",color:(0,S.fq)()==t.day?"floralwhite":""},children:[" ",r(t.cover)]})]})]})]}),(0,a.jsxs)(p.Z,{style:{backgroundColor:(0,S.fq)()==t.day?"#102229":"floralwhite",padding:"5px",paddingTop:"15px"},children:[(0,a.jsxs)("div",{className:"temp-label",style:{justifyContent:"flex-start",alignContent:"center",alignItems:"center"},children:[(0,a.jsx)(b.Z,{fontSize:"12px"})," ",(0,a.jsx)("span",{children:" Temperature"})]}),(0,a.jsxs)("div",{className:"temp-label",children:[(0,a.jsx)("div",{style:{color:(0,S.fq)()==t.day?"floralwhite":"#1ab827"},children:(0,a.jsx)("span",{style:{fontSize:"8px"},children:" Average "})}),(0,a.jsx)("div",{style:{color:(0,S.fq)()==t.day?"#8dc5f0":"#2cabf5"},children:(0,a.jsxs)("span",{style:{fontSize:"10px"},children:["  ",i(t.temp_avg),"  ",(0,a.jsx)("span",{style:{fontSize:"7px"},children:"\xb0C "})," "]})})]}),(0,a.jsxs)("div",{className:"temp-label",children:[(0,a.jsx)("div",{style:{color:(0,S.fq)()==t.day?"floralwhite":"#1ab827"},children:(0,a.jsx)("span",{style:{fontSize:"8px"},children:" Max "})}),(0,a.jsx)("div",{style:{color:(0,S.fq)()==t.day?"#8dc5f0":"#2cabf5"},children:(0,a.jsxs)("span",{style:{fontSize:"10px"},children:[" ",i(t.temp_max),"  ",(0,a.jsx)("span",{style:{fontSize:"7px"},children:"\xb0C "})," "]})})]}),(0,a.jsxs)("div",{className:"temp-label",children:[(0,a.jsx)("div",{style:{color:(0,S.fq)()==t.day?"floralwhite":"#1ab827"},children:(0,a.jsx)("span",{style:{fontSize:"8px"},children:" Min "})}),(0,a.jsx)("div",{style:{color:(0,S.fq)()==t.day?"#8dc5f0":"#2cabf5"},children:(0,a.jsxs)("span",{style:{fontSize:"10px"},children:["  ",i(t.temp_min),"  ",(0,a.jsx)("span",{style:{fontSize:"7px"},children:"\xb0C "})," "]})})]})]}),(0,a.jsxs)(p.Z,{style:{backgroundColor:(0,S.fq)()==t.day?"#102229":"floralwhite",padding:"5px"},children:[(0,a.jsxs)("div",{className:"temp-label",style:{justifyContent:"flex-start",alignContent:"center",alignItems:"center"},children:[(0,a.jsx)(j.Z,{fontSize:"12px"})," ",(0,a.jsx)("span",{children:"  Wind"})]}),(0,a.jsxs)("div",{className:"temp-label",children:[(0,a.jsx)("div",{style:{color:(0,S.fq)()==t.day?"floralwhite":"#1ab827"},children:(0,a.jsx)("span",{style:{fontSize:"8px"},children:" Wind Speed "})}),(0,a.jsx)("div",{style:{color:(0,S.fq)()==t.day?"#8dc5f0":"#2cabf5"},children:(0,a.jsxs)("span",{style:{fontSize:"10px"},children:["  ",i(t.wspeed),(0,a.jsx)("span",{style:{fontSize:"6px"},children:"mps "})]})})]}),(0,a.jsxs)("div",{className:"temp-label",children:[(0,a.jsx)("div",{style:{color:(0,S.fq)()==t.day?"floralwhite":"#1ab827"},children:(0,a.jsx)("span",{style:{fontSize:"8px"},children:" Wind Direction "})}),(0,a.jsx)("div",{style:{color:(0,S.fq)()==t.day?"#8dc5f0":"#2cabf5"},children:(0,a.jsxs)("span",{style:{fontSize:"10px"},children:["  ",t.wdirection]})})]})]})]})},A=t(37634),C=t(27840),O=t(11427),L={titleContainer:{display:"flex",alignItems:"center",height:"inherit","& h6":{marginBottom:{xs:"auto",sm:"unset"}}},iconCard:{padding:"2px 6px 2px 6px",borderRadius:1,height:"100%",width:"62px",margin:{xs:"2px",xs2:"4px"},display:"flex",flexDirection:"column",textAlign:"center","& span":{lineHeight:"initial",fontSize:"11px"}},cardsContainer:{display:"flex",height:"78px"},imgContainer:{margin:"auto",marginTop:{xs:"inherit",sm:0},marginBottom:{xs:"inherit",sm:0},height:{xs:"30px",sm:"45px"},width:{xs:"30px",sm:"45px"}}};var P=function(e){var n=e.sideTitle,t=void 0===n?"":n,r=e.legendsData;return(0,a.jsxs)(f.ZP,{container:!0,gap:0,sx:{width:"100%",marginTop:"16px"},children:[(0,a.jsx)(f.ZP,{item:!0,sx:L.titleContainer,xs:12,lg:2,children:(0,a.jsx)(s.Z,{variant:"subtitle2",children:t})}),(0,a.jsx)(f.ZP,{xs:12,item:!0,lg:10,sx:L.cardsContainer,children:r.map((function(e,n){return(0,a.jsxs)(O.Z,{sx:L.iconCard,style:{visibility:e.hidden?"hidden":"visible"},children:[(0,a.jsx)(p.Z,{sx:L.imgContainer,children:(0,a.jsx)(g.default,{unoptimized:!0,src:(0,y.assetPrefixer)("images/icons/weather/".concat(e.icon)),height:45,width:45,loader:y.imageLoader,alt:e.label})}),(0,a.jsx)("span",{style:{whiteSpace:e.nowrap?"nowrap":"normal"},children:e.label})]},n)}))})]})},T={wrapper:{marginTop:function(e){return e.spacing(8)},marginBottom:function(e){return e.spacing(12)}},card:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minHeight:"390px",minWidth:{xs:"200px",sm:"500px"},marginTop:function(e){return e.spacing(3)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5, h6":{marginBottom:function(e){return e.spacing(2)}}},autocomplete:{maxWidth:"100%",marginTop:function(e){return e.spacing(1)}},autoMuni:{marginTop:function(e){return e.spacing(2)}},info:{minWidth:"285px",minHeight:"90px",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}}},E=t(6629);function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){N(e,n,t[n])}))}return e}var D=function(e){var n=e.weather,t=e.onSelectItemChange,o=(0,i.v9)((function(e){return e.provinces})),c=(0,i.v9)((function(e){return e.municipalities})),l=(0,i.v9)((function(e){return e.tendayweather})),g=(0,r.useState)(!0),y=g[0],b=g[1],j=(0,r.useState)(!1),w=j[0],S=j[1];return(0,r.useEffect)((function(){var e=o.status!==d.G.FULLFILLED||l.status!==d.G.FULLFILLED;""===o.error&&""===l.error||S(!0),b(e)}),[o.status,l.status,o.error,l.error]),(0,a.jsxs)(p.Z,{sx:T.wrapper,id:"contents-tenday-forecast",children:[(0,a.jsx)(s.Z,{variant:"h4",children:"10-Day Weather Forecast"}),(0,a.jsxs)(x.Z,{variant:"outlined",sx:T.card,style:{backgroundColor:"rgba(255, 255, 255, 0.5)"},children:[(0,a.jsxs)(f.ZP,{container:!0,maxWidth:"lg",spacing:4,alignItems:"bottom",children:[(0,a.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,a.jsxs)(p.Z,{children:[(0,a.jsx)(s.Z,{variant:"h6",children:"Location Selector"}),(0,a.jsx)(u.Z,{disablePortal:!0,id:"province",value:o.province,disabled:0===o.ids.length||y,options:Object.values(o.entities),size:"small",renderInput:function(e){return(0,a.jsx)(m.Z,k({},e,{label:null===o.province?"Select a province":"Province"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return t(e,k({},n,{from:"province"}))}}),(0,a.jsx)(u.Z,{disablePortal:!0,id:"municipality",value:c.municipality,disabled:0===c.ids.length||y,options:Object.values(c.entities).filter((function(e){return!E.e.includes(e.label)})),sx:T.autoMuni,size:"small",renderInput:function(e){return(0,a.jsx)(m.Z,k({},e,{label:null===c.municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},getOptionDisabled:function(e){return void 0!==e.iscalendar},onChange:function(e,n){return t(e,k({},n,{from:"municipality"}))}})]})}),(0,a.jsx)(f.ZP,{item:!0,xs:12,md:3,children:(0,a.jsxs)(p.Z,{children:[(0,a.jsx)(s.Z,{variant:"h6",children:"Data Overview"}),!y&&!w&&(0,a.jsxs)(C.Z,{children:[(0,a.jsx)("strong",{children:"Synced by:"}),"\xa0"," ",l.currentLogs.updated_by,(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:"Valid Until:"}),"\xa0"," ",l.currentLogs.date_valid,(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:"Date of Forecast:"}),"\xa0"," ",l.currentLogs.date_forecast,(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:"Date synced:"}),"\xa0"," ",l.currentLogs.date_synced,(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Synced from PAGASA's"," ",(0,a.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",target:"_blank",rel:"noreferrer",children:"10-Day Climate Forecast"})," ","spreadsheet files by"," ","system"===l.currentLogs.updated_by?"":"an"," ",l.currentLogs.updated_by," on"," ",l.currentLogs.date_synced]})]})}),(0,a.jsxs)(f.ZP,{item:!0,xs:12,md:5,children:[(0,a.jsx)(P,{sideTitle:"Rainfall Intensity",legendsData:v.J4}),(0,a.jsx)(P,{sideTitle:"Cloud Cover",legendsData:v.Y1})]})]}),(0,a.jsx)(f.ZP,{container:!0,maxWidth:"lg",sx:{marginTop:"32px"},children:y&&!w?(0,a.jsxs)(p.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1},children:[(0,a.jsx)(h.Z,{size:32}),(0,a.jsx)(s.Z,{variant:"caption",children:"Loading municipalities..."})]}):w?(0,a.jsx)(A.Z,{}):n.map((function(e,n){return(0,a.jsx)(Z,{dailyweather:e},"dw-".concat(n))}))})]})]})},I=t(18217),M=t(23549),R=t(56867);function z(e,n,t,a,r,i,o){try{var s=e[i](o),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(a,r)}var U=function(){var e=(0,i.v9)((function(e){return e.provinces})),n=e.ids,t=e.entities,o=e.municipalities,s=e.province,c=(0,i.v9)((function(e){return e.municipalities})).municipality,u=(0,i.v9)((function(e){return e.tendayweather})),p=u.ids,x=u.entities,h=u.status,f=(0,r.useState)([]),m=f[0],g=f[1],y=(0,r.useState)(!1),b=y[0],j=y[1],v=(0,i.I0)();(0,r.useEffect)((function(){v((0,I.QA)(null))}),[v]),(0,r.useEffect)((function(){n.length>0&&(v((0,M.Wn)(Object.values(t)[0])),v((0,R.R)(Object.values(t)[0].label)).unwrap().then((function(){j(!0)})))}),[v,n,t]),(0,r.useEffect)((function(){if(p.length>0&&h===d.G.FULLFILLED&&b&&null!==s){var e=null,n=Object.keys(o).find((function(e){return e===s.label}));n&&o[n].length>0&&(e=o[n][0]),v((0,I.X4)(o[s.label]||[])),v((0,I.QA)(e))}}),[v,p,x,h,b,o,s]),(0,r.useEffect)((function(){if(null!==c&&b){var e=Object.values(x).find((function(e){return e.municipality===c.label}));e&&g(JSON.parse(e.data).map((function(e){return{day:e.day_format,temp_avg:e.tmean,temp_min:e.tmin,temp_max:e.tmax,wspeed:e.wspeed,wdirection:e.wdirection,rainfall:e.rainfall,cover:e.cover}})))}}),[v,c,x,h,b]);var w=function(){var e,n=(e=l().mark((function e(n,t){var a,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.label,r=t.from,!a){e.next=14;break}e.t0=r,e.next="province"===e.t0?5:"municipality"===e.t0?9:11;break;case 5:return v((0,M.Wn)(t)),v((0,R.R)(a)),v((0,I.X4)([])),e.abrupt("break",12);case 9:return v((0,I.QA)({id:t.id,label:t.label,iscalendar:t.iscalendar})),e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:e.next=25;break;case 14:e.t1=r,e.next="province"===e.t1?17:"municipality"===e.t1?21:24;break;case 17:return v((0,M.jg)()),v((0,I.X4)([])),g([]),e.abrupt("break",25);case 21:return v((0,I.QA)(null)),g([]),e.abrupt("break",25);case 24:return e.abrupt("break",25);case 25:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function o(e){z(i,a,r,o,s,"next",e)}function s(e){z(i,a,r,o,s,"throw",e)}o(void 0)}))});return function(e,t){return n.apply(this,arguments)}}();return(0,a.jsx)(D,{weather:m,onSelectItemChange:w})},W=t(96399),F=t(88078),B={wrapper:{marginTop:function(e){return e.spacing(10)}},container:{padding:function(e){return e.spacing(2)},paddingTop:function(e){return e.spacing(2)},marginBottom:function(e){return e.spacing(4)},display:"flex",flexDirection:{xs:"column",sm:"row"}}};var q=function(e){var n=e.typhoon,t=void 0===n?null:n,r=e.loading;return(0,a.jsx)(p.Z,{sx:B.wrapper,children:r?(0,a.jsxs)(f.ZP,{container:!0,maxWidth:"lg",sx:B.container,spacing:4,children:[(0,a.jsx)(f.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(F.Z,{animation:"wave",variant:"rectangular",height:200,sx:{minWidth:"200px"}})}),(0,a.jsxs)(f.ZP,{item:!0,xs:12,md:6,children:[[1,2,3,4,5].map((function(e){return(0,a.jsx)(F.Z,{animation:"wave",style:{marginBottom:6}},"pattern-".concat(e))})),(0,a.jsx)(F.Z,{animation:"wave",width:"80%"})]}),(0,a.jsx)(f.ZP,{item:!0,xs:12,md:3})]}):null!==t?(0,a.jsxs)(f.ZP,{container:!0,maxWidth:"lg",sx:B.container,spacing:4,children:[(0,a.jsx)(f.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(g.default,{unoptimized:!0,src:t.img,height:273,width:600,loader:y.imageLoader,alt:"El Ni\xf1o / La Ni\xf1a Monitoring"})}),(0,a.jsxs)(f.ZP,{item:!0,xs:12,md:6,children:[(0,a.jsx)(s.Z,{variant:"h5",children:"El Ni\xf1o / La Ni\xf1a Monitoring"}),(0,a.jsx)("p",{children:t.description}),(0,a.jsxs)(C.Z,{children:["Captured from PAGASA's ",(0,a.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/el-nino-la-nina/monitoring",target:"_blank",rel:"noreferrer",children:"El Ni\xf1o / La Ni\xf1a Monitoring"})," web page",(0,a.jsx)("br",{}),"by ",t.updated_by," on \xa0",(0,S.Xn)(t.date_updated),(0,a.jsx)("br",{}),(0,a.jsxs)("i",{children:[(0,a.jsx)("strong",{children:"Note:"})," The information displayed above is only every Sunday."]})]})]})]}):(0,a.jsx)(A.Z,{})})},H=t(87682),G=t(30560),Y=t(22332),X=t(72882),V=t(7906),Q=t(53184),K=t(295),J=t(53816),$=t(53252),ee=t(89646),ne=t(45238),te=t(47426),ae={container:{marginBottom:"40px",paddingTop:"8px",fontSize:"14px"},tablecontainer:{border:function(e){return"1px solid ".concat(e.palette.bacap.border)},borderRadius:function(e){return e.spacing(1)},boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},table:{width:"100%","& tr":{borderBottom:function(e){return"1px solid ".concat(e.palette.bacap.border)}},"& tr:last-child":{borderBottom:"none"},"& td":{padding:"10px",textAlign:"center",borderLeft:function(e){return"1px solid ".concat(e.palette.bacap.border)}},"& td:first-child":{borderLeft:"none"}},tableRowHeader:{"& th, td":{fontSize:"12px",textAlign:"center",lineHeight:function(e){return e.spacing(2)},padding:"2px",fontWeight:500,borderTop:"none"}},miscsystems:{fontSize:"12px"},border:{borderRight:function(e){return"1px solid ".concat(e.palette.bacap.border)}},itemList:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},tcs:{backgroundColor:"#78B8C2"},drydays:{backgroundColor:"#1D353D",color:"floralwhite"}};var re=function(e){var n=e.weathersystems,t=e.tableData,r=e.monthHeaders,i=e.updatedBy;return(0,a.jsx)(f.ZP,{container:!0,spacing:2,sx:ae.container,children:0===t.length?(0,a.jsx)(ne.Z,{rows:6,cols:9}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.ZP,{item:!0,sm:12,md:4,sx:{width:"100%"},children:(0,a.jsxs)(ee.Z,{sx:ae.itemList,children:[n.length>0&&(0,a.jsx)("ul",{children:n.map((function(e,n){return(0,a.jsx)("li",{style:{listStyleType:"none"},children:(0,a.jsxs)("div",{style:{display:"flex",alignContent:"center",alignItems:"center"},children:[(0,a.jsx)(g.default,{unoptimized:!0,src:(0,y.assetPrefixer)("images/icons/weather_system/".concat((t=e.value,t.toLowerCase().replace(/\s+/g,"")),".png")),alt:"".concat(e.value),width:35,height:35,loader:y.imageLoader}),(0,a.jsxs)("span",{style:{marginLeft:"10px"},children:[" ",e.value," "]})]})},n);var t}))}),(0,a.jsxs)(C.Z,{children:["Updated by ",i.miscUpdater," on ",i.miscDate]})]})}),(0,a.jsx)(f.ZP,{item:!0,sm:12,md:8,sx:{width:"100%"},children:(0,a.jsx)(X.Z,{sx:ae.tablecontainer,children:(0,a.jsxs)(V.Z,{size:"medium",sx:ae.table,children:[(0,a.jsx)("caption",{children:i.seasonalMethod===te.o7.EXCEL?(0,a.jsxs)(C.Z,{children:["Updated via file upload of PAGASA's shared seasonal weather forecast excel file by an admin on ",i.seasonalDate,".",(0,a.jsx)("br",{}),"Full reference is available on PAGASA's ",(0,a.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",target:"_blank",rel:"noreferrer",children:"Seasonal (Rainfall) Forecast"})," web page."]}):(0,a.jsxs)(C.Z,{children:["Updated by an admin on ",i.seasonalDate]})}),(0,a.jsxs)(Q.Z,{children:[(0,a.jsxs)(J.Z,{sx:ae.tableRowHeader,children:[(0,a.jsx)($.Z,{rowSpan:2,width:"8%",sx:ae.tcs,children:"Month"}),(0,a.jsx)($.Z,{rowSpan:2,width:"12%",sx:ae.tcs,children:"Tropical Cyclones"}),(0,a.jsx)($.Z,{rowSpan:2,sx:ae.drydays,children:"Prov"}),(0,a.jsx)($.Z,{colSpan:6,sx:ae.drydays,children:"No. of Dry Days"})]}),(0,a.jsx)(J.Z,{sx:ae.tableRowHeader,children:r.map((function(e,n){return(0,a.jsx)($.Z,{sx:ae.drydays,children:e},n)}))})]}),(0,a.jsx)(K.Z,{children:t.map((function(e,n){return(0,a.jsx)(J.Z,{children:e.map((function(e,n){return(0,a.jsx)($.Z,{children:e},n)}))},n)}))})]})})})]})})};function ie(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function oe(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,i=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(i.push(a.value),!n||i.length!==n);o=!0);}catch(c){s=!0,r=c}finally{try{o||null==t.return||t.return()}finally{if(s)throw r}}return i}}(e,n)||ce(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e){return function(e){if(Array.isArray(e))return ie(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ce(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,n){if(e){if("string"===typeof e)return ie(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ie(e,n):void 0}}var le={miscUpdater:"-",miscDate:"-",seasonalUpdater:"-",seasonalDate:"-",seasonalMethod:"-"};var de=function(){var e=(0,r.useState)([]),n=e[0],t=e[1],o=(0,r.useState)([]),s=o[0],c=o[1],l=(0,r.useState)(le),u=l[0],p=l[1],x=(0,r.useRef)(!1),h=oe((0,H.ky)(G.M.WEATHER_FORECASTS,"".concat("zampen","/").concat(G.M.SUB_SEASONAL_COMMON,"/").concat(G.M.COMMON_SEASONAL_REGIONAL_TYPE.CYCLONES_COUNT)),2),f=h[0],m=h[1],g=oe((0,H.ky)(G.M.WEATHER_FORECASTS,"".concat("zampen","/").concat(G.M.SUB_SEASONAL_COMMON,"/").concat(G.M.COMMON_SEASONAL_REGIONAL_TYPE.MISC_WEATHER_SYSTEMS)),2),y=g[0],b=g[1],j=oe((0,H.ky)(Y.O.CONSTANTS,Y.O.PROVINCES_INFO),2),v=j[0],w=j[1],_=(0,i.v9)((function(e){return e.seasonalweather})),Z=_.ids,A=_.status,C=_.entities;return(0,r.useEffect)((function(){return x.current=!0,function(){x.current=!1}}),[]),(0,r.useEffect)((function(){if(A===d.G.FULLFILLED&&Z.length>0&&!m&&!b&&!w){var e=function(e){var t=[v.data[e].code];C[e].months.forEach((function(e){var n=null===e.dry?"nda":e.dry;t.push(n)})),r>=n.length&&n.push(["",""]),n[r]=se(n[r]).concat(se(t)),r+=1},n=[],a=[];f.data.forEach((function(e){var t="".concat(e.month.charAt(0).toUpperCase()).concat(e.month.slice(1)),r=[t,e.value];a.push(t),n.push(r)}));var r=0;for(var i in C)e(i);t(n),c(a),p({miscUpdater:"system"===y.updated_by?"system":"an admin",miscDate:(0,S.Xn)(y.date_created),seasonalUpdater:C["Zamboanga del Sur"].updated_by,seasonalDate:C["Zamboanga del Sur"].date_created,seasonalMethod:C["Zamboanga del Sur"].update_method})}}),[C,f,v,A,m,Z,y,b,w]),(0,a.jsx)(re,{weathersystems:(null===y||void 0===y?void 0:y.data)||[],tableData:n,monthHeaders:s,updatedBy:u})},ue={wrapper:{marginTop:function(e){return e.spacing(6)}},container:{maxWidth:function(e){return e.breakpoints.values.sm},marginTop:function(e){return e.spacing(1)},border:"1px solid #484848",borderRadius:function(e){return e.spacing(1)}},table:{minWidth:"350px"},tableTitle:{textAlign:"center"},cells:{"& td, th":{textAlign:"center"}},caption:{color:function(e){return e.palette.text.secondary},"& a":{color:function(e){return e.palette.secondary.main},textDecoration:"none"},"& a:visited":{color:function(e){return e.palette.primary.dark}},"& a:hover, span:hover":{textDecoration:"underline"}}};var pe=function(e){var n=e.seasonal,t=e.typhoon,r=e.fsLoading,i=e.loading;return(0,a.jsxs)(p.Z,{sx:ue.wrapper,id:"contents-seasonal-forecast",children:[(0,a.jsx)(s.Z,{variant:"h4",children:"Seasonal Forecast"}),(0,a.jsx)(q,{typhoon:t,loading:i}),(0,a.jsx)(s.Z,{variant:"subtitle2",children:"Weather Systems that May Affect the Region"}),(0,a.jsx)(de,{}),!r&&n.length>0&&(0,a.jsxs)(s.Z,{id:"bacap-seasonal-forecast",variant:"subtitle2",children:["Analysis of RAINFALL from\xa0",function(){var e="";if(n.length>0){var t=n[0].mos[0],a=n[0].mos[n[0].mos.length-1];e="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)," to ").concat(a.charAt(0).toUpperCase()).concat(a.slice(1))}return e}()]}),(0,a.jsx)(W.Z,{weatherData:n,withBorder:!0,fsLoading:r})]})},xe=t(67720);function he(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var fe=(0,t(11496).ZP)((function(e){return(0,a.jsx)(p.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){he(e,n,t[n])}))}return e}({},e))}))((function(e){e.theme;return{backgroundColor:"#ff7e79",textTransform:"uppercase",fontWeight:"bold",textAlign:"center",padding:"8px 0 8px 0"}})),me=fe;var ge=function(){return(0,a.jsx)(p.Z,{sx:{width:"100%",marginTop:function(e){return e.spacing(4)}},children:(0,a.jsxs)(f.ZP,{container:!0,spacing:5,children:[(0,a.jsx)(f.ZP,{item:!0,sm:12,md:6,children:[1,2,3,4,5,6,7,8].map((function(e){return(0,a.jsx)(F.Z,{variant:"text"},e)}))}),(0,a.jsx)(f.ZP,{item:!0,sm:12,md:6,children:(0,a.jsx)(F.Z,{animation:"wave",variant:"rectangular",height:450,sx:{minWidth:"540px"}})})]})})},ye=t(74721),be={container:{maxWidth:function(e){return e.breakpoints.values.sm},marginTop:function(e){return e.spacing(7)},border:"1px solid #484848",borderRadius:function(e){return e.spacing(1)},padding:function(e){return e.spacing(2)}},wrapper:{marginTop:function(e){return e.spacing(10)}},dataContainer:{marginTop:function(e){return e.spacing(4)}},dataContent:{"& div":{padding:function(e){return e.spacing(2)}},".data-content-description":{backgroundColor:"rgba(0, 0, 0, 0.03)"}},dataContentDescriptionText:{padding:function(e){return e.spacing(2)},"& .windsignalcontent":{marginBottom:function(e){return e.spacing(3)}}},summary:{margin:0,padding:0,height:"100%"}};var je=function(e){var n=e.cyclone,t=e.cycloneLoading,r=e.windspeedContent;return(0,a.jsxs)(p.Z,{sx:be.wrapper,id:"contents-special-weather-forecast",children:[(0,a.jsx)(s.Z,{variant:"h4",children:"Special Weather Forecast"}),t?(0,a.jsx)(ge,{}):n?(0,a.jsxs)("div",{children:[(0,a.jsxs)(f.ZP,{container:!0,sx:be.dataContainer,spacing:2,children:[(0,a.jsx)(f.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(ee.Z,{sx:be.summary,children:(0,a.jsxs)(p.Z,{sx:{padding:"16px"},children:[(0,a.jsx)(s.Z,{variant:"h6",children:"Summary"}),(0,a.jsx)(C.Z,{sx:{color:n.has_cyclone?"red":"rgba(0, 0, 0, 0.6)"},children:n.summary}),(0,a.jsxs)(C.Z,{sx:{marginTop:"16px"},children:["This section is captured from PAGASA's ",(0,a.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/tropical-cyclone/severe-weather-bulletin",target:"_blank",rel:"noreferrer",children:"Tropical Cyclone Bulletin"}),(0,a.jsx)("br",{})," web page by","system"===n.updated_by?" system ":" an admin ","on ",(0,S.Xn)(n.date_updated),". Please view PAGASA's Tropical Cyclone Bulletin web page to view the latest tropical cyclone information."]})]})})}),!n.has_cyclone&&(0,a.jsx)(f.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(ee.Z,{sx:be.summary,style:{display:"grid",placeContent:"center"},children:(0,a.jsxs)(p.Z,{sx:{padding:"16px",textAlign:"center"},children:[(0,a.jsx)(ye.Z,{color:"primary",fontSize:"large"}),(0,a.jsx)(s.Z,{variant:"h6",children:"No Active Tropical Cyclone"})]})})})]}),n.has_cyclone&&(0,a.jsxs)(f.ZP,{container:!0,sx:be.dataContainer,spacing:2,children:[(0,a.jsx)(f.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(ee.Z,{sx:{margin:0,padding:0},children:[(0,a.jsxs)(p.Z,{sx:{textAlign:"center",padding:"16px"},children:[(0,a.jsx)(s.Z,{variant:"h6",children:0===n.data.meta.bulletin_number?"No Active Tropical Cyclone":n.data.meta.bulletin_number}),(0,a.jsx)(s.Z,{variant:"subtitle1",children:n.data.meta.issued_at.toLowerCase().includes("issued at")?n.data.meta.issued_at:"Issued at ".concat(n.data.meta.issued_at)})]}),(0,a.jsx)(me,{children:n.data.meta.typhoon_name}),(0,a.jsx)(p.Z,{sx:be.dataContent,children:n.data.details.map((function(e,n){return(0,a.jsxs)("div",{style:{padding:0},children:[(0,a.jsx)(p.Z,{children:(0,a.jsx)(s.Z,{variant:"subtitle2",children:(0,a.jsx)("strong",{children:e.title})})}),(0,a.jsx)(p.Z,{className:"data-content-description",children:"object"===typeof e.value?(0,a.jsx)("ul",{children:e.value.map((function(e,n){return(0,a.jsx)("li",{children:(0,a.jsx)(s.Z,{variant:"body2",children:e})},n)}))}):(0,a.jsx)(s.Z,{variant:"body2",children:e.value})})]},n)}))})]})}),(0,a.jsx)(f.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(ee.Z,{sx:{margin:0,padding:0},children:[(0,a.jsx)(p.Z,{sx:{textAlign:"center"},children:""===n.img?(0,a.jsx)(g.default,{unoptimized:!0,src:(0,y.assetPrefixer)("images/placeholders/pixel-gray.png"),height:450,width:540,loader:y.imageLoader,alt:"placeholder"}):(0,a.jsx)(g.default,{unoptimized:!0,src:n.img,height:450,width:540,loader:y.imageLoader,alt:"placeholder"})}),(0,a.jsx)(me,{children:"Tropical Cyclone Wind Signal"}),0===Object.keys(r.data).length?(0,a.jsx)(p.Z,{sx:be.dataContentDescriptionText,children:(0,a.jsxs)(C.Z,{children:["system"!==r.updated_by&&(0,a.jsxs)("span",{children:["The ",te.Gt," region is clear of tropical cyclone wind signal.",(0,a.jsx)("br",{})]}),"(Wind signal information ",r.caption," ",(0,S.Xn)(r.date_created),")"]})}):(0,a.jsxs)(p.Z,{children:[(0,a.jsx)(p.Z,{sx:be.dataContentDescriptionText,children:(0,a.jsxs)(C.Z,{children:["Wind signal information ",r.caption," ",(0,S.Xn)(r.date_created)]})}),Object.keys(r.data).map((function(e,n){return(0,a.jsx)(p.Z,{sx:be.dataContentDescriptionText,children:(0,a.jsxs)("div",{children:[n>0&&(0,a.jsx)(xe.Z,{className:"windsignalcontent"}),(0,a.jsx)(s.Z,{variant:"body1",children:(0,a.jsxs)("strong",{children:["Signal #",e,": \xa0 "]})}),r.data[e].map((function(e,n){return(0,a.jsxs)(s.Z,{variant:"body2",sx:{marginTop:"8px"},children:[(0,a.jsx)("strong",{children:e.province})," ",e.municipalities]},n)}))]},n)},"cyclone-signal-".concat(n))}))]})]})})]})]}):(0,a.jsx)(A.Z,{})]})},ve=t(43370),we=t(1029);function Se(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function _e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,i=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(i.push(a.value),!n||i.length!==n);o=!0);}catch(c){s=!0,r=c}finally{try{o||null==t.return||t.return()}finally{if(s)throw r}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Se(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ze={data:{},date_created:"",caption:"",udpdated_by:""};var Ae=!0,Ce=function(e){var n=e.media,t=_e((0,H.ky)(we.K.GLOBAL_COLLECTIONS,we.K.TYPHOON_ADVISORY),2),c=t[0],l=t[1],d=_e((0,H.ky)(we.K.GLOBAL_COLLECTIONS,we.K.CYCLONE_ADVISORY),2),u=d[0],p=d[1],x=_e((0,H.ky)(G.M.WEATHER_FORECASTS,"".concat("zampen","/").concat(G.M.SUB_SPECIAL_COMMON,"/").concat(G.M.COMMON_SPECIAL_TYPE.WIND_SPEED)),2),h=x[0],f=x[1],m=(0,H.m$)(G.M.WEATHER_FORECASTS,"zampen",G.M.SUB_SEASONAL,"name"),g=m.documents,y=m.loading,b=(0,r.useState)(Ze),j=b[0],v=b[1],w=(0,i.v9)((function(e){return e.provinces.ids})),S=(0,r.useRef)(null),_=(0,i.I0)();return(0,r.useEffect)((function(){null===S.current&&0===w.length&&(S.current=!0,_((0,o.Q)()))}),[_,w.length]),(0,r.useEffect)((function(){if(!f&&null!==h){var e="system"===h.updated_by?"was reset by system on ":"was updated by an admin on ";v({caption:e,updated_by:h.updated_by,date_created:h.date_created,data:h.data.reduce((function(e,n){void 0===e[n.signal]&&(e[n.signal]=[]);var t={province:n.province,municipalities:"(".concat(n.municipalities.toString().split(",").join(", "),")")};return e[n.signal].push(t),e}),{})})}}),[h,f]),(0,a.jsxs)("div",{id:"ten-day-weather-forecast",children:[(0,a.jsx)(ve.Z,{title:"Agro-Climatic Advisory Portal - ".concat(te.Gt," (ACAP-").concat(te.Gt.toUpperCase(),") ACAP Services"),ogDescription:n.description,ogImageURL:n.url,ogURL:n.path,canonicalURL:n.path}),(0,a.jsx)(s.Z,{variant:"h4",children:"ACAP Services"}),(0,a.jsx)(s.Z,{variant:"label",children:"Weather Forecasts and Special Weather Advisory information"}),(0,a.jsx)(U,{}),(0,a.jsx)("div",{id:"seasonal-forecast",style:{height:"64px"}}),(0,a.jsx)(pe,{seasonal:g,typhoon:c,fsLoading:y,loading:l}),(0,a.jsx)("div",{id:"special-weather-forecast",style:{height:"40px"}}),(0,a.jsx)(je,{cyclone:u,cycloneLoading:p,windspeedContent:j})]})}}},function(e){e.O(0,[5778,3593,9964,8858,1903,6295,9958,6181,1538,9774,2888,179],(function(){return n=19859,e(e.s=n);var n}));var n=e.O();_N_E=n}]);