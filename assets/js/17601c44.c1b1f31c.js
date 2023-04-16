"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[87774],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=m(a),u=s,k=c["".concat(p,".").concat(u)]||c[u]||l[u]||r;return a?n.createElement(k,d(d({ref:t},i),{},{components:a})):n.createElement(k,d({ref:t},i))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,d=new Array(r);d[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:s,d[1]=o;for(var m=2;m<r;m++)d[m]=a[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65775:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>l,Bullet:()=>i,Details:()=>k,SpecifiedBy:()=>c,assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var n=a(87462),s=a(67294),r=a(3905);const d={id:"id",title:"ID",hide_table_of_contents:!1},o=void 0,p={unversionedId:"schema/scalars/id",id:"schema/scalars/id",title:"ID",description:'The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as "4") or integer (such as 4) input value will be accepted as an ID.',source:"@site/docs/schema/scalars/id.mdx",sourceDirName:"schema/scalars",slug:"/schema/scalars/id",permalink:"/docs/schema/scalars/id",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/scalars/id.mdx",tags:[],version:"current",frontMatter:{id:"id",title:"ID",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Float",permalink:"/docs/schema/scalars/float"},next:{title:"Int",permalink:"/docs/schema/scalars/int"}},m={},i=()=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,r.kt)(s.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),l=e=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:o=!1}=e;const[p,m]=(0,s.useState)(o);return(0,r.kt)("details",(0,n.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),m((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&d)},y={Bullet:i,SpecifiedBy:c,Badge:l,toc:u,Details:k},x="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(x,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"4"'),") or integer (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),") input value will be accepted as an ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar ID\n")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/accept-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"acceptAdmin"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/accept-membership-request"},(0,r.kt)("inlineCode",{parentName:"a"},"acceptMembershipRequest"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/add-user-to-group-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"addUserToGroupChat"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/admin-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"adminPlugin"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/admin-remove-event"},(0,r.kt)("inlineCode",{parentName:"a"},"adminRemoveEvent"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/admin-remove-group"},(0,r.kt)("inlineCode",{parentName:"a"},"adminRemoveGroup"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/block-plugin-creation-by-superadmin"},(0,r.kt)("inlineCode",{parentName:"a"},"blockPluginCreationBySuperadmin"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/block-user"},(0,r.kt)("inlineCode",{parentName:"a"},"blockUser"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/cancel-membership-request"},(0,r.kt)("inlineCode",{parentName:"a"},"cancelMembershipRequest"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/comment"},(0,r.kt)("inlineCode",{parentName:"a"},"Comment"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/create-chat-input"},(0,r.kt)("inlineCode",{parentName:"a"},"createChatInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-comment"},(0,r.kt)("inlineCode",{parentName:"a"},"createComment"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-donation"},(0,r.kt)("inlineCode",{parentName:"a"},"createDonation"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/create-group-chat-input"},(0,r.kt)("inlineCode",{parentName:"a"},"createGroupChatInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"createPlugin"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-task"},(0,r.kt)("inlineCode",{parentName:"a"},"createTask"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/create-user-tag-input"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateUserTagInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/delete-donation-by-id"},(0,r.kt)("inlineCode",{parentName:"a"},"deleteDonationById"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/direct-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"DirectChat"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/direct-chat-message"},(0,r.kt)("inlineCode",{parentName:"a"},"DirectChatMessage"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/direct-chats-by-user-id"},(0,r.kt)("inlineCode",{parentName:"a"},"directChatsByUserID"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/direct-chats-messages-by-chat-id"},(0,r.kt)("inlineCode",{parentName:"a"},"directChatsMessagesByChatID"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/donation"},(0,r.kt)("inlineCode",{parentName:"a"},"Donation"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/donation-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"DonationWhereInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/event"},(0,r.kt)("inlineCode",{parentName:"a"},"event"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/event-input"},(0,r.kt)("inlineCode",{parentName:"a"},"EventInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/events-by-organization"},(0,r.kt)("inlineCode",{parentName:"a"},"eventsByOrganization"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/event-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"EventWhereInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/get-donation-by-id"},(0,r.kt)("inlineCode",{parentName:"a"},"getDonationById"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/get-donation-by-org-id"},(0,r.kt)("inlineCode",{parentName:"a"},"getDonationByOrgId"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/get-donation-by-org-id-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"getDonationByOrgIdConnection"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/group"},(0,r.kt)("inlineCode",{parentName:"a"},"Group"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/group-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupChat"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/group-chat-message"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupChatMessage"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/is-user-register"},(0,r.kt)("inlineCode",{parentName:"a"},"isUserRegister"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/joined-organizations"},(0,r.kt)("inlineCode",{parentName:"a"},"joinedOrganizations"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/join-public-organization"},(0,r.kt)("inlineCode",{parentName:"a"},"joinPublicOrganization"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/language"},(0,r.kt)("inlineCode",{parentName:"a"},"Language"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/language-model"},(0,r.kt)("inlineCode",{parentName:"a"},"LanguageModel"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/leave-organization"},(0,r.kt)("inlineCode",{parentName:"a"},"leaveOrganization"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/like-comment"},(0,r.kt)("inlineCode",{parentName:"a"},"likeComment"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/like-post"},(0,r.kt)("inlineCode",{parentName:"a"},"likePost"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/membership-request"},(0,r.kt)("inlineCode",{parentName:"a"},"MembershipRequest"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/message-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageChat"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/message-chat-input"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageChatInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/organization"},(0,r.kt)("inlineCode",{parentName:"a"},"Organization"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/organization-info-node"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationInfoNode"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/organizations"},(0,r.kt)("inlineCode",{parentName:"a"},"organizations"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/organizations-member-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"organizationsMemberConnection"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/organization-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationWhereInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"Plugin"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"plugin"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/plugin-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PluginInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/post"},(0,r.kt)("inlineCode",{parentName:"a"},"Post"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/post"},(0,r.kt)("inlineCode",{parentName:"a"},"post"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/post-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PostInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/posts-by-organization"},(0,r.kt)("inlineCode",{parentName:"a"},"postsByOrganization"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/posts-by-organization-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"postsByOrganizationConnection"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/post-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PostWhereInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/registered-events-by-user"},(0,r.kt)("inlineCode",{parentName:"a"},"registeredEventsByUser"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/register-for-event"},(0,r.kt)("inlineCode",{parentName:"a"},"registerForEvent"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/registrants-by-event"},(0,r.kt)("inlineCode",{parentName:"a"},"registrantsByEvent"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/reject-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"rejectAdmin"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/reject-membership-request"},(0,r.kt)("inlineCode",{parentName:"a"},"rejectMembershipRequest"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-comment"},(0,r.kt)("inlineCode",{parentName:"a"},"removeComment"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-direct-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"removeDirectChat"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-event"},(0,r.kt)("inlineCode",{parentName:"a"},"removeEvent"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-group-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"removeGroupChat"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-organization"},(0,r.kt)("inlineCode",{parentName:"a"},"removeOrganization"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-post"},(0,r.kt)("inlineCode",{parentName:"a"},"removePost"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-task"},(0,r.kt)("inlineCode",{parentName:"a"},"removeTask"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-user-from-group-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"removeUserFromGroupChat"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-user-tag"},(0,r.kt)("inlineCode",{parentName:"a"},"removeUserTag"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/send-membership-request"},(0,r.kt)("inlineCode",{parentName:"a"},"sendMembershipRequest"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/send-message-to-direct-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"sendMessageToDirectChat"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/send-message-to-group-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"sendMessageToGroupChat"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/task"},(0,r.kt)("inlineCode",{parentName:"a"},"Task"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/tasks-by-event"},(0,r.kt)("inlineCode",{parentName:"a"},"tasksByEvent"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/tasks-by-user"},(0,r.kt)("inlineCode",{parentName:"a"},"tasksByUser"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/toggle-post-pin"},(0,r.kt)("inlineCode",{parentName:"a"},"togglePostPin"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/toggle-user-tag-assign-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ToggleUserTagAssignInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/unblock-user"},(0,r.kt)("inlineCode",{parentName:"a"},"unblockUser"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/unlike-comment"},(0,r.kt)("inlineCode",{parentName:"a"},"unlikeComment"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/unlike-post"},(0,r.kt)("inlineCode",{parentName:"a"},"unlikePost"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/unregister-for-event-by-user"},(0,r.kt)("inlineCode",{parentName:"a"},"unregisterForEventByUser"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-event"},(0,r.kt)("inlineCode",{parentName:"a"},"updateEvent"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-organization"},(0,r.kt)("inlineCode",{parentName:"a"},"updateOrganization"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-plugin-installed-orgs"},(0,r.kt)("inlineCode",{parentName:"a"},"updatePluginInstalledOrgs"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-plugin-status"},(0,r.kt)("inlineCode",{parentName:"a"},"updatePluginStatus"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-post"},(0,r.kt)("inlineCode",{parentName:"a"},"updatePost"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-task"},(0,r.kt)("inlineCode",{parentName:"a"},"updateTask"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/update-user-tag-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateUserTagInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/update-user-type-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateUserTypeInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/user"},(0,r.kt)("inlineCode",{parentName:"a"},"user"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/user-and-organization-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UserAndOrganizationInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user-attende"},(0,r.kt)("inlineCode",{parentName:"a"},"UserAttende"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/user-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UserInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/user-language"},(0,r.kt)("inlineCode",{parentName:"a"},"userLanguage"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user-tag"},(0,r.kt)("inlineCode",{parentName:"a"},"UserTag"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/user-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UserWhereInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);