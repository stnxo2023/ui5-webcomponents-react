import{j as e}from"./iframe-BXb_n64_.js";import{u as a,M as i}from"./blocks-9VP231tA.js";import"./Tag-CRNARXt6.js";import{M as t}from"./index-BL83g4Fz.js";import"./CommandsAndQueries-BI-RA2OZ.js";import"./copy-BBKTKpbi.js";import{T as c}from"./TableOfContent-CJDX4QJ8.js";import{F as p}from"./Footer-DPPwB2I6.js";import"./PageNotFound-CZrojxwO.js";import{L as r}from"./index-BD_xT1Nj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./Link-BUcKjx9R.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./index-DqAHmx0d.js";import"./index-BNBy1IQK.js";import"./index-BSoVaSRp.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";function s(o){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Bring Your Own Web Components"}),`
`,e.jsx(n.h1,{id:"bring-your-own-web-components",children:"Bring Your Own Web Components"}),`
`,e.jsx(c,{}),`
`,e.jsxs(n.p,{children:["If you have created a custom UI5 Web Components package, you will be able to create React component wrappers in your project by leveraging our ",e.jsx(n.a,{href:"http://npmjs.com/package/@ui5/webcomponents-react-cli",rel:"nofollow",children:"@ui5/webcomponents-react-cli"}),"."]}),`
`,e.jsx(t,{hideCloseButton:!0,design:"Critical",children:e.jsxs(e.Fragment,{children:["The UI5 Web Components for React CLI package is tailor-made for custom UI5 Web Components packages following"," ",e.jsx(r,{href:"https://ui5.github.io/webcomponents/docs/development/",children:"this documentation"}),". ",e.jsx(n.br,{}),"You can not use it for creating React wrapper for arbitrary custom element libraries."]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"create-react-wrappers",children:"Create React Wrappers"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["This guide uses the name ",e.jsx(n.code,{children:"my-custom-webcomponents-package"})," for the custom UI5 Web Components package. ",e.jsx("br",{}),`
Please replace all occurrences with your real package name when following this guide.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["First of all, install the ",e.jsx(n.code,{children:"@ui5/webcomponents-react-cli"})," package in your project:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`npm install @ui5/webcomponents-react-cli --save-dev

# if your package is based on UI5 Web Components V1, please install the V1 version of the CLI
npm install @ui5/webcomponents-react-cli@V1 --save-dev
`})}),`
`,e.jsx(n.p,{children:"Then, install your custom UI5 Web Components package:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`npm install my-custom-webcomponents-package --save
`})}),`
`,e.jsxs(n.p,{children:["Now, you can add a npm script to create your wrapper components.",e.jsx("br",{}),`
`,e.jsxs(n.em,{children:["We recommend ensuring that the target directory (specified by the ",e.jsx(n.code,{children:"--out"})," parameter) is empty."]})]}),`
`,e.jsx(t,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["The UI5 Web Component for React CLI is not aware of any code style conventions you may be using in your project, so we recommend that you run tools such as ",e.jsx(r,{href:"https://prettier.io/",children:"prettier"})," and"," ",e.jsx(r,{href:"https://eslint.org/",children:"eslint"})," after creating the wrapper components if you are using them in your project."]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "//": "rest of your applications package.json",
  "scripts": {
    "//": "your other scripts",
    "create-webcomponent-wrappers": "ui5-wcr create-wrappers --packageName my-custom-webcomponents-package --out ./any/directory/in/your/project"
  }
}
`})}),`
`,e.jsx(p,{})]})}function D(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{D as default};
