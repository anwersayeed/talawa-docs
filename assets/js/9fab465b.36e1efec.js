"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[4096],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>c});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(o),c=a,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||n;return o?r.createElement(h,i(i({ref:t},m),{},{components:o})):r.createElement(h,i({ref:t},m))}));function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3746:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=o(3117),a=(o(7294),o(3905));const n={id:"event-roles",title:"Assign Event Roles"},i=void 0,s={unversionedId:"features/events/event-roles",id:"features/events/event-roles",title:"Assign Event Roles",description:"This section is a work in progress.",source:"@site/docs/features/events/roles.md",sourceDirName:"features/events",slug:"/features/events/event-roles",permalink:"/talawa-docs/docs/features/events/event-roles",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/docs/features/events/roles.md",tags:[],version:"current",frontMatter:{id:"event-roles",title:"Assign Event Roles"},sidebar:"someSidebar",previous:{title:"Event Grouping",permalink:"/talawa-docs/docs/features/events/event-grouping"},next:{title:"View Attendee List",permalink:"/talawa-docs/docs/features/events/event-attendee-roster"}},l={},p=[{value:"Code: EVT-003",id:"code-evt-003",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],m={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,a.kt)("h2",{id:"code-evt-003"},"Code: EVT-003"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Authored by")," ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"Shannika Jackson")," ")," ",(0,a.kt)("em",{parentName:"p"},"Last updated on")," ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"March 16, 2021")," ")),(0,a.kt)("p",null,"This feature aims to ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"enhance event management options")," ")," by ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"allowing coordinators to assign tasks to other members of the organization")," "),"."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"There currently exists only one role:")," there is a need for allowed activities to be governed by the users","'"," role in the organization",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Administrator"),(0,a.kt)("li",{parentName:"ol"},"Coordinator"),(0,a.kt)("li",{parentName:"ol"},"Member"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Tasks currently cannot be assigned based on role"))),(0,a.kt)("h3",{id:"goals"},"Goals"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Implement framework to facilitate multiple roles in application:")," This will facilitate the different allowed activities")),(0,a.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,a.kt)("p",null,"The following are aspects of this feature which have been considered but are outside of the scope for the current project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create groups:")," members in future want to create groups to which they can send group messages, assign to tasks and target other communication")),(0,a.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,a.kt)("p",null,"The following are the primary roles foreseen in the development of this feature"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Feature Lead")," : will review proposed solutions, acceptance and close feature.")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("h3",{id:"use-cases"},"Use Cases"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Admins want to")," :",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Promote members to coordinators")," : adding coordinators to an organization helps the admin to manage members and content. This should be done via a desktop/web client, and mobile."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Coordinators want to")," :",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Remove inappropriate posts")," : members may add posts that are inappropriate and the coordinator must have the ability to remove them at a moment","'","s notice via mobile application."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Assign event tasks to other members and groups"))))),(0,a.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,a.kt)("h3",{id:"user-experience"},"User Experience"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Promote members to coordinators:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the admin portal on the web client or the mobile app, an administrator must be able to view a list of members in an organization",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"A menu or option button must be presented to the administrator in order to perform additional actions to the member account/ profile."),(0,a.kt)("li",{parentName:"ol"},"From this menu the administrator must be presented with the option to promote the member to a coordinator."),(0,a.kt)("li",{parentName:"ol"},"Once this is selected and the changes committed, the newly created coordinator must be able to perform the tasks of a coordinator")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Removing inappropriate posts:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the mobile app or the web client a coordinator or an admin show see additional options for each post.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"They should be able to select remove post from these additional options"),(0,a.kt)("li",{parentName:"ol"},"The post must then be removed from the news feed of all members and a message sent to the author of the post that is was removed")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Assigning members to event tasks:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From events detail view or the create event view a coordinator or an admin user must be presented with the option to create task list"),(0,a.kt)("li",{parentName:"ol"},"Once the create task list option is selected, the user is prompted to enter basic details for the task eg. print flyers",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Additionally the user must be presented with the option to assign the task to a member"),(0,a.kt)("li",{parentName:"ol"},"Once this option is selected a list of the members in the organisation or the groups are presented with muli-select option"),(0,a.kt)("li",{parentName:"ol"},"After selecting the members or groups to assign to the tasks the user should be able to commit their changes and is redirected to the task detail where the users assigned to the task are displayed"),(0,a.kt)("li",{parentName:"ol"},"The option must also be available to remove an assigned member or group from the task and commit the changes")))),(0,a.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,a.kt)("p",null,"NA"),(0,a.kt)("h3",{id:"future-work"},"Future Work"),(0,a.kt)("p",null,"Items mentioned in the Out of scope section will form the basis for future work to be done on this feature"),(0,a.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,a.kt)("p",null,"TBD"))}d.isMDXComponent=!0}}]);