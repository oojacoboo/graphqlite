"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8612],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},90364:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),o=["components"],l={id:"field-middlewares",title:"Adding custom annotations with Field middlewares",sidebar_label:"Custom annotations"},d=void 0,s={unversionedId:"field-middlewares",id:"version-3.0/field-middlewares",isDocsHomePage:!1,title:"Adding custom annotations with Field middlewares",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-3.0/field_middlewares.md",sourceDirName:".",slug:"/field-middlewares",permalink:"/docs/3.0/field-middlewares",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/field_middlewares.md",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1635192682,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"field-middlewares",title:"Adding custom annotations with Field middlewares",sidebar_label:"Custom annotations"}},u=[{value:"Field middlewares",id:"field-middlewares",children:[]},{value:"Annotations parsing",id:"annotations-parsing",children:[]}],c={toc:u};function p(e){var n=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("small",null,"Available in GraphQLite 4.0+"),(0,r.kt)("p",null,"Just like the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Logged")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@Right")," annotation, you can develop your own annotation that extends/modifies the behaviour\nof a field/query/mutation."),(0,r.kt)("div",{class:"alert alert--warning"},"If you want to create an annotation that targets a single argument (like ",(0,r.kt)("code",null,'@AutoWire(for="$service")'),"), you should rather check the documentation about ",(0,r.kt)("a",{href:"argument-resolving"},"custom argument resolving")),(0,r.kt)("h2",{id:"field-middlewares"},"Field middlewares"),(0,r.kt)("p",null,"GraphQLite is based on the Webonyx/Graphql-PHP library. In Webonyx, fields are represented by the ",(0,r.kt)("inlineCode",{parentName:"p"},"FieldDefinition")," class.\nIn order to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"FieldDefinition"),' instance for your field, GraphQLite goes through a series of "middlewares".'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(78979).Z})),(0,r.kt)("p",null,"Each middleware is passed a ",(0,r.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\QueryFieldDescriptor")," instance. This object contains all the\nparameters used to initialize the field (like the return type, the list of arguments, the resolver to be used, etc...)"),(0,r.kt)("p",null,"Each middleware must return a ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQL\\Type\\Definition\\FieldDefinition")," (the object representing a field in Webonyx/GraphQL-PHP)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Your middleware must implement this interface.\n */\ninterface FieldMiddlewareInterface\n{\n    public function process(QueryFieldDescriptor $queryFieldDescriptor, FieldHandlerInterface $fieldHandler): ?FieldDefinition;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class QueryFieldDescriptor\n{\n    public function getName() { /* ... */ }\n    public function setName(string $name)  { /* ... */ }\n    public function getType() { /* ... */ }\n    public function setType($type): void  { /* ... */ }\n    public function getParameters(): array  { /* ... */ }\n    public function setParameters(array $parameters): void  { /* ... */ }\n    public function getPrefetchParameters(): array  { /* ... */ }\n    public function setPrefetchParameters(array $prefetchParameters): void  { /* ... */ }\n    public function getPrefetchMethodName(): ?string { /* ... */ }\n    public function setPrefetchMethodName(?string $prefetchMethodName): void { /* ... */ }\n    public function setCallable(callable $callable): void { /* ... */ }\n    public function setTargetMethodOnSource(?string $targetMethodOnSource): void { /* ... */ }\n    public function isInjectSource(): bool { /* ... */ }\n    public function setInjectSource(bool $injectSource): void { /* ... */ }\n    public function getComment(): ?string { /* ... */ }\n    public function setComment(?string $comment): void { /* ... */ }\n    public function getMiddlewareAnnotations(): MiddlewareAnnotations { /* ... */ }\n    public function setMiddlewareAnnotations(MiddlewareAnnotations $middlewareAnnotations): void { /* ... */ }\n    public function getOriginalResolver(): ResolverInterface { /* ... */ }\n    public function getResolver(): callable { /* ... */ }\n    public function setResolver(callable $resolver): void { /* ... */ }\n}\n")),(0,r.kt)("p",null,"The role of a middleware is to analyze the ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryFieldDescriptor")," and modify it (or to directly return a ",(0,r.kt)("inlineCode",{parentName:"p"},"FieldDefinition"),")."),(0,r.kt)("p",null,"If you want the field to purely disappear, your middleware can return ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h2",{id:"annotations-parsing"},"Annotations parsing"),(0,r.kt)("p",null,"Take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryFieldDescriptor::getMiddlewareAnnotations()"),"."),(0,r.kt)("p",null,"It returns the list of annotations applied to your field that implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"MiddlewareAnnotationInterface"),"."),(0,r.kt)("p",null,"Let's imagine you want to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"@OnlyDebug")," annotation that displays a field/query/mutation only in debug mode (and\nhides the field in production). That could be useful, right?"),(0,r.kt)("p",null,"First, we have to define the annotation. Annotations are handled by the great ",(0,r.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-annotations/en/1.6/index.html"},"doctrine/annotations")," library (for PHP 7+) and/or by PHP 8 attributes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OnlyDebug.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Annotations;\n\nuse Attribute;\nuse TheCodingMachine\\GraphQLite\\Annotations\\MiddlewareAnnotationInterface;\n\n/**\n * @Annotation\n * @Target({"METHOD", "ANNOTATION"})\n */\n#[Attribute(Attribute::TARGET_METHOD)]\nclass OnlyDebug implements MiddlewareAnnotationInterface\n{\n}\n')),(0,r.kt)("p",null,"Apart from being a classical annotation/attribute, this class implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"MiddlewareAnnotationInterface"),'. This interface\nis a "marker" interface. It does not have any methods. It is just used to tell GraphQLite that this annotation\nis to be used by middlewares.'),(0,r.kt)("p",null,"Now, we can write a middleware that will act upon this annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Middlewares;\n\nuse App\\Annotations\\OnlyDebug;\nuse TheCodingMachine\\GraphQLite\\Middlewares\\FieldMiddlewareInterface;\nuse GraphQL\\Type\\Definition\\FieldDefinition;\nuse TheCodingMachine\\GraphQLite\\QueryFieldDescriptor;\n\n/**\n * Middleware in charge of hiding a field if it is annotated with @OnlyDebug and the DEBUG constant is not set\n */\nclass OnlyDebugFieldMiddleware implements FieldMiddlewareInterface\n{\n    public function process(QueryFieldDescriptor $queryFieldDescriptor, FieldHandlerInterface $fieldHandler): ?FieldDefinition\n    {\n        $annotations = $queryFieldDescriptor->getMiddlewareAnnotations();\n\n        /**\n         * @var OnlyDebug $onlyDebug\n         */\n        $onlyDebug = $annotations->getAnnotationByType(OnlyDebug::class);\n\n        if ($onlyDebug !== null && !DEBUG) {\n            // If the onlyDebug annotation is present, returns null.\n            // Returning null will hide the field.\n            return null;\n        }\n\n        // Otherwise, let's continue the middleware pipe without touching anything.\n        return $fieldHandler->handle($queryFieldDescriptor);\n    }\n}\n")),(0,r.kt)("p",null,"The final thing we have to do is to register the middleware."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assuming you are using the ",(0,r.kt)("inlineCode",{parentName:"li"},"SchemaFactory")," to initialize GraphQLite, you can register the field middleware using:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$schemaFactory->addFieldMiddleware(new OnlyDebugFieldMiddleware());\n"))),(0,r.kt)("li",{parentName:"ul"},"If you are using the Symfony bundle, you can register your field middleware services by tagging them with the ",(0,r.kt)("inlineCode",{parentName:"li"},"graphql.field_middleware")," tag.")))}p.isMDXComponent=!0},78979:function(e,n,t){n.Z=t.p+"assets/images/field_middleware-5c3e3b4da480c49d048d527f93cc970d.svg"}}]);