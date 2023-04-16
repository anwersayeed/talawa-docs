"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[52016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70450:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>f,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=r(87462),o=r(67294),a=r(3905);const s={id:"groups",title:"groups",hide_table_of_contents:!1},c=void 0,i={unversionedId:"schema/queries/groups",id:"schema/queries/groups",title:"groups",description:"No description",source:"@site/docs/schema/queries/groups.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/groups",permalink:"/docs/schema/queries/groups",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/groups.mdx",tags:[],version:"current",frontMatter:{id:"groups",title:"groups",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"groupChats",permalink:"/docs/schema/queries/group-chats"},next:{title:"isUserRegister",permalink:"/docs/schema/queries/is-user-register"}},l={},p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Type",id:"type",level:3},{value:'<code>Group</code> <Badge class="secondary" text="object"/>',id:"group-",level:4}],f=e=>{let{dataOpen:t,dataClose:r,children:s,startOpen:c=!1}=e;const[i,l]=(0,o.useState)(c);return(0,a.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&s)},g={Bullet:p,SpecifiedBy:u,Badge:d,toc:m,Details:f},y="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"groups: [Group]\n")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"group-"},(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/group"},(0,a.kt)("inlineCode",{parentName:"a"},"Group"))," ",(0,a.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}b.isMDXComponent=!0}}]);