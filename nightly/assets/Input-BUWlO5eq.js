import{j as e,A as i}from"./iframe-BXb_n64_.js";import{u as d,M as u,C as r,a as h,D as s}from"./blocks-9VP231tA.js";import{A as p}from"./ArgTypesWithNote-Dvv6L-Gq.js";import{C as x}from"./ControlsWithNote-D6w6Kb-X.js";import{D as j}from"./DocsHeader-BZ77PaiO.js";import{F as f}from"./Footer-DPPwB2I6.js";import"./CommandsAndQueries-BI-RA2OZ.js";import"./PageNotFound-CZrojxwO.js";import{S as g}from"./SubcomponentsSection-BVy4lpQe.js";import{S as m,a as l}from"./index-Bh4CVr0J.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-B7QyvDzV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BL83g4Fz.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./Tag-CRNARXt6.js";import"./index-BNBy1IQK.js";import"./index-BD_xT1Nj.js";import"./Link-BUcKjx9R.js";import"./copy-CsgZl58a.js";import"./copy-BBKTKpbi.js";import"./GitHub-Mark-BVBi5bkL.js";import"./TableOfContent-CJDX4QJ8.js";import"./index-BSoVaSRp.js";import"./index-DqAHmx0d.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-CuJ_PC3L.js";import"./ListItemBaseTemplate-CL-9zx8x.js";import"./SuggestionItemGroup-C9ZIIwG5.js";import"./ListBoxItemGroupTemplate-5-RLXPsG.js";import"./Input-B1pV19yo.js";import"./ResponsivePopoverCommon.css-DMiEES2t.js";import"./ValueStateMessage.css-YCjELpnO.js";import"./Suggestions.css-BZAnlsRN.js";import"./employee-CSW_25HQ.js";import"./index-BGaKo2kM.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:n}),`
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
