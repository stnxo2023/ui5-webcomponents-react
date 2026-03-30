import{j as e,A as i}from"./iframe-CJJIsx6F.js";import{u as d,M as u,C as r,a as h,D as s}from"./blocks-ChaXMZP5.js";import{A as p}from"./ArgTypesWithNote-BZexH8YB.js";import{C as x}from"./ControlsWithNote-C517f0VS.js";import{D as j}from"./DocsHeader-UlcWAO4j.js";import{F as f}from"./Footer-Ce6by-oH.js";import"./CommandsAndQueries-B6BpCs-M.js";import"./PageNotFound-BtSzGq-G.js";import{S as g}from"./SubcomponentsSection-BVy4lpQe.js";import{S as m,a as l}from"./index-UT0YEaSs.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-BeOM0ZS9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3WbBMZ1.js";import"./information-DHzv4rEq.js";import"./sys-enter-2-DxE2QBT2.js";import"./alert-BgdGP7JP.js";import"./Tag-n7rERTqv.js";import"./index-Comgbi1p.js";import"./index-8nS7lmoC.js";import"./Link-GrYjVq0T.js";import"./copy-C35nr0mJ.js";import"./copy-CS6obn2m.js";import"./GitHub-Mark-C9rLi2lG.js";import"./TableOfContent-CASxHgew.js";import"./index-DqWhINqr.js";import"./index-qLq9B_00.js";import"./index-BAPIP2EX.js";import"./index-CiQC7Mcr.js";import"./index-DWaBFkkI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CLM_ccAB.js";import"./addCustomCSSWithScoping-DH49qo7-.js";import"./Illustrations-BhBoWAi4.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-Cs3GRJFE.js";import"./ListItemBaseTemplate-DaxiMu7F.js";import"./SuggestionItemGroup-BLisbrN9.js";import"./ListBoxItemGroupTemplate-BSinwIEf.js";import"./Input-DsafznTO.js";import"./ResponsivePopoverCommon.css-ChLB8_9T.js";import"./ValueStateMessage.css-BLjLq8yr.js";import"./Suggestions.css-CqX3de1P.js";import"./employee-C1JEd9pn.js";import"./index-BGeA_s_w.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:n}),`
`,e.jsx(j,{of:n}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:a}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h3,{id:"fully-controlled-input",children:"Fully Controlled Input"}),`
`,e.jsxs(t.p,{children:["Different from the native ",e.jsx(t.code,{children:"input"})," element, the ",e.jsx(t.code,{children:"Input"})," (",e.jsx(t.code,{children:"ui5-input"}),") web component is uncontrolled even if the ",e.jsx(t.code,{children:"value"})," prop is provided (see ",e.jsx(t.a,{href:"https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable",rel:"nofollow",children:"React docs"}),`).
To make it fully controlled, call `,e.jsx(t.code,{children:"event.preventDefault()"})," in the ",e.jsx(t.code,{children:"onInput"})," handler."]}),`
`,e.jsxs(t.p,{children:["In the example below, only letters are allowed to be entered into the ",e.jsx(t.code,{children:"Input"})," component."]}),`
`,e.jsx(r,{of:I}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`const handleInput: InputPropTypes['onInput'] = (event) => {
  event.preventDefault();
  const { value } = event.target;
  if (/^[a-zA-Z]*$/.test(value)) {
    setValue(value);
  }
};
`})}),`
`,e.jsx(t.h3,{id:"input-with-customizable-suggestionitem",children:"Input with customizable SuggestionItem"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"SuggestionItem"})," represents the suggestion item of the ",e.jsx(t.code,{children:"Input"})]}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(h,{children:g}),`
`,e.jsx(t.h2,{id:"suggestionitem",children:"SuggestionItem"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(p,{metaOf:n,hideHTMLPropsNote:!0,exclude:i,of:m}),`
`,e.jsx(t.h2,{id:"suggestionitemgroup",children:"SuggestionItemGroup"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(p,{metaOf:n,of:l,hideHTMLPropsNote:!0,exclude:i}),`
`,e.jsx(f,{})]})}function ce(o={}){const{wrapper:t}={...d(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(c,{...o})}):c(o)}export{ce as default};
