"use strict";(self.webpackChunkdebcrafter_docs=self.webpackChunkdebcrafter_docs||[]).push([[3596],{5788:(e,n,r)=>{r.d(n,{Iu:()=>d,yg:()=>y});var o=r(1504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=o.createContext({}),l=function(e){var n=o.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=t,y=p["".concat(c,".").concat(g)]||p[g]||u[g]||a;return r?o.createElement(y,i(i({ref:n},d),{},{components:r})):o.createElement(y,i({ref:n},d))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:t,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9188:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(5072),t=(r(1504),r(5788));const a={sidebar_position:1},i="Manage Docs Versions",s={unversionedId:"packaging-confext/manage-docs-versions",id:"packaging-confext/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/05-packaging-confext/manage-docs-versions.md",sourceDirName:"05-packaging-confext",slug:"/packaging-confext/manage-docs-versions",permalink:"/debcrafter-docs/docs/packaging-confext/manage-docs-versions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-packaging-confext/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Packaging - Configuration Extension",permalink:"/debcrafter-docs/docs/category/packaging---configuration-extension"},next:{title:"Translate your site",permalink:"/debcrafter-docs/docs/packaging-confext/translate-your-site"}},c={},l=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],d={toc:l},p="wrapper";function u(e){let{components:n,...a}=e;return(0,t.yg)(p,(0,o.c)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,t.yg)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,t.yg)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,t.yg)("p",null,"Release a version 1.0 of your project:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,t.yg)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,t.yg)("p",null,"Your docs now have 2 versions:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"1.0")," at ",(0,t.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"current")," at ",(0,t.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,t.yg)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,t.yg)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,t.yg)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,t.yg)("p",null,"Modify the ",(0,t.yg)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,t.yg)("p",null,"The docs version dropdown appears in your navbar:"),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"Docs Version Dropdown",src:r(6692).c,width:"370",height:"302"})),(0,t.yg)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,t.yg)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,t.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,t.yg)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}u.isMDXComponent=!0},6692:(e,n,r)=>{r.d(n,{c:()=>o});const o=r.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"}}]);