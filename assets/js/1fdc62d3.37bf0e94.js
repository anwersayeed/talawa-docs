"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[72819],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},i=void 0,l={unversionedId:"talawa-api/modules/resolvers_Query_organizationsMemberConnection",id:"talawa-api/modules/resolvers_Query_organizationsMemberConnection",title:"resolvers_Query_organizationsMemberConnection",description:"talawa-api / Exports / resolvers/Query/organizationsMemberConnection",source:"@site/docs/talawa-api/modules/resolvers_Query_organizationsMemberConnection.md",sourceDirName:"talawa-api/modules",slug:"/talawa-api/modules/resolvers_Query_organizationsMemberConnection",permalink:"/docs/talawa-api/modules/resolvers_Query_organizationsMemberConnection",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api/modules/resolvers_Query_organizationsMemberConnection.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"organizationsMemberConnection",id:"organizationsmemberconnection",level:3},{value:"Defined in",id:"defined-in",level:4}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/"},"talawa-api")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules"},"Exports")," / resolvers/Query/organizationsMemberConnection"),(0,a.kt)("h1",{id:"module-resolversqueryorganizationsmemberconnection"},"Module: resolvers/Query/organizationsMemberConnection"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"variables"},"Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/talawa-api/modules/resolvers_Query_organizationsMemberConnection#organizationsmemberconnection"},"organizationsMemberConnection"))),(0,a.kt)("h2",{id:"variables-1"},"Variables"),(0,a.kt)("h3",{id:"organizationsmemberconnection"},"organizationsMemberConnection"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"organizationsMemberConnection"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-api/modules/types_generatedGraphQLTypes#queryresolvers"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryResolvers")),"[",(0,a.kt)("inlineCode",{parentName:"p"},'"organizationsMemberConnection"'),"]"),(0,a.kt)("p",null,"This query will retrieve from the database a list of members\nin the organisation under the specified limit for the specified page in the pagination."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,a.kt)("p",null,"An object holds the data required to execute the query.\n",(0,a.kt)("inlineCode",{parentName:"p"},"args.first")," specifies the number of members to retrieve, and ",(0,a.kt)("inlineCode",{parentName:"p"},"args.after")," specifies\nthe unique identification for each item in the returned list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Connection in graphQL means pagination,\nlearn more about Connection ",(0,a.kt)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"here"),"."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"src/resolvers/Query/organizationsMemberConnection.ts:21"))}m.isMDXComponent=!0}}]);