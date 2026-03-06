import{j as o}from"./iframe-E6MBpCAt.js";import{useMDXComponents as s}from"./index-BRlgPkCG.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-WvceCUw-.js";import"./Tag-QOlCM1ZS.js";import"./index-BJtwwTA3.js";import{C as x}from"./ControlsWithNote-Ea5pYw4K.js";import{D as u}from"./DocsHeader-Bs9YoZo4.js";import{F as h}from"./Footer-BLsFxTJ-.js";import"./CommandsAndQueries-8ny61uxe.js";import"./PageNotFound-yO0YjSZG.js";import{C as n,D as r}from"./ColorPalettePopover.stories-yJqqNk4D.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CNKASAa7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CRaf149E.js";import"./sys-enter-2-61rHxTWm.js";import"./alert-CCfxXDIv.js";import"./index-Cae4RJ4g.js";import"./index-D9THgfPW.js";import"./Link-BKpa2-tj.js";import"./copy-bVD5Enlh.js";import"./copy-fO140460.js";import"./GitHub-Mark-CK8hZxZv.js";import"./TableOfContent-ClshfEpL.js";import"./index-B2yJC31G.js";import"./index-Bbo3k75A.js";import"./index-CzOa4uz9.js";import"./index-D8EadMTD.js";import"./index-C4VaG2ve.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AugRixR5.js";import"./addCustomCSSWithScoping-B5scap8C.js";import"./Illustrations-AQfBdOwC.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-DTaErEQ_.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
`,o.jsx(h,{})]})}function $(t={}){const{wrapper:e}={...s(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{$ as default};
