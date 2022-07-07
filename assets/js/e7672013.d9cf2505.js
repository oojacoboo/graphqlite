"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={id:"authentication_authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization",original_id:"authentication_authorization"},i=void 0,s={unversionedId:"authentication_authorization",id:"version-3.0/authentication_authorization",title:"Authentication and authorization",description:"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields",source:"@site/versioned_docs/version-3.0/authentication_authorization.mdx",sourceDirName:".",slug:"/authentication_authorization",permalink:"/docs/3.0/authentication_authorization",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/authentication_authorization.mdx",tags:[],version:"3.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1656361354,formattedLastUpdatedAt:"6/27/2022",frontMatter:{id:"authentication_authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization",original_id:"authentication_authorization"},sidebar:"version-3.0/docs",previous:{title:"Extending a type",permalink:"/docs/3.0/extend_type"},next:{title:"External type declaration",permalink:"/docs/3.0/external_type_declaration"}},l={},u=[{value:"<code>@Logged</code> and <code>@Right</code> annotations",id:"logged-and-right-annotations",level:2},{value:"Constant schemas",id:"constant-schemas",level:2},{value:"Connecting GraphQLite to your framework&#39;s security module",id:"connecting-graphqlite-to-your-frameworks-security-module",level:2}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields\nreserved to some users."),(0,r.kt)("p",null,"GraphQLite offers some control over what a user can do with your API based on authentication (whether the user\nis logged or not) or authorization (what rights the user have)."),(0,r.kt)("div",{class:"alert alert--info"},"GraphQLite does not have its own security mechanism. Unless you're using our Symfony Bundle, it is up to you to connect this feature to your framework's security mechanism.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{href:"#connecting-graphqlite-to-your-framework-s-security-module"},"Connecting GraphQLite to your framework's security module"),"."),(0,r.kt)("h2",{id:"logged-and-right-annotations"},(0,r.kt)("inlineCode",{parentName:"h2"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"@Right")," annotations"),(0,r.kt)("p",null,"GraphQLite exposes two annotations (",(0,r.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Right"),") that you can use to restrict access to a resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')),(0,r.kt)("p",null,"In the example above, the query ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," will only be available if the user making the query is logged AND if he\nhas the ",(0,r.kt)("inlineCode",{parentName:"p"},"CAN_VIEW_USER_LIST")," right."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Right")," annotations can be used next to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,r.kt)("div",{class:"alert alert--info"},"The query/mutation/field will NOT be part of the GraphQL schema if the current user is not logged or has not the requested right."),(0,r.kt)("h2",{id:"constant-schemas"},"Constant schemas"),(0,r.kt)("p",null,"By default, the schema will vary based on who is connected. This can be a problem with some GraphQL clients as the schema\nis changing from one user to another."),(0,r.kt)("p",null,"If you want to keep a constant schema, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation that contains the value that\nwill be returned for user with insufficient rights."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @FailWith(null)\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')),(0,r.kt)("h2",{id:"connecting-graphqlite-to-your-frameworks-security-module"},"Connecting GraphQLite to your framework's security module"),(0,r.kt)("div",{class:"alert alert--info"},"This step is NOT necessary for user using GraphQLite through the Symfony Bundle"),(0,r.kt)("p",null,"GraphQLite needs to know if a user is logged or not, and what rights it has.\nBut this is specific of the framework you use."),(0,r.kt)("p",null,"To plug GraphQLite to your framework's security mechanism, you will have to provide two classes implementing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Security\\AuthenticationServiceInterface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Security\\AuthorizationServiceInterface"))),(0,r.kt)("p",null,"Those two interfaces act as adapters between GraphQLite and your framework:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'interface AuthenticationServiceInterface\n{\n    /**\n     * Returns true if the "current" user is logged.\n     *\n     * @return bool\n     */\n    public function isLogged(): bool;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'interface AuthorizationServiceInterface\n{\n    /**\n     * Returns true if the "current" user has access to the right "$right".\n     *\n     * @param string $right\n     * @return bool\n     */\n    public function isAllowed(string $right): bool;\n}\n')))}h.isMDXComponent=!0}}]);