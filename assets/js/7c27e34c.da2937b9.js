"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8091],{59122:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"features",slug:"/",title:"GraphQLite",sidebar_label:"GraphQLite",original_id:"features"},s=void 0,u={unversionedId:"features",id:"version-3.0/features",isDocsHomePage:!1,title:"GraphQLite",description:"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers.",source:"@site/versioned_docs/version-3.0/features.mdx",sourceDirName:".",slug:"/",permalink:"/docs/3.0/",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/features.mdx",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1635194662,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"features",slug:"/",title:"GraphQLite",sidebar_label:"GraphQLite",original_id:"features"},sidebar:"version-3.0/docs",next:{title:"Getting Started",permalink:"/docs/3.0/getting-started"}},d=[{value:"Features",id:"features",children:[],level:2},{value:"Basic example",id:"basic-example",children:[],level:2}],p={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"https://graphqlite.thecodingmachine.io/img/logo.svg",alt:"GraphQLite logo",width:"250",height:"250"})),(0,i.kt)("p",null,"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a complete GraphQL API by simply annotating your PHP classes"),(0,i.kt)("li",{parentName:"ul"},"Framework agnostic, but Symfony bundle available!"),(0,i.kt)("li",{parentName:"ul"},"Comes with batteries included: queries, mutations, mapping of arrays / iterators, file uploads, extendable types and more!")),(0,i.kt)("h2",{id:"basic-example"},"Basic example"),(0,i.kt)("p",null,"First, declare a query in your controller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    /**\n     * @Query()\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")),(0,i.kt)("p",null,"Then, annotate the ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," class to declare what fields are exposed to the GraphQL API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n")),(0,i.kt)("p",null,"That's it, you're good to go! Query and enjoy!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-grapql"},"{\n  product(id: 42) {\n    name\n  }\n}\n")))}c.isMDXComponent=!0}}]);