"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:h,values:m,groupId:g,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===h?h:null!=(t=null!=h?h:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,s.U)(),[C,w]=(0,r.useState)(v),I=[],{blockElementScrollPositionUntilNextRender:L}=(0,u.o5)();if(null!=g){const e=N[g];null!=e&&e!==C&&b.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==C&&(L(t),w(a),null!=g&&T(g,String(a)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=I.indexOf(e.currentTarget)+1;n=null!=(a=I[t])?a:I[0];break}case"ArrowLeft":{var r;const t=I.indexOf(e.currentTarget)-1;n=null!=(r=I[t])?r:I[I.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>I.push(e),onKeyDown:_,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},10911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},s=void 0,u={unversionedId:"authentication-authorization",id:"version-5.0/authentication-authorization",title:"Authentication and authorization",description:"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields",source:"@site/versioned_docs/version-5.0/authentication-authorization.mdx",sourceDirName:".",slug:"/authentication-authorization",permalink:"/docs/5.0/authentication-authorization",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-5.0/authentication-authorization.mdx",tags:[],version:"5.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657169592,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},sidebar:"version-5.0/docs",previous:{title:"User input validation",permalink:"/docs/5.0/validation"},next:{title:"Fine grained security",permalink:"/docs/5.0/fine-grained-security"}},p={},c=[{value:"<code>@Logged</code> and <code>@Right</code> annotations",id:"logged-and-right-annotations",level:2},{value:"Not throwing errors",id:"not-throwing-errors",level:2},{value:"Injecting the current user as a parameter",id:"injecting-the-current-user-as-a-parameter",level:2},{value:"Hiding fields / queries / mutations",id:"hiding-fields--queries--mutations",level:2}],d={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields\nreserved to some users."),(0,r.kt)("p",null,"GraphQLite offers some control over what a user can do with your API. You can restrict access to resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"based on authentication using the ",(0,r.kt)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,r.kt)("inlineCode",{parentName:"a"},"@Logged")," annotation")," (restrict access to logged users)"),(0,r.kt)("li",{parentName:"ul"},"based on authorization using the ",(0,r.kt)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,r.kt)("inlineCode",{parentName:"a"},"@Right")," annotation")," (restrict access to logged users with certain rights)."),(0,r.kt)("li",{parentName:"ul"},"based on fine-grained authorization using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/5.0/fine-grained-security"},(0,r.kt)("inlineCode",{parentName:"a"},"@Security")," annotation")," (restrict access for some given resources to some users).")),(0,r.kt)("div",{class:"alert alert--info"},"GraphQLite does not have its own security mechanism. Unless you're using our Symfony Bundle or our Laravel package, it is up to you to connect this feature to your framework's security mechanism.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{href:"implementing-security"},"Connecting GraphQLite to your framework's security module"),"."),(0,r.kt)("h2",{id:"logged-and-right-annotations"},(0,r.kt)("inlineCode",{parentName:"h2"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"@Right")," annotations"),(0,r.kt)("p",null,"GraphQLite exposes two annotations (",(0,r.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Right"),") that you can use to restrict access to a resource."),(0,r.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,r.kt)("p",null,"In the example above, the query ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," will only be available if the user making the query is logged AND if he\nhas the ",(0,r.kt)("inlineCode",{parentName:"p"},"CAN_VIEW_USER_LIST")," right."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Right")," annotations can be used next to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,r.kt)("div",{class:"alert alert--info"},"By default, if a user tries to access an unauthorized query/mutation/field, an error is raised and the query fails."),(0,r.kt)("h2",{id:"not-throwing-errors"},"Not throwing errors"),(0,r.kt)("p",null,"If you do not want an error to be thrown when a user attempts to query a field/query/mutation he has no access to, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation contains the value that will be returned for users with insufficient rights."),(0,r.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[FailWith(value: null)]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @FailWith(null)\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,r.kt)("h2",{id:"injecting-the-current-user-as-a-parameter"},"Injecting the current user as a parameter"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@InjectUser")," annotation to get an instance of the current user logged in."),(0,r.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @return Product\n     */\n    public function product(\n            int $id,\n            #[InjectUser]\n            User $user\n        ): Product\n    {\n        // ...\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @InjectUser(for="$user")\n     * @return Product\n     */\n    public function product(int $id, User $user): Product\n    {\n        // ...\n    }\n}\n')))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@InjectUser")," annotation can be used next to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,r.kt)("p",null,"The object injected as the current user depends on your framework. It is in fact the object returned by the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/implementing-security"},'"authentication service" configured in GraphQLite'),"."),(0,r.kt)("h2",{id:"hiding-fields--queries--mutations"},"Hiding fields / queries / mutations"),(0,r.kt)("p",null,"By default, a user analysing the GraphQL schema can see all queries/mutations/types available.\nSome will be available to him and some won't."),(0,r.kt)("p",null,"If you want to add an extra level of security (or if you want your schema to be kept secret to unauthorized users),\nyou can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@HideIfUnauthorized")," annotation."),(0,r.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[HideIfUnauthorized]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @HideIfUnauthorized()\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,r.kt)("p",null,"While this is the most secured mode, it can have drawbacks when working with development tools\n(you need to be logged as admin to fetch the complete schema)."),(0,r.kt)("div",{class:"alert alert--info"},'The "HideIfUnauthorized" mode was the default mode in GraphQLite 3 and is optionnal from GraphQLite 4+.'))}h.isMDXComponent=!0}}]);