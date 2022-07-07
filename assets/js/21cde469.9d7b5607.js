"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4367],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(t),d=a,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(67294),a=t(86010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(87462),a=t(67294),o=t(86010),i=t(72389),l=t(67392),s=t(7094),p=t(12466);const c="tabList__CuJ",u="tabItem_LNqP";function h(e){var n,t;const{lazy:i,block:h,defaultValue:d,values:m,groupId:g,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=m?m:y.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),b=(0,l.l)(x,((e,n)=>e.value===n.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===d?d:null!=(n=null!=d?d:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==v&&!x.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+x.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:k}=(0,s.U)(),[E,N]=(0,a.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:L}=(0,p.o5)();if(null!=g){const e=w[g];null!=e&&e!==E&&x.some((n=>n.value===e))&&N(e)}const G=e=>{const n=e.currentTarget,t=T.indexOf(n),r=x[t].value;r!==E&&(L(n),N(r),null!=g&&k(g,String(r)))},O=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=T.indexOf(e.currentTarget)+1;t=null!=(r=T[n])?r:T[0];break}case"ArrowLeft":{var a;const n=T.indexOf(e.currentTarget)-1;t=null!=(a=T[n])?a:T[T.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":h},f)},x.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:e=>T.push(e),onKeyDown:O,onFocus:G,onClick:G},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(y.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})))))}function d(e){const n=(0,i.Z)();return a.createElement(h,(0,r.Z)({key:String(n)},e))}},38132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(87462),a=(t(67294),t(3905)),o=t(65488),i=t(85162);const l={id:"error-handling",title:"Error handling",sidebar_label:"Error handling"},s=void 0,p={unversionedId:"error-handling",id:"version-4.2/error-handling",title:"Error handling",description:'In GraphQL, when an error occurs, the server must add an "error" entry in the response.',source:"@site/versioned_docs/version-4.2/error-handling.mdx",sourceDirName:".",slug:"/error-handling",permalink:"/docs/4.2/error-handling",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/error-handling.mdx",tags:[],version:"4.2",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657169592,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"error-handling",title:"Error handling",sidebar_label:"Error handling"},sidebar:"version-4.2/docs",previous:{title:"Inheritance and interfaces",permalink:"/docs/4.2/inheritance-interfaces"},next:{title:"User input validation",permalink:"/docs/4.2/validation"}},c={},u=[{value:"HTTP response code",id:"http-response-code",level:2},{value:"Customizing the category",id:"customizing-the-category",level:2},{value:"Customizing the extensions section",id:"customizing-the-extensions-section",level:2},{value:"Writing your own exceptions",id:"writing-your-own-exceptions",level:2},{value:"Many errors for one exception",id:"many-errors-for-one-exception",level:2},{value:"Webonyx exceptions",id:"webonyx-exceptions",level:2},{value:"Behaviour of exceptions that do not implement ClientAware",id:"behaviour-of-exceptions-that-do-not-implement-clientaware",level:2}],h={toc:u};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'In GraphQL, when an error occurs, the server must add an "error" entry in the response.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Name for character with ID 1002 could not be fetched.",\n      "locations": [ { "line": 6, "column": 7 } ],\n      "path": [ "hero", "heroFriends", 1, "name" ],\n      "extensions": {\n        "category": "Exception"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"You can generate such errors with GraphQLite by throwing a ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQLException"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLException;\n\nthrow new GraphQLException("Exception message");\n')),(0,a.kt)("h2",{id:"http-response-code"},"HTTP response code"),(0,a.kt)("p",null,"By default, when you throw a ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQLException"),", the HTTP status code will be 500."),(0,a.kt)("p",null,"If your exception code is in the 4xx - 5xx range, the exception code will be used as an HTTP status code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'// This exception will generate a HTTP 404 status code\nthrow new GraphQLException("Not found", 404);\n')),(0,a.kt)("div",{class:"alert alert--info"},"GraphQL allows to have several errors for one request. If you have several",(0,a.kt)("code",null,"GraphQLException")," thrown for the same request, the HTTP status code used will be the highest one."),(0,a.kt)("h2",{id:"customizing-the-category"},"Customizing the category"),(0,a.kt)("p",null,'By default, GraphQLite adds a "category" entry in the "extensions section". You can customize the category with the\n4th parameter of the constructor:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'throw new GraphQLException("Not found", 404, null, "NOT_FOUND");\n')),(0,a.kt)("p",null,"will generate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Not found",\n      "extensions": {\n        "category": "NOT_FOUND"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"customizing-the-extensions-section"},"Customizing the extensions section"),(0,a.kt)("p",null,'You can customize the whole "extensions" section with the 5th parameter of the constructor:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"throw new GraphQLException(\"Field required\", 400, null, \"VALIDATION\", ['field' => 'name']);\n")),(0,a.kt)("p",null,"will generate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Field required",\n      "extensions": {\n        "category": "VALIDATION",\n        "field": "name"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"writing-your-own-exceptions"},"Writing your own exceptions"),(0,a.kt)("p",null,"Rather that throwing the base ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQLException"),", you should consider writing your own exception."),(0,a.kt)("p",null,"Any exception that implements interface ",(0,a.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLExceptionInterface"),' will be displayed\nin the GraphQL "errors" section.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'class ValidationException extends Exception implements GraphQLExceptionInterface\n{\n    /**\n     * Returns true when exception message is safe to be displayed to a client.\n     */\n    public function isClientSafe(): bool\n    {\n        return true;\n    }\n\n    /**\n     * Returns string describing a category of the error.\n     *\n     * Value "graphql" is reserved for errors produced by query parsing or validation, do not use it.\n     */\n    public function getCategory(): string\n    {\n        return \'VALIDATION\';\n    }\n\n    /**\n     * Returns the "extensions" object attached to the GraphQL error.\n     *\n     * @return array<string, mixed>\n     */\n    public function getExtensions(): array\n    {\n        return [];\n    }\n}\n')),(0,a.kt)("h2",{id:"many-errors-for-one-exception"},"Many errors for one exception"),(0,a.kt)("p",null,"Sometimes, you need to display several errors in the response. But of course, at any given point in your code, you can\nthrow only one exception."),(0,a.kt)("p",null,"If you want to display several exceptions, you can bundle these exceptions in a ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQLAggregateException")," that you can\nthrow."),(0,a.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException;\n\n#[Query]\npublic function createProduct(string $name, float $price): Product\n{\n    $exceptions = new GraphQLAggregateException();\n\n    if ($name === '') {\n        $exceptions->add(new GraphQLException('Name cannot be empty', 400, null, 'VALIDATION'));\n    }\n    if ($price <= 0) {\n        $exceptions->add(new GraphQLException('Price must be positive', 400, null, 'VALIDATION'));\n    }\n\n    if ($exceptions->hasExceptions()) {\n        throw $exceptions;\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException;\n\n/**\n * @Query\n */\npublic function createProduct(string $name, float $price): Product\n{\n    $exceptions = new GraphQLAggregateException();\n\n    if ($name === '') {\n        $exceptions->add(new GraphQLException('Name cannot be empty', 400, null, 'VALIDATION'));\n    }\n    if ($price <= 0) {\n        $exceptions->add(new GraphQLException('Price must be positive', 400, null, 'VALIDATION'));\n    }\n\n    if ($exceptions->hasExceptions()) {\n        throw $exceptions;\n    }\n}\n")))),(0,a.kt)("h2",{id:"webonyx-exceptions"},"Webonyx exceptions"),(0,a.kt)("p",null,"GraphQLite is based on the wonderful webonyx/GraphQL-PHP library. Therefore, the Webonyx exception mechanism can\nalso be used in GraphQLite. This means you can throw a ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQL\\Error\\Error")," exception or any exception implementing\n",(0,a.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/error-handling/#errors-in-graphql"},(0,a.kt)("inlineCode",{parentName:"a"},"GraphQL\\Error\\ClientAware")," interface")),(0,a.kt)("p",null,"Actually, the ",(0,a.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLExceptionInterface")," extends Webonyx's ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientAware")," interface."),(0,a.kt)("h2",{id:"behaviour-of-exceptions-that-do-not-implement-clientaware"},"Behaviour of exceptions that do not implement ClientAware"),(0,a.kt)("p",null,"If an exception that does not implement ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientAware")," is thrown, by default, GraphQLite will not catch it."),(0,a.kt)("p",null,"The exception will propagate to your framework error handler/middleware that is in charge of displaying the classical error page."),(0,a.kt)("p",null,"You can ",(0,a.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/error-handling/#debugging-tools"},"change the underlying behaviour of Webonyx to catch any exception and turn them into GraphQL errors"),".\nThe way you adjust the error settings depends on the framework you are using (",(0,a.kt)("a",{parentName:"p",href:"/docs/4.2/symfony-bundle"},"Symfony"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.2/laravel-package"},"Laravel"),")."),(0,a.kt)("div",{class:"alert alert--info"},'To be clear: we strongly discourage changing this setting. We strongly believe that the default "RETHROW_UNSAFE_EXCEPTIONS" setting of Webonyx is the only sane setting (only putting in "errors" section exceptions designed for GraphQL).'))}d.isMDXComponent=!0}}]);