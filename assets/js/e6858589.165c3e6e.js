"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3049],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36803:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting",original_id:"troubleshooting"},u=void 0,c={unversionedId:"troubleshooting",id:"version-3.0/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Error: Maximum function nesting level of '100' reached",source:"@site/versioned_docs/version-3.0/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/3.0/troubleshooting",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/troubleshooting.md",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1635192682,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting",original_id:"troubleshooting"},sidebar:"version-3.0/docs",previous:{title:"Custom output types",permalink:"/docs/3.0/custom-output-types"},next:{title:"Annotations reference",permalink:"/docs/3.0/annotations_reference"}},s=[],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Error: Maximum function nesting level of '100' reached")),(0,i.kt)("p",null,"Webonyx's GraphQL library tends to use a very deep stack.\nThis error does not necessarily mean your code is going into an infinite loop.\nSimply try to increase the maximum allowed nesting level in your XDebug conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"xdebug.max_nesting_level=500\n")))}f.isMDXComponent=!0}}]);