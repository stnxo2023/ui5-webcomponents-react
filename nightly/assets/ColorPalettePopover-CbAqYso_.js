import{j as o}from"./iframe-DtD6gRbB.js";import{useMDXComponents as i}from"./index-BiO40HBX.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-Ck7wLHdk.js";import"./Tag-CPFNFbnr.js";import"./index-BiosTbTI.js";import{C as x}from"./ControlsWithNote-BOStzrH-.js";import{D as u}from"./DocsHeader-BXYU5Ig6.js";import{F as h}from"./CommandsAndQueries-B26crKtq.js";import{C as n,D as r}from"./ColorPalettePopover.stories-xjWnJUn2.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BiT6fwSo.js";import"./preload-helper-PPVm8Dsz.js";import"./information-uX8_TnNn.js";import"./sys-enter-2-CJJhzBhO.js";import"./alert-BmD5O1ac.js";import"./index-CDW4JUA8.js";import"./index-pV_yzmY_.js";import"./Link-cYpkkuqp.js";import"./copy-CgVw-Q6h.js";import"./copy-DKyeVOxg.js";import"./GitHub-Mark-BAF9ju05.js";import"./TableOfContent-fgADZnKc.js";import"./index-BSRohzC4.js";import"./index-CRlMy3bg.js";import"./index-391GJ7ps.js";import"./index-DCELbeIn.js";import"./index-KaeBEDf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGQO4fMp.js";import"./addCustomCSSWithScoping-Bt7xCKzu.js";import"./ResponsivePopoverCommon.css-B045Nnj_.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
