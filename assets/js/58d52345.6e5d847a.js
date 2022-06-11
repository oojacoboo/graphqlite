"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2446],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46297:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"features",slug:"/",title:"GraphQLite",sidebar_label:"GraphQLite",original_id:"features"},u=void 0,s={unversionedId:"features",id:"version-4.0/features",title:"GraphQLite",description:"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers.",source:"@site/versioned_docs/version-4.0/features.md",sourceDirName:".",slug:"/",permalink:"/docs/4.0/",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/features.md",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1654917509,formattedLastUpdatedAt:"6/11/2022",frontMatter:{id:"features",slug:"/",title:"GraphQLite",sidebar_label:"GraphQLite",original_id:"features"},sidebar:"version-4.0/docs",next:{title:"Getting Started",permalink:"/docs/4.0/getting-started"}},c={},p=[{value:"Features",id:"features",level:2},{value:"Basic example",id:"basic-example",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://graphqlite.thecodingmachine.io/img/logo.svg",alt:"GraphQLite logo",width:"250",height:"250"})),(0,o.kt)("p",null,"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a complete GraphQL API by simply annotating your PHP classes"),(0,o.kt)("li",{parentName:"ul"},"Framework agnostic, but Symfony, Laravel and PSR-15 bindings available!"),(0,o.kt)("li",{parentName:"ul"},"Comes with batteries included: queries, mutations, mapping of arrays / iterators, file uploads, security, validation, extendable types and more!")),(0,o.kt)("h2",{id:"basic-example"},"Basic example"),(0,o.kt)("p",null,"First, declare a query in your controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    /**\n     * @Query()\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")),(0,o.kt)("p",null,"Then, annotate the ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," class to declare what fields are exposed to the GraphQL API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n")),(0,o.kt)("p",null,"That's it, you're good to go! Query and enjoy!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-grapql"},"{\n  product(id: 42) {\n    name\n  }\n}\n")))}f.isMDXComponent=!0}}]);