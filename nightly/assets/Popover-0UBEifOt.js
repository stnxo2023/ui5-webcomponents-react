import{j as o}from"./iframe-DLLHCOr5.js";import{useMDXComponents as s}from"./index-DJhuuP5S.js";import{M as i,C as m}from"./blocks-D_qB0yom.js";import"./Tag-CGNpKNva.js";import"./index-Cv7FhAKP.js";import{C as c}from"./ControlsWithNote-Cwm6Fjvl.js";import{D as a}from"./DocsHeader-hvVQH4eB.js";import{F as d}from"./CommandsAndQueries-CaYUL-bi.js";import{C as r,D as t}from"./Popover.stories-DxdcFSop.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CmFfgInF.js";import"./sys-enter-2-DHyR85OV.js";import"./alert-CdfvMLA2.js";import"./index-CfRl_je5.js";import"./index-DrM1gAbM.js";import"./Link-8v74zIQt.js";import"./copy-CJrRsm58.js";import"./copy-Cys4niF0.js";import"./GitHub-Mark-BayhV6Ms.js";import"./TableOfContent-CRD6TcR1.js";import"./index-DWbKcn7h.js";import"./index-Da6fGSa9.js";import"./index-A4gWreS6.js";import"./index-CpOm_QTG.js";import"./index-C8Oz3tPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI75F9lq.js";import"./addCustomCSSWithScoping-B4YqD5EP.js";import"./settings-DMO8138H.js";import"./index-BSuhLTnR.js";import"./index-pyj4fbNH.js";import"./ListItemStandard-CNuJB7qv.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function A(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{A as default};
