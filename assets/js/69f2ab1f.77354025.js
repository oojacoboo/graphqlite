"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:f,groupId:g,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:P,setTabGroupChoices:w}=(0,s.U)(),[O,N]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=P[g];null!=e&&e!==O&&v.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==O&&(E(t),N(a),null!=g&&w(g,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},45380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination"},s=void 0,u={unversionedId:"pagination",id:"version-6.0/pagination",title:"Paginating large result sets",description:"It is quite common to have to paginate over large result sets.",source:"@site/versioned_docs/version-6.0/pagination.mdx",sourceDirName:".",slug:"/pagination",permalink:"/docs/pagination",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.0/pagination.mdx",tags:[],version:"6.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657169592,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination"},sidebar:"docs",previous:{title:"File uploads",permalink:"/docs/file-uploads"},next:{title:"Custom types",permalink:"/docs/custom-types"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is quite common to have to paginate over large result sets."),(0,r.kt)("p",null,"GraphQLite offers a simple way to do that using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas"),"."),(0,r.kt)("p",null,"Porpaginas is a set of PHP interfaces that can be implemented by result iterators. It comes with a native support for\nPHP arrays, Doctrine and ",(0,r.kt)("a",{parentName:"p",href:"https://thecodingmachine.github.io/tdbm/doc/limit_offset_resultset.html"},"TDBM"),"."),(0,r.kt)("div",{class:"alert alert--warning"},"If you are a Laravel user, Eloquent does not come with a Porpaginas iterator. However, ",(0,r.kt)("a",{href:"laravel-package-advanced"},"the GraphQLite Laravel bundle comes with its own pagination system"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You will need to install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas")," library to benefit from this feature."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require beberlei/porpaginas\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"In your query, simply return a class that implements ",(0,r.kt)("inlineCode",{parentName:"p"},"Porpaginas\\Result"),":"),(0,r.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Porpaginas\\Result\n    {\n        // Some code that returns a list of products\n\n        // If you are using Doctrine, something like:\n        return new Porpaginas\\Doctrine\\ORM\\ORMQueryResult($doctrineQuery);\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Porpaginas\\Result\n    {\n        // Some code that returns a list of products\n\n        // If you are using Doctrine, something like:\n        return new Porpaginas\\Doctrine\\ORM\\ORMQueryResult($doctrineQuery);\n    }\n}\n")))),(0,r.kt)("p",null,"Notice that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the method return type MUST BE ",(0,r.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")," or a class implementing ",(0,r.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")),(0,r.kt)("li",{parentName:"ul"},"you MUST add a ",(0,r.kt)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,r.kt)("p",null,"Once this is done, you can paginate directly from your GraphQL query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"products {\n    items(limit: 10, offset: 20) {\n        id\n        name\n    }\n    count\n}\n")),(0,r.kt)("p",null,'Results are wrapped into an item field. You can use the "limit" and "offset" parameters to apply pagination automatically.'),(0,r.kt)("p",null,'The "count" field returns the ',(0,r.kt)("strong",{parentName:"p"},"total count")," of items."))}m.isMDXComponent=!0}}]);