"use strict";(self.webpackChunkdebcrafter_docs=self.webpackChunkdebcrafter_docs||[]).push([[1472],{5788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>y});var i=a(1504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),o=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=o(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(a),u=n,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return a?i.createElement(y,r(r({ref:t},p),{},{components:a})):i.createElement(y,r({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:n,r[1]=c;for(var o=2;o<s;o++)r[o]=a[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7532:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=a(5072),n=(a(1504),a(5788));const s={sidebar_position:2},r="SPS",c={unversionedId:"sps/index",id:"sps/index",title:"SPS",description:'.sps - "smart package specification" - defines how individual packages look and behave.',source:"@site/docs/08-sps/index.md",sourceDirName:"08-sps",slug:"/sps/",permalink:"/debcrafter-docs/docs/sps/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/08-sps/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SSS",permalink:"/debcrafter-docs/docs/sss"},next:{title:"Debian Shared fields",permalink:"/debcrafter-docs/docs/sps/debian-fields"}},l={},o=[{value:"SPS specification",id:"sps-specification",level:2},{value:"To check with Martin if the document is correct, some notable questions:",id:"to-check-with-martin-if-the-document-is-correct-some-notable-questions",level:2}],p={toc:o},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,i.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"sps"},"SPS"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},".sps"),' - "smart package specification" - defines how individual packages look and behave.'),(0,n.yg)("p",null,"There are three kinds of ",(0,n.yg)("inlineCode",{parentName:"p"},"sps")," files:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Basic - most often contains just binaries or dumb data."),(0,n.yg)("li",{parentName:"ul"},"Service - defines a service launched with the system (e.g. ",(0,n.yg)("inlineCode",{parentName:"li"},"bitcoind"),") and the corresponding package.\nThese are often parametrised over bitcoin network (",(0,n.yg)("inlineCode",{parentName:"li"},"mainnet"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"regtest"),")"),(0,n.yg)("li",{parentName:"ul"},"Configuration extensions - define packages that control configuration.\nThese are used for settings that need to be enforced by the depending packages.\nThe main idea is to avoid conflicting configuration and other issues.")),(0,n.yg)("p",null,"The kind of SPS package is inferred from content and can not be distinguished otherwise.\nBasically, if the file contains service-related options it's a service package, if it contains ",(0,n.yg)("inlineCode",{parentName:"p"},"architecture")," key it's a basic package, everything else is a configuration extension."),(0,n.yg)("h2",{id:"sps-specification"},"SPS specification"),(0,n.yg)("p",null,"The structure"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-toml"},"# Debian fields\n# Shared fields\n# One of:  Basic fields | Service fields | ConfExt  fields\n\n## Config related shared fields\n## [config]\n## [map_variant]\n## [alternatives]\n## [[plug]]\n## [databases]\n## [migrations]\n")),(0,n.yg)("h2",{id:"to-check-with-martin-if-the-document-is-correct-some-notable-questions"},"To check with Martin if the document is correct, some notable questions:"),(0,n.yg)("ul",{className:"contains-task-list"},(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","structure field"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","val field"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","condition field"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","conf.d"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","VPackageName naming"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","conf.param is that correct?"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","check TemplateString"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","TODO check if [","[plug]","] is correct"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","TODO check if alternatives section is correct"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","TODO where are ",(0,n.yg)("inlineCode",{parentName:"li"},"@variant")," values come from"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","check migrations")),(0,n.yg)("p",null,"For me to fill out:"),(0,n.yg)("ul",{className:"contains-task-list"},(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","add example for ivars with allowed values"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","add examples for evars"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","add examples of hvars"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","FileVar"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","TODO document requires field"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","TODO add links to debconf"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","TODO add links to system.d"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","TODO add backlink reference to types"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","TODO add links to debcrafter"),(0,n.yg)("li",{parentName:"ul",className:"task-list-item"},(0,n.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","TODO check if the architecture field are correct")))}m.isMDXComponent=!0}}]);