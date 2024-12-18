"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6700],{19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>q});var n=a(58168),r=a(96540),l=a(20053),o=a(23104),i=a(56347),s=a(57485),u=a(31682),p=a(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=y({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),m=(()=>{const e=s??c;return h({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var m=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(c(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function q(e){const t=(0,m.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},71103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));a(67443),a(11470),a(19365);const l={id:"queries",title:"Queries",sidebar_label:"Queries"},o=void 0,i={unversionedId:"queries",id:"version-6.1/queries",title:"Queries",description:"In GraphQLite, GraphQL queries are created by writing methods in controller classes.",source:"@site/versioned_docs/version-6.1/queries.mdx",sourceDirName:".",slug:"/queries",permalink:"/docs/6.1/queries",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/queries.mdx",tags:[],version:"6.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1734498725,formattedLastUpdatedAt:"Dec 18, 2024",frontMatter:{id:"queries",title:"Queries",sidebar_label:"Queries"},sidebar:"docs",previous:{title:"Other frameworks / No framework",permalink:"/docs/6.1/other-frameworks"},next:{title:"Mutations",permalink:"/docs/6.1/mutations"}},s={},u=[{value:"Simple query",id:"simple-query",level:2},{value:"About annotations / attributes",id:"about-annotations--attributes",level:2},{value:"Testing the query",id:"testing-the-query",level:2},{value:"Query with a type",id:"query-with-a-type",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...l}=e;return(0,r.yg)(c,(0,n.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In GraphQLite, GraphQL queries are created by writing methods in ",(0,r.yg)("em",{parentName:"p"},"controller")," classes."),(0,r.yg)("p",null,"Those classes must be in the controllers namespaces which has been defined when you configured GraphQLite.\nFor instance, in Symfony, the controllers namespace is ",(0,r.yg)("inlineCode",{parentName:"p"},"App\\Controller")," by default."),(0,r.yg)("h2",{id:"simple-query"},"Simple query"),(0,r.yg)("p",null,"In a controller class, each query method must be annotated with the ",(0,r.yg)("inlineCode",{parentName:"p"},"@Query")," annotation. For instance:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    #[Query]\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")),(0,r.yg)("p",null,"This query is equivalent to the following ",(0,r.yg)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"Type Query {\n    hello(name: String!): String!\n}\n")),(0,r.yg)("p",null,"As you can see, GraphQLite will automatically do the mapping between PHP types and GraphQL types."),(0,r.yg)("div",{class:"alert alert--warning"},(0,r.yg)("strong",null,"Heads up!")," If you are not using a framework with an autowiring container (like Symfony or Laravel), please be aware that the ",(0,r.yg)("code",null,"MyController")," class must exist in the container of your application. Furthermore, the identifier of the controller in the container MUST be the fully qualified class name of controller."),(0,r.yg)("h2",{id:"about-annotations--attributes"},"About annotations / attributes"),(0,r.yg)("p",null,"GraphQLite relies a lot on annotations (we call them attributes since PHP 8)."),(0,r.yg)("p",null,'It supports both the old "Doctrine annotations" style (',(0,r.yg)("inlineCode",{parentName:"p"},"@Query"),") and the new PHP 8 attributes (",(0,r.yg)("inlineCode",{parentName:"p"},"#[Query]"),")."),(0,r.yg)("p",null,"Read the ",(0,r.yg)("a",{parentName:"p",href:"/docs/6.1/doctrine-annotations-attributes"},"Doctrine annotations VS attributes")," documentation if you are not familiar with this concept."),(0,r.yg)("h2",{id:"testing-the-query"},"Testing the query"),(0,r.yg)("p",null,"The default GraphQL endpoint is ",(0,r.yg)("inlineCode",{parentName:"p"},"/graphql"),"."),(0,r.yg)("p",null,"The easiest way to test a GraphQL endpoint is to use ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL")," or\n",(0,r.yg)("a",{parentName:"p",href:"https://altair.sirmuel.design/"},"Altair")," clients (they are available as Chrome or Firefox plugins)"),(0,r.yg)("div",{class:"alert alert--info"},"If you are using the Symfony bundle, GraphiQL is also directly embedded.",(0,r.yg)("br",null),"Simply head to ",(0,r.yg)("code",null,"http://[path-to-my-app]/graphiql")),(0,r.yg)("p",null,"Here a query using our simple ",(0,r.yg)("em",{parentName:"p"},"Hello World")," example:"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(67258).A,width:"1132",height:"352"})),(0,r.yg)("h2",{id:"query-with-a-type"},"Query with a type"),(0,r.yg)("p",null,"So far, we simply declared a query. But we did not yet declare a type."),(0,r.yg)("p",null,"Let's assume you want to return a product:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass ProductController\n{\n    #[Query]\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")),(0,r.yg)("p",null,"As the ",(0,r.yg)("inlineCode",{parentName:"p"},"Product")," class is not a scalar type, you must tell GraphQLite how to handle it:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"@Type")," annotation is used to inform GraphQLite that the ",(0,r.yg)("inlineCode",{parentName:"p"},"Product")," class is a GraphQL type."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"@Field")," annotation is used to define the GraphQL fields. This annotation must be put on a ",(0,r.yg)("strong",{parentName:"p"},"public method"),"."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Product")," class must be in one of the ",(0,r.yg)("em",{parentName:"p"},"types")," namespaces. As for ",(0,r.yg)("em",{parentName:"p"},"controller")," classes, you configured this namespace when you installed\nGraphQLite. By default, in Symfony, the allowed types namespaces are ",(0,r.yg)("inlineCode",{parentName:"p"},"App\\Entity")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"App\\Types"),"."),(0,r.yg)("p",null,"This query is equivalent to the following ",(0,r.yg)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"Type Product {\n    name: String!\n    price: Float\n}\n")),(0,r.yg)("div",{class:"alert alert--info"},(0,r.yg)("p",null,"If you are used to  ",(0,r.yg)("a",{href:"https://en.wikipedia.org/wiki/Domain-driven_design"},"Domain driven design"),", you probably realize that the ",(0,r.yg)("code",null,"Product")," class is part of your ",(0,r.yg)("i",null,"domain"),"."),(0,r.yg)("p",null,"GraphQL annotations are adding some serialization logic that is out of scope of the domain. These are ",(0,r.yg)("i",null,"just")," annotations and for most project, this is the fastest and easiest route."),(0,r.yg)("p",null,"If you feel that GraphQL annotations do not belong to the domain, or if you cannot modify the class directly (maybe because it is part of a third party library), there is another way to create types without annotating the domain class. We will explore that in the next chapter.")))}d.isMDXComponent=!0},67258:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/query1-5a22bbe2398efcc725ea571a07ff2c9b.png"}}]);