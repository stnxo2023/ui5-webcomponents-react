import{j as e,E as i}from"./iframe-D-7Wdns9.js";import{useMDXComponents as d}from"./index-DvD8yUkt.js";import{A as s}from"./ArgTypesWithNote-BOf4nZ7D.js";import{C as u}from"./ControlsWithNote-CKX0mdVN.js";import{D as h}from"./DocsHeader-BL48IkRq.js";import{F as x}from"./Footer-M_QXWpzq.js";import"./CommandsAndQueries-DtEJSw4R.js";import"./PageNotFound-C1UEztRs.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-DbRPcZc3.js";import{S as m,a as l}from"./index-B899Brbg.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-xmnZqj7W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Be6zsFxp.js";import"./information-DJAFTTyQ.js";import"./sys-enter-2-CY8szrdt.js";import"./alert-B0l8ygN-.js";import"./Tag-CnF9nKkB.js";import"./index-jYQjsDyG.js";import"./index-IYXWglY5.js";import"./Link-B-zN_JAi.js";import"./copy-CBdiiutr.js";import"./copy-eIAIBU-7.js";import"./GitHub-Mark-BCbihiBb.js";import"./TableOfContent-CHSYHSBj.js";import"./index-BwYsEJM0.js";import"./index-D18p9Zu8.js";import"./index-DvVefbTP.js";import"./index-Bj1jARrT.js";import"./index-Xz-lwjQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyP71rSn.js";import"./addCustomCSSWithScoping-DvzvYvm_.js";import"./Illustrations-BvGUWHq-.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-CoXh7lo4.js";import"./ListItemBaseTemplate-BNrzSWz7.js";import"./SuggestionItemGroup-jVwhovmJ.js";import"./ListBoxItemGroupTemplate-UuY21VMH.js";import"./Input-Cp96Jnd7.js";import"./ResponsivePopoverCommon.css-Sl7osct5.js";import"./ValueStateMessage.css-gHfjldlM.js";import"./Suggestions.css-BDE0tH2L.js";import"./employee-Q2_9enJC.js";import"./index-H-O4wn2B.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
