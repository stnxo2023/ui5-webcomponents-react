import{j as o}from"./iframe-DeMwMmGx.js";import{useMDXComponents as i}from"./index-CWwj9Mnl.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-8D0p5thu.js";import"./Tag-CJlss1uo.js";import"./index-fzrObdgv.js";import{C as x}from"./ControlsWithNote--Y171OS7.js";import{D as u}from"./DocsHeader-1qlZPebp.js";import{F as h}from"./CommandsAndQueries-BBLmRDsb.js";import{C as n,D as r}from"./ColorPalettePopover.stories-D_Lm7g48.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-EnR5ka23.js";import"./preload-helper-PPVm8Dsz.js";import"./information-IgIWD04z.js";import"./sys-enter-2-B6dBkbbN.js";import"./alert-DXbxKJCI.js";import"./index-DwA6oYWp.js";import"./index-CqRETC9D.js";import"./Link-DuK3KTb6.js";import"./copy-D4ttHYhx.js";import"./copy-BgdiHhBm.js";import"./GitHub-Mark-BoPYVYSH.js";import"./TableOfContent-C7YYhWI1.js";import"./index-DaGO4DII.js";import"./index-CvQAJVIm.js";import"./index-x-nhhmJ1.js";import"./index-QSmrzR-p.js";import"./index-C3DV1EGu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ0_IZyX.js";import"./addCustomCSSWithScoping-DmQSYZoL.js";import"./ResponsivePopoverCommon.css-Nq-6b_ms.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
