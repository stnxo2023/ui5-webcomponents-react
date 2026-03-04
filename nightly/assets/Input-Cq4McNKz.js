import{j as e,B as i}from"./iframe-BliOtBpf.js";import{useMDXComponents as d}from"./index-Cfm9mwpf.js";import{A as s}from"./ArgTypesWithNote-C-2vwzhM.js";import{C as u}from"./ControlsWithNote-DaUK7OUO.js";import{D as h}from"./DocsHeader-4EPeD2VX.js";import{F as x}from"./CommandsAndQueries-BFQnO0Kc.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-DFxqqk7r.js";import{S as m,a as l}from"./index-BMtSLJAo.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-C7ZBYUa4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1gTXVZK.js";import"./information-0hx7iK2K.js";import"./sys-enter-2-CKBXubjR.js";import"./alert-DPJIvRdz.js";import"./Tag-slUCA2Mk.js";import"./index-Dq7D7J3c.js";import"./index-BpaxVzpl.js";import"./Link-AWzdE9bP.js";import"./copy-hXKPEzJS.js";import"./copy-Co-SMUUy.js";import"./GitHub-Mark-0htNnFEc.js";import"./TableOfContent-ByPZIom5.js";import"./index-CljUsgff.js";import"./index-DtASDt-o.js";import"./index-B5gV3DVy.js";import"./index-D6Ss-oF4.js";import"./index-riDZyvDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BuCRse4K.js";import"./addCustomCSSWithScoping-CtbnqYJf.js";import"./SuggestionItem-Cx4QFGUe.js";import"./ListItemBaseTemplate-DfgzIweD.js";import"./SuggestionItemGroup-CaPFxt88.js";import"./ListBoxItemGroupTemplate-BwSthZB6.js";import"./Input-BJthTOz5.js";import"./ResponsivePopoverCommon.css-m2t9TZaE.js";import"./ValueStateMessage.css-CdBoC1bH.js";import"./Suggestions.css-CtAAVjVZ.js";import"./employee-Dhp9ftjB.js";import"./index-304L1YOg.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
`,e.jsx(h,{of:n}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{of:a}),`
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
`,e.jsx(g,{children:j}),`
`,e.jsx(t.h2,{id:"suggestionitem",children:"SuggestionItem"}),`
`,e.jsx(p,{of:m}),`
`,e.jsx(s,{metaOf:n,hideHTMLPropsNote:!0,exclude:i,of:m}),`
`,e.jsx(t.h2,{id:"suggestionitemgroup",children:"SuggestionItemGroup"}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(s,{metaOf:n,of:l,hideHTMLPropsNote:!0,exclude:i}),`
`,e.jsx(x,{})]})}function me(o={}){const{wrapper:t}={...d(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(c,{...o})}):c(o)}export{me as default};
