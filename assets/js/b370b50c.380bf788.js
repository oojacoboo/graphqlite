"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),l=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:h,groupId:f,className:v}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,s.U)(),[N,A]=(0,r.useState)(w),O=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==N&&g.some((t=>t.value===e))&&A(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==N&&(P(t),A(a),null!=f&&T(f,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;n=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},v)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},59804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services"},s=void 0,u={unversionedId:"autowiring",id:"version-3.0/autowiring",title:"Autowiring services",description:"GraphQLite can automatically inject services in your fields/queries/mutations signatures.",source:"@site/versioned_docs/version-3.0/autowiring.mdx",sourceDirName:".",slug:"/autowiring",permalink:"/docs/3.0/autowiring",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/autowiring.mdx",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657169592,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services"}},c={},p=[{value:"Sample",id:"sample",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Fetching a service by name (discouraged!)",id:"fetching-a-service-by-name-discouraged",level:2},{value:"Alternative solution",id:"alternative-solution",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GraphQLite can automatically inject services in your fields/queries/mutations signatures."),(0,r.kt)("p",null,"Some of your fields may be computed. In order to compute these fields, you might need to call a service."),(0,r.kt)("p",null,"Most of the time, your ",(0,r.kt)("inlineCode",{parentName:"p"},"@Type")," annotation will be put on a model. And models do not have access to services.\nHopefully, if you add a type-hinted service in your field's declaration, GraphQLite will automatically fill it with\nthe service instance."),(0,r.kt)("h2",{id:"sample"},"Sample"),(0,r.kt)("p",null,"Let's assume you are running an international store. You have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Product")," class. Each product has many names (depending\non the language of the user)."),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Autowire;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\nuse Symfony\\Component\\Translation\\TranslatorInterface;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(\n            #[Autowire]\n            TranslatorInterface $translator\n        ): string\n    {\n        return $translator->trans('product_name_'.$this->id);\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Autowire;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\nuse Symfony\\Component\\Translation\\TranslatorInterface;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     * @Autowire(for=\"$translator\")\n     */\n    public function getName(TranslatorInterface $translator): string\n    {\n        return $translator->trans('product_name_'.$this->id);\n    }\n}\n")))),(0,r.kt)("p",null,"When GraphQLite queries the name, it will automatically fetch the translator service."),(0,r.kt)("div",{class:"alert alert--warning"},"As with most autowiring solutions, GraphQLite assumes that the service identifier in the container is the fully qualified class name of the type-hint. So in the example above, GraphQLite will look for a service whose name is ",(0,r.kt)("code",null,"Symfony\\Component\\Translation\\TranslatorInterface"),"."),(0,r.kt)("h2",{id:"best-practices"},"Best practices"),(0,r.kt)("p",null,"It is a good idea to refrain from type-hinting on concrete implementations.\nMost often, your field declaration will be in your model. If you add a type-hint on a service, you are binding your domain\nwith a particular service implementation. This makes your code tightly coupled and less testable."),(0,r.kt)("div",{class:"alert alert--danger"},"Please don't do that:",(0,r.kt)("pre",null,(0,r.kt)("code",null,"    #[Field] public function getName(#[Autowire] MyTranslator $translator): string"))),(0,r.kt)("p",null,"Instead, be sure to type-hint against an interface."),(0,r.kt)("div",{class:"alert alert--success"},"Do this instead:",(0,r.kt)("pre",null,(0,r.kt)("code",null,"    #[Field] public function getName(#[Autowire] TranslatorInterface $translator): string"))),(0,r.kt)("p",null,"By type-hinting against an interface, your code remains testable and is decoupled from the service implementation."),(0,r.kt)("h2",{id:"fetching-a-service-by-name-discouraged"},"Fetching a service by name (discouraged!)"),(0,r.kt)("p",null,"Optionally, you can specify the identifier of the service you want to fetch from the controller:"),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'#[Autowire(identifier: "translator")]\n'))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Autowire(for="$translator", identifier="translator")\n */\n')))),(0,r.kt)("div",{class:"alert alert--danger"},"While GraphQLite offers the possibility to specify the name of the service to be autowired, we would like to emphasize that this is ",(0,r.kt)("strong",null,"highly discouraged"),'. Hard-coding a container identifier in the code of your class is akin to using the "service locator" pattern, which is known to be an anti-pattern. Please refrain from doing this as much as possible.'),(0,r.kt)("h2",{id:"alternative-solution"},"Alternative solution"),(0,r.kt)("p",null,"You may find yourself uncomfortable with the autowiring mechanism of GraphQLite. For instance maybe:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your service identifier in the container is not the fully qualified class name of the service (this is often true if you are not using a container supporting autowiring)"),(0,r.kt)("li",{parentName:"ul"},"You do not want to inject a service in a domain object"),(0,r.kt)("li",{parentName:"ul"},"You simply do not like the magic of injecting services in a method signature")),(0,r.kt)("p",null,"If you do not want to use autowiring and if you still need to access services to compute a field, please read on\nthe next chapter to learn ",(0,r.kt)("a",{parentName:"p",href:"extend_type"},"how to extend a type"),"."))}m.isMDXComponent=!0}}]);