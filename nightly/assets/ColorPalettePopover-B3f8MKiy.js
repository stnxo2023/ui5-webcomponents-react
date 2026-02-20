import{j as o}from"./iframe-UvPIdInY.js";import{useMDXComponents as i}from"./index-C_wnFVs3.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-D0ZGQgrL.js";import"./Tag-IR_ETKFS.js";import"./index-D9ZFZ6F-.js";import{C as x}from"./ControlsWithNote-C05KfOzz.js";import{D as u}from"./DocsHeader-CkhoLqPC.js";import{F as h}from"./CommandsAndQueries-aWAd2RXn.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DQY1Oyt5.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BJvQBQum.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BPTpUfW-.js";import"./sys-enter-2-CWNypIDi.js";import"./alert-CSWOQ1yD.js";import"./index-D_al-J9d.js";import"./index-mim0XNOQ.js";import"./Link-BLS11L9W.js";import"./copy-D00_ipqs.js";import"./copy-BE3LAxqE.js";import"./GitHub-Mark-NKmIjtfb.js";import"./TableOfContent-C3sVY331.js";import"./index-O5JzLw5N.js";import"./index-Ba89z5vW.js";import"./index-B0iNMIwQ.js";import"./index-CXKBVYRd.js";import"./index-Bvo9-fQy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNxf-Cq6.js";import"./addCustomCSSWithScoping-7EyTrlnL.js";import"./ResponsivePopoverCommon.css-BoaZ2bBu.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
