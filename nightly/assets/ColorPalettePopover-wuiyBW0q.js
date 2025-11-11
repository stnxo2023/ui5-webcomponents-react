import{j as o}from"./iframe-Di0CnA8S.js";import{useMDXComponents as i}from"./index-D1yNQJed.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CQfV0luP.js";import"./Tag-YM6QkIty.js";import"./index-Cv974V6E.js";import{C as x}from"./ControlsWithNote-Byoi2WIS.js";import{D as u}from"./DocsHeader-B2m9S15f.js";import{F as h}from"./CommandsAndQueries-zSui8mFJ.js";import{C as n,D as r}from"./ColorPalettePopover.stories-D2-zjhmI.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BzACb7Nt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DzISr5a2.js";import"./sys-enter-2-Vd3zyEtx.js";import"./alert-DaK0qpmR.js";import"./index-C4vcrMlE.js";import"./index-CX_Pkcfg.js";import"./Link-WIuadCnC.js";import"./copy-DZxVjMt2.js";import"./copy-BnyBSvmF.js";import"./GitHub-Mark-BfLU5nBo.js";import"./TableOfContent-CaAMmFRO.js";import"./index-Bkm6KJyR.js";import"./index-FrAwh-uI.js";import"./index-Bms_gXSs.js";import"./index-DEJJ6ZVN.js";import"./index-DChMCwxZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BL09SrHJ.js";import"./addCustomCSSWithScoping-D9ak18Ev.js";import"./ResponsivePopoverCommon.css--b7te08F.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
