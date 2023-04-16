"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[30549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87430:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(87462),r=n(67294),o=n(3905);const l={id:"login-input",title:"LoginInput",hide_table_of_contents:!1},i=void 0,s={unversionedId:"schema/inputs/login-input",id:"schema/inputs/login-input",title:"LoginInput",description:"No description",source:"@site/docs/schema/inputs/login-input.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/login-input",permalink:"/docs/schema/inputs/login-input",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/inputs/login-input.mdx",tags:[],version:"current",frontMatter:{id:"login-input",title:"LoginInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"LanguageInput",permalink:"/docs/schema/inputs/language-input"},next:{title:"MessageChatInput",permalink:"/docs/schema/inputs/message-chat-input"}},c={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LoginInput.<b>email</b></code><Bullet /><code>EmailAddress!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-logininputbemailbcodeemailaddress--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoginInput.<b>password</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-logininputbpasswordbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[s,c]=(0,r.useState)(i);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&l)},f={Bullet:d,SpecifiedBy:p,Badge:u,toc:m,Details:g},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input LoginInput {\n  email: EmailAddress!\n  password: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-logininputbemailbcodeemailaddress--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LoginInput.",(0,o.kt)("b",null,"email"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/email-address"},(0,o.kt)("inlineCode",{parentName:"a"},"EmailAddress!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-logininputbpasswordbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LoginInput.",(0,o.kt)("b",null,"password"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/login"},(0,o.kt)("inlineCode",{parentName:"a"},"login"))," ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);