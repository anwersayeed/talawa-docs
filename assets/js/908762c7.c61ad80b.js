"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[4462],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(o),f=a,m=u["".concat(i,".").concat(f)]||u[f]||c[f]||n;return o?r.createElement(m,s(s({ref:t},d),{},{components:o})):r.createElement(m,s({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<n;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},44064:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=o(87462),a=(o(67294),o(3905));const n={},s=void 0,l={unversionedId:"talawa-api-docs/modules/resolvers_Mutation_forgotPassword",id:"talawa-api-docs/modules/resolvers_Mutation_forgotPassword",title:"resolvers_Mutation_forgotPassword",description:"talawa-api / Exports / resolvers/Mutation/forgotPassword",source:"@site/docs/talawa-api-docs/modules/resolvers_Mutation_forgotPassword.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/resolvers_Mutation_forgotPassword",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_forgotPassword",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/resolvers_Mutation_forgotPassword.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"resolvers_Mutation_deleteDonationById",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_deleteDonationById"},next:{title:"resolvers_Mutation_joinPublicOrganization",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_joinPublicOrganization"}},i={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"forgotPassword",id:"forgotpassword",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / resolvers/Mutation/forgotPassword"),(0,a.kt)("h1",{id:"module-resolversmutationforgotpassword"},"Module: resolvers/Mutation/forgotPassword"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"variables"},"Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/resolvers_Mutation_forgotPassword#forgotpassword"},"forgotPassword"))),(0,a.kt)("h2",{id:"variables-1"},"Variables"),(0,a.kt)("h3",{id:"forgotpassword"},"forgotPassword"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"forgotPassword"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/types_generatedGraphQLTypes#mutationresolvers"},(0,a.kt)("inlineCode",{parentName:"a"},"MutationResolvers")),"[",(0,a.kt)("inlineCode",{parentName:"p"},'"forgotPassword"'),"]"),(0,a.kt)("p",null,"This function enables a user to restore password."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,a.kt)("p",null,"parent of current request"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,a.kt)("p",null,"payload provided with the request"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The following tasks are done:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Extracts email and otp out of otpToken."),(0,a.kt)("li",{parentName:"ol"},"Compares otpToken and otp."),(0,a.kt)("li",{parentName:"ol"},"Checks whether otp is valid."),(0,a.kt)("li",{parentName:"ol"},"Updates password field for user's document with email === email.")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"src/resolvers/Mutation/forgotPassword.ts:17"))}c.isMDXComponent=!0}}]);