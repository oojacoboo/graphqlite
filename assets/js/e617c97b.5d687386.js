"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"changelog",title:"Changelog",sidebar_label:"Changelog",original_id:"changelog"},o=void 0,l={unversionedId:"changelog",id:"version-4.1/changelog",title:"Changelog",description:"4.1",source:"@site/versioned_docs/version-4.1/CHANGELOG.md",sourceDirName:".",slug:"/changelog",permalink:"/docs/4.1/changelog",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/CHANGELOG.md",tags:[],version:"4.1",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657169592,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"changelog",title:"Changelog",sidebar_label:"Changelog",original_id:"changelog"},sidebar:"version-4.1/docs",previous:{title:"Semantic versioning",permalink:"/docs/4.1/semver"}},p={},s=[{value:"4.1",id:"41",level:2},{value:"4.0",id:"40",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"41"},"4.1"),(0,r.kt)("p",null,"Breaking change:"),(0,r.kt)("p",null,"There is one breaking change introduced in the minor version (this was important to allow PHP 8 compatibility)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"ecodev/graphql-upload"),' package (used to get support for file uploads in GraphQL input types) is now a "recommended" dependency only.\nIf you are using GraphQL file uploads, you need to add ',(0,r.kt)("inlineCode",{parentName:"li"},"ecodev/graphql-upload")," to your ",(0,r.kt)("inlineCode",{parentName:"li"},"composer.json"),".")),(0,r.kt)("p",null,"New features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All annotations can now be accessed as PHP 8 attributes"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"@deprecated")," annotation in your PHP code translates into deprecated fields in your GraphQL schema"),(0,r.kt)("li",{parentName:"ul"},"You can now specify the GraphQL name of the Enum types you define"),(0,r.kt)("li",{parentName:"ul"},"Added the possibility to inject pure Webonyx objects in GraphQLite schema")),(0,r.kt)("p",null,"Minor changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Migrated from ",(0,r.kt)("inlineCode",{parentName:"li"},"zend/diactoros")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"laminas/diactoros")),(0,r.kt)("li",{parentName:"ul"},"Making the annotation cache directory configurable")),(0,r.kt)("p",null,"Miscellaneous:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Migrated from Travis to Github actions")),(0,r.kt)("h2",{id:"40"},"4.0"),(0,r.kt)("p",null,"This is a complete refactoring from 3.x. While existing annotations are kept compatible, the internals have completely\nchanged."),(0,r.kt)("p",null,"New features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can directly ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/inheritance-interfaces#mapping-interfaces"},"annotate a PHP interface with ",(0,r.kt)("inlineCode",{parentName:"a"},"@Type")," to make it a GraphQL interface")),(0,r.kt)("li",{parentName:"ul"},"You can autowire services in resolvers, thanks to the new ",(0,r.kt)("inlineCode",{parentName:"li"},"@Autowire")," annotation"),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/validation"},"user input validation")," (using the Symfony Validator or the Laravel validator or a custom ",(0,r.kt)("inlineCode",{parentName:"li"},"@Assertion")," annotation"),(0,r.kt)("li",{parentName:"ul"},"Improved security handling:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Unauthorized access to fields can now generate GraphQL errors (rather that schema errors in GraphQLite v3)"),(0,r.kt)("li",{parentName:"ul"},"Added fine-grained security using the ",(0,r.kt)("inlineCode",{parentName:"li"},"@Security")," annotation. A field can now be ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/fine-grained-security"},"marked accessible or not depending on the context"),'.\nFor instance, you can restrict access to the field "viewsCount" of the type ',(0,r.kt)("inlineCode",{parentName:"li"},"BlogPost")," only for post that the current user wrote."),(0,r.kt)("li",{parentName:"ul"},"You can now inject the current logged user in any query / mutation / field using the ",(0,r.kt)("inlineCode",{parentName:"li"},"@InjectUser")," annotation"))),(0,r.kt)("li",{parentName:"ul"},"Performance:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can inject the ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/query-plan"},"Webonyx query plan in a parameter from a resolver")),(0,r.kt)("li",{parentName:"ul"},"You can use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/prefetch-method"},'dataloader pattern to improve performance drastically via the "prefetchMethod" attribute')))),(0,r.kt)("li",{parentName:"ul"},"Customizable error handling has been added:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can throw ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/error-handling"},"GraphQL errors")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLException")),(0,r.kt)("li",{parentName:"ul"},'You can specify the HTTP response code to send with a given error, and the errors "extensions" section'),(0,r.kt)("li",{parentName:"ul"},"You can throw ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/error-handling#many-errors-for-one-exception"},"many errors in one exception")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException")))),(0,r.kt)("li",{parentName:"ul"},"You can map ",(0,r.kt)("a",{parentName:"li",href:"input-types#declaring-several-input-types-for-the-same-php-class"},"a given PHP class to several PHP input types")," (a PHP class can have several ",(0,r.kt)("inlineCode",{parentName:"li"},"@Factory")," annotations)"),(0,r.kt)("li",{parentName:"ul"},"You can force input types using ",(0,r.kt)("inlineCode",{parentName:"li"},'@UseInputType(for="$id", inputType="ID!")')),(0,r.kt)("li",{parentName:"ul"},"You can extend an input types (just like you could extend an output type in v3) using ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/extend_input_type"},"the new ",(0,r.kt)("inlineCode",{parentName:"a"},"@Decorate")," annotation")),(0,r.kt)("li",{parentName:"ul"},"In a factory, you can ",(0,r.kt)("a",{parentName:"li",href:"input-types#ignoring-some-parameters"},"exclude some optional parameters from the GraphQL schema"))),(0,r.kt)("p",null,"Many extension points have been added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added a "root type mapper" (useful to map scalar types to PHP types or to add custom annotations related to resolvers)'),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/field-middlewares"},'"field middlewares"')," (useful to add middleware that modify the way GraphQL fields are handled)"),(0,r.kt)("li",{parentName:"ul"},"Added a ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/argument-resolving"},'"parameter type mapper"')," (useful to add customize parameter resolution or add custom annotations related to parameters)")),(0,r.kt)("p",null,"New framework specific features:"),(0,r.kt)("p",null,"Symfony:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The Symfony bundle now provides a "login" and a "logout" mutation (and also a "me" query)')),(0,r.kt)("p",null,"Laravel:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/laravel-package-advanced#support-for-pagination"},"Native integration with the Laravel paginator")," has been added")),(0,r.kt)("p",null,"Internals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"FieldsBuilder")," class has been split in many different services (",(0,r.kt)("inlineCode",{parentName:"li"},"FieldsBuilder"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TypeHandler"),", and a\nchain of ",(0,r.kt)("em",{parentName:"li"},"root type mappers"),")"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"FieldsBuilderFactory")," class has been completely removed."),(0,r.kt)("li",{parentName:"ul"},"Overall, there is not much in common internally between 4.x and 3.x. 4.x is much more flexible with many more hook points\nthan 3.x. Try it out!")))}d.isMDXComponent=!0}}]);