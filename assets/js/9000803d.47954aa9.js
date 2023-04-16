"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[8220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(r),m=o,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40907:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>y,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=r(87462),o=r(67294),a=r(3905);const l={id:"user-type",title:"UserType",hide_table_of_contents:!1},s=void 0,c={unversionedId:"schema/enums/user-type",id:"schema/enums/user-type",title:"UserType",description:"No description",source:"@site/docs/schema/enums/user-type.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/user-type",permalink:"/docs/schema/enums/user-type",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/enums/user-type.mdx",tags:[],version:"current",frontMatter:{id:"user-type",title:"UserType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserOrderByInput",permalink:"/docs/schema/enums/user-order-by-input"},next:{title:"Schema Documentation",permalink:"/docs/schema"}},i={},u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>UserType.<b>USER</b></code>",id:"code-style-fontweight-normal-usertypebuserbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserType.<b>ADMIN</b></code>",id:"code-style-fontweight-normal-usertypebadminbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserType.<b>SUPERADMIN</b></code>",id:"code-style-fontweight-normal-usertypebsuperadminbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:s=!1}=e;const[c,i]=(0,o.useState)(s);return(0,a.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&l)},f={Bullet:u,SpecifiedBy:p,Badge:d,toc:m,Details:y},b="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum UserType {\n  USER\n  ADMIN\n  SUPERADMIN\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-usertypebuserbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UserType.",(0,a.kt)("b",null,"USER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-usertypebadminbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UserType.",(0,a.kt)("b",null,"ADMIN")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-usertypebsuperadminbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UserType.",(0,a.kt)("b",null,"SUPERADMIN")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../../docs/schema/directives/role"},(0,a.kt)("inlineCode",{parentName:"a"},"role"))," ",(0,a.kt)(d,{class:"secondary",text:"directive",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);