"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3239],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=m({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??d;return h({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var g=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},o,{className:(0,i.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},6475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=(n(1839),n(4866)),o=n(5162);const l={id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services"},s=void 0,u={unversionedId:"autowiring",id:"version-5.0/autowiring",title:"Autowiring services",description:"GraphQLite can automatically inject services in your fields/queries/mutations signatures.",source:"@site/versioned_docs/version-5.0/autowiring.mdx",sourceDirName:".",slug:"/autowiring",permalink:"/docs/5.0/autowiring",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-5.0/autowiring.mdx",tags:[],version:"5.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1697476714,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services"},sidebar:"version-5.0/docs",previous:{title:"Type mapping",permalink:"/docs/5.0/type-mapping"},next:{title:"Extending a type",permalink:"/docs/5.0/extend-type"}},c={},d=[{value:"Sample",id:"sample",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Fetching a service by name (discouraged!)",id:"fetching-a-service-by-name-discouraged",level:2},{value:"Alternative solution",id:"alternative-solution",level:2}],p={toc:d},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GraphQLite can automatically inject services in your fields/queries/mutations signatures."),(0,r.kt)("p",null,"Some of your fields may be computed. In order to compute these fields, you might need to call a service."),(0,r.kt)("p",null,"Most of the time, your ",(0,r.kt)("inlineCode",{parentName:"p"},"@Type")," annotation will be put on a model. And models do not have access to services.\nHopefully, if you add a type-hinted service in your field's declaration, GraphQLite will automatically fill it with\nthe service instance."),(0,r.kt)("h2",{id:"sample"},"Sample"),(0,r.kt)("p",null,"Let's assume you are running an international store. You have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Product")," class. Each product has many names (depending\non the language of the user)."),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Autowire;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\nuse Symfony\\Component\\Translation\\TranslatorInterface;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(\n            #[Autowire]\n            TranslatorInterface $translator\n        ): string\n    {\n        return $translator->trans('product_name_'.$this->id);\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Autowire;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\nuse Symfony\\Component\\Translation\\TranslatorInterface;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     * @Autowire(for=\"$translator\")\n     */\n    public function getName(TranslatorInterface $translator): string\n    {\n        return $translator->trans('product_name_'.$this->id);\n    }\n}\n")))),(0,r.kt)("p",null,"When GraphQLite queries the name, it will automatically fetch the translator service."),(0,r.kt)("div",{class:"alert alert--warning"},"As with most autowiring solutions, GraphQLite assumes that the service identifier in the container is the fully qualified class name of the type-hint. So in the example above, GraphQLite will look for a service whose name is ",(0,r.kt)("code",null,"Symfony\\Component\\Translation\\TranslatorInterface"),"."),(0,r.kt)("h2",{id:"best-practices"},"Best practices"),(0,r.kt)("p",null,"It is a good idea to refrain from type-hinting on concrete implementations.\nMost often, your field declaration will be in your model. If you add a type-hint on a service, you are binding your domain\nwith a particular service implementation. This makes your code tightly coupled and less testable."),(0,r.kt)("div",{class:"alert alert--danger"},"Please don't do that:",(0,r.kt)("pre",null,(0,r.kt)("code",null,"#[Field] public function getName(#[Autowire] MyTranslator $translator): string"))),(0,r.kt)("p",null,"Instead, be sure to type-hint against an interface."),(0,r.kt)("div",{class:"alert alert--success"},"Do this instead:",(0,r.kt)("pre",null,(0,r.kt)("code",null,"#[Field] public function getName(#[Autowire] TranslatorInterface $translator): string"))),(0,r.kt)("p",null,"By type-hinting against an interface, your code remains testable and is decoupled from the service implementation."),(0,r.kt)("h2",{id:"fetching-a-service-by-name-discouraged"},"Fetching a service by name (discouraged!)"),(0,r.kt)("p",null,"Optionally, you can specify the identifier of the service you want to fetch from the controller:"),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'#[Autowire(identifier: "translator")]\n'))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Autowire(for="$translator", identifier="translator")\n */\n')))),(0,r.kt)("div",{class:"alert alert--danger"},"While GraphQLite offers the possibility to specify the name of the service to be autowired, we would like to emphasize that this is ",(0,r.kt)("strong",null,"highly discouraged"),'. Hard-coding a container identifier in the code of your class is akin to using the "service locator" pattern, which is known to be an anti-pattern. Please refrain from doing this as much as possible.'),(0,r.kt)("h2",{id:"alternative-solution"},"Alternative solution"),(0,r.kt)("p",null,"You may find yourself uncomfortable with the autowiring mechanism of GraphQLite. For instance maybe:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your service identifier in the container is not the fully qualified class name of the service (this is often true if you are not using a container supporting autowiring)"),(0,r.kt)("li",{parentName:"ul"},"You do not want to inject a service in a domain object"),(0,r.kt)("li",{parentName:"ul"},"You simply do not like the magic of injecting services in a method signature")),(0,r.kt)("p",null,"If you do not want to use autowiring and if you still need to access services to compute a field, please read on\nthe next chapter to learn ",(0,r.kt)("a",{parentName:"p",href:"extend-type"},"how to extend a type"),"."))}m.isMDXComponent=!0}}]);