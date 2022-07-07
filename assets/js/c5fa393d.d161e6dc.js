"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={id:"authentication_authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization",original_id:"authentication_authorization"},o=void 0,s={unversionedId:"authentication_authorization",id:"version-4.0/authentication_authorization",title:"Authentication and authorization",description:"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields",source:"@site/versioned_docs/version-4.0/authentication_authorization.mdx",sourceDirName:".",slug:"/authentication_authorization",permalink:"/docs/4.0/authentication_authorization",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/authentication_authorization.mdx",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657169592,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"authentication_authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization",original_id:"authentication_authorization"},sidebar:"version-4.0/docs",previous:{title:"User input validation",permalink:"/docs/4.0/validation"},next:{title:"Fine grained security",permalink:"/docs/4.0/fine-grained-security"}},l={},u=[{value:"<code>@Logged</code> and <code>@Right</code> annotations",id:"logged-and-right-annotations",level:2},{value:"Not throwing errors",id:"not-throwing-errors",level:2},{value:"Injecting the current user as a parameter",id:"injecting-the-current-user-as-a-parameter",level:2},{value:"Hiding fields / queries / mutations",id:"hiding-fields--queries--mutations",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields\nreserved to some users."),(0,r.kt)("p",null,"GraphQLite offers some control over what a user can do with your API. You can restrict access to resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"based on authentication using the ",(0,r.kt)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,r.kt)("inlineCode",{parentName:"a"},"@Logged")," annotation")," (restrict access to logged users)"),(0,r.kt)("li",{parentName:"ul"},"based on authorization using the ",(0,r.kt)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,r.kt)("inlineCode",{parentName:"a"},"@Right")," annotation")," (restrict access to logged users with certain rights)."),(0,r.kt)("li",{parentName:"ul"},"based on fine-grained authorization using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.0/fine-grained-security"},(0,r.kt)("inlineCode",{parentName:"a"},"@Security")," annotation")," (restrict access for some given resources to some users).")),(0,r.kt)("div",{class:"alert alert--info"},"GraphQLite does not have its own security mechanism. Unless you're using our Symfony Bundle or our Laravel package, it is up to you to connect this feature to your framework's security mechanism.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{href:"implementing-security"},"Connecting GraphQLite to your framework's security module"),"."),(0,r.kt)("h2",{id:"logged-and-right-annotations"},(0,r.kt)("inlineCode",{parentName:"h2"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"@Right")," annotations"),(0,r.kt)("p",null,"GraphQLite exposes two annotations (",(0,r.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Right"),") that you can use to restrict access to a resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')),(0,r.kt)("p",null,"In the example above, the query ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," will only be available if the user making the query is logged AND if he\nhas the ",(0,r.kt)("inlineCode",{parentName:"p"},"CAN_VIEW_USER_LIST")," right."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Right")," annotations can be used next to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,r.kt)("div",{class:"alert alert--info"},"By default, if a user tries to access an unauthorized query/mutation/field, an error is raised and the query fails."),(0,r.kt)("h2",{id:"not-throwing-errors"},"Not throwing errors"),(0,r.kt)("p",null,"If you do not want an error to be thrown when a user attempts to query a field/query/mutation he has no access to, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation contains the value that will be returned for users with insufficient rights."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @FailWith(null)\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')),(0,r.kt)("h2",{id:"injecting-the-current-user-as-a-parameter"},"Injecting the current user as a parameter"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@InjectUser")," annotation to get an instance of the current user logged in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @InjectUser(for="$user")\n     * @return Product\n     */\n    public function product(int $id, User $user): Product\n    {\n        // ...\n    }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@InjectUser")," annotation can be used next to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,r.kt)("p",null,"The object injected as the current user depends on your framework. It is in fact the object returned by the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/4.0/implementing-security"},'"authentication service" configured in GraphQLite'),"."),(0,r.kt)("h2",{id:"hiding-fields--queries--mutations"},"Hiding fields / queries / mutations"),(0,r.kt)("p",null,"By default, a user analysing the GraphQL schema can see all queries/mutations/types available.\nSome will be available to him and some won't."),(0,r.kt)("p",null,"If you want to add an extra level of security (or if you want your schema to be kept secret to unauthorized users),\nyou can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@HideIfUnauthorized")," annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @HideIfUnauthorized()\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')),(0,r.kt)("p",null,"While this is the most secured mode, it can have drawbacks when working with development tools\n(you need to be logged as admin to fetch the complete schema)."),(0,r.kt)("div",{class:"alert alert--info"},'The "HideIfUnauthorized" mode was the default mode in GraphQLite 3 and is optionnal from GraphQLite 4+.'))}d.isMDXComponent=!0}}]);