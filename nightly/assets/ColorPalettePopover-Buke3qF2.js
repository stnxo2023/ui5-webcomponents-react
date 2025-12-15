import{j as o}from"./iframe-CMRYeg3m.js";import{useMDXComponents as i}from"./index-d3aogLFm.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-B--XNN4Z.js";import"./Tag-DLJpwqrU.js";import"./index-X7c2uI6J.js";import{C as x}from"./ControlsWithNote-CXzfRtXZ.js";import{D as u}from"./DocsHeader-C1Kp8EXI.js";import{F as h}from"./CommandsAndQueries-DpsRc0ye.js";import{C as n,D as r}from"./ColorPalettePopover.stories-MPQUclXx.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CLkl0at7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-2R4wAWn8.js";import"./sys-enter-2-h25AZJAc.js";import"./alert-EuMgWuer.js";import"./index-TGfnZuTz.js";import"./index-csz7EJl3.js";import"./Link-Bxvjqypp.js";import"./copy-BaB0kE-C.js";import"./copy-O4x8gwVx.js";import"./GitHub-Mark-DMIALRWG.js";import"./TableOfContent-WwOK0Hwd.js";import"./index-Dt6RwhRx.js";import"./index-BVsKPF1I.js";import"./index-PIXQ40x8.js";import"./index-Ca5PVHn4.js";import"./index-DVEpH7N4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-f1AMIobt.js";import"./addCustomCSSWithScoping-D9ZK4KgK.js";import"./ResponsivePopoverCommon.css-CqBO6fZ3.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
