"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[32238],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),g=n,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||s;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},93303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const s={},o=void 0,i={unversionedId:"talawa-api-docs/modules/resolvers_Mutation_unassignUserTag",id:"talawa-api-docs/modules/resolvers_Mutation_unassignUserTag",title:"resolvers_Mutation_unassignUserTag",description:"talawa-api / Exports / resolvers/Mutation/unassignUserTag",source:"@site/docs/talawa-api-docs/modules/resolvers_Mutation_unassignUserTag.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/resolvers_Mutation_unassignUserTag",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_unassignUserTag",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/resolvers_Mutation_unassignUserTag.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"resolvers_Mutation_togglePostPin",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_togglePostPin"},next:{title:"resolvers_Mutation_unblockUser",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_unblockUser"}},l={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"unassignUserTag",id:"unassignusertag",level:3},{value:"Defined in",id:"defined-in",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / resolvers/Mutation/unassignUserTag"),(0,n.kt)("h1",{id:"module-resolversmutationunassignusertag"},"Module: resolvers/Mutation/unassignUserTag"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"variables"},"Variables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/resolvers_Mutation_unassignUserTag#unassignusertag"},"unassignUserTag"))),(0,n.kt)("h2",{id:"variables-1"},"Variables"),(0,n.kt)("h3",{id:"unassignusertag"},"unassignUserTag"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"unassignUserTag"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/types_generatedGraphQLTypes#mutationresolvers"},(0,n.kt)("inlineCode",{parentName:"a"},"MutationResolvers")),"[",(0,n.kt)("inlineCode",{parentName:"p"},'"unassignUserTag"'),"]"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,"src/resolvers/Mutation/unassignUserTag.ts:11"))}d.isMDXComponent=!0}}]);