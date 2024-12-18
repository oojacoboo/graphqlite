"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9870],{19365:(e,a,t)=>{t.d(a,{A:()=>o});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>T});var n=t(58168),r=t(96540),l=t(20053),o=t(23104),s=t(56347),i=t(57485),u=t(31682),p=t(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function g(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function y(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=g(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[i,u]=y({queryString:t,groupId:n}),[c,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,p.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),m=(()=>{const e=i??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{m&&s(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var m=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:a,block:t,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),g=e=>{const a=e.currentTarget,t=p.indexOf(a),n=u[t].value;n!==s&&(c(a),i(n))},d=e=>{let a=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:g},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===a})}),t??a)})))}function v(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function N(e){const a=h(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,a)),r.createElement(v,(0,n.A)({},e,a)))}function T(e){const a=(0,m.A)();return r.createElement(N,(0,n.A)({key:String(a)},e))}},34991:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=t(58168),r=(t(96540),t(15680)),l=(t(67443),t(11470)),o=t(19365);const s={id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security"},i=void 0,u={unversionedId:"fine-grained-security",id:"version-3.0/fine-grained-security",title:"Fine grained security",description:"If the @Logged and @Right annotations are not",source:"@site/versioned_docs/version-3.0/fine-grained-security.mdx",sourceDirName:".",slug:"/fine-grained-security",permalink:"/docs/3.0/fine-grained-security",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/fine-grained-security.mdx",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1734528123,formattedLastUpdatedAt:"Dec 18, 2024",frontMatter:{id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security"}},p={},c=[{value:"Using the @Security annotation",id:"using-the-security-annotation",level:2},{value:"The <code>is_granted</code> function",id:"the-is_granted-function",level:2},{value:"Accessing method parameters",id:"accessing-method-parameters",level:2},{value:"Setting HTTP code and error message",id:"setting-http-code-and-error-message",level:2},{value:"Setting a default value",id:"setting-a-default-value",level:2},{value:"Accessing the user",id:"accessing-the-user",level:2},{value:"Accessing the current object",id:"accessing-the-current-object",level:2},{value:"Available scope",id:"available-scope",level:2},{value:"How to restrict access to a given resource",id:"how-to-restrict-access-to-a-given-resource",level:2}],g={toc:c},d="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"If the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/authentication_authorization#logged-and-right-annotations"},(0,r.yg)("inlineCode",{parentName:"a"},"@Logged")," and ",(0,r.yg)("inlineCode",{parentName:"a"},"@Right")," annotations")," are not\ngranular enough for your needs, you can use the advanced ",(0,r.yg)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,r.yg)("p",null,"Using the ",(0,r.yg)("inlineCode",{parentName:"p"},"@Security")," annotation, you can write an ",(0,r.yg)("em",{parentName:"p"},"expression")," that can contain custom logic. For instance:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Check that a user can access a given resource"),(0,r.yg)("li",{parentName:"ul"},"Check that a user has one right or another right"),(0,r.yg)("li",{parentName:"ul"},"...")),(0,r.yg)("h2",{id:"using-the-security-annotation"},"Using the @Security annotation"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"@Security")," annotation is very flexible: it allows you to pass an expression that can contains custom logic:"),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Security;\n\n// ...\n\n#[Query]\n#[Security(\"is_granted('ROLE_ADMIN') or is_granted('POST_SHOW', post)\")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n"))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Security;\n\n// ...\n\n/**\n * @Query\n * @Security(\"is_granted('ROLE_ADMIN') or is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")))),(0,r.yg)("p",null,"The ",(0,r.yg)("em",{parentName:"p"},"expression")," defined in the ",(0,r.yg)("inlineCode",{parentName:"p"},"@Security")," annotation must conform to ",(0,r.yg)("a",{parentName:"p",href:"https://symfony.com/doc/4.4/components/expression_language/syntax.html"},"Symfony's Expression Language syntax")),(0,r.yg)("div",{class:"alert alert--info"},"If you are a Symfony user, you might already be used to the ",(0,r.yg)("code",null,"@Security")," annotation. Most of the inspiration of this annotation comes from Symfony. Warning though! GraphQLite's ",(0,r.yg)("code",null,"@Security")," annotation and Symfony's ",(0,r.yg)("code",null,"@Security")," annotation are slightly different. Especially, the two annotations do not live in the same namespace!"),(0,r.yg)("h2",{id:"the-is_granted-function"},"The ",(0,r.yg)("inlineCode",{parentName:"h2"},"is_granted")," function"),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"is_granted")," function to check if a user has a special right."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Security(\"is_granted('ROLE_ADMIN')\")]\n"))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('ROLE_ADMIN')\")\n")))),(0,r.yg)("p",null,"is similar to"),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'#[Right("ROLE_ADMIN")]\n'))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'@Right("ROLE_ADMIN")\n')))),(0,r.yg)("p",null,"In addition, the ",(0,r.yg)("inlineCode",{parentName:"p"},"is_granted"),' function accepts a second optional parameter: the "scope" of the right.'),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Query]\n#[Security(\"is_granted('POST_SHOW', post)\")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n"))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @Security(\"is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")))),(0,r.yg)("p",null,"In the example above, the ",(0,r.yg)("inlineCode",{parentName:"p"},"getPost")," method can be called only if the logged user has the 'POST_SHOW' permission on the\n",(0,r.yg)("inlineCode",{parentName:"p"},"$post")," object. You can notice that the ",(0,r.yg)("inlineCode",{parentName:"p"},"$post")," object comes from the parameters."),(0,r.yg)("h2",{id:"accessing-method-parameters"},"Accessing method parameters"),(0,r.yg)("p",null,"All parameters passed to the method can be accessed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"@Security")," expression."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PHP 7")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security(expression: "startDate < endDate", statusCode: 400, message: "End date must be after start date")]\npublic function getPosts(DateTimeImmutable $startDate, DateTimeImmutable $endDate): array\n{\n    // ...\n}\n'))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("startDate < endDate", statusCode=400, message="End date must be after start date")\n */\npublic function getPosts(DateTimeImmutable $startDate, DateTimeImmutable $endDate): array\n{\n    // ...\n}\n')))),(0,r.yg)("p",null,"In the example above, we tweak a bit the Security annotation purpose to do simple input validation."),(0,r.yg)("h2",{id:"setting-http-code-and-error-message"},"Setting HTTP code and error message"),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"statusCode")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"message")," attributes to set the HTTP code and GraphQL error message."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security(expression: "is_granted(\'POST_SHOW\', post)", statusCode: 404, message: "Post not found (let\'s pretend the post does not exists!)")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n'))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_granted(\'POST_SHOW\', post)", statusCode=404, message="Post not found (let\'s pretend the post does not exists!)")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n')))),(0,r.yg)("p",null,"Note: since a single GraphQL call contain many errors, 2 errors might have conflicting HTTP status code.\nThe resulting status code is up to the GraphQL middleware you use. Most of the time, the status code with the\nhigher error code will be returned."),(0,r.yg)("h2",{id:"setting-a-default-value"},"Setting a default value"),(0,r.yg)("p",null,"If you do not want an error to be thrown when the security condition is not met, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"failWith")," attribute\nto set a default value."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Query]\n#[Security(expression: \"is_granted('CAN_SEE_MARGIN', this)\", failWith: null)]\npublic function getMargin(): float\n{\n    // ...\n}\n"))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field\n * @Security(\"is_granted('CAN_SEE_MARGIN', this)\", failWith=null)\n */\npublic function getMargin(): float\n{\n    // ...\n}\n")))),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"failWith")," attribute behaves just like the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/authentication_authorization#not-throwing-errors"},(0,r.yg)("inlineCode",{parentName:"a"},"@FailWith")," annotation"),"\nbut for a given ",(0,r.yg)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,r.yg)("p",null,"You cannot use the ",(0,r.yg)("inlineCode",{parentName:"p"},"failWith")," attribute along ",(0,r.yg)("inlineCode",{parentName:"p"},"statusCode")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"message")," attributes."),(0,r.yg)("h2",{id:"accessing-the-user"},"Accessing the user"),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"user")," variable to access the currently logged user.\nYou can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"is_logged()")," function to check if a user is logged or not."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security("is_logged() && user.age > 18")]\npublic function getNSFWImages(): array\n{\n    // ...\n}\n'))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_logged() && user.age > 18")\n */\npublic function getNSFWImages(): array\n{\n    // ...\n}\n')))),(0,r.yg)("h2",{id:"accessing-the-current-object"},"Accessing the current object"),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"this")," variable to access any (public) property / method of the current class."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'class Post {\n    #[Field]\n    #[Security("this.canAccessBody(user)")]\n    public function getBody(): array\n    {\n        // ...\n    }\n\n    public function canAccessBody(User $user): bool\n    {\n        // Some custom logic here\n    }\n}\n'))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'class Post {\n    /**\n     * @Field\n     * @Security("this.canAccessBody(user)")\n     */\n    public function getBody(): array\n    {\n        // ...\n    }\n\n    public function canAccessBody(User $user): bool\n    {\n        // Some custom logic here\n    }\n}\n')))),(0,r.yg)("h2",{id:"available-scope"},"Available scope"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"@Security")," annotation can be used in any query, mutation or field, so anywhere you have a ",(0,r.yg)("inlineCode",{parentName:"p"},"@Query"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"@Mutation"),"\nor ",(0,r.yg)("inlineCode",{parentName:"p"},"@Field")," annotation."),(0,r.yg)("h2",{id:"how-to-restrict-access-to-a-given-resource"},"How to restrict access to a given resource"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"is_granted")," method can be used to restrict access to a specific resource."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Security(\"is_granted('POST_SHOW', post)\")]\n"))),(0,r.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('POST_SHOW', post)\")\n")))),(0,r.yg)("p",null,"If you are wondering how to configure these fine-grained permissions, this is not something that GraphQLite handles\nitself. Instead, this depends on the framework you are using."),(0,r.yg)("p",null,"If you are using Symfony, you will ",(0,r.yg)("a",{parentName:"p",href:"https://symfony.com/doc/current/security/voters.html"},"create a custom voter"),"."),(0,r.yg)("p",null,"If you are using Laravel, you will ",(0,r.yg)("a",{parentName:"p",href:"https://laravel.com/docs/6.x/authorization"},"create a Gate or a Policy"),"."),(0,r.yg)("p",null,"If you are using another framework, you need to know that the ",(0,r.yg)("inlineCode",{parentName:"p"},"is_granted")," function simply forwards the call to\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"isAllowed")," method of the configured ",(0,r.yg)("inlineCode",{parentName:"p"},"AuthorizationSerice"),". See ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/implementing-security"},"Connecting GraphQLite to your framework's security module\n")," for more details"))}y.isMDXComponent=!0}}]);