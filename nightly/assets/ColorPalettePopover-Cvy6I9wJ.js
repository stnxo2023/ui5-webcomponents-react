import{j as o}from"./iframe-D2RmpAtO.js";import{useMDXComponents as i}from"./index-DiCnj7u5.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-B4Ev-YXh.js";import"./Tag-BWvTCWNx.js";import"./index-chYDxilS.js";import{C as x}from"./ControlsWithNote-CSf0wYTV.js";import{D as u}from"./DocsHeader-DJpn50qF.js";import{F as h}from"./CommandsAndQueries-DvQ8BP-Z.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DYo3BqoP.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DrIh_4tw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DyTRt78C.js";import"./sys-enter-2-BwNIaTDW.js";import"./alert-DiSc05uc.js";import"./index-BieATUAG.js";import"./index-i343fVly.js";import"./Link-BzydKqDb.js";import"./copy-CxQnFVLV.js";import"./copy-BW6gA-qB.js";import"./GitHub-Mark-D6Mxs1bw.js";import"./TableOfContent-wa27kzYJ.js";import"./index-BmyeAcwI.js";import"./index-D_sGGZyZ.js";import"./index-Cm3TMOjS.js";import"./index-BeHBKa6s.js";import"./index-B2C__dDn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-fsmSjvJs.js";import"./addCustomCSSWithScoping-BvD5X_dz.js";import"./ResponsivePopoverCommon.css-Bu5Qc2tF.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
