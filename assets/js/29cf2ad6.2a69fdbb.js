"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8348],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(h,u(u({ref:t},c),{},{components:n})):a.createElement(h,u({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var s=2;s<l;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),l=n(72389),u=n(79443);var o=function(){var e=(0,r.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(63616),s=n(86010),c="tabItem_vU9c";function p(e){var t,n,l,u=e.lazy,p=e.block,m=e.defaultValue,d=e.values,h=e.groupId,f=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=y[0])?void 0:l.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=o(),q=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,r.useState)(b),T=w[0],x=w[1],O=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=q[h];null!=S&&S!==T&&g.some((function(e){return e.value===S}))&&x(S)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==T&&(j(t),x(a),null!=h&&N(h,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:C,onClick:C},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},81946:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),u=n(26396),o=n(58215),i=["components"],s={id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features"},c=void 0,p={unversionedId:"symfony-bundle-advanced",id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",description:"Be advised! This documentation will be removed in a future release.  For current and up-to-date Symfony bundle specific documentation, please see the Github repository.",source:"@site/docs/symfony-bundle-advanced.mdx",sourceDirName:".",slug:"/symfony-bundle-advanced",permalink:"/docs/next/symfony-bundle-advanced",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/symfony-bundle-advanced.mdx",tags:[],version:"current",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1650403099,formattedLastUpdatedAt:"4/19/2022",frontMatter:{id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features"},sidebar:"docs",previous:{title:"Class with multiple output types",permalink:"/docs/next/multiple-output-types"},next:{title:"Laravel specific features",permalink:"/docs/next/laravel-package-advanced"}},m=[{value:"Login and logout",id:"login-and-logout",children:[],level:2},{value:"Schema and request security",id:"schema-and-request-security",children:[{value:"Login using the &quot;login&quot; mutation",id:"login-using-the-login-mutation",children:[],level:3},{value:"Get the current user with the &quot;me&quot; query",id:"get-the-current-user-with-the-me-query",children:[],level:3},{value:"Logout using the &quot;logout&quot; mutation",id:"logout-using-the-logout-mutation",children:[],level:3}],level:2},{value:"Injecting the Request",id:"injecting-the-request",children:[],level:2}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"alert alert--warning"},(0,l.kt)("strong",null,"Be advised!")," This documentation will be removed in a future release.  For current and up-to-date Symfony bundle specific documentation, please see the ",(0,l.kt)("a",{href:"https://github.com/thecodingmachine/graphqlite-bundle"},"Github repository"),"."),(0,l.kt)("p",null,"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony."),(0,l.kt)("h2",{id:"login-and-logout"},"Login and logout"),(0,l.kt)("p",null,'Out of the box, the GraphQLite bundle will expose a "login" and a "logout" mutation as well\nas a "me" query (that returns the current user).'),(0,l.kt)("p",null,'If you need to customize this behaviour, you can edit the "graphqlite.security" configuration key.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: auto # Default setting\n    enable_me: auto # Default setting\n")),(0,l.kt)("p",null,'By default, GraphQLite will enable "login" and "logout" mutations and the "me" query if the following conditions are met:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'the "security" bundle is installed and configured (with a security provider and encoder)'),(0,l.kt)("li",{parentName:"ul"},'the "session" support is enabled (via the "framework.session.enabled" key).')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: on\n")),(0,l.kt)("p",null,"By settings ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_login=on"),", you are stating that you explicitly want the login/logout mutations.\nIf one of the dependencies is missing, an exception is thrown (unlike in default mode where the mutations\nare silently discarded)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: off\n")),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_login=off")," to disable the mutations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    firewall_name: main # default value\n")),(0,l.kt)("p",null,'By default, GraphQLite assumes that your firewall name is "main". This is the default value used in the\nSymfony security bundle so it is likely the value you are using. If for some reason you want to use\nanother firewall, configure the name with ',(0,l.kt)("inlineCode",{parentName:"p"},"graphqlite.security.firewall_name"),"."),(0,l.kt)("h2",{id:"schema-and-request-security"},"Schema and request security"),(0,l.kt)("p",null,"You can disable the introspection of your GraphQL API (for instance in production mode) using\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"introspection")," configuration properties."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    introspection: false\n")),(0,l.kt)("p",null,"You can set the maximum complexity and depth of your GraphQL queries using the ",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_query_complexity"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_query_depth")," configuration properties"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    maximum_query_complexity: 314\n    maximum_query_depth: 42\n")),(0,l.kt)("h3",{id:"login-using-the-login-mutation"},'Login using the "login" mutation'),(0,l.kt)("p",null,"The mutation below will log-in a user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation login {\n  login(userName:"foo", password:"bar") {\n    userName\n    roles\n  }\n}\n')),(0,l.kt)("h3",{id:"get-the-current-user-with-the-me-query"},'Get the current user with the "me" query'),(0,l.kt)("p",null,'Retrieving the current user is easy with the "me" query:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n  }\n}\n")),(0,l.kt)("p",null,"In Symfony, user objects implement ",(0,l.kt)("inlineCode",{parentName:"p"},"Symfony\\Component\\Security\\Core\\User\\UserInterface"),".\nThis interface is automatically mapped to a type with 2 fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"userName: String!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"roles: [String!]!"))),(0,l.kt)("p",null,"If you want to get more fields, just add the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," annotation to your user class:"),(0,l.kt)(u.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass User implements UserInterface\n{\n    #[Field]\n    public function getEmail() : string\n    {\n        // ...\n    }\n\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass User implements UserInterface\n{\n    /**\n     * @Field\n     */\n    public function getEmail() : string\n    {\n        // ...\n    }\n\n}\n")))),(0,l.kt)("p",null,"You can now query this field using an ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#inline-fragments"},"inline fragment"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n    ... on User {\n      email\n    }\n  }\n}\n")),(0,l.kt)("h3",{id:"logout-using-the-logout-mutation"},'Logout using the "logout" mutation'),(0,l.kt)("p",null,'Use the "logout" mutation to log a user out'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation logout {\n  logout\n}\n")),(0,l.kt)("h2",{id:"injecting-the-request"},"Injecting the Request"),(0,l.kt)("p",null,"You can inject the Symfony Request object in any query/mutation/field."),(0,l.kt)("p",null,"Most of the time, getting the request object is irrelevant. Indeed, it is GraphQLite's job to parse this request and\nmanage it for you. Sometimes yet, fetching the request can be needed. In those cases, simply type-hint on the request\nin any parameter of your query/mutation/field."),(0,l.kt)(u.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\HttpFoundation\\Request;\n\n#[Query]\npublic function getUser(int $id, Request $request): User\n{\n    // The $request object contains the Symfony Request.\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\HttpFoundation\\Request;\n\n/**\n * @Query\n */\npublic function getUser(int $id, Request $request): User\n{\n    // The $request object contains the Symfony Request.\n}\n")))))}h.isMDXComponent=!0}}]);