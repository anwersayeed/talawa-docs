"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[71579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(f,c(c({ref:t},d),{},{components:n})):o.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88622:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var o=n(87462),r=n(67294),a=n(3905);const c={id:"users-connection",title:"UsersConnection",hide_table_of_contents:!1},s=void 0,l={unversionedId:"schema/objects/users-connection",id:"schema/objects/users-connection",title:"UsersConnection",description:"No description",source:"@site/docs/schema/objects/users-connection.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/users-connection",permalink:"/docs/schema/objects/users-connection",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/users-connection.mdx",tags:[],version:"current",frontMatter:{id:"users-connection",title:"UsersConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"User",permalink:"/docs/schema/objects/user"},next:{title:"Queries",permalink:"/docs/category/queries"}},i={},d=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UsersConnection.<b>edges</b></code><Bullet /><code>[UserEdge]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-usersconnectionbedgesbcodeuseredge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UsersConnection.<b>pageInfo</b></code><Bullet /><code>ConnectionPageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-usersconnectionbpageinfobcodeconnectionpageinfo--",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:s=!1}=e;const[l,i]=(0,r.useState)(s);return(0,a.kt)("details",(0,o.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&c)},g={Bullet:d,SpecifiedBy:u,Badge:p,toc:m,Details:f},b="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UsersConnection {\n  edges: [UserEdge]\n  pageInfo: ConnectionPageInfo!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-usersconnectionbedgesbcodeuseredge--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UsersConnection.",(0,a.kt)("b",null,"edges"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/user-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"[UserEdge]"))," ",(0,a.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-usersconnectionbpageinfobcodeconnectionpageinfo--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UsersConnection.",(0,a.kt)("b",null,"pageInfo"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/connection-page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"ConnectionPageInfo!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user-tag"},(0,a.kt)("inlineCode",{parentName:"a"},"UserTag"))," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);