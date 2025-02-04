"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5281],{19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(58168),r=n(96540),o=n(20053),i=n(23104),l=n(56347),s=n(57485),u=n(31682),c=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:a}),[p,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??p;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var h=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},i,{className:(0,o.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function P(e){const t=y(e);return r.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},r.createElement(f,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function w(e){const t=(0,h.A)();return r.createElement(P,(0,a.A)({key:String(t)},e))}},31017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=(n(67443),n(11470)),i=n(19365);const l={id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},s=void 0,u={unversionedId:"doctrine-annotations-attributes",id:"version-4.2/doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",description:"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+).",source:"@site/versioned_docs/version-4.2/doctrine-annotations-attributes.mdx",sourceDirName:".",slug:"/doctrine-annotations-attributes",permalink:"/docs/4.2/doctrine-annotations-attributes",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/doctrine-annotations-attributes.mdx",tags:[],version:"4.2",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1735156155,formattedLastUpdatedAt:"Dec 25, 2024",frontMatter:{id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},sidebar:"version-4.2/docs",previous:{title:"Migrating",permalink:"/docs/4.2/migrating"},next:{title:"Annotations reference",permalink:"/docs/4.2/annotations-reference"}},c={},p=[{value:"Doctrine annotations",id:"doctrine-annotations",level:2},{value:"PHP 8 attributes",id:"php-8-attributes",level:2}],d={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+)."),(0,r.yg)("h2",{id:"doctrine-annotations"},"Doctrine annotations"),(0,r.yg)("div",{class:"alert alert--warning"},(0,r.yg)("strong",null,"Deprecated!")," Doctrine annotations are deprecated in favor of native PHP 8 attributes. Support will be dropped in a future release."),(0,r.yg)("p",null,'Historically, attributes were not available in PHP and PHP developers had to "trick" PHP to get annotation support.  This was the purpose of the ',(0,r.yg)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-annotations/en/latest/index.html"},"doctrine/annotation")," library."),(0,r.yg)("p",null,"Using Doctrine annotations, you write annotations in your docblocks:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type\n */\nclass MyType\n{\n}\n")),(0,r.yg)("p",null,"Please note that:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The annotation is added in a ",(0,r.yg)("strong",{parentName:"li"},"docblock"),' (a comment starting with "',(0,r.yg)("inlineCode",{parentName:"li"},"/**"),'")'),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"Type")," part is actually a class. It must be declared in the ",(0,r.yg)("inlineCode",{parentName:"li"},"use")," statements at the top of your file.")),(0,r.yg)("div",{class:"alert alert--info"},(0,r.yg)("strong",null,"Heads up!"),(0,r.yg)("p",null,"Some IDEs provide support for Doctrine annotations:"),(0,r.yg)("ul",null,(0,r.yg)("li",null,"PhpStorm via the ",(0,r.yg)("a",{href:"https://plugins.jetbrains.com/plugin/7320-php-annotations"},"PHP Annotations Plugin")),(0,r.yg)("li",null,"Eclipse via the ",(0,r.yg)("a",{href:"https://marketplace.eclipse.org/content/symfony-plugin"},"Symfony 2 Plugin")),(0,r.yg)("li",null,"Netbeans has native support")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"We strongly recommend using an IDE that has Doctrine annotations support.\n"))),(0,r.yg)("h2",{id:"php-8-attributes"},"PHP 8 attributes"),(0,r.yg)("p",null,'Starting with PHP 8, PHP got native annotations support. They are actually called "attributes" in the PHP world.'),(0,r.yg)("p",null,"The same code can be written this way:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass MyType\n{\n}\n")),(0,r.yg)("p",null,"GraphQLite v4.1+ has support for PHP 8 attributes."),(0,r.yg)("p",null,"The Doctrine annotation class and the PHP 8 attribute class is ",(0,r.yg)("strong",{parentName:"p"},"the same")," (so you will be using the same ",(0,r.yg)("inlineCode",{parentName:"p"},"use")," statement at the top of your file)."),(0,r.yg)("p",null,"They support the same attributes too."),(0,r.yg)("p",null,"A few notable differences:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"PHP 8 attributes do not support nested attributes (unlike Doctrine annotations). This means there is no equivalent to the ",(0,r.yg)("inlineCode",{parentName:"li"},"annotations")," attribute of ",(0,r.yg)("inlineCode",{parentName:"li"},"@MagicField")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"@SourceField"),"."),(0,r.yg)("li",{parentName:"ul"},'PHP 8 attributes can be written at the parameter level. Any attribute targeting a "parameter" must be written at the parameter level.')),(0,r.yg)("p",null,"Let's take an example with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/4.2/autowiring"},(0,r.yg)("inlineCode",{parentName:"a"},"#Autowire")," attribute"),":"),(0,r.yg)(o.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getProduct(#[Autowire] ProductRepository $productRepository) : Product {\n    //...\n}\n"))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Field\n * @Autowire(for="$productRepository")\n */\npublic function getProduct(ProductRepository $productRepository) : Product {\n    //...\n}\n')))))}m.isMDXComponent=!0}}]);