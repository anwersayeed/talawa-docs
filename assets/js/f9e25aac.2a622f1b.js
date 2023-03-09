"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(a),c=r,g=p["".concat(l,".").concat(c)]||p[c]||u[c]||o;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={id:"admin-messaging",title:"Global Messaging"},i=void 0,s={unversionedId:"features/admin-role/admin-messaging",id:"features/admin-role/admin-messaging",title:"Global Messaging",description:"This section is a work in progress.",source:"@site/docs/features/admin-role/global-messaging.md",sourceDirName:"features/admin-role",slug:"/features/admin-role/admin-messaging",permalink:"/docs/features/admin-role/admin-messaging",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/features/admin-role/global-messaging.md",tags:[],version:"current",frontMatter:{id:"admin-messaging",title:"Global Messaging"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/features/admin-role/admin-role-overview"},next:{title:"Manage Members",permalink:"/docs/features/admin-role/admin-manage-members"}},l={},d=[{value:"Code: ADM-001",id:"code-adm-001",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],m={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,r.kt)("h2",{id:"code-adm-001"},"Code: ADM-001"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Authored by",(0,r.kt)("strong",{parentName:"em"}," ",(0,r.kt)("strong",{parentName:"strong"},"Shannika Jackson")," "),". Last updated on")," ",(0,r.kt)("em",{parentName:"p"}," ",(0,r.kt)("strong",{parentName:"em"},"May 18,2021")," ")),(0,r.kt)("p",null,"This feature aims to ",(0,r.kt)("em",{parentName:"p"}," ",(0,r.kt)("strong",{parentName:"em"},"enhance the admin role")," ")," by ",(0,r.kt)("em",{parentName:"p"}," ",(0,r.kt)("strong",{parentName:"em"},"allowing admin users to send messages to an entire organization")," "),"."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"problem"},"Problem"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Messages can now be sent only directly from one user to another :"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The admins in an organization can only send direct messages"),(0,r.kt)("li",{parentName:"ol"},"The need exists to communicate instantly with all members of an organisation")))),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Administrators for an organization must be able to send messages to all members in the organization:")," This is to facilitate organizational notices and updates.")),(0,r.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,r.kt)("p",null,"The following are aspects of this feature which have been considered but are outside of the scope for the current project:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Group messaging for roles within an event :")," This feature is detailed under the Admin Portal requirement features."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Message history for organization wide messages :")," This is the ability to see from the admin portal the history of organization-wide messages sent for a period."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Scheduled sending of organization wide messages :")," This is the ability to send organization wide messages automatically based on a scheduled date. This will be useful as reminders for upcoming events and other notices")),(0,r.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,r.kt)("p",null,"The following are the primary roles foreseen in the development of this feature"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Feature Lead")," : will review proposed solutions, acceptance and close feature")),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"NA"),(0,r.kt)("h3",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"NA"),(0,r.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,r.kt)("h3",{id:"user-experience"},"User Experience"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An organization","'","s administrator should be presented with a create message button from the organisation","'","s admin portal."),(0,r.kt)("li",{parentName:"ol"},"When clicked, (s)he is presented with the option to message the organization."),(0,r.kt)("li",{parentName:"ol"},"The message to the organization then appears in the admin portals chat screen."),(0,r.kt)("li",{parentName:"ol"},"In the admin portal","'","s chat screen a button should be presented to resend organization wide message")),(0,r.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,r.kt)("p",null,"NA"),(0,r.kt)("h3",{id:"future-work"},"Future Work"),(0,r.kt)("p",null,"Items mentioned in the Out of Scope section will form the basis for future work to be done on this feature"),(0,r.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,r.kt)("p",null,"TBD"))}u.isMDXComponent=!0}}]);