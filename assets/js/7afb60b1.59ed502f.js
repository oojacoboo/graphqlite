"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4948],{3233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var r=t(7462),o=(t(7294),t(3905)),a=(t(1839),t(4866)),i=t(5162);const s={id:"error-handling",title:"Error handling",sidebar_label:"Error handling"},p=void 0,l={unversionedId:"error-handling",id:"version-4.3/error-handling",title:"Error handling",description:'In GraphQL, when an error occurs, the server must add an "error" entry in the response.',source:"@site/versioned_docs/version-4.3/error-handling.mdx",sourceDirName:".",slug:"/error-handling",permalink:"/docs/4.3/error-handling",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/error-handling.mdx",tags:[],version:"4.3",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1678239117,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{id:"error-handling",title:"Error handling",sidebar_label:"Error handling"},sidebar:"version-4.3/docs",previous:{title:"Inheritance and interfaces",permalink:"/docs/4.3/inheritance-interfaces"},next:{title:"User input validation",permalink:"/docs/4.3/validation"}},c={},h=[{value:"HTTP response code",id:"http-response-code",level:2},{value:"Customizing the category",id:"customizing-the-category",level:2},{value:"Customizing the extensions section",id:"customizing-the-extensions-section",level:2},{value:"Writing your own exceptions",id:"writing-your-own-exceptions",level:2},{value:"Many errors for one exception",id:"many-errors-for-one-exception",level:2},{value:"Webonyx exceptions",id:"webonyx-exceptions",level:2},{value:"Behaviour of exceptions that do not implement ClientAware",id:"behaviour-of-exceptions-that-do-not-implement-clientaware",level:2}],d={toc:h},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'In GraphQL, when an error occurs, the server must add an "error" entry in the response.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Name for character with ID 1002 could not be fetched.",\n      "locations": [ { "line": 6, "column": 7 } ],\n      "path": [ "hero", "heroFriends", 1, "name" ],\n      "extensions": {\n        "category": "Exception"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"You can generate such errors with GraphQLite by throwing a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLException"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLException;\n\nthrow new GraphQLException("Exception message");\n')),(0,o.kt)("h2",{id:"http-response-code"},"HTTP response code"),(0,o.kt)("p",null,"By default, when you throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLException"),", the HTTP status code will be 500."),(0,o.kt)("p",null,"If your exception code is in the 4xx - 5xx range, the exception code will be used as an HTTP status code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// This exception will generate a HTTP 404 status code\nthrow new GraphQLException("Not found", 404);\n')),(0,o.kt)("div",{class:"alert alert--info"},"GraphQL allows to have several errors for one request. If you have several",(0,o.kt)("code",null,"GraphQLException")," thrown for the same request, the HTTP status code used will be the highest one."),(0,o.kt)("h2",{id:"customizing-the-category"},"Customizing the category"),(0,o.kt)("p",null,'By default, GraphQLite adds a "category" entry in the "extensions section". You can customize the category with the\n4th parameter of the constructor:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'throw new GraphQLException("Not found", 404, null, "NOT_FOUND");\n')),(0,o.kt)("p",null,"will generate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Not found",\n      "extensions": {\n        "category": "NOT_FOUND"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"customizing-the-extensions-section"},"Customizing the extensions section"),(0,o.kt)("p",null,'You can customize the whole "extensions" section with the 5th parameter of the constructor:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"throw new GraphQLException(\"Field required\", 400, null, \"VALIDATION\", ['field' => 'name']);\n")),(0,o.kt)("p",null,"will generate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Field required",\n      "extensions": {\n        "category": "VALIDATION",\n        "field": "name"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"writing-your-own-exceptions"},"Writing your own exceptions"),(0,o.kt)("p",null,"Rather that throwing the base ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLException"),", you should consider writing your own exception."),(0,o.kt)("p",null,"Any exception that implements interface ",(0,o.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLExceptionInterface"),' will be displayed\nin the GraphQL "errors" section.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'class ValidationException extends Exception implements GraphQLExceptionInterface\n{\n    /**\n     * Returns true when exception message is safe to be displayed to a client.\n     */\n    public function isClientSafe(): bool\n    {\n        return true;\n    }\n\n    /**\n     * Returns string describing a category of the error.\n     *\n     * Value "graphql" is reserved for errors produced by query parsing or validation, do not use it.\n     */\n    public function getCategory(): string\n    {\n        return \'VALIDATION\';\n    }\n\n    /**\n     * Returns the "extensions" object attached to the GraphQL error.\n     *\n     * @return array<string, mixed>\n     */\n    public function getExtensions(): array\n    {\n        return [];\n    }\n}\n')),(0,o.kt)("h2",{id:"many-errors-for-one-exception"},"Many errors for one exception"),(0,o.kt)("p",null,"Sometimes, you need to display several errors in the response. But of course, at any given point in your code, you can\nthrow only one exception."),(0,o.kt)("p",null,"If you want to display several exceptions, you can bundle these exceptions in a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLAggregateException")," that you can\nthrow."),(0,o.kt)(a.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException;\n\n#[Query]\npublic function createProduct(string $name, float $price): Product\n{\n    $exceptions = new GraphQLAggregateException();\n\n    if ($name === '') {\n        $exceptions->add(new GraphQLException('Name cannot be empty', 400, null, 'VALIDATION'));\n    }\n    if ($price <= 0) {\n        $exceptions->add(new GraphQLException('Price must be positive', 400, null, 'VALIDATION'));\n    }\n\n    if ($exceptions->hasExceptions()) {\n        throw $exceptions;\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException;\n\n/**\n * @Query\n */\npublic function createProduct(string $name, float $price): Product\n{\n    $exceptions = new GraphQLAggregateException();\n\n    if ($name === '') {\n        $exceptions->add(new GraphQLException('Name cannot be empty', 400, null, 'VALIDATION'));\n    }\n    if ($price <= 0) {\n        $exceptions->add(new GraphQLException('Price must be positive', 400, null, 'VALIDATION'));\n    }\n\n    if ($exceptions->hasExceptions()) {\n        throw $exceptions;\n    }\n}\n")))),(0,o.kt)("h2",{id:"webonyx-exceptions"},"Webonyx exceptions"),(0,o.kt)("p",null,"GraphQLite is based on the wonderful webonyx/GraphQL-PHP library. Therefore, the Webonyx exception mechanism can\nalso be used in GraphQLite. This means you can throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQL\\Error\\Error")," exception or any exception implementing\n",(0,o.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/error-handling/#errors-in-graphql"},(0,o.kt)("inlineCode",{parentName:"a"},"GraphQL\\Error\\ClientAware")," interface")),(0,o.kt)("p",null,"Actually, the ",(0,o.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLExceptionInterface")," extends Webonyx's ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientAware")," interface."),(0,o.kt)("h2",{id:"behaviour-of-exceptions-that-do-not-implement-clientaware"},"Behaviour of exceptions that do not implement ClientAware"),(0,o.kt)("p",null,"If an exception that does not implement ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientAware")," is thrown, by default, GraphQLite will not catch it."),(0,o.kt)("p",null,"The exception will propagate to your framework error handler/middleware that is in charge of displaying the classical error page."),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/error-handling/#debugging-tools"},"change the underlying behaviour of Webonyx to catch any exception and turn them into GraphQL errors"),".\nThe way you adjust the error settings depends on the framework you are using (",(0,o.kt)("a",{parentName:"p",href:"/docs/4.3/symfony-bundle"},"Symfony"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.3/laravel-package"},"Laravel"),")."),(0,o.kt)("div",{class:"alert alert--info"},'To be clear: we strongly discourage changing this setting. We strongly believe that the default "RETHROW_UNSAFE_EXCEPTIONS" setting of Webonyx is the only sane setting (only putting in "errors" section exceptions designed for GraphQL).'))}g.isMDXComponent=!0}}]);