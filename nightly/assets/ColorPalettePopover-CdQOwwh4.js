import{j as o}from"./iframe-DNJyEiMc.js";import{useMDXComponents as s}from"./index-Buf0tSMZ.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-Cd1leuxf.js";import"./Tag-D8I94QaD.js";import"./index-BGa7wgQo.js";import{C as x}from"./ControlsWithNote-N22c85bk.js";import{D as u}from"./DocsHeader-DCzU-m5M.js";import{F as h}from"./Footer-DsUhWQr2.js";import"./CommandsAndQueries-Buhz4vLI.js";import"./PageNotFound-CGNJPiuA.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BxPY3u6I.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-tcaRMJQG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CKmAqDt9.js";import"./sys-enter-2-D1jYlQdI.js";import"./alert-BbM4Afj3.js";import"./index-C8jwJsjc.js";import"./index-CRk1MYZt.js";import"./Link-CHa9FW0P.js";import"./copy-DoBoCPeV.js";import"./copy-DriogBoE.js";import"./GitHub-Mark-B_5l0O_V.js";import"./TableOfContent-Cp2ISJUt.js";import"./index-DbBWaCWe.js";import"./index-DfQ2RFhn.js";import"./index-bWFHrqMY.js";import"./index-DcpLgbSq.js";import"./index-BNiXpovA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cm_sH4gX.js";import"./addCustomCSSWithScoping-QHxNEQro.js";import"./Illustrations-8c1koKlL.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-DxGEQbl-.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
