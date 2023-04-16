"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[67070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=i(n),u=o,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(f,c(c({ref:t},m),{},{components:n})):r.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65162:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(87462),o=n(67294),a=n(3905);const c={id:"comments",title:"comments",hide_table_of_contents:!1},s=void 0,l={unversionedId:"schema/queries/comments",id:"schema/queries/comments",title:"comments",description:"No description",source:"@site/docs/schema/queries/comments.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/comments",permalink:"/docs/schema/queries/comments",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/comments.mdx",tags:[],version:"current",frontMatter:{id:"comments",title:"comments",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"commentsByPost",permalink:"/docs/schema/queries/comments-by-post"},next:{title:"directChatMessages",permalink:"/docs/schema/queries/direct-chat-messages"}},i={},m=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Type",id:"type",level:3},{value:'<code>Comment</code> <Badge class="secondary" text="object"/>',id:"comment-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:s=!1}=e;const[l,i]=(0,o.useState)(s);return(0,a.kt)("details",(0,r.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&c)},y={Bullet:m,SpecifiedBy:p,Badge:d,toc:u,Details:f},b="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"comments: [Comment]\n")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"comment-"},(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/comment"},(0,a.kt)("inlineCode",{parentName:"a"},"Comment"))," ",(0,a.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}g.isMDXComponent=!0}}]);