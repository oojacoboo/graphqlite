"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"migrating",title:"Migrating",sidebar_label:"Migrating",original_id:"migrating"},o=void 0,l={unversionedId:"migrating",id:"version-4.1/migrating",title:"Migrating",description:"Migrating from v4.0 to v4.1",source:"@site/versioned_docs/version-4.1/migrating.md",sourceDirName:".",slug:"/migrating",permalink:"/docs/4.1/migrating",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/migrating.md",tags:[],version:"4.1",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1657169592,formattedLastUpdatedAt:"7/7/2022",frontMatter:{id:"migrating",title:"Migrating",sidebar_label:"Migrating",original_id:"migrating"},sidebar:"version-4.1/docs",previous:{title:"Troubleshooting",permalink:"/docs/4.1/troubleshooting"},next:{title:"Annotations VS Attributes",permalink:"/docs/4.1/doctrine-annotations-attributes"}},p={},s=[{value:"Migrating from v4.0 to v4.1",id:"migrating-from-v40-to-v41",level:2},{value:"Migrating from v3.0 to v4.0",id:"migrating-from-v30-to-v40",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"migrating-from-v40-to-v41"},"Migrating from v4.0 to v4.1"),(0,r.kt)("p",null,"GraphQLite follows Semantic Versioning. GraphQLite 4.1 is backward compatible with GraphQLite 4.0. See\n",(0,r.kt)("a",{parentName:"p",href:"/docs/4.1/semver"},"semantic versioning")," for more details."),(0,r.kt)("p",null,"There is one exception though: the ",(0,r.kt)("strong",{parentName:"p"},"ecodev/graphql-upload"),' package (used to get support for file uploads in GraphQL\ninput types) is now a "recommended" dependency only.\nIf you are using GraphQL file uploads, you need to add ',(0,r.kt)("inlineCode",{parentName:"p"},"ecodev/graphql-upload")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," by running this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require ecodev/graphql-upload\n")),(0,r.kt)("h2",{id:"migrating-from-v30-to-v40"},"Migrating from v3.0 to v4.0"),(0,r.kt)("p",null,'If you are a "regular" GraphQLite user, migration to v4 should be straightforward:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Annotations are mostly untouched. The only annotation that is changed is the ",(0,r.kt)("inlineCode",{parentName:"li"},"@SourceField")," annotation.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check your code for every places where you use the ",(0,r.kt)("inlineCode",{parentName:"li"},"@SourceField")," annotation:"),(0,r.kt)("li",{parentName:"ul"},'The "id" attribute has been remove (',(0,r.kt)("inlineCode",{parentName:"li"},"@SourceField(id=true)"),"). Instead, use ",(0,r.kt)("inlineCode",{parentName:"li"},'@SourceField(outputType="ID")')),(0,r.kt)("li",{parentName:"ul"},'The "logged", "right" and "failWith" attributes have been removed (',(0,r.kt)("inlineCode",{parentName:"li"},"@SourceField(logged=true)"),").\nInstead, use the annotations attribute with the same annotations you use for the ",(0,r.kt)("inlineCode",{parentName:"li"},"@Field")," annotation:\n",(0,r.kt)("inlineCode",{parentName:"li"},"@SourceField(annotations={@Logged, @FailWith(null)})")),(0,r.kt)("li",{parentName:"ul"},"If you use magic property and were creating a getter for every magic property (to put a ",(0,r.kt)("inlineCode",{parentName:"li"},"@Field")," annotation on it),\nyou can now replace this getter with a ",(0,r.kt)("inlineCode",{parentName:"li"},"@MagicField")," annotation."))),(0,r.kt)("li",{parentName:"ul"},"In GraphQLite v3, the default was to hide a field from the schema if a user has no access to it.\nIn GraphQLite v4, the default is to still show this field, but to throw an error if the user makes a query on it\n(this way, the schema is the same for all users). If you want the old mode, use the new\n",(0,r.kt)("a",{parentName:"li",href:"/docs/4.1/annotations_reference#hideifunauthorized-annotation"},(0,r.kt)("inlineCode",{parentName:"a"},"@HideIfUnauthorized")," annotation")),(0,r.kt)("li",{parentName:"ul"},"If you are using the Symfony bundle, the Laravel package or the Universal module, you must also upgrade those to 4.0.\nThese package will take care of the wiring for you. Apart for upgrading the packages, you have nothing to do."),(0,r.kt)("li",{parentName:"ul"},"If you are relying on the ",(0,r.kt)("inlineCode",{parentName:"li"},"SchemaFactory")," to bootstrap GraphQLite, you have nothing to do.")),(0,r.kt)("p",null,"On the other hand, if you are a power user and if you are wiring GraphQLite services yourself (without using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaFactory"),') or if you implemented custom "TypeMappers", you will need to adapt your code:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"FieldsBuilderFactory")," is gone. Directly instantiate ",(0,r.kt)("inlineCode",{parentName:"li"},"FieldsBuilder")," in v4."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"CompositeTypeMapper")," class has no more constructor arguments. Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"addTypeMapper")," method to register\ntype mappers in it."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"FieldsBuilder")," now accept an extra argument: the ",(0,r.kt)("inlineCode",{parentName:"li"},"RootTypeMapper")," that you need to instantiate accordingly. Take\na look at the ",(0,r.kt)("inlineCode",{parentName:"li"},"SchemaFactory")," class for an example of proper configuration."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"HydratorInterface")," and all implementations are gone. When returning an input object from a TypeMapper, the object\nmust now implement the ",(0,r.kt)("inlineCode",{parentName:"li"},"ResolvableMutableInputInterface")," (an input object type that contains its own resolver)")),(0,r.kt)("p",null,"Note: we strongly recommend to use the Symfony bundle, the Laravel package, the Universal module or the SchemaManager\nto bootstrap GraphQLite. Wiring directly GraphQLite classes (like the ",(0,r.kt)("inlineCode",{parentName:"p"},"FieldsBuilder"),") into your container is not recommended,\nas the signature of the constructor of those classes may vary from one minor release to another.\nUse the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaManager")," instead."))}d.isMDXComponent=!0}}]);