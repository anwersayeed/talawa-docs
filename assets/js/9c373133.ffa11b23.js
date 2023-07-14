"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[48209],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=n,m=c["".concat(s,".").concat(u)]||c[u]||k[u]||i;return t?a.createElement(m,l(l({ref:r},d),{},{components:t})):a.createElement(m,l({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16924:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const i={},l=void 0,o={unversionedId:"talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError",id:"talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError",title:"libraries_errors_unauthenticatedError.UnauthenticatedError",description:"talawa-api / Exports / libraries/errors/unauthenticatedError / UnauthenticatedError",source:"@site/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError.md",sourceDirName:"talawa-api-docs/classes",slug:"/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError",permalink:"/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"libraries_errors_notFoundError.NotFoundError",permalink:"/docs/talawa-api-docs/classes/libraries_errors_notFoundError.NotFoundError"},next:{title:"libraries_errors_unauthorizedError.UnauthorizedError",permalink:"/docs/talawa-api-docs/classes/libraries_errors_unauthorizedError.UnauthorizedError"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"errors",id:"errors",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"httpCode",id:"httpcode",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"stack",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"prepareStackTrace",id:"preparestacktrace",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns",level:5},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"stackTraceLimit",id:"stacktracelimit",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"Methods",id:"methods-1",level:2},{value:"captureStackTrace",id:"capturestacktrace",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-8",level:4}],d={toc:p},c="wrapper";function k(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/libraries_errors_unauthenticatedError"},"libraries/errors/unauthenticatedError")," / UnauthenticatedError"),(0,n.kt)("h1",{id:"class-unauthenticatederror"},"Class: UnauthenticatedError"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/libraries_errors_unauthenticatedError"},"libraries/errors/unauthenticatedError"),".UnauthenticatedError"),(0,n.kt)("p",null,"This class detects unauthenticated errors and sends those errors to the superclass ApplicationError."),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError"},(0,n.kt)("inlineCode",{parentName:"a"},"ApplicationError"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"UnauthenticatedError"))))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError#constructor"},"constructor"))),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError#errors"},"errors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError#httpcode"},"httpCode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError#message"},"message")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError#name"},"name")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError#stack"},"stack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError#preparestacktrace"},"prepareStackTrace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError#stacktracelimit"},"stackTraceLimit"))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/classes/libraries_errors_unauthenticatedError.UnauthenticatedError#capturestacktrace"},"captureStackTrace"))),(0,n.kt)("h2",{id:"constructors-1"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new UnauthenticatedError"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"message?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"code?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"param?"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata?"),")"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"message")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},'"UnauthenticatedError"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"code")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"param")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"metadata")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError"},"ApplicationError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError#constructor"},"constructor")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,"src/libraries/errors/unauthenticatedError.ts:6"),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"errors"},"errors"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"errors"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/interfaces/libraries_errors_applicationError.Interface_Error"},(0,n.kt)("inlineCode",{parentName:"a"},"Interface_Error")),"[]"),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError"},"ApplicationError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError#errors"},"errors")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,"src/libraries/errors/applicationError.ts:11"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"httpcode"},"httpCode"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"httpCode"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError"},"ApplicationError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError#httpcode"},"httpCode")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,"src/libraries/errors/applicationError.ts:12"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"message"},"message"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"message"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError"},"ApplicationError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError#message"},"message")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1054"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"name"},"name"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"name"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError"},"ApplicationError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError#name"},"name")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1053"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"stack"},"stack"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"stack"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError"},"ApplicationError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError#stack"},"stack")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1055"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"err"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stackTraces"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"CallSite"),"[]) => ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stackTraces"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("p",null,"Optional override for formatting stack traces"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"See"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"err")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Error"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"CallSite"),"[]")))),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError"},"ApplicationError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError#preparestacktrace"},"prepareStackTrace")),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,"node_modules/@types/node/globals.d.ts:11"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError"},"ApplicationError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError#stacktracelimit"},"stackTraceLimit")),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,"node_modules/@types/node/globals.d.ts:13"),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"targetObject"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Create .stack property on a target object"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Function"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError"},"ApplicationError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/classes/libraries_errors_applicationError.ApplicationError#capturestacktrace"},"captureStackTrace")),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,"node_modules/@types/node/globals.d.ts:4"))}k.isMDXComponent=!0}}]);