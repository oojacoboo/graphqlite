"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6005],{9225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(1839);const l={id:"laravel-package",title:"Getting started with Laravel",sidebar_label:"Laravel package"},o=void 0,i={unversionedId:"laravel-package",id:"version-4.3/laravel-package",title:"Getting started with Laravel",description:"Be advised! This documentation will be removed in a future release.  For current and up-to-date Laravel extension specific documentation, please see the Github repository.",source:"@site/versioned_docs/version-4.3/laravel-package.md",sourceDirName:".",slug:"/laravel-package",permalink:"/docs/4.3/laravel-package",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/laravel-package.md",tags:[],version:"4.3",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1678238904,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{id:"laravel-package",title:"Getting started with Laravel",sidebar_label:"Laravel package"},sidebar:"version-4.3/docs",previous:{title:"Symfony bundle",permalink:"/docs/4.3/symfony-bundle"},next:{title:"Universal service providers",permalink:"/docs/4.3/universal-service-providers"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Configuring CSRF protection",id:"configuring-csrf-protection",level:2},{value:"Use the <code>api</code> middleware",id:"use-the-api-middleware",level:3},{value:"Disable CSRF for the /graphql route",id:"disable-csrf-for-the-graphql-route",level:3},{value:"Configuring your GraphQL client",id:"configuring-your-graphql-client",level:3},{value:"Adding GraphQL DevTools",id:"adding-graphql-devtools",level:2},{value:"Troubleshooting HTTP 419 errors",id:"troubleshooting-http-419-errors",level:2}],h={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"alert alert--warning"},(0,r.kt)("strong",null,"Be advised!")," This documentation will be removed in a future release.  For current and up-to-date Laravel extension specific documentation, please see the ",(0,r.kt)("a",{href:"https://github.com/thecodingmachine/graphqlite-laravel"},"Github repository"),"."),(0,r.kt)("p",null,"The GraphQLite-Laravel package is compatible with ",(0,r.kt)("strong",{parentName:"p"},"Laravel 5.7+"),", ",(0,r.kt)("strong",{parentName:"p"},"Laravel 6.x")," and  ",(0,r.kt)("strong",{parentName:"p"},"Laravel 7.x"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-laravel\n")),(0,r.kt)("p",null,"If you want to publish the configuration (in order to edit it), run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ php artisan vendor:publish --provider=TheCodingMachine\\GraphQLite\\Laravel\\Providers\\GraphQLiteServiceProvider\n")),(0,r.kt)("p",null,"You can then configure the library by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"config/graphqlite.php"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config/graphqlite.php"',title:'"config/graphqlite.php"'},"<?php\n\nuse GraphQL\\Error\\Debug;\n\nreturn [\n    /*\n     |--------------------------------------------------------------------------\n     | GraphQLite Configuration\n     |--------------------------------------------------------------------------\n     |\n     | Use this configuration to customize the namespace of the controllers and\n     | types.\n     | These namespaces must be autoloadable from Composer.\n     | GraphQLite will find the path of the files based on composer.json settings.\n     |\n     | You can put a single namespace, or an array of namespaces.\n     |\n     */\n    'controllers' => 'App\\\\Http\\\\Controllers',\n    'types' => 'App\\\\',\n    'debug' => Debug::RETHROW_UNSAFE_EXCEPTIONS,\n    'uri' => env('GRAPHQLITE_URI', '/graphql'),\n    'middleware' => ['web'],\n    'guard' => ['web'],\n];\n")),(0,r.kt)("p",null,"The debug parameters are detailed in the ",(0,r.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/error-handling/"},"documentation of the Webonyx GraphQL library"),"\nwhich is used internally by GraphQLite."),(0,r.kt)("h2",{id:"configuring-csrf-protection"},"Configuring CSRF protection"),(0,r.kt)("div",{class:"alert alert--warning"},"By default, the ",(0,r.kt)("code",null,"/graphql")," route is placed under ",(0,r.kt)("code",null,"web")," middleware group which requires a",(0,r.kt)("a",{href:"https://laravel.com/docs/6.x/csrf"},"CSRF token"),"."),(0,r.kt)("p",null,"You have 3 options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"api")," middleware"),(0,r.kt)("li",{parentName:"ul"},"Disable CSRF for GraphQL routes"),(0,r.kt)("li",{parentName:"ul"},"or configure your GraphQL client to pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"X-CSRF-TOKEN")," with every GraphQL query")),(0,r.kt)("h3",{id:"use-the-api-middleware"},"Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"api")," middleware"),(0,r.kt)("p",null,"If you plan to use graphql for server-to-server connection only, you should probably configure GraphQLite to use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"api")," middleware instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," middleware:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="config/graphqlite.php"',title:'"config/graphqlite.php"'},"<?php\nreturn [\n    'middleware' => ['api'],\n    'guard' => ['api'],\n];\n")),(0,r.kt)("h3",{id:"disable-csrf-for-the-graphql-route"},"Disable CSRF for the /graphql route"),(0,r.kt)("p",null,"If you plan to use graphql from web browsers and if you want to explicitly allow access from external applications\n(through CORS headers), you need to disable the CSRF token."),(0,r.kt)("p",null,"Simply add ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"$except")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Http/Middleware/VerifyCsrfToken.php"),"."),(0,r.kt)("h3",{id:"configuring-your-graphql-client"},"Configuring your GraphQL client"),(0,r.kt)("p",null,"If you are planning to use ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," only from your website domain, then the safest way is to keep CSRF enabled and\nconfigure your GraphQL JS client to pass the CSRF headers on any graphql request."),(0,r.kt)("p",null,"The way you do this depends on the Javascript GraphQL client you are using."),(0,r.kt)("p",null,"Assuming you are using ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/link/links/http/"},"Apollo"),", you need to be sure that Apollo passes the token\nback to Laravel on every request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Sample Apollo client setup with CSRF support"',title:'"Sample',Apollo:!0,client:!0,setup:!0,with:!0,CSRF:!0,'support"':!0},"import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';\n\nconst httpLink = new HttpLink({ uri: 'https://api.example.com/graphql' });\n\nconst authLink = new ApolloLink((operation, forward) => {\n  // Retrieve the authorization token from local storage.\n  const token = localStorage.getItem('auth_token');\n\n  // Get the XSRF-TOKEN that is set by Laravel on each request\n  var cookieValue = document.cookie.replace(/(?:(?:^|.*;\\s*)XSRF-TOKEN\\s*\\=\\s*([^;]*).*$)|^.*$/, \"$1\");\n\n  // Use the setContext method to set the X-CSRF-TOKEN header back.\n  operation.setContext({\n    headers: {\n      'X-CSRF-TOKEN': cookieValue\n    }\n  });\n\n  // Call the next link in the middleware chain.\n  return forward(operation);\n});\n\nconst client = new ApolloClient({\n  link: authLink.concat(httpLink), // Chain it with the HttpLink\n  cache: new InMemoryCache()\n});\n")),(0,r.kt)("h2",{id:"adding-graphql-devtools"},"Adding GraphQL DevTools"),(0,r.kt)("p",null,"GraphQLite does not include additional GraphQL tooling, such as the GraphiQL editor.\nTo integrate a web UI to query your GraphQL endpoint with your Laravel installation,\nwe recommend installing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mll-lab/laravel-graphql-playground"},"GraphQL Playground")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require mll-lab/laravel-graphql-playground\n")),(0,r.kt)("p",null,"By default, the playground will be available at ",(0,r.kt)("inlineCode",{parentName:"p"},"/graphql-playground"),"."),(0,r.kt)("p",null,"Or you can install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XKojiMedia/laravel-altair-graphql"},"Altair GraphQL Client")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require xkojimedia/laravel-altair-graphql\n")),(0,r.kt)("p",null,"You can also use any external client with GraphQLite, make sure to point it to the URL defined in the config (",(0,r.kt)("inlineCode",{parentName:"p"},"'/graphql'")," by default)."),(0,r.kt)("h2",{id:"troubleshooting-http-419-errors"},"Troubleshooting HTTP 419 errors"),(0,r.kt)("p",null,"If HTTP requests to GraphQL endpoint generate responses with the HTTP 419 status code, you have an issue with the configuration of your\nCSRF token. Please check again ",(0,r.kt)("a",{parentName:"p",href:"#configuring-csrf-protection"},"the paragraph dedicated to CSRF configuration"),"."))}d.isMDXComponent=!0}}]);