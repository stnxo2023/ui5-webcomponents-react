import{j as o}from"./iframe-eEgnsybz.js";import{useMDXComponents as i}from"./index-KUh3EncO.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-C6o1VobD.js";import"./Tag-CyCgeEFX.js";import"./index-DlBhGBWU.js";import{C as x}from"./ControlsWithNote-eCm13KUA.js";import{D as u}from"./DocsHeader-BfTikCOy.js";import{F as h}from"./CommandsAndQueries-Bkg2fbFD.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CHHdbtl9.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-plRUr4DN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CKacNM7A.js";import"./sys-enter-2-D0fhmdQp.js";import"./alert-CxkpN3m7.js";import"./index-Pa5s-fex.js";import"./index-0PjuM5S8.js";import"./Link-BuGrrtP2.js";import"./copy-z_bq9S7h.js";import"./copy-7FG8PsWo.js";import"./GitHub-Mark-BfP3Ty1_.js";import"./TableOfContent-DXjRwDfa.js";import"./index-D9oALoTs.js";import"./index-BwSVcTHk.js";import"./index-yhFX9aug.js";import"./index-Dc3QGU-g.js";import"./index-CGhTEkOT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CH2VPx4y.js";import"./addCustomCSSWithScoping-DKRk5X62.js";import"./ResponsivePopoverCommon.css-CM05b5HY.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
