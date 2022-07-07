"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2447],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:"semver",title:"Our backward compatibility promise",sidebar_label:"Semantic versioning"},i=void 0,s={unversionedId:"semver",id:"version-6.0/semver",title:"Our backward compatibility promise",description:"Ensuring smooth upgrades of your project is a priority. That's why we promise you backward compatibility (BC) for all minor GraphQLite releases. You probably recognize this strategy as Semantic Versioning. In short, Semantic Versioning means that only major releases (such as 4.0, 5.0 etc.) are allowed to break backward compatibility. Minor releases (such as 4.0, 4.1 etc.) may introduce new features, but must do so without breaking the existing API of that release branch (4.x in the previous example).",source:"@site/versioned_docs/version-6.0/semver.md",sourceDirName:".",slug:"/semver",permalink:"/docs/semver",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.0/semver.md",tags:[],version:"6.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657169592,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"semver",title:"Our backward compatibility promise",sidebar_label:"Semantic versioning"},sidebar:"docs",previous:{title:"Annotations reference",permalink:"/docs/annotations-reference"},next:{title:"Changelog",permalink:"/docs/changelog"}},l={},p=[],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ensuring smooth upgrades of your project is a priority. That's why we promise you backward compatibility (BC) for all minor GraphQLite releases. You probably recognize this strategy as ",(0,n.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning"),". In short, Semantic Versioning means that only major releases (such as 4.0, 5.0 etc.) are allowed to break backward compatibility. Minor releases (such as 4.0, 4.1 etc.) may introduce new features, but must do so without breaking the existing API of that release branch (4.x in the previous example)."),(0,n.kt)("p",null,'But sometimes, a new feature is not quite "dry" and we need a bit of time to find the perfect API.\nIn such cases, we prefer to gather feedback from real-world usage, adapt the API, or remove it altogether.\nDoing so is not possible with a no BC-break approach.'),(0,n.kt)("p",null,"To avoid being bound to our backward compatibility promise, such features can be marked as ",(0,n.kt)("strong",{parentName:"p"},"unstable")," or ",(0,n.kt)("strong",{parentName:"p"},"experimental")," and their classes and methods are marked with the ",(0,n.kt)("inlineCode",{parentName:"p"},"@unstable")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"@experimental")," tag."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@unstable")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"@experimental")," classes / methods will ",(0,n.kt)("strong",{parentName:"p"},"not break")," in a patch release, but ",(0,n.kt)("em",{parentName:"p"},"may be broken")," in a minor version."),(0,n.kt)("p",null,"As a rule of thumb:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you are a GraphQLite user (using GraphQLite mainly through its annotations), we guarantee strict semantic versioning"),(0,n.kt)("li",{parentName:"ul"},"If you are extending GraphQLite features (if you are developing custom annotations, or if you are developing a GraphQlite integration\nwith a framework...), be sure to check the tags.")),(0,n.kt)("p",null,"Said otherwise:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are a GraphQLite user, in your ",(0,n.kt)("inlineCode",{parentName:"p"},"composer.json"),", target a major version:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "thecodingmachine/graphqlite": "^4"\n  }\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are extending the GraphQLite ecosystem, in your ",(0,n.kt)("inlineCode",{parentName:"p"},"composer.json"),", target a minor version:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "thecodingmachine/graphqlite": "~4.1.0"\n  }\n}\n')))),(0,n.kt)("p",null,"Finally, classes / methods annotated with the ",(0,n.kt)("inlineCode",{parentName:"p"},"@internal")," annotation are not meant to be used in your code or third-party library. They are meant for GraphQLite internal usage and they may break anytime. Do not use those directly."))}m.isMDXComponent=!0}}]);