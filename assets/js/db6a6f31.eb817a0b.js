"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8369],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70532:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security",original_id:"fine-grained-security"},c=void 0,l={unversionedId:"fine-grained-security",id:"version-4.0/fine-grained-security",title:"Fine grained security",description:"If the @Logged and @Right annotations are not",source:"@site/versioned_docs/version-4.0/fine-grained-security.mdx",sourceDirName:".",slug:"/fine-grained-security",permalink:"/docs/4.0/fine-grained-security",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/fine-grained-security.mdx",tags:[],version:"4.0",lastUpdatedBy:"Oriano de Stefani",lastUpdatedAt:1654910564,formattedLastUpdatedAt:"6/11/2022",frontMatter:{id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security",original_id:"fine-grained-security"},sidebar:"version-4.0/docs",previous:{title:"Authentication and authorization",permalink:"/docs/4.0/authentication_authorization"},next:{title:"Connecting security to your framework",permalink:"/docs/4.0/implementing-security"}},u=[{value:"Using the @Security annotation",id:"using-the-security-annotation",children:[],level:2},{value:"The <code>is_granted</code> function",id:"the-is_granted-function",children:[],level:2},{value:"Accessing method parameters",id:"accessing-method-parameters",children:[],level:2},{value:"Setting HTTP code and error message",id:"setting-http-code-and-error-message",children:[],level:2},{value:"Setting a default value",id:"setting-a-default-value",children:[],level:2},{value:"Accessing the user",id:"accessing-the-user",children:[],level:2},{value:"Accessing the current object",id:"accessing-the-current-object",children:[],level:2},{value:"Available scope",id:"available-scope",children:[],level:2},{value:"How to restrict access to a given resource",id:"how-to-restrict-access-to-a-given-resource",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If the ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/authentication_authorization#logged-and-right-annotations"},(0,i.kt)("inlineCode",{parentName:"a"},"@Logged")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"@Right")," annotations")," are not\ngranular enough for your needs, you can use the advanced ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation, you can write an ",(0,i.kt)("em",{parentName:"p"},"expression")," that can contain custom logic. For instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check that a user can access a given resource"),(0,i.kt)("li",{parentName:"ul"},"Check that a user has one right or another right"),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h2",{id:"using-the-security-annotation"},"Using the @Security annotation"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation is very flexible: it allows you to pass an expression that can contains custom logic:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Security;\n\n// ...\n\n/**\n * @Query\n * @Security(\"is_granted('ROLE_ADMIN') or is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"expression")," defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation must conform to ",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/4.4/components/expression_language/syntax.html"},"Symfony's Expression Language syntax")),(0,i.kt)("div",{class:"alert alert--info"},"If you are a Symfony user, you might already be used to the ",(0,i.kt)("code",null,"@Security")," annotation. Most of the inspiration of this annotation comes from Symfony. Warning though! GraphQLite's ",(0,i.kt)("code",null,"@Security")," annotation and Symfony's ",(0,i.kt)("code",null,"@Security")," annotation are slightly different. Especially, the two annotations do not live in the same namespace!"),(0,i.kt)("h2",{id:"the-is_granted-function"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"is_granted")," function"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," function to check if a user has a special right."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('ROLE_ADMIN')\")\n")),(0,i.kt)("p",null,"is similar to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'@Right("ROLE_ADMIN")\n')),(0,i.kt)("p",null,"In addition, the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted"),' function accepts a second optional parameter: the "scope" of the right.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @Security(\"is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPost")," method can be called only if the logged user has the 'POST_SHOW' permission on the\n",(0,i.kt)("inlineCode",{parentName:"p"},"$post")," object. You can notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"$post")," object comes from the parameters."),(0,i.kt)("h2",{id:"accessing-method-parameters"},"Accessing method parameters"),(0,i.kt)("p",null,"All parameters passed to the method can be accessed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," expression."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("startDate < endDate", statusCode=400, message="End date must be after start date")\n */\npublic function getPosts(DateTimeImmutable $startDate, DateTimeImmutable $endDate): array\n{\n    // ...\n}\n')),(0,i.kt)("p",null,"In the example above, we tweak a bit the Security annotation purpose to do simple input validation."),(0,i.kt)("h2",{id:"setting-http-code-and-error-message"},"Setting HTTP code and error message"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," attributes to set the HTTP code and GraphQL error message."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_granted(\'POST_SHOW\', post)", statusCode=404, message="Post not found (let\'s pretend the post does not exists!)")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n')),(0,i.kt)("p",null,"Note: since a single GraphQL call contain many errors, 2 errors might have conflicting HTTP status code.\nThe resulting status code is up to the GraphQL middleware you use. Most of the time, the status code with the\nhigher error code will be returned."),(0,i.kt)("h2",{id:"setting-a-default-value"},"Setting a default value"),(0,i.kt)("p",null,"If you do not want an error to be thrown when the security condition is not met, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute\nto set a default value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field\n * @Security(\"is_granted('CAN_SEE_MARGIN', this)\", failWith=null)\n */\npublic function getMargin(): float\n{\n    // ...\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute behaves just like the ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/authentication_authorization#not-throwing-errors"},(0,i.kt)("inlineCode",{parentName:"a"},"@FailWith")," annotation"),"\nbut for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,i.kt)("p",null,"You cannot use the ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute along ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCode")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," attributes."),(0,i.kt)("h2",{id:"accessing-the-user"},"Accessing the user"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," variable to access the currently logged user.\nYou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_logged()")," function to check if a user is logged or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_logged() && user.age > 18")\n */\npublic function getNSFWImages(): array\n{\n    // ...\n}\n')),(0,i.kt)("h2",{id:"accessing-the-current-object"},"Accessing the current object"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," variable to access any (public) property / method of the current class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class Post {\n    /**\n     * @Field\n     * @Security("this.canAccessBody(user)")\n     */\n    public function getBody(): array\n    {\n        // ...\n    }\n\n    public function canAccessBody(User $user): bool\n    {\n        // Some custom logic here\n    }\n}\n')),(0,i.kt)("h2",{id:"available-scope"},"Available scope"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation can be used in any query, mutation or field, so anywhere you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@Mutation"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation."),(0,i.kt)("h2",{id:"how-to-restrict-access-to-a-given-resource"},"How to restrict access to a given resource"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," method can be used to restrict access to a specific resource."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('POST_SHOW', post)\")\n")),(0,i.kt)("p",null,"If you are wondering how to configure these fine-grained permissions, this is not something that GraphQLite handles\nitself. Instead, this depends on the framework you are using."),(0,i.kt)("p",null,"If you are using Symfony, you will ",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/security/voters.html"},"create a custom voter"),"."),(0,i.kt)("p",null,"If you are using Laravel, you will ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/6.x/authorization"},"create a Gate or a Policy"),"."),(0,i.kt)("p",null,"If you are using another framework, you need to know that the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," function simply forwards the call to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"isAllowed")," method of the configured ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthorizationSerice"),". See ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/implementing-security"},"Connecting GraphQLite to your framework's security module\n")," for more details"))}d.isMDXComponent=!0}}]);