import{j as o}from"./iframe-vvFzJQsm.js";import{useMDXComponents as i}from"./index-mWjr9AFM.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-COsbTFiZ.js";import"./Tag-CSxd9Vy9.js";import"./index-CdSwAr1T.js";import{C as x}from"./ControlsWithNote-B3kpKevA.js";import{D as u}from"./DocsHeader-BOolGGs1.js";import{F as h}from"./CommandsAndQueries-8pSfE60h.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BoYSvQuQ.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-iUklSugQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CWYm1ZbR.js";import"./sys-enter-2-kpgYGCQC.js";import"./alert-Ba0jfTcX.js";import"./index-Ck5nT1M9.js";import"./index-keBzjxCB.js";import"./Link-hAW6WURd.js";import"./copy-Bydgl4d_.js";import"./copy-qs9aVbQg.js";import"./GitHub-Mark-BtjnqSxc.js";import"./TableOfContent-B5MILnxa.js";import"./index-FWmQFiva.js";import"./index-DSMhm57i.js";import"./index-CYjg-3sd.js";import"./index-bfJ02BDw.js";import"./index-BBX1dqjw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BmD8Hqdt.js";import"./addCustomCSSWithScoping-Px-H63QY.js";import"./ResponsivePopoverCommon.css-Baj0Epwl.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
