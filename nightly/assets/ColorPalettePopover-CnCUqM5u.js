import{j as o}from"./iframe-4UX9zVtN.js";import{useMDXComponents as i}from"./index-BBCkKRvO.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BFxvjNAv.js";import"./Tag-B3FvlNgH.js";import"./index-BXHIuf-D.js";import{C as x}from"./ControlsWithNote-HRuakJ4J.js";import{D as u}from"./DocsHeader-DMgRCPMn.js";import{F as h}from"./CommandsAndQueries-DudJ8lrA.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CjftP111.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-GtRhk_ZL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-WWzzOZjz.js";import"./sys-enter-2-CaiZT1Nw.js";import"./alert-G68zeMJP.js";import"./index-oGM8b9YF.js";import"./index-DctXwSyI.js";import"./Link-fA-SeXAj.js";import"./copy-C0JILoSE.js";import"./copy-Cyt5Uff4.js";import"./GitHub-Mark-CkNvDNdk.js";import"./TableOfContent-Ceb6N6LS.js";import"./index-S5ZW1bjA.js";import"./index-CXoNptYK.js";import"./index-C3GdV3vE.js";import"./index-De4g9Au_.js";import"./index-DnrxmRVZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-rUq1jEzN.js";import"./addCustomCSSWithScoping-DCDZu8w8.js";import"./ResponsivePopoverCommon.css-D8f7fYw-.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
