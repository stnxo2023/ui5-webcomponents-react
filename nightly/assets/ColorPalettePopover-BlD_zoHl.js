import{j as o}from"./iframe-CB_qmYI8.js";import{useMDXComponents as i}from"./index-CUbKt2T4.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DzH1842d.js";import"./Tag-BYvfvCLi.js";import"./index-BfAPJluR.js";import{C as x}from"./ControlsWithNote-C2ZegKsl.js";import{D as u}from"./DocsHeader-Cjs_SKtf.js";import{F as h}from"./CommandsAndQueries-HFp-4-55.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DlUGxb3e.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-C5F2-lEv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CRpELSoZ.js";import"./sys-enter-2-DeQtcYtY.js";import"./alert-Bc8RvQjV.js";import"./index-03LyQe5H.js";import"./index-DE9gqn8Y.js";import"./Link-BRHRm_Z2.js";import"./copy-Cml5DxfC.js";import"./copy-DF2Z1I-X.js";import"./GitHub-Mark-B8j7QlA7.js";import"./TableOfContent-ANMeDUHZ.js";import"./index-R89IEGRw.js";import"./index-SxWu56C4.js";import"./index-C0flI_9Q.js";import"./index-At4nCxiD.js";import"./index-6WmsPmX0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClKIXNm7.js";import"./addCustomCSSWithScoping-9v1tewFq.js";import"./ResponsivePopoverCommon.css-DeWNHY7M.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
