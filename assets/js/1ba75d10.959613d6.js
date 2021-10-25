"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[186],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),u="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,s=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=o(),v=f.tabGroupChoices,b=f.setTabGroupChoices,h=(0,r.useState)(a),y=h[0],g=h[1],k=r.Children.toArray(e.children),O=[];if(null!=m){var w=v[m];null!=w&&w!==y&&p.some((function(e){return e.value===w}))&&g(w)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),r=p[n].value;g(r),null!=m&&(b(m,r),setTimeout((function(){var e,n,r,a,o,i,u,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,u=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case s:var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case l:var a=O.indexOf(e.target)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",u,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:P,onClick:P},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},48104:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(55064),u=n(58215),c=["components"],l={id:"mutations",title:"Mutations",sidebar_label:"Mutations"},s=void 0,p={unversionedId:"mutations",id:"version-4.2/mutations",isDocsHomePage:!1,title:"Mutations",description:"In GraphQLite, mutations are created like queries.",source:"@site/versioned_docs/version-4.2/mutations.mdx",sourceDirName:".",slug:"/mutations",permalink:"/docs/4.2/mutations",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/mutations.mdx",tags:[],version:"4.2",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1635192682,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"mutations",title:"Mutations",sidebar_label:"Mutations"},sidebar:"version-4.2/docs",previous:{title:"Queries",permalink:"/docs/4.2/queries"},next:{title:"Type mapping",permalink:"/docs/4.2/type-mapping"}},m=[],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In GraphQLite, mutations are created ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.2/queries"},"like queries"),"."),(0,o.kt)("p",null,"To create a mutation, you must annotate a method in a controller with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Mutation")," annotation."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Mutation;\n\nclass ProductController\n{\n    #[Mutation]\n    public function saveProduct(int $id, string $name, ?float $price = null): Product\n    {\n        // Some code that saves a product.\n    }\n}\n"))),(0,o.kt)(u.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Mutation;\n\nclass ProductController\n{\n    /**\n     * @Mutation\n     */\n    public function saveProduct(int $id, string $name, ?float $price = null): Product\n    {\n        // Some code that saves a product.\n    }\n}\n")))))}f.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);