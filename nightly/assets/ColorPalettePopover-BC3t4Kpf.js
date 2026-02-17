import{j as o}from"./iframe-DFi9UtKE.js";import{useMDXComponents as i}from"./index-PehDt-ON.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BZiPfi5R.js";import"./Tag-DyC770Wv.js";import"./index-DRo_4cI_.js";import{C as x}from"./ControlsWithNote-BDtgiAUA.js";import{D as u}from"./DocsHeader-DL6MJPVs.js";import{F as h}from"./CommandsAndQueries-BgA_2y6P.js";import{C as n,D as r}from"./ColorPalettePopover.stories-C45noY1l.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-7gaa3djv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C2fQMAhn.js";import"./sys-enter-2-C-DHMglr.js";import"./alert-Do2a0hn1.js";import"./index-BVIBsTLM.js";import"./index-Bj7syw50.js";import"./Link-CKaRASof.js";import"./copy-BfQ0nxef.js";import"./copy-BtJq9lRd.js";import"./GitHub-Mark-BIVb8YrT.js";import"./TableOfContent-Dj-Rxe0E.js";import"./index-BlgbWjqC.js";import"./index-mz_qMVbD.js";import"./index-hjE9MH8j.js";import"./index-CgUZ8Jrz.js";import"./index-C91-M52B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-QdlayBuh.js";import"./addCustomCSSWithScoping-C-Twfd1m.js";import"./ResponsivePopoverCommon.css-CTa7xzuq.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
