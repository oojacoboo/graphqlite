"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5521],{9787:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));a(1839);const o={id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination",original_id:"pagination"},s=void 0,r={unversionedId:"pagination",id:"version-3.0/pagination",title:"Paginating large result sets",description:"It is quite common to have to paginate over large result sets.",source:"@site/versioned_docs/version-3.0/pagination.mdx",sourceDirName:".",slug:"/pagination",permalink:"/docs/3.0/pagination",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/pagination.mdx",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1674374473,formattedLastUpdatedAt:"Jan 22, 2023",frontMatter:{id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination",original_id:"pagination"},sidebar:"version-3.0/docs",previous:{title:"File uploads",permalink:"/docs/3.0/file-uploads"},next:{title:"Custom output types",permalink:"/docs/3.0/custom-output-types"}},l={},p=[{value:"Usage",id:"usage",level:2}],u={toc:p};function d(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is quite common to have to paginate over large result sets."),(0,i.kt)("p",null,"GraphQLite offers a simple way to do that using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas"),"."),(0,i.kt)("p",null,"Porpaginas is a set of PHP interfaces that can be implemented by result iterators. It comes with a native support for\nPHP arrays, Doctrine and ",(0,i.kt)("a",{parentName:"p",href:"https://thecodingmachine.github.io/tdbm/doc/limit_offset_resultset.html"},"TDBM"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"In your query, simply return a class that implements ",(0,i.kt)("inlineCode",{parentName:"p"},"Porpaginas\\Result"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Porpaginas\\Result\n    {\n        // Some code that returns a list of products\n\n        // If you are using Doctrine, something like:\n        return new Porpaginas\\ORMQueryResult($doctrineQuery);\n    }\n}\n")),(0,i.kt)("p",null,"Notice that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the method return type MUST BE ",(0,i.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")," or a class implementing ",(0,i.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")),(0,i.kt)("li",{parentName:"ul"},"you MUST add a ",(0,i.kt)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,i.kt)("p",null,"Once this is done, you can paginate directly from your GraphQL query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"products {\n    items(limit: 10, offset: 20) {\n        id\n        name\n    }\n    count\n}\n")),(0,i.kt)("p",null,'Results are wrapped into an item field. You can use the "limit" and "offset" parameters to apply pagination automatically.'),(0,i.kt)("p",null,'The "count" field returns the ',(0,i.kt)("strong",{parentName:"p"},"total count")," of items."))}d.isMDXComponent=!0}}]);