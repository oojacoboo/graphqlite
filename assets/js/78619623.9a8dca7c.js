"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[650],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),i=n(72389),l=n(79443);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(63616),p=n(86010),c="tabItem_vU9c";function s(e){var t,n,i,l=e.lazy,s=e.block,d=e.defaultValue,f=e.values,m=e.groupId,y=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=o(),x=g.tabGroupChoices,T=g.setTabGroupChoices,w=(0,r.useState)(k),N=w[0],F=w[1],E=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=x[m];null!=C&&C!==N&&v.some((function(e){return e.value===C}))&&F(C)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==N&&(O(t),F(a),null!=m&&T(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":s},y)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:P,onClick:P},i,{className:(0,p.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},93907:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(26396),o=n(58215),u=["components"],p={id:"extend-input-type",title:"Extending an input type",sidebar_label:"Extending an input type"},c=void 0,s={unversionedId:"extend-input-type",id:"version-4.2/extend-input-type",title:"Extending an input type",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-4.2/extend-input-type.mdx",sourceDirName:".",slug:"/extend-input-type",permalink:"/docs/4.2/extend-input-type",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/extend-input-type.mdx",tags:[],version:"4.2",lastUpdatedBy:"Dorian Savina",lastUpdatedAt:1649295164,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"extend-input-type",title:"Extending an input type",sidebar_label:"Extending an input type"},sidebar:"version-4.2/docs",previous:{title:"Custom argument resolving",permalink:"/docs/4.2/argument-resolving"},next:{title:"Class with multiple output types",permalink:"/docs/4.2/multiple-output-types"}},d=[],f={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("small",null,"Available in GraphQLite 4.0+"),(0,i.kt)("div",{class:"alert alert--info"},"If you are not familiar with the ",(0,i.kt)("code",null,"@Factory")," tag, ",(0,i.kt)("a",{href:"input-types"},'read first the "input types" guide'),"."),(0,i.kt)("p",null,"Fields exposed in a GraphQL input type do not need to be all part of the factory method."),(0,i.kt)("p",null,"Just like with output type (that can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/extend-type"},"extended using the ",(0,i.kt)("inlineCode",{parentName:"a"},"ExtendType")," annotation"),"), you can extend/modify\nan input type using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation to add additional fields to an input type that is already declared by a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Factory")," annotation,\nor to modify the returned object."),(0,i.kt)("div",{class:"alert alert--info"},"The ",(0,i.kt)("code",null,"@Decorate")," annotation is very useful in scenarios where you cannot touch the ",(0,i.kt)("code",null,"@Factory")," method. This can happen if the ",(0,i.kt)("code",null,"@Factory")," method is defined in a third-party library or if the ",(0,i.kt)("code",null,"@Factory")," method is part of auto-generated code."),(0,i.kt)("p",null,"Let's assume you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," class used as an input type. You most certainly have a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Factory")," to create the input type."),(0,i.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    #[Factory]\n    public function createFilter(string $name): Filter\n    {\n        // Let's assume you have a flexible 'Filter' class that can accept any kind of filter\n        $filter = new Filter();\n        $filter->addFilter('name', $name);\n        return $filter;\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    /**\n     * @Factory()\n     */\n    public function createFilter(string $name): Filter\n    {\n        // Let's assume you have a flexible 'Filter' class that can accept any kind of filter\n        $filter = new Filter();\n        $filter->addFilter('name', $name);\n        return $filter;\n    }\n}\n")))),(0,i.kt)("p",null,"Assuming you ",(0,i.kt)("strong",{parentName:"p"},"cannot"),' modify the code of this factory, you can still modify the GraphQL input type generated by\nadding a "decorator" around the factory.'),(0,i.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyDecorator\n{\n    #[Decorate(inputTypeName: \"FilterInput\")]\n    public function addTypeFilter(Filter $filter, string $type): Filter\n    {\n        $filter->addFilter('type', $type);\n        return $filter;\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyDecorator\n{\n    /**\n     * @Decorate(inputTypeName=\"FilterInput\")\n     */\n    public function addTypeFilter(Filter $filter, string $type): Filter\n    {\n        $filter->addFilter('type', $type);\n        return $filter;\n    }\n}\n")))),(0,i.kt)("p",null,'In the example above, the "Filter" input type is modified. We add an additional "type" field to the input type.'),(0,i.kt)("p",null,"A few things to notice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The decorator takes the object generated by the factory as first argument"),(0,i.kt)("li",{parentName:"ul"},"The decorator MUST return an object of the same type (or a sub-type)"),(0,i.kt)("li",{parentName:"ul"},"The decorator CAN contain additional parameters. They will be added to the fields of the GraphQL input type."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"@Decorate")," annotation must contain a ",(0,i.kt)("inlineCode",{parentName:"li"},"inputTypeName")," attribute that contains the name of the GraphQL input type\nthat is decorated. If you did not specify this name in the ",(0,i.kt)("inlineCode",{parentName:"li"},"@Factory"),' annotation, this is by default the name of the\nPHP class + "Input" (for instance: "Filter" => "FilterInput")')),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!")," The ",(0,i.kt)("code",null,"MyDecorator")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."))}m.isMDXComponent=!0}}]);