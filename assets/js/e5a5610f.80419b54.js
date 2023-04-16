"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[18001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6143:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=n(87462),r=n(67294),o=n(3905);const s={id:"sign-up",title:"signUp",hide_table_of_contents:!1},l=void 0,i={unversionedId:"schema/mutations/sign-up",id:"schema/mutations/sign-up",title:"signUp",description:"No description",source:"@site/docs/schema/mutations/sign-up.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/sign-up",permalink:"/docs/schema/mutations/sign-up",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/sign-up.mdx",tags:[],version:"current",frontMatter:{id:"sign-up",title:"signUp",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"sendMessageToGroupChat",permalink:"/docs/schema/mutations/send-message-to-group-chat"},next:{title:"togglePostPin",permalink:"/docs/schema/mutations/toggle-post-pin"}},c={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>signUp.<b>data</b></code><Bullet /><code>UserInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-signupbdatabcodeuserinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>signUp.<b>file</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-signupbfilebcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>AuthData</code> <Badge class="secondary" text="object"/>',id:"authdata-",level:4}],g=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:l=!1}=e;const[i,c]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&s)},f={Bullet:d,SpecifiedBy:u,Badge:p,toc:m,Details:g},y="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"signUp(\n  data: UserInput!\n  file: String\n): AuthData!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signupbdatabcodeuserinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"signUp.",(0,o.kt)("b",null,"data"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/inputs/user-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UserInput!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signupbfilebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"signUp.",(0,o.kt)("b",null,"file"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"authdata-"},(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/auth-data"},(0,o.kt)("inlineCode",{parentName:"a"},"AuthData"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}h.isMDXComponent=!0}}]);