"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[781],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),o=n(72389),i=n(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(63616),s=n(86010),c="tabItem_vU9c";function p(e){var t,n,o,i=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),P=g.tabGroupChoices,w=g.setTabGroupChoices,T=(0,r.useState)(k),N=T[0],O=T[1],D=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=P[f];null!=x&&x!==N&&v.some((function(e){return e.value===x}))&&O(x)}var C=function(e){var t=e.currentTarget,n=D.indexOf(t),a=v[n].value;a!==N&&(E(t),O(a),null!=f&&w(f,a))},H=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;n=D[r]||D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},h)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return D.push(e)},onKeyDown:H,onFocus:C,onClick:C},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},60970:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(26396),l=n(58215),u=["components"],s={id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},c=void 0,p={unversionedId:"doctrine-annotations-attributes",id:"version-5.0/doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",description:"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+).",source:"@site/versioned_docs/version-5.0/doctrine-annotations-attributes.mdx",sourceDirName:".",slug:"/doctrine-annotations-attributes",permalink:"/docs/doctrine-annotations-attributes",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-5.0/doctrine-annotations-attributes.mdx",tags:[],version:"5.0",lastUpdatedBy:"Dorian Savina",lastUpdatedAt:1649295164,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},sidebar:"version-5.0/docs",previous:{title:"Migrating",permalink:"/docs/migrating"},next:{title:"Annotations reference",permalink:"/docs/annotations-reference"}},d=[{value:"Doctrine annotations",id:"doctrine-annotations",children:[],level:2},{value:"PHP 8 attributes",id:"php-8-attributes",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+)."),(0,o.kt)("h2",{id:"doctrine-annotations"},"Doctrine annotations"),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("strong",null,"Deprecated!")," Doctrine annotations are deprecated in favor of native PHP 8 attributes. Support will be dropped in a future release."),(0,o.kt)("p",null,'Historically, attributes were not available in PHP and PHP developers had to "trick" PHP to get annotation support.  This was the purpose of the ',(0,o.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-annotations/en/latest/index.html"},"doctrine/annotation")," library."),(0,o.kt)("p",null,"Using Doctrine annotations, you write annotations in your docblocks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type\n */\nclass MyType\n{\n}\n")),(0,o.kt)("p",null,"Please note that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The annotation is added in a ",(0,o.kt)("strong",{parentName:"li"},"docblock"),' (a comment starting with "',(0,o.kt)("inlineCode",{parentName:"li"},"/**"),'")'),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Type")," part is actually a class. It must be declared in the ",(0,o.kt)("inlineCode",{parentName:"li"},"use")," statements at the top of your file.")),(0,o.kt)("div",{class:"alert alert--info"},(0,o.kt)("strong",null,"Heads up!"),(0,o.kt)("p",null,"Some IDEs provide support for Doctrine annotations:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"PhpStorm via the ",(0,o.kt)("a",{href:"https://plugins.jetbrains.com/plugin/7320-php-annotations"},"PHP Annotations Plugin")),(0,o.kt)("li",null,"Eclipse via the ",(0,o.kt)("a",{href:"https://marketplace.eclipse.org/content/symfony-plugin"},"Symfony 2 Plugin")),(0,o.kt)("li",null,"Netbeans has native support")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"We strongly recommend using an IDE that has Doctrine annotations support.\n"))),(0,o.kt)("h2",{id:"php-8-attributes"},"PHP 8 attributes"),(0,o.kt)("p",null,'Starting with PHP 8, PHP got native annotations support. They are actually called "attributes" in the PHP world.'),(0,o.kt)("p",null,"The same code can be written this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass MyType\n{\n}\n")),(0,o.kt)("p",null,"GraphQLite v4.1+ has support for PHP 8 attributes."),(0,o.kt)("p",null,"The Doctrine annotation class and the PHP 8 attribute class is ",(0,o.kt)("strong",{parentName:"p"},"the same")," (so you will be using the same ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," statement at the top of your file)."),(0,o.kt)("p",null,"They support the same attributes too."),(0,o.kt)("p",null,"A few notable differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PHP 8 attributes do not support nested attributes (unlike Doctrine annotations). This means there is no equivalent to the ",(0,o.kt)("inlineCode",{parentName:"li"},"annotations")," attribute of ",(0,o.kt)("inlineCode",{parentName:"li"},"@MagicField")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"@SourceField"),"."),(0,o.kt)("li",{parentName:"ul"},'PHP 8 attributes can be written at the parameter level. Any attribute targeting a "parameter" must be written at the parameter level.')),(0,o.kt)("p",null,"Let's take an example with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/autowiring"},(0,o.kt)("inlineCode",{parentName:"a"},"#Autowire")," attribute"),":"),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getProduct(#[Autowire] ProductRepository $productRepository) : Product {\n    //...\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Field\n * @Autowire(for="$productRepository")\n */\npublic function getProduct(ProductRepository $productRepository) : Product {\n    //...\n}\n')))))}f.isMDXComponent=!0}}]);