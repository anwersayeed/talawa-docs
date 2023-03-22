"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[6535],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={id:"about",title:"About Us",slug:"/"},i=void 0,l={unversionedId:"about",id:"about",title:"About Us",description:"Here is a brief introduction to who we are and the Talawa projects.",source:"@site/docs/about.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/about.md",tags:[],version:"current",frontMatter:{id:"about",title:"About Us",slug:"/"},sidebar:"someSidebar",next:{title:"Applications",permalink:"/docs/applications/architecture-overview"}},s={},c=[{value:"About Palisadoes",id:"about-palisadoes",level:3},{value:"About Talawa",id:"about-talawa",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is a brief introduction to who we are and the Talawa projects."),(0,o.kt)("h3",{id:"about-palisadoes"},"About Palisadoes"),(0,o.kt)("p",null,"The Palisadoes Foundation aims to provide new avenues for promoting Jamaica\u2019s technology talent through a series of programs that create increased awareness of the island\u2019s abilities in the global marketplace. It was founded by Jamaicans living in the United States.\n\u200b"),(0,o.kt)("p",null,"Since 2016 we have managed the Calico Challenge which gives Jamaican students the opportunity to work on Open Source projects under the guidance of a mentor. Stipends are paid upon achieving pre-defined milestones. Funding is provided by the generous donations of many individuals and corporations. The open source projects are available under the Palisadoes Foundation\u2019s GitHub account.\n\u200b"),(0,o.kt)("p",null,"Calico is modeled on the Google Summer of Code. In 2021 The Palisadoes Foundation was awarded participation in the Google Summer of Code."),(0,o.kt)("h3",{id:"about-talawa"},"About Talawa"),(0,o.kt)("p",null,"Talawa was created to help community based organizations collaborate with their membership. These organizations would include religious groups, non-profit charities, social groups and in limited cases, businesses.\n\u200b\nThough software applications exist for these types of organizations (eg. Breeze ChMS, The Realm) they assume their memberships are fully literate and have access to email. We wanted to create a system that would work for countries with similar technology and education challenges as Jamaica.\n\u200b\nTalawa has three main components: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A mobile application with social media features,"),(0,o.kt)("li",{parentName:"ul"},"A web based portal to be used by the organization\u2019s administrative team, and "),(0,o.kt)("li",{parentName:"ul"},"An API providing access to data and features.")),(0,o.kt)("p",null,"\u200b\u200b\nThe Palisadoes Foundation wants to eventually host Talawa as a cloud service to help finance its education outreach.\n\u200b\nTalawa\u2019s desired main features are:\n\u200b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User news feed"),(0,o.kt)("li",{parentName:"ol"},"Event calendars with lightweight project management"),(0,o.kt)("li",{parentName:"ol"},"Group chats"),(0,o.kt)("li",{parentName:"ol"},"Member notifications"),(0,o.kt)("li",{parentName:"ol"},"Donation acceptance"),(0,o.kt)("li",{parentName:"ol"},"Service provider level multi-organization capability"),(0,o.kt)("li",{parentName:"ol"},"Plugin support for administration services such as billing")))}d.isMDXComponent=!0}}]);