"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9307],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(t),d=p,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,r[1]=i;for(var o=2;o<l;o++)r[o]=t[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),p=t(86010);const l="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,p.Z)(l,r),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(87462),p=t(67294),l=t(86010),r=t(72389),i=t(67392),s=t(7094),o=t(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var n,t;const{lazy:r,block:m,defaultValue:d,values:h,groupId:y,className:f}=e,g=p.Children.map(e.children,(e=>{if((0,p.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,i.l)(k,((e,n)=>e.value===n.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===d?d:null!=(n=null!=d?d:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:N}=(0,s.U)(),[P,C]=(0,p.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,o.o5)();if(null!=y){const e=T[y];null!=e&&e!==P&&k.some((n=>n.value===e))&&C(e)}const x=e=>{const n=e.currentTarget,t=w.indexOf(n),a=k[t].value;a!==P&&(I(n),C(a),null!=y&&N(y,String(a)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=w.indexOf(e.currentTarget)+1;t=null!=(a=w[n])?a:w[0];break}case"ArrowLeft":{var p;const n=w.indexOf(e.currentTarget)-1;t=null!=(p=w[n])?p:w[w.length-1];break}}null==(n=t)||n.focus()};return p.createElement("div",{className:(0,l.Z)("tabs-container",u)},p.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},k.map((e=>{let{value:n,label:t,attributes:r}=e;return p.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:e=>w.push(e),onKeyDown:E,onFocus:x,onClick:x},r,{className:(0,l.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),r?(0,p.cloneElement)(g.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):p.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,p.cloneElement)(e,{key:n,hidden:e.props.value!==P})))))}function d(e){const n=(0,r.Z)();return p.createElement(m,(0,a.Z)({key:String(n)},e))}},46366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(87462),p=(t(67294),t(3905)),l=t(65488),r=t(85162);const i={id:"type-mapping",title:"Type mapping",sidebar_label:"Type mapping"},s=void 0,o={unversionedId:"type-mapping",id:"version-4.2/type-mapping",title:"Type mapping",description:"As explained in the queries section, the job of GraphQLite is to create GraphQL types from PHP types.",source:"@site/versioned_docs/version-4.2/type-mapping.mdx",sourceDirName:".",slug:"/type-mapping",permalink:"/docs/4.2/type-mapping",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/type-mapping.mdx",tags:[],version:"4.2",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1656361354,formattedLastUpdatedAt:"6/27/2022",frontMatter:{id:"type-mapping",title:"Type mapping",sidebar_label:"Type mapping"},sidebar:"version-4.2/docs",previous:{title:"Mutations",permalink:"/docs/4.2/mutations"},next:{title:"Autowiring services",permalink:"/docs/4.2/autowiring"}},u={},c=[{value:"Scalar mapping",id:"scalar-mapping",level:2},{value:"Class mapping",id:"class-mapping",level:2},{value:"Array mapping",id:"array-mapping",level:2},{value:"ID mapping",id:"id-mapping",level:2},{value:"Force the outputType",id:"force-the-outputtype",level:3},{value:"ID class",id:"id-class",level:3},{value:"Date mapping",id:"date-mapping",level:2},{value:"Union types",id:"union-types",level:2},{value:"Enum types",id:"enum-types",level:2},{value:"Deprecation of fields",id:"deprecation-of-fields",level:2},{value:"More scalar types",id:"more-scalar-types",level:2}],m={toc:c};function d(e){let{components:n,...t}=e;return(0,p.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"As explained in the ",(0,p.kt)("a",{parentName:"p",href:"/docs/4.2/queries"},"queries")," section, the job of GraphQLite is to create GraphQL types from PHP types."),(0,p.kt)("h2",{id:"scalar-mapping"},"Scalar mapping"),(0,p.kt)("p",null,"Scalar PHP types can be type-hinted to the corresponding GraphQL types:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"string")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"int")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"bool")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"float"))),(0,p.kt)("p",null,"For instance:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    #[Query]\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")))),(0,p.kt)("h2",{id:"class-mapping"},"Class mapping"),(0,p.kt)("p",null,"When returning a PHP class in a query, you must annotate this class using ",(0,p.kt)("inlineCode",{parentName:"p"},"@Type")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"@Field")," annotations:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note:")," The GraphQL output type name generated by GraphQLite is equal to the class name of the PHP class. So if your\nPHP class is ",(0,p.kt)("inlineCode",{parentName:"p"},"App\\Entities\\Product"),', then the GraphQL type will be named "Product".'),(0,p.kt)("p",null,'In case you have several types with the same class name in different namespaces, you will face a naming collision.\nHopefully, you can force the name of the GraphQL output type using the "name" attribute:'),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'#[Type(name: "MyProduct")]\nclass Product { /* ... */ }\n'))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type(name="MyProduct")\n */\nclass Product { /* ... */ }\n')))),(0,p.kt)("div",{class:"alert alert--info"},"You can also put a ",(0,p.kt)("a",{href:"inheritance-interfaces#mapping-interfaces"},(0,p.kt)("code",null,"@Type")," annotation on a PHP interface to map your code to a GraphQL interface"),"."),(0,p.kt)("h2",{id:"array-mapping"},"Array mapping"),(0,p.kt)("p",null,"You can type-hint against arrays (or iterators) as long as you add a detailed ",(0,p.kt)("inlineCode",{parentName:"p"},"@return")," statement in the PHPDoc."),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @return User[] <=== we specify that the array is an array of User objects.\n */\n#[Query]\npublic function users(int $limit, int $offset): array\n{\n    // Some code that returns an array of "users".\n}\n'))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @return User[] <=== we specify that the array is an array of User objects.\n */\npublic function users(int $limit, int $offset): array\n{\n    // Some code that returns an array of "users".\n}\n')))),(0,p.kt)("h2",{id:"id-mapping"},"ID mapping"),(0,p.kt)("p",null,"GraphQL comes with a native ",(0,p.kt)("inlineCode",{parentName:"p"},"ID")," type. PHP has no such type."),(0,p.kt)("p",null,"There are two ways with GraphQLite to handle such type."),(0,p.kt)("h3",{id:"force-the-outputtype"},"Force the outputType"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'#[Field(outputType: "ID")]\npublic function getId(): string\n{\n    // ...\n}\n'))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Field(outputType="ID")\n */\npublic function getId(): string\n{\n    // ...\n}\n')))),(0,p.kt)("p",null,"Using the ",(0,p.kt)("inlineCode",{parentName:"p"},"outputType")," attribute of the ",(0,p.kt)("inlineCode",{parentName:"p"},"@Field")," annotation, you can force the output type to ",(0,p.kt)("inlineCode",{parentName:"p"},"ID"),"."),(0,p.kt)("p",null,"You can learn more about forcing output types in the ",(0,p.kt)("a",{parentName:"p",href:"/docs/4.2/custom-types"},"custom types section"),"."),(0,p.kt)("h3",{id:"id-class"},"ID class"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n#[Field]\npublic function getId(): ID\n{\n    // ...\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n/**\n * @Field\n */\npublic function getId(): ID\n{\n    // ...\n}\n")))),(0,p.kt)("p",null,"Note that you can also use the ",(0,p.kt)("inlineCode",{parentName:"p"},"ID")," class as an input type:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n#[Mutation]\npublic function save(ID $id, string $name): Product\n{\n    // ...\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n/**\n * @Mutation\n */\npublic function save(ID $id, string $name): Product\n{\n    // ...\n}\n")))),(0,p.kt)("h2",{id:"date-mapping"},"Date mapping"),(0,p.kt)("p",null,"Out of the box, GraphQL does not have a ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime")," type, but we took the liberty to add one, with sensible defaults."),(0,p.kt)("p",null,"When used as an output type, ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTimeImmutable")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTimeInterface")," PHP classes are\nautomatically mapped to this ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime")," GraphQL type."),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getDate(): \\DateTimeInterface\n{\n    return $this->date;\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field\n */\npublic function getDate(): \\DateTimeInterface\n{\n    return $this->date;\n}\n")))),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"date")," field will be of type ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime"),". In the returned JSON response to a query, the date is formatted as a string\nin the ",(0,p.kt)("strong",{parentName:"p"},"ISO8601")," format (aka ATOM format)."),(0,p.kt)("div",{class:"alert alert--danger"},"PHP ",(0,p.kt)("code",null,"DateTime")," type is not supported."),(0,p.kt)("h2",{id:"union-types"},"Union types"),(0,p.kt)("p",null,"You can create a GraphQL union type ",(0,p.kt)("em",{parentName:"p"},"on the fly")," using the pipe ",(0,p.kt)("inlineCode",{parentName:"p"},"|")," operator in the PHPDoc:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @return Company|Contact <== can return a company OR a contact.\n */\n#[Query]\npublic function companyOrContact(int $id)\n{\n    // Some code that returns a company or a contact.\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @return Company|Contact <== can return a company OR a contact.\n */\npublic function companyOrContact(int $id)\n{\n    // Some code that returns a company or a contact.\n}\n")))),(0,p.kt)("h2",{id:"enum-types"},"Enum types"),(0,p.kt)("small",null,"Available in GraphQLite 4.0+"),(0,p.kt)("p",null,"PHP has no native support for enum types. Hopefully, there are a number of PHP libraries that emulate enums in PHP.\nThe most commonly used library is ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/myclabs/php-enum"},"myclabs/php-enum")," and GraphQLite comes with\nnative support for it."),(0,p.kt)("p",null,"You will first need to install ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/myclabs/php-enum"},"myclabs/php-enum"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require myclabs/php-enum\n")),(0,p.kt)("p",null,"Now, any class extending the ",(0,p.kt)("inlineCode",{parentName:"p"},"MyCLabs\\Enum\\Enum")," class will be mapped to a GraphQL enum:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use MyCLabs\\Enum\\Enum;\n\nclass StatusEnum extends Enum\n{\n    private const ON = 'on';\n    private const OFF = 'off';\n    private const PENDING = 'pending';\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @return User[]\n */\n#[Query]\npublic function users(StatusEnum $status): array\n{\n    if ($status == StatusEnum::ON()) {\n        // Note that the "magic" ON() method returns an instance of the StatusEnum class.\n        // Also, note that we are comparing this instance using "==" (using "===" would fail as we have 2 different instances here)\n        // ...\n    }\n    // ...\n}\n'))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use MyCLabs\\Enum\\Enum;\n\nclass StatusEnum extends Enum\n{\n    private const ON = 'on';\n    private const OFF = 'off';\n    private const PENDING = 'pending';\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @return User[]\n */\npublic function users(StatusEnum $status): array\n{\n    if ($status == StatusEnum::ON()) {\n        // Note that the "magic" ON() method returns an instance of the StatusEnum class.\n        // Also, note that we are comparing this instance using "==" (using "===" would fail as we have 2 different instances here)\n        // ...\n    }\n    // ...\n}\n')))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"query users($status: StatusEnum!) {}\n    users(status: $status) {\n        id\n    }\n}\n")),(0,p.kt)("p",null,"By default, the name of the GraphQL enum type will be the name of the class. If you have a naming conflict (two classes\nthat live in different namespaces with the same class name), you can solve it using the ",(0,p.kt)("inlineCode",{parentName:"p"},"@EnumType")," annotation:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\EnumType;\n\n#[EnumType(name: "UserStatus")]\nclass StatusEnum extends Enum\n{\n    // ...\n}\n'))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\EnumType;\n\n/**\n * @EnumType(name="UserStatus")\n */\nclass StatusEnum extends Enum\n{\n    // ...\n}\n')))),(0,p.kt)("div",{class:"alert alert--warning"},'GraphQLite must be able to find all the classes extending the "MyCLabs\\Enum" class in your project. By default, GraphQLite will look for "Enum" classes in the namespaces declared for the types. For this reason, ',(0,p.kt)("strong",null,"your enum classes MUST be in one of the namespaces declared for the types in your GraphQLite configuration file.")),(0,p.kt)("div",{class:"alert alert--info"},'There are many enumeration library in PHP and you might be using another library. If you want to add support for your own library, this is not extremely difficult to do. You need to register a custom "RootTypeMapper" with GraphQLite. You can learn more about ',(0,p.kt)("em",null,"type mappers")," in the ",(0,p.kt)("a",{href:"internals"},'"internals" documentation'),"and ",(0,p.kt)("a",{href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Root/MyCLabsEnumTypeMapper.php"},"copy/paste and adapt the root type mapper used for myclabs/php-enum"),"."),(0,p.kt)("h2",{id:"deprecation-of-fields"},"Deprecation of fields"),(0,p.kt)("p",null,"You can mark a field as deprecated in your GraphQL Schema by just annotating it with the ",(0,p.kt)("inlineCode",{parentName:"p"},"@deprecated")," PHPDoc annotation."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     * @deprecated use field `name` instead\n     */\n    public function getProductName(): string\n    {\n        return $this->name;\n    }\n}\n")),(0,p.kt)("p",null,"This will add the ",(0,p.kt)("inlineCode",{parentName:"p"},"@deprecated")," directive to the field in the GraphQL Schema which sets the ",(0,p.kt)("inlineCode",{parentName:"p"},"isDeprecated")," field to ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," and adds the reason to the ",(0,p.kt)("inlineCode",{parentName:"p"},"deprecationReason")," field in an introspection query. Fields marked as deprecated can still be queried, but will be returned in an introspection query only if ",(0,p.kt)("inlineCode",{parentName:"p"},"includeDeprecated")," is set to ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n    __type(name: "Product") {\n\ufffc       fields(includeDeprecated: true) {\n\ufffc           name\n\ufffc           isDeprecated\n\ufffc           deprecationReason\n\ufffc       }\n\ufffc   }\n}\n')),(0,p.kt)("h2",{id:"more-scalar-types"},"More scalar types"),(0,p.kt)("small",null,"Available in GraphQLite 4.0+"),(0,p.kt)("p",null,'GraphQL supports "custom" scalar types. GraphQLite supports adding more GraphQL scalar types.'),(0,p.kt)("p",null,"If you need more types, you can check the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-misc-types"},"GraphQLite Misc. Types library"),".\nIt adds support for more scalar types out of the box in GraphQLite."),(0,p.kt)("p",null,"Or if you have some special needs, ",(0,p.kt)("a",{parentName:"p",href:"custom-types#registering-a-custom-scalar-type-advanced"},"you can develop your own scalar types"),"."))}d.isMDXComponent=!0}}]);