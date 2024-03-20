"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5362],{9840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(8168),o=(n(6540),n(5680));n(7443);const r={id:"subscriptions",title:"Subscriptions",sidebar_label:"Subscriptions"},s=void 0,a={unversionedId:"subscriptions",id:"subscriptions",title:"Subscriptions",description:"In GraphQLite, subscriptions are created like queries or mutations.",source:"@site/docs/subscriptions.mdx",sourceDirName:".",slug:"/subscriptions",permalink:"/docs/next/subscriptions",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/subscriptions.mdx",tags:[],version:"current",lastUpdatedBy:"Yurii",lastUpdatedAt:1710904486,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"subscriptions",title:"Subscriptions",sidebar_label:"Subscriptions"},sidebar:"docs",previous:{title:"Mutations",permalink:"/docs/next/mutations"},next:{title:"Type mapping",permalink:"/docs/next/type-mapping"}},p={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,i.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In GraphQLite, subscriptions are created ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/queries"},"like queries")," or ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/mutations"},"mutations"),"."),(0,o.yg)("p",null,"To create a subscription, you must annotate a method in a controller with the ",(0,o.yg)("inlineCode",{parentName:"p"},"#[Subscription]")," attribute."),(0,o.yg)("p",null,"For instance:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Mutation;\n\nclass ProductController\n{\n    #[Subscription(outputType: 'Product')]\n    public function productAdded(?ID $categoryId = null): void\n    {\n        // Some code that sets up any connections, stores the subscription details, etc.\n    }\n}\n")),(0,o.yg)("p",null,"As you will notice in the above example, we're returning ",(0,o.yg)("inlineCode",{parentName:"p"},"void"),".  In general, this is probably the\ncorrect return type."),(0,o.yg)("p",null,"You could, however, type the ",(0,o.yg)("inlineCode",{parentName:"p"},"Product")," as the return type of the method, instead\nof using the ",(0,o.yg)("inlineCode",{parentName:"p"},"outputType")," argument on the ",(0,o.yg)("inlineCode",{parentName:"p"},"#[Subscription]")," attribute.  This means you\nwould have to return an instance of ",(0,o.yg)("inlineCode",{parentName:"p"},"Product")," from the method though.  One exception here, is if\nyou intend to use PHP for your long-running streaming process, you could block the process inside\nthe controller and basically never return anything from the method, just terminating the\nconnection/stream when it breaks, or when the client disconnects."),(0,o.yg)("p",null,"Most implementations will want to offload the actual real-time streaming connection to a better suited\ntechnology, like SSE (server-sent events), WebSockets, etc.  GraphQLite does not make any assumptions\nhere.  Therefore, it's most practical to return ",(0,o.yg)("inlineCode",{parentName:"p"},"void")," from the controller method.  Since GraphQL\nis a strictly typed spec, we cannot return anything other than the defined ",(0,o.yg)("inlineCode",{parentName:"p"},"outputType")," from the request.\nThat would be a violation of the GraphQL specification.  Returning ",(0,o.yg)("inlineCode",{parentName:"p"},"void"),", which is translated to ",(0,o.yg)("inlineCode",{parentName:"p"},"null"),"\nin the GraphQL response body, allows for us to complete the request and terminate the PHP process."),(0,o.yg)("p",null,"We recommend using response headers to pass back any necessary information realted to the subscription.\nThis might be a subscription ID, a streaming server URL to connect to, or whatever you need to pass\nback to the client."),(0,o.yg)("div",{class:"alert alert--info"},"In the future, it may make sense to implement streaming servers directly into GraphQLite, especially as PHP progresses with async and parallel processing.  At this time, we might consider returning a `Generator` (or `Fiber`) from the controller method."))}d.isMDXComponent=!0}}]);