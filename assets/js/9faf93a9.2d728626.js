"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[86802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=i(n),u=o,y=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return n?r.createElement(y,s(s({ref:t},m),{},{components:n})):r.createElement(y,s({ref:t},m))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22088:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,Details:()=>y,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),o=n(67294),a=n(3905);const s={id:"comments-by-post",title:"commentsByPost",hide_table_of_contents:!1},c=void 0,l={unversionedId:"schema/queries/comments-by-post",id:"schema/queries/comments-by-post",title:"commentsByPost",description:"No description",source:"@site/docs/schema/queries/comments-by-post.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/comments-by-post",permalink:"/docs/schema/queries/comments-by-post",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/comments-by-post.mdx",tags:[],version:"current",frontMatter:{id:"comments-by-post",title:"commentsByPost",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"checkAuth",permalink:"/docs/schema/queries/check-auth"},next:{title:"comments",permalink:"/docs/schema/queries/comments"}},i={},m=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>commentsByPost.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-commentsbypostbidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Comment</code> <Badge class="secondary" text="object"/>',id:"comment-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:c=!1}=e;const[l,i]=(0,o.useState)(c);return(0,a.kt)("details",(0,r.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&s)},f={Bullet:m,SpecifiedBy:d,Badge:p,toc:u,Details:y},b="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"commentsByPost(\n  id: ID!\n): [Comment]\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-commentsbypostbidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"commentsByPost.",(0,a.kt)("b",null,"id"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"comment-"},(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/comment"},(0,a.kt)("inlineCode",{parentName:"a"},"Comment"))," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}h.isMDXComponent=!0}}]);