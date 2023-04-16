"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(a),m=r,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92989:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=a(87462),r=a(67294),s=a(3905);const o={id:"message-chat-input",title:"MessageChatInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"schema/inputs/message-chat-input",id:"schema/inputs/message-chat-input",title:"MessageChatInput",description:"No description",source:"@site/docs/schema/inputs/message-chat-input.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/message-chat-input",permalink:"/docs/schema/inputs/message-chat-input",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/inputs/message-chat-input.mdx",tags:[],version:"current",frontMatter:{id:"message-chat-input",title:"MessageChatInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"LoginInput",permalink:"/docs/schema/inputs/login-input"},next:{title:"OrganizationInput",permalink:"/docs/schema/inputs/organization-input"}},i={},d=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MessageChatInput.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messagechatinputbmessagebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MessageChatInput.<b>receiver</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-messagechatinputbreceiverbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[c,i]=(0,r.useState)(l);return(0,s.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&o)},f={Bullet:d,SpecifiedBy:p,Badge:u,toc:m,Details:g},h="wrapper";function y(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input MessageChatInput {\n  message: String!\n  receiver: ID!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messagechatinputbmessagebcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageChatInput.",(0,s.kt)("b",null,"message"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-messagechatinputbreceiverbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MessageChatInput.",(0,s.kt)("b",null,"receiver"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-message-chat"},(0,s.kt)("inlineCode",{parentName:"a"},"createMessageChat"))," ",(0,s.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);