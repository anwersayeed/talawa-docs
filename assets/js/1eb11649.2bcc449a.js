"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[98956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35874:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=n(87462),a=n(67294),o=n(3905);const s={id:"refresh-token",title:"refreshToken",hide_table_of_contents:!1},l=void 0,c={unversionedId:"schema/mutations/refresh-token",id:"schema/mutations/refresh-token",title:"refreshToken",description:"No description",source:"@site/docs/schema/mutations/refresh-token.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/refresh-token",permalink:"/docs/schema/mutations/refresh-token",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/refresh-token.mdx",tags:[],version:"current",frontMatter:{id:"refresh-token",title:"refreshToken",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"recaptcha",permalink:"/docs/schema/mutations/recaptcha"},next:{title:"registerForEvent",permalink:"/docs/schema/mutations/register-for-event"}},i={},d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>refreshToken.<b>refreshToken</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-refreshtokenbrefreshtokenbcodestring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ExtendSession</code> <Badge class="secondary" text="object"/>',id:"extendsession-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:l=!1}=e;const[c,i]=(0,a.useState)(l);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&s)},h={Bullet:d,SpecifiedBy:u,Badge:p,toc:m,Details:f},k="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"refreshToken(\n  refreshToken: String!\n): ExtendSession!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-refreshtokenbrefreshtokenbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"refreshToken.",(0,o.kt)("b",null,"refreshToken"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"extendsession-"},(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/extend-session"},(0,o.kt)("inlineCode",{parentName:"a"},"ExtendSession"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}y.isMDXComponent=!0}}]);