import{j as e,E as i}from"./iframe-BFfiCRAQ.js";import{useMDXComponents as d}from"./index-CnIchwG9.js";import{A as s}from"./ArgTypesWithNote-DZwNit9-.js";import{C as u}from"./ControlsWithNote-COkN8HtC.js";import{D as h}from"./DocsHeader-BqSqZAws.js";import{F as x}from"./Footer-3U2rULEI.js";import"./CommandsAndQueries-D2e25SQ4.js";import"./PageNotFound-CAIx-1qq.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-D8UGMoOU.js";import{S as m,a as l}from"./index-CYHAylfT.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-B3dhAbn5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvMEXi75.js";import"./information-mHfS5cWl.js";import"./sys-enter-2-BfeK50PI.js";import"./alert-DGgnTy1o.js";import"./Tag-D5_wJnae.js";import"./index-BsyXKf0m.js";import"./index-De1oz68R.js";import"./Link-BzXMrnu2.js";import"./copy-BWFRoD18.js";import"./copy-CbWPHS6-.js";import"./GitHub-Mark-1-avKd4a.js";import"./TableOfContent-DfIS3zQ7.js";import"./index-stFY49PR.js";import"./index-C_tePRTa.js";import"./index-Arv69njm.js";import"./index-BEK-Ecqi.js";import"./index-CX51hblh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RE3-w7CJ.js";import"./addCustomCSSWithScoping-rUi9bOzC.js";import"./Illustrations-DMZSmuvx.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-D45_KCqM.js";import"./ListItemBaseTemplate-BM8be-0F.js";import"./SuggestionItemGroup-CtHNYeM0.js";import"./ListBoxItemGroupTemplate-B9xYubZz.js";import"./Input-BSDYELEx.js";import"./ResponsivePopoverCommon.css-D4YzLUeU.js";import"./ValueStateMessage.css-CZS8cQna.js";import"./Suggestions.css-BRZ_skiF.js";import"./employee-BxcDtM4F.js";import"./index-rwYIjJnj.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
