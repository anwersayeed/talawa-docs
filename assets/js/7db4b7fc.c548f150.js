"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[12177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=s,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||n;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(87462),s=(r(67294),r(3905));const n={},o=void 0,l={unversionedId:"talawa-api-docs/modules/resolvers_Query_directChatMessages",id:"talawa-api-docs/modules/resolvers_Query_directChatMessages",title:"resolvers_Query_directChatMessages",description:"talawa-api / Exports / resolvers/Query/directChatMessages",source:"@site/docs/talawa-api-docs/modules/resolvers_Query_directChatMessages.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/resolvers_Query_directChatMessages",permalink:"/docs/talawa-api-docs/modules/resolvers_Query_directChatMessages",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/resolvers_Query_directChatMessages.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"resolvers_Query_commentsByPost",permalink:"/docs/talawa-api-docs/modules/resolvers_Query_commentsByPost"},next:{title:"resolvers_Query_directChats",permalink:"/docs/talawa-api-docs/modules/resolvers_Query_directChats"}},i={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"directChatMessages",id:"directchatmessages",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,s.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / resolvers/Query/directChatMessages"),(0,s.kt)("h1",{id:"module-resolversquerydirectchatmessages"},"Module: resolvers/Query/directChatMessages"),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"variables"},"Variables"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/resolvers_Query_directChatMessages#directchatmessages"},"directChatMessages"))),(0,s.kt)("h2",{id:"variables-1"},"Variables"),(0,s.kt)("h3",{id:"directchatmessages"},"directChatMessages"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"directChatMessages"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/types_generatedGraphQLTypes#queryresolvers"},(0,s.kt)("inlineCode",{parentName:"a"},"QueryResolvers")),"[",(0,s.kt)("inlineCode",{parentName:"p"},'"directChatMessages"'),"]"),(0,s.kt)("p",null,"This query will fetch all existing Direct chat messages from the database."),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,"src/resolvers/Query/directChatMessages.ts:8"))}p.isMDXComponent=!0}}]);