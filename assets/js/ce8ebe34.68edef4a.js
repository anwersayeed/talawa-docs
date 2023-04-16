"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[81822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8255:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(87462),a=r(67294),o=r(3905);const i={id:"phone-number",title:"PhoneNumber",hide_table_of_contents:!1},s=void 0,l={unversionedId:"schema/scalars/phone-number",id:"schema/scalars/phone-number",title:"PhoneNumber",description:"A field whose value conforms to the standard E.164 format as specified in//en.wikipedia.org/wiki/E.164. Basically this is +17895551234.",source:"@site/docs/schema/scalars/phone-number.mdx",sourceDirName:"schema/scalars",slug:"/schema/scalars/phone-number",permalink:"/docs/schema/scalars/phone-number",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/scalars/phone-number.mdx",tags:[],version:"current",frontMatter:{id:"phone-number",title:"PhoneNumber",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Longitude",permalink:"/docs/schema/scalars/longitude"},next:{title:"PositiveInt",permalink:"/docs/schema/scalars/positive-int"}},c={},p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[],f=e=>{let{dataOpen:t,dataClose:r,children:i,startOpen:s=!1}=e;const[l,c]=(0,a.useState)(s);return(0,o.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},l?t:r),l&&i)},h={Bullet:p,SpecifiedBy:u,Badge:d,toc:m,Details:f},b="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A field whose value conforms to the standard E.164 format as specified in: ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/E.164"},"https://en.wikipedia.org/wiki/E.164"),". Basically this is +17895551234."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar PhoneNumber\n")))}y.isMDXComponent=!0}}]);