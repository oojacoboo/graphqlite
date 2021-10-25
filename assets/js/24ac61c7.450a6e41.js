"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3205],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47455:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"inheritance",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces",original_id:"inheritance"},l=void 0,s={unversionedId:"inheritance",id:"version-3.0/inheritance",isDocsHomePage:!1,title:"Inheritance and interfaces",description:"Some of your entities may extend other entities. GraphQLite will do its best to represent this hierarchy of objects in GraphQL using interfaces.",source:"@site/versioned_docs/version-3.0/inheritance.md",sourceDirName:".",slug:"/inheritance",permalink:"/docs/3.0/inheritance",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/inheritance.md",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1635192682,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"inheritance",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces",original_id:"inheritance"},sidebar:"version-3.0/docs",previous:{title:"Input types",permalink:"/docs/3.0/input-types"},next:{title:"File uploads",permalink:"/docs/3.0/file-uploads"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some of your entities may extend other entities. GraphQLite will do its best to represent this hierarchy of objects in GraphQL using interfaces."),(0,i.kt)("p",null,"Let's say you have two classes, ",(0,i.kt)("inlineCode",{parentName:"p"},"Contact")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," (which extends ",(0,i.kt)("inlineCode",{parentName:"p"},"Contact"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass Contact\n{\n    // ...\n}\n\n/**\n * @Type\n */\nclass User extends Contact\n{\n    // ...\n}\n")),(0,i.kt)("p",null,"Now, let's assume you have a query that returns a contact:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"class ContactController\n{\n    /**\n     * @Query()\n     */\n    public function getContact(): Contact\n    {\n        // ...\n    }\n}\n")),(0,i.kt)("p",null,"When writing your GraphQL query, you are able to use fragments to retrieve fields from the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"contact {\n    name\n    ... User {\n       email\n    }\n}\n")),(0,i.kt)("p",null,"Written in ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),", the representation of types would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype Contact implements ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype User implements ContactInterface {\n    // List of fields declared in Contact and User classes\n}\n")),(0,i.kt)("p",null,"Behind the scene, GraphQLite will detect that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Contact")," class is extended by the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," class.\nBecause the class is extended, a GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"ContactInterface")," interface is created dynamically."),(0,i.kt)("p",null,"The GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," type will also automatically implement this ",(0,i.kt)("inlineCode",{parentName:"p"},"ContactInterface"),". The interface contains all the fields\navailable in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Contact")," type."),(0,i.kt)("div",{class:"alert alert--warning"},"Right now, there is no way to explicitly declare a GraphQL interface using GraphQLite.",(0,i.kt)("br",null),"GraphQLite automatically declares interfaces when it sees an inheritance relationship between to classes that are GraphQL types."))}d.isMDXComponent=!0}}]);