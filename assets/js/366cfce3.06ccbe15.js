"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3021],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,p=39;var c=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,c=e.values,d=e.groupId,h=e.className,m=i(),f=m.tabGroupChoices,y=m.setTabGroupChoices,g=(0,a.useState)(r),b=g[0],k=g[1],v=a.Children.toArray(e.children),T=[];if(null!=d){var w=f[d];null!=w&&w!==b&&c.some((function(e){return e.value===w}))&&k(w)}var N=function(e){var t=e.currentTarget,n=T.indexOf(t),a=c[n].value;k(a),null!=d&&(y(d,a),setTimeout((function(){var e,n,a,r,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},Q=function(e){var t,n;switch(e.keyCode){case p:var a=T.indexOf(e.target)+1;n=T[a]||T[0];break;case u:var r=T.indexOf(e.target)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:Q,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},14393:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(55064),l=n(58215),s=["components"],u={id:"queries",title:"Queries",sidebar_label:"Queries"},p=void 0,c={unversionedId:"queries",id:"version-4.2/queries",isDocsHomePage:!1,title:"Queries",description:"In GraphQLite, GraphQL queries are created by writing methods in controller classes.",source:"@site/versioned_docs/version-4.2/queries.mdx",sourceDirName:".",slug:"/queries",permalink:"/docs/4.2/queries",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/queries.mdx",tags:[],version:"4.2",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1635192682,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"queries",title:"Queries",sidebar_label:"Queries"},sidebar:"version-4.2/docs",previous:{title:"Other frameworks / No framework",permalink:"/docs/4.2/other-frameworks"},next:{title:"Mutations",permalink:"/docs/4.2/mutations"}},d=[{value:"Simple query",id:"simple-query",children:[]},{value:"About annotations / attributes",id:"about-annotations--attributes",children:[]},{value:"Testing the query",id:"testing-the-query",children:[]},{value:"Query with a type",id:"query-with-a-type",children:[]}],h={toc:d};function m(e){var t=e.components,u=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In GraphQLite, GraphQL queries are created by writing methods in ",(0,i.kt)("em",{parentName:"p"},"controller")," classes."),(0,i.kt)("p",null,"Those classes must be in the controllers namespaces which has been defined when you configured GraphQLite.\nFor instance, in Symfony, the controllers namespace is ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Controller")," by default."),(0,i.kt)("h2",{id:"simple-query"},"Simple query"),(0,i.kt)("p",null,"In a controller class, each query method must be annotated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Query")," annotation. For instance:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    #[Query]\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")))),(0,i.kt)("p",null,"This query is equivalent to the following ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"Type Query {\n    hello(name: String!): String!\n}\n")),(0,i.kt)("p",null,"As you can see, GraphQLite will automatically do the mapping between PHP types and GraphQL types."),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!")," If you are not using a framework with an autowiring container (like Symfony or Laravel), please be aware that the ",(0,i.kt)("code",null,"MyController")," class must exist in the container of your application. Furthermore, the identifier of the controller in the container MUST be the fully qualified class name of controller."),(0,i.kt)("h2",{id:"about-annotations--attributes"},"About annotations / attributes"),(0,i.kt)("p",null,"GraphQLite relies a lot on annotations (we call them attributes since PHP 8)."),(0,i.kt)("p",null,'It supports both the old "Doctrine annotations" style (',(0,i.kt)("inlineCode",{parentName:"p"},"@Query"),") and the new PHP 8 attributes (",(0,i.kt)("inlineCode",{parentName:"p"},"#[Query]"),")."),(0,i.kt)("p",null,"Read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/doctrine-annotations-attributes"},"Doctrine annotations VS attributes")," documentation if you are not familiar with this concept."),(0,i.kt)("h2",{id:"testing-the-query"},"Testing the query"),(0,i.kt)("p",null,"The default GraphQL endpoint is ",(0,i.kt)("inlineCode",{parentName:"p"},"/graphql"),"."),(0,i.kt)("p",null,"The easiest way to test a GraphQL endpoint is to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://altair.sirmuel.design/"},"Altair")," clients (they are available as Chrome or Firefox plugins)"),(0,i.kt)("div",{class:"alert alert--info"},"If you are using the Symfony bundle, GraphiQL is also directly embedded.",(0,i.kt)("br",null),"Simply head to ",(0,i.kt)("code",null,"http://[path-to-my-app]/graphiql")),(0,i.kt)("p",null,"Here a query using our simple ",(0,i.kt)("em",{parentName:"p"},"Hello World")," example:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(46637).Z})),(0,i.kt)("h2",{id:"query-with-a-type"},"Query with a type"),(0,i.kt)("p",null,"So far, we simply declared a query. But we did not yet declare a type."),(0,i.kt)("p",null,"Let's assume you want to return a product:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass ProductController\n{\n    #[Query]\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass ProductController\n{\n    /**\n     * @Query\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")))),(0,i.kt)("p",null,"As the ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," class is not a scalar type, you must tell GraphQLite how to handle it:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Type")," annotation is used to inform GraphQLite that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," class is a GraphQL type."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation is used to define the GraphQL fields. This annotation must be put on a ",(0,i.kt)("strong",{parentName:"p"},"public method"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," class must be in one of the ",(0,i.kt)("em",{parentName:"p"},"types")," namespaces. As for ",(0,i.kt)("em",{parentName:"p"},"controller")," classes, you configured this namespace when you installed\nGraphQLite. By default, in Symfony, the allowed types namespaces are ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Entity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Types"),"."),(0,i.kt)("p",null,"This query is equivalent to the following ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"Type Product {\n    name: String!\n    price: Float\n}\n")),(0,i.kt)("div",{class:"alert alert--info"},(0,i.kt)("p",null,"If you are used to  ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Domain-driven_design"},"Domain driven design"),", you probably realize that the ",(0,i.kt)("code",null,"Product")," class is part of your ",(0,i.kt)("i",null,"domain"),"."),(0,i.kt)("p",null,"GraphQL annotations are adding some serialization logic that is out of scope of the domain. These are ",(0,i.kt)("i",null,"just")," annotations and for most project, this is the fastest and easiest route."),(0,i.kt)("p",null,"If you feel that GraphQL annotations do not belong to the domain, or if you cannot modify the class directly (maybe because it is part of a third party library), there is another way to create types without annotating the domain class. We will explore that in the next chapter.")))}m.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},46637:function(e,t,n){t.Z=n.p+"assets/images/query1-5a22bbe2398efcc725ea571a07ff2c9b.png"}}]);