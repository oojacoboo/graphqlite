"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4422],{11470:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(58168),a=n(96540),s=n(20053),o=n(23104),l=n(56347),i=n(57485),u=n(31682),c=n(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,u]=m({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),b=(()=>{const e=i??d;return p({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var b=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(d(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:h},o,{className:(0,s.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,s.A)("tabs-container",g.tabList)},a.createElement(y,(0,r.A)({},e,t)),a.createElement(v,(0,r.A)({},e,t)))}function T(e){const t=(0,b.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},19365:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540),a=n(20053);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:n},t)}},61770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));n(67443),n(11470),n(19365);const s={id:"prefetch-method",title:"Prefetching records",sidebar_label:"Prefetching records"},o=void 0,l={unversionedId:"prefetch-method",id:"version-6.1/prefetch-method",title:"Prefetching records",description:"The problem",source:"@site/versioned_docs/version-6.1/prefetch-method.mdx",sourceDirName:".",slug:"/prefetch-method",permalink:"/docs/6.1/prefetch-method",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/prefetch-method.mdx",tags:[],version:"6.1",lastUpdatedBy:"Jaap van Otterdijk",lastUpdatedAt:1742840357,formattedLastUpdatedAt:"Mar 24, 2025",frontMatter:{id:"prefetch-method",title:"Prefetching records",sidebar_label:"Prefetching records"},sidebar:"docs",previous:{title:"Query plan",permalink:"/docs/6.1/query-plan"},next:{title:"File uploads",permalink:"/docs/6.1/file-uploads"}},i={},u=[{value:"The problem",id:"the-problem",level:2},{value:"The &quot;prefetch&quot; method",id:"the-prefetch-method",level:2},{value:"Input arguments",id:"input-arguments",level:2}],c={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"the-problem"},"The problem"),(0,a.yg)("p",null,'GraphQL naive implementations often suffer from the "N+1" problem.'),(0,a.yg)("p",null,"Consider a request where a user attached to a post must be returned:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-graphql"},"{\n    posts {\n        id\n        user {\n            id\n        }\n    }\n}\n")),(0,a.yg)("p",null,"A naive implementation will do this:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"1 query to fetch the list of posts"),(0,a.yg)("li",{parentName:"ul"},"1 query per post to fetch the user")),(0,a.yg)("p",null,'Assuming we have "N" posts, we will make "N+1" queries.'),(0,a.yg)("p",null,'There are several ways to fix this problem.\nAssuming you are using a relational database, one solution is to try to look\nahead and perform only one query with a JOIN between "posts" and "users".\nThis method is described in the ',(0,a.yg)("a",{parentName:"p",href:"/docs/6.1/query-plan"},'"analyzing the query plan" documentation'),"."),(0,a.yg)("p",null,"But this can be difficult to implement. This is also only useful for relational databases. If your data comes from a\nNoSQL database or from the cache, this will not help."),(0,a.yg)("p",null,"Instead, GraphQLite offers an easier to implement solution: the ability to fetch all fields from a given type at once."),(0,a.yg)("h2",{id:"the-prefetch-method"},'The "prefetch" method'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},'#[Type]\nclass PostType {\n    /**\n     * @param mixed $prefetchedUsers\n     * @return User\n     */\n    #[Field(prefetchMethod: "prefetchUsers")]\n    public function getUser($prefetchedUsers): User\n    {\n        // This method will receive the $prefetchedUsers as second argument. This is the return value of the "prefetchUsers" method below.\n        // Using this prefetched list, it should be easy to map it to the post\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchUsers(iterable $posts)\n    {\n        // This function is called only once per GraphQL request\n        // with the list of posts. You can fetch the list of users\n        // associated with this posts in a single request,\n        // for instance using a "IN" query in SQL or a multi-fetch\n        // in your cache back-end.\n    }\n}\n')),(0,a.yg)("p",null,'When the "prefetchMethod" attribute is detected in the "@Field" annotation, the method is called automatically.\nThe first argument of the method is an array of instances of the main type.\nThe "prefetchMethod" can return absolutely anything (mixed). The return value will be passed as the second parameter of the "@Field" annotated method.'),(0,a.yg)("h2",{id:"input-arguments"},"Input arguments"),(0,a.yg)("p",null,"Field arguments can be set either on the @Field annotated method OR/AND on the prefetchMethod."),(0,a.yg)("p",null,"For instance:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},'#[Type]\nclass PostType {\n    /**\n     * @param mixed $prefetchedComments\n     * @return Comment[]\n     */\n    #[Field(prefetchMethod: "prefetchComments")]\n    public function getComments($prefetchedComments): array\n    {\n        // ...\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchComments(iterable $posts, bool $hideSpam, int $filterByScore)\n    {\n        // Parameters passed after the first parameter (hideSpam, filterByScore...) are automatically exposed\n        // as GraphQL arguments for the "comments" field.\n    }\n}\n')),(0,a.yg)("p",null,"The prefetch method MUST be in the same class as the @Field-annotated method and MUST be public."))}h.isMDXComponent=!0}}]);