import{j as o}from"./iframe-rBa3eszb.js";import{useMDXComponents as i}from"./index-ywplRXEz.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-g4en69Tv.js";import"./Tag-Ub-ab5wh.js";import"./index-CpHbQUX7.js";import{C as x}from"./ControlsWithNote-CNfoTTea.js";import{D as u}from"./DocsHeader-BhvQ3ZFL.js";import{F as h}from"./CommandsAndQueries-CwUQeNe6.js";import{C as n,D as r}from"./ColorPalettePopover.stories-UURgEAa-.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BEnn9gM5.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Do12jBFt.js";import"./sys-enter-2-Gg5Ob7c_.js";import"./alert-Cl85dmlC.js";import"./index-Dlmk5mT2.js";import"./index--W9c_yZX.js";import"./Link-Dq-0iXqs.js";import"./copy-D-tNIjzC.js";import"./copy-DpAiYmLC.js";import"./GitHub-Mark-Dr6vZ266.js";import"./TableOfContent-BZvuIbfz.js";import"./index-_uK4ftNi.js";import"./index-dvt-GDfC.js";import"./index-SiJKqGQM.js";import"./index-Bt8TlIkO.js";import"./index-CCm0OAPD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-cGFZau.js";import"./addCustomCSSWithScoping-BFTmBMm0.js";import"./ResponsivePopoverCommon.css-CCI8LaeI.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
