"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2214],{2088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(5072),i=(n(1504),n(5788));n(5490);const l={id:"multiple_output_types",title:"Mapping multiple output types for the same class",sidebar_label:"Class with multiple output types",original_id:"multiple_output_types"},p=void 0,o={unversionedId:"multiple_output_types",id:"version-4.0/multiple_output_types",title:"Mapping multiple output types for the same class",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-4.0/multiple_output_types.mdx",sourceDirName:".",slug:"/multiple_output_types",permalink:"/docs/4.0/multiple_output_types",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/multiple_output_types.mdx",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1707699015,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{id:"multiple_output_types",title:"Mapping multiple output types for the same class",sidebar_label:"Class with multiple output types",original_id:"multiple_output_types"},sidebar:"version-4.0/docs",previous:{title:"Extending an input type",permalink:"/docs/4.0/extend_input_type"},next:{title:"Symfony specific features",permalink:"/docs/4.0/symfony-bundle-advanced"}},u={},s=[{value:"Example",id:"example",level:2},{value:"Extending a non-default type",id:"extending-a-non-default-type",level:2}],d={toc:s},r="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(r,(0,a.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("small",null,"Available in GraphQLite 4.0+"),(0,i.yg)("p",null,"In most cases, you have one PHP class and you want to map it to one GraphQL output type."),(0,i.yg)("p",null,"But in very specific cases, you may want to use different GraphQL output type for the same class.\nFor instance, depending on the context, you might want to prevent the user from accessing some fields of your object."),(0,i.yg)("p",null,'To do so, you need to create 2 output types for the same PHP class. You typically do this using the "default" attribute of the ',(0,i.yg)("inlineCode",{parentName:"p"},"@Type")," annotation."),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("p",null,"Here is an example. Say we are manipulating products. When I query a ",(0,i.yg)("inlineCode",{parentName:"p"},"Product")," details, I want to have access to all fields.\nBut for some reason, I don't want to expose the price field of a product if I query the list of all products."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"Product"),' class is declaring a classic GraphQL output type named "Product".'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type(class=Product::class, name="LimitedProduct", default=false)\n * @SourceField(name="name")\n */\nclass LimitedProductType\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(Product $product): string\n    {\n        return $product->getName();\n    }\n}\n')),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"LimitedProductType")," also declares a ",(0,i.yg)("a",{parentName:"p",href:"/docs/4.0/external_type_declaration"},'"external" type')," mapping the ",(0,i.yg)("inlineCode",{parentName:"p"},"Product")," class.\nBut pay special attention to the ",(0,i.yg)("inlineCode",{parentName:"p"},"@Type")," annotation."),(0,i.yg)("p",null,"First of all, we specify ",(0,i.yg)("inlineCode",{parentName:"p"},'name="LimitedProduct"'),'. This is useful to avoid having colliding names with the "Product" GraphQL output type\nthat is already declared.'),(0,i.yg)("p",null,"Then, we specify ",(0,i.yg)("inlineCode",{parentName:"p"},"default=false"),". This means that by default, the ",(0,i.yg)("inlineCode",{parentName:"p"},"Product")," class should not be mapped to the ",(0,i.yg)("inlineCode",{parentName:"p"},"LimitedProductType"),".\nThis type will only be used when we explicitly request it."),(0,i.yg)("p",null,"Finally, we can write our requests:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},'class ProductController\n{\n    /**\n     * This field will use the default type.\n     *\n     * @Field\n     */\n    public function getProduct(int $id): Product { /* ... */ }\n\n    /**\n     * Because we use the "outputType" attribute, this field will use the other type.\n     *\n     * @Field(outputType="[LimitedProduct!]!")\n     * @return Product[]\n     */\n    public function getProducts(): array { /* ... */ }\n}\n')),(0,i.yg)("p",null,'Notice how the "outputType" attribute is used in the ',(0,i.yg)("inlineCode",{parentName:"p"},"@Field")," annotation to force the output type."),(0,i.yg)("p",null,"Is a result, when the end user calls the ",(0,i.yg)("inlineCode",{parentName:"p"},"product")," query, we will have the possibility to fetch the ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"price")," fields,\nbut if he calls the ",(0,i.yg)("inlineCode",{parentName:"p"},"products")," query, each product in the list will have a ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," field but no ",(0,i.yg)("inlineCode",{parentName:"p"},"price")," field. We managed\nto successfully expose a different set of fields based on the query context."),(0,i.yg)("h2",{id:"extending-a-non-default-type"},"Extending a non-default type"),(0,i.yg)("p",null,"If you want to extend a type using the ",(0,i.yg)("inlineCode",{parentName:"p"},"@ExtendType")," annotation and if this type is declared as non-default,\nyou need to target the type by name instead of by class."),(0,i.yg)("p",null,"So instead of writing:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @ExtendType(class=Product::class)\n */\n")),(0,i.yg)("p",null,"you will write:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @ExtendType(name="LimitedProduct")\n */\n')),(0,i.yg)("p",null,'Notice how we use the "name" attribute instead of the "class" attribute in the ',(0,i.yg)("inlineCode",{parentName:"p"},"@ExtendType")," annotation."))}c.isMDXComponent=!0}}]);