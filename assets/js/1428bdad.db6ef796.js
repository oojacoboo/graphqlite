"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9716],{5388:(e,t,a)=>{a.d(t,{c:()=>o});var n=a(1504),r=a(4971);const p={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.c)(p.tabItem,o),hidden:a},t)}},1268:(e,t,a)=>{a.d(t,{c:()=>v});var n=a(5072),r=a(1504),p=a(4971),o=a(3943),l=a(5592),s=a(632),i=a(7128),u=a(1148);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function y(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,i.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.Uz)(),p=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._M)(p),(0,r.useCallback)((e=>{if(!p)return;const t=new URLSearchParams(n.location.search);t.set(p,e),n.replace({...n.location,search:t.toString()})}),[p,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,p=y(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:p}))),[s,i]=m({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,p]=(0,u.IN)(a);return[n,(0,r.useCallback)((e=>{a&&p.set(e)}),[a,p])]}({groupId:n}),g=(()=>{const e=s??c;return d({value:e,tabValues:p})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:p}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),h(e)}),[i,h,p]),tabValues:p}}var g=a(3664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.MV)(),y=e=>{const t=e.currentTarget,a=u.indexOf(t),n=i[a].value;n!==l&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.c)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.c)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:y},o,{className:(0,p.c)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function T(e){let{lazy:t,children:a,selectedValue:n}=e;const p=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=p.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},p.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,p.c)("tabs-container",f.tabList)},r.createElement(b,(0,n.c)({},e,t)),r.createElement(T,(0,n.c)({},e,t)))}function v(e){const t=(0,g.c)();return r.createElement(N,(0,n.c)({key:String(t)},e))}},108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var n=a(5072),r=(a(1504),a(5788));a(5490),a(1268),a(5388);const p={id:"custom-types",title:"Custom types",sidebar_label:"Custom types"},o=void 0,l={unversionedId:"custom-types",id:"version-6.1/custom-types",title:"Custom types",description:"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite.",source:"@site/versioned_docs/version-6.1/custom-types.mdx",sourceDirName:".",slug:"/custom-types",permalink:"/docs/custom-types",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/custom-types.mdx",tags:[],version:"6.1",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1707694442,formattedLastUpdatedAt:"Feb 11, 2024",frontMatter:{id:"custom-types",title:"Custom types",sidebar_label:"Custom types"},sidebar:"docs",previous:{title:"Pagination",permalink:"/docs/pagination"},next:{title:"Custom annotations",permalink:"/docs/field-middlewares"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Registering a custom output type (advanced)",id:"registering-a-custom-output-type-advanced",level:2},{value:"Symfony users",id:"symfony-users",level:3},{value:"Other frameworks",id:"other-frameworks",level:3},{value:"Registering a custom scalar type (advanced)",id:"registering-a-custom-scalar-type-advanced",level:2}],u={toc:i},c="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite."),(0,r.yg)("p",null,"For instance:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Type(class: Product::class)]\nclass ProductType\n{\n    #[Field]\n    public function getId(Product $source): string\n    {\n        return $source->getId();\n    }\n}\n")),(0,r.yg)("p",null,"In the example above, GraphQLite will generate a GraphQL schema with a field ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," of type ",(0,r.yg)("inlineCode",{parentName:"p"},"string"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n    id: String!\n}\n")),(0,r.yg)("p",null,"GraphQL comes with an ",(0,r.yg)("inlineCode",{parentName:"p"},"ID")," scalar type. But PHP has no such type. So GraphQLite does not know when a variable\nis an ",(0,r.yg)("inlineCode",{parentName:"p"},"ID")," or not."),(0,r.yg)("p",null,"You can help GraphQLite by manually specifying the output type to use:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'    #[Field(outputType: "ID")]\n')),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"outputType")," attribute will map the return value of the method to the output type passed in parameter."),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"outputType")," attribute in the following annotations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Query")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Mutation")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Field")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@SourceField")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@MagicField"))),(0,r.yg)("h2",{id:"registering-a-custom-output-type-advanced"},"Registering a custom output type (advanced)"),(0,r.yg)("p",null,"In order to create a custom output type, you need to:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Design a class that extends ",(0,r.yg)("inlineCode",{parentName:"li"},"GraphQL\\Type\\Definition\\ObjectType"),"."),(0,r.yg)("li",{parentName:"ol"},"Register this class in the GraphQL schema.")),(0,r.yg)("p",null,"You'll find more details on the ",(0,r.yg)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/type-system/object-types/"},"Webonyx documentation"),"."),(0,r.yg)("hr",null),(0,r.yg)("p",null,"In order to find existing types, the schema is using ",(0,r.yg)("em",{parentName:"p"},"type mappers")," (classes implementing the ",(0,r.yg)("inlineCode",{parentName:"p"},"TypeMapperInterface")," interface)."),(0,r.yg)("p",null,"You need to make sure that one of these type mappers can return an instance of your type. The way you do this will depend on the framework\nyou use."),(0,r.yg)("h3",{id:"symfony-users"},"Symfony users"),(0,r.yg)("p",null,"Any class extending ",(0,r.yg)("inlineCode",{parentName:"p"},"GraphQL\\Type\\Definition\\ObjectType")," (and available in the container) will be automatically detected\nby Symfony and added to the schema."),(0,r.yg)("p",null,"If you want to automatically map the output type to a given PHP class, you will have to explicitly declare the output type\nas a service and use the ",(0,r.yg)("inlineCode",{parentName:"p"},"graphql.output_type")," tag:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"# config/services.yaml\nservices:\n    App\\MyOutputType:\n        tags:\n            - { name: 'graphql.output_type', class: 'App\\MyPhpClass' }\n")),(0,r.yg)("h3",{id:"other-frameworks"},"Other frameworks"),(0,r.yg)("p",null,"The easiest way is to use a ",(0,r.yg)("inlineCode",{parentName:"p"},"StaticTypeMapper"),". Use this class to register custom output types."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"// Sample code:\n$staticTypeMapper = new StaticTypeMapper();\n\n// Let's register a type that maps by default to the \"MyClass\" PHP class\n$staticTypeMapper->setTypes([\n    MyClass::class => new MyCustomOutputType()\n]);\n\n// If you don't want your output type to map to any PHP class by default, use:\n$staticTypeMapper->setNotMappedTypes([\n    new MyCustomOutputType()\n]);\n\n// Register the static type mapper in your application using the SchemaFactory instance\n$schemaFactory->addTypeMapper($staticTypeMapper);\n")),(0,r.yg)("h2",{id:"registering-a-custom-scalar-type-advanced"},"Registering a custom scalar type (advanced)"),(0,r.yg)("p",null,"If you need to add custom scalar types, first, check the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-misc-types"},"GraphQLite Misc. Types library"),'.\nIt contains a number of "out-of-the-box" scalar types ready to use and you might find what you need there.'),(0,r.yg)("p",null,"You still need to develop your custom scalar type? Ok, let's get started."),(0,r.yg)("p",null,"In order to add a scalar type in GraphQLite, you need to:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"create a ",(0,r.yg)("a",{parentName:"li",href:"https://webonyx.github.io/graphql-php/type-system/scalar-types/#writing-custom-scalar-types"},"Webonyx custom scalar type"),".\nYou do this by creating a class that extends ",(0,r.yg)("inlineCode",{parentName:"li"},"GraphQL\\Type\\Definition\\ScalarType"),"."),(0,r.yg)("li",{parentName:"ul"},'create a "type mapper" that will map PHP types to the GraphQL scalar type. You do this by writing a class implementing the ',(0,r.yg)("inlineCode",{parentName:"li"},"RootTypeMapperInterface"),"."),(0,r.yg)("li",{parentName:"ul"},'create a "type mapper factory" that will be in charge of creating your "type mapper".')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"interface RootTypeMapperInterface\n{\n    /**\n     * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n     */\n    public function toGraphQLOutputType(Type $type, ?OutputType $subType, $reflector, DocBlock $docBlockObj): OutputType;\n\n    /**\n     * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n     */\n    public function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, $reflector, DocBlock $docBlockObj): InputType;\n\n    public function mapNameToType(string $typeName): NamedType;\n}\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"toGraphQLOutputType")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"toGraphQLInputType")," are meant to map a return type (for output types) or a parameter type (for input types)\nto your GraphQL scalar type. Return your scalar type if there is a match or ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if there no match."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"mapNameToType")," should return your GraphQL scalar type if ",(0,r.yg)("inlineCode",{parentName:"p"},"$typeName")," is the name of your scalar type."),(0,r.yg)("p",null,"RootTypeMapper are organized ",(0,r.yg)("strong",{parentName:"p"},"in a chain")," (they are actually middlewares).\nEach instance of a ",(0,r.yg)("inlineCode",{parentName:"p"},"RootTypeMapper")," holds a reference on the next root type mapper to be called in the chain."),(0,r.yg)("p",null,"For instance:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'class AnyScalarTypeMapper implements RootTypeMapperInterface\n{\n    /** @var RootTypeMapperInterface */\n    private $next;\n\n    public function __construct(RootTypeMapperInterface $next)\n    {\n        $this->next = $next;\n    }\n\n    public function toGraphQLOutputType(Type $type, ?OutputType $subType, ReflectionMethod $refMethod, DocBlock $docBlockObj): ?OutputType\n    {\n        if ($type instanceof Scalar) {\n            // AnyScalarType is a class implementing the Webonyx ScalarType type.\n            return AnyScalarType::getInstance();\n        }\n        // If the PHPDoc type is not "Scalar", let\'s pass the control to the next type mapper in the chain\n        return $this->next->toGraphQLOutputType($type, $subType, $refMethod, $docBlockObj);\n    }\n\n    public function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, ReflectionMethod $refMethod, DocBlock $docBlockObj): ?InputType\n    {\n        if ($type instanceof Scalar) {\n            // AnyScalarType is a class implementing the Webonyx ScalarType type.\n            return AnyScalarType::getInstance();\n        }\n        // If the PHPDoc type is not "Scalar", let\'s pass the control to the next type mapper in the chain\n        return $this->next->toGraphQLInputType($type, $subType, $argumentName, $refMethod, $docBlockObj);\n    }\n\n    /**\n     * Returns a GraphQL type by name.\n     * If this root type mapper can return this type in "toGraphQLOutputType" or "toGraphQLInputType", it should\n     * also map these types by name in the "mapNameToType" method.\n     *\n     * @param string $typeName The name of the GraphQL type\n     * @return NamedType|null\n     */\n    public function mapNameToType(string $typeName): ?NamedType\n    {\n        if ($typeName === AnyScalarType::NAME) {\n            return AnyScalarType::getInstance();\n        }\n        return null;\n    }\n}\n')),(0,r.yg)("p",null,"Now, in order to create an instance of your ",(0,r.yg)("inlineCode",{parentName:"p"},"AnyScalarTypeMapper")," class, you need an instance of the ",(0,r.yg)("inlineCode",{parentName:"p"},"$next")," type mapper in the chain.\nHow do you get the ",(0,r.yg)("inlineCode",{parentName:"p"},"$next")," type mapper? Through a factory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class AnyScalarTypeMapperFactory implements RootTypeMapperFactoryInterface\n{\n    public function create(RootTypeMapperInterface $next, RootTypeMapperFactoryContext $context): RootTypeMapperInterface\n    {\n        return new AnyScalarTypeMapper($next);\n    }\n}\n")),(0,r.yg)("p",null,"Now, you need to register this factory in your application, and we are done."),(0,r.yg)("p",null,"You can register your own root mapper factories using the ",(0,r.yg)("inlineCode",{parentName:"p"},"SchemaFactory::addRootTypeMapperFactory()")," method."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"$schemaFactory->addRootTypeMapperFactory(new AnyScalarTypeMapperFactory());\n")),(0,r.yg)("p",null,'If you are using the Symfony bundle, the factory will be automatically registered, you have nothing to do (the service\nis automatically tagged with the "graphql.root_type_mapper_factory" tag).'))}y.isMDXComponent=!0}}]);