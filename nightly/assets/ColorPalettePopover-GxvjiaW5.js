import{j as o}from"./iframe-DLLHCOr5.js";import{useMDXComponents as i}from"./index-DJhuuP5S.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-D_qB0yom.js";import"./Tag-CGNpKNva.js";import"./index-Cv7FhAKP.js";import{C as x}from"./ControlsWithNote-Cwm6Fjvl.js";import{D as u}from"./DocsHeader-hvVQH4eB.js";import{F as h}from"./CommandsAndQueries-CaYUL-bi.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CgBbrOBc.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BU_YaX2q.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CmFfgInF.js";import"./sys-enter-2-DHyR85OV.js";import"./alert-CdfvMLA2.js";import"./index-CfRl_je5.js";import"./index-DrM1gAbM.js";import"./Link-8v74zIQt.js";import"./copy-CJrRsm58.js";import"./copy-Cys4niF0.js";import"./GitHub-Mark-BayhV6Ms.js";import"./TableOfContent-CRD6TcR1.js";import"./index-DWbKcn7h.js";import"./index-Da6fGSa9.js";import"./index-A4gWreS6.js";import"./index-CpOm_QTG.js";import"./index-C8Oz3tPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI75F9lq.js";import"./addCustomCSSWithScoping-B4YqD5EP.js";import"./ResponsivePopoverCommon.css-BSzQP8E5.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
`,o.jsx(u,{of:n,since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:r}),`
`,o.jsx(e.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(e.p,{children:["You can open and close the ",o.jsx(e.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(e.code,{children:"open"})," and ",o.jsx(e.code,{children:"opener"})," prop."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(l,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(d,{of:p}),`
`,o.jsx(h,{})]})}function Q(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(s,{...t})}):s(t)}export{Q as default};
