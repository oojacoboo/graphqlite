"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3230],{3950:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"4.1","label":"4.1","banner":"unmaintained","badge":true,"className":"docs-version-4.1","isLast":false,"docsSidebars":{"version-4.1/docs":[{"type":"category","label":"Introduction","items":[{"type":"link","label":"GraphQLite","href":"/docs/4.1/","docId":"features"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Installation","items":[{"type":"link","label":"Getting Started","href":"/docs/4.1/getting-started","docId":"getting-started"},{"type":"link","label":"Symfony bundle","href":"/docs/4.1/symfony-bundle","docId":"symfony-bundle"},{"type":"link","label":"Laravel package","href":"/docs/4.1/laravel-package","docId":"laravel-package"},{"type":"link","label":"Universal service providers","href":"/docs/4.1/universal_service_providers","docId":"universal_service_providers"},{"type":"link","label":"Other frameworks / No framework","href":"/docs/4.1/other-frameworks","docId":"other-frameworks"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Usage","items":[{"type":"link","label":"Queries","href":"/docs/4.1/queries","docId":"queries"},{"type":"link","label":"Mutations","href":"/docs/4.1/mutations","docId":"mutations"},{"type":"link","label":"Type mapping","href":"/docs/4.1/type_mapping","docId":"type_mapping"},{"type":"link","label":"Autowiring services","href":"/docs/4.1/autowiring","docId":"autowiring"},{"type":"link","label":"Extending a type","href":"/docs/4.1/extend_type","docId":"extend_type"},{"type":"link","label":"External type declaration","href":"/docs/4.1/external_type_declaration","docId":"external_type_declaration"},{"type":"link","label":"Input types","href":"/docs/4.1/input-types","docId":"input-types"},{"type":"link","label":"Inheritance and interfaces","href":"/docs/4.1/inheritance-interfaces","docId":"inheritance-interfaces"},{"type":"link","label":"Error handling","href":"/docs/4.1/error-handling","docId":"error-handling"},{"type":"link","label":"User input validation","href":"/docs/4.1/validation","docId":"validation"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Security","items":[{"type":"link","label":"Authentication and authorization","href":"/docs/4.1/authentication_authorization","docId":"authentication_authorization"},{"type":"link","label":"Fine grained security","href":"/docs/4.1/fine-grained-security","docId":"fine-grained-security"},{"type":"link","label":"Connecting security to your framework","href":"/docs/4.1/implementing-security","docId":"implementing-security"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Performance","items":[{"type":"link","label":"Query plan","href":"/docs/4.1/query-plan","docId":"query-plan"},{"type":"link","label":"Prefetching records","href":"/docs/4.1/prefetch-method","docId":"prefetch-method"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Advanced","items":[{"type":"link","label":"File uploads","href":"/docs/4.1/file-uploads","docId":"file-uploads"},{"type":"link","label":"Pagination","href":"/docs/4.1/pagination","docId":"pagination"},{"type":"link","label":"Custom types","href":"/docs/4.1/custom-types","docId":"custom-types"},{"type":"link","label":"Custom annotations","href":"/docs/4.1/field-middlewares","docId":"field-middlewares"},{"type":"link","label":"Custom argument resolving","href":"/docs/4.1/argument-resolving","docId":"argument-resolving"},{"type":"link","label":"Extending an input type","href":"/docs/4.1/extend_input_type","docId":"extend_input_type"},{"type":"link","label":"Class with multiple output types","href":"/docs/4.1/multiple_output_types","docId":"multiple_output_types"},{"type":"link","label":"Symfony specific features","href":"/docs/4.1/symfony-bundle-advanced","docId":"symfony-bundle-advanced"},{"type":"link","label":"Laravel specific features","href":"/docs/4.1/laravel-package-advanced","docId":"laravel-package-advanced"},{"type":"link","label":"Internals","href":"/docs/4.1/internals","docId":"internals"},{"type":"link","label":"Troubleshooting","href":"/docs/4.1/troubleshooting","docId":"troubleshooting"},{"type":"link","label":"Migrating","href":"/docs/4.1/migrating","docId":"migrating"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Reference","items":[{"type":"link","label":"Annotations VS Attributes","href":"/docs/4.1/doctrine-annotations-attributes","docId":"doctrine-annotations-attributes"},{"type":"link","label":"Annotations reference","href":"/docs/4.1/annotations_reference","docId":"annotations_reference"},{"type":"link","label":"Semantic versioning","href":"/docs/4.1/semver","docId":"semver"},{"type":"link","label":"Changelog","href":"/docs/4.1/changelog","docId":"changelog"}],"collapsed":true,"collapsible":true}]},"docs":{"annotations_reference":{"id":"annotations_reference","title":"Annotations reference","description":"Note: all annotations are available both in a Doctrine annotation format (@Query) and in PHP 8 attribute format (#[Query]).","sidebar":"version-4.1/docs"},"argument-resolving":{"id":"argument-resolving","title":"Extending argument resolving","description":"Available in GraphQLite 4.0+","sidebar":"version-4.1/docs"},"authentication_authorization":{"id":"authentication_authorization","title":"Authentication and authorization","description":"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields","sidebar":"version-4.1/docs"},"autowiring":{"id":"autowiring","title":"Autowiring services","description":"GraphQLite can automatically inject services in your fields/queries/mutations signatures.","sidebar":"version-4.1/docs"},"changelog":{"id":"changelog","title":"Changelog","description":"4.1","sidebar":"version-4.1/docs"},"custom-output-types":{"id":"custom-output-types","title":"Custom output types","description":"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite."},"custom-types":{"id":"custom-types","title":"Custom types","description":"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite.","sidebar":"version-4.1/docs"},"doctrine-annotations-attributes":{"id":"doctrine-annotations-attributes","title":"Doctrine annotations VS PHP8 attributes","description":"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+).","sidebar":"version-4.1/docs"},"error-handling":{"id":"error-handling","title":"Error handling","description":"In GraphQL, when an error occurs, the server must add an \\"error\\" entry in the response.","sidebar":"version-4.1/docs"},"extend_input_type":{"id":"extend_input_type","title":"Extending an input type","description":"Available in GraphQLite 4.0+","sidebar":"version-4.1/docs"},"extend_type":{"id":"extend_type","title":"Extending a type","description":"Fields exposed in a GraphQL type do not need to be all part of the same class.","sidebar":"version-4.1/docs"},"external_type_declaration":{"id":"external_type_declaration","title":"External type declaration","description":"In some cases, you cannot or do not want to put an annotation on a domain class.","sidebar":"version-4.1/docs"},"features":{"id":"features","title":"GraphQLite","description":"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers.","sidebar":"version-4.1/docs"},"field-middlewares":{"id":"field-middlewares","title":"Adding custom annotations with Field middlewares","description":"Available in GraphQLite 4.0+","sidebar":"version-4.1/docs"},"file-uploads":{"id":"file-uploads","title":"File uploads","description":"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed","sidebar":"version-4.1/docs"},"fine-grained-security":{"id":"fine-grained-security","title":"Fine grained security","description":"If the @Logged and @Right annotations are not","sidebar":"version-4.1/docs"},"getting-started":{"id":"getting-started","title":"Getting started","description":"GraphQLite is a framework agnostic library. You can use it in any PHP project as long as you know how to","sidebar":"version-4.1/docs"},"implementing-security":{"id":"implementing-security","title":"Connecting GraphQLite to your framework\'s security module","description":"This step is NOT necessary for users using GraphQLite through the Symfony Bundle or the Laravel package","sidebar":"version-4.1/docs"},"inheritance":{"id":"inheritance","title":"Inheritance and interfaces","description":"Some of your entities may extend other entities. GraphQLite will do its best to represent this hierarchy of objects in GraphQL using interfaces."},"inheritance-interfaces":{"id":"inheritance-interfaces","title":"Inheritance and interfaces","description":"Modeling inheritance","sidebar":"version-4.1/docs"},"input-types":{"id":"input-types","title":"Input types","description":"Let\'s admit you are developing an API that returns a list of cities around a location.","sidebar":"version-4.1/docs"},"internals":{"id":"internals","title":"Internals","description":"Mapping types","sidebar":"version-4.1/docs"},"laravel-package":{"id":"laravel-package","title":"Getting started with Laravel","description":"The GraphQLite-Laravel package is compatible with Laravel 5.7+, Laravel 6.x and  Laravel 7.x.","sidebar":"version-4.1/docs"},"laravel-package-advanced":{"id":"laravel-package-advanced","title":"Laravel package: advanced usage","description":"The Laravel package comes with a number of features to ease the integration of GraphQLite in Laravel.","sidebar":"version-4.1/docs"},"migrating":{"id":"migrating","title":"Migrating","description":"Migrating from v4.0 to v4.1","sidebar":"version-4.1/docs"},"multiple_output_types":{"id":"multiple_output_types","title":"Mapping multiple output types for the same class","description":"Available in GraphQLite 4.0+","sidebar":"version-4.1/docs"},"mutations":{"id":"mutations","title":"Mutations","description":"In GraphQLite, mutations are created like queries.","sidebar":"version-4.1/docs"},"other-frameworks":{"id":"other-frameworks","title":"Getting started with any framework","description":"If you are using Symfony 4.x, checkout the Symfony bundle.","sidebar":"version-4.1/docs"},"pagination":{"id":"pagination","title":"Paginating large result sets","description":"It is quite common to have to paginate over large result sets.","sidebar":"version-4.1/docs"},"prefetch-method":{"id":"prefetch-method","title":"Prefetching records","description":"The problem","sidebar":"version-4.1/docs"},"queries":{"id":"queries","title":"Queries","description":"In GraphQLite, GraphQL queries are created by writing methods in controller classes.","sidebar":"version-4.1/docs"},"query-plan":{"id":"query-plan","title":"Query plan","description":"The problem","sidebar":"version-4.1/docs"},"semver":{"id":"semver","title":"Our backward compatibility promise","description":"Ensuring smooth upgrades of your project is a priority. That\'s why we promise you backward compatibility (BC) for all","sidebar":"version-4.1/docs"},"symfony-bundle":{"id":"symfony-bundle","title":"Getting started with Symfony","description":"The GraphQLite bundle is compatible with Symfony 4.x and Symfony 5.x.","sidebar":"version-4.1/docs"},"symfony-bundle-advanced":{"id":"symfony-bundle-advanced","title":"Symfony bundle: advanced usage","description":"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony.","sidebar":"version-4.1/docs"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"Error: Maximum function nesting level of \'100\' reached","sidebar":"version-4.1/docs"},"type_mapping":{"id":"type_mapping","title":"Type mapping","description":"As explained in the queries section, the job of GraphQLite is to create GraphQL types from PHP types.","sidebar":"version-4.1/docs"},"universal_service_providers":{"id":"universal_service_providers","title":"Getting started with a framework compatible with container-interop/service-provider","description":"container-interop/service-provider is an experimental project","sidebar":"version-4.1/docs"},"validation":{"id":"validation","title":"Validation","description":"GraphQLite does not handle user input validation by itself. It is out of its scope.","sidebar":"version-4.1/docs"}}}')}}]);