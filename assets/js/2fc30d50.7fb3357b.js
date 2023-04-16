"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[79825],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},i="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),i=c(a),u=s,k=i["".concat(o,".").concat(u)]||i[u]||l[u]||r;return a?n.createElement(k,p(p({ref:t},m),{},{components:a})):n.createElement(k,p({ref:t},m))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,p=new Array(r);p[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[i]="string"==typeof e?e:s,p[1]=d;for(var c=2;c<r;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35034:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>l,Bullet:()=>m,Details:()=>k,SpecifiedBy:()=>i,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var n=a(87462),s=a(67294),r=a(3905);const p={id:"string",title:"String",hide_table_of_contents:!1},d=void 0,o={unversionedId:"schema/scalars/string",id:"schema/scalars/string",title:"String",description:"The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",source:"@site/docs/schema/scalars/string.mdx",sourceDirName:"schema/scalars",slug:"/schema/scalars/string",permalink:"/docs/schema/scalars/string",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/scalars/string.mdx",tags:[],version:"current",frontMatter:{id:"string",title:"String",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PositiveInt",permalink:"/docs/schema/scalars/positive-int"},next:{title:"Time",permalink:"/docs/schema/scalars/time"}},c={},m=()=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,r.kt)(s.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),l=e=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:p,startOpen:d=!1}=e;const[o,c]=(0,s.useState)(d);return(0,r.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&p)},y={Bullet:m,SpecifiedBy:i,Badge:l,toc:u,Details:k},x="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(x,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar String\n")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/my-language"},(0,r.kt)("inlineCode",{parentName:"a"},"myLanguage"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/user-language"},(0,r.kt)("inlineCode",{parentName:"a"},"userLanguage"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/add-organization-image"},(0,r.kt)("inlineCode",{parentName:"a"},"addOrganizationImage"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/add-user-image"},(0,r.kt)("inlineCode",{parentName:"a"},"addUserImage"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/android-firebase-options"},(0,r.kt)("inlineCode",{parentName:"a"},"AndroidFirebaseOptions"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/auth-data"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthData"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/comment"},(0,r.kt)("inlineCode",{parentName:"a"},"Comment"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/comment-input"},(0,r.kt)("inlineCode",{parentName:"a"},"CommentInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/connection-page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnectionPageInfo"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-donation"},(0,r.kt)("inlineCode",{parentName:"a"},"createDonation"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/create-group-chat-input"},(0,r.kt)("inlineCode",{parentName:"a"},"createGroupChatInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-organization"},(0,r.kt)("inlineCode",{parentName:"a"},"createOrganization"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"createPlugin"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-post"},(0,r.kt)("inlineCode",{parentName:"a"},"createPost"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/create-user-tag-input"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateUserTagInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/directives/deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"deprecated"))," ",(0,r.kt)(l,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/direct-chat-message"},(0,r.kt)("inlineCode",{parentName:"a"},"DirectChatMessage"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/donation"},(0,r.kt)("inlineCode",{parentName:"a"},"Donation"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/donation-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"DonationWhereInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/event-input"},(0,r.kt)("inlineCode",{parentName:"a"},"EventInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/event-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"EventWhereInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/extend-session"},(0,r.kt)("inlineCode",{parentName:"a"},"ExtendSession"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/forgot-password-data"},(0,r.kt)("inlineCode",{parentName:"a"},"ForgotPasswordData"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/getlanguage"},(0,r.kt)("inlineCode",{parentName:"a"},"getlanguage"))," ",(0,r.kt)(l,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/group"},(0,r.kt)("inlineCode",{parentName:"a"},"Group"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/group-chat-message"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupChatMessage"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/iosfirebase-options"},(0,r.kt)("inlineCode",{parentName:"a"},"IOSFirebaseOptions"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/language"},(0,r.kt)("inlineCode",{parentName:"a"},"Language"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/language-input"},(0,r.kt)("inlineCode",{parentName:"a"},"LanguageInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/language-model"},(0,r.kt)("inlineCode",{parentName:"a"},"LanguageModel"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/login-input"},(0,r.kt)("inlineCode",{parentName:"a"},"LoginInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/message-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageChat"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/message-chat-input"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageChatInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/organization"},(0,r.kt)("inlineCode",{parentName:"a"},"Organization"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/organization-info-node"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationInfoNode"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/organization-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/organization-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationWhereInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/otp-data"},(0,r.kt)("inlineCode",{parentName:"a"},"OtpData"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"Plugin"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/plugin-field"},(0,r.kt)("inlineCode",{parentName:"a"},"PluginField"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/plugin-field-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PluginFieldInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/plugin-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PluginInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/post"},(0,r.kt)("inlineCode",{parentName:"a"},"Post"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/post-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PostInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/post-update-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PostUpdateInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/post-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PostWhereInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/recaptcha-verification"},(0,r.kt)("inlineCode",{parentName:"a"},"RecaptchaVerification"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/refresh-token"},(0,r.kt)("inlineCode",{parentName:"a"},"refreshToken"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-organization-image"},(0,r.kt)("inlineCode",{parentName:"a"},"removeOrganizationImage"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/revoke-refresh-token-for-user"},(0,r.kt)("inlineCode",{parentName:"a"},"revokeRefreshTokenForUser"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/save-fcm-token"},(0,r.kt)("inlineCode",{parentName:"a"},"saveFcmToken"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/send-message-to-direct-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"sendMessageToDirectChat"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/send-message-to-group-chat"},(0,r.kt)("inlineCode",{parentName:"a"},"sendMessageToGroupChat"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/sign-up"},(0,r.kt)("inlineCode",{parentName:"a"},"signUp"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/directives/specified-by"},(0,r.kt)("inlineCode",{parentName:"a"},"specifiedBy"))," ",(0,r.kt)(l,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/task"},(0,r.kt)("inlineCode",{parentName:"a"},"Task"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/task-input"},(0,r.kt)("inlineCode",{parentName:"a"},"TaskInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/translation"},(0,r.kt)("inlineCode",{parentName:"a"},"Translation"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/update-event-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateEventInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-language"},(0,r.kt)("inlineCode",{parentName:"a"},"updateLanguage"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-organization"},(0,r.kt)("inlineCode",{parentName:"a"},"updateOrganization"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/update-organization-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateOrganizationInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/update-task-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateTaskInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/update-user-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateUserInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/update-user-password-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateUserPasswordInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-user-profile"},(0,r.kt)("inlineCode",{parentName:"a"},"updateUserProfile"))," ",(0,r.kt)(l,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/update-user-tag-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateUserTagInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/update-user-type-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateUserTypeInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user-attende"},(0,r.kt)("inlineCode",{parentName:"a"},"UserAttende"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"UserEdge"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/user-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UserInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user-tag"},(0,r.kt)("inlineCode",{parentName:"a"},"UserTag"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user-tag-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"UserTagEdge"))," ",(0,r.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"../../../docs/schema/inputs/user-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UserWhereInput"))," ",(0,r.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);