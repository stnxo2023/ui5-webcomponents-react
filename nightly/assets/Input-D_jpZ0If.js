import{j as e,E as i}from"./iframe-BdGmxA0i.js";import{useMDXComponents as d}from"./index-C_zfuZcr.js";import{A as s}from"./ArgTypesWithNote-CnJqW8BH.js";import{C as u}from"./ControlsWithNote-w_YjsiOU.js";import{D as h}from"./DocsHeader-Dftch-HB.js";import{F as x}from"./Footer-Do6hcOrL.js";import"./CommandsAndQueries-DPqSrKc7.js";import"./PageNotFound-CY9FLBWR.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-CvQb1zUF.js";import{S as m,a as l}from"./index-CqUEnxF2.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-CewBKJTw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BNIHl_tg.js";import"./information-CGm_Wlhu.js";import"./sys-enter-2-ckHTVyHn.js";import"./alert-iCvnQY_C.js";import"./Tag-BZN3xK1V.js";import"./index-rE0jwRpd.js";import"./index-DZ9SK43g.js";import"./Link-CQvrABtJ.js";import"./copy-D0MTLwrf.js";import"./copy-uDMRF36v.js";import"./GitHub-Mark-D_uhkrfR.js";import"./TableOfContent-DlZGdJoU.js";import"./index-BdC4vT1G.js";import"./index-B2qLcI40.js";import"./index-DweznLO9.js";import"./index-C9pyPHSx.js";import"./index-DNgHnsc0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-XhNISppA.js";import"./addCustomCSSWithScoping-CVesT24B.js";import"./Illustrations-D5W8On_q.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-Dym0n5j2.js";import"./ListItemBaseTemplate-DmKob6Ye.js";import"./SuggestionItemGroup-2JFiAWR6.js";import"./ListBoxItemGroupTemplate-BOvb3JSv.js";import"./Input-C_M3LRG8.js";import"./ResponsivePopoverCommon.css-EBeNizWh.js";import"./ValueStateMessage.css-B4ysw5cr.js";import"./Suggestions.css-Dvu4kY1O.js";import"./employee-DITBey9o.js";import"./index-DrhR_CYD.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
