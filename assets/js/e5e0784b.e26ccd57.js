"use strict";(self.webpackChunkdebcrafter_docs=self.webpackChunkdebcrafter_docs||[]).push([[3584],{5788:(e,a,t)=>{t.d(a,{Iu:()=>c,yg:()=>h});var i=t(1504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=i.createContext({}),p=function(e){var a=i.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return i.createElement(o.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},g=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=n,h=d["".concat(o,".").concat(g)]||d[g]||u[g]||r;return t?i.createElement(h,l(l({ref:a},c),{},{components:t})):i.createElement(h,l({ref:a},c))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=g;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8140:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=t(5072),n=(t(1504),t(5788));const r={},l="Shared Simple fields",s={unversionedId:"package-specification/sps/shared-fields",id:"package-specification/sps/shared-fields",title:"Shared Simple fields",description:"add_dirs",source:"@site/docs/06-package-specification/02-sps/02-shared-fields.md",sourceDirName:"06-package-specification/02-sps",slug:"/package-specification/sps/shared-fields",permalink:"/docs/package-specification/sps/shared-fields",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-package-specification/02-sps/02-shared-fields.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debian Shared fields",permalink:"/docs/package-specification/sps/debian-fields"},next:{title:"Shared Config fields",permalink:"/docs/package-specification/sps/config-shared-fields"}},o={},p=[{value:"add_dirs",id:"add_dirs",level:2},{value:"add_files",id:"add_files",level:2},{value:"add_links",id:"add_links",level:2},{value:"add_manpages",id:"add_manpages",level:2},{value:"patch_foreign",id:"patch_foreign",level:2},{value:"min_patch",id:"min_patch",level:2}],c={toc:p},d="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(d,(0,i.c)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"shared-simple-fields"},"Shared Simple fields"),(0,n.yg)("h2",{id:"add_dirs"},"add_dirs"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Type: List of TemplateString"),(0,n.yg)("li",{parentName:"ul"},"Example:",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-toml"},'add_dirs = ["/etc/tor/torrc.d", "/etc/tor/hidden-services.d"]\n')))),(0,n.yg)("p",null,"A list of extra directories to be installed alongside the package. Each value specifies a directory path, indicating where these directories will be created during the package installation process. This is helpful when you need to include supplementary directories in your package distribution."),(0,n.yg)("h2",{id:"add_files"},"add_files"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Type: List of TemplateString"),(0,n.yg)("li",{parentName:"ul"},"Example:",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-toml"},'add_files = ["lnd /usr/bin", "lib/bash.sh /usr/share/lnd/lib", "get_external_addr.sh /usr/share/lnd"]\n')))),(0,n.yg)("p",null,"A list specifying additional files to be installed alongside the package. Each entry defines a file path, allowing you to include extra files in the package distribution. These files will be copied or installed to the appropriate locations during package installation, ensuring their availability for use."),(0,n.yg)("h2",{id:"add_links"},"add_links"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Type: List of TemplateString"),(0,n.yg)("li",{parentName:"ul"},"Example:",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-toml"},'add_links = ["/usr/lib/NBXplorer/NBXplorer /usr/bin/nbxplorer"]\n')))),(0,n.yg)("p",null,"A list used to specify extra symbolic links that should be created during the package installation. Each entry defines a symbolic link, indicating the source file or directory and the destination to which the symbolic link should point. This allows you to establish symbolic links as part of the package installation, simplifying dependency management or providing shortcuts to important resources."),(0,n.yg)("h2",{id:"add_manpages"},"add_manpages"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Type: List of TemplateString"),(0,n.yg)("li",{parentName:"ul"},"Example:",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-toml"},'add_manpages = ["target/man/selfhost-dashboard.1"]\n')))),(0,n.yg)("p",null,"A list of path values used to specify extra man pages that should be bundled with the package. Each entry defines the source path of the man page. Man pages play a vital role in documenting command-line tools and utilities."),(0,n.yg)("h2",{id:"patch_foreign"},"patch_foreign"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Type: Map of String to String")),(0,n.yg)("p",null,'"patch_foreign" is intended for files that are not part of this package.'),(0,n.yg)("p",null,"It consists of a mapping of file paths on the system to their corresponding patch file paths. This mapping is used to specify which patches should be applied to certain files during the installation or configuration of the package. Each entry in the map consists of a file path as the key and the path to the associated patch file as the value."),(0,n.yg)("p",null,"For instance:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-toml"},'[patch_foreign]\n"/usr/share/tor/tor-service-defaults-torrc" = "/usr/share/tor-hs-patch-config/defaults.patch"\n"/etc/apparmor.d/local/system_tor" = "/usr/share/tor-hs-patch-config/apparmor.patch"\n')),(0,n.yg)("p",null,"Here, the package will apply the ",(0,n.yg)("inlineCode",{parentName:"p"},"defaults.patch")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"/usr/share/tor/tor-service-defaults-torrc")," and the ",(0,n.yg)("inlineCode",{parentName:"p"},"apparmor.patch")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"/etc/apparmor.d/local/system_tor")," during installation or configuration. This is commonly used to apply custom patches or configuration changes to specific files as part of the package installation process."),(0,n.yg)("h2",{id:"min_patch"},"min_patch"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Type: String")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Example"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-toml"},'min_patch = "1"\n')))),(0,n.yg)("p",null,'The minimum required patch level for the package. This value represents a specific component of the version known as the "patch."'),(0,n.yg)("p",null,'It\'s important to note that the package always depends on the same upstream version of the package it was built with. For instance, if you have a binary package named "foo" with version 1.2.3-4 and a service package named "foo-system," the "foo-system" package will automatically depend on "foo" with a version greater than or equal to "1.2.3-1" unless the "min_patch" value is increased. If the "min_patch" is set to "5," it will depend on "foo" with a version greater than or equal to "1.2.3-5."'))}u.isMDXComponent=!0}}]);