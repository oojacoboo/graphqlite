"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8718],{94780:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(58168),l=(t(96540),t(15680)),n=(t(67443),t(11470)),i=t(19365);const r={id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},p=void 0,s={unversionedId:"file-uploads",id:"version-4.1/file-uploads",title:"File uploads",description:"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed",source:"@site/versioned_docs/version-4.1/file_uploads.mdx",sourceDirName:".",slug:"/file-uploads",permalink:"/docs/4.1/file-uploads",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/file_uploads.mdx",tags:[],version:"4.1",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1710913851,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},sidebar:"version-4.1/docs",previous:{title:"Prefetching records",permalink:"/docs/4.1/prefetch-method"},next:{title:"Pagination",permalink:"/docs/4.1/pagination"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"If you are using the Symfony bundle",id:"if-you-are-using-the-symfony-bundle",level:2},{value:"If you are using a PSR-15 compatible framework",id:"if-you-are-using-a-psr-15-compatible-framework",level:2},{value:"If you are using another framework not compatible with PSR-15",id:"if-you-are-using-another-framework-not-compatible-with-psr-15",level:2},{value:"Usage",id:"usage",level:2}],h={toc:d},m="wrapper";function g(e){let{components:a,...t}=e;return(0,l.yg)(m,(0,o.A)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed\nto add support for ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec"},"multipart requests"),"."),(0,l.yg)("h2",{id:"installation"},"Installation"),(0,l.yg)("p",null,"GraphQLite supports this extension through the use of the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"Ecodev/graphql-upload")," library."),(0,l.yg)("p",null,"You must start by installing this package:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-console"},"$ composer require ecodev/graphql-upload\n")),(0,l.yg)("h2",{id:"if-you-are-using-the-symfony-bundle"},"If you are using the Symfony bundle"),(0,l.yg)("p",null,"If you are using our Symfony bundle, the file upload middleware is managed by the bundle. You have nothing to do\nand can start using it right away."),(0,l.yg)("h2",{id:"if-you-are-using-a-psr-15-compatible-framework"},"If you are using a PSR-15 compatible framework"),(0,l.yg)("p",null,"In order to use this, you must first be sure that the ",(0,l.yg)("inlineCode",{parentName:"p"},"ecodev/graphql-upload")," PSR-15 middleware is part of your middleware pipe."),(0,l.yg)("p",null,"Simply add ",(0,l.yg)("inlineCode",{parentName:"p"},"GraphQL\\Upload\\UploadMiddleware")," to your middleware pipe."),(0,l.yg)("h2",{id:"if-you-are-using-another-framework-not-compatible-with-psr-15"},"If you are using another framework not compatible with PSR-15"),(0,l.yg)("p",null,"Please check the Ecodev/graphql-upload library ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"documentation"),"\nfor more information on how to integrate it in your framework."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("p",null,"To handle an uploaded file, you type-hint against the PSR-7 ",(0,l.yg)("inlineCode",{parentName:"p"},"UploadedFileInterface"),":"),(0,l.yg)(n.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    #[Mutation]\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n"))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Mutation\n     */\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n")))),(0,l.yg)("p",null,"Of course, you need to use a GraphQL client that is compatible with multipart requests. See ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec#client"},"jaydenseric/graphql-multipart-request-spec")," for a list of compatible clients."),(0,l.yg)("p",null,"The GraphQL client must send the file using the Upload type."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mutation upload($file: Upload!) {\n    upload(file: $file)\n}\n")))}g.isMDXComponent=!0}}]);