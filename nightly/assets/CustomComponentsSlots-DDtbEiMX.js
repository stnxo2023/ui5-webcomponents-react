import{j as t,Y as r}from"./iframe-bao9qRDH.js";import{useMDXComponents as s}from"./index-D58rFl3P.js";import{M as c}from"./blocks-uUz_WETG.js";import{B as i}from"./index-Dw-72_Kh.js";import"./Tag-DnPLRNDs.js";import{M as a}from"./index-B3NnTsyp.js";import"./CommandsAndQueries-Bg8yb33a.js";import"./copy-jfQcw6pd.js";import{F as p}from"./Footer-WVPZdxr3.js";import"./PageNotFound-sLpD2w2i.js";import"./preload-helper-PPVm8Dsz.js";import"./Bar-B24FVWKu.js";import"./information-DbPZ0LCP.js";import"./sys-enter-2-Ch2YqKTp.js";import"./alert-CeM8CijD.js";import"./Link-ZWtIcHaY.js";import"./index-BNO-qx4N.js";import"./index-Dl2g3tcZ.js";import"./index-DOBS9bga.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L1xKvRVU.js";import"./addCustomCSSWithScoping-D0v__xyi.js";import"./index-DPEMBgxp.js";import"./index-5JMcfQSp.js";import"./index-CwfO5OAT.js";import"./index-D32QYjx2.js";import"./Illustrations-BL_lLuOy.js";import"./i18n-defaults-CFWtSmu6.js";const d=()=>t.jsx("div",{children:"Start"}),m=()=>t.jsx(r,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(d,{}),endContent:t.jsx(m,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=o=>t.jsx("div",{slot:o.slot,children:"Start"}),u=o=>t.jsx(r,{slot:o.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function e(o){const n={code:"code",h1:"h1",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Handling Slots"}),`
`,t.jsx(n.h1,{id:"adding-custom-react-components-to-slots",children:"Adding custom React components to slots"}),`
`,t.jsx(a,{hideCloseButton:!0,children:"Using a custom React component still requires the expected web component(s) to be rendered."}),`
`,t.jsxs(n.p,{children:["With our wrapper we provide an easy way to consume the ",t.jsx(n.code,{children:"slots"})," of the UI5 Web Components by attaching them to a ",t.jsx(n.code,{children:"prop"}),`.
In most cases you don't have to take anything into account, and the props can be used in a typical React way. However, there is an exception with custom components:`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-jsx",children:`const BarStart = () => {
  return <div>Start</div>;
};
const BarEnd = () => {
  return <Button>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(l,{}),`
`,t.jsxs(n.p,{children:[`As you can see, both custom components are not displayed in the right place.
Our wrapper does add the `,t.jsx(n.code,{children:"slot"})," prop to the custom component, but the most outer HTML-Element/component (e.g. ",t.jsx(n.code,{children:"<div>Start</div>"}),") does not accept it and therefore cannot use it."]}),`
`,t.jsxs(n.p,{children:["To fix this the ",t.jsx(n.code,{children:"slot"})," prop must also be passed to the outer element of the component:"]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-jsx",children:`const BarStart = (props) => {
  return <div slot={props.slot}>Start</div>;
};
const BarEnd = (props) => {
  return <Button slot={props.slot}>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,t.jsxs(n.p,{children:["Now the ",t.jsx(n.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(x,{}),`
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function O(o={}){const{wrapper:n}={...s(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(e,{...o})}):e(o)}export{O as default};
