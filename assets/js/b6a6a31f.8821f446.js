"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4955],{65995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=n(58168),r=(n(96540),n(15680));n(67443);const s={id:"prefetch-method",title:"Prefetching records",sidebar_label:"Prefetching records"},i=void 0,o={unversionedId:"prefetch-method",id:"prefetch-method",title:"Prefetching records",description:"The problem",source:"@site/docs/prefetch-method.mdx",sourceDirName:".",slug:"/prefetch-method",permalink:"/docs/next/prefetch-method",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/prefetch-method.mdx",tags:[],version:"current",lastUpdatedBy:"Jaap van Otterdijk",lastUpdatedAt:1742840357,formattedLastUpdatedAt:"Mar 24, 2025",frontMatter:{id:"prefetch-method",title:"Prefetching records",sidebar_label:"Prefetching records"},sidebar:"docs",previous:{title:"Query plan",permalink:"/docs/next/query-plan"},next:{title:"Automatic persisted queries",permalink:"/docs/next/automatic-persisted-queries"}},l={},h=[{value:"The problem",id:"the-problem",level:2},{value:"The &quot;prefetch&quot; method",id:"the-prefetch-method",level:2},{value:"Input arguments",id:"input-arguments",level:2}],p={toc:h},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"the-problem"},"The problem"),(0,r.yg)("p",null,'GraphQL naive implementations often suffer from the "N+1" problem.'),(0,r.yg)("p",null,"Consider a request where a user attached to a post must be returned:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"{\n    posts {\n        id\n        user {\n            id\n        }\n    }\n}\n")),(0,r.yg)("p",null,"A naive implementation will do this:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"1 query to fetch the list of posts"),(0,r.yg)("li",{parentName:"ul"},"1 query per post to fetch the user")),(0,r.yg)("p",null,'Assuming we have "N" posts, we will make "N+1" queries.'),(0,r.yg)("p",null,'There are several ways to fix this problem.\nAssuming you are using a relational database, one solution is to try to look\nahead and perform only one query with a JOIN between "posts" and "users".\nThis method is described in the ',(0,r.yg)("a",{parentName:"p",href:"/docs/next/query-plan"},'"analyzing the query plan" documentation'),"."),(0,r.yg)("p",null,"But this can be difficult to implement. This is also only useful for relational databases. If your data comes from a\nNoSQL database or from the cache, this will not help."),(0,r.yg)("p",null,"Instead, GraphQLite offers an easier to implement solution: the ability to fetch all fields from a given type at once."),(0,r.yg)("h2",{id:"the-prefetch-method"},'The "prefetch" method'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'#[Type]\nclass PostType {\n    /**\n     * @param mixed $prefetchedUsers\n     * @return User\n     */\n    #[Field]\n    public function getUser(#[Prefetch("prefetchUsers")] $prefetchedUsers): User\n    {\n        // This method will receive the $prefetchedUsers as first argument. This is the return value of the "prefetchUsers" method below.\n        // Using this prefetched list, it should be easy to map it to the post\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public static function prefetchUsers(iterable $posts)\n    {\n        // This function is called only once per GraphQL request\n        // with the list of posts. You can fetch the list of users\n        // associated with this posts in a single request,\n        // for instance using a "IN" query in SQL or a multi-fetch\n        // in your cache back-end.\n    }\n}\n')),(0,r.yg)("p",null,"When a ",(0,r.yg)("inlineCode",{parentName:"p"},"#[Prefetch]")," attribute is detected on a parameter of ",(0,r.yg)("inlineCode",{parentName:"p"},"#[Field]")," attribute, the method is called automatically.\nThe prefetch callable must be one of the following:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"a static method in the same class: ",(0,r.yg)("inlineCode",{parentName:"li"},"#[Prefetch('prefetchMethod')]")),(0,r.yg)("li",{parentName:"ul"},"a static method in a different class: ",(0,r.yg)("inlineCode",{parentName:"li"},"#[Prefetch([OtherClass::class, 'prefetchMethod')]")),(0,r.yg)("li",{parentName:"ul"},"a non-static method in a different class, resolvable through the container: ",(0,r.yg)("inlineCode",{parentName:"li"},"#[Prefetch([OtherService::class, 'prefetchMethod'])]"),"\nThe first argument of the method is always an array of instances of the main type. It can return absolutely anything (mixed).")),(0,r.yg)("h2",{id:"input-arguments"},"Input arguments"),(0,r.yg)("p",null,"Field arguments can be set either on the ",(0,r.yg)("inlineCode",{parentName:"p"},"#[Field]")," annotated method OR/AND on the prefetch methods."),(0,r.yg)("p",null,"For instance:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'#[Type]\nclass PostType {\n    /**\n     * @param mixed $prefetchedComments\n     * @return Comment[]\n     */\n    #[Field]\n    public function getComments(#[Prefetch("prefetchComments")] $prefetchedComments): array\n    {\n        // ...\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public static function prefetchComments(iterable $posts, bool $hideSpam, int $filterByScore)\n    {\n        // Parameters passed after the first parameter (hideSpam, filterByScore...) are automatically exposed\n        // as GraphQL arguments for the "comments" field.\n    }\n}\n')))}d.isMDXComponent=!0}}]);