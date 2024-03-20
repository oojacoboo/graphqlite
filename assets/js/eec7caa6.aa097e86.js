"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5282],{9365:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(6540),r=t(53);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t},n)}},1470:(e,n,t)=>{t.d(n,{A:()=>I});var a=t(8168),r=t(6540),i=t(53),o=t(3104),l=t(6347),u=t(7485),s=t(1682),c=t(9466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,s.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[u,s]=g({queryString:t,groupId:a}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),y=(()=>{const e=u??p;return h({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),m(e)}),[s,m,i]),tabValues:i}}var y=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==l&&(p(n),u(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:h,onClick:d},o,{className:(0,i.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=m(e);return r.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,n)),r.createElement(v,(0,a.A)({},e,n)))}function I(e){const n=(0,y.A)();return r.createElement(N,(0,a.A)({key:String(n)},e))}},8384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(8168),r=(t(6540),t(5680)),i=(t(7443),t(1470)),o=t(9365);const l={id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},u=void 0,s={unversionedId:"authentication-authorization",id:"authentication-authorization",title:"Authentication and authorization",description:"You might not want to expose your GraphQL API to anyone. Or you might want to keep some",source:"@site/docs/authentication-authorization.mdx",sourceDirName:".",slug:"/authentication-authorization",permalink:"/docs/next/authentication-authorization",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/authentication-authorization.mdx",tags:[],version:"current",lastUpdatedBy:"Yurii",lastUpdatedAt:1710904486,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},sidebar:"docs",previous:{title:"User input validation",permalink:"/docs/next/validation"},next:{title:"Fine grained security",permalink:"/docs/next/fine-grained-security"}},c={},p=[{value:"<code>@Logged</code> and <code>@Right</code> annotations",id:"logged-and-right-annotations",level:2},{value:"Not throwing errors",id:"not-throwing-errors",level:2},{value:"Injecting the current user as a parameter",id:"injecting-the-current-user-as-a-parameter",level:2},{value:"Hiding fields / queries / mutations / subscriptions",id:"hiding-fields--queries--mutations--subscriptions",level:2}],d={toc:p},h="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(h,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You might not want to expose your GraphQL API to anyone. Or you might want to keep some\nqueries/mutations/subscriptions or fields reserved to some users."),(0,r.yg)("p",null,"GraphQLite offers some control over what a user can do with your API. You can restrict access to\nresources:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"based on authentication using the ",(0,r.yg)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,r.yg)("inlineCode",{parentName:"a"},"@Logged")," annotation")," (restrict access to logged users)"),(0,r.yg)("li",{parentName:"ul"},"based on authorization using the ",(0,r.yg)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,r.yg)("inlineCode",{parentName:"a"},"@Right")," annotation")," (restrict access to logged users with certain rights)."),(0,r.yg)("li",{parentName:"ul"},"based on fine-grained authorization using the ",(0,r.yg)("a",{parentName:"li",href:"/docs/next/fine-grained-security"},(0,r.yg)("inlineCode",{parentName:"a"},"@Security")," annotation")," (restrict access for some given resources to some users).")),(0,r.yg)("div",{class:"alert alert--info"},"GraphQLite does not have its own security mechanism. Unless you're using our Symfony Bundle or our Laravel package, it is up to you to connect this feature to your framework's security mechanism.",(0,r.yg)("br",null),"See ",(0,r.yg)("a",{href:"implementing-security"},"Connecting GraphQLite to your framework's security module"),"."),(0,r.yg)("h2",{id:"logged-and-right-annotations"},(0,r.yg)("inlineCode",{parentName:"h2"},"@Logged")," and ",(0,r.yg)("inlineCode",{parentName:"h2"},"@Right")," annotations"),(0,r.yg)("p",null,"GraphQLite exposes two annotations (",(0,r.yg)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"@Right"),") that you can use to restrict access to a resource."),(0,r.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,r.yg)("p",null,"In the example above, the query ",(0,r.yg)("inlineCode",{parentName:"p"},"users")," will only be available if the user making the query is logged AND if he\nhas the ",(0,r.yg)("inlineCode",{parentName:"p"},"CAN_VIEW_USER_LIST")," right."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"@Right")," annotations can be used next to:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,r.yg)("div",{class:"alert alert--info"},"By default, if a user tries to access an unauthorized query/mutation/subscription/field, an error is raised and the query fails."),(0,r.yg)("h2",{id:"not-throwing-errors"},"Not throwing errors"),(0,r.yg)("p",null,"If you do not want an error to be thrown when a user attempts to query a field/query/mutation/subscription\nthey have no access to, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"@FailWith")," annotation."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"@FailWith")," annotation contains the value that will be returned for users with insufficient rights."),(0,r.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[FailWith(value: null)]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @FailWith(null)\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,r.yg)("h2",{id:"injecting-the-current-user-as-a-parameter"},"Injecting the current user as a parameter"),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"@InjectUser")," annotation to get an instance of the current user logged in."),(0,r.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @return Product\n     */\n    public function product(\n            int $id,\n            #[InjectUser]\n            User $user\n        ): Product\n    {\n        // ...\n    }\n}\n"))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @InjectUser(for="$user")\n     * @return Product\n     */\n    public function product(int $id, User $user): Product\n    {\n        // ...\n    }\n}\n')))),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"@InjectUser")," annotation can be used next to:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,r.yg)("p",null,"The object injected as the current user depends on your framework. It is in fact the object returned by the\n",(0,r.yg)("a",{parentName:"p",href:"/docs/next/implementing-security"},'"authentication service" configured in GraphQLite'),". If user is not authenticated and\nparameter's type is not nullable, an authorization exception is thrown, similar to ",(0,r.yg)("inlineCode",{parentName:"p"},"@Logged")," annotation."),(0,r.yg)("h2",{id:"hiding-fields--queries--mutations--subscriptions"},"Hiding fields / queries / mutations / subscriptions"),(0,r.yg)("p",null,"By default, a user analysing the GraphQL schema can see all queries/mutations/subscriptions/types available.\nSome will be available to him and some won't."),(0,r.yg)("p",null,"If you want to add an extra level of security (or if you want your schema to be kept secret to unauthorized users),\nyou can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"@HideIfUnauthorized")," annotation. Beware of ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/annotations-reference"},"it's limitations"),"."),(0,r.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[HideIfUnauthorized]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @HideIfUnauthorized()\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,r.yg)("p",null,"While this is the most secured mode, it can have drawbacks when working with development tools\n(you need to be logged as admin to fetch the complete schema)."),(0,r.yg)("div",{class:"alert alert--info"},'The "HideIfUnauthorized" mode was the default mode in GraphQLite 3 and is optional from GraphQLite 4+.'))}g.isMDXComponent=!0}}]);