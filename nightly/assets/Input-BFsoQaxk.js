import{j as e,A as i}from"./iframe-D-ZP0dY4.js";import{u as d,M as u,C as r,a as h,D as s}from"./blocks-DdKopPSC.js";import{A as p}from"./ArgTypesWithNote-Cxf4ymZ0.js";import{C as x}from"./ControlsWithNote-BIyz1_Xt.js";import{D as j}from"./DocsHeader-MhexG2vZ.js";import{F as f}from"./Footer-BLTkp7nE.js";import"./CommandsAndQueries-BDnj74c9.js";import"./PageNotFound-DiPPX7Ze.js";import{S as g}from"./SubcomponentsSection-BVy4lpQe.js";import{S as m,a as l}from"./index-DNP6300C.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-C6BMQexI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C04kZKw9.js";import"./information-BKIP_Ra_.js";import"./sys-enter-2-vX0Cm-qe.js";import"./alert-Bu79oBCI.js";import"./Tag-CNlwwDmZ.js";import"./index-Dx3fp6V7.js";import"./index-BAH7VHrp.js";import"./Link-06g1SNw0.js";import"./copy-DEZgQs9x.js";import"./copy-HW_Kxlr2.js";import"./GitHub-Mark-Cxk1q0bN.js";import"./TableOfContent--BhlVRbW.js";import"./index-Tnz3nQrD.js";import"./index-U3Dsw_H6.js";import"./index-CF2Hkn6J.js";import"./index-BAothMF0.js";import"./index-eZWdMAeg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxeCNWRQ.js";import"./addCustomCSSWithScoping-DSa3TmU8.js";import"./Illustrations-DQsCRA8v.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-FyzOwRj6.js";import"./ListItemBaseTemplate-BFmgJ1Et.js";import"./SuggestionItemGroup-BaVRxn99.js";import"./ListBoxItemGroupTemplate-C8lKTN_F.js";import"./Input-BOgGLefA.js";import"./ResponsivePopoverCommon.css-Dq17JFm7.js";import"./ValueStateMessage.css-CBH2VacG.js";import"./Suggestions.css-BN8N-6EC.js";import"./employee-B7fAmhL4.js";import"./index-B4X1hHJn.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:n}),`
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
