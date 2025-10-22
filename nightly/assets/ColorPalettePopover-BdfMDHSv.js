import{j as o}from"./iframe-BfEtcTHs.js";import{useMDXComponents as i}from"./index-CPCxp1pX.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BEk0eltt.js";import"./Tag-5zjMhKbj.js";import"./index-Cdy39dSN.js";import{C as x}from"./ControlsWithNote-BTHAdxiA.js";import{D as u}from"./DocsHeader-BBnupIsK.js";import{F as h}from"./CommandsAndQueries-XBwAul-0.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CI_A2g7D.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BLHRTeKQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXNiXlp4.js";import"./sys-enter-2-Da7fZjtE.js";import"./alert-sulwnQm9.js";import"./index-BwoaU2AB.js";import"./index-BoD67Q0d.js";import"./Link-Dx6E4Ul6.js";import"./copy-Bt8ie9UZ.js";import"./copy-CuNW8uGj.js";import"./GitHub-Mark-DfOHtkyr.js";import"./TableOfContent-BB2woaWO.js";import"./index-CpslN8bF.js";import"./index-C2AzqXEp.js";import"./index-zG-h4Dtj.js";import"./index-DZog4k2R.js";import"./index-SIE8WAww.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DzVstS1R.js";import"./addCustomCSSWithScoping-BOC9QupD.js";import"./ResponsivePopoverCommon.css-DnHFDVo1.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
