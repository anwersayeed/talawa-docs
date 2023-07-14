"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[59575],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),f=n,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},35466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat",id:"talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat",title:"models_GroupChat.Interface_GroupChat",description:"talawa-api / Exports / models/GroupChat / Interface\\GroupChat",source:"@site/docs/talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat.md",sourceDirName:"talawa-api-docs/interfaces",slug:"/talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat",permalink:"/docs/talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"models_Group.Interface_Group",permalink:"/docs/talawa-api-docs/interfaces/models_Group.Interface_Group"},next:{title:"models_GroupChatMessage.Interface_GroupChatMessage",permalink:"/docs/talawa-api-docs/interfaces/models_GroupChatMessage.Interface_GroupChatMessage"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"_id",id:"_id",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"creator",id:"creator",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"messages",id:"messages",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"organization",id:"organization",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"title",id:"title",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"users",id:"users",level:3},{value:"Defined in",id:"defined-in-6",level:4}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/models_GroupChat"},"models/GroupChat")," / Interface","_","GroupChat"),(0,n.kt)("h1",{id:"interface-interface_groupchat"},"Interface: Interface","_","GroupChat"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/models_GroupChat"},"models/GroupChat"),".Interface_GroupChat"),(0,n.kt)("p",null,"This is an interface representing a document for a group chat in the database(MongoDB)."),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat#_id"},"_","id")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat#creator"},"creator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat#messages"},"messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat#organization"},"organization")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat#status"},"status")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat#title"},"title")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_GroupChat.Interface_GroupChat#users"},"users"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"_id"},"_","id"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"_","id"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"ObjectId")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,"src/models/GroupChat.ts:9"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"creator"},"creator"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"creator"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,"src/models/GroupChat.ts:13"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"messages"},"messages"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"messages"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,"src/models/GroupChat.ts:12"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"organization"},"organization"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"organization"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,"src/models/GroupChat.ts:14"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"status"},"status"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"status"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,"src/models/GroupChat.ts:15"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"title"},"title"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"title"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,"src/models/GroupChat.ts:10"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"users"},"users"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"users"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,"src/models/GroupChat.ts:11"))}c.isMDXComponent=!0}}]);