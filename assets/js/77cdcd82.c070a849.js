"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3507],{56855:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=o(58168),r=(o(96540),o(15680));o(67443);const i={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},s=void 0,a={unversionedId:"troubleshooting",id:"version-6.1/troubleshooting",title:"Troubleshooting",description:"Error: Maximum function nesting level of '100' reached",source:"@site/versioned_docs/version-6.1/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/6.1/troubleshooting",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/troubleshooting.md",tags:[],version:"6.1",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1734528123,formattedLastUpdatedAt:"Dec 18, 2024",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Internals",permalink:"/docs/6.1/internals"},next:{title:"Migrating",permalink:"/docs/6.1/migrating"}},l={},u=[],c={toc:u},p="wrapper";function g(e){let{components:t,...o}=e;return(0,r.yg)(p,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Error: Maximum function nesting level of '100' reached")),(0,r.yg)("p",null,"Webonyx's GraphQL library tends to use a very deep stack.\nThis error does not necessarily mean your code is going into an infinite loop.\nSimply try to increase the maximum allowed nesting level in your XDebug conf:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"xdebug.max_nesting_level=500\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},'Cannot autowire service "',(0,r.yg)("em",{parentName:"strong"},"[some input type]"),'": argument "$..." of method "..." is type-hinted "...", you should configure its value explicitly.')),(0,r.yg)("p",null,"The message says that Symfony is trying to instantiate an input type as a service. This can happen if you put your\nGraphQLite controllers in the Symfony controller namespace (",(0,r.yg)("inlineCode",{parentName:"p"},"App\\Controller")," by default). Symfony will assume that any\nobject type-hinted in a method of a controller is a service (",(0,r.yg)("a",{parentName:"p",href:"https://symfony.com/doc/current/service_container/3.3-di-changes.html#controllers-are-registered-as-services"},'because all controllers are tagged with the "controller.service_arguments" tag'),")"),(0,r.yg)("p",null,"To fix this issue, do not put your GraphQLite controller in the same namespace as the Symfony controllers and\nreconfigure your ",(0,r.yg)("inlineCode",{parentName:"p"},"config/graphqlite.yml")," file to point to your new namespace."))}g.isMDXComponent=!0}}]);