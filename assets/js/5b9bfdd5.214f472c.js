"use strict";(self.webpackChunkdebcrafter_docs=self.webpackChunkdebcrafter_docs||[]).push([[6392],{5788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>d});var n=a(1504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),f=r,d=u["".concat(p,".").concat(f)]||u[f]||g[f]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(5072),r=(a(1504),a(5788));const i={},o="Types",l={unversionedId:"package-specification/sps/types",id:"package-specification/sps/types",title:"Types",description:"String",source:"@site/docs/06-package-specification/02-sps/07-types.md",sourceDirName:"06-package-specification/02-sps",slug:"/package-specification/sps/types",permalink:"/debcrafter-docs/docs/package-specification/sps/types",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-package-specification/02-sps/07-types.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConfExt Only fields",permalink:"/debcrafter-docs/docs/package-specification/sps/conf-ext-fields"}},p={},s=[{value:"String",id:"string",level:2},{value:"Bool",id:"bool",level:2},{value:"TemplateString",id:"templatestring",level:2},{value:"Confdir",id:"confdir",level:2},{value:"ConfParam",id:"confparam",level:2},{value:"UserSpec",id:"userspec",level:2},{value:"ExtraGroup",id:"extragroup",level:4},{value:"VPackageName",id:"vpackagename",level:2},{value:"FileVar",id:"filevar",level:2}],c={toc:s},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"types"},"Types"),(0,r.yg)("h2",{id:"string"},"String"),(0,r.yg)("h2",{id:"bool"},"Bool"),(0,r.yg)("h2",{id:"templatestring"},"TemplateString"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Defining a TemplateString:")),(0,r.yg)("p",null,"In your TOML configuration file, a ",(0,r.yg)("inlineCode",{parentName:"p"},"TemplateString")," can be defined as a string value enclosed in double (",(0,r.yg)("inlineCode",{parentName:"p"},'"'),") or triple (",(0,r.yg)("inlineCode",{parentName:"p"},'"""'),") quotes. Triple quotes are employed for multi-line strings. Placeholders for variables are included using curly braces ",(0,r.yg)("inlineCode",{parentName:"p"},"{}"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Using TemplateString in Configuration:")),(0,r.yg)("p",null,"To utilize the ",(0,r.yg)("inlineCode",{parentName:"p"},"TemplateString"),' in your configuration, reference it by its assigned name (e.g., "template") and incorporate variable values where required using the ',(0,r.yg)("inlineCode",{parentName:"p"},"{variable_name}")," format."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-toml"},'message = "This is a {variable} template."\n')),(0,r.yg)("p",null,"In this example, the ",(0,r.yg)("inlineCode",{parentName:"p"},"message")," field makes use of the ",(0,r.yg)("inlineCode",{parentName:"p"},"TemplateString"),' defined earlier, and the variable value, "customized," replaces ',(0,r.yg)("inlineCode",{parentName:"p"},"{variable}")," within the resulting message."),(0,r.yg)("h2",{id:"confdir"},"Confdir"),(0,r.yg)("p",null,"The ConfDir struct represents configuration directory settings and can be used within a TOML file to specify configuration directory attributes. Below is the documentation for the ConfDir struct:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-toml"},'\n# ConfDir Struct in TOML Configuration\n\n# The `ConfDir` struct is used to define configuration directory attributes.\n# It specifies the parameters and name of the configuration directory.\n\n# Example short usage:\nconf_d = { param = "--conf-dir", name = "my_config" }\n')),(0,r.yg)("p",null,"In the above TOML documentation:"),(0,r.yg)("p",null,"The ConfDir struct is explained as a way to define configuration directory attributes.\nIt includes two required fields:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"param: Specifies the parameter used to set the configuration directory. This parameter indicates the path or location of the configuration directory."),(0,r.yg)("li",{parentName:"ul"},"name: Specifies the name of the configuration directory, which is typically a user-defined identifier.\nAn example usage is provided to illustrate how to use the ConfDir struct within a TOML configuration file")),(0,r.yg)("h2",{id:"confparam"},"ConfParam"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ConfParam")," enum provides a way to define different types of configuration parametersin a TOML configuration file. It is designed to help you format configuration parameters correctly."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-toml"},'\n# Usage Examples:\n\n# To specify a configuration parameter with a value separated by a space, you can simply provide the parameter followed by the value.\n# Example:\n# conf_param = "--config /etc/my_config.conf"\nconf_param = "--config /etc/my_config.conf"\n\n# To specify a configuration parameter with a value without spaces, use an equals sign (=) to separate the parameter and its value.\n# Example:\n# conf_param = "--port=8080"\nconf_param = "--port=8080"\n\n# For a bare configuration parameter without a value, you can directly provide the parameter itself.\n# Example:\n# conf_param = "--verbose"\nconf_param = "--verbose"\n\n')),(0,r.yg)("h2",{id:"userspec"},"UserSpec"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-toml"},"# User Configuration Example\n\n# Short usage\nuser = { group = true, create = { home = false } }\n")),(0,r.yg)("h4",{id:"extragroup"},"ExtraGroup"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-toml"},"# Extra Group Configuration\n\n# The `ExtraGroup` struct is used to configure additional user groups in a TOML configuration file.\n\n[extra_group]\ncreate = true\n# Short Usage Example:\n\n# To configure an extra group, you can use the short syntax by directly specifying the `create` field with a boolean value.\n# Set `create` to `true` to create the extra group, or `false` to skip its creation.\n\n# Example:\nextra_group = { create = true }\n\n")),(0,r.yg)("h2",{id:"vpackagename"},"VPackageName"),(0,r.yg)("p",null,"TODO"),(0,r.yg)("h2",{id:"filevar"},"FileVar"),(0,r.yg)("p",null,"File vars are whole files that are loaded as a variable. They are mainly intended for json configuration. So other packages can place sub-objects in separate files that get added to the rest of the json under specified field when generating the final configuration in postinst"))}g.isMDXComponent=!0}}]);