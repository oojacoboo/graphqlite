"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7959],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=d(n),k=r,h=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},91474:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"annotations_reference",title:"Annotations reference",sidebar_label:"Annotations reference",original_id:"annotations_reference"},p=void 0,d={unversionedId:"annotations_reference",id:"version-3.0/annotations_reference",title:"Annotations reference",description:"@Query annotation",source:"@site/versioned_docs/version-3.0/annotations_reference.md",sourceDirName:".",slug:"/annotations_reference",permalink:"/docs/3.0/annotations_reference",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/annotations_reference.md",tags:[],version:"3.0",lastUpdatedBy:"Dorian Savina",lastUpdatedAt:1649295164,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"annotations_reference",title:"Annotations reference",sidebar_label:"Annotations reference",original_id:"annotations_reference"},sidebar:"version-3.0/docs",previous:{title:"Troubleshooting",permalink:"/docs/3.0/troubleshooting"}},u=[{value:"@Query annotation",id:"query-annotation",children:[],level:2},{value:"@Mutation annotation",id:"mutation-annotation",children:[],level:2},{value:"@Type annotation",id:"type-annotation",children:[],level:2},{value:"@ExtendType annotation",id:"extendtype-annotation",children:[],level:2},{value:"@Field annotation",id:"field-annotation",children:[],level:2},{value:"@SourceField annotation",id:"sourcefield-annotation",children:[],level:2},{value:"@Logged annotation",id:"logged-annotation",children:[],level:2},{value:"@Right annotation",id:"right-annotation",children:[],level:2},{value:"@FailWith annotation",id:"failwith-annotation",children:[],level:2},{value:"@Factory annotation",id:"factory-annotation",children:[],level:2}],m={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"query-annotation"},"@Query annotation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Query")," annotation is used to declare a GraphQL query."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Applies on"),": controller methods."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Compulsory"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the query. If skipped, the name of the method is used instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/3.0/type_mapping"},"outputType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Forces the GraphQL output type of a query.")))),(0,l.kt)("h2",{id:"mutation-annotation"},"@Mutation annotation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Mutation")," annotation is used to declare a GraphQL mutation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Applies on"),": controller methods."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Compulsory"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the mutation. If skipped, the name of the method is used instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/3.0/type_mapping"},"outputType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Forces the GraphQL output type of a query.")))),(0,l.kt)("h2",{id:"type-annotation"},"@Type annotation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," annotation is used to declare a GraphQL object type."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Applies on"),": classes."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Compulsory"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"class"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'The targeted class. If no class is passed, the type applies to the current class. The current class is assumed to be an entity. If the "class" attribute is passed, ',(0,l.kt)("a",{parentName:"td",href:"/docs/3.0/external_type_declaration"},"the class annotated with ",(0,l.kt)("inlineCode",{parentName:"a"},"@Type")," is a service"),".")))),(0,l.kt)("h2",{id:"extendtype-annotation"},"@ExtendType annotation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation is used to add fields to an existing GraphQL object type."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Applies on"),": classes."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Compulsory"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"class"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"yes")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The targeted class. ",(0,l.kt)("a",{parentName:"td",href:"/docs/3.0/extend_type"},"The class annotated with ",(0,l.kt)("inlineCode",{parentName:"a"},"@ExtendType")," is a service"),".")))),(0,l.kt)("h2",{id:"field-annotation"},"@Field annotation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Field")," annotation is used to declare a GraphQL field."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Applies on"),": methods of classes annotated with ",(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"@ExtendType"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Compulsory"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the field. If skipped, the name of the method is used instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/3.0/type_mapping"},"outputType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Forces the GraphQL output type of a query.")))),(0,l.kt)("h2",{id:"sourcefield-annotation"},"@SourceField annotation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@SourceField")," annotation is used to declare a GraphQL field."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Applies on"),": classes annotated with ",(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"@ExtendType"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Compulsory"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"yes")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the field.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/3.0/type_mapping"},"outputType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Forces the GraphQL output type of the field. Otherwise, return type is used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logged"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the user must be logged or not to see the field.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"right"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"Right annotation"),(0,l.kt)("td",{parentName:"tr",align:null},"The right the user must have to see the field.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"failWith"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"mixed"),(0,l.kt)("td",{parentName:"tr",align:null},"A value to return if the user is not authorized to see the field. If not specified, the field will not be visible at all to the user.")))),(0,l.kt)("h2",{id:"logged-annotation"},"@Logged annotation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Logged")," annotation is used to declare a Query/Mutation/Field is only visible to logged users."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Applies on"),": methods annotated with ",(0,l.kt)("inlineCode",{parentName:"p"},"@Query"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"@Mutation")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"@Field"),"."),(0,l.kt)("p",null,"This annotation allows no attributes."),(0,l.kt)("h2",{id:"right-annotation"},"@Right annotation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Right")," annotation is used to declare a Query/Mutation/Field is only visible to users with a specific right."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Applies on"),": methods annotated with ",(0,l.kt)("inlineCode",{parentName:"p"},"@Query"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"@Mutation")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"@Field"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Compulsory"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"yes")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the right.")))),(0,l.kt)("h2",{id:"failwith-annotation"},"@FailWith annotation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation is used to declare a default value to return in the user is not authorized to see a specific\nquery / mutation / field (according to the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"@Right")," annotations)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Applies on"),": methods annotated with ",(0,l.kt)("inlineCode",{parentName:"p"},"@Query"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"@Mutation")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"@Field")," and one of ",(0,l.kt)("inlineCode",{parentName:"p"},"@Logged")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"@Right")," annotations."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Compulsory"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"yes")),(0,l.kt)("td",{parentName:"tr",align:null},"mixed"),(0,l.kt)("td",{parentName:"tr",align:null},"The value to return if the user is not authorized.")))),(0,l.kt)("h2",{id:"factory-annotation"},"@Factory annotation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Factory")," annotation is used to declare a factory that turns GraphQL input types into objects."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Applies on"),': methods from classes in the "types" namespace.'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Compulsory"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the input type. If skipped, the name of class returned by the factory is used instead.")))))}s.isMDXComponent=!0}}]);