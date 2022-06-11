"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7403],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(67294),a=t(86010),o="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(87462),a=t(67294),o=t(86010),l=t(72389),u=t(67392),i=t(7094),s=t(12466),c="tabList__CuJ",p="tabItem_LNqP";function f(e){var n,t,l=e.lazy,f=e.block,d=e.defaultValue,m=e.values,h=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,u.l)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:y[0].props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),O=w.tabGroupChoices,N=w.setTabGroupChoices,q=(0,a.useState)(k),T=q[0],I=q[1],P=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=O[h];null!=E&&E!==T&&b.some((function(e){return e.value===E}))&&I(E)}var j=function(e){var n=e.currentTarget,t=P.indexOf(n),r=b[t].value;r!==T&&(x(n),I(r),null!=h&&N(h,String(r)))},L=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=P.indexOf(e.currentTarget)+1;t=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var o,l=P.indexOf(e.currentTarget)-1;t=null!=(o=P[l])?o:P[P.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},v)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return P.push(e)},onKeyDown:L,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function d(e){var n=(0,l.Z)();return a.createElement(f,(0,r.Z)({key:String(n)},e))}},22350:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=t(65488),u=t(85162),i=["components"],s={id:"query-plan",title:"Query plan",sidebar_label:"Query plan"},c=void 0,p={unversionedId:"query-plan",id:"version-4.3/query-plan",title:"Query plan",description:"The problem",source:"@site/versioned_docs/version-4.3/query-plan.mdx",sourceDirName:".",slug:"/query-plan",permalink:"/docs/4.3/query-plan",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/query-plan.mdx",tags:[],version:"4.3",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1654917509,formattedLastUpdatedAt:"6/11/2022",frontMatter:{id:"query-plan",title:"Query plan",sidebar_label:"Query plan"},sidebar:"version-4.3/docs",previous:{title:"Connecting security to your framework",permalink:"/docs/4.3/implementing-security"},next:{title:"Prefetching records",permalink:"/docs/4.3/prefetch-method"}},f={},d=[{value:"The problem",id:"the-problem",level:2},{value:"Fetching the query plan",id:"fetching-the-query-plan",level:2}],m={toc:d};function h(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-problem"},"The problem"),(0,o.kt)("p",null,'GraphQL naive implementations often suffer from the "N+1" problem.'),(0,o.kt)("p",null,"Let's have a look at the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    products {\n        name\n        manufacturer {\n            name\n        }\n    }\n}\n")),(0,o.kt)("p",null,"A naive implementation will do this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 query to fetch the list of products"),(0,o.kt)("li",{parentName:"ul"},"1 query per product to fetch the manufacturer")),(0,o.kt)("p",null,'Assuming we have "N" products, we will make "N+1" queries.'),(0,o.kt)("p",null,'There are several ways to fix this problem. Assuming you are using a relational database, one solution is to try to look\nahead and perform only one query with a JOIN between "products" and "manufacturers".'),(0,o.kt)("p",null,'But how do I know if I should make the JOIN between "products" and "manufacturers" or not? I need to know ahead\nof time.'),(0,o.kt)("p",null,"With GraphQLite, you can answer this question by tapping into the ",(0,o.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," object."),(0,o.kt)("h2",{id:"fetching-the-query-plan"},"Fetching the query plan"),(0,o.kt)("small",null,"Available in GraphQLite 4.0+"),(0,o.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use GraphQL\\Type\\Definition\\ResolveInfo;\n\nclass ProductsController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(ResolveInfo $info): array\n    {\n        if (isset($info->getFieldSelection()['manufacturer']) {\n            // Let's perform a request with a JOIN on manufacturer\n        } else {\n            // Let's perform a request without a JOIN on manufacturer\n        }\n        // ...\n    }\n}\n"))),(0,o.kt)(u.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use GraphQL\\Type\\Definition\\ResolveInfo;\n\nclass ProductsController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(ResolveInfo $info): array\n    {\n        if (isset($info->getFieldSelection()['manufacturer']) {\n            // Let's perform a request with a JOIN on manufacturer\n        } else {\n            // Let's perform a request without a JOIN on manufacturer\n        }\n        // ...\n    }\n}\n")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," is a class provided by Webonyx/GraphQL-PHP (the low-level GraphQL library used by GraphQLite).\nIt contains info about the query and what fields are requested. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"ResolveInfo::getFieldSelection"),' you can analyze the query\nand decide whether you should perform additional "JOINS" in your query or not.'),(0,o.kt)("div",{class:"alert alert--info"},"As of the writing of this documentation, the ",(0,o.kt)("code",null,"ResolveInfo")," class is useful but somewhat limited. The ",(0,o.kt)("a",{href:"https://github.com/webonyx/graphql-php/pull/436"},'next version of Webonyx/GraphQL-PHP will add a "query plan"'),"that allows a deeper analysis of the query."))}h.isMDXComponent=!0}}]);