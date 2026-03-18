import{j as e,E as i}from"./iframe-BWTquNFU.js";import{useMDXComponents as d}from"./index-CkXQL6rW.js";import{A as s}from"./ArgTypesWithNote-CeBIjVRI.js";import{C as u}from"./ControlsWithNote-CMzcgNsU.js";import{D as h}from"./DocsHeader-Mg9qrUqm.js";import{F as x}from"./Footer-BPNOTf-P.js";import"./CommandsAndQueries-Cu22SJgH.js";import"./PageNotFound-CJcyxQek.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-24keuhPe.js";import{S as m,a as l}from"./index-DAz2rWxh.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-BSef2bqJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B59i8xiW.js";import"./information-DMtPZuOJ.js";import"./sys-enter-2-C7vs2MPC.js";import"./alert-CcklZ67u.js";import"./Tag-DhoajqAo.js";import"./index-kSfV8vRJ.js";import"./index-ChJmkZbc.js";import"./Link-BecYEhoc.js";import"./copy-wtxGWRLy.js";import"./copy-iNwkfzwy.js";import"./GitHub-Mark-CzY2S8W-.js";import"./TableOfContent-xDME-aco.js";import"./index-DVrCMdXJ.js";import"./index-NVW8xIV5.js";import"./index-BTohTOow.js";import"./index-scscec-x.js";import"./index-CKCv8CV3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Byoi_UeP.js";import"./addCustomCSSWithScoping-DP3CaadD.js";import"./Illustrations-CJfJJGnG.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-CUIZagcj.js";import"./ListItemBaseTemplate-BRrEqjCC.js";import"./SuggestionItemGroup-CDCNxezR.js";import"./ListBoxItemGroupTemplate-DAbpQNBX.js";import"./Input-EE71Gmfs.js";import"./ResponsivePopoverCommon.css-BbZHRZZG.js";import"./ValueStateMessage.css-CUwbWuU7.js";import"./Suggestions.css-FQe1Xc9l.js";import"./employee-BhJOue6C.js";import"./index-CcsrfPcf.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
`,e.jsx(x,{})]})}function de(o={}){const{wrapper:t}={...d(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(c,{...o})}):c(o)}export{de as default};
