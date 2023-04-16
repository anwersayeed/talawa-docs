"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[76080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=i(n),p=l,m=u["".concat(s,".").concat(p)]||u[p]||g[p]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:l,o[1]=c;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78016:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),l=n(67294),r=n(3905);const o={id:"create-plugin",title:"createPlugin",hide_table_of_contents:!1},c=void 0,s={unversionedId:"schema/mutations/create-plugin",id:"schema/mutations/create-plugin",title:"createPlugin",description:"No description",source:"@site/docs/schema/mutations/create-plugin.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/create-plugin",permalink:"/docs/schema/mutations/create-plugin",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/create-plugin.mdx",tags:[],version:"current",frontMatter:{id:"create-plugin",title:"createPlugin",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"createOrganization",permalink:"/docs/schema/mutations/create-organization"},next:{title:"createPost",permalink:"/docs/schema/mutations/create-post"}},i={},d=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createPlugin.<b>pluginName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createpluginbpluginnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createPlugin.<b>pluginCreatedBy</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createpluginbplugincreatedbybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createPlugin.<b>pluginDesc</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createpluginbplugindescbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createPlugin.<b>pluginInstallStatus</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createpluginbplugininstallstatusbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createPlugin.<b>installedOrgs</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createpluginbinstalledorgsbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Plugin</code> <Badge class="secondary" text="object"/>',id:"plugin-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:c=!1}=e;const[s,i]=(0,l.useState)(c);return(0,r.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&o)},y={Bullet:d,SpecifiedBy:u,Badge:g,toc:p,Details:m},f="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"createPlugin(\n  pluginName: String!\n  pluginCreatedBy: String!\n  pluginDesc: String!\n  pluginInstallStatus: Boolean!\n  installedOrgs: [ID!]\n): Plugin!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createpluginbpluginnamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"createPlugin.",(0,r.kt)("b",null,"pluginName"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createpluginbplugincreatedbybcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"createPlugin.",(0,r.kt)("b",null,"pluginCreatedBy"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createpluginbplugindescbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"createPlugin.",(0,r.kt)("b",null,"pluginDesc"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createpluginbplugininstallstatusbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"createPlugin.",(0,r.kt)("b",null,"pluginInstallStatus"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createpluginbinstalledorgsbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"createPlugin.",(0,r.kt)("b",null,"installedOrgs"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,r.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"plugin-"},(0,r.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"Plugin"))," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}k.isMDXComponent=!0}}]);