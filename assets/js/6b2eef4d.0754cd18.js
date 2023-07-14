"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[57643],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(o),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||n;return o?a.createElement(f,l(l({ref:t},p),{},{components:o})):a.createElement(f,l({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<n;u++)l[u]=o[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},56783:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=o(87462),r=(o(67294),o(3905));const n={},l=void 0,i={unversionedId:"talawa-api-docs/modules/resolvers_Mutation_logout",id:"talawa-api-docs/modules/resolvers_Mutation_logout",title:"resolvers_Mutation_logout",description:"talawa-api / Exports / resolvers/Mutation/logout",source:"@site/docs/talawa-api-docs/modules/resolvers_Mutation_logout.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/resolvers_Mutation_logout",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_logout",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/resolvers_Mutation_logout.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"resolvers_Mutation_login",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_login"},next:{title:"resolvers_Mutation_otp",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_otp"}},s={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"logout",id:"logout",level:3},{value:"Defined in",id:"defined-in",level:4}],p={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / resolvers/Mutation/logout"),(0,r.kt)("h1",{id:"module-resolversmutationlogout"},"Module: resolvers/Mutation/logout"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/resolvers_Mutation_logout#logout"},"logout"))),(0,r.kt)("h2",{id:"variables-1"},"Variables"),(0,r.kt)("h3",{id:"logout"},"logout"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"logout"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/types_generatedGraphQLTypes#mutationresolvers"},(0,r.kt)("inlineCode",{parentName:"a"},"MutationResolvers")),"[",(0,r.kt)("inlineCode",{parentName:"p"},'"logout"'),"]"),(0,r.kt)("p",null,"This function enables logout."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,r.kt)("p",null,"parent of current request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,r.kt)("p",null,"payload provided with the request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,r.kt)("p",null,"context of entire application"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The following checks are done:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the user exists")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"src/resolvers/Mutation/logout.ts:14"))}d.isMDXComponent=!0}}]);