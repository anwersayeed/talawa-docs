"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[68154],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=i(a),u=n,b=m["".concat(c,".").concat(u)]||m[u]||p[u]||s;return a?r.createElement(b,o(o({ref:t},d),{},{components:a})):r.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23330:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=a(87462),n=a(67294),s=a(3905);const o={id:"membership-request",title:"MembershipRequest",hide_table_of_contents:!1},l=void 0,c={unversionedId:"schema/objects/membership-request",id:"schema/objects/membership-request",title:"MembershipRequest",description:"No description",source:"@site/docs/schema/objects/membership-request.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/membership-request",permalink:"/docs/schema/objects/membership-request",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/membership-request.mdx",tags:[],version:"current",frontMatter:{id:"membership-request",title:"MembershipRequest",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Language",permalink:"/docs/schema/objects/language"},next:{title:"MessageChat",permalink:"/docs/schema/objects/message-chat"}},i={},d=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipRequest.<b>_id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-membershiprequestb_idbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipRequest.<b>user</b></code><Bullet /><code>User!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-membershiprequestbuserbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MembershipRequest.<b>organization</b></code><Bullet /><code>Organization!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-membershiprequestborganizationbcodeorganization--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[c,i]=(0,n.useState)(l);return(0,s.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&o)},h={Bullet:d,SpecifiedBy:m,Badge:p,toc:u,Details:b},y="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(y,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type MembershipRequest {\n  _id: ID!\n  user: User!\n  organization: Organization!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-membershiprequestb_idbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MembershipRequest.",(0,s.kt)("b",null,"_","id"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-membershiprequestbuserbcodeuser--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MembershipRequest.",(0,s.kt)("b",null,"user"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-membershiprequestborganizationbcodeorganization--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"MembershipRequest.",(0,s.kt)("b",null,"organization"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/organization"},(0,s.kt)("inlineCode",{parentName:"a"},"Organization!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"returned-by"},"Returned by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/accept-membership-request"},(0,s.kt)("inlineCode",{parentName:"a"},"acceptMembershipRequest"))," ",(0,s.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/cancel-membership-request"},(0,s.kt)("inlineCode",{parentName:"a"},"cancelMembershipRequest"))," ",(0,s.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/reject-membership-request"},(0,s.kt)("inlineCode",{parentName:"a"},"rejectMembershipRequest"))," ",(0,s.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/send-membership-request"},(0,s.kt)("inlineCode",{parentName:"a"},"sendMembershipRequest"))," ",(0,s.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/organization"},(0,s.kt)("inlineCode",{parentName:"a"},"Organization"))," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);