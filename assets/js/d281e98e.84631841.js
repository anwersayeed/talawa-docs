"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[34324],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},47734:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=a(87462),n=a(67294),i=a(3905);const l={id:"latitude",title:"Latitude",hide_table_of_contents:!1},o=void 0,s={unversionedId:"schema/scalars/latitude",id:"schema/scalars/latitude",title:"Latitude",description:"A field whose value is a valid decimal degrees latitude number (53.471)//en.wikipedia.org/wiki/Latitude",source:"@site/docs/schema/scalars/latitude.mdx",sourceDirName:"schema/scalars",slug:"/schema/scalars/latitude",permalink:"/docs/schema/scalars/latitude",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/scalars/latitude.mdx",tags:[],version:"current",frontMatter:{id:"latitude",title:"Latitude",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Int",permalink:"/docs/schema/scalars/int"},next:{title:"Longitude",permalink:"/docs/schema/scalars/longitude"}},c={},d=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:o=!1}=e;const[s,c]=(0,n.useState)(o);return(0,i.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&l)},y={Bullet:d,SpecifiedBy:p,Badge:u,toc:m,Details:f},b="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(b,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A field whose value is a valid decimal degrees latitude number (53.471): ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Latitude"},"https://en.wikipedia.org/wiki/Latitude")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Latitude\n")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/event"},(0,i.kt)("inlineCode",{parentName:"a"},"Event"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/event-input"},(0,i.kt)("inlineCode",{parentName:"a"},"EventInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/update-event-input"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateEventInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);