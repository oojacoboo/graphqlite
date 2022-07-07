"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),h=i,g=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={id:"implementing-security",title:"Connecting GraphQLite to your framework's security module",sidebar_label:"Connecting security to your framework",original_id:"implementing-security"},a=void 0,s={unversionedId:"implementing-security",id:"version-4.0/implementing-security",title:"Connecting GraphQLite to your framework's security module",description:"This step is NOT necessary for users using GraphQLite through the Symfony Bundle or the Laravel package",source:"@site/versioned_docs/version-4.0/implementing-security.md",sourceDirName:".",slug:"/implementing-security",permalink:"/docs/4.0/implementing-security",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/implementing-security.md",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657169592,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"implementing-security",title:"Connecting GraphQLite to your framework's security module",sidebar_label:"Connecting security to your framework",original_id:"implementing-security"},sidebar:"version-4.0/docs",previous:{title:"Fine grained security",permalink:"/docs/4.0/fine-grained-security"},next:{title:"Query plan",permalink:"/docs/4.0/query-plan"}},c={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"alert alert--info"},"This step is NOT necessary for users using GraphQLite through the Symfony Bundle or the Laravel package"),(0,i.kt)("p",null,"GraphQLite needs to know if a user is logged or not, and what rights it has.\nBut this is specific of the framework you use."),(0,i.kt)("p",null,"To plug GraphQLite to your framework's security mechanism, you will have to provide two classes implementing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Security\\AuthenticationServiceInterface")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Security\\AuthorizationServiceInterface"))),(0,i.kt)("p",null,"Those two interfaces act as adapters between GraphQLite and your framework:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'interface AuthenticationServiceInterface\n{\n    /**\n     * Returns true if the "current" user is logged\n     */\n    public function isLogged(): bool;\n\n    /**\n     * Returns an object representing the current logged user.\n     * Can return null if the user is not logged.\n     */\n    public function getUser(): ?object;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'interface AuthorizationServiceInterface\n{\n    /**\n     * Returns true if the "current" user has access to the right "$right"\n     *\n     * @param mixed $subject The scope this right applies on. $subject is typically an object or a FQCN. Set $subject to "null" if the right is global.\n     */\n    public function isAllowed(string $right, $subject = null): bool;\n}\n')),(0,i.kt)("p",null,"You need to write classes that implement these interfaces. Then, you must register those classes with GraphQLite.\nIt you are ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/other-frameworks"},"using the ",(0,i.kt)("inlineCode",{parentName:"a"},"SchemaFactory")),", you can register your classes using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Configure an authentication service (to resolve the @Logged annotations).\n$schemaFactory->setAuthenticationService($myAuthenticationService);\n// Configure an authorization service (to resolve the @Right annotations).\n$schemaFactory->setAuthorizationService($myAuthorizationService);\n")))}p.isMDXComponent=!0}}]);