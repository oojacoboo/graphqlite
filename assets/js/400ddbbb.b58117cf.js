"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6961],{11470:(e,t,a)=>{a.d(t,{A:()=>T});var n=a(58168),r=a(96540),u=a(20053),o=a(23104),l=a(56347),s=a(57485),i=a(31682),c=a(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),u=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(u),(0,r.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(n.location.search);t.set(u,e),n.replace({...n.location,search:t.toString()})}),[u,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,u=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:u}))),[s,i]=b({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,u]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&u.set(e)}),[a,u])]}({groupId:n}),f=(()=>{const e=s??d;return m({value:e,tabValues:u})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),h(e)}),[i,h,u]),tabValues:u}}var f=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.A)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,u.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const u=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function A(e){const t=h(e);return r.createElement("div",{className:(0,u.A)("tabs-container",v.tabList)},r.createElement(g,(0,n.A)({},e,t)),r.createElement(y,(0,n.A)({},e,t)))}function T(e){const t=(0,f.A)();return r.createElement(A,(0,n.A)({key:String(t)},e))}},19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const u={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(u.tabItem,o),hidden:a},t)}},42342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),u=(a(67443),a(11470)),o=a(19365);const l={id:"mutations",title:"Mutations",sidebar_label:"Mutations"},s=void 0,i={unversionedId:"mutations",id:"version-6.0/mutations",title:"Mutations",description:"In GraphQLite, mutations are created like queries.",source:"@site/versioned_docs/version-6.0/mutations.mdx",sourceDirName:".",slug:"/mutations",permalink:"/docs/6.0/mutations",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.0/mutations.mdx",tags:[],version:"6.0",lastUpdatedBy:"Jaap van Otterdijk",lastUpdatedAt:1742840357,formattedLastUpdatedAt:"Mar 24, 2025",frontMatter:{id:"mutations",title:"Mutations",sidebar_label:"Mutations"},sidebar:"docs",previous:{title:"Queries",permalink:"/docs/6.0/queries"},next:{title:"Type mapping",permalink:"/docs/6.0/type-mapping"}},c={},d=[],p={toc:d},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In GraphQLite, mutations are created ",(0,r.yg)("a",{parentName:"p",href:"/docs/6.0/queries"},"like queries"),"."),(0,r.yg)("p",null,"To create a mutation, you must annotate a method in a controller with the ",(0,r.yg)("inlineCode",{parentName:"p"},"@Mutation")," annotation."),(0,r.yg)("p",null,"For instance:"),(0,r.yg)(u.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Mutation;\n\nclass ProductController\n{\n    #[Mutation]\n    public function saveProduct(int $id, string $name, ?float $price = null): Product\n    {\n        // Some code that saves a product.\n    }\n}\n"))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Mutation;\n\nclass ProductController\n{\n    /**\n     * @Mutation\n     */\n    public function saveProduct(int $id, string $name, ?float $price = null): Product\n    {\n        // Some code that saves a product.\n    }\n}\n")))))}b.isMDXComponent=!0}}]);