"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[5367],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>h});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),l=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,h=p["".concat(d,".").concat(u)]||p[u]||c[u]||i;return a?t.createElement(h,o(o({ref:n},m),{},{components:a})):t.createElement(h,o({ref:n},m))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3051:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=a(7462),r=(a(7294),a(3905));const i={id:"admin",title:"Admin & Super Admin"},o=void 0,s={unversionedId:"developers/talawa-api/constraints/admin",id:"developers/talawa-api/constraints/admin",title:"Admin & Super Admin",description:"Who Is An Administrator (Admin)?",source:"@site/docs/developers/talawa-api/constraints/admin.md",sourceDirName:"developers/talawa-api/constraints",slug:"/developers/talawa-api/constraints/admin",permalink:"/docs/developers/talawa-api/constraints/admin",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/talawa-api/constraints/admin.md",tags:[],version:"current",frontMatter:{id:"admin",title:"Admin & Super Admin"},sidebar:"docs",previous:{title:"Organization",permalink:"/docs/developers/talawa-api/constraints/organization"},next:{title:"Mutations",permalink:"/docs/developers/talawa-api/mutations"}},d={},l=[{value:"Who Is An Administrator (<code>Admin</code>)?",id:"who-is-an-administrator-admin",level:2},{value:"What should an <code>Admin</code> do ?",id:"what-should-an-admin-do-",level:2},{value:"Super Admin",id:"super-admin",level:2},{value:"Who Is An Super Administrator (<code>SuperAdmin</code>)?",id:"who-is-an-super-administrator-superadmin",level:2},{value:"What should an <code>SuperAdmin</code> do ?",id:"what-should-an-superadmin-do-",level:2}],m={toc:l},p="wrapper";function c(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"who-is-an-administrator-admin"},"Who Is An Administrator (",(0,r.kt)("inlineCode",{parentName:"h2"},"Admin"),")?"),(0,r.kt)("p",null,"Administrators are users who have the ability to manage organizations."),(0,r.kt)("p",null,"They can change organization details, remove members from public organizations and moderate membership for private organizations, meaning they can accept or reject membership requests."),(0,r.kt)("p",null,"Administrators can remove any event, group chat or post belonging to the organization they're responsible for."),(0,r.kt)("p",null,"An administrator for an organization would be similar to a pastor for a church or the manager of a business."),(0,r.kt)("h2",{id:"what-should-an-admin-do-"},"What should an ",(0,r.kt)("inlineCode",{parentName:"h2"},"Admin")," do ?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add/ remove members from organisation."),(0,r.kt)("li",{parentName:"ol"},"Elevate/remove users to/from admin."),(0,r.kt)("li",{parentName:"ol"},"Create/Delete group chats."),(0,r.kt)("li",{parentName:"ol"},"Create/Delete events."),(0,r.kt)("li",{parentName:"ol"},"Admin can join/exit multiple organisations."),(0,r.kt)("li",{parentName:"ol"},"Admin can message everyone at once in an organization/s."),(0,r.kt)("li",{parentName:"ol"},"Admin can moderate newsfeed.\ni.Admin can delete post/s (at one time).\nii.Admin can enable/disable comments.\niii.Admin can archive posts.\niv.Admin can hide likes from a post.\nv.Admin can manage sharing limits of a post/event."),(0,r.kt)("li",{parentName:"ol"},"Admin can ban/unban user from organisation (with a documented reason).")),(0,r.kt)("h2",{id:"super-admin"},"Super Admin"),(0,r.kt)("h2",{id:"who-is-an-super-administrator-superadmin"},"Who Is An Super Administrator (",(0,r.kt)("inlineCode",{parentName:"h2"},"SuperAdmin"),")?"),(0,r.kt)("p",null,"In addition to having all Admin permissions, Super Administrators are users who have the ability to manage and moderate administrators and organizations."),(0,r.kt)("h2",{id:"what-should-an-superadmin-do-"},"What should an ",(0,r.kt)("inlineCode",{parentName:"h2"},"SuperAdmin")," do ?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"They can do what Admin can do but with higher access rights than Admin."),(0,r.kt)("li",{parentName:"ol"},"They can add/remove Admin's access to certain feature/s organization/s."),(0,r.kt)("li",{parentName:"ol"},"They can remove/ban Admins."),(0,r.kt)("li",{parentName:"ol"},"They can report Admins."),(0,r.kt)("li",{parentName:"ol"},"They can remove and moderate organizations."),(0,r.kt)("li",{parentName:"ol"},"They can ban/unban Admin from organisation or in general (with a documented reason).")))}c.isMDXComponent=!0}}]);