"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7337],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),u=n(1980),s=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=m({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),y=(()=>{const e=u??d;return h({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var y=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==o&&(d(t),u(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},3639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(1839),n(4866),n(5162);const l={id:"extend-input-type",title:"Extending an input type",sidebar_label:"Extending an input type"},i=void 0,o={unversionedId:"extend-input-type",id:"version-6.1/extend-input-type",title:"Extending an input type",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-6.1/extend-input-type.mdx",sourceDirName:".",slug:"/extend-input-type",permalink:"/docs/extend-input-type",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/extend-input-type.mdx",tags:[],version:"6.1",lastUpdatedBy:"Oleksandr Prypkhan",lastUpdatedAt:1694495317,formattedLastUpdatedAt:"Sep 12, 2023",frontMatter:{id:"extend-input-type",title:"Extending an input type",sidebar_label:"Extending an input type"},sidebar:"docs",previous:{title:"Custom argument resolving",permalink:"/docs/argument-resolving"},next:{title:"Class with multiple output types",permalink:"/docs/multiple-output-types"}},u={},s=[],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("small",null,"Available in GraphQLite 4.0+"),(0,r.kt)("div",{class:"alert alert--info"},"If you are not familiar with the ",(0,r.kt)("code",null,"@Factory")," tag, ",(0,r.kt)("a",{href:"input-types"},'read first the "input types" guide'),"."),(0,r.kt)("p",null,"Fields exposed in a GraphQL input type do not need to be all part of the factory method."),(0,r.kt)("p",null,"Just like with output type (that can be ",(0,r.kt)("a",{parentName:"p",href:"/docs/extend-type"},"extended using the ",(0,r.kt)("inlineCode",{parentName:"a"},"ExtendType")," annotation"),"), you can extend/modify\nan input type using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation to add additional fields to an input type that is already declared by a ",(0,r.kt)("inlineCode",{parentName:"p"},"@Factory")," annotation,\nor to modify the returned object."),(0,r.kt)("div",{class:"alert alert--info"},"The ",(0,r.kt)("code",null,"@Decorate")," annotation is very useful in scenarios where you cannot touch the ",(0,r.kt)("code",null,"@Factory")," method. This can happen if the ",(0,r.kt)("code",null,"@Factory")," method is defined in a third-party library or if the ",(0,r.kt)("code",null,"@Factory")," method is part of auto-generated code."),(0,r.kt)("p",null,"Let's assume you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," class used as an input type. You most certainly have a ",(0,r.kt)("inlineCode",{parentName:"p"},"@Factory")," to create the input type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    #[Factory]\n    public function createFilter(string $name): Filter\n    {\n        // Let's assume you have a flexible 'Filter' class that can accept any kind of filter\n        $filter = new Filter();\n        $filter->addFilter('name', $name);\n        return $filter;\n    }\n}\n")),(0,r.kt)("p",null,"Assuming you ",(0,r.kt)("strong",{parentName:"p"},"cannot"),' modify the code of this factory, you can still modify the GraphQL input type generated by\nadding a "decorator" around the factory.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyDecorator\n{\n    #[Decorate(inputTypeName: \"FilterInput\")]\n    public function addTypeFilter(Filter $filter, string $type): Filter\n    {\n        $filter->addFilter('type', $type);\n        return $filter;\n    }\n}\n")),(0,r.kt)("p",null,'In the example above, the "Filter" input type is modified. We add an additional "type" field to the input type.'),(0,r.kt)("p",null,"A few things to notice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The decorator takes the object generated by the factory as first argument"),(0,r.kt)("li",{parentName:"ul"},"The decorator MUST return an object of the same type (or a sub-type)"),(0,r.kt)("li",{parentName:"ul"},"The decorator CAN contain additional parameters. They will be added to the fields of the GraphQL input type."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"@Decorate")," annotation must contain a ",(0,r.kt)("inlineCode",{parentName:"li"},"inputTypeName")," attribute that contains the name of the GraphQL input type\nthat is decorated. If you did not specify this name in the ",(0,r.kt)("inlineCode",{parentName:"li"},"@Factory"),' annotation, this is by default the name of the\nPHP class + "Input" (for instance: "Filter" => "FilterInput")')),(0,r.kt)("div",{class:"alert alert--warning"},(0,r.kt)("strong",null,"Heads up!")," The ",(0,r.kt)("code",null,"MyDecorator")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,r.kt)("br",null),(0,r.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."))}p.isMDXComponent=!0}}]);