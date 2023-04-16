"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[4804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,y=d["".concat(m,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(y,c(c({ref:t},i),{},{components:n})):a.createElement(y,c({ref:t},i))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45482:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var a=n(87462),o=n(67294),r=n(3905);const c={id:"create-comment",title:"createComment",hide_table_of_contents:!1},l=void 0,m={unversionedId:"schema/mutations/create-comment",id:"schema/mutations/create-comment",title:"createComment",description:"No description",source:"@site/docs/schema/mutations/create-comment.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/create-comment",permalink:"/docs/schema/mutations/create-comment",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/create-comment.mdx",tags:[],version:"current",frontMatter:{id:"create-comment",title:"createComment",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"createAdmin",permalink:"/docs/schema/mutations/create-admin"},next:{title:"createDirectChat",permalink:"/docs/schema/mutations/create-direct-chat"}},s={},i=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createComment.<b>postId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcommentbpostidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createComment.<b>data</b></code><Bullet /><code>CommentInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcommentbdatabcodecommentinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Comment</code> <Badge class="secondary" text="object"/>',id:"comment-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[m,s]=(0,o.useState)(l);return(0,r.kt)("details",(0,a.Z)({},m?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},m?t:n),m&&c)},f={Bullet:i,SpecifiedBy:d,Badge:u,toc:p,Details:y},b="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"createComment(\n  postId: ID!\n  data: CommentInput!\n): Comment\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createcommentbpostidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"createComment.",(0,r.kt)("b",null,"postId"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createcommentbdatabcodecommentinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"createComment.",(0,r.kt)("b",null,"data"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"../../../docs/schema/inputs/comment-input"},(0,r.kt)("inlineCode",{parentName:"a"},"CommentInput!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"comment-"},(0,r.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/comment"},(0,r.kt)("inlineCode",{parentName:"a"},"Comment"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}h.isMDXComponent=!0}}]);