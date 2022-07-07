"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4499],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||l;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),o=a(67392),p=a(7094),s=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a;const{lazy:i,block:d,defaultValue:h,values:m,groupId:g,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,o.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===h?h:null!=(t=null!=h?h:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:P,setTabGroupChoices:w}=(0,p.U)(),[T,N]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=g){const e=P[g];null!=e&&e!==T&&y.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,a=x.indexOf(t),n=y[a].value;n!==T&&(C(t),N(n),null!=g&&w(g,String(n)))},L=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;a=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},y.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:L,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function h(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},66096:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),i=a(85162);const o={id:"laravel-package-advanced",title:"Laravel package: advanced usage",sidebar_label:"Laravel specific features"},p=void 0,s={unversionedId:"laravel-package-advanced",id:"version-6.0/laravel-package-advanced",title:"Laravel package: advanced usage",description:"Be advised! This documentation will be removed in a future release.  For current and up-to-date Laravel extension specific documentation, please see the Github repository.",source:"@site/versioned_docs/version-6.0/laravel-package-advanced.mdx",sourceDirName:".",slug:"/laravel-package-advanced",permalink:"/docs/laravel-package-advanced",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.0/laravel-package-advanced.mdx",tags:[],version:"6.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657169592,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"laravel-package-advanced",title:"Laravel package: advanced usage",sidebar_label:"Laravel specific features"},sidebar:"docs",previous:{title:"Symfony specific features",permalink:"/docs/symfony-bundle-advanced"},next:{title:"Internals",permalink:"/docs/internals"}},u={},c=[{value:"Support for Laravel validation rules",id:"support-for-laravel-validation-rules",level:2},{value:"Support for pagination",id:"support-for-pagination",level:2},{value:"Simple paginator",id:"simple-paginator",level:3},{value:"Using GraphQLite with Eloquent efficiently",id:"using-graphqlite-with-eloquent-efficiently",level:2},{value:"Pitfalls to avoid with Eloquent",id:"pitfalls-to-avoid-with-eloquent",level:3}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"alert alert--warning"},(0,r.kt)("strong",null,"Be advised!")," This documentation will be removed in a future release.  For current and up-to-date Laravel extension specific documentation, please see the ",(0,r.kt)("a",{href:"https://github.com/thecodingmachine/graphqlite-laravel"},"Github repository"),"."),(0,r.kt)("p",null,"The Laravel package comes with a number of features to ease the integration of GraphQLite in Laravel."),(0,r.kt)("h2",{id:"support-for-laravel-validation-rules"},"Support for Laravel validation rules"),(0,r.kt)("p",null,"The GraphQLite Laravel package comes with a special ",(0,r.kt)("inlineCode",{parentName:"p"},"@Validate")," annotation to use Laravel validation rules in your\ninput types."),(0,r.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Laravel\\Annotations\\Validate;\n\nclass MyController\n{\n    #[Mutation]\n    public function createUser(\n            #[Validate("email|unique:users")]\n            string $email,\n            #[Validate("gte:8")]\n            string $password\n        ): User\n    {\n        // ...\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Laravel\\Annotations\\Validate;\n\nclass MyController\n{\n    /**\n     * @Mutation\n     * @Validate(for="$email", rule="email|unique:users")\n     * @Validate(for="$password", rule="gte:8")\n     */\n    public function createUser(string $email, string $password): User\n    {\n        // ...\n    }\n}\n')))),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Validate")," annotation in any query / mutation / field / factory / decorator."),(0,r.kt)("p",null,'If a validation fails to pass, the message will be printed in the "errors" section and you will get a HTTP 400 status code:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": [\n        {\n            "message": "The email must be a valid email address.",\n            "extensions": {\n                "argument": "email",\n                "category": "Validate"\n            }\n        },\n        {\n            "message": "The password must be greater than or equal 8 characters.",\n            "extensions": {\n                "argument": "password",\n                "category": "Validate"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"You can use any validation rule described in ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/6.x/validation#available-validation-rules"},"the Laravel documentation")),(0,r.kt)("h2",{id:"support-for-pagination"},"Support for pagination"),(0,r.kt)("p",null,"In your query, if you explicitly return an object that extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\LengthAwarePaginator"),' class,\nthe query result will be wrapped in a "paginator" type.'),(0,r.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Illuminate\\Pagination\\LengthAwarePaginator\n    {\n        return Product::paginate(15);\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Illuminate\\Pagination\\LengthAwarePaginator\n    {\n        return Product::paginate(15);\n    }\n}\n")))),(0,r.kt)("p",null,"Notice that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the method return type MUST BE ",(0,r.kt)("inlineCode",{parentName:"li"},"Illuminate\\Pagination\\LengthAwarePaginator")," or a class extending ",(0,r.kt)("inlineCode",{parentName:"li"},"Illuminate\\Pagination\\LengthAwarePaginator")),(0,r.kt)("li",{parentName:"ul"},"you MUST add a ",(0,r.kt)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,r.kt)("p",null,"Once this is done, you can get plenty of useful information about this page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'products {\n    items {      # The items for the selected page\n        id\n        name\n    }\n    totalCount   # The total count of items.\n    lastPage     # Get the page number of the last available page.\n    firstItem    # Get the "index" of the first item being paginated.\n    lastItem     # Get the "index" of the last item being paginated.\n    hasMorePages # Determine if there are more items in the data source.\n    perPage      # Get the number of items shown per page.\n    hasPages     # Determine if there are enough items to split into multiple pages.\n    currentPage  # Determine the current page being paginated.\n    isEmpty      # Determine if the list of items is empty or not.\n    isNotEmpty   # Determine if the list of items is not empty.\n}\n')),(0,r.kt)("div",{class:"alert alert--warning"},"Be sure to type hint on the class (",(0,r.kt)("code",null,"Illuminate\\Pagination\\LengthAwarePaginator"),") and not on the interface (",(0,r.kt)("code",null,"Illuminate\\Contracts\\Pagination\\LengthAwarePaginator"),"). The interface itself is not iterable (it does not extend ",(0,r.kt)("code",null,"Traversable"),") and therefore, GraphQLite will refuse to iterate over it."),(0,r.kt)("h3",{id:"simple-paginator"},"Simple paginator"),(0,r.kt)("p",null,"Note: if you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"simplePaginate")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"paginate"),", you can type hint on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\Paginator")," class."),(0,r.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Illuminate\\Pagination\\Paginator\n    {\n        return Product::simplePaginate(15);\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Illuminate\\Pagination\\Paginator\n    {\n        return Product::simplePaginate(15);\n    }\n}\n")))),(0,r.kt)("p",null,"The behaviour will be exactly the same except you will be missing the ",(0,r.kt)("inlineCode",{parentName:"p"},"totalCount")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lastPage")," fields."),(0,r.kt)("h2",{id:"using-graphqlite-with-eloquent-efficiently"},"Using GraphQLite with Eloquent efficiently"),(0,r.kt)("p",null,"In GraphQLite, you are supposed to put a ",(0,r.kt)("inlineCode",{parentName:"p"},"@Field")," annotation on each getter."),(0,r.kt)("p",null,"Eloquent uses PHP magic properties to expose your database records.\nBecause Eloquent relies on magic properties, it is quite rare for an Eloquent model to have proper getters and setters."),(0,r.kt)("p",null,"So we need to find a workaround. GraphQLite comes with a ",(0,r.kt)("inlineCode",{parentName:"p"},"@MagicField")," annotation to help you\nworking with magic properties."),(0,r.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'#[Type]\n#[MagicField(name: "id", outputType: "ID!")]\n#[MagicField(name: "name", phpType: "string")]\n#[MagicField(name: "categories", phpType: "Category[]")]\nclass Product extends Model\n{\n}\n'))),(0,r.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type()\n * @MagicField(name="id", outputType="ID!")\n * @MagicField(name="name", phpType="string")\n * @MagicField(name="categories", phpType="Category[]")\n */\nclass Product extends Model\n{\n}\n')))),(0,r.kt)("p",null,'Please note that since the properties are "magic", they don\'t have a type. Therefore,\nyou need to pass either the "outputType" attribute with the GraphQL type matching the property,\nor the "phpType" attribute with the PHP type matching the property.'),(0,r.kt)("h3",{id:"pitfalls-to-avoid-with-eloquent"},"Pitfalls to avoid with Eloquent"),(0,r.kt)("p",null,"When designing relationships in Eloquent, you write a method to expose that relationship this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class User extends Model\n{\n    /**\n     * Get the phone record associated with the user.\n     */\n    public function phone()\n    {\n        return $this->hasOne('App\\Phone');\n    }\n}\n")),(0,r.kt)("p",null,"It would be tempting to put a ",(0,r.kt)("inlineCode",{parentName:"p"},"@Field")," annotation on the ",(0,r.kt)("inlineCode",{parentName:"p"},"phone()")," method, but this will not work. Indeed,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"phone()")," method does not return a ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Phone")," object. It is the ",(0,r.kt)("inlineCode",{parentName:"p"},"phone")," magic property that returns it."),(0,r.kt)("p",null,"In short:"),(0,r.kt)("div",{class:"alert alert--danger"},"This does not work:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class User extends Model\n{\n    /**\n    * @Field\n    */\n    public function phone()\n    {\n        return $this->hasOne('App\\Phone');\n    }\n}\n"))),(0,r.kt)("div",{class:"alert alert--success"},"This works:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @MagicField(name="phone", phpType="App\\\\Phone")\n */\nclass User extends Model\n{\n    public function phone()\n    {\n        return $this->hasOne(\'App\\Phone\');\n    }\n}\n'))))}h.isMDXComponent=!0}}]);