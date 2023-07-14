"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[62114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var i=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=i.createContext({}),u=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,f=c["".concat(d,".").concat(m)]||c[m]||s[m]||n;return a?i.createElement(f,r(r({ref:t},p),{},{components:a})):i.createElement(f,r({ref:t},p))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<n;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>s,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var i=a(87462),l=(a(67294),a(3905));const n={},r=void 0,o={unversionedId:"talawa-api-docs/modules/utilities_deleteDuplicatedImage",id:"talawa-api-docs/modules/utilities_deleteDuplicatedImage",title:"utilities_deleteDuplicatedImage",description:"talawa-api / Exports / utilities/deleteDuplicatedImage",source:"@site/docs/talawa-api-docs/modules/utilities_deleteDuplicatedImage.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/utilities_deleteDuplicatedImage",permalink:"/docs/talawa-api-docs/modules/utilities_deleteDuplicatedImage",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/utilities_deleteDuplicatedImage.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"utilities_copyToClipboard",permalink:"/docs/talawa-api-docs/modules/utilities_copyToClipboard"},next:{title:"utilities_deleteImage",permalink:"/docs/talawa-api-docs/modules/utilities_deleteImage"}},d={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"deleteDuplicatedImage",id:"deleteduplicatedimage",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],p={toc:u},c="wrapper";function s(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,l.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / utilities/deleteDuplicatedImage"),(0,l.kt)("h1",{id:"module-utilitiesdeleteduplicatedimage"},"Module: utilities/deleteDuplicatedImage"),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("h3",{id:"functions"},"Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/utilities_deleteDuplicatedImage#deleteduplicatedimage"},"deleteDuplicatedImage"))),(0,l.kt)("h2",{id:"functions-1"},"Functions"),(0,l.kt)("h3",{id:"deleteduplicatedimage"},"deleteDuplicatedImage"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"deleteDuplicatedImage"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"imagePath"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"This function deletes a duplicated image using the function fs.unlink()."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"imagePath")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"PathLike")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path of the image")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,"src/utilities/deleteDuplicatedImage.ts:7"))}s.isMDXComponent=!0}}]);