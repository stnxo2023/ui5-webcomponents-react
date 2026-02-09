import{j as o}from"./iframe-DT7hQ3AG.js";import{useMDXComponents as i}from"./index-DTdIoXIV.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-JRrvULZW.js";import"./Tag-DiLaQDn-.js";import"./index-B-uTHhu7.js";import{C as x}from"./ControlsWithNote-BFgEsEfk.js";import{D as u}from"./DocsHeader-B_ujQDrR.js";import{F as h}from"./CommandsAndQueries-yjo1_LDl.js";import{C as n,D as r}from"./ColorPalettePopover.stories-ifusJW44.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DKmj7HV-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BTX-CwCK.js";import"./sys-enter-2-Ckqh2Zib.js";import"./alert-j2_xvgwV.js";import"./index-BRw-bjcq.js";import"./index-DnmZF6f8.js";import"./Link-G5lQtbW1.js";import"./copy-CtsTghNs.js";import"./copy-BZt3PDtc.js";import"./GitHub-Mark-1fr5VBAx.js";import"./TableOfContent-B-2ElRj_.js";import"./index-CddBOV7O.js";import"./index-C77H1xG_.js";import"./index-DOozC4VO.js";import"./index-RcOcV3SW.js";import"./index-BT5-01iU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVNusK2J.js";import"./addCustomCSSWithScoping-BEpn4Gqh.js";import"./ResponsivePopoverCommon.css-K8_QNK7m.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
