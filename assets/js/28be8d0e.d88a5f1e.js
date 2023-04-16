"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[79247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=i(n),p=r,m=g["".concat(c,".").concat(p)]||g[p]||d[p]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66668:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=n(67294),l=n(3905);const o={id:"getlanguage",title:"getlanguage",hide_table_of_contents:!1},s=void 0,c={unversionedId:"schema/queries/getlanguage",id:"schema/queries/getlanguage",title:"getlanguage",description:"No description",source:"@site/docs/schema/queries/getlanguage.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/getlanguage",permalink:"/docs/schema/queries/getlanguage",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/getlanguage.mdx",tags:[],version:"current",frontMatter:{id:"getlanguage",title:"getlanguage",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"getPlugins",permalink:"/docs/schema/queries/get-plugins"},next:{title:"groupChatMessages",permalink:"/docs/schema/queries/group-chat-messages"}},i={},u=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>getlanguage.<b>lang_code</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-getlanguageblang_codebcodestring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Translation</code> <Badge class="secondary" text="object"/>',id:"translation-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:s=!1}=e;const[c,i]=(0,r.useState)(s);return(0,l.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},f={Bullet:u,SpecifiedBy:g,Badge:d,toc:p,Details:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"getlanguage(\n  lang_code: String!\n): [Translation]\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-getlanguageblang_codebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"getlanguage.",(0,l.kt)("b",null,"lang_code"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"translation-"},(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/translation"},(0,l.kt)("inlineCode",{parentName:"a"},"Translation"))," ",(0,l.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}b.isMDXComponent=!0}}]);