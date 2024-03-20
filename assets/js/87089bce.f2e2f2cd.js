"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4253],{132:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var t=a(58168),l=(a(96540),a(15680)),i=(a(67443),a(11470)),p=a(19365);const r={id:"inheritance-interfaces",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces"},s=void 0,c={unversionedId:"inheritance-interfaces",id:"version-7.0.0/inheritance-interfaces",title:"Inheritance and interfaces",description:"Modeling inheritance",source:"@site/versioned_docs/version-7.0.0/inheritance-interfaces.mdx",sourceDirName:".",slug:"/inheritance-interfaces",permalink:"/docs/inheritance-interfaces",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-7.0.0/inheritance-interfaces.mdx",tags:[],version:"7.0.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1710913851,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"inheritance-interfaces",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces"},sidebar:"docs",previous:{title:"Input types",permalink:"/docs/input-types"},next:{title:"Error handling",permalink:"/docs/error-handling"}},o={},g=[{value:"Modeling inheritance",id:"modeling-inheritance",level:2},{value:"Mapping interfaces",id:"mapping-interfaces",level:2},{value:"Implementing interfaces",id:"implementing-interfaces",level:3},{value:"Interfaces without an explicit implementing type",id:"interfaces-without-an-explicit-implementing-type",level:3}],m={toc:g},u="wrapper";function y(e){let{components:n,...a}=e;return(0,l.yg)(u,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"modeling-inheritance"},"Modeling inheritance"),(0,l.yg)("p",null,"Some of your entities may extend other entities. GraphQLite will do its best to represent this hierarchy of objects in GraphQL using interfaces."),(0,l.yg)("p",null,"Let's say you have two classes, ",(0,l.yg)("inlineCode",{parentName:"p"},"Contact")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"User")," (which extends ",(0,l.yg)("inlineCode",{parentName:"p"},"Contact"),"):"),(0,l.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass Contact\n{\n    // ...\n}\n\n#[Type]\nclass User extends Contact\n{\n    // ...\n}\n"))),(0,l.yg)(p.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass Contact\n{\n    // ...\n}\n\n/**\n * @Type\n */\nclass User extends Contact\n{\n    // ...\n}\n")))),(0,l.yg)("p",null,"Now, let's assume you have a query that returns a contact:"),(0,l.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class ContactController\n{\n    #[Query]\n    public function getContact(): Contact\n    {\n        // ...\n    }\n}\n"))),(0,l.yg)(p.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class ContactController\n{\n    /**\n     * @Query()\n     */\n    public function getContact(): Contact\n    {\n        // ...\n    }\n}\n")))),(0,l.yg)("p",null,"When writing your GraphQL query, you are able to use fragments to retrieve fields from the ",(0,l.yg)("inlineCode",{parentName:"p"},"User")," type:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},"contact {\n    name\n    ... User {\n       email\n    }\n}\n")),(0,l.yg)("p",null,"Written in ",(0,l.yg)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),", the representation of types\nwould look like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},"interface ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype Contact implements ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype User implements ContactInterface {\n    // List of fields declared in Contact and User classes\n}\n")),(0,l.yg)("p",null,"Behind the scene, GraphQLite will detect that the ",(0,l.yg)("inlineCode",{parentName:"p"},"Contact")," class is extended by the ",(0,l.yg)("inlineCode",{parentName:"p"},"User")," class.\nBecause the class is extended, a GraphQL ",(0,l.yg)("inlineCode",{parentName:"p"},"ContactInterface")," interface is created dynamically."),(0,l.yg)("p",null,"The GraphQL ",(0,l.yg)("inlineCode",{parentName:"p"},"User")," type will also automatically implement this ",(0,l.yg)("inlineCode",{parentName:"p"},"ContactInterface"),". The interface contains all the fields\navailable in the ",(0,l.yg)("inlineCode",{parentName:"p"},"Contact")," type."),(0,l.yg)("h2",{id:"mapping-interfaces"},"Mapping interfaces"),(0,l.yg)("p",null,"If you want to create a pure GraphQL interface, you can also add a ",(0,l.yg)("inlineCode",{parentName:"p"},"@Type")," annotation on a PHP interface."),(0,l.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"#[Type]\ninterface UserInterface\n{\n    #[Field]\n    public function getUserName(): string;\n}\n"))),(0,l.yg)(p.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\ninterface UserInterface\n{\n    /**\n     * @Field\n     */\n    public function getUserName(): string;\n}\n")))),(0,l.yg)("p",null,"This will automatically create a GraphQL interface whose description is:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n")),(0,l.yg)("h3",{id:"implementing-interfaces"},"Implementing interfaces"),(0,l.yg)("p",null,'You don\'t have to do anything special to implement an interface in your GraphQL types.\nSimply "implement" the interface in PHP and you are done!'),(0,l.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n"))),(0,l.yg)(p.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n")))),(0,l.yg)("p",null,"This will translate in GraphQL schema as:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n\ntype User implements UserInterface {\n    userName: String!\n}\n")),(0,l.yg)("p",null,"Please note that you do not need to put the ",(0,l.yg)("inlineCode",{parentName:"p"},"@Field")," annotation again in the implementing class."),(0,l.yg)("h3",{id:"interfaces-without-an-explicit-implementing-type"},"Interfaces without an explicit implementing type"),(0,l.yg)("p",null,"You don't have to explicitly put a ",(0,l.yg)("inlineCode",{parentName:"p"},"@Type")," annotation on the class implementing the interface (though this\nis usually a good idea)."),(0,l.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * Look, this class has no #Type attribute\n */\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class UserController\n{\n    #[Query]\n    public function getUser(): UserInterface // This will work!\n    {\n        // ...\n    }\n}\n"))),(0,l.yg)(p.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * Look, this class has no @Type annotation\n */\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class UserController\n{\n    /**\n     * @Query()\n     */\n    public function getUser(): UserInterface // This will work!\n    {\n        // ...\n    }\n}\n")))),(0,l.yg)("div",{class:"alert alert--info"},'If GraphQLite cannot find a proper GraphQL Object type implementing an interface, it will create an object type "on the fly".'),(0,l.yg)("p",null,"In the example above, because the ",(0,l.yg)("inlineCode",{parentName:"p"},"User")," class has no ",(0,l.yg)("inlineCode",{parentName:"p"},"@Type")," annotations, GraphQLite will\ncreate a ",(0,l.yg)("inlineCode",{parentName:"p"},"UserImpl")," type that implements ",(0,l.yg)("inlineCode",{parentName:"p"},"UserInterface"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n\ntype UserImpl implements UserInterface {\n    userName: String!\n}\n")))}y.isMDXComponent=!0}}]);